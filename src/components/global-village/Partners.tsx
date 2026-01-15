import React from "react";

const Partners: React.FC = () => {
  const partnerLogos = [
    "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&h=100&fit=crop&q=80",
    "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop&q=80",
    "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?w=200&h=100&fit=crop&q=80",
    "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=200&h=100&fit=crop&q=80",
    "https://images.unsplash.com/photo-1614850715649-1d0106293bd1?w=200&h=100&fit=crop&q=80",
    "https://images.unsplash.com/photo-1614851012101-8e8e3d6e1595?w=200&h=100&fit=crop&q=80",
  ];

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">Our Partners</h2>
        <p className="text-gray-600 mb-16 text-lg">Supporters that make Global Village possible</p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {partnerLogos.map((src, index) => (
            <div key={index} className="w-32 h-16 flex items-center justify-center p-2 hover:scale-110 transition-transform">
              <img
                src={src}
                alt={`Partner ${index + 1}`}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
