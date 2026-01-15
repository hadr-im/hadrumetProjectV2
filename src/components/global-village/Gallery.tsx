import React from "react";

import img1 from "../../assets/global-village/ga.jpeg";
import img2 from "../../assets/global-village/ga1.jpeg";
import img3 from "../../assets/global-village/ga2.jpeg";
import img4 from "../../assets/global-village/about.jpeg";

const Gallery: React.FC = () => {
  const [selectedImg, setSelectedImg] = React.useState<string | null>(null);

  const images = [
    img1, img2, img3, img4,
    "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1528605248644-14dd04cb11c7?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&h=600&fit=crop",
  ];

  return (
    <section className="py-24 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Captured Moments</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Rediscovering the color, energy, and joy of our previous editions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-lg aspect-[4/3]"
              onClick={() => setSelectedImg(src)}
            >
              <img
                src={src}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="bg-white/90 p-3 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImg && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImg(null)}
        >
          <button className="absolute top-8 right-8 text-white hover:text-blue-400 transition-colors">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <img
            src={selectedImg}
            alt="Enlarged gallery view"
            className="max-w-full max-h-full rounded-lg shadow-2xl animate-zoom-in"
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
