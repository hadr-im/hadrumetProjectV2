import React from "react";

const Objectives: React.FC = () => {
  const items = [
    "Foster cultural exchange",
    "Support innovative ideas",
    "Encourage global networking",
    "Promote sustainability",
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <h2 className="text-4xl font-bold text-center mb-8 text-gray-900">Event Objective</h2>
      <p className="text-xl text-center text-gray-600 max-w-2xl mx-auto mb-12">
        Global Village aims to create a world where cultural diversity is celebrated as a source of strength and innovation.
      </p>
      <ul className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-700">
        {items.map((item, idx) => (
          <li key={idx} className="group p-8 bg-white/80 backdrop-blur-md rounded-2xl border border-blue-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center gap-4">
            <div className="w-4 h-4 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 group-hover:scale-125 transition-transform" />
            <span className="text-xl font-medium text-gray-800">{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Objectives;
