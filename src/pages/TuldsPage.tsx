import React, { useEffect } from "react";
import Hero from "../components/tulds/Hero";
import Stats from "../components/tulds/Stats";
import About from "../components/tulds/About";
import WhatWeOffer from "../components/tulds/WhatWeOffer";
import ClosingCTA from "../components/tulds/ClosingCTA";

const TuldsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white">
      <Hero />
      <Stats />
      <About />
      <WhatWeOffer />
      <ClosingCTA />
    </div>
  );
};

export default TuldsPage;
