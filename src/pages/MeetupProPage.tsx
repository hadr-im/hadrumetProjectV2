import React, { useEffect } from "react";
import Hero from "../components/meetup-pro/Hero";
import About from "../components/meetup-pro/About";
import Services from "../components/meetup-pro/Services";
import PreviousEdition from "../components/meetup-pro/PreviousEdition";
import EventNumbers from "../components/meetup-pro/EventNumbers";
import TrustedPartnersCarousel from "../components/ui/TrustedPartnersCarousel";
import Countdown from "../components/meetup-pro/Countdown";
import ClosingCTA from "../components/meetup-pro/ClosingCTA";

// Placeholder partner logos - replace with actual MeetUp Pro partner logos
import p1 from "../assets/global-village/p1.png";
import p2 from "../assets/global-village/p2.png";
import p3 from "../assets/global-village/p3.png";
import p4 from "../assets/global-village/p4.png";
import p5 from "../assets/global-village/p5.png";

const partners = [
  { name: "Partner 1", logo: p1 },
  { name: "Partner 2", logo: p2 },
  { name: "Partner 3", logo: p3 },
  { name: "Partner 4", logo: p4 },
  { name: "Partner 5", logo: p5 },
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
