import React from "react";
import Hero from "../components/global-village/Hero";
import About from "../components/global-village/About";
import Gallery from "../components/global-village/Gallery";
import Objectives from "../components/global-village/Objectives";
import LastEditionStats from "../components/global-village/LastEditionStats";
import Partners from "../components/global-village/Partners";
import Venue from "../components/global-village/Venue";
import NextYearStats from "../components/global-village/NextYearStats";
import ClosingCTA from "../components/global-village/ClosingCTA";

const GlobalVillagePage: React.FC = () => {
    return (
        <div className="bg-white">
            <Hero />
            <About />
            <Gallery />
            <Objectives />
            <LastEditionStats />
            <Partners />
            <Venue />
            <NextYearStats />
            <ClosingCTA />
        </div>
    );
};

export default GlobalVillagePage;
