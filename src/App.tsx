import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS } from './data';
import { 
  ArrowRight, Download, Send, Globe, Github, Linkedin, 
  Mail, Phone, MapPin, Code, Laptop, Database, Terminal,
  ArrowDownCircle, Check, Loader2, Award, Sun, Moon
} from 'lucide-react';

// Subcomponents
import Loader from './components/Loader';
import ParticleBackground from './components/ParticleBackground';
import SkillOrbit from './components/SkillOrbit';
import ProjectCard from './components/ProjectCard';
import TimelineSection from './components/TimelineSection';
import ContactForm from './components/ContactForm';

export default function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    return (localStorage.getItem('portfolio-theme') as 'dark' | 'light') || 'dark';
  });

  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('Home');
  const [resumeDownloading, setResumeDownloading] = useState(false);
  const [resumeDownloadSuccess, setResumeDownloadSuccess] = useState(false);

  useEffect(() => {
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'education', 'contact'];
      const scrollPos = window.scrollY + 180;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveTab(section.charAt(0).toUpperCase() + section.slice(1));
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSimulateDownload = () => {
    if (resumeDownloading) return;
    setResumeDownloading(true);
    setResumeDownloadSuccess(false);

    setTimeout(() => {
      setResumeDownloading(false);
      setResumeDownloadSuccess(true);
      
      setTimeout(() => setResumeDownloadSuccess(false), 3000);
      
      const textContent = `
=========================================
SANJAY SAHU - FULL STACK MERN DEVELOPER
=========================================
sanjaysahu10067@gmail.com | +91-8120067073
Balodabazar, Chhattisgarh, India

Core Capabilities:
- MongoDB, Express.js, React.js, Node.js (MERN)
- HTML, CSS, JavaScript, Bootstrap, responsive design
- RESTful APIs integration, debugging, Git/GitHub
      `;
      const blob = new Blob([textContent], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'SanjaySahu_CV.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 1500);
  };

  const isLight = theme === 'light';

  return (
    <div className={`min-h-screen font-sans overflow-x-hidden antialiased relative transition-colors duration-500 ${
      isLight 
        ? 'bg-slate-50 text-slate-800 selection:bg-purple-200 shadow-inner' 
        : 'bg-[#070513] text-zinc-100 selection:bg-purple-500/30'
    }`}>
      {/* Dynamic colorful cosmic aurora spot blurs */}
      {isLight ? (
        <>
          <div className="absolute top-[8%] left-[2%] w-[420px] h-[420px] bg-purple-200/25 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute top-[35%] right-[2%] w-[380px] h-[380px] bg-cyan-100/20 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute top-[65%] left-[5%] w-[450px] h-[450px] bg-pink-150/15 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute top-[85%] right-[5%] w-[320px] h-[320px] bg-purple-200/20 rounded-full blur-[120px] pointer-events-none" />
        </>
      ) : (
        <>
          <div className="absolute top-[8%] left-[2%] w-[420px] h-[420px] bg-purple-900/15 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute top-[35%] right-[2%] w-[380px] h-[380px] bg-cyan-900/15 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute top-[65%] left-[5%] w-[450px] h-[450px] bg-pink-905/10 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute top-[85%] right-[5%] w-[320px] h-[320px] bg-purple-950/15 rounded-full blur-[120px] pointer-events-none" />
        </>
      )}

      {/* Modern Silent Loader */}
      <AnimatePresence>
        {loading && <Loader onLoadingComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {/* Subtle Drift Particles */}
      <ParticleBackground theme={theme} />

      {/* ================= HEADER / NAVIGATION ================= */}
      <header className={`fixed top-0 inset-x-0 h-16 backdrop-blur-md z-45 flex items-center justify-between px-6 md:px-12 transition-all border-b ${
        isLight 
          ? 'bg-slate-50/80 border-slate-205' 
          : 'bg-[#070512]/80 border-purple-950/30'
      }`}>
        <div 
          onClick={() => scrollToSection('home')} 
          className="flex items-center gap-2.5 cursor-pointer group"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-600 via-pink-500 to-cyan-500 text-white flex items-center justify-center font-extrabold text-sm select-none shadow-[0_0_12px_#af40ff]/30 group-hover:scale-105 transition-all">
            S
          </div>
          <div className="text-left">
            <span className={`font-bold text-xs tracking-wider block transition-colors ${
              isLight ? 'text-slate-900 group-hover:text-purple-600' : 'text-white group-hover:text-pink-300'
            }`}>SANJAY SAHU</span>
            <span className={`text-[9px] font-mono uppercase tracking-widest block font-bold mt-0.5 ${
              isLight ? 'text-purple-605' : 'text-cyan-400 animate-pulse'
            }`}>
              MERN Stack
            </span>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className={`hidden md:flex items-center gap-1 p-1 rounded-full border ${
          isLight ? 'bg-slate-100 border-slate-200' : 'bg-[#05040d] border-purple-950/30'
        }`}>
          {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Education', 'Contact'].map((tab) => (
            <button
              key={tab}
              id={`nav-link-${tab.toLowerCase()}`}
              onClick={() => scrollToSection(tab.toLowerCase())}
              className={`px-3 py-1 rounded-full text-[11px] font-mono transition-all duration-250 ${
                activeTab === tab
                  ? 'bg-gradient-to-r from-purple-600 via-pink-550 to-cyan-500 text-white font-bold shadow-[0_0_12px_rgba(139,92,246,0.35)]'
                  : (isLight 
                      ? 'text-slate-650 hover:text-purple-600 hover:bg-slate-200/50' 
                      : 'text-zinc-400 hover:text-cyan-400 hover:bg-purple-950/20')
              }`}
            >
              {tab}
            </button>
          ))}
        </nav>

        {/* Hiring Badge & Theme Toggler */}
        <div className="flex items-center gap-3">
          <span className={`hidden sm:inline-block px-2.5 py-1 border text-[9px] font-mono uppercase tracking-widest leading-none rounded-full font-bold ${
            isLight 
              ? 'bg-slate-100 border-slate-200 text-slate-600' 
              : 'bg-purple-950/50 border-pink-500/25 text-pink-300 shadow-[0_0_8px_rgba(236,72,153,0.15)]'
          }`}>
            <span className={`inline-block w-1.5 h-1.5 rounded-full animate-ping mr-1.5 ${
              isLight ? 'bg-pink-500' : 'bg-pink-400'
            }`} />
            Active hire status
          </span>

          {/* GitHub Profile Link */}
          <a
            href="https://github.com/sanjaysahu-fullstack"
            target="_blank"
            rel="noreferrer"
            className={`p-1.5 rounded-lg border transition-all duration-300 flex items-center justify-center cursor-pointer select-none active:scale-95 ${
              isLight 
                ? 'bg-white hover:bg-slate-200/60 border-slate-205 text-slate-700 hover:text-purple-600 shadow-[0_2px_8px_rgba(0,0,0,0.04)]' 
                : 'bg-purple-950/40 hover:bg-purple-900/30 border-purple-500/20 text-purple-200 hover:text-pink-400 shadow-[0_0_8px_rgba(168,85,247,0.1)]'
            }`}
            aria-label="View GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>

          {/* Theme Shift Toggler Button */}
          <button
            onClick={() => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))}
            className={`p-1.5 rounded-lg border transition-all duration-300 flex items-center justify-center cursor-pointer select-none active:scale-95 ${
              isLight 
                ? 'bg-white hover:bg-slate-200/60 border-slate-205 text-slate-805 shadow-[0_2px_8px_rgba(0,0,0,0.04)]' 
                : 'bg-purple-950/40 hover:bg-purple-900/30 border-purple-500/20 text-yellow-405 shadow-[0_0_8px_rgba(168,85,247,0.1)]'
            }`}
            aria-label="Toggle Theme Mode"
            id="theme-toggler"
          >
            {isLight ? <Moon className="w-4 h-4 text-purple-600" /> : <Sun className="w-4 h-4 text-yellow-500 animate-[spin_8s_linear_infinite]" />}
          </button>

          <button 
            onClick={() => scrollToSection('contact')}
            className="px-3.5 py-1.5 bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white shadow-[0_0_12px_rgba(168,85,247,0.3)] rounded text-xs font-mono font-bold transition cursor-pointer hover:scale-[1.03]"
          >
            Hire
          </button>
        </div>
      </header>

      {/* ================= MAIN CONTAINER ================= */}
      <main className="max-w-5xl mx-auto px-6 md:px-12 pt-28 pb-20 space-y-24">
        
        {/* ---- HERO SECTION ---- */}
        <section id="home" className="min-h-[70vh] flex flex-col md:grid md:grid-cols-12 gap-8 items-center scroll-mt-24 pt-4 text-left relative z-10">
          
          {/* Main Hero information */}
          <div className="md:col-span-7 space-y-6">
            
            <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border select-none transition-all ${
              isLight 
                ? 'bg-purple-50 border-purple-200 shadow-[0_2px_10px_rgba(168,85,247,0.04)] text-purple-700' 
                : 'bg-purple-950/40 border-purple-500/35 shadow-[0_0_12px_rgba(168,85,247,0.15)] text-pink-300'
            }`}>
              <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${isLight ? 'bg-purple-500' : 'bg-pink-400'}`} />
              <span className="text-[9px] font-mono tracking-widest uppercase font-bold">MERN Stack Innovator</span>
            </div>

            <div className="space-y-2">
              <span className={`text-[10px] font-mono tracking-widest block font-bold uppercase flex items-center gap-1 ${
                isLight ? 'text-cyan-600' : 'text-cyan-400'
              }`}>
                <span className={`w-2 h-[1px] inline-block ${isLight ? 'bg-cyan-500' : 'bg-cyan-400'}`} />
                Vibrant Developer Canvas
              </span>
              <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500 bg-clip-text text-transparent leading-none drop-shadow-[0_0_20px_rgba(139,92,246,0.15)] pb-1">
                SANJAY SAHU
              </h1>
              <h2 className={`text-lg sm:text-2xl font-bold tracking-wide font-sans flex flex-wrap items-center gap-2 ${
                isLight ? 'text-slate-800' : 'text-white'
              }`}>
                MERN Stack Web Developer
                <span className={`font-mono text-[10px] font-bold px-2 py-0.5 rounded border ${
                  isLight 
                    ? 'text-pink-650 bg-pink-50 border-pink-200 shadow-sm' 
                    : 'text-pink-300 bg-pink-950/40 border-pink-500/30 shadow-[0_0_10px_rgba(236,72,153,0.15)]'
                }`}>FULL STACK</span>
              </h2>
            </div>

            <p className={`text-xs sm:text-sm leading-relaxed max-w-md font-medium ${
              isLight ? 'text-slate-600' : 'text-zinc-300'
            }`}>
              Crafting lightweight, responsive, and robust web applications with pristine user interfaces and cleanly designed endpoints using MongoDB, Express, React, and Node.js.
            </p>

            {/* Actions Panel */}
            <div className="flex flex-col sm:flex-row gap-2.5 pt-2">
              <button
                onClick={() => scrollToSection('projects')}
                className="px-5 py-2.5 bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500 hover:from-purple-500 hover:via-pink-400 hover:to-cyan-400 text-white hover:scale-[1.02] shadow-[0_4px_15px_rgba(168,85,247,0.3)] hover:shadow-[0_4px_22px_rgba(168,85,247,0.5)] rounded-xl font-mono text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>Feature projects</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={handleSimulateDownload}
                className={`px-5 py-2.5 rounded-xl font-mono text-xs font-semibold border flex items-center justify-center gap-1.5 transition ${
                  resumeDownloadSuccess 
                    ? (isLight 
                        ? 'bg-pink-50 border-pink-300 text-pink-650 shadow-sm'
                        : 'bg-[#130d2a]/60 border-purple-500/40 text-pink-300 shadow-[0_0_15px_rgba(236,72,153,0.2)]')
                    : (isLight 
                        ? 'bg-white hover:bg-slate-50 border-slate-205 text-slate-750 hover:text-slate-900 shadow-sm hover:border-purple-350'
                        : 'bg-[#090818]/80 border-purple-950/40 hover:border-purple-500/40 text-purple-200 hover:text-white')
                }`}
              >
                {resumeDownloading ? (
                  <>
                    <Loader2 className="w-3.5 h-3.5 animate-spin text-pink-500" />
                    <span>Preparing CV...</span>
                  </>
                ) : resumeDownloadSuccess ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-pink-500" />
                    <span>CV Downloaded</span>
                  </>
                ) : (
                  <>
                    <Download className="w-3.5 h-3.5 text-purple-500" />
                    <span>Download CV</span>
                  </>
                )}
              </button>
            </div>

            {/* Quick Metrics */}
            <div className={`flex items-center gap-8 pt-6 border-t ${
              isLight ? 'border-slate-200' : 'border-purple-950/30'
            }`}>
              <div>
                <span className="text-2xl font-black bg-gradient-to-r from-[#ec4899] to-purple-500 bg-clip-text text-transparent">1+ Year</span>
                <span className={`text-[9px] font-mono block uppercase tracking-wider mt-0.5 font-bold ${
                  isLight ? 'text-purple-600' : 'text-purple-300'
                }`}>Practical Focus</span>
              </div>
              <div className={`w-px h-6 ${isLight ? 'bg-slate-200' : 'bg-purple-950/40'}`} />
              <div>
                <span className="text-2xl font-black bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">5+ Projects</span>
                <span className={`text-[9px] font-mono block uppercase tracking-wider mt-0.5 font-bold ${
                  isLight ? 'text-cyan-600' : 'text-cyan-330'
                }`}>MERN Deployments</span>
              </div>
              <div className={`w-px h-6 ${isLight ? 'bg-slate-200' : 'bg-purple-950/40'}`} />
              <div>
                <span className="text-2xl font-black bg-gradient-to-r from-cyan-500 to-[#ec4899] bg-clip-text text-transparent">97% Max</span>
                <span className={`text-[9px] font-mono block uppercase tracking-wider mt-0.5 font-bold ${
                  isLight ? 'text-pink-600' : 'text-pink-300'
                }`}>Academic Distinction</span>
              </div>
            </div>

          </div>

          {/* Profile Picture Module */}
          <div className="md:col-span-5 w-full flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="relative p-4 rounded-[36px] transition-all duration-500 group"
            >
              {/* Aesthetic Tech Frame Brackets */}
              <div className={`absolute top-0 left-0 w-6 h-6 border-t-[2.5px] border-l-[2.5px] rounded-tl-2xl transition-all duration-300 ${
                isLight 
                  ? 'border-purple-600/50 group-hover:border-purple-600' 
                  : 'border-purple-500/40 group-hover:border-pink-500 group-hover:shadow-[0_0_8px_rgba(236,72,153,0.3)]'
              }`} />
              <div className={`absolute top-0 right-0 w-6 h-6 border-t-[2.5px] border-r-[2.5px] rounded-tr-2xl transition-all duration-300 ${
                isLight 
                  ? 'border-purple-600/50 group-hover:border-purple-600' 
                  : 'border-purple-500/40 group-hover:border-pink-500 group-hover:shadow-[0_0_8px_rgba(236,72,153,0.3)]'
              }`} />
              <div className={`absolute bottom-0 left-0 w-6 h-6 border-b-[2.5px] border-l-[2.5px] rounded-bl-2xl transition-all duration-300 ${
                isLight 
                  ? 'border-purple-600/50 group-hover:border-purple-600' 
                  : 'border-purple-500/40 group-hover:border-pink-500 group-hover:shadow-[0_0_8px_rgba(236,72,153,0.3)]'
              }`} />
              <div className={`absolute bottom-0 right-0 w-6 h-6 border-b-[2.5px] border-r-[2.5px] rounded-br-2xl transition-all duration-300 ${
                isLight 
                  ? 'border-purple-600/50 group-hover:border-purple-600' 
                  : 'border-purple-500/40 group-hover:border-pink-500 group-hover:shadow-[0_0_8px_rgba(236,72,153,0.3)]'
              }`} />

              {/* Dynamic Inner Frame Ring Accent */}
              <div className={`absolute inset-2 rounded-[28px] border transition-all duration-500 ${
                isLight 
                  ? 'border-purple-100/60 group-hover:border-purple-200 group-hover:bg-purple-50/10' 
                  : 'border-purple-950/20 group-hover:border-purple-500/20 group-hover:bg-purple-950/5'
              }`} />

              {/* Main Image Container Card - Frameless & Heavy Shadowed */}
              <div className={`relative aspect-[3/4] w-64 sm:w-72 md:w-80 rounded-2xl overflow-hidden transition-all duration-500 ${
                isLight 
                  ? 'bg-white shadow-[0_25px_60px_rgba(139,92,246,0.18)] hover:shadow-[0_35px_75px_rgba(139,92,246,0.25)]' 
                  : 'bg-zinc-950/40 shadow-[0_30px_70px_rgba(0,0,0,0.85),_0_0_50px_rgba(139,92,246,0.04)] hover:shadow-[0_35px_80px_rgba(0,0,0,0.92),_0_0_60px_rgba(139,92,246,0.08)]'
              }`}>
                <img
                  src="/src/assets/images/Sanju.jpeg"
                  alt="Sanjay Sahu - Portrait"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale-[8%] group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-700 ease-out"
                />
                
                {/* Visual Glass Reflection Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none" />
                
                {/* Tech Accent Decorative Box */}
                <div className={`absolute bottom-3 right-3 px-2.5 py-1 backdrop-blur-md rounded-xl border text-[9px] font-mono font-bold tracking-wider uppercase select-none transition-all ${
                  isLight
                    ? 'bg-white/80 border-slate-150 text-slate-800'
                    : 'bg-[#070513]/85 border-purple-500/15 text-cyan-400'
                }`}>
                  BALODABAZAR, IN
                </div>

                {/* Left Tech Accent Indicator */}
                <div className={`absolute bottom-3 left-3 flex items-center gap-1.5 px-2.5 py-1 backdrop-blur-md rounded-xl border text-[9px] font-mono transition-all ${
                  isLight
                    ? 'bg-purple-50/80 border-purple-100 text-purple-700'
                    : 'bg-purple-950/80 border-pink-500/15 text-pink-300'
                }`}>
                  <span className={`w-1.5 h-1.5 rounded-full animate-ping ${isLight ? 'bg-purple-600' : 'bg-pink-400'}`} />
                  DEVELOPER
                </div>
              </div>
            </motion.div>
          </div>

        </section>

        {/* ---- ABOUT ME SECTION ---- */}
        <section id="about" className="scroll-mt-24 space-y-8">
          
          <div className="text-left space-y-1.5 max-w-xl">
            <span className={`text-[10px] font-mono tracking-widest uppercase block font-bold ${
              isLight ? 'text-[#ec4899]' : 'text-pink-400'
            }`}>01 / Overview</span>
            <h2 className={`text-2xl font-bold tracking-tight ${isLight ? 'text-slate-900' : 'text-white'}`}>About Me</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`p-5 rounded-xl flex flex-col justify-between text-left transition duration-300 border ${
                isLight 
                  ? 'bg-white border-slate-205 shadow-[0_8px_25px_rgba(168,85,247,0.03)] hover:border-purple-300' 
                  : 'bg-[#130d2a]/30 border-purple-500/20 hover:border-purple-500/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.15)]'
              }`}
            >
              <div className="space-y-3">
                <div className={`w-8 h-8 rounded flex items-center justify-center border ${
                  isLight 
                    ? 'bg-purple-50 border-purple-200 text-pink-600' 
                    : 'bg-black border border-purple-950 text-pink-400 shadow-[0_0_8px_rgba(236,72,153,0.15)]'
                }`}>
                  <Code className="w-4 h-4" />
                </div>
                <h3 className={`text-sm font-bold tracking-tight ${isLight ? 'text-slate-800' : 'text-white'}`}>Practical Foundations</h3>
                <p className={`text-xs leading-relaxed ${isLight ? 'text-slate-650' : 'text-zinc-404'}`}>
                  Passionate and detail-oriented Full Stack Developer with practical experience in MERN Stack technologies and modern web development architectures.
                </p>
              </div>
              <span className={`mt-6 text-[9px] font-mono uppercase tracking-widest block font-bold ${
                isLight ? 'text-purple-600' : 'text-purple-400'
              }`}>Philosophy</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className={`p-5 rounded-xl flex flex-col justify-between text-left transition duration-300 border ${
                isLight 
                  ? 'bg-white border-slate-205 shadow-[0_8px_25px_rgba(6,182,212,0.03)] hover:border-cyan-300' 
                  : 'bg-[#0a152d]/30 border-cyan-500/20 hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)]'
              }`}
            >
              <div className="space-y-3">
                <div className={`w-8 h-8 rounded flex items-center justify-center border ${
                  isLight 
                    ? 'bg-cyan-50 border-cyan-200 text-cyan-600' 
                    : 'bg-black border border-cyan-950 text-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.15)]'
                }`}>
                  <Laptop className="w-4 h-4" />
                </div>
                <h3 className={`text-sm font-bold tracking-tight ${isLight ? 'text-slate-800' : 'text-white'}`}>Optimized Performance</h3>
                <p className={`text-xs leading-relaxed ${isLight ? 'text-slate-650' : 'text-zinc-404'}`}>
                  Focused on creating lightweight, responsive and efficient web applications while continuously incorporating the latest standards and clean patterns.
                </p>
              </div>
              <span className={`mt-6 text-[9px] font-mono uppercase tracking-widest block font-bold ${
                isLight ? 'text-cyan-600' : 'text-cyan-400'
              }`}>Goal Oriented</span>
            </motion.div>
          </div>

        </section>

        {/* ---- SKILLS SECTION ---- */}
        <section id="skills" className="scroll-mt-24 space-y-8">
          
          <div className="text-left space-y-1.5">
            <span className={`text-[10px] font-mono tracking-widest uppercase block font-bold ${
              isLight ? 'text-[#ec4899]' : 'text-[#ec4899]'
            }`}>02 / Technical Skills</span>
            <h2 className={`text-2xl font-bold tracking-tight ${isLight ? 'text-slate-900' : 'text-white'}`}>Active Stack</h2>
          </div>

          <SkillOrbit theme={theme} />

        </section>

        {/* ---- EXPERIENCE SECTION ---- */}
        <section id="experience" className="scroll-mt-24 space-y-8">
          
          <div className="text-left space-y-1.5">
            <span className={`text-[10px] font-mono tracking-widest uppercase block font-bold ${
              isLight ? 'text-cyan-600' : 'text-cyan-404'
            }`}>03 / Achievements</span>
            <h2 className={`text-2xl font-bold tracking-tight ${isLight ? 'text-slate-900' : 'text-white'}`}>Experience Track</h2>
          </div>

          <TimelineSection theme={theme} />

        </section>

        {/* ---- PROJECTS SECTION ---- */}
        <section id="projects" className="scroll-mt-24 space-y-8">
          
          <div className="text-left space-y-1.5">
            <span className={`text-[10px] font-mono tracking-widest uppercase block font-bold ${
              isLight ? 'text-purple-600' : 'text-[#ec4899]'
            }`}>04 / Highlights</span>
            <h2 className={`text-2xl font-extrabold tracking-tight ${isLight ? 'text-slate-900' : 'text-white'}`}>Featured Work</h2>
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch pt-2">
            {PROJECTS.map((project, idx) => (
              <div key={idx}>
                <ProjectCard project={project} theme={theme} />
              </div>
            ))}
          </div>

        </section>

        {/* ---- EDUCATION SECTION ---- */}
        <section id="education" className="scroll-mt-24 space-y-8">
          
          <div className="text-left space-y-1.5">
            <span className={`text-[10px] font-mono tracking-widest uppercase block font-bold ${
              isLight ? 'text-purple-600' : 'text-[#ec4899]'
            }`}>05 / Credentials</span>
            <h2 className={`text-2xl font-bold tracking-tight ${isLight ? 'text-slate-900' : 'text-white'}`}>Education</h2>
          </div>

          {/* Clean minimal education sequence */}
          <div className={`p-6 text-left relative overflow-hidden transition-all duration-300 border rounded-2xl ${
            isLight 
              ? 'bg-white border-slate-205 shadow-[0_10px_35px_rgba(168,85,247,0.03)] hover:border-purple-300' 
              : 'bg-[#130d2a]/30 border-purple-500/20 hover:border-purple-500/40 hover:shadow-[0_0_20px_rgba(168,85,247,0.1)]'
          }`}>
            <div className={`absolute left-[38px] top-12 bottom-12 w-[2px] opacity-20 ${
              isLight ? 'bg-gradient-to-b from-purple-550 to-cyan-500' : 'bg-gradient-to-b from-purple-500 to-cyan-500'
            }`} />

            <div className="space-y-8 relative">
              
              {/* Event 1 (Government Polytechnic, Durg) */}
              <motion.div 
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 sm:gap-6 relative"
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border-2 ${
                  isLight 
                    ? 'bg-purple-50 border-purple-400 text-purple-600 shadow-sm' 
                    : 'bg-black border-purple-400 shadow-[0_0_8px_#8b5cf6]'
                }`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${isLight ? 'bg-purple-600' : 'bg-purple-405'}`} />
                </div>
                <div className={`flex-1 p-4 rounded-xl border transition-all ${
                  isLight 
                    ? 'bg-slate-50 border-slate-150 hover:border-purple-300' 
                    : 'bg-[#130d2a]/40 border-purple-950/40 hover:border-purple-550'
                }`}>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-2">
                    <span className={`text-[10px] font-mono uppercase font-bold ${
                      isLight ? 'text-pink-600' : 'text-pink-305'
                    }`}>Diploma in CSE</span>
                    <span className={`text-[9px] font-mono px-2 py-0.5 rounded border ${
                      isLight 
                        ? 'bg-purple-50 text-purple-700 border-purple-200' 
                        : 'bg-purple-950 text-pink-300 border-purple-500/30'
                    }`}>2023 - Present</span>
                  </div>
                  <h4 className={`font-bold text-sm ${isLight ? 'text-slate-900' : 'text-white'}`}>Government Polytechnic, Durg</h4>
                  <p className={`text-xs mt-1.5 font-mono ${isLight ? 'text-purple-700' : 'text-purple-300'}`}>Pursuing computer science engineering with active focus on system architectures.</p>
                </div>
              </motion.div>

              {/* Event 2 (Gyan Vidya school - Higher Secondary) */}
              <motion.div 
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 sm:gap-6 relative"
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border-2 ${
                  isLight 
                    ? 'bg-cyan-50 border-cyan-450 text-cyan-555 shadow-sm' 
                    : 'bg-black border-2 border-cyan-450 shadow-[0_0_8px_#06b6d4]'
                }`}>
                  <span className={`w-1.5 h-1.5 rounded-full bg-cyan-400`} />
                </div>
                <div className={`flex-1 p-4 rounded-xl border transition-all ${
                  isLight 
                    ? 'bg-slate-50 border-slate-150 hover:border-cyan-350' 
                    : 'bg-[#0a152d]/40 border-cyan-950/40 hover:border-cyan-550'
                }`}>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-2">
                    <span className={`text-[10px] font-mono uppercase font-bold ${
                      isLight ? 'text-cyan-600' : 'text-cyan-305'
                    }`}>Higher Secondary Certificate</span>
                    <span className={`text-[9px] font-mono px-2 py-0.5 rounded border ${
                      isLight 
                        ? 'bg-cyan-50 text-cyan-705 border-cyan-200' 
                        : 'bg-cyan-950 text-cyan-300 border-cyan-500/30'
                    }`}>Graduated</span>
                  </div>
                  <h4 className={`font-bold text-sm ${isLight ? 'text-slate-900' : 'text-white'}`}>Gyan Vidya Higher Secondary School</h4>
                  <p className={`text-xs mt-1.5 font-mono ${isLight ? 'text-cyan-705' : 'text-cyan-300'}`}>Score: 77.8%</p>
                </div>
              </motion.div>

              {/* Event 3 (Gyan Vidya school - High School) */}
              <motion.div 
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 sm:gap-6 relative"
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border-2 ${
                  isLight 
                    ? 'bg-pink-50 border-pink-400 text-pink-650 shadow-sm' 
                    : 'bg-black border-pink-400 shadow-[0_0_8px_#ec4899]'
                }`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${isLight ? 'bg-pink-600' : 'bg-pink-405'}`} />
                </div>
                <div className={`flex-1 p-4 rounded-xl border transition-all ${
                  isLight 
                    ? 'bg-slate-50 border-slate-150 hover:border-purple-350' 
                    : 'bg-[#130d2a]/40 border-purple-950/40 hover:border-purple-550'
                }`}>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-2">
                    <span className={`text-[10px] font-mono uppercase font-bold ${
                      isLight ? 'text-pink-600' : 'text-pink-305'
                    }`}>High School Certificate</span>
                    <span className={`text-[9px] font-mono px-2 py-0.5 rounded border ${
                      isLight 
                        ? 'bg-purple-100 text-purple-700 border-purple-200 shadow-sm' 
                        : 'bg-purple-950 text-pink-300 border-purple-500/30'
                    }`}>Graduated</span>
                  </div>
                  <h4 className={`font-bold text-sm ${isLight ? 'text-slate-900' : 'text-white'}`}>Gyan Vidya Higher Secondary School</h4>
                  <p className={`text-xs mt-1.5 font-mono ${isLight ? 'text-pink-700' : 'text-pink-300'}`}>Score: 97.0% (Distinction)</p>
                </div>
              </motion.div>

            </div>
          </div>

        </section>

        {/* ---- CONTACT SECTION ---- */}
        <section id="contact" className="scroll-mt-24 space-y-8">
          
          <div className="text-left space-y-1.5">
            <span className={`text-[10px] font-mono tracking-widest uppercase block font-bold ${
              isLight ? 'text-purple-600' : 'text-[#ec4899]'
            }`}>06 / Contact</span>
            <h2 className={`text-2xl font-bold tracking-tight ${isLight ? 'text-slate-900' : 'text-white'}`}>Get in Touch</h2>
          </div>

          <ContactForm theme={theme} />

        </section>

      </main>

      {/* ================= FOOTER ================= */}
      <footer className={`border-t py-12 px-6 text-center select-none backdrop-blur-md relative overflow-hidden transition-all duration-305 ${
        isLight 
          ? 'border-slate-205 bg-slate-100/60' 
          : 'border-purple-950/20 bg-[#05040d]'
      }`}>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-20 bg-purple-600/5 rounded-full blur-[40px] pointer-events-none" />
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 relative z-10 text-xs font-mono">
          <div className="text-left space-y-2">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-550 to-cyan-500 font-extrabold block">Sanjay Sahu // Developer Portfolio</span>
            <span className={isLight ? 'text-slate-505' : 'text-zinc-500'}>Vibrant, responsive ecosystem built with React and Tailwind CSS.</span>
          </div>
          
          <div className="flex items-center gap-4 text-zinc-450">
            <button onClick={() => scrollToSection('home')} className="hover:text-cyan-400 font-semibold transition">Back to Top</button>
            <span className="text-purple-900/50">|</span>
            <a 
              href="https://github.com/sanjaysahu-fullstack" 
              target="_blank" 
              rel="noreferrer" 
              className={`hover:text-pink-500 transition-colors flex items-center gap-1.5 ${isLight ? 'text-slate-600 hover:text-purple-600' : 'text-zinc-400 hover:text-pink-400'}`}
              title="GitHub Profile"
            >
              <Github className="w-4 h-4" />
              <span className="sr-only">GitHub</span>
            </a>
            <a 
              href="https://linkedin.com/in/sanjaysahu10067" 
              target="_blank" 
              rel="noreferrer" 
              className={`hover:text-cyan-400 transition-colors flex items-center gap-1.5 ${isLight ? 'text-slate-600 hover:text-purple-600' : 'text-zinc-400 hover:text-cyan-400'}`}
              title="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <span className="text-purple-900/50">|</span>
            <span className="text-zinc-500">Balodabazar, Chhattisgarh, India</span>
          </div>

          <div className="text-purple-550 font-semibold">
            &copy; 2026. Custom Crafted.
          </div>
        </div>
      </footer>
    </div>
  );
}
