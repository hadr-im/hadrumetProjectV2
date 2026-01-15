import React, { useEffect } from "react";
import TuldsHero from "../components/tulds/TuldsHero";
import Stats from "../components/tulds/Stats";
import About from "../components/tulds/About";
import Services from "../components/tulds/Services";
import Proposal from "../components/tulds/Proposal";
import Program from "../components/tulds/Program";
import Closing from "../components/tulds/Closing";

const TuldsPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-white">
            <TuldsHero />
            <Stats />
            <About />
            <Services />
            <Proposal />
            <Program />
            <Closing />
        </div>
    );
};

export default TuldsPage;
