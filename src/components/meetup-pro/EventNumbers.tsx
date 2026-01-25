import React from "react";
import CountUp from "~/components/CountUp";

const EventNumbers: React.FC = () => {
  const stats = [
    { label: "Attendees", value: 700 },
    { label: "Professionals", value: 200 },
    { label: "Businesses", value: 30 },
    { label: "SSOs and Ecosystem Enablers", value: 10 },
  ];

  return (
    <section className="relative py-20 px-4 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-blue-600 font-medium text-sm">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
            By The Numbers
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mt-3 text-gray-900">
            Event{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Numbers
            </span>
          </h2>

          <p className="max-w-2xl mx-auto text-xl text-gray-600 leading-relaxed">
            participation and engagement metrics for MeetUp Pro 3.0
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, idx) => (
            <div key={idx} className="group relative text-center">
              <div className="relative z-10">
                <div className="flex items-center justify-center mb-2">
                  <CountUp
                    from={0}
                    to={stat.value}
                    separator=","
                    direction="up"
                    duration={1.5}
                    className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent"
                  />
                  <span className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                    +
                  </span>
                </div>
                <p className="mt-4 text-gray-600 font-semibold text-lg">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventNumbers;
