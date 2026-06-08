import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, Mail, MapPin, Send, CheckCircle2, 
  Github, Linkedin, Copy, Check, Loader2 
} from 'lucide-react';

interface ContactFormProps {
  theme?: 'dark' | 'light';
}

export default function ContactForm({ theme = 'dark' }: ContactFormProps) {
  const isLight = theme === 'light';
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [copiedType, setCopiedType] = useState<string | null>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('sending');

    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left mt-2">
      
      {/* ================= LEFT SIDE: DIRECT CHANNELS & CREDENTIALS ================= */}
      <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
        
        <div className="space-y-4">
          <span className={`text-[10px] font-mono tracking-widest uppercase block font-bold ${
            isLight ? 'text-purple-600' : 'text-[#ec4899]'
          }`}>Reach Out</span>
          <h3 className={`text-xl font-bold tracking-tight ${
            isLight ? 'text-slate-800' : 'text-white'
          }`}>Let's craft something remarkable together</h3>
          <p className={`text-xs leading-relaxed ${
            isLight ? 'text-slate-600' : 'text-zinc-400'
          }`}>
            I am currently open for full-time opportunities, internship contracts, and product work. Reach out directly for project conversations.
          </p>
        </div>

        {/* Contact credentials with copy-to-clipboard features */}
        <div className="space-y-3 pt-2">
          
          {/* Phone */}
          <div className={`p-3.5 rounded-xl border transition-all flex items-center justify-between group ${
            isLight 
              ? 'bg-white border-slate-205/90 hover:border-purple-300 hover:shadow-[0_8px_25px_rgba(139,92,246,0.04)] text-slate-800' 
              : 'bg-[#130d2a]/30 border-purple-500/20 hover:border-purple-500/40 text-zinc-100'
          }`}>
            <div className="flex items-center gap-3">
              <span className={`p-2 rounded-lg border flex items-center justify-center ${
                isLight 
                  ? 'bg-purple-50 border-purple-200 text-purple-650 shadow-[0_2px_8px_rgba(139,92,246,0.06)]' 
                  : 'bg-black border border-purple-950 text-purple-400 shadow-[0_0_8px_rgba(139,92,246,0.15)]'
              }`}>
                <Phone className="w-3.5 h-3.5" />
              </span>
              <div>
                <span className={`text-[9px] font-mono uppercase block font-semibold ${
                  isLight ? 'text-purple-600' : 'text-[#ec4899]'
                }`}>Phone</span>
                <span className={`text-xs font-bold tracking-wide ${
                  isLight ? 'text-slate-800' : 'text-zinc-105'
                }`}>+91-8120067073</span>
              </div>
            </div>
            <button
              onClick={() => copyToClipboard('+918120067073', 'phone')}
              className={`p-1.5 px-2 rounded-lg transition flex items-center gap-1 text-[9px] font-mono font-bold ${
                isLight 
                  ? 'bg-slate-50 border-slate-200 text-slate-650 hover:bg-slate-100' 
                  : 'bg-[#0e0722] border-purple-900/60 text-purple-300 hover:text-white'
              }`}
            >
              {copiedType === 'phone' ? (
                <>
                  <Check className="w-3 h-3 text-pink-500" />
                  <span className="text-pink-500">Copied</span>
                </>
              ) : (
                <span>Copy</span>
              )}
            </button>
          </div>

          {/* Email */}
          <div className={`p-3.5 rounded-xl border transition-all flex items-center justify-between group ${
            isLight 
              ? 'bg-white border-slate-205/90 hover:border-cyan-300 hover:shadow-[0_8px_25px_rgba(6,182,212,0.04)] text-slate-800' 
              : 'bg-[#0a152d]/30 border-cyan-500/20 hover:border-cyan-500/40 text-zinc-100'
          }`}>
            <div className="flex items-center gap-3">
              <span className={`p-2 rounded-lg border flex items-center justify-center ${
                isLight 
                  ? 'bg-cyan-50 border-cyan-200 text-cyan-650 shadow-[0_2px_8px_rgba(6,182,212,0.06)]' 
                  : 'bg-black border border-cyan-950 text-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.15)]'
              }`}>
                <Mail className="w-3.5 h-3.5" />
              </span>
              <div>
                <span className={`text-[9px] font-mono uppercase block font-semibold ${
                  isLight ? 'text-cyan-600' : 'text-cyan-400'
                }`}>Email</span>
                <span className={`text-xs font-bold break-all ${
                  isLight ? 'text-slate-800' : 'text-zinc-105'
                }`}>sanjaysahu10067@gmail.com</span>
              </div>
            </div>
            <button
              onClick={() => copyToClipboard('sanjaysahu10067@gmail.com', 'email')}
              className={`p-1.5 px-2 rounded-lg transition flex items-center gap-1 text-[9px] font-mono font-bold ${
                isLight 
                  ? 'bg-slate-50 border-slate-200 text-slate-650 hover:bg-slate-100' 
                  : 'bg-[#051125] border-cyan-900/60 text-cyan-300 hover:text-white'
              }`}
            >
              {copiedType === 'email' ? (
                <>
                  <Check className="w-3 h-3 text-cyan-500" />
                  <span className="text-cyan-505">Copied</span>
                </>
              ) : (
                <span>Copy</span>
              )}
            </button>
          </div>

          {/* Location */}
          <div className={`p-3.5 rounded-xl border transition-all flex items-center gap-3 ${
            isLight 
              ? 'bg-white border-slate-205/90 shadow-[0_8px_25px_rgba(139,92,246,0.02)] text-slate-800' 
              : 'bg-[#130d2a]/30 border-purple-500/20 text-zinc-105'
          }`}>
            <span className={`p-2 rounded-lg border flex items-center justify-center shrink-0 ${
              isLight 
                ? 'bg-pink-50 border-pink-200 text-[#ec4899] shadow-[0_2px_8px_rgba(236,72,153,0.06)]' 
                : 'bg-black border border-purple-950 text-pink-400 shadow-[0_0_8px_rgba(236,72,153,0.15)]'
            }`}>
              <MapPin className="w-3.5 h-3.5" />
            </span>
            <div>
              <span className={`text-[9px] font-mono uppercase block font-semibold ${
                isLight ? 'text-purple-600' : 'text-purple-300'
              }`}>Location</span>
              <span className={`text-xs font-bold ${
                isLight ? 'text-slate-800' : 'text-zinc-100'
              }`}>Balodabazar, Chhattisgarh, India</span>
            </div>
          </div>

        </div>

        {/* Connections links card */}
        <div className={`p-4 rounded-xl border flex items-center justify-between text-xs font-mono ${
          isLight ? 'bg-slate-50 border-slate-200' : 'bg-[#05040d] border-purple-950/40'
        }`}>
          <span className="text-zinc-500 font-semibold uppercase text-[9px] tracking-wider">PROFILES</span>
          <div className="flex gap-2">
            <a
              href="https://github.com/sanjaysahu10067"
              target="_blank"
              rel="noreferrer"
              className={`p-1.5 px-3 border rounded-lg transition-all flex items-center gap-1.5 text-[10px] font-bold ${
                isLight 
                  ? 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100 hover:border-pink-505/40' 
                  : 'bg-[#130d2a]/50 border-purple-900/60 text-purple-200 hover:text-white shadow-[0_0_8px_rgba(168,85,247,0.1)]'
              }`}
            >
              <Github className="w-3.5 h-3.5 text-pink-500" />
              <span>GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/sanjaysahu10067"
              target="_blank"
              rel="noreferrer"
              className={`p-1.5 px-3 border rounded-lg transition-all flex items-center gap-1.5 text-[10px] font-bold ${
                isLight 
                  ? 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100 hover:border-cyan-505/40' 
                  : 'bg-[#0a152d]/50 border-cyan-900/60 text-cyan-200 hover:text-white shadow-[0_0_8px_rgba(6,182,212,0.1)]'
              }`}
            >
              <Linkedin className="w-3.5 h-3.5 text-cyan-500" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

      </div>

      {/* ================= RIGHT SIDE: MINIMAL FORM ================= */}
      <div className={`lg:col-span-7 rounded-2xl p-6 relative flex flex-col justify-between border transition-all duration-300 ${
        isLight 
          ? 'bg-white border-slate-200 shadow-[0_10px_40px_rgba(139,92,246,0.05)] text-slate-800' 
          : 'bg-[#130d2a]/10 border-purple-950/30 shadow-[0_0_30px_rgba(139,92,246,0.05)] text-white'
      }`}>
        
        <AnimatePresence mode="wait">
          {status === 'idle' && (
            <motion.form
              key="contact-form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5 text-left">
                  <label className={`text-[10px] font-mono uppercase tracking-wilder block font-bold ${
                    isLight ? 'text-purple-600' : 'text-purple-300'
                  }`}>Your Name</label>
                  <input
                    type="text"
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="e.g. Sanjay"
                    className={`w-full rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:shadow-[0_0_12px_rgba(236,72,153,0.3)] transition border ${
                      isLight 
                        ? 'bg-slate-50 text-slate-850 border-slate-200 focus:bg-white focus:border-pink-500' 
                        : 'bg-[#05040d] text-white border-purple-900/30 focus:border-pink-500'
                    }`}
                  />
                </div>
                <div className="space-y-1.5 text-left">
                  <label className={`text-[10px] font-mono uppercase tracking-wilder block font-bold ${
                    isLight ? 'text-cyan-600' : 'text-cyan-300'
                  }`}>Your Email</label>
                  <input
                    type="email"
                    required
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="e.g. user@gmail.com"
                    className={`w-full rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:shadow-[0_0_12px_rgba(6,182,212,0.3)] transition border ${
                      isLight 
                        ? 'bg-slate-50 text-slate-850 border-slate-200 focus:bg-white focus:border-cyan-400' 
                        : 'bg-[#05040d] text-white border-cyan-900/30 focus:border-cyan-400'
                    }`}
                  />
                </div>
              </div>

              <div className="space-y-1.5 text-left">
                <label className={`text-[10px] font-mono uppercase tracking-wilder block font-bold ${
                  isLight ? 'text-purple-600' : 'text-purple-300'
                }`}>Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="e.g. MERN stack project discussion"
                  className={`w-full rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:shadow-[0_0_12px_rgba(168,85,247,0.25)] transition border ${
                    isLight 
                      ? 'bg-slate-50 text-slate-850 border-slate-205 focus:bg-white focus:border-pink-500' 
                      : 'bg-[#05040d] text-white border-purple-900/30 focus:border-pink-500'
                  }`}
                />
              </div>

              <div className="space-y-1.5 text-left">
                <label className={`text-[10px] font-mono uppercase tracking-wilder block font-bold ${
                  isLight ? 'text-cyan-600' : 'text-cyan-400'
                }`}>Message</label>
                <textarea
                  required
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Describe your goals..."
                  className={`w-full rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:shadow-[0_0_12px_rgba(6,182,212,0.25)] transition resize-none border ${
                    isLight 
                      ? 'bg-slate-50 text-slate-850 border-slate-205 focus:bg-white focus:border-cyan-400' 
                      : 'bg-[#05040d] text-white border-cyan-900/30 focus:border-cyan-400'
                  }`}
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500 hover:from-purple-500 hover:via-pink-400 hover:to-cyan-400 text-white font-bold rounded-xl font-mono text-xs transition duration-300 flex items-center justify-center gap-2 hover:scale-[1.015] shadow-[0_4px_12px_rgba(168,85,247,0.25)] hover:shadow-[0_4px_25px_rgba(168,85,247,0.45)]"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Send Message</span>
              </button>
            </motion.form>
          )}

          {status === 'sending' && (
            <motion.div
              key="sending-screen"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex-1 flex flex-col justify-center items-center py-16 space-y-3"
            >
              <Loader2 className="w-5 h-5 animate-spin text-pink-400 shadow-[0_0_10px_#ec4899]/20" />
              <span className="text-[10px] font-mono text-purple-400 uppercase tracking-widest font-bold font-mono">TRANSMITTING SECURE DATA...</span>
            </motion.div>
          )}

          {status === 'success' && (
            <motion.div
              key="success-screen"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="flex-1 flex flex-col justify-center items-center text-center py-12 space-y-4"
            >
              <div className={`p-3 rounded-full border shadow-sm ${
                isLight 
                  ? 'bg-purple-50 border-purple-200 text-purple-600 shadow-[0_2px_10px_rgba(139,92,246,0.06)]' 
                  : 'bg-purple-950/40 border-pink-500/40 text-pink-400 shadow-[0_0_15px_rgba(236,72,153,0.3)]'
              }`}>
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className={`text-base font-bold font-sans ${isLight ? 'text-slate-900' : 'text-white'}`}>Message Transmitted</h4>
              <p className={`text-xs max-w-xs leading-relaxed mx-auto ${isLight ? 'text-slate-600' : 'text-zinc-400'}`}>
                Thank you for reaching out, Sanjay. I will respond to your MERN Stack inquiry as soon as possible.
              </p>
              
              <button
                onClick={() => setStatus('idle')}
                className={`px-4 py-1.5 border rounded-lg text-[10px] font-mono font-bold transition shadow-sm ${
                  isLight 
                    ? 'bg-purple-50 border-purple-200 text-purple-700 hover:bg-purple-100' 
                    : 'bg-purple-950/20 border-purple-500/30 hover:bg-[#130d2a] text-purple-305 hover:text-white'
                }`}
              >
                Compose Another
              </button>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
