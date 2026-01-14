export default function TrustedPartnersCarousel() {
  // Partner logos - replace with your actual logo URLs
  const partners = [
    { name: "Orange", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c8/Orange_logo.svg" },
    { name: "AIESEC", logo: "https://upload.wikimedia.org/wikipedia/commons/9/92/AIESEC_Logo.svg" },
    { name: "GFI", logo: "https://via.placeholder.com/150x60/4B5563/ffffff?text=GFI" },
    { name: "TT", logo: "https://via.placeholder.com/150x60/4B5563/ffffff?text=TT" },
    { name: "Partner 5", logo: "https://via.placeholder.com/150x60/4B5563/ffffff?text=Partner+5" },
    { name: "Partner 6", logo: "https://via.placeholder.com/150x60/4B5563/ffffff?text=Partner+6" },
  ];

  // Duplicate partners for seamless loop
  const allPartners = [...partners, ...partners];

  return (
    <section className="relative py-20 px-4 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-10 left-20 w-64 h-64 bg-blue-200 rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-10 right-20 w-80 h-80 bg-cyan-200 rounded-full opacity-10 blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-blue-600 font-medium text-sm">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
            Trusted By Industry Leaders
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Our <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Trusted Partners</span>
          </h2>
          
          <p className="max-w-2xl mx-auto text-lg text-gray-600 leading-relaxed">
            We collaborate with industry leaders to deliver impactful and innovative digital experiences.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Gradient Fade Edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>

          {/* Scrolling Track */}
          <div className="overflow-hidden py-8">
            <div 
              className="flex gap-12 animate-scroll"
              style={{
                width: 'fit-content',
              }}
            >
              {allPartners.map((partner, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 group"
                >
                  <div className="relative w-40 h-24 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-500 flex items-center justify-center p-6 transform hover:-translate-y-1">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100 transition-all duration-500"
                    />
                    
                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats or Additional Info */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-12 text-center">
          <div>
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">50+</div>
            <div className="text-sm text-gray-600 mt-2">Global Partners</div>
          </div>
          <div className="hidden sm:block w-px h-12 bg-gray-200"></div>
          <div>
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">15+</div>
            <div className="text-sm text-gray-600 mt-2">Countries</div>
          </div>
          <div className="hidden sm:block w-px h-12 bg-gray-200"></div>
          <div>
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">200+</div>
            <div className="text-sm text-gray-600 mt-2">Projects Delivered</div>
          </div>
        </div>
      </div>

      {/* Infinite Scroll Animation */}
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}