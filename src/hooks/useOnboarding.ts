import { useState, useEffect } from "react";

type OnboardingState = {
  hasSeenOnboarding: boolean;
  showOnboarding: boolean;
  setShowOnboarding: (show: boolean) => void;
  completeOnboarding: () => void;
  resetOnboarding: () => void;
};

export const useOnboarding = (): OnboardingState => {
  // Check if user has seen onboarding before
  const [hasSeenOnboarding, setHasSeenOnboarding] = useState<boolean>(false);
  const [showOnboarding, setShowOnboarding] = useState<boolean>(false);

  // On initial load, check localStorage
  useEffect(() => {
    const hasSeenOnboardingBefore =
      localStorage.getItem("hasSeenOnboarding") === "true";
    setHasSeenOnboarding(hasSeenOnboardingBefore);

    // Show onboarding if user hasn't seen it before
    if (!hasSeenOnboardingBefore) {
      setShowOnboarding(true);
    }
  }, []);

  // Mark onboarding as complete
  const completeOnboarding = () => {
    localStorage.setItem("hasSeenOnboarding", "true");
    setHasSeenOnboarding(true);
    setShowOnboarding(false);
  };

  // Reset onboarding state (for testing)
  const resetOnboarding = () => {
    localStorage.removeItem("hasSeenOnboarding");
    setHasSeenOnboarding(false);
  };

  return {
    hasSeenOnboarding,
    showOnboarding,
    setShowOnboarding,
    completeOnboarding,
    resetOnboarding,
  };
};
