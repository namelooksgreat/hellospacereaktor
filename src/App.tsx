import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";
import routes from "tempo-routes";
import Home from "./components/home";
import ContactUs from "./components/ContactUs";
import GetFreeConsultation from "./components/GetFreeConsultation";
import AboutUs from "./components/AboutUs";
import WebsiteDevelopment from "./components/WebsiteDevelopment";
import MobileAppDevelopment from "./components/MobileAppDevelopment";
import PricingPage from "./components/PricingPage";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import GetStarted from "./components/GetStarted";
import HowItWorks from "./components/HowItWorks";
import DeveloperFAQ from "./components/DeveloperFAQ";
import ApplyDeveloper from "./components/ApplyDeveloper";
import FrontendDevelopers from "./components/FrontendDevelopers";

// Create a component for Tempo routes
const TempoRoutes = () => {
  return useRoutes(routes);
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/consultation" element={<GetFreeConsultation />} />
        <Route path="/about" element={<AboutUs />} />
        <Route
          path="/services/website-development"
          element={<WebsiteDevelopment />}
        />
        <Route
          path="/services/mobile-app-development"
          element={<MobileAppDevelopment />}
        />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/get-started" element={<GetStarted />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/developer-faq" element={<DeveloperFAQ />} />
        <Route path="/apply" element={<ApplyDeveloper />} />
        <Route path="/frontend" element={<FrontendDevelopers />} />

        {/* Add this before the catchall route */}
        {import.meta.env.VITE_TEMPO && (
          <Route path="/tempobook/*" element={<TempoRoutes />} />
        )}
      </Routes>
    </Router>
  );
}

export default App;
