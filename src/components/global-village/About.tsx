import React from "react";
import about from "../../assets/global-village/about.jpeg";

const About: React.FC = () => {
  return (
    <section className="py-16 md:py-24 lg:py-32 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image - moves to top on mobile */}
          <div className="order-2 lg:order-1 flex justify-center w-full mt-6 lg:mt-0">
            <div className="relative group w-full max-w-md lg:max-w-lg">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl opacity-20 blur-2xl group-hover:opacity-30 transition-opacity"></div>
              <img
                src={about}
                alt="Global Village Atmosphere"
                className="relative aspect-square w-full rounded-3xl shadow-2xl object-cover transform transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="order-1 lg:order-2 space-y-6 lg:space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                Authentic Cultural{" "}
                <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  Exchange
                </span>
              </h2>
              <div className="w-20 h-1.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full mx-auto lg:mx-0"></div>
            </div>

            <div className="space-y-6 text-base sm:text-lg text-gray-600 leading-relaxed">
              <p>
                Global Village is an annual summer event organized by AIESEC
                Hadrumet. It brings together exchange participants from all over
                the world to share their culture through traditional clothes,
                food, music, and habits.
              </p>
              <p>
                In a friendly and welcoming atmosphere, visitors can explore the
                world's diversity and connect with international traditions in
                one vibrant place.
              </p>
              <p className="font-semibold text-blue-600">
                We also offer a B2B space for our partners to interact and build
                meaningful connections.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
