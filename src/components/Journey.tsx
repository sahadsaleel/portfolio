"use client";

import { motion } from "framer-motion";

const milestones = [
  {
    year: "2020",
    title: "Mechanical Engineering Graduate",
    desc: "Completed my engineering degree. Good at problem-solving, but knew I wanted to build something different.",
    tag: "Education",
    tagColor: "text-blue-400 bg-blue-500/10 border-blue-500/20",
  },
  {
    year: "2022",
    title: "Wrote My First Line of Code",
    desc: "Started with Python and basic web. Realized I loved the instant feedback loop of coding — broke things, fixed things, shipped things.",
    tag: "Turning Point",
    tagColor: "text-purple-400 bg-purple-500/10 border-purple-500/20",
  },
  {
    year: "2023",
    title: "Deep Dive into JavaScript & React",
    desc: "Committed fully to frontend development. Built projects, watched countless tutorials, and started understanding the 'why' behind the code.",
    tag: "Frontend",
    tagColor: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
  },
  {
    year: "2024",
    title: "Went Full-Stack with MERN",
    desc: "Added Node.js, Express, and MongoDB to the toolkit. Built my first full authentication system — OTP, Google OAuth, JWT. It all clicked.",
    tag: "Full Stack",
    tagColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
  },
  {
    year: "2025",
    title: "Building Real-World Applications",
    desc: "Currently building an E-commerce platform and admin dashboard. Learning Data Structures in parallel. Every day is a new skill.",
    tag: "Now",
    tagColor: "text-amber-400 bg-amber-500/10 border-amber-500/20",
  },
];

export default function Journey() {
  return (
    <section id="journey" className="py-24 md:py-32 px-6 bg-[#0d0d0d]">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="section-label">My Journey</p>
          <h2 className="section-title mb-4">
            Built skill by <span className="gradient-text">skill</span>.
          </h2>
          <blockquote className="border-l-2 border-indigo-500 pl-4 text-white/50 italic text-base md:text-lg leading-relaxed max-w-2xl">
            &quot;I didn&apos;t switch careers overnight. I showed up every day and built
            skills step by step.&quot;
          </blockquote>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/5 -translate-x-1/2" />

          <div className="space-y-10">
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`relative flex flex-col md:flex-row gap-6 md:gap-10 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 top-3 w-3 h-3 rounded-full bg-indigo-500 -translate-x-1/2 ring-4 ring-[#0d0d0d] z-10" />

                {/* Year label (desktop) */}
                <div
                  className={`hidden md:flex items-start pt-1 w-1/2 ${
                    i % 2 === 0 ? "justify-end pr-12" : "justify-start pl-12"
                  }`}
                >
                  <span className="text-sm font-bold text-indigo-400">{m.year}</span>
                </div>

                {/* Card */}
                <div className={`pl-10 md:pl-0 md:w-1/2 ${i % 2 === 0 ? "md:pl-12" : "md:pr-12"}`}>
                  <div className="glass-card p-5">
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                      <span className="text-xs font-bold text-indigo-400 md:hidden">{m.year}</span>
                      <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${m.tagColor}`}>
                        {m.tag}
                      </span>
                    </div>
                    <h3 className="text-white font-semibold text-sm mb-2">{m.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed">{m.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
