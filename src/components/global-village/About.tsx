import React from "react";
import about from "../../assets/global-village/about.jpeg";

const About: React.FC = () => {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image - moves to top on mobile */}
          <div className="order-2 lg:order-1 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl opacity-20 blur-2xl group-hover:opacity-30 transition-opacity"></div>
              <img
                src={about}
                alt="Global Village Atmosphere"
                className="relative w-full max-w-lg rounded-3xl shadow-2xl object-cover"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="order-1 lg:order-2 space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                Authentic Cultural <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Experiences</span>
              </h2>
              <div className="w-20 h-1.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full"></div>
            </div>

            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                Global Village is more than just an event; it's a vibrant celebration of our shared humanity.
                Born from the desire to bridge cultures, we bring together young people from across the
                globe to share their traditions, food, and stories.
              </p>
              <p>
                Every summer, we transform spaces into interactive ecosystems where you can travel the
                world in a single day. From traditional dances to authentic world cuisines, every
                moment is designed to foster understanding and lasting friendships.
              </p>
              <p className="font-semibold text-blue-600">
                Join us in building a more connected world, one culture at a time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
