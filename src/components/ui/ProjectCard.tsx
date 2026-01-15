import { Link } from "react-router-dom";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  href?: string;
}

const ProjectCard = ({ title, description, image, href }: ProjectCardProps) => {
  const content = (
    <div className="group relative bg-white rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 h-full">
      {/* Main Card Container with Border Effect */}
      <div className="relative overflow-hidden rounded-3xl border border-gray-100 group-hover:border-blue-200 transition-colors duration-500 h-full flex flex-col">

        {/* Image Container */}
        <div className="relative h-72 overflow-hidden bg-gradient-to-br from-blue-50 to-cyan-50 flex-shrink-0">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
          />

          {/* Animated Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-900/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
        </div>

        {/* Content Container */}
        <div className="relative p-6 bg-white flex-grow flex flex-col justify-between">
          <div className="space-y-3">
            <h3 className="text-2xl font-bold text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-500 group-hover:bg-clip-text transition-all duration-300">
              {title}
            </h3>

            <p className="text-gray-600 leading-relaxed text-sm">
              {description}
            </p>
          </div>

          {/* View Project Button */}
          <div className="mt-6 flex items-center justify-between">
            <div className="flex items-center gap-2 text-blue-600 font-semibold text-sm group/btn transform translate-x-0 group-hover:translate-x-1 transition-all duration-300">
              <span>View Project</span>
              <svg
                className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Glow Effect on Hover */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-3xl opacity-0 group-hover:opacity-20 blur-2xl transform scale-95 group-hover:scale-100 transition-all duration-500"></div>
    </div>
  );

  if (href) {
    if (href.startsWith("/")) {
      return (
        <Link to={href} className="block h-full cursor-pointer">
          {content}
        </Link>
      );
    }
    return (
      <a href={href} className="block h-full cursor-pointer">
        {content}
      </a>
    );
  }

  return content;
}

export default ProjectCard;