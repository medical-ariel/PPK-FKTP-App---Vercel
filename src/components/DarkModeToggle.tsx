import { Moon, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface Props {
  isDark: boolean;
  toggle: () => void;
  size?: 'sm' | 'md';
}

export function DarkModeToggle({ isDark, toggle, size = 'md' }: Props) {
  const dim = size === 'sm' ? 'h-8 w-8' : 'h-9 w-9';
  const iconSize = size === 'sm' ? 15 : 17;

  return (
    <button
      onClick={toggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={`relative ${dim} rounded-full flex items-center justify-center
        bg-slate-100 hover:bg-slate-200
        dark:bg-slate-700 dark:hover:bg-slate-600
        transition-colors duration-200 shrink-0`}
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.span key="moon"
            initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
            animate={{ rotate: 0,   opacity: 1, scale: 1   }}
            exit={{    rotate:  90, opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.18 }}
            className="absolute flex items-center justify-center"
          >
            <Moon size={iconSize} className="text-sky-400" />
          </motion.span>
        ) : (
          <motion.span key="sun"
            initial={{ rotate:  90, opacity: 0, scale: 0.5 }}
            animate={{ rotate: 0,   opacity: 1, scale: 1   }}
            exit={{    rotate: -90, opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.18 }}
            className="absolute flex items-center justify-center"
          >
            <Sun size={iconSize} className="text-amber-500" />
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}
