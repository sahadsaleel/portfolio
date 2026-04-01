"use client";

import { motion } from "framer-motion";
import {
  SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiNodedotjs,
  SiExpress, SiRedux, SiHtml5, SiCss, SiTailwindcss, SiBootstrap,
  SiMongodb, SiMysql, SiPostgresql, SiFirebase, SiRedis, SiSupabase,
  SiGit, SiGithub, SiPostman, SiDocker,
  SiCloudflare, SiFigma, SiNpm,
} from "react-icons/si";
import { FaJava, FaAws } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";
import { DiPhotoshop } from "react-icons/di";

const categories = [
  {
    label: "Languages & Frameworks",
    skills: [
      { icon: <SiJavascript />, name: "JavaScript", color: "#F7DF1E" },
      { icon: <SiTypescript />, name: "TypeScript", color: "#3178C6" },
      { icon: <SiReact />, name: "React", color: "#61DAFB" },
      { icon: <SiNextdotjs />, name: "Next.js", color: "#ffffff" },
      { icon: <SiNodedotjs />, name: "Node.js", color: "#339933" },
      { icon: <SiExpress />, name: "Express", color: "#ffffff" },
      { icon: <SiRedux />, name: "Redux", color: "#764ABC" },
      { icon: <SiHtml5 />, name: "HTML5", color: "#E34F26" },
      { icon: <SiCss />, name: "CSS3", color: "#1572B6" },
      { icon: <SiTailwindcss />, name: "Tailwind", color: "#06B6D4" },
      { icon: <SiBootstrap />, name: "Bootstrap", color: "#7952B3" },
      { icon: <FaJava />, name: "Java", color: "#ED8B00" },
      { icon: <TbBrandCpp />, name: "C++", color: "#00599C" },
    ],
  },
  {
    label: "Databases",
    skills: [
      { icon: <SiMongodb />, name: "MongoDB", color: "#47A248" },
      { icon: <SiMysql />, name: "MySQL", color: "#4479A1" },
      { icon: <SiPostgresql />, name: "PostgreSQL", color: "#336791" },
      { icon: <SiFirebase />, name: "Firebase", color: "#FFCA28" },
      { icon: <SiRedis />, name: "Redis", color: "#DC382D" },
      { icon: <SiSupabase />, name: "Supabase", color: "#3ECF8E" },
    ],
  },
  {
    label: "Tools & Platforms",
    skills: [
      { icon: <SiGit />, name: "Git", color: "#F05032" },
      { icon: <SiGithub />, name: "GitHub", color: "#ffffff" },
      { icon: <VscVscode />, name: "VS Code", color: "#007ACC" },
      { icon: <SiPostman />, name: "Postman", color: "#FF6C37" },
      { icon: <SiDocker />, name: "Docker", color: "#2496ED" },
      { icon: <FaAws />, name: "AWS", color: "#FF9900" },
      { icon: <SiCloudflare />, name: "Cloudflare", color: "#F48120" },
      { icon: <SiNpm />, name: "NPM", color: "#CB3837" },
      { icon: <SiFigma />, name: "Figma", color: "#F24E1E" },
      { icon: <DiPhotoshop />, name: "Photoshop", color: "#31A8FF" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 px-6 bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="section-label">Tech Stack</p>
          <h2 className="section-title">
            Tools I work <span className="gradient-text">with</span>
          </h2>
          <p className="section-subtitle">
            From frontend to backend to databases — here&apos;s my full toolkit.
          </p>
        </motion.div>

        <div className="space-y-12">
          {categories.map((cat, catIdx) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
            >
              <h3 className="text-xs font-semibold text-white/30 uppercase tracking-[0.15em] mb-5">
                {cat.label}
              </h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
                {cat.skills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.04 }}
                    className="skill-icon-card group"
                  >
                    <span
                      className="text-2xl transition-transform duration-200 group-hover:scale-110"
                      style={{ color: skill.color }}
                    >
                      {skill.icon}
                    </span>
                    <span className="text-[11px] text-white/40 group-hover:text-white/70 transition-colors text-center leading-tight">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
