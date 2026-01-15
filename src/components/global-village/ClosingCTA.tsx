// src/components/ClosingCTA.tsx
import React from "react";

interface ClosingCTAProps {
  text?: string;
  onClick?: () => void;
}

const ClosingCTA: React.FC<ClosingCTAProps> = ({
  text = "Contact / Stay tuned",
  onClick
}) => {
  const defaultOnClick = () => {
    window.location.href = "mailto:info@globalvillage.com?subject=Stay%20Tuned%20-%20Global%20Village";
  };

  return (
    <section className="py-16 px-4 bg-white text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-8">
          Join us next summer
        </h2>

        <button
          className="inline-block bg-pink-400 hover:bg-pink-600 text-white font-medium text-base md:text-lg px-8 py-3 rounded-full shadow-md transition-all duration-300 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-pink-300"
          onClick={onClick || defaultOnClick}
        >
          {text}
        </button>
      </div>
    </section>
  );
};

export default ClosingCTA;