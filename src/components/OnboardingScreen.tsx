import React, { useEffect, useRef } from "react";
import { Button } from "./ui/button";
import {
  Code,
  Database,
  Server,
  Star,
  Sparkles,
  Rocket,
  ArrowRight,
  CheckCircle,
  Zap,
  Shield,
  Globe,
  Satellite,
  Moon,
  Laptop,
} from "lucide-react";

interface OnboardingScreenProps {
  title?: string;
  subtitle?: string;
  primaryCta?: string;
  secondaryCta?: string;
}

const OnboardingScreen = ({
  title = "Explore the Universe of Custom Software Solutions",
  subtitle = "Our expert team builds stellar software that solves your unique business challenges and propels your growth. Launch your digital transformation today.",
  primaryCta = "Get a Free Consultation",
  secondaryCta = "Explore Our Solutions",
}: OnboardingScreenProps) => {
  const starsRef = useRef<HTMLDivElement>(null);
  const planetsRef = useRef<HTMLDivElement>(null);
  const rocketRef = useRef<HTMLDivElement>(null);
  const satelliteRef = useRef<HTMLDivElement>(null);
  const codeParticlesRef = useRef<HTMLDivElement>(null);
  const meteorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create stars
    if (starsRef.current) {
      const starsContainer = starsRef.current;
      starsContainer.innerHTML = "";

      for (let i = 0; i < 100; i++) {
        const star = document.createElement("div");
        star.className = "absolute rounded-full";

        // Random size between 1-3px
        const size = Math.random() * 2 + 1;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;

        // Random position
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;

        // Random color (white, blue-ish, yellow-ish)
        const colors = ["#ffffff", "#E6F0FF", "#FFFDE7"];
        star.style.backgroundColor =
          colors[Math.floor(Math.random() * colors.length)];

        // Random opacity
        star.style.opacity = `${Math.random() * 0.7 + 0.3}`;

        // Random animation delay
        star.style.animationDelay = `${Math.random() * 5}s`;
        star.classList.add("animate-twinkle");

        starsContainer.appendChild(star);
      }
    }

    // Create code particles
    if (codeParticlesRef.current) {
      const container = codeParticlesRef.current;
      container.innerHTML = "";

      const codeSymbols = [
        "{ }",
        "< >",
        "( )",
        ";",
        "//",
        "[]",
        "=>",
        "++",
        "**",
        "&&",
        "||",
        "!=",
        "==",
      ];

      for (let i = 0; i < 15; i++) {
        const particle = document.createElement("div");
        const symbol =
          codeSymbols[Math.floor(Math.random() * codeSymbols.length)];

        particle.className =
          "absolute text-xs font-mono opacity-20 text-corporate-teal";
        particle.textContent = symbol;

        // Random position
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;

        // Random animation delay
        particle.style.animationDelay = `${Math.random() * 10}s`;
        particle.classList.add("animate-float-code");

        container.appendChild(particle);
      }
    }

    // Animate rocket
    if (rocketRef.current) {
      rocketRef.current.classList.add("animate-rocket-float");
    }

    // Animate satellite
    if (satelliteRef.current) {
      satelliteRef.current.classList.add("animate-satellite-orbit");
    }

    // Animate meteor
    if (meteorRef.current) {
      meteorRef.current.classList.add("animate-meteor");
    }

    // Animate planets
    if (planetsRef.current) {
      const planets = planetsRef.current.children;
      for (let i = 0; i < planets.length; i++) {
        const planet = planets[i] as HTMLElement;
        planet.style.animationDelay = `${i * 2}s`;
        planet.classList.add("animate-float");
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a2e] via-[#1a1a4a] to-[#0f0f35] text-white flex flex-col relative overflow-hidden">
      {/* Stars background */}
      <div ref={starsRef} className="absolute inset-0 z-0"></div>

      {/* Code particles */}
      <div ref={codeParticlesRef} className="absolute inset-0 z-0"></div>

      {/* Animated space elements */}
      <div ref={planetsRef} className="absolute inset-0 z-0 overflow-hidden">
        {/* Planet 1 - Gas giant */}
        <div className="absolute -top-10 right-[15%] opacity-20">
          <div className="relative w-40 h-40 rounded-full bg-gradient-to-br from-corporate-teal via-blue-500 to-corporate-blue">
            <div className="absolute inset-0 rounded-full bg-[rgba(0,0,0,0.3)] blur-[2px] transform rotate-45"></div>
            <div className="absolute inset-0 overflow-hidden rounded-full">
              <div className="absolute w-60 h-8 bg-white/10 top-[20%] -left-10 rotate-6 blur-sm"></div>
              <div className="absolute w-60 h-6 bg-white/10 top-[40%] -left-10 -rotate-3 blur-sm"></div>
              <div className="absolute w-60 h-10 bg-white/10 top-[60%] -left-10 rotate-12 blur-sm"></div>
            </div>
          </div>
        </div>

        {/* Planet 2 - Rocky planet */}
        <div className="absolute bottom-[15%] left-[8%] opacity-20">
          <div className="relative w-28 h-28 rounded-full bg-gradient-to-br from-corporate-peach via-amber-600/50 to-corporate-teal">
            <div className="absolute inset-0 rounded-full bg-[rgba(0,0,0,0.3)] blur-[2px] transform rotate-30"></div>
            <div className="absolute inset-0 overflow-hidden rounded-full">
              <div className="absolute w-4 h-4 bg-white/20 top-[20%] left-[30%] rounded-full blur-sm"></div>
              <div className="absolute w-6 h-6 bg-white/20 top-[50%] left-[60%] rounded-full blur-sm"></div>
              <div className="absolute w-3 h-3 bg-white/20 top-[70%] left-[20%] rounded-full blur-sm"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Satellite */}
      <div ref={satelliteRef} className="absolute top-[20%] left-[50%] z-0">
        <div className="relative">
          <Satellite className="text-corporate-cream/30 h-8 w-8" />
        </div>
      </div>

      {/* Rocket */}
      <div ref={rocketRef} className="absolute bottom-[10%] left-0 z-0">
        <Rocket className="text-corporate-peach/30 h-10 w-10 transform rotate-45" />
      </div>

      {/* Meteor */}
      <div ref={meteorRef} className="absolute top-[15%] right-[20%] z-0">
        <div className="relative">
          <div className="w-1.5 h-1.5 rounded-full bg-orange-200"></div>
          <div className="absolute top-0 left-0 w-20 h-[2px] bg-gradient-to-r from-orange-200 to-transparent transform -rotate-30 -translate-x-full blur-sm"></div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-grow flex items-center justify-center px-4 py-16 relative z-10">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left column - Text content */}
            <div className="max-w-xl">
              <div className="inline-flex items-center px-3 py-1.5 mb-6 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
                <Rocket className="h-4 w-4 text-corporate-peach mr-2" />
                <span className="text-xs font-medium text-corporate-cream">
                  Stellar Software Solutions
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                {title}
              </h1>

              <p className="text-xl text-corporate-cream/90 mb-8 leading-relaxed">
                {subtitle}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Button
                  size="lg"
                  className="text-base font-semibold px-8 py-6 h-auto bg-gradient-to-r from-corporate-teal to-corporate-teal/80 hover:from-corporate-teal/90 hover:to-corporate-teal/70 text-white border-0 shadow-lg shadow-corporate-teal/20 relative overflow-hidden group"
                >
                  <span className="relative z-10 flex items-center">
                    {primaryCta}{" "}
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-corporate-teal/0 via-white/20 to-corporate-teal/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-base font-semibold px-8 py-6 h-auto bg-white/5 backdrop-blur-sm border-corporate-peach/30 text-white hover:bg-white/10 relative overflow-hidden group"
                >
                  <span className="relative z-10 flex items-center">
                    {secondaryCta}
                    <div className="ml-2 relative">
                      <div className="absolute -inset-1 rounded-full bg-corporate-peach/20 animate-ping"></div>
                      <Zap className="h-5 w-5 text-corporate-peach animate-pulse" />
                    </div>
                  </span>
                </Button>
              </div>

              {/* Key benefits */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="flex items-start space-x-3 group">
                  <div className="bg-corporate-teal/20 p-2 rounded-full group-hover:bg-corporate-teal/30 transition-colors">
                    <CheckCircle className="h-5 w-5 text-corporate-teal" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium">Custom Solutions</h3>
                    <p className="text-corporate-cream/70 text-sm">
                      Tailored to your workflow
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 group">
                  <div className="bg-corporate-peach/20 p-2 rounded-full group-hover:bg-corporate-peach/30 transition-colors">
                    <Zap className="h-5 w-5 text-corporate-peach" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium">
                      Rapid Development
                    </h3>
                    <p className="text-corporate-cream/70 text-sm">
                      Quick implementation
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 group">
                  <div className="bg-corporate-cream/20 p-2 rounded-full group-hover:bg-corporate-cream/30 transition-colors">
                    <Star className="h-5 w-5 text-corporate-cream" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium">Expert Support</h3>
                    <p className="text-corporate-cream/70 text-sm">
                      24/7 assistance
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 group">
                  <div className="bg-white/10 p-2 rounded-full group-hover:bg-white/20 transition-colors">
                    <Shield className="h-5 w-5 text-corporate-cream" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium">
                      Enterprise Security
                    </h3>
                    <p className="text-corporate-cream/70 text-sm">
                      Bank-grade protection
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right column - Visual element */}
            <div className="relative">
              {/* Background elements */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-corporate-teal/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-corporate-peach/20 rounded-full blur-3xl"></div>

              {/* Main visual - Software solutions showcase */}
              <div className="relative bg-white/5 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-white/10">
                <div className="absolute -top-6 -right-6 bg-corporate-peach/10 backdrop-blur-md p-4 rounded-xl border border-corporate-peach/20 shadow-lg transform rotate-6 w-64 z-20 hover:rotate-3 transition-all duration-500">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-corporate-peach/20 flex items-center justify-center mr-3">
                      <Sparkles className="h-5 w-5 text-corporate-peach" />
                    </div>
                    <div>
                      <h3 className="text-white font-medium">Client Success</h3>
                      <div className="flex items-center">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className="h-3 w-3 text-corporate-peach fill-corporate-peach"
                          />
                        ))}
                        <span className="text-xs ml-1 text-corporate-cream/70">
                          5.0
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-6 text-white flex items-center">
                  <Globe className="mr-2 h-5 w-5 text-corporate-teal" />
                  Our Software Universe
                </h3>

                <div className="space-y-6">
                  {/* Solution 1 */}
                  <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-white/5 transition-colors">
                    <div className="w-12 h-12 bg-corporate-teal/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Code className="h-6 w-6 text-corporate-teal" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">
                        Custom Web Applications
                      </h4>
                      <p className="text-corporate-cream/70 text-sm mt-1">
                        Tailored web solutions that automate your business
                        processes and improve efficiency.
                      </p>
                    </div>
                  </div>

                  {/* Solution 2 */}
                  <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-white/5 transition-colors">
                    <div className="w-12 h-12 bg-corporate-peach/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Database className="h-6 w-6 text-corporate-peach" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">
                        Enterprise Data Solutions
                      </h4>
                      <p className="text-corporate-cream/70 text-sm mt-1">
                        Secure database systems with powerful analytics and
                        reporting capabilities.
                      </p>
                    </div>
                  </div>

                  {/* Solution 3 */}
                  <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-white/5 transition-colors">
                    <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Server className="h-6 w-6 text-corporate-cream" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">
                        API Integration Services
                      </h4>
                      <p className="text-corporate-cream/70 text-sm mt-1">
                        Connect your systems seamlessly with third-party
                        services and platforms.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Animated elements */}
                <div className="absolute top-[10%] right-[10%] animate-pulse duration-1000">
                  <Sparkles className="text-corporate-peach/40 h-5 w-5" />
                </div>
                <div className="absolute bottom-[20%] left-[15%] animate-pulse duration-2000">
                  <Sparkles className="text-corporate-teal/40 h-4 w-4" />
                </div>

                {/* Testimonial */}
                <div className="mt-8 p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                  <p className="text-corporate-cream/80 italic text-sm">
                    "The custom software solution developed by the team has
                    transformed our operations, reducing processing time by 65%
                    and significantly improving customer satisfaction."
                  </p>
                  <div className="flex items-center mt-3">
                    <div className="w-8 h-8 rounded-full overflow-hidden mr-2 border-2 border-corporate-teal/20">
                      <img
                        src="https://api.dicebear.com/7.x/avataaars/svg?seed=john"
                        alt="John D."
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h5 className="font-medium text-sm text-white">
                        John Doe
                      </h5>
                      <p className="text-xs text-corporate-cream/60">
                        CTO, TechCorp Inc.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trusted by section */}
          <div className="mt-16 text-center">
            <p className="text-sm text-corporate-cream/60 mb-6">
              Trusted by leading companies across the galaxy
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
              <div className="flex items-center space-x-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
                <Globe className="h-4 w-4 text-corporate-teal" />
                <span className="text-sm text-corporate-cream">TechCorp</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
                <Laptop className="h-4 w-4 text-corporate-peach" />
                <span className="text-sm text-corporate-cream">
                  InnovateSoft
                </span>
              </div>
              <div className="flex items-center space-x-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
                <Database className="h-4 w-4 text-corporate-teal" />
                <span className="text-sm text-corporate-cream">DataSphere</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
                <Server className="h-4 w-4 text-corporate-peach" />
                <span className="text-sm text-corporate-cream">CloudNexus</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
                <Moon className="h-4 w-4 text-corporate-cream" />
                <span className="text-sm text-corporate-cream">LunarTech</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="relative z-10 py-12 px-4 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to launch your business into the future?
          </h2>
          <p className="text-corporate-cream/90 mb-8 max-w-2xl mx-auto">
            Join hundreds of companies that have accelerated their growth with
            our custom software solutions.
          </p>
          <Button className="bg-gradient-to-r from-corporate-teal to-corporate-teal/80 hover:from-corporate-teal/90 hover:to-corporate-teal/70 text-white px-8 py-3 h-auto text-lg font-medium rounded-full shadow-lg shadow-corporate-teal/20">
            Start Your Free Consultation
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OnboardingScreen;
