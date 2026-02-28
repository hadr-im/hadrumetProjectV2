import ProjectCard from "./ui/ProjectCard";
import meetup from "../assets/meetupPro/meetup_pro_2.png";
import globalVillage from "../assets/global-village/globalv.jpg";
import tulds from "../assets/tulds.png"
export default function PartnersSection() {
  const projects = [
    {
      title: "MeetupPro 3.0",
      description: "Interactive digital conference platform",
      image: meetup,
      href: "/meetup-pro",
    },
    {
      title: "Global Village",
      description: "Cultural event showcasing multiple countries",
      image: globalVillage,
      href: "/global-village",
    },
    {
      title: "TULD'S",
      description: "Professional workshop and exhibition event",
      image:tulds,
      href: "/tulds",
    },
  ];

  return (
    <section className="relative py-24 px-4 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-200 rounded-full opacity-10 blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-blue-600 font-medium text-sm">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
            Our Portfolio
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
            Our{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <p className="max-w-2xl mx-auto mt-2 text-lg text-gray-600 leading-relaxed">
            Explore our initiatives driving positive impact and developing
            future leaders.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
