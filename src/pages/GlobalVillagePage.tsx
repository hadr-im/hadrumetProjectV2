import React from "react";
import Hero from "../components/global-village/Hero";
import LastEditionStats from "../components/global-village/LastEditionStats";
import About from "../components/global-village/About";
import Objectives from "../components/global-village/Objectives";
import Gallery from "../components/global-village/Gallery";
import Venue from "../components/global-village/Venue";
import TrustedPartnersCarousel from "../components/ui/TrustedPartnersCarousel";
import ClosingCTA from "../components/global-village/ClosingCTA";

import p1 from "../assets/global-village/p1.png";
import p2 from "../assets/global-village/p2.png";
import p3 from "../assets/global-village/p3.png";
import p4 from "../assets/global-village/p4.png";
import p5 from "../assets/global-village/p5.png";

const partners = [
  { name: "Mille et une Fleure", logo: p1 },
  { name: "Slim Optique", logo: p2 },
  { name: "Coach Chiraz", logo: p3 },
  { name: "Mare Mar Ouahchi", logo: p4 },
  { name: "Med Mode", logo: p5 },
];

const GlobalVillagePage: React.FC = () => {
  return (
    <div className="bg-white">
      <Hero />
      <LastEditionStats />
      <About />
      <Objectives />
       {/* <Gallery /> */}
      <Venue />
      <TrustedPartnersCarousel
        partners={partners}
        description="Supporters that make Global Village possible"
      />
      <ClosingCTA />
    </div>
  );
};

export default GlobalVillagePage;

