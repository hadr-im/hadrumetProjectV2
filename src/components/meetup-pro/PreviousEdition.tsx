import React from "react";
import meetupPro3Vid from "../../assets/meetupPro/bg-vid.webm";
const PreviousEdition: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-blue-600 font-medium text-sm">
                <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
                Looking Back
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                Previous{" "}
                <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  Edition
                </span>
              </h2>
              <div className="w-20 h-1.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full mx-auto lg:mx-0"></div>
            </div>

            <div className="space-y-6 text-base sm:text-lg text-gray-600 leading-relaxed">
              <p>
                MeetUp Pro 3.0 was a tremendous success, bringing together
                hundreds of professionals, businesses, and startups for a day of
                meaningful connections and collaborations.
              </p>
              <p>
                The event featured inspiring panel discussions, productive B2B
                meetings, and valuable networking opportunities that resulted in
                lasting partnerships and business growth.
              </p>
            </div>

            <a
              href="https://meetuppro.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-xl"
            >
              Visit Previous Edition
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
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>

          <div className="flex justify-center w-full">
            <div className="relative group w-full max-w-md lg:max-w-lg">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl opacity-20 blur-2xl group-hover:opacity-30 transition-opacity"></div>
              <div className="relative aspect-video w-full rounded-3xl shadow-2xl bg-black flex items-center justify-center transform transition-transform duration-500 group-hover:scale-[1.02] overflow-hidden">
                <video
                  className="w-full h-full object-cover"
                  playsInline
                  autoPlay
                  muted
                  loop
                  poster={meetupPro3Vid}
                >
                  <source src={meetupPro3Vid} type="video/webm" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreviousEdition;
