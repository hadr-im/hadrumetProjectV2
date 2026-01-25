import React from "react";
import video from "../../assets/global-village/gv.mp4";

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2 object-cover"
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Dark Overlay with Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white font-medium text-sm mb-8 animate-fade-in">
          <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
          Cultural Celebration Event
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 text-white drop-shadow-2xl animate-fade-in tracking-tight">
          Global Village
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl bg-gradient-to-r from-blue-200 via-cyan-200 to-blue-200 bg-clip-text text-transparent font-bold mb-12 drop-shadow-lg">
          See you in Summer 2026
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="flex flex-col items-center gap-2 text-white/80">
          <span className="text-sm font-medium">Scroll to explore</span>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
