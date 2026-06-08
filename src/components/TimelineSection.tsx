import { motion } from 'motion/react';
import { EXPERIENCES, EDUCATIONS } from '../data';
import { Briefcase, GraduationCap, Calendar, Award, Building, Sparkles } from 'lucide-react';

interface TimelineSectionProps {
  theme?: 'dark' | 'light';
}

export default function TimelineSection({ theme = 'dark' }: TimelineSectionProps) {
  const isLight = theme === 'light';
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-4 text-left">
      
      {/* ================= COLUMN 1: EXPERIENCE / CERTIFICATION ================= */}
      <div className="space-y-8 relative">
        <div className="flex items-center gap-3 mb-6">
          <span className={`p-2 border rounded-lg shadow-sm ${
            isLight 
              ? 'bg-purple-100 border-purple-200 text-purple-650' 
              : 'bg-purple-950/50 border-purple-500/30 text-pink-400 shadow-[0_0_15px_rgba(236,72,153,0.15)]'
          }`}>
            <Briefcase className="w-4 h-4 animate-pulse" />
          </span>
          <div>
            <span className={`text-[10px] font-mono tracking-widest uppercase block font-semibold ${
              isLight ? 'text-purple-600' : 'text-pink-400'
            }`}>Practical Course</span>
            <h3 className={`text-lg font-bold tracking-tight animate-pulse ${
              isLight ? 'text-slate-800' : 'text-white'
            }`}>Active Achievements</h3>
          </div>
        </div>

        {/* Laser vertical timeline guide line */}
        <div className={`absolute left-6 top-[72px] bottom-6 w-[2px] bg-gradient-to-b from-purple-500 to-pink-500 ${
          isLight ? 'opacity-20' : 'opacity-30'
        }`} />

        <div className="space-y-8">
          {EXPERIENCES.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="relative pl-14 group"
            >
              {/* Monochromatic junction circle */}
              <div className={`absolute left-[19px] top-2 w-[11px] h-[11px] rounded-full border-2 z-10 transition-transform duration-300 group-hover:scale-150 ${
                isLight 
                  ? 'bg-white border-pink-500 shadow-[0_0_8px_rgba(236,72,153,0.3)]' 
                  : 'bg-black border-pink-400 shadow-[0_0_8px_#ec4899]'
              }`} />

              {/* Minimal container box */}
              <div className={`p-5 rounded-xl border transition-all duration-300 ${
                isLight 
                  ? 'bg-white border-slate-200/80 hover:border-purple-300 hover:shadow-[0_10px_30px_rgba(139,92,246,0.06)]' 
                  : 'bg-[#130d2a]/40 border-purple-950/40 hover:border-purple-500/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.15)]'
              }`}>
                <div className="flex flex-wrap justify-between items-start gap-2 mb-3">
                  <div>
                    <h4 className={`font-bold text-sm tracking-tight transition-colors ${
                      isLight ? 'text-slate-900 group-hover:text-purple-600' : 'text-white group-hover:text-pink-300'
                    }`}>
                      {exp.role}
                    </h4>
                    <span className={`text-xs font-mono flex items-center gap-1.5 mt-1 ${
                      isLight ? 'text-purple-700' : 'text-purple-300'
                    }`}>
                      <Building className="w-3.5 h-3.5" />
                      {exp.company}
                    </span>
                  </div>
                  <span className={`text-[9px] font-mono px-2 py-0.5 rounded-full flex items-center gap-1 shrink-0 font-bold ${
                    isLight 
                      ? 'bg-purple-50 text-purple-705 border border-purple-200' 
                      : 'bg-purple-950 text-pink-300 border border-purple-500/30'
                  }`}>
                    <Calendar className="w-3 h-3" />
                    {exp.duration}
                  </span>
                </div>

                <ul className={`space-y-2 mt-4 text-xs ${isLight ? 'text-slate-600' : 'text-zinc-300'}`}>
                  {exp.achievements.map((ach, aIdx) => (
                    <li key={aIdx} className="flex items-start gap-2 leading-relaxed">
                      <span className={`p-0.5 border rounded mt-0.5 shrink-0 ${
                        isLight 
                          ? 'bg-purple-50 text-purple-600 border-purple-100' 
                          : 'bg-black text-pink-400 border-purple-950/20'
                      }`}>
                        <Award className="w-3 h-3 animate-pulse" />
                      </span>
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ================= COLUMN 2: EDUCATION TIMELINE ================= */}
      <div className="space-y-8 relative">
        <div className="flex items-center gap-3 mb-6">
          <span className={`p-2 border rounded-lg shadow-sm ${
            isLight 
              ? 'bg-cyan-50 border-cyan-200 text-cyan-600' 
              : 'bg-cyan-950/50 border-cyan-500/30 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.15)]'
          }`}>
            <GraduationCap className="w-4 h-4 animate-pulse" />
          </span>
          <div>
            <span className={`text-[10px] font-mono tracking-widest uppercase block font-semibold ${
              isLight ? 'text-cyan-600' : 'text-cyan-400'
            }`}>Academic Credentials</span>
            <h3 className={`text-lg font-bold tracking-tight animate-pulse ${
              isLight ? 'text-slate-800' : 'text-white'
            }`}>Education Track</h3>
          </div>
        </div>

        {/* Quiet vertical guide line */}
        <div className={`absolute left-6 top-[72px] bottom-6 w-[2px] bg-gradient-to-b from-cyan-500 to-indigo-500 ${
          isLight ? 'opacity-20' : 'opacity-30'
        }`} />

        <div className="space-y-8">
          {EDUCATIONS.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="relative pl-14 group"
            >
              {/* Monochromatic junction circle */}
              <div className={`absolute left-[19px] top-2 w-[11px] h-[11px] rounded-full border-2 z-10 transition-transform duration-300 group-hover:scale-150 ${
                isLight 
                  ? 'bg-white border-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.3)]' 
                  : 'bg-black border-cyan-400 shadow-[0_0_8px_#06b6d4]'
              }`} />

              {/* Minimal box container */}
              <div className={`p-5 rounded-xl border transition-all duration-300 ${
                isLight 
                  ? 'bg-white border-slate-200/80 hover:border-cyan-300 hover:shadow-[0_10px_30px_rgba(6,182,212,0.06)]' 
                  : 'bg-[#0a152d]/40 border-cyan-950/40 hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)]'
              }`}>
                <div className="flex flex-wrap justify-between items-start gap-2">
                  <div>
                    <h4 className={`font-bold text-sm tracking-tight transition-colors ${
                      isLight ? 'text-slate-900 group-hover:text-cyan-600' : 'text-white group-hover:text-cyan-300'
                    }`}>
                      {edu.degree}
                    </h4>
                    <span className={`text-xs font-mono block mt-1 ${
                      isLight ? 'text-cyan-650' : 'text-cyan-300'
                    }`}>
                      {edu.institution}
                    </span>
                  </div>
                  <span className={`text-[9px] font-mono px-2 py-0.5 rounded-full flex items-center gap-1 shrink-0 font-bold ${
                    isLight 
                      ? 'bg-cyan-50 text-cyan-705 border border-cyan-200' 
                      : 'bg-cyan-950 text-cyan-300 border border-cyan-500/30'
                  }`}>
                    <Calendar className="w-3 h-3" />
                    {edu.duration}
                  </span>
                </div>

                {edu.grade && (
                  <div className={`mt-4 flex items-center gap-1.5 text-xs font-mono font-bold ${
                    isLight ? 'text-cyan-600' : 'text-cyan-400'
                  }`}>
                    <Sparkles className="w-3.5 h-3.5 animate-pulse" />
                    <span className={`${isLight ? 'text-slate-500' : 'text-zinc-400'} font-normal`}>Result:</span>
                    <span>{edu.grade}</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </div>
  );
}
