import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <iframe
          src="https://www.youtube.com/embed/Viu_ptw9MrU?autoplay=1&mute=1&loop=1&playlist=Viu_ptw9MrU&controls=0&modestbranding=1&showinfo=0&rel=0"
          className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2"
          allow="autoplay; encrypted-media"
          title="Background Video"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-6xl md:text-8xl font-black mb-4 text-white drop-shadow-2xl animate-fade-in tracking-tight">
          Global Village
        </h1>
        <p className="text-2xl md:text-3xl text-blue-100 font-bold mb-10 drop-shadow-lg">
          See you in Summer 2026
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-xl">
            Watch Highlights
          </button>
          <button className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-md rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-xl">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
