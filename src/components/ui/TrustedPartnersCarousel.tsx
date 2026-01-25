export default function TrustedPartnersCarousel({
  description,
  partners,
}: {
  description: string;
  partners: { name: string; logo: string }[];
}) {
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
            Collaborative Partnerships
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3">
            Our{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Trusted Partners
            </span>
          </h2>

          <p className="max-w-2xl mx-auto text-lg text-gray-600 leading-relaxed">
            {description}
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
                width: "fit-content",
              }}
            >
              {allPartners.map((partner, index) => (
                <div key={index} className="flex-shrink-0 group">
                  <div className="relative w-40 h-24 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-500 flex items-center justify-center p-4 transform hover:-translate-y-1">
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
