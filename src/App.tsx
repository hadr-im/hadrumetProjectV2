import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/ui/Navbar";
import Footer from "./components/ui/Footer";
import HomePage from "./pages/HomePage";
import GlobalVillagePage from "./pages/GlobalVillagePage";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-blue-100 selection:text-blue-600">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/global-village" element={<GlobalVillagePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;