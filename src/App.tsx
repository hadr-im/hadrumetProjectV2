import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/ui/Navbar";
import Footer from "./components/ui/Footer";
import HomePage from "./pages/HomePage";
import GlobalVillagePage from "./pages/GlobalVillagePage";
import AboutUsPage from "./pages/AboutUsPage";
import TuldsPage from "./pages/TuldsPage";
import BecomePartnerPage from "./pages/BecomePartnerPage";
import MeetupProPage from "./pages/MeetupProPage";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-blue-100 selection:text-blue-600">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/global-village" element={<GlobalVillagePage />} />
            <Route path="/about-us" element={<AboutUsPage />} />
            <Route path="/tulds" element={<TuldsPage />} />
            <Route path="/become-partner" element={<BecomePartnerPage />} />
            <Route path="/meetup-pro" element={<MeetupProPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
