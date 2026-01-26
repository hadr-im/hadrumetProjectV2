import React, { useEffect } from "react";
import Hero from "../components/meetup-pro/Hero";
import About from "../components/meetup-pro/About";
import Services from "../components/meetup-pro/Services";
import PreviousEdition from "../components/meetup-pro/PreviousEdition";
import EventNumbers from "../components/meetup-pro/EventNumbers";
import TrustedPartnersCarousel from "../components/ui/TrustedPartnersCarousel";
import Countdown from "../components/meetup-pro/Countdown";
import ClosingCTA from "../components/meetup-pro/ClosingCTA";

import p1 from "../assets/meetupPro/p1.jpg";
import p2 from "../assets/meetupPro/p2.png";
import p3 from "../assets/meetupPro/p3.png";
import p4 from "../assets/meetupPro/p4.png";
import p5 from "../assets/meetupPro/p5.png";
import p6 from "../assets/meetupPro/p6.webp";
import p7 from "../assets/meetupPro/p7.png";
import p8 from "../assets/meetupPro/p8.png";
import p9 from "../assets/meetupPro/p9.jpg";
import p10 from "../assets/meetupPro/p10.jpg";

const partners = [
  { name: "Partner 1", logo: p1 },
  { name: "Partner 2", logo: p2 },
  { name: "Partner 3", logo: p3 },
  { name: "Partner 4", logo: p4 },
  { name: "Partner 5", logo: p5 },
  { name: "Partner 6", logo: p6 },
  { name: "Partner 7", logo: p7 },
  { name: "Partner 8", logo: p8 },
  { name: "Partner 9", logo: p9 },
  { name: "Partner 10", logo: p10 },
];

const MeetupProPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white">
      <Hero />
      <About />
      <Services />
      <PreviousEdition />
      <EventNumbers />

      <TrustedPartnersCarousel
        partners={partners}
        description="Supporting partners who make MeetUp Pro 3.0 possible"
      />
      <Countdown />
      <ClosingCTA />
    </div>
  );
};

export default MeetupProPage;
