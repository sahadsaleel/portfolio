"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion, useMotionValueEvent } from "framer-motion";
import { FiGithub, FiLinkedin, FiArrowDown } from "react-icons/fi";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const frameCount = 240;

  // Single scroll tracker for both Canvas and Overlays
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // ---- CANVAS PRELOADING & DRAWING ----
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];

    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      const frameNum = i.toString().padStart(3, "0");
      img.src = `/profileImages/ezgif-frame-${frameNum}.png`;
      loadedImages.push(img);
    }
    
    setImages(loadedImages);
    
    loadedImages[0].onload = () => {
      drawFrame(loadedImages[0]);
    };
  }, []);

  const drawFrame = (image: HTMLImageElement | undefined) => {
    if (!image || !canvasRef.current || !image.complete) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // object-fit: cover implementation
    const imgRatio = image.width / image.height;
    const canvasRatio = canvas.width / canvas.height;
    
    let drawWidth, drawHeight, offsetX, offsetY;
    
    if (canvasRatio > imgRatio) {
      drawWidth = canvas.width;
      drawHeight = canvas.width / imgRatio;
      offsetX = 0;
      offsetY = (canvas.height - drawHeight) / 2;
    } else {
      drawWidth = canvas.height * imgRatio;
      drawHeight = canvas.height;
      offsetX = (canvas.width - drawWidth) / 2;
      offsetY = 0;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(image, offsetX, offsetY, drawWidth, drawHeight);
  };

  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
        if (images.length > 0) {
          const frameIndex = Math.floor(scrollYProgress.get() * (frameCount - 1));
          drawFrame(images[frameIndex]);
        }
      }
    };

    handleResize(); 
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [images, scrollYProgress]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (images.length === 0) return;
    const frameIndex = Math.min(
      frameCount - 1,
      Math.floor(latest * (frameCount - 1))
    );
    drawFrame(images[frameIndex]);
  });

  // ---- OVERLAY ANIMATIONS ----
  
  // Section 1: 0% to 20% scroll (Main Hero Heading)
  const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.2], ["0%", "-50%"]);

  // Section 2: 30% to 50% scroll (Role/Skills)
  const opacity2 = useTransform(scrollYProgress, [0.25, 0.35, 0.45, 0.55], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.25, 0.55], ["50%", "-50%"]);

  // Section 3: 65% to 85% scroll (Call to Action)
  const opacity3 = useTransform(scrollYProgress, [0.6, 0.7, 0.85, 0.95], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.6, 0.95], ["50%", "-50%"]);

  return (
    <section ref={containerRef} className="h-[500vh] relative w-full bg-[#0a0a0a]">
      {/* Sticky container holds both the canvas and the animating text overlays */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        
        {/* Canvas Background */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full block bg-[#0a0a0a] z-0"
        />

        {/* Ambient glow from current Hero */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-indigo-600/5 blur-[120px] pointer-events-none" />

        <div className="absolute inset-0 z-10 pointer-events-none flex flex-col justify-center px-8 md:px-24">
          
          {/* Section 1: Introduction */}
          <motion.div 
            style={{ opacity: opacity1, y: y1 }}
            className="absolute inset-x-0 flex flex-col items-center justify-center text-center"
          >
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs text-white/60 mb-8 backdrop-blur-sm">
              <span className="dot-online" />
              Open to work — MERN Stack Developer
            </div>

            <h1 className="text-5xl md:text-8xl font-bold tracking-tight text-white mb-4 leading-none">
              Sahad{" "}
              <span className="gradient-text">Saleel C</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/40 font-light tracking-wide italic">
              "Code. Improve. Repeat."
            </p>
          </motion.div>

          {/* Section 2: Role/Details */}
          <motion.div 
            style={{ opacity: opacity2, y: y2 }}
            className="absolute inset-x-8 md:inset-x-24 flex flex-col items-start justify-center text-left"
          >
            <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-white drop-shadow-lg max-w-2xl leading-tight">
              I build <span className="text-indigo-400">digital experiences</span> with precision.
            </h2>
            <p className="text-lg md:text-xl text-white/60 mt-6 max-w-xl font-light leading-relaxed">
              Specializing in the <span className="text-white/90 font-medium">MERN stack</span> — focused on clean code, real-world problems, and fluid animations.
            </p>
          </motion.div>

          {/* Section 3: Call to Action & Socials */}
          <motion.div 
            style={{ opacity: opacity3, y: y3 }}
            className="absolute inset-x-8 md:inset-x-24 flex flex-col items-center justify-center text-center"
          >
            <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-10">
              Let's create something <span className="gradient-text">impactful.</span>
            </h2>
            
            <div className="flex flex-wrap items-center justify-center gap-6 pointer-events-auto">
              <a href="#projects" className="btn-primary scale-110">
                View My Work
              </a>
              <a href="#contact" className="btn-secondary scale-110">
                Get In Touch
              </a>
            </div>

            <div className="flex items-center justify-center gap-6 mt-12 pointer-events-auto">
              <a
                href="https://github.com/SahadSaleel"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/5 border border-white/10 text-white/60 hover:text-white hover:border-white/20 hover:bg-white/10 transition-all duration-200"
                aria-label="GitHub"
              >
                <FiGithub size={22} />
              </a>
              <a
                href="https://www.linkedin.com/in/sahad-saleel/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/5 border border-white/10 text-white/60 hover:text-white hover:border-white/20 hover:bg-white/10 transition-all duration-200"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={22} />
              </a>
            </div>
          </motion.div>

        </div>

        {/* Scroll indicator - Only visible near the top */}
        <motion.div
          style={{ opacity: opacity1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30"
        >
          <span className="text-[10px] tracking-[0.4em] font-medium uppercase">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <FiArrowDown size={16} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
