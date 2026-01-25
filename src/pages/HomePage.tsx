import React from "react";
import Hero from "../components/Hero";
import PartnersSection from "../components/PartnersSection";
import TrustedPartnersCarousel from "../components/ui/TrustedPartnersCarousel";
import bd1 from "../assets/meetupPro/bd1.png";
import bd2 from "../assets/meetupPro/bd2.png";
import bd3 from "../assets/meetupPro/bd3.png";
import bd4 from "../assets/meetupPro/bd4.png";
import bd5 from "../assets/meetupPro/bd5.png";
import bd6 from "../assets/meetupPro/bd6.png";
import bd7 from "../assets/meetupPro/bd7.png";

const HomePage: React.FC = () => {
  const partners = [
    { name: "GFI University", logo: bd1 },
    { name: "Polytechnique Sousse", logo: bd2 },
    { name: "Auzy", logo: bd3 },
    { name: "Kickom", logo: bd4 },
    { name: "Idée Impression et Décor", logo: bd5 },
    { name: "Moby Store", logo: bd6 },
    { name: "Travel Land", logo: bd7 },
  ];
  return (
    <>
      <Hero />
      <PartnersSection />
      <TrustedPartnersCarousel
        partners={partners}
        description="Partnering with leading organizations to drive social impact and
            empower youth through meaningful projects."
      />
    </>
  );
};

export default HomePage;
