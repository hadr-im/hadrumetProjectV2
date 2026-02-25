import { Link } from "react-router-dom";
import CountUp from "./CountUp";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center min-h-screen px-4 pt-24 pb-12 overflow-hidden bg-gradient-to-b from-gray-50 to-white"
    >
      {/* --- Advanced Background Blur Effects --- */}
      {/* Large top-left gradient orb */}
      <div
        className="absolute -top-24 -left-24 w-[500px] h-[500px] bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-20 blur-3xl animate-pulse"
        style={{ animationDuration: "8s" }}
      />

      {/* Medium center orb */}
      <div
        className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-gradient-to-tr from-cyan-300 to-blue-500 rounded-full opacity-15 blur-3xl"
        style={{ animation: "float 10s ease-in-out infinite" }}
      />

      {/* Small bottom-right accent */}
      <div
        className="absolute bottom-20 right-10 w-[300px] h-[300px] bg-gradient-to-tl from-blue-300 to-indigo-400 rounded-full opacity-25 blur-3xl"
        style={{ animation: "float 7s ease-in-out infinite reverse" }}
      />

      {/* Additional subtle orb */}
      <div
        className="absolute bottom-1/4 left-1/3 w-[350px] h-[350px] bg-gradient-to-r from-sky-300 to-blue-400 rounded-full opacity-10 blur-3xl animate-pulse"
        style={{ animationDuration: "6s" }}
      />

      {/* Floating animation keyframes */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -30px) scale(1.05); }
          66% { transform: translate(-20px, 20px) scale(0.95); }
        }
      `}</style>

      <div className="max-w-5xl mx-auto text-center space-y-10 z-10">
        {/* Overline badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-blue-600 font-medium text-sm backdrop-blur-sm">
          <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
          AIESEC in Hadrumet
        </div>

        {/* Main Headline with modern spacing */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-gray-900 leading-[1.1]">
          Discover Our{" "}
          <span className="relative inline-block">
            <span className="relative z-10 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Impactful
            </span>
            {/* Subtle underline effect */}
            <div className="absolute bottom-2 left-0 right-0 h-3 bg-blue-200/40 -z-10 blur-sm"></div>
          </span>
          <br />
          Projects
        </h1>

        {/* Subtitle with better hierarchy */}
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600 leading-relaxed font-light">
          Explore our collection of projects designed to create positive change
          and drive social impact. Looking forward to meaningful partnerships.
        </p>

        {/* Modern Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
          <Link to="/become-partner">
            <button className="group relative w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-semibold rounded-2xl transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 transform hover:-translate-y-0.5 overflow-hidden">
              <span className="relative z-10">Become a Partner</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </button>
          </Link>
        </div>

        {/* Trust indicators / Stats */}
        <div className="flex flex-wrap items-center justify-center gap-8 mt-16 pt-8 border-t border-gray-200/50">
          <div className="text-center">
            <CountUp
              from={0}
              to={4}
              separator=","
              direction="up"
              duration={1}
              className="text-3xl font-bold text-gray-900"
            />
            <div className="text-sm text-gray-500 mt-1">Active Projects</div>
          </div>
          <div className="hidden sm:block w-px h-12 bg-gray-200"></div>
          <div className="text-center">
            <CountUp
              from={0}
              to={25}
              separator=","
              direction="up"
              duration={1}
              className="text-3xl font-bold text-gray-900"
            />
            <div className="text-sm text-gray-500 mt-1">
              Partner Organizations
            </div>
          </div>
          <div className="hidden sm:block w-px h-12 bg-gray-200"></div>
          <div className="text-center">
            <CountUp
              from={0}
              to={400}
              separator=","
              direction="up"
              duration={1}
              className="text-3xl font-bold text-gray-900"
            />
            <div className="text-sm text-gray-500 mt-1">Lives Impacted</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 animate-bounce">
        <span className="text-xs font-medium">Scroll</span>
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </section>
  );
}
