import React from "react";
import rayen from "../assets/rayen.jpg";
import sarah from "../assets/sarah.jpg";
const team = [
  {
    role: "Project Management ",
    name: "Rayen Yahyaoui",
    image: rayen,
    contact: "rayenyahyaoui@aiesec.net",
    phone: "+216 27 222 312",
  },
  {
    role: " Business Development",
    name: "Sarah Souissi",
    image: sarah,
    contact: "partners@hadrumet.com",
    phone: "+216 99 890 540",
  },
];

const AboutUsPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-36 pb-4 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-20 space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 tracking-tight">
            Who{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Are We
            </span>
          </h1>
          <p className="max-w-3xl mx-auto text-xl text-gray-600 leading-relaxed font-light">
            Our mission is striving to build sustainable and impactful
            partnerships within our ecosystem, empowering youth and driving
            positive change through collaboration.
          </p>
        </div>

        {/* Team Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl p-8 border border-gray-200 shadow-2xl shadow-blue-900/10 hover:shadow-blue-500/20 transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="flex flex-col items-center text-center space-y-6">
                {/* Image Wrapper */}
                <div className="relative w-40 h-40">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl rotate-6 group-hover:rotate-12 transition-transform duration-500 opacity-20" />
                  <img
                    src={member.image}
                    alt={member.name}
                    className="relative w-full h-full object-cover rounded-2xl shadow-lg grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <div className="text-blue-600 font-bold text-sm uppercase tracking-widest">
                    {member.role}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {member.name}
                  </h3>
                </div>

                {/* Contact Info */}
                <div className="w-full pt-6 border-t border-gray-100 space-y-3">
                  <h1 className="flex items-center justify-center gap-2 text-gray-600">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="font-medium">{member.contact}</span>
                  </h1>
                  <div className="flex items-center justify-center gap-2 text-gray-500">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <span>{member.phone}</span>
                  </div>
                </div>

                {/* CTA */}
                <a href={`mailto:${member.contact}`} className="w-full">
                  <button className="w-full py-3 bg-gray-50 hover:bg-blue-50 text-gray-700 hover:text-blue-600 font-semibold rounded-xl transition-all duration-300 border border-gray-100 hover:border-blue-200">
                    Get in Touch
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
