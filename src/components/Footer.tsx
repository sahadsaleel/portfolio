import { FiGithub, FiLinkedin } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-indigo-600 flex items-center justify-center text-white font-bold text-xs">
            S
          </div>
          <span className="text-white/40 text-sm">
            Sahad Saleel C — MERN Stack Developer
          </span>
        </div>

        <p className="text-white/20 text-xs">
          Built with Next.js, Framer Motion & Tailwind CSS
        </p>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/SahadSaleel"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/30 hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <FiGithub size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/sahad-saleel/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/30 hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <FiLinkedin size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
