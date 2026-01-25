import React from "react";

import img1 from "../../assets/global-village/ga.jpeg";
import img2 from "../../assets/global-village/ga1.jpeg";
import img3 from "../../assets/global-village/ga2.jpeg";
import img4 from "../../assets/global-village/about.jpeg";

const Gallery: React.FC = () => {
  const [selectedImg, setSelectedImg] = React.useState<string | null>(null);

  // 12 Images total
  const images = [img1, img2, img3, img4, img1, img2, img4, img3];

  return (
    <section className="relative py-24 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-blue-600 font-medium text-sm">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
            Photo Gallery
          </div>

          <h2 className="text-4xl md:text-5xl mt-3 font-bold text-gray-900">
            Captured{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Moments
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Rediscovering the color, energy, and joy of our previous edition.
          </p>
        </div>

        {/* 
           Bento Grid Layout 
           - grid-cols-1 on mobile
           - grid-cols-2 on tablet
           - grid-cols-4 on desktop
           - auto-rows ensures consistent height
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[250px]">
          {images.map((img, i) => {
            // Configuration for Bento Layout
            const isFirst = i === 0;
            const isWide = i === 5 || i === 8;

            // LOGIC: Show only first 4 images on mobile, show all on md screens and up
            const visibilityClass = i > 3 ? "hidden md:block" : "block";

            // Grid Spanning Logic for Desktop
            let spanClass = "";
            if (isFirst)
              spanClass = "md:col-span-2 md:row-span-2"; // Big square
            else if (isWide)
              spanClass = "md:col-span-2"; // Wide rectangle
            else spanClass = "md:col-span-1"; // Standard square

            return (
              <div
                key={i}
                className={`relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg ${spanClass} ${visibilityClass}`}
                onClick={() => setSelectedImg(img)}
              >
                <img
                  src={img}
                  alt={`Gallery image ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImg && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setSelectedImg(null)}
        >
          {/* Close Button */}
          <button className="absolute top-4 sm:top-8 right-4 sm:right-8 text-white/80 hover:text-white transition-colors z-10 p-2">
            <svg
              className="w-8 h-8 sm:w-10 sm:h-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <img
            src={selectedImg}
            alt="Enlarged gallery view"
            className="max-w-full max-h-[90vh] rounded-lg shadow-2xl animate-zoom-in object-contain"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image
          />
        </div>
      )}

      <style>{`
        @keyframes zoom-in {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-zoom-in { animation: zoom-in 0.3s ease-out forwards; }
      `}</style>
    </section>
  );
};

export default Gallery;
