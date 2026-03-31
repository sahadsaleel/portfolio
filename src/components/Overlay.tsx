"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Overlay() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // The overlay tracks the global window scroll, same as the canvas
  // We can just rely on the document scroll since this sits inside the 500vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Section 1: 0% to 20% scroll
  const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.2], ["0%", "-50%"]);

  // Section 2: 30% to 50% scroll
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.3, 0.4, 0.5], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.2, 0.5], ["50%", "-50%"]);

  // Section 3: 60% to 80% scroll
  const opacity3 = useTransform(scrollYProgress, [0.5, 0.6, 0.7, 0.8], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.5, 0.8], ["50%", "-50%"]);

  return (
    <div ref={containerRef} className="absolute top-0 left-0 w-full h-full pointer-events-none z-10">
      
      {/* Container for viewport-sticky elements */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center px-8 md:px-24">
        
        {/* Section 1 */}
        <motion.div 
          style={{ opacity: opacity1, y: y1 }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4 text-white drop-shadow-lg">
            Sahad Saleel.
          </h1>
          <p className="text-xl md:text-2xl text-white/70 font-light">
            Creative Developer.
          </p>
        </motion.div>

        {/* Section 2 */}
        <motion.div 
          style={{ opacity: opacity2, y: y2 }}
          className="absolute inset-0 flex flex-col items-start justify-center max-w-2xl text-left px-8 md:px-24"
        >
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-white drop-shadow-lg">
            I build digital experiences.
          </h2>
          <p className="text-lg md:text-xl text-white/70 mt-4 max-w-lg font-light">
            Specializing in high-performance web applications, fluid animations, and immersive storytelling.
          </p>
        </motion.div>

        {/* Section 3 */}
        <motion.div 
          style={{ opacity: opacity3, y: y3 }}
          className="absolute inset-0 flex flex-col items-end justify-center text-right px-8 md:px-24"
        >
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight max-w-2xl text-white drop-shadow-lg">
            Bridging design and engineering.
          </h2>
          <p className="text-lg md:text-xl text-white/70 mt-4 max-w-lg font-light">
            Every pixel holds purpose. Every line of code enables creativity.
          </p>
        </motion.div>

      </div>
    </div>
  );
}
