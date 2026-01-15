// src/components/NextYearStats.tsx
import React from "react";

interface NextYearStatsProps {
  nationalities?: number | string;
  internationals?: number | string;
  participants?: number | string;
  attendees?: number | string;
  events?: number | string;
}

const NextYearStats: React.FC<NextYearStatsProps> = ({
  nationalities,
  internationals,
  participants,
  attendees,
  events,
}) => {
  const stats = [
    { value: nationalities, label: "Nationalities" },
    { value: internationals, label: "Internationals" },
    { value: participants, label: "Participants" },
    { value: attendees, label: "Attendees" },
    { value: events, label: "Events" },
  ].filter(stat => stat.value !== undefined);

  // If no props are provided, use defaults
  if (stats.length === 0) {
    stats.push(
      { value: "+15", label: "Nationalities" },
      { value: "+600", label: "Participants" },
      { value: "+300", label: "Internationals" }
    );
  }

  return (
    <section className="py-16 md:py-20 px-4 md:px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
          What to Expect in 2026
        </h2>

        {/* Subtitle paragraph */}
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-12 md:mb-16 leading-relaxed">
          The next edition of Global Village promises even more excitement, diversity, and
          unforgettable moments.
        </p>

        {/* Stats cards - matches your reference design */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-8 md:p-10 shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center"
            >
              <div className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-pink-400 mb-3">
                {stat.value}
              </div>
              <p className="text-xl md:text-2xl font-semibold text-gray-800">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NextYearStats;