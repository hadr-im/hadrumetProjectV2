import React from "react";

const LastEditionStats: React.FC = () => {
  const stats = [
    { label: "Nationalities", value: "+10" },
    { label: "Participants", value: "+300" },
    { label: "Internationals", value: "+100" },
  ];

  return (
    <section className="py-20 px-4 bg-blue-50">
      <h2 className="text-4xl font-bold text-center mb-12 text-blue-700">Last Edition Stats</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-white p-6 rounded shadow">
            <p className="text-3xl font-bold text-blue-600">{stat.value}</p>
            <p className="mt-2 text-gray-700">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LastEditionStats;
