import React from "react";
import meetupPro2 from "../../assets/meetupPro/meetup_pro_2.png";

const About: React.FC = () => {
  return (
    <section className="py-16 md:py-24 lg:py-32 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1 flex justify-center w-full mt-12 lg:mt-0">
            <div className="relative group w-full max-w-md lg:max-w-lg">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative aspect-[4/3] w-full rounded-3xl shadow-2xl overflow-hidden transform transition-transform duration-500 group-hover:scale-[1.02]">
                <img
                  src={meetupPro2}
                  alt="Professional Business Networking"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="order-1 lg:order-2 space-y-6 lg:space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                Strategic Business{" "}
                <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  Connections
                </span>
              </h2>
              <div className="w-20 h-1.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full mx-auto lg:mx-0"></div>
            </div>

            <div className="space-y-6 text-base sm:text-lg text-gray-600 leading-relaxed">
              <p>
                MeetUp Pro 3.0, jointly organized by AIESEC in Sousse and the
                Polytechnic School of Sousse, is the largest and most
                anticipated B2B networking event in the Sahel region. This
                dynamic full-day event is designed to foster connections,
                inspire collaborations, and create opportunities for businesses,
                professionals, and young talent across Tunisia.
              </p>
              <p>
                The event connects businesses, startups, and investors to spark
                partnerships, unlock funding opportunities, and promote
                innovation across multiple sectors.
              </p>
              <p className="font-semibold text-blue-600">
                Expand your network, showcase products, and recruit
                talent—MeetUp Pro turns interactions into real business
                outcomes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
