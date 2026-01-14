import Hero from "./components/Hero";
import PartnersSection from "./components/PartnersSection";
import Footer from "./components/ui/Footer";
import Navbar from "./components/ui/Navbar";
import TrustedPartnersCarousel from "./components/ui/TrustedPartnersCarousel";

const App = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-blue-100 selection:text-blue-600">
      <Navbar />
      <main>
        <Hero />
        <PartnersSection />
        <TrustedPartnersCarousel />
      </main>
      <Footer />
    </div>
  );
};

export default App;