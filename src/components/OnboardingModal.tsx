import React from "react";
import { ChevronRight, ArrowRight } from "lucide-react";
import OnboardingScreen from "./OnboardingScreen";
import { Button } from "./ui/button";

interface OnboardingModalProps {
  onClose: () => void;
  showSkip?: boolean;
}

const OnboardingModal: React.FC<OnboardingModalProps> = ({
  onClose,
  showSkip = true,
}) => {
  return (
    <div className="fixed inset-0 z-50 overflow-auto">
      <div className="relative w-full h-full">
        {/* Onboarding content */}
        <OnboardingScreen />

        {/* Modern floating skip button - positioned to avoid menu overlap */}
        {showSkip && (
          <div className="fixed top-32 right-8 z-[100]">
            <Button
              onClick={onClose}
              className="group bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 rounded-full px-6 py-2 shadow-lg transition-all duration-300 hover:shadow-xl flex items-center gap-2"
            >
              <span>Skip Tour</span>
              <div className="w-6 h-6 rounded-full bg-corporate-teal/20 flex items-center justify-center group-hover:bg-corporate-teal/40 transition-colors">
                <ChevronRight className="h-3 w-3 text-corporate-teal" />
              </div>
            </Button>
          </div>
        )}

        {/* Alternative floating action button for mobile */}
        {showSkip && (
          <div className="fixed bottom-8 right-6 md:hidden z-[100]">
            <Button
              onClick={onClose}
              className="w-12 h-12 rounded-full bg-corporate-teal text-white shadow-lg flex items-center justify-center hover:bg-corporate-teal/90 transition-colors"
              aria-label="Skip onboarding"
            >
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default OnboardingModal;
