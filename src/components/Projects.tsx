import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Neon Nexus",
      description: "A futuristic e-commerce platform built with Next.js and WebGL.",
      image: "/placeholders/1.png",
      tags: ["React Space", "Three.js", "TailwindCSS"],
    },
    {
      id: 2,
      title: "Aura Mobile",
      description: "Sleek fin-tech banking app redesign emphasizing glassmorphism.",
      image: "/placeholders/2.png",
      tags: ["React Native", "Framer Motion", "Zustand"],
    },
    {
      id: 3,
      title: "Synthetix API",
      description: "Developer-first dashboard for managing AI agent infrastructure.",
      image: "/placeholders/3.png",
      tags: ["Next.js", "tRPC", "Prisma"],
    },
  ];

  return (
    <section className="relative z-20 bg-[#121212] flex flex-col items-center justify-center py-24 md:py-32 w-full px-6">
      
      <div className="w-full max-w-6xl">
        <h3 className="text-3xl md:text-5xl font-semibold mb-12 text-white">Selected Works</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="group relative flex flex-col rounded-2xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:bg-white/10 cursor-pointer shadow-lg hover:shadow-2xl"
            >
              {/* Image Container */}
              <div className="relative aspect-video w-full overflow-hidden bg-white/5">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                />
                
                {/* Arrow Icon overlay */}
                <div className="absolute top-4 right-4 p-2 rounded-full bg-black/40 border border-white/10 backdrop-blur-md mix-blend-difference opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowUpRight className="text-white w-5 h-5" />
                </div>
              </div>

              {/* Content Container */}
              <div className="p-6 flex flex-col flex-1">
                <h4 className="text-xl font-medium text-white mb-2 tracking-tight">
                  {project.title}
                </h4>
                <p className="text-white/60 font-light mb-6 flex-1">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="text-xs px-3 py-1 rounded-full bg-white/10 text-white/80 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
