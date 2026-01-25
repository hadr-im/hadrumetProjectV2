// src/components/Venue.tsx
import React from "react";
import venueImage from "../../assets/global-village/movenpick.jpg";

const Venue: React.FC = () => {
  return (
    <section className="py-20 bg-white px-4">
      <div className="max-w-7xl mx-auto text-center">
        <div className="space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-blue-600 font-medium text-sm">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
            Location
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            The{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Setting
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our event takes place in the heart of Sousse, a venue as vibrant and
            diverse as the cultures we celebrate.
          </p>
        </div>

        <div className="relative group max-w-5xl mx-auto">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-[2rem] opacity-20 blur group-hover:opacity-40 transition-opacity"></div>
          <div className="relative bg-white p-4 rounded-[2rem] shadow-2xl">
            <img
              src={venueImage}
              alt="Global Village Venue"
              className="w-full h-[400px] md:h-[600px] object-cover rounded-[1.5rem]"
            />

            {/* Overlay Info */}
            <div className="absolute top-12 left-10 right-10 md:left-16 md:right-auto md:w-96 text-left bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-blue-50">
              <h4 className="text-2xl font-bold text-gray-900 mb-2">
                Venue Address
              </h4>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Movenpick Hotel, Sousse
              </p>
              <button className="flex items-center gap-2 text-blue-600 font-bold hover:underline">
                Get Directions
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Venue;
