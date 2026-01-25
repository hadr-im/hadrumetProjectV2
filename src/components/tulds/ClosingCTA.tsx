import React from "react";
import { Link } from "react-router-dom";

const ClosingCTA: React.FC = () => {
  return (
    <section className="relative py-24 px-4   overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="flex items-center justify-center">
          <Link
            to="/become-partner"
            className="flex items-center justify-center px-10 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold text-lg rounded-full shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105 active:scale-95 transition-all duration-300 border-2 border-white/20"
          >
            Join us Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ClosingCTA;
