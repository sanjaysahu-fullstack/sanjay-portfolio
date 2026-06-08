import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface LoaderProps {
  onLoadingComplete: () => void;
}

export default function Loader({ onLoadingComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onLoadingComplete, 400);
          return 100;
        }
        const step = Math.floor(Math.random() * 12) + 5;
        return Math.min(100, prev + step);
      });
    }, 85);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 z-[100] bg-[#070513] flex flex-col items-center justify-center p-6 select-none overflow-hidden">
      {/* Background radial glowing ambient spots */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-600/10 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-cyan-600/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-xs w-full space-y-5 relative z-10">
        {/* Name with elegant colorful letter spacing and gradient */}
        <div className="space-y-2 text-center">
          <h1 className="text-2xl font-bold font-sans bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent tracking-[0.25em] uppercase">
            SANJAY SAHU
          </h1>
          <p className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest font-semibold flex items-center justify-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            MERN STACK ARCHITECT
          </p>
        </div>

        {/* Minimal Progress Line with custom gradient */}
        <div className="space-y-2.5 pt-2">
          <div className="w-full h-[3px] bg-zinc-950 rounded-full overflow-hidden border border-zinc-900">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: 'easeOut' }}
              className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400"
            />
          </div>
          <div className="flex justify-between text-[9px] font-mono">
            <span className="text-purple-400 tracking-wider">CONFIGURING CORPOREAL ENGINE</span>
            <span className="text-cyan-400 font-bold">{progress}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
