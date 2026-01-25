import React from "react";

const Objectives: React.FC = () => {
  const objectives = [
    {
      title: "Celebrate Global Cultures",
      description:
        "Experience a vibrant showcase of diverse traditions, music, and artistic expressions from around the world",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      title: "Connect Through Traditions",
      description:
        "Build meaningful connections by sharing and learning about unique cultural heritage and customs",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
    },
    {
      title: "Explore World Diversity",
      description:
        "Discover the richness of global perspectives and expand your horizons through immersive interaction",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
          />
        </svg>
      ),
    },
    {
      title: "Foster Networking",
      description:
        "Create lasting bonds with international participants in a friendly and welcoming atmosphere",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-20 px-4 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-blue-600 font-medium text-sm">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
            Our Mission
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mt-3 text-gray-900">
            Event{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Objectives
            </span>
          </h2>

          <p className="max-w-2xl mx-auto text-xl text-gray-600 leading-relaxed">
            Bringing together EPs from around the world to showcase their
            culture in a friendly and welcoming atmosphere.
          </p>
        </div>

        {/* Objectives Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {objectives.map((obj, idx) => (
            <div
              key={idx}
              className="group relative bg-white rounded-2xl p-8 border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg"
            >
              {/* Icon */}
              <div className="mb-6">
                <div className="inline-flex p-4 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl text-blue-600 group-hover:from-blue-200 group-hover:to-cyan-200 transition-all">
                  {obj.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {obj.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {obj.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Objectives;
