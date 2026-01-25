import React from "react";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-16 md:py-24 lg:py-32 px-4 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image - moves to top on mobile */}
          <div className="order-2 lg:order-1 flex justify-center w-full">
            <div className="relative group w-full max-w-md lg:max-w-lg">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl opacity-20 blur-2xl group-hover:opacity-30 transition-opacity"></div>
              <img
                src="https://carthagemagazine.com/wp-content/uploads/2019/12/AIESEC-in-Tunisia-1.jpg"
                alt="About TULD'S"
                className="relative aspect-[4/3] w-full rounded-3xl shadow-2xl object-cover transform transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="order-1 lg:order-2 space-y-6 lg:space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                Empowering the{" "}
                <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  Next Generation
                </span>
              </h2>
              <div className="w-20 h-1.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full mx-auto lg:mx-0"></div>
            </div>

            <div className="space-y-6 text-base sm:text-lg text-gray-600 leading-relaxed">
              <p>
                TULD’S National Conference brings together youth from all
                regions of Tunisia for leadership, networking, and inspiration.
              </p>
              <p>
                4 days, participants engage in sessions, workshops, and
                interactive experiences designed to empower the next generation
                of leaders.
              </p>
              <p className="font-semibold text-blue-600">
                Join us to connect, learn, and grow with the future leaders of
                Tunisia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
