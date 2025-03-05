import { Suspense, lazy } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import routes from "./tempo-routes";
import LoadingScreen from "./components/LoadingScreen";

// Lazy load components
const OnboardingScreen = lazy(() => import("./components/OnboardingScreen"));
const PricingPage = lazy(() => import("./components/PricingPage"));
const AboutUs = lazy(() => import("./components/AboutUs"));
const ApplyDeveloper = lazy(() => import("./components/ApplyDeveloper"));
const WebsiteDevelopment = lazy(
  () => import("./components/WebsiteDevelopment"),
);
const MobileAppDevelopment = lazy(
  () => import("./components/MobileAppDevelopment"),
);
const HowItWorks = lazy(() => import("./components/HowItWorks"));
const DeveloperFAQ = lazy(() => import("./components/DeveloperFAQ"));
const GetStarted = lazy(() => import("./components/GetStarted"));
const SignIn = lazy(() => import("./components/SignIn"));
const SignUp = lazy(() => import("./components/SignUp"));
const GetFreeConsultation = lazy(
  () => import("./components/GetFreeConsultation"),
);
const ContactUs = lazy(() => import("./components/ContactUs"));
const FrontendDevelopers = lazy(
  () => import("./components/FrontendDevelopers"),
);

function App() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/onboarding" element={<OnboardingScreen />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/apply" element={<ApplyDeveloper />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/developer-faq" element={<DeveloperFAQ />} />
          <Route path="/get-started" element={<GetStarted />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/consultation" element={<GetFreeConsultation />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/frontend" element={<FrontendDevelopers />} />
          <Route
            path="/services/website-development"
            element={<WebsiteDevelopment />}
          />
          <Route
            path="/services/mobile-app-development"
            element={<MobileAppDevelopment />}
          />
          {import.meta.env.VITE_TEMPO && <Route path="/tempobook/*" />}
        </Routes>
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
      </>
    </Suspense>
  );
}

export default App;
