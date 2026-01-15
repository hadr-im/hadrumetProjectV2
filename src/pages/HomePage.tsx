import React from "react";
import Hero from "../components/Hero";
import PartnersSection from "../components/PartnersSection";
import TrustedPartnersCarousel from "../components/ui/TrustedPartnersCarousel";

const HomePage: React.FC = () => {
    return (
        <>
            <Hero />
            <PartnersSection />
            <TrustedPartnersCarousel />
        </>
    );
};

export default HomePage;
