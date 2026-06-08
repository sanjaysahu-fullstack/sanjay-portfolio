import React from 'react';
import { motion } from 'motion/react';
import { Project } from '../types';
import { Github, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  theme?: 'dark' | 'light';
}

export default function ProjectCard({ project, theme = 'dark' }: ProjectCardProps) {
  const isPurple = project.imageTheme === 'purple';
  const isLight = theme === 'light';
  
  // Custom class maps for vivid dynamic gradients
  const borderStyle = isLight
    ? (isPurple 
        ? 'hover:border-purple-300 hover:shadow-[0_10px_35px_rgba(168,85,247,0.06)] bg-white border-slate-205/90 text-slate-800' 
        : 'hover:border-cyan-300 hover:shadow-[0_10px_35px_rgba(6,182,212,0.06)] bg-white border-slate-205/90 text-slate-800')
    : (isPurple 
        ? 'hover:border-purple-500/70 hover:shadow-[0_0_25px_rgba(168,85,247,0.2)] bg-gradient-to-b from-[#130d2a]/80 to-[#070515]/90 border-purple-950/20' 
        : 'hover:border-cyan-500/70 hover:shadow-[0_0_25px_rgba(6,182,212,0.2)] bg-gradient-to-b from-[#0a152d]/80 to-[#070515]/90 border-purple-950/20');

  const bulletColor = isPurple ? 'bg-pink-500' : 'bg-cyan-500';

  return (
    <div className="w-full h-full">
      {/* Elegantly styled card with subtle border changes */}
      <div className={`rounded-2xl p-6 border transition-all duration-300 flex flex-col justify-between h-full group ${borderStyle}`}>
        
        {/* Tech stack badges */}
        <div className="mb-4 text-left">
          <div className="flex flex-wrap gap-1.5 mb-3">
            {project.techStack.map((tech) => (
              <span 
                key={tech} 
                className={`inline-block px-2 py-0.5 text-[9px] font-mono rounded-full font-bold uppercase ${
                  isPurple 
                    ? (isLight 
                        ? 'text-pink-650 bg-pink-50 border border-pink-200' 
                        : 'text-pink-300 bg-pink-950/40 border border-pink-500/30')
                    : (isLight 
                        ? 'text-cyan-650 bg-cyan-50 border border-cyan-205'
                        : 'text-cyan-300 bg-cyan-950/40 border border-cyan-500/30')
                }`}
              >
                {tech}
              </span>
            ))}
          </div>

          <h3 className={`text-xl font-bold tracking-tight transition-colors ${
            isLight 
              ? 'text-slate-900 group-hover:text-purple-600' 
              : 'text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-pink-200'
          }`}>
            {project.title}
          </h3>
          <p className={`text-xs mt-2.5 leading-relaxed ${
            isLight ? 'text-slate-600' : 'text-zinc-400'
          }`}>
            {project.description}
          </p>
        </div>

        {/* Crisp bullet point list of key features */}
        <div className="mt-2 mb-6 text-left">
          <ul className={`text-[11px] space-y-2 ${
            isLight ? 'text-slate-600' : 'text-zinc-300'
          }`}>
            {project.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className={`inline-block mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${bulletColor}`} />
                <span className="leading-snug">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Action button links */}
        <div className="flex gap-2 pt-2 mt-auto">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className={`flex-1 py-2 text-[11px] font-mono rounded-xl transition-all flex items-center justify-center gap-1.5 ${
                isLight 
                  ? 'bg-slate-50 hover:bg-slate-100 text-slate-700 hover:text-slate-900 border border-slate-200 hover:border-slate-300' 
                  : 'bg-[#090818] hover:bg-[#130d2a] text-zinc-350 hover:text-white border border-purple-950/40 hover:border-purple-500/40'
              }`}
            >
              <Github className="w-3.5 h-3.5 text-purple-500" />
              <span>Repository</span>
            </a>
          )}
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="flex-1 py-2 text-[11px] font-mono rounded-xl bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500 hover:from-purple-500 hover:via-pink-400 hover:to-cyan-400 text-white font-bold transition-all duration-300 flex items-center justify-center gap-1.5 hover:scale-[1.02] shadow-[0_4px_12px_rgba(168,85,247,0.25)] hover:shadow-[0_4px_20px_rgba(168,85,247,0.45)]"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            <span>Launch Live</span>
          </a>
        </div>
      </div>
    </div>
  );
}
