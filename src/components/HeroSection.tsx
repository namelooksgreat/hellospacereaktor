import React, { useEffect, useRef } from "react";
import { Button } from "./ui/button";
import PriceCalculatorDialog from "./PriceCalculatorDialog";
import {
  ArrowRight,
  Code,
  Database,
  Server,
  Rocket,
  CheckCircle,
  Users,
  Clock,
  Star,
  Zap,
  Sparkles,
  Satellite,
  Play,
  Laptop,
  Briefcase,
  Building,
  LineChart,
  Settings,
  Shield,
} from "lucide-react";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  primaryCta?: string;
  secondaryCta?: string;
  backgroundImage?: string;
}

const HeroSection = ({
  title = "İşletmenizi Özel Yazılım Çözümleriyle Dönüştürün",
  subtitle = "Uzman geliştirme ekibimizle dijital dönüşümünüzü hızlandırın. Benzersiz iş zorluklarınızı çözen ve büyümeyi destekleyen özelleştirilmiş yazılım çözümleri geliştiriyoruz.",
  primaryCta = "Ücretsiz Danışmanlık Alın",
  secondaryCta = "Çözümlerimizi İnceleyin",
  backgroundImage = "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
}: HeroSectionProps) => {
  const starsRef = useRef<HTMLDivElement>(null);
  const planetsRef = useRef<HTMLDivElement>(null);
  const codeParticlesRef = useRef<HTMLDivElement>(null);
  const rocketRef = useRef<HTMLDivElement>(null);
  const satelliteRef = useRef<HTMLDivElement>(null);
  const orbitingCodeRef = useRef<HTMLDivElement>(null);

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
        "===",
      ];

      for (let i = 0; i < 20; i++) {
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

    // Animate orbiting code
    if (orbitingCodeRef.current) {
      const codeElements = orbitingCodeRef.current.children;
      for (let i = 0; i < codeElements.length; i++) {
        const element = codeElements[i] as HTMLElement;
        element.style.animationDelay = `${i * 0.5}s`;
        element.classList.add("animate-orbit-code");
      }
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

    // We don't need to add CSS for animations anymore as they're in index.css
    // This ensures animations are consistent across components
  }, []);

  return (
    <div className="relative w-full overflow-hidden bg-corporate-blue pt-20">
      {/* Stars background */}
      <div ref={starsRef} className="absolute inset-0 z-0"></div>

      {/* Code particles */}
      <div ref={codeParticlesRef} className="absolute inset-0 z-0"></div>

      {/* Abstract background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-[30%] -right-[10%] w-[70%] h-[70%] rounded-full bg-gradient-to-br from-corporate-teal/20 to-corporate-peach/20 blur-3xl" />
        <div className="absolute -bottom-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-gradient-to-tr from-corporate-cream/20 to-corporate-teal/20 blur-3xl" />
        <div className="absolute top-[20%] left-[15%] w-[40%] h-[40%] rounded-full bg-gradient-to-br from-corporate-blue/10 to-corporate-peach/10 blur-3xl" />
        <div className="absolute inset-0 bg-corporate-blue/60 backdrop-blur-[1px]" />

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:30px_30px]" />

        {/* Animated planets */}
        <div ref={planetsRef} className="absolute inset-0 z-0 overflow-hidden">
          {/* Planet 1 */}
          <div className="absolute top-[15%] right-[25%] opacity-20">
            <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-corporate-teal via-blue-500 to-corporate-blue">
              <div className="absolute inset-0 rounded-full bg-[rgba(0,0,0,0.3)] blur-[2px] transform rotate-45"></div>
              <div className="absolute inset-0 overflow-hidden rounded-full">
                <div className="absolute w-40 h-4 bg-white/10 top-[30%] -left-5 rotate-6 blur-sm"></div>
                <div className="absolute w-40 h-3 bg-white/10 top-[50%] -left-5 -rotate-3 blur-sm"></div>
              </div>
            </div>
          </div>

          {/* Planet 2 */}
          <div className="absolute bottom-[20%] left-[10%] opacity-20">
            <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-corporate-peach via-amber-600/50 to-corporate-teal">
              <div className="absolute inset-0 rounded-full bg-[rgba(0,0,0,0.3)] blur-[1px] transform rotate-30"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Content container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-3xl">
            <div className="inline-flex items-center px-3 py-1.5 mb-6 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
              <span className="text-xs font-medium text-corporate-cream mr-2">
                500+ İşletme Tarafından Tercih Edildi
              </span>
              <span className="flex h-1.5 w-1.5 rounded-full bg-corporate-teal animate-pulse"></span>
              <span className="text-xs font-medium text-corporate-cream ml-2">
                Kurumsal Seviye Çözümler
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
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
              <PriceCalculatorDialog
                buttonText="Hızlı Fiyat Hesapla"
                triggerClassName="text-base font-semibold px-8 py-6 h-auto"
              />
            </div>

            {/* Key benefits */}
          </div>

          {/* Hero visual element with space & code theme */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Glowing orbs */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-corporate-teal rounded-full opacity-20 blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-corporate-peach rounded-full opacity-20 blur-3xl"></div>

              {/* Satellite */}
              <div ref={satelliteRef} className="absolute z-10">
                <div className="relative">
                  <Satellite className="text-corporate-cream/70 h-6 w-6" />
                </div>
              </div>

              {/* Orbiting code elements */}
              <div
                ref={orbitingCodeRef}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full"
              >
                <div
                  className="text-xs font-mono text-corporate-teal/60"
                  style={{ "--orbit-radius": "80px" } as React.CSSProperties}
                >
                  &lt;div&gt;
                </div>
                <div
                  className="text-xs font-mono text-corporate-peach/60"
                  style={{ "--orbit-radius": "100px" } as React.CSSProperties}
                >
                  function()
                </div>
                <div
                  className="text-xs font-mono text-corporate-cream/60"
                  style={{ "--orbit-radius": "120px" } as React.CSSProperties}
                >
                  =&gt; {}
                </div>
                <div
                  className="text-xs font-mono text-corporate-teal/60"
                  style={{ "--orbit-radius": "140px" } as React.CSSProperties}
                >
                  import
                </div>
                <div
                  className="text-xs font-mono text-corporate-peach/60"
                  style={{ "--orbit-radius": "160px" } as React.CSSProperties}
                >
                  export
                </div>
              </div>

              {/* Business Solution Card */}
              <div className="absolute -top-12 -right-8 bg-white/5 backdrop-blur-md p-5 rounded-xl border border-white/10 shadow-xl transform rotate-6 w-64 z-20 hover:rotate-3 transition-all duration-500 hover:shadow-corporate-peach/20 hover:shadow-lg">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 rounded-full bg-corporate-teal/20 flex items-center justify-center mr-3">
                    <Building className="h-5 w-5 text-corporate-teal" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium">ERP Çözümü</h3>
                    <p className="text-corporate-cream/70 text-xs">
                      Kurumsal Kaynak Planlaması
                    </p>
                  </div>
                </div>
                <div className="h-2 bg-white/10 rounded-full mb-2">
                  <div className="h-2 bg-gradient-to-r from-corporate-teal to-corporate-peach rounded-full w-[85%] relative">
                    <div className="absolute -right-1 -top-1 w-3 h-3 rounded-full bg-white border-2 border-corporate-peach animate-pulse"></div>
                  </div>
                </div>
                <div className="flex justify-between text-xs text-corporate-cream/70">
                  <span>Uygulama</span>
                  <span>85%</span>
                </div>
              </div>

              {/* 3D-like card with code snippet */}
              <div className="relative bg-gradient-to-br from-corporate-blue/80 to-corporate-blue rounded-2xl p-1 border border-corporate-teal/20 shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500 z-10">
                <div className="bg-corporate-blue/90 rounded-xl p-6 backdrop-blur-sm">
                  {/* Code window header */}
                  <div className="flex items-center mb-4">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-corporate-peach"></div>
                      <div className="w-3 h-3 rounded-full bg-corporate-cream"></div>
                      <div className="w-3 h-3 rounded-full bg-corporate-teal"></div>
                    </div>
                    <div className="ml-4 px-2 py-1 bg-corporate-blue/50 rounded text-xs text-corporate-cream/70 font-mono">
                      project.tsx
                    </div>
                  </div>

                  {/* Code snippet */}
                  <pre className="text-sm font-mono text-corporate-cream/90 overflow-x-auto">
                    <code className="language-typescript">
                      <span className="text-corporate-teal">import</span>{" "}
                      <span className="text-white">React</span>{" "}
                      <span className="text-corporate-teal">from</span>{" "}
                      <span className="text-corporate-peach">"react"</span>;
                      <br />
                      <br />
                      <span className="text-corporate-teal">function</span>{" "}
                      <span className="text-corporate-cream">
                        BusinessDashboard
                      </span>
                      () {"{"} <br />
                      {"  "}
                      <span className="text-corporate-teal">return</span> (
                      <br />
                      {"    "}&lt;
                      <span className="text-corporate-cream">div</span>{" "}
                      <span className="text-corporate-peach">className</span>=
                      <span className="text-corporate-peach">
                        "analytics-dashboard"
                      </span>
                      &gt;
                      <br />
                      {"      "}&lt;
                      <span className="text-corporate-cream">h1</span>
                      &gt;İş Analitiği&lt;/
                      <span className="text-corporate-cream">h1</span>&gt;
                      <br />
                      {"      "}&lt;
                      <span className="text-corporate-cream">
                        RevenueChart
                      </span>{" "}
                      <span className="text-corporate-peach">data</span>=
                      <span className="text-corporate-peach">
                        {"{"}quarterlyData{"}"}"
                      </span>
                      /&gt;
                      <br />
                      {"      "}&lt;
                      <span className="text-corporate-cream">
                        KPIMetrics
                      </span>{" "}
                      <span className="text-corporate-peach">metrics</span>=
                      <span className="text-corporate-peach">
                        {"{"}businessKPIs{"}"}"
                      </span>
                      /&gt;
                      <br />
                      {"    "}&lt;/
                      <span className="text-corporate-cream">div</span>&gt;
                      <br />
                      {"  "});
                      <br />
                      {"}"}
                    </code>
                  </pre>
                </div>
              </div>

              {/* Floating rocket */}
              <div
                ref={rocketRef}
                className="absolute top-[40%] right-[15%] z-20"
              >
                <Rocket className="text-corporate-peach h-8 w-8 transform rotate-45" />
              </div>

              {/* Business Results Card */}
              <div className="absolute -bottom-8 -left-6 bg-white/5 backdrop-blur-md p-4 rounded-xl border border-white/10 shadow-xl transform -rotate-3 w-64 z-20 hover:rotate-0 transition-all duration-500 hover:shadow-corporate-teal/20 hover:shadow-lg">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-3 border-2 border-corporate-teal/30 bg-corporate-teal/10 flex items-center justify-center">
                    <LineChart className="h-7 w-7 text-corporate-teal" />
                  </div>
                  <div>
                    <div className="flex items-center">
                      <h3 className="text-white font-medium">İş Etkisi</h3>
                      <div className="ml-2 bg-corporate-teal/20 px-2 py-0.5 rounded-full">
                        <span className="text-corporate-teal text-xs font-medium">
                          Doğrulanmış
                        </span>
                      </div>
                    </div>
                    <p className="text-corporate-cream/70 text-xs">
                      Müşteri Başarı Metrikleri
                    </p>
                  </div>
                </div>
                <div className="mt-3 space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-corporate-cream text-xs">
                      Verimlilik
                    </span>
                    <div className="flex items-center">
                      <div className="h-1.5 w-24 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full w-[85%] bg-corporate-teal rounded-full"></div>
                      </div>
                      <span className="text-corporate-teal text-xs ml-2">
                        +85%
                      </span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-corporate-cream text-xs">
                      Maliyet Azaltma
                    </span>
                    <div className="flex items-center">
                      <div className="h-1.5 w-24 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full w-[65%] bg-corporate-peach rounded-full"></div>
                      </div>
                      <span className="text-corporate-peach text-xs ml-2">
                        -65%
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Animated sparkles */}
              <div className="absolute top-[10%] left-[20%] animate-pulse duration-1000">
                <Sparkles className="text-corporate-peach/40 h-5 w-5" />
              </div>
              <div className="absolute bottom-[30%] right-[25%] animate-pulse duration-2000">
                <Sparkles className="text-corporate-teal/40 h-4 w-4" />
              </div>
              <div className="absolute top-[60%] right-[10%] animate-pulse duration-3000">
                <Sparkles className="text-corporate-cream/40 h-6 w-6" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade effect */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
};

export default HeroSection;
