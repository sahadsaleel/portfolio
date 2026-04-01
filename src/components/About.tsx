"use client";

import { motion } from "framer-motion";
import { FiCode, FiTrendingUp, FiBook } from "react-icons/fi";

const highlights = [
  {
    icon: <FiCode size={18} />,
    title: "Full-Stack Builder",
    desc: "I build end-to-end web apps with MongoDB, Express, React, and Node.js.",
  },
  {
    icon: <FiTrendingUp size={18} />,
    title: "Career Switcher",
    desc: "Mechanical Engineer turned Software Developer — discipline runs deep.",
  },
  {
    icon: <FiBook size={18} />,
    title: "Always Learning",
    desc: "Currently levelling up in MERN Stack and Data Structures every day.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="section-label">About Me</p>
            <h2 className="section-title mb-6">
              Mechanical engineer who{" "}
              <span className="gradient-text">chose code</span>.
            </h2>
            <div className="space-y-4 text-white/60 leading-relaxed text-base">
              <p>
                I&apos;m Sahad Saleel C, a MERN Stack Developer focused on building
                real-world applications that actually solve problems. I didn&apos;t take
                a shortcut — I transitioned from Mechanical Engineering by showing
                up every single day and building things.
              </p>
              <p>
                I believe in{" "}
                <span className="text-white font-medium">
                  consistency over motivation
                </span>
                . Motivation fades, but a daily habit of coding doesn&apos;t. That&apos;s
                how I&apos;ve gotten here, and it&apos;s how I&apos;ll keep going.
              </p>
              <p>
                I also love explaining technical concepts in simple words — if
                you can&apos;t explain it simply, you don&apos;t understand it well enough.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mt-8">
              <a
                href="https://github.com/SahadSaleel"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-sm py-2 px-4"
              >
                GitHub Profile
              </a>
              <a
                href="https://www.linkedin.com/in/sahad-saleel/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-sm py-2 px-4"
              >
                LinkedIn
              </a>
            </div>
          </motion.div>

          {/* Right — highlight cards */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-4"
          >
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * i }}
                className="glass-card p-6 flex items-start gap-4"
              >
                <div className="p-2.5 rounded-lg bg-indigo-500/10 text-indigo-400 flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}

            {/* Currently working on */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="glass-card p-6 border-indigo-500/20"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="dot-online" />
                <span className="text-xs font-semibold text-indigo-400 uppercase tracking-wider">Currently Building</span>
              </div>
              <ul className="space-y-2">
                {[
                  "Full-stack E-commerce Website",
                  "Admin Panel (Orders, Coupons, Users)",
                  "Advanced Authentication System",
                ].map((item) => (
                  <li key={item} className="text-sm text-white/60 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
