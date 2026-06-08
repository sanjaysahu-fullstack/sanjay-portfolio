import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SKILLS } from '../data';
import { Skill } from '../types';
import { 
  FileCode, Layers, Cpu, Grid, Atom, Server, Activity, Database, 
  GitBranch, Github, Terminal, Zap, Link2, Smartphone, Bug, Palette, Code,
  Sparkles
} from 'lucide-react';

interface SkillOrbitProps {
  theme?: string;
}

// Icon Map with corresponding Lucide icons representing technology logos
const IconMap: Record<string, React.ComponentType<{ className?: string; style?: React.CSSProperties }>> = {
  FileCode,
  Layers,
  Cpu,
  Grid,
  Atom,
  Server,
  Activity,
  Database,
  GitBranch,
  Github,
  Terminal,
  Zap,
  Link2,
  Smartphone,
  Bug,
  Palette
};

export default function SkillOrbit({ theme = 'dark' }: SkillOrbitProps) {
  const isLight = theme === 'light';
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Frontend' | 'Backend' | 'Database' | 'Tools' | 'Other'>('All');

  const categories = ['All', 'Frontend', 'Backend', 'Database', 'Tools', 'Other'] as const;

  const filteredSkills = selectedCategory === 'All' 
    ? SKILLS 
    : SKILLS.filter(s => s.category === selectedCategory);

  // Helper function to convert Hex color to Tailwind RGB values for background translucent glow
  const hexToRgb = (hex: string) => {
    // Remove hash if exists
    const cleanedHex = hex.replace('#', '');
    if (cleanedHex.length === 3) {
      const r = parseInt(cleanedHex[0] + cleanedHex[0], 16);
      const g = parseInt(cleanedHex[1] + cleanedHex[1], 16);
      const b = parseInt(cleanedHex[2] + cleanedHex[2], 16);
      return `${r}, ${g}, ${b}`;
    } else if (cleanedHex.length === 6) {
      const r = parseInt(cleanedHex.substring(0, 2), 16);
      const g = parseInt(cleanedHex.substring(2, 4), 16);
      const b = parseInt(cleanedHex.substring(4, 6), 16);
      return `${r}, ${g}, ${b}`;
    }
    return '139, 92, 246'; // Default purple
  };

  return (
    <div className="space-y-6">
      {/* Dynamic Filter Categories Bar */}
      <div className={`flex flex-col sm:flex-row justify-between items-start sm:items-center pb-4 border-b gap-4 ${
        isLight ? 'border-slate-200' : 'border-purple-950/20'
      }`}>
        <div className="flex flex-wrap gap-1 max-w-full">
          {categories.map((cat) => (
            <button
              key={cat}
              id={`skill-cat-${cat}`}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 text-xs font-mono rounded-lg transition-all relative cursor-pointer select-none font-semibold ${
                selectedCategory === cat
                  ? 'text-white bg-gradient-to-r from-purple-600 to-pink-500 shadow-[0_4px_12px_rgba(139,92,246,0.3)]'
                  : (isLight 
                      ? 'text-slate-500 hover:text-purple-600 hover:bg-slate-100' 
                      : 'text-zinc-400 hover:text-cyan-400 hover:bg-purple-950/20')
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className={`text-[10px] sm:text-xs font-mono px-3 py-1 border rounded-full flex items-center gap-1.5 ${
          isLight ? 'bg-purple-50/50 border-purple-100 text-purple-700' : 'bg-purple-950/40 border-purple-500/20 text-pink-300'
        }`}>
          <Sparkles className="w-3.5 h-3.5 animate-pulse" />
          <span>Active Technical Stack Items ({filteredSkills.length})</span>
        </div>
      </div>

      {/* Main Square Container Grid Layout */}
      <motion.div 
        layout
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4"
      >
        <AnimatePresence mode="popLayout">
          {filteredSkills.map((skill: Skill) => {
            const IconComponent = IconMap[skill.iconName] || Code;
            const glowRgb = hexToRgb(skill.glowingColor);

            return (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                style={{
                  '--glow-color': skill.glowingColor,
                  '--glow-rgb': glowRgb,
                } as React.CSSProperties}
                className={`group relative aspect-square p-5 rounded-2xl border flex flex-col justify-between items-center text-center transition-all duration-300 overflow-hidden ${
                  isLight 
                    ? 'bg-white border-slate-205 shadow-[0_8px_20px_rgba(0,0,0,0.02)] hover:border-[var(--glow-color)] hover:shadow-[0_15px_30px_rgba(var(--glow-rgb),0.12)]' 
                    : 'bg-[#090818]/65 border-purple-950/30 hover:border-[var(--glow-color)] hover:shadow-[0_0_20px_rgba(var(--glow-rgb),0.25)]'
                }`}
              >
                {/* Glowing subtle back-shadow layer */}
                <div 
                  className="absolute -top-10 -right-10 w-24 h-24 rounded-full blur-[40px] opacity-10 group-hover:opacity-30 transition-all pointer-events-none"
                  style={{ backgroundColor: skill.glowingColor }}
                />

                {/* Card Top: Level Indicator Tag */}
                <div className="w-full flex justify-end items-center mb-1">
                  <span 
                    className="text-[9px] font-mono font-black tracking-tighter px-1.5 py-0.5 rounded"
                    style={{ 
                      color: skill.glowingColor,
                      backgroundColor: isLight ? `rgba(${glowRgb}, 0.08)` : `rgba(${glowRgb}, 0.15)`
                    }}
                  >
                    {skill.level}%
                  </span>
                </div>

                {/* Card Center: Dynamic Logo/Icon */}
                <div className="flex flex-col items-center justify-center flex-1">
                  <div 
                    className="p-3.5 rounded-xl border flex items-center justify-center transition-all duration-300 shadow-sm relative group-hover:scale-105"
                    style={{
                      borderColor: `rgba(${glowRgb}, 0.35)`,
                      color: skill.glowingColor,
                      backgroundColor: isLight ? `rgba(${glowRgb}, 0.04)` : `rgba(${glowRgb}, 0.1)`
                    }}
                  >
                    <IconComponent className="w-8 h-8 transition-transform duration-500 group-hover:rotate-12" />
                  </div>
                </div>

                {/* Card Bottom: Text Details and Inline Progress Bar */}
                <div className="w-full space-y-2 mt-auto">
                  <div className="space-y-0.5">
                    <h3 className={`font-bold text-xs sm:text-sm tracking-tight truncate leading-tight ${
                      isLight ? 'text-slate-800' : 'text-white'
                    }`}>
                      {skill.name}
                    </h3>
                    <span className={`text-[8px] font-mono tracking-widest block uppercase ${
                      isLight ? 'text-slate-400 group-hover:text-purple-600' : 'text-zinc-500 group-hover:text-pink-400'
                    }`}>
                      {skill.category}
                    </span>
                  </div>

                  {/* Inline visual completion bar */}
                  <div className={`w-full h-1 overflow-hidden rounded-full ${
                    isLight ? 'bg-slate-100' : 'bg-black/40'
                  }`}>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      className="h-full rounded-full"
                      style={{ backgroundColor: skill.glowingColor }}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
