"use client";

import { useEffect, useRef, useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

export default function ScrollyCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const frameCount = 240; // Updated to 240 frames

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Preload images
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];

    // Preload loop logic starting from ezgif-frame-001.png
    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      // Format number to '001', '002', ..., '240'
      const frameNum = i.toString().padStart(3, "0");
      img.src = `/profileImages/ezgif-frame-${frameNum}.png`;
      loadedImages.push(img);
    }
    
    // Set images immediately. Then draw the first frame once it loads.
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

    // To ensure object-fit: cover logic
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

  // Resize handling
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
        // Redraw current frame
        if (images.length > 0) {
          const frameIndex = Math.floor(scrollYProgress.get() * (frameCount - 1));
          drawFrame(images[frameIndex]);
        }
      }
    };

    handleResize(); // Init size on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [images, scrollYProgress]);

  // Sync scroll with frame index
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (images.length === 0) return;
    
    // latest is a value between 0 and 1
    const frameIndex = Math.min(
      frameCount - 1,
      Math.floor(latest * (frameCount - 1))
    );
    
    requestAnimationFrame(() => drawFrame(images[frameIndex]));
  });

  return (
    <div ref={containerRef} className="h-[500vh] relative w-full bg-[#121212]">
      <div className="sticky top-0 h-screen w-full overflow-hidden z-0">
        <canvas
          ref={canvasRef}
          className="w-full h-full block bg-[#121212] absolute top-0 left-0"
        />
      </div>
    </div>
  );
}
