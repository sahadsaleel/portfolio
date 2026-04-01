"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMail, FiGithub, FiLinkedin, FiSend, FiCheck } from "react-icons/fi";

const socials = [
  {
    icon: <FiGithub size={18} />,
    label: "GitHub",
    handle: "@SahadSaleel",
    href: "https://github.com/SahadSaleel",
  },
  {
    icon: <FiLinkedin size={18} />,
    label: "LinkedIn",
    handle: "sahad-saleel",
    href: "https://www.linkedin.com/in/sahad-saleel/",
  },
  {
    icon: <FiMail size={18} />,
    label: "Email",
    handle: "sahadsaleel@gmail.com",
    href: "mailto:sahadsaleel@gmail.com",
  },
];

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Opens mailto as a simple contact method
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:sahadsaleel@gmail.com?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <p className="section-label">Contact</p>
          <h2 className="section-title mb-4">
            Let&apos;s <span className="gradient-text">work together</span>
          </h2>
          <p className="text-white/50 text-base max-w-md mx-auto leading-relaxed">
            Have a project in mind? Looking to hire a MERN stack developer?
            I&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left — form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <AnimatePresence mode="wait">
              {!sent ? (
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -20 }}
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-4"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs text-white/40 font-medium">Name</label>
                      <input
                        type="text"
                        required
                        placeholder="Your name"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="bg-white/[0.04] border border-white/8 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/20
                                   focus:outline-none focus:border-indigo-500/50 focus:bg-white/[0.06] transition-all duration-200"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs text-white/40 font-medium">Email</label>
                      <input
                        type="email"
                        required
                        placeholder="your@email.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="bg-white/[0.04] border border-white/8 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/20
                                   focus:outline-none focus:border-indigo-500/50 focus:bg-white/[0.06] transition-all duration-200"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-white/40 font-medium">Message</label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Tell me about your project..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="bg-white/[0.04] border border-white/8 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/20
                                 focus:outline-none focus:border-indigo-500/50 focus:bg-white/[0.06] transition-all duration-200 resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn-primary justify-center mt-1"
                  >
                    <FiSend size={15} /> Send Message
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success-message"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 px-6 glass-card border-emerald-500/20 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4">
                    <FiCheck size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-6">
                    Thanks for reaching out, {form.name.split(' ')[0]}! I&apos;ll get back to you as soon as possible.
                  </p>
                  <button 
                    onClick={() => setSent(false)}
                    className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
                  >
                    Send another message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Right — social links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col gap-4"
          >
            <p className="text-white/30 text-sm mb-2">Or reach me directly:</p>
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="glass-card p-5 flex items-center gap-4 group"
              >
                <div className="p-2.5 rounded-lg bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-500/20 transition-colors">
                  {s.icon}
                </div>
                <div>
                  <div className="text-xs text-white/30 font-medium">{s.label}</div>
                  <div className="text-white/80 text-sm font-medium group-hover:text-white transition-colors">
                    {s.handle}
                  </div>
                </div>
              </a>
            ))}

            {/* Download Resume */}
            <div className="glass-card p-5 mt-2 border-indigo-500/20">
              <p className="text-xs text-white/40 mb-3 font-medium">Resume</p>
              <p className="text-white/60 text-sm mb-4 leading-relaxed">
                Want to see my full experience and skills in one page?
              </p>
              <a href="/resume.pdf" download className="btn-primary w-full justify-center">
                Download Resume (PDF)
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
