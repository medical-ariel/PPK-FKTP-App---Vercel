export const config = { runtime: 'edge' };

const SYSTEM_PROMPT = `Kamu adalah dr. FKTP AI, asisten klinis berbasis Panduan Praktik Klinis (PPK) untuk dokter layanan primer (FKTP) di Indonesia.

Tugas utamamu:
- Membantu dokter memahami PPK penyakit dalam konteks FKTP
- Memberikan panduan tatalaksana berbasis bukti sesuai standar Permenkes
- Menjelaskan kriteria rujukan, ICD-10, dan ICPC-2
- Menjawab pertanyaan farmakologi dosis dan interaksi obat
- Membantu interpretasi hasil pemeriksaan penunjang

Gaya komunikasi:
- Gunakan Bahasa Indonesia medis yang jelas dan terstruktur
- Format jawaban dengan heading jika perlu (gunakan **bold** dan bullet points)
- Sertakan level kompetensi (SKDI) bila relevan
- Selalu ingatkan untuk judgment klinis tetap di tangan dokter
- Jangan mendiagnosis pasien secara langsung — bantu dokter berpikir kritis

Batasan:
- Ini bukan aplikasi untuk pasien, hanya untuk tenaga medis
- Untuk kasus gawat darurat, selalu arahkan ke protokol ATLS/ACLS
- Jawaban berdasarkan PPK FKTP terbaru dan evidenced-based medicine`;

export default async function handler(req: Request) {
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    });
  }

  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const { prompt, diseaseName, diseaseICD, conversationHistory } = await req.json();

    if (!prompt?.trim()) {
      return new Response(JSON.stringify({ error: 'Prompt tidak boleh kosong.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Build context-aware system prompt
    let contextualSystem = SYSTEM_PROMPT;
    if (diseaseName) {
      contextualSystem += `\n\nKonteks saat ini: Pengguna sedang melihat halaman PPK "${diseaseName}"${diseaseICD ? ` (ICD-10: ${diseaseICD})` : ''}. Prioritaskan jawaban terkait penyakit ini.`;
    }

    // Build contents dengan conversation history
    const contents: Array<{ role: string; parts: Array<{ text: string }> }> = [];

    if (conversationHistory?.length) {
      for (const msg of conversationHistory) {
        contents.push({
          role: msg.role === 'assistant' ? 'model' : 'user',
          parts: [{ text: msg.content }],
        });
      }
    }

    contents.push({ role: 'user', parts: [{ text: prompt }] });

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          system_instruction: { parts: [{ text: contextualSystem }] },
          contents,
          generationConfig: {
            temperature: 0.4,
            maxOutputTokens: 2048,
            topP: 0.8,
            topK: 40,
          },
          safetySettings: [
            { category: 'HARM_CATEGORY_HARASSMENT', threshold: 'BLOCK_ONLY_HIGH' },
            { category: 'HARM_CATEGORY_HATE_SPEECH', threshold: 'BLOCK_ONLY_HIGH' },
            { category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT', threshold: 'BLOCK_ONLY_HIGH' },
            { category: 'HARM_CATEGORY_DANGEROUS_CONTENT', threshold: 'BLOCK_ONLY_HIGH' },
          ],
        }),
      }
    );

    if (!response.ok) {
      const errBody = await response.text();
      console.error('Gemini API error:', response.status, errBody);
      return new Response(
        JSON.stringify({ error: `Gemini API error: ${response.status}` }),
        { status: 502, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const data = await response.json();
    const text =
      data.candidates?.[0]?.content?.parts?.[0]?.text ||
      data.candidates?.[0]?.output ||
      'Tidak ada respons dari AI.';

    const finishReason = data.candidates?.[0]?.finishReason;
    const blocked = finishReason === 'SAFETY' || finishReason === 'RECITATION';

    return new Response(
      JSON.stringify({
        text,
        blocked,
        usage: data.usageMetadata,
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'no-store',
        },
      }
    );
  } catch (error) {
    console.error('Handler error:', error);
    return new Response(
      JSON.stringify({ error: 'Gagal terhubung ke AI. Coba lagi.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
