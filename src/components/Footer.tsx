import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import {
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Mail,
  Phone,
  MapPin,
  Github,
  Rocket,
  Star,
  Moon,
  Sun,
  Satellite,
  Sparkles,
  Telescope,
  Atom,
  Zap,
  Globe,
} from "lucide-react";

interface FooterProps {
  companyName?: string;
  companyDescription?: string;
  navigationLinks?: Array<{ label: string; href: string }>;
  socialLinks?: Array<{ icon: React.ReactNode; href: string }>;
  contactInfo?: {
    email?: string;
    phone?: string;
    address?: string;
  };
}

const Footer = ({
  companyName = "Hellospace",
  companyDescription = "Elit geliştiricileri ve tasarımcıları dünya çapındaki üst düzey şirketlerle buluşturuyoruz. Yapay zeka destekli platformumuz, özel ihtiyaçlarınız için size mükemmel yeteneklerle eşleştiriyor.",
  navigationLinks = [
    { label: "Home", href: "/" },
    { label: "Hire Developers", href: "/hire" },
    { label: "For Developers", href: "/developers" },
    { label: "Pricing", href: "/pricing" },
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
  // Not changing the original navigationLinks array to maintain compatibility with other components
  socialLinks = [
    { icon: <Linkedin size={20} />, href: "https://linkedin.com" },
    { icon: <Twitter size={20} />, href: "https://twitter.com" },
    { icon: <Facebook size={20} />, href: "https://facebook.com" },
    { icon: <Instagram size={20} />, href: "https://instagram.com" },
    { icon: <Github size={20} />, href: "https://github.com" },
  ],
  contactInfo = {
    email: "info@hellospace.com",
    phone: "+1 (555) 123-4567",
    address: "123 Tech Sokak, İstanbul, Türkiye",
  },
}: FooterProps) => {
  const starsRef = useRef<HTMLDivElement>(null);
  const planetsRef = useRef<HTMLDivElement>(null);
  const satelliteRef = useRef<HTMLDivElement>(null);
  const rocketRef = useRef<HTMLDivElement>(null);
  const cometRef = useRef<HTMLDivElement>(null);
  const meteorRef = useRef<HTMLDivElement>(null);
  const galaxyRef = useRef<HTMLDivElement>(null);
  const constellationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create stars
    if (starsRef.current) {
      const starsContainer = starsRef.current;
      starsContainer.innerHTML = "";

      for (let i = 0; i < 150; i++) {
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

    // Create constellation
    if (constellationRef.current) {
      const canvas = document.createElement("canvas");
      canvas.width = constellationRef.current.offsetWidth || 300;
      canvas.height = constellationRef.current.offsetHeight || 200;
      canvas.style.position = "absolute";
      canvas.style.top = "0";
      canvas.style.left = "0";
      canvas.style.opacity = "0.2";

      const ctx = canvas.getContext("2d");
      if (ctx) {
        // Create points
        const points = [];
        for (let i = 0; i < 8; i++) {
          points.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
          });
        }

        // Draw lines between points
        ctx.strokeStyle = "#ffffff";
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        for (let i = 0; i < points.length; i++) {
          for (let j = i + 1; j < points.length; j++) {
            if (Math.random() > 0.5) {
              // Only connect some points
              ctx.moveTo(points[i].x, points[i].y);
              ctx.lineTo(points[j].x, points[j].y);
            }
          }
        }
        ctx.stroke();

        // Draw points
        for (const point of points) {
          ctx.fillStyle = "#ffffff";
          ctx.beginPath();
          ctx.arc(point.x, point.y, 1.5, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      constellationRef.current.appendChild(canvas);
    }

    // Animate rocket
    if (rocketRef.current) {
      rocketRef.current.classList.add("animate-rocket-move");
    }

    // Animate comet
    if (cometRef.current) {
      cometRef.current.classList.add("animate-comet");
    }

    // Animate meteor
    if (meteorRef.current) {
      meteorRef.current.classList.add("animate-meteor");
    }

    // Animate satellite
    if (satelliteRef.current) {
      satelliteRef.current.classList.add("animate-orbit");
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

    // Create galaxy
    if (galaxyRef.current) {
      const galaxyContainer = galaxyRef.current;
      const galaxy = document.createElement("div");
      galaxy.className =
        "absolute w-64 h-64 rounded-full bg-gradient-to-r from-indigo-900/20 via-purple-800/20 to-pink-700/20 blur-3xl animate-galaxy-spin";
      galaxy.style.top = "20%";
      galaxy.style.right = "10%";
      galaxyContainer.appendChild(galaxy);
    }

    // Cleanup function
    return () => {
      if (constellationRef.current) {
        constellationRef.current.innerHTML = "";
      }
      if (galaxyRef.current) {
        galaxyRef.current.innerHTML = "";
      }
    };
  }, []);

  return (
    <footer className="relative w-full py-20 px-4 md:px-8 overflow-hidden bg-gradient-to-b from-[#0a0a2e] via-[#1a1a4a] to-[#0f0f35] text-white">
      {/* Stars background */}
      <div ref={starsRef} className="absolute inset-0 z-0"></div>

      {/* Constellation */}
      <div ref={constellationRef} className="absolute inset-0 z-0"></div>

      {/* Galaxy */}
      <div ref={galaxyRef} className="absolute inset-0 z-0"></div>

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

        {/* Planet 3 - Ice planet with rings */}
        <div className="absolute top-[60%] right-[8%] opacity-20">
          <div className="relative">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-400 via-cyan-500 to-indigo-400">
              <div className="absolute inset-0 rounded-full bg-[rgba(0,0,0,0.2)] blur-[1px]"></div>
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-10 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full -rotate-12 -z-10 blur-[1px]"></div>
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

      {/* Comet */}
      <div ref={cometRef} className="absolute top-[5%] left-[5%] z-0">
        <div className="relative">
          <div className="w-2 h-2 rounded-full bg-blue-200"></div>
          <div className="absolute top-0 left-0 w-24 h-1.5 bg-gradient-to-r from-blue-200 to-transparent transform -rotate-45 -translate-x-full blur-sm"></div>
        </div>
      </div>

      {/* Meteor */}
      <div ref={meteorRef} className="absolute top-[15%] right-[20%] z-0">
        <div className="relative">
          <div className="w-1.5 h-1.5 rounded-full bg-orange-200"></div>
          <div className="absolute top-0 left-0 w-20 h-[2px] bg-gradient-to-r from-orange-200 to-transparent transform -rotate-30 -translate-x-full blur-sm"></div>
        </div>
      </div>

      {/* Content container */}
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Top section with newsletter and space theme */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pb-16 border-b border-white/10">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-corporate-teal/20 flex items-center justify-center">
                <Telescope className="h-5 w-5 text-corporate-teal" />
              </div>
              <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-corporate-peach to-corporate-teal">
                Hellospace Evrenini Keşfedin
              </h3>
            </div>
            <p className="text-corporate-cream/90 mb-6 text-lg">
              Yıldızlararası topluluğumuza katılın ve en son yetenek trendleri,
              teknoloji içgörüleri ve platform özellikleri hakkında güncel
              kalın.
            </p>
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center space-x-2 bg-white/5 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10">
                <Star className="h-4 w-4 text-corporate-peach" />
                <span className="text-sm text-corporate-cream">
                  5.000+ Geliştirici
                </span>
              </div>
              <div className="flex items-center space-x-2 bg-white/5 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10">
                <Globe className="h-4 w-4 text-corporate-teal" />
                <span className="text-sm text-corporate-cream">150+ Ülke</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/5 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/10">
                <Zap className="h-4 w-4 text-corporate-peach" />
                <span className="text-sm text-corporate-cream">
                  7/24 Destek
                </span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-corporate-teal/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-corporate-peach/20 rounded-full blur-3xl"></div>
            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-20 h-20 bg-corporate-teal/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              <h4 className="text-xl font-bold mb-4 flex items-center">
                <Sparkles className="mr-2 h-5 w-5 text-corporate-peach" />
                Bültenimize Katılın
              </h4>
              <p className="text-corporate-cream/80 mb-6 text-sm">
                Genişleyen evrenimizde yeni özellikleri ve fırsatları keşfeden
                ilk kişi olun.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="E-posta adresinizi girin"
                  className="flex-grow px-4 py-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-corporate-teal"
                />
                <Button className="bg-gradient-to-r from-corporate-teal to-corporate-teal/80 hover:from-corporate-teal/90 hover:to-corporate-teal/70 text-white px-6 py-3 h-auto shadow-lg shadow-corporate-teal/20">
                  Abone Ol
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16">
          {/* Company Information */}
          <div className="space-y-6">
            <Link to="/" className="inline-block">
              <div className="flex items-center space-x-2">
                <img
                  src="/Logo-white.png"
                  alt="Hellospace Logo"
                  className="h-8 w-auto"
                />
              </div>
            </Link>
            <p className="text-corporate-cream/80 text-sm leading-relaxed">
              {companyDescription}
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/5 backdrop-blur-sm p-2.5 rounded-full hover:bg-corporate-teal/20 transition-all duration-300 text-corporate-peach hover:scale-110 hover:shadow-glow"
                  aria-label={`Social media link ${index + 1}`}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold flex items-center">
              <Rocket className="mr-2 h-4 w-4 text-corporate-teal" />
              Platform
            </h4>
            <ul className="space-y-3">
              {navigationLinks.slice(0, 5).map((link, index) => {
                // Translate navigation link labels to Turkish
                const turkishLabels = {
                  Home: "Ana Sayfa",
                  "Hire Developers": "Geliştirici Kirala",
                  "For Developers": "Geliştiriciler İçin",
                  Pricing: "Fiyatlandırma",
                  About: "Hakkımızda",
                  Blog: "Blog",
                  Contact: "İletişim",
                };

                const translatedLabel = turkishLabels[link.label] || link.label;

                return (
                  <li key={index}>
                    <Link
                      to={link.href}
                      className="text-corporate-cream/80 hover:text-corporate-peach transition-colors flex items-center group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-corporate-teal/50 mr-2 group-hover:bg-corporate-peach group-hover:scale-125 transition-all duration-300"></span>
                      {translatedLabel}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold flex items-center">
              <Star className="mr-2 h-4 w-4 text-corporate-teal" />
              Kaynaklar
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/blog"
                  className="text-corporate-cream/80 hover:text-corporate-peach transition-colors flex items-center group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-corporate-teal/50 mr-2 group-hover:bg-corporate-peach group-hover:scale-125 transition-all duration-300"></span>
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/case-studies"
                  className="text-corporate-cream/80 hover:text-corporate-peach transition-colors flex items-center group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-corporate-teal/50 mr-2 group-hover:bg-corporate-peach group-hover:scale-125 transition-all duration-300"></span>
                  Vaka Çalışmaları
                </Link>
              </li>
              <li>
                <Link
                  to="/documentation"
                  className="text-corporate-cream/80 hover:text-corporate-peach transition-colors flex items-center group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-corporate-teal/50 mr-2 group-hover:bg-corporate-peach group-hover:scale-125 transition-all duration-300"></span>
                  Dokümantasyon
                </Link>
              </li>
              <li>
                <Link
                  to="/help-center"
                  className="text-corporate-cream/80 hover:text-corporate-peach transition-colors flex items-center group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-corporate-teal/50 mr-2 group-hover:bg-corporate-peach group-hover:scale-125 transition-all duration-300"></span>
                  Yardım Merkezi
                </Link>
              </li>
              <li>
                <Link
                  to="/api"
                  className="text-corporate-cream/80 hover:text-corporate-peach transition-colors flex items-center group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-corporate-teal/50 mr-2 group-hover:bg-corporate-peach group-hover:scale-125 transition-all duration-300"></span>
                  API
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold flex items-center">
              <Atom className="mr-2 h-4 w-4 text-corporate-teal" />
              Görev Kontrol Merkezi İletişim
            </h4>
            <ul className="space-y-4">
              {contactInfo.email && (
                <li className="flex items-center space-x-3 group">
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-corporate-peach/20 transition-colors">
                    <Mail size={16} className="text-corporate-peach" />
                  </div>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="text-corporate-cream/80 hover:text-corporate-peach transition-colors"
                  >
                    {contactInfo.email}
                  </a>
                </li>
              )}
              {contactInfo.phone && (
                <li className="flex items-center space-x-3 group">
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-corporate-peach/20 transition-colors">
                    <Phone size={16} className="text-corporate-peach" />
                  </div>
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="text-corporate-cream/80 hover:text-corporate-peach transition-colors"
                  >
                    {contactInfo.phone}
                  </a>
                </li>
              )}
              {contactInfo.address && (
                <li className="flex items-start space-x-3 group">
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center mt-0.5 group-hover:bg-corporate-peach/20 transition-colors">
                    <MapPin size={16} className="text-corporate-peach" />
                  </div>
                  <span className="text-corporate-cream/80">
                    {contactInfo.address}
                  </span>
                </li>
              )}
            </ul>
            <Link to="/contact">
              <Button
                variant="outline"
                className="mt-4 bg-white/5 backdrop-blur-sm border-corporate-teal/30 hover:bg-corporate-teal/20 text-white hover:shadow-glow-sm transition-all duration-300"
              >
                Bize Ulaşın
              </Button>
            </Link>
          </div>
        </div>

        {/* Legal section with space theme */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-corporate-cream/60 text-sm">
            © {new Date().getFullYear()} {companyName}. Evren genelinde tüm
            hakları saklıdır.
          </p>
          <div className="flex space-x-6">
            <Link
              to="/privacy"
              className="text-corporate-cream/60 hover:text-corporate-peach text-sm transition-colors"
            >
              Gizlilik Politikası
            </Link>
            <Link
              to="/terms"
              className="text-corporate-cream/60 hover:text-corporate-peach text-sm transition-colors"
            >
              Hizmet Şartları
            </Link>
            <Link
              to="/cookies"
              className="text-corporate-cream/60 hover:text-corporate-peach text-sm transition-colors"
            >
              Çerez Politikası
            </Link>
          </div>
        </div>
      </div>

      {/* Animations are now defined in index.css for consistency */}
    </footer>
  );
};

export default Footer;
