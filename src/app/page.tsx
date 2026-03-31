import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="bg-[#121212] min-h-screen text-white selection:bg-white/30 selection:text-white">
      {/* 
        This wrapper is essential. 
        ScrollyCanvas is exactly 500vh tall to allow for a long runway.
        Inside it, there's a sticky container for the canvas. 
        Overlay sits absolute and covers the same 500vh space, tracking scroll in parallel.
      */}
      <div className="relative w-full">
        <Overlay />
        <ScrollyCanvas />
      </div>

      {/* Projects section directly proceeding the 500vh gap */}
      <Projects />
    </main>
  );
}
