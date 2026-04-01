"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiExternalLink, FiStar, FiLoader } from "react-icons/fi";

type Filter = "All" | "Full Stack" | "Frontend" | "Backend";

interface Project {
  title: string;
  desc: string;
  tags: string[];
  category: Filter;
  github: string;
  live: string;
  highlight: boolean;
  status: string;
}

const manualProjects: Project[] = [
  {
    title: "E-Commerce Website",
    desc: "Full-stack e-commerce platform with product listings, cart, checkout, and payment integration. Built for real-world use.",
    tags: ["Next.js", "Node.js", "MongoDB", "Express", "Tailwind", "Redux"],
    category: "Full Stack",
    github: "https://github.com/SahadSaleel",
    live: "",
    highlight: true,
    status: "In Progress",
  },
  {
    title: "Admin Dashboard",
    desc: "Full-featured admin panel for managing orders, users, coupons, inventory, and analytics with role-based access control.",
    tags: ["React", "Node.js", "MongoDB", "Express", "Chart.js"],
    category: "Full Stack",
    github: "https://github.com/SahadSaleel",
    live: "",
    highlight: true,
    status: "In Progress",
  },
  {
    title: "Authentication System",
    desc: "Secure auth system with OTP-based email verification, Google OAuth, JWT tokens, refresh tokens, and protected routes.",
    tags: ["Node.js", "Express", "MongoDB", "JWT", "Nodemailer", "OAuth2"],
    category: "Backend",
    github: "https://github.com/SahadSaleel",
    live: "",
    highlight: true,
    status: "Complete",
  },
];

const filters: Filter[] = ["All", "Full Stack", "Frontend", "Backend"];

export default function Projects() {
  const [active, setActive] = useState<Filter>("All");
  const [repos, setRepos] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRepos() {
      try {
        const res = await fetch("https://api.github.com/users/SahadSaleel/repos?sort=updated&per_page=6");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        
        // Filter out repos that might already be in manualProjects (by title match)
        const manualTitles = manualProjects.map(p => p.title.toLowerCase());
        
        const fetchedProjects: Project[] = data
          .filter((repo: any) => !manualTitles.includes(repo.name.toLowerCase()) && !repo.fork)
          .map((repo: any) => ({
            title: repo.name.replace(/-/g, " "),
            desc: repo.description || "No description provided.",
            tags: repo.language ? [repo.language] : ["Web"],
            category: (repo.language === "JavaScript" || repo.language === "TypeScript") ? "Frontend" : "All",
            github: repo.html_url,
            live: repo.homepage || "",
            highlight: false,
            status: "Complete",
          }));
        
        setRepos(fetchedProjects);
      } catch (err) {
        console.error("Error fetching repos:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchRepos();
  }, []);

  const allProjects = [...manualProjects, ...repos];
  const filtered = allProjects.filter(
    (p) => active === "All" || p.category === active
  );

  return (
    <section id="projects" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <p className="section-label">Projects</p>
          <div className="flex flex-col md:flex-row md:items-end gap-4 justify-between">
            <h2 className="section-title">
              Things I&apos;ve <span className="gradient-text">built</span>
            </h2>
            <a
              href="https://github.com/SahadSaleel"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-sm py-2 px-4 self-start md:self-auto"
            >
              <FiGithub size={14} /> View GitHub
            </a>
          </div>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`filter-tab ${active === f ? "active" : ""}`}
            >
              {f}
            </button>
          ))}
        </motion.div>

        {/* Project Grid */}
        <div className="min-h-[400px] relative">
          <AnimatePresence mode="wait">
            {loading ? (
              <motion.div
                key="loader"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="flex flex-col items-center gap-3 text-white/40">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  >
                    <FiLoader size={24} />
                  </motion.div>
                  <span className="text-xs font-medium tracking-widest uppercase">Fetching Projects...</span>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
              >
                {filtered.map((project, i) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.06 }}
                    className={`glass-card p-6 flex flex-col gap-4 relative ${
                      project.highlight ? "border-indigo-500/20" : ""
                    }`}
                  >
                    {/* Top row */}
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-2 flex-wrap">
                        {project.highlight && (
                          <span className="flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-full bg-indigo-500/15 text-indigo-400 font-semibold border border-indigo-500/20">
                            <FiStar size={9} /> Featured
                          </span>
                        )}
                        <span
                          className={`text-[10px] px-2 py-0.5 rounded-full font-semibold border ${
                            project.status === "In Progress"
                              ? "bg-amber-500/10 text-amber-400 border-amber-500/20"
                              : "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                          }`}
                        >
                          {project.status}
                        </span>
                      </div>

                      {/* Links */}
                      <div className="flex items-center gap-2 flex-shrink-0">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white/40 hover:text-white transition-colors"
                            aria-label="GitHub"
                          >
                            <FiGithub size={16} />
                          </a>
                        )}
                        {project.live && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white/40 hover:text-white transition-colors"
                            aria-label="Live"
                          >
                            <FiExternalLink size={16} />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Title & desc */}
                    <div>
                      <h3 className="text-white font-semibold text-base mb-2">
                        {project.title}
                      </h3>
                      <p className="text-white/50 text-sm leading-relaxed">
                        {project.desc}
                      </p>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mt-auto pt-1">
                      {project.tags.map((tag) => (
                        <span key={tag} className="tech-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
