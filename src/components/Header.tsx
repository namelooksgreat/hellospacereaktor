import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import {
  Menu,
  X,
  ChevronDown,
  Search,
  ChevronRight,
  Globe,
  Smartphone,
  Code,
  ShoppingCart,
  Layers,
  Zap,
  Monitor,
  Layout,
  FileText,
  PenTool,
  Palette,
  Image,
  Cpu,
  Database,
  Server,
  Cloud,
  ShieldCheck,
  BarChart,
  Briefcase,
  Users,
  Clock,
  DollarSign,
  Award,
} from "lucide-react";

interface HeaderProps {
  className?: string;
}

const Header = ({ className = "" }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuHover = (menu: string) => {
    setActiveMenu(menu);
  };

  const handleSubMenuHover = (submenu: string) => {
    setActiveSubMenu(submenu);
  };

  const handleMenuLeave = () => {
    setActiveMenu(null);
    setActiveSubMenu(null);
  };

  const handleSubMenuLeave = () => {
    setActiveSubMenu(null);
  };

  return (
    <header
      className={cn(
        "w-full fixed top-0 z-50 transition-all duration-300",
        scrolled
          ? "h-16 bg-corporate-blue/95 backdrop-blur-md shadow-lg"
          : "h-20 bg-transparent",
        className,
      )}
    >
      <div className="container mx-auto h-full px-4 flex items-center justify-between">
        {/* Logo with animation */}
        <Link to="/" className="flex items-center">
          <img
            src="/Hellospace-Logo-Site.png"
            alt="Hellospace Logo"
            className="h-12 w-auto transition-all duration-500 transform hover:scale-110 hover:brightness-110 hover:drop-shadow-md animate-logo-float"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {/* Services Menu */}
          <div
            className="relative group"
            onMouseEnter={() => handleMenuHover("services")}
            onMouseLeave={handleMenuLeave}
          >
            <button
              className={`flex items-center text-corporate-cream hover:text-white font-medium transition-colors px-4 py-2 rounded-full ${activeMenu === "services" ? "bg-white/10 text-white" : "hover:bg-white/10"}`}
            >
              Hizmetler{" "}
              <ChevronDown
                className={`ml-1 h-4 w-4 transition-transform duration-200 ${activeMenu === "services" ? "rotate-180" : ""}`}
              />
            </button>
            <div
              className={`absolute left-0 mt-2 w-72 transition-all duration-200 bg-white/95 backdrop-blur-md border border-corporate-teal/20 rounded-xl shadow-lg overflow-hidden ${activeMenu === "services" ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"}`}
            >
              <div className="bg-gradient-to-r from-corporate-blue/10 to-corporate-teal/10 px-4 py-3 border-b border-corporate-teal/10">
                <h4 className="font-semibold text-corporate-blue">
                  Dijital Çözümler
                </h4>
                <p className="text-xs text-gray-500">
                  Uzman hizmetlerimizle işletmenizi dönüştürün
                </p>
              </div>
              <div className="p-2">
                {/* Website Development with submenu */}
                <div
                  className="relative"
                  onMouseEnter={() => handleSubMenuHover("website")}
                  onMouseLeave={handleSubMenuLeave}
                >
                  <Link
                    to="/services/website-development"
                    className="flex items-center justify-between px-4 py-3 text-sm text-gray-700 hover:bg-corporate-cream/50 hover:text-corporate-blue rounded-md group"
                  >
                    <div className="flex items-center">
                      <Globe className="h-5 w-5 mr-3 text-corporate-teal" />
                      <div className="flex flex-col">
                        <span className="font-medium">
                          Web Sitesi Geliştirme
                        </span>
                        <span className="text-xs text-gray-500">
                          Responsive, SEO uyumlu web siteleri
                        </span>
                      </div>
                    </div>
                    <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                  {/* Website Development Submenu */}
                  <div
                    className={`absolute left-full top-0 ml-2 w-64 transition-all duration-200 bg-white/95 backdrop-blur-md border border-corporate-teal/20 rounded-xl shadow-lg overflow-hidden ${activeSubMenu === "website" ? "opacity-100 visible translate-x-0" : "opacity-0 invisible -translate-x-2"}`}
                  >
                    <div className="bg-gradient-to-r from-corporate-blue/5 to-corporate-teal/5 px-4 py-3 border-b border-corporate-teal/10">
                      <h4 className="font-semibold text-corporate-blue">
                        Web Sitesi Hizmetleri
                      </h4>
                      <p className="text-xs text-gray-500">
                        Profesyonel web çözümleri
                      </p>
                    </div>
                    <div className="p-2">
                      <Link
                        to="/services/website-development/corporate"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-corporate-cream/50 hover:text-corporate-blue rounded-md"
                      >
                        <Monitor className="h-4 w-4 mr-3 text-corporate-teal" />
                        <span>Kurumsal Web Siteleri</span>
                      </Link>
                      <Link
                        to="/services/website-development/landing-pages"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-corporate-cream/50 hover:text-corporate-blue rounded-md"
                      >
                        <Layout className="h-4 w-4 mr-3 text-corporate-teal" />
                        <span>Açılış Sayfaları</span>
                      </Link>
                      <Link
                        to="/services/website-development/blogs"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-corporate-cream/50 hover:text-corporate-blue rounded-md"
                      >
                        <FileText className="h-4 w-4 mr-3 text-corporate-teal" />
                        <span>Blog & İçerik Siteleri</span>
                      </Link>
                      <Link
                        to="/services/website-development/portfolio"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-corporate-cream/50 hover:text-corporate-blue rounded-md"
                      >
                        <Image className="h-4 w-4 mr-3 text-corporate-teal" />
                        <span>Portfolyo Siteleri</span>
                      </Link>
                      <Link
                        to="/services/website-development/cms"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-corporate-cream/50 hover:text-corporate-blue rounded-md"
                      >
                        <PenTool className="h-4 w-4 mr-3 text-corporate-teal" />
                        <span>CMS Geliştirme</span>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Mobile App Development with submenu */}
                <div
                  className="relative"
                  onMouseEnter={() => handleSubMenuHover("mobile")}
                  onMouseLeave={handleSubMenuLeave}
                >
                  <Link
                    to="/services/mobile-app-development"
                    className="flex items-center justify-between px-4 py-3 text-sm text-gray-700 hover:bg-corporate-cream/50 hover:text-corporate-blue rounded-md group"
                  >
                    <div className="flex items-center">
                      <Smartphone className="h-5 w-5 mr-3 text-corporate-peach" />
                      <div className="flex flex-col">
                        <span className="font-medium">
                          Mobil Uygulama Geliştirme
                        </span>
                        <span className="text-xs text-gray-500">
                          iOS & Android native uygulamalar
                        </span>
                      </div>
                    </div>
                    <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                  {/* Mobile App Development Submenu */}
                  <div
                    className={`absolute left-full top-0 ml-2 w-64 transition-all duration-200 bg-white/95 backdrop-blur-md border border-corporate-peach/20 rounded-xl shadow-lg overflow-hidden ${activeSubMenu === "mobile" ? "opacity-100 visible translate-x-0" : "opacity-0 invisible -translate-x-2"}`}
                  >
                    <div className="bg-gradient-to-r from-corporate-blue/5 to-corporate-peach/5 px-4 py-3 border-b border-corporate-peach/10">
                      <h4 className="font-semibold text-corporate-blue">
                        Mobil Çözümler
                      </h4>
                      <p className="text-xs text-gray-500">
                        Cross-platform & native uygulamalar
                      </p>
                    </div>
                    <div className="p-2">
                      <Link
                        to="/services/mobile-app-development/ios"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-corporate-cream/50 hover:text-corporate-blue rounded-md"
                      >
                        <Smartphone className="h-4 w-4 mr-3 text-corporate-peach" />
                        <span>iOS Geliştirme</span>
                      </Link>
                      <Link
                        to="/services/mobile-app-development/android"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-corporate-cream/50 hover:text-corporate-blue rounded-md"
                      >
                        <Smartphone className="h-4 w-4 mr-3 text-corporate-peach" />
                        <span>Android Geliştirme</span>
                      </Link>
                      <Link
                        to="/services/mobile-app-development/cross-platform"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-corporate-cream/50 hover:text-corporate-blue rounded-md"
                      >
                        <Layers className="h-4 w-4 mr-3 text-corporate-peach" />
                        <span>Cross-Platform Uygulamalar</span>
                      </Link>
                      <Link
                        to="/services/mobile-app-development/flutter"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-corporate-cream/50 hover:text-corporate-blue rounded-md"
                      >
                        <Code className="h-4 w-4 mr-3 text-corporate-peach" />
                        <span>Flutter Geliştirme</span>
                      </Link>
                      <Link
                        to="/services/mobile-app-development/react-native"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-corporate-cream/50 hover:text-corporate-blue rounded-md"
                      >
                        <Code className="h-4 w-4 mr-3 text-corporate-peach" />
                        <span>React Native Uygulamalar</span>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Custom Software Solutions with submenu */}
                <div
                  className="relative"
                  onMouseEnter={() => handleSubMenuHover("custom")}
                  onMouseLeave={handleSubMenuLeave}
                >
                  <Link
                    to="/services/custom-software"
                    className="flex items-center justify-between px-4 py-3 text-sm text-gray-700 hover:bg-corporate-cream/50 hover:text-corporate-blue rounded-md group"
                  >
                    <div className="flex items-center">
                      <Code className="h-5 w-5 mr-3 text-corporate-blue" />
                      <div className="flex flex-col">
                        <span className="font-medium">
                          Özel Yazılım Çözümleri
                        </span>
                        <span className="text-xs text-gray-500">
                          Özelleştirilmiş kurumsal uygulamalar
                        </span>
                      </div>
                    </div>
                    <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                  {/* Custom Software Submenu */}
                  <div
                    className={`absolute left-full top-0 ml-2 w-64 transition-all duration-200 bg-white/95 backdrop-blur-md border border-corporate-blue/20 rounded-xl shadow-lg overflow-hidden ${activeSubMenu === "custom" ? "opacity-100 visible translate-x-0" : "opacity-0 invisible -translate-x-2"}`}
                  >
                    <div className="bg-gradient-to-r from-corporate-blue/10 to-corporate-blue/5 px-4 py-3 border-b border-corporate-blue/10">
                      <h4 className="font-semibold text-corporate-blue">
                        Kurumsal Çözümler
                      </h4>
                      <p className="text-xs text-gray-500">
                        Özelleştirilmiş yazılım sistemleri
                      </p>
                    </div>
                    <div className="p-2">
                      <Link
                        to="/services/custom-software/erp"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-corporate-cream/50 hover:text-corporate-blue rounded-md"
                      >
                        <Database className="h-4 w-4 mr-3 text-corporate-blue" />
                        <span>ERP Sistemleri</span>
                      </Link>
                      <Link
                        to="/services/custom-software/crm"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-corporate-cream/50 hover:text-corporate-blue rounded-md"
                      >
                        <Users className="h-4 w-4 mr-3 text-corporate-blue" />
                        <span>CRM Çözümleri</span>
                      </Link>
                      <Link
                        to="/services/custom-software/automation"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-corporate-cream/50 hover:text-corporate-blue rounded-md"
                      >
                        <Cpu className="h-4 w-4 mr-3 text-corporate-blue" />
                        <span>İş Süreçleri Otomasyonu</span>
                      </Link>
                      <Link
                        to="/services/custom-software/data-analytics"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-corporate-cream/50 hover:text-corporate-blue rounded-md"
                      >
                        <BarChart className="h-4 w-4 mr-3 text-corporate-blue" />
                        <span>Veri Analiz Araçları</span>
                      </Link>
                      <Link
                        to="/services/custom-software/integration"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-corporate-cream/50 hover:text-corporate-blue rounded-md"
                      >
                        <Server className="h-4 w-4 mr-3 text-corporate-blue" />
                        <span>API & Sistem Entegrasyonu</span>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* E-commerce Development with submenu */}
                <div
                  className="relative"
                  onMouseEnter={() => handleSubMenuHover("ecommerce")}
                  onMouseLeave={handleSubMenuLeave}
                >
                  <Link
                    to="/services/ecommerce-development"
                    className="flex items-center justify-between px-4 py-3 text-sm text-gray-700 hover:bg-corporate-cream/50 hover:text-corporate-blue rounded-md group"
                  >
                    <div className="flex items-center">
                      <ShoppingCart className="h-5 w-5 mr-3 text-corporate-teal" />
                      <div className="flex flex-col">
                        <span className="font-medium">
                          E-ticaret Geliştirme
                        </span>
                        <span className="text-xs text-gray-500">
                          Yüksek dönüşümlü online mağazalar
                        </span>
                      </div>
                    </div>
                    <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                  {/* E-commerce Submenu */}
                  <div
                    className={`absolute left-full top-0 ml-2 w-64 transition-all duration-200 bg-white/95 backdrop-blur-md border border-corporate-teal/20 rounded-xl shadow-lg overflow-hidden ${activeSubMenu === "ecommerce" ? "opacity-100 visible translate-x-0" : "opacity-0 invisible -translate-x-2"}`}
                  >
                    <div className="bg-gradient-to-r from-corporate-teal/10 to-corporate-teal/5 px-4 py-3 border-b border-corporate-teal/10">
                      <h4 className="font-semibold text-corporate-blue">
                        Online Mağaza Çözümleri
                      </h4>
                      <p className="text-xs text-gray-500">
                        Güçlü e-ticaret platformları
                      </p>
                    </div>
                    <div className="p-2">
                      <Link
                        to="/services/ecommerce-development/shopify"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-corporate-cream/50 hover:text-corporate-blue rounded-md"
                      >
                        <ShoppingCart className="h-4 w-4 mr-3 text-corporate-teal" />
                        <span>Shopify Geliştirme</span>
                      </Link>
                      <Link
                        to="/services/ecommerce-development/woocommerce"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-corporate-cream/50 hover:text-corporate-blue rounded-md"
                      >
                        <ShoppingCart className="h-4 w-4 mr-3 text-corporate-teal" />
                        <span>WooCommerce Mağazalar</span>
                      </Link>
                      <Link
                        to="/services/ecommerce-development/magento"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-corporate-cream/50 hover:text-corporate-blue rounded-md"
                      >
                        <ShoppingCart className="h-4 w-4 mr-3 text-corporate-teal" />
                        <span>Magento Çözümleri</span>
                      </Link>
                      <Link
                        to="/services/ecommerce-development/custom"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-corporate-cream/50 hover:text-corporate-blue rounded-md"
                      >
                        <Code className="h-4 w-4 mr-3 text-corporate-teal" />
                        <span>Özel E-ticaret</span>
                      </Link>
                      <Link
                        to="/services/ecommerce-development/marketplace"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-corporate-cream/50 hover:text-corporate-blue rounded-md"
                      >
                        <Users className="h-4 w-4 mr-3 text-corporate-teal" />
                        <span>Pazar Yeri Geliştirme</span>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* UI/UX Design with submenu */}
                <div
                  className="relative"
                  onMouseEnter={() => handleSubMenuHover("design")}
                  onMouseLeave={handleSubMenuLeave}
                >
                  <Link
                    to="/services/ui-ux-design"
                    className="flex items-center justify-between px-4 py-3 text-sm text-gray-700 hover:bg-corporate-cream/50 hover:text-corporate-blue rounded-md group"
                  >
                    <div className="flex items-center">
                      <Layers className="h-5 w-5 mr-3 text-corporate-peach" />
                      <div className="flex flex-col">
                        <span className="font-medium">UI/UX Tasarım</span>
                        <span className="text-xs text-gray-500">
                          Kullanıcı odaklı arayüz tasarımı
                        </span>
                      </div>
                    </div>
                    <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                  {/* UI/UX Design Submenu */}
                  <div
                    className={`absolute left-full top-0 ml-2 w-64 transition-all duration-200 bg-white/95 backdrop-blur-md border border-corporate-peach/20 rounded-xl shadow-lg overflow-hidden ${activeSubMenu === "design" ? "opacity-100 visible translate-x-0" : "opacity-0 invisible -translate-x-2"}`}
                  >
                    <div className="bg-gradient-to-r from-corporate-peach/10 to-corporate-peach/5 px-4 py-3 border-b border-corporate-peach/10">
                      <h4 className="font-semibold text-corporate-blue">
                        Tasarım Hizmetleri
                      </h4>
                      <p className="text-xs text-gray-500">
                        Mükemmel kullanıcı deneyimi
                      </p>
                    </div>
                    <div className="p-2">
                      <Link
                        to="/services/ui-ux-design/user-research"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-corporate-cream/50 hover:text-corporate-blue rounded-md"
                      >
                        <Users className="h-4 w-4 mr-3 text-corporate-peach" />
                        <span>Kullanıcı Araştırması</span>
                      </Link>
                      <Link
                        to="/services/ui-ux-design/wireframing"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-corporate-cream/50 hover:text-corporate-blue rounded-md"
                      >
                        <Layout className="h-4 w-4 mr-3 text-corporate-peach" />
                        <span>Taslak & Prototipleme</span>
                      </Link>
                      <Link
                        to="/services/ui-ux-design/interface-design"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-corporate-cream/50 hover:text-corporate-blue rounded-md"
                      >
                        <Palette className="h-4 w-4 mr-3 text-corporate-peach" />
                        <span>Arayüz Tasarımı</span>
                      </Link>
                      <Link
                        to="/services/ui-ux-design/design-systems"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-corporate-cream/50 hover:text-corporate-blue rounded-md"
                      >
                        <Layers className="h-4 w-4 mr-3 text-corporate-peach" />
                        <span>Tasarım Sistemleri</span>
                      </Link>
                      <Link
                        to="/services/ui-ux-design/usability-testing"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-corporate-cream/50 hover:text-corporate-blue rounded-md"
                      >
                        <ShieldCheck className="h-4 w-4 mr-3 text-corporate-peach" />
                        <span>Kullanılabilirlik Testleri</span>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Web Application Development with submenu */}
                <div
                  className="relative"
                  onMouseEnter={() => handleSubMenuHover("webapp")}
                  onMouseLeave={handleSubMenuLeave}
                >
                  <Link
                    to="/services/web-applications"
                    className="flex items-center justify-between px-4 py-3 text-sm text-gray-700 hover:bg-corporate-cream/50 hover:text-corporate-blue rounded-md group"
                  >
                    <div className="flex items-center">
                      <Zap className="h-5 w-5 mr-3 text-corporate-blue" />
                      <div className="flex flex-col">
                        <span className="font-medium">
                          Web Uygulama Geliştirme
                        </span>
                        <span className="text-xs text-gray-500">
                          Güçlü SaaS & bulut çözümleri
                        </span>
                      </div>
                    </div>
                    <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                  {/* Web Application Submenu */}
                  <div
                    className={`absolute left-full top-0 ml-2 w-64 transition-all duration-200 bg-white/95 backdrop-blur-md border border-corporate-blue/20 rounded-xl shadow-lg overflow-hidden ${activeSubMenu === "webapp" ? "opacity-100 visible translate-x-0" : "opacity-0 invisible -translate-x-2"}`}
                  >
                    <div className="bg-gradient-to-r from-corporate-blue/10 to-corporate-blue/5 px-4 py-3 border-b border-corporate-blue/10">
                      <h4 className="font-semibold text-corporate-blue">
                        Web Uygulama Çözümleri
                      </h4>
                      <p className="text-xs text-gray-500">
                        Bulut tabanlı uygulamalar
                      </p>
                    </div>
                    <div className="p-2">
                      <Link
                        to="/services/web-applications/saas"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-corporate-cream/50 hover:text-corporate-blue rounded-md"
                      >
                        <Cloud className="h-4 w-4 mr-3 text-corporate-blue" />
                        <span>SaaS Geliştirme</span>
                      </Link>
                      <Link
                        to="/services/web-applications/progressive"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-corporate-cream/50 hover:text-corporate-blue rounded-md"
                      >
                        <Smartphone className="h-4 w-4 mr-3 text-corporate-blue" />
                        <span>Progressive Web Uygulamaları</span>
                      </Link>
                      <Link
                        to="/services/web-applications/portals"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-corporate-cream/50 hover:text-corporate-blue rounded-md"
                      >
                        <Users className="h-4 w-4 mr-3 text-corporate-blue" />
                        <span>Müşteri Portalları</span>
                      </Link>
                      <Link
                        to="/services/web-applications/dashboards"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-corporate-cream/50 hover:text-corporate-blue rounded-md"
                      >
                        <BarChart className="h-4 w-4 mr-3 text-corporate-blue" />
                        <span>Yönetici Panelleri</span>
                      </Link>
                      <Link
                        to="/services/web-applications/api"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-corporate-cream/50 hover:text-corporate-blue rounded-md"
                      >
                        <Server className="h-4 w-4 mr-3 text-corporate-blue" />
                        <span>API Geliştirme</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-corporate-cream/20 p-3 border-t border-corporate-teal/10">
                <Link
                  to="/services"
                  className="text-xs text-corporate-blue font-medium flex items-center justify-center hover:underline"
                >
                  Tüm dijital hizmetleri görüntüle{" "}
                  <ChevronRight className="h-3 w-3 ml-1" />
                </Link>
              </div>
            </div>
          </div>

          <div
            className="relative group"
            onMouseEnter={() => handleMenuHover("hire")}
            onMouseLeave={handleMenuLeave}
          >
            <button
              className={`flex items-center text-corporate-cream hover:text-white font-medium transition-colors px-4 py-2 rounded-full ${activeMenu === "hire" ? "bg-white/10 text-white" : "hover:bg-white/10"}`}
            >
              Geliştirici Kirala{" "}
              <ChevronDown
                className={`ml-1 h-4 w-4 transition-transform duration-200 ${activeMenu === "hire" ? "rotate-180" : ""}`}
              />
            </button>
            <div
              className={`absolute left-0 mt-2 w-64 transition-all duration-200 bg-white/95 backdrop-blur-md border border-corporate-teal/20 rounded-xl shadow-lg overflow-hidden ${activeMenu === "hire" ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"}`}
            >
              <div className="bg-gradient-to-r from-corporate-blue/10 to-corporate-teal/10 px-4 py-3 border-b border-corporate-teal/10">
                <h4 className="font-semibold text-corporate-blue">
                  Geliştirici Uzmanlığı
                </h4>
                <p className="text-xs text-gray-500">
                  Projeniz için mükemmel eşleşmeyi bulun
                </p>
              </div>
              <div className="p-2">
                {/* Frontend Developers with submenu */}
                <div
                  className="relative"
                  onMouseEnter={() => handleSubMenuHover("frontend")}
                  onMouseLeave={handleSubMenuLeave}
                >
                  <Link
                    to="/frontend"
                    className="flex items-center justify-between px-4 py-3 text-sm text-gray-700 hover:bg-corporate-cream/50 hover:text-corporate-blue rounded-md group"
                  >
                    <div className="flex flex-col">
                      <span className="font-medium">
                        Frontend Geliştiriciler
                      </span>
                      <span className="text-xs text-gray-500">
                        React, Vue, Angular uzmanları
                      </span>
                    </div>
                    <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                  {/* Frontend Developers Submenu */}
                  <div
                    className={`absolute left-full top-0 ml-2 w-64 transition-all duration-200 bg-white/95 backdrop-blur-md border border-corporate-teal/20 rounded-xl shadow-lg overflow-hidden ${activeSubMenu === "frontend" ? "opacity-100 visible translate-x-0" : "opacity-0 invisible -translate-x-2"}`}
                  >
                    <div className="bg-gradient-to-r from-corporate-blue/5 to-corporate-teal/5 px-4 py-3 border-b border-corporate-teal/10">
                      <h4 className="font-semibold text-corporate-blue">
                        Frontend Uzmanları
                      </h4>
                      <p className="text-xs text-gray-500">
                        UI framework uzmanları
                      </p>
                    </div>
                    <div className="p-2">
                      <Link
                        to="/frontend/react"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-corporate-cream/50 hover:text-corporate-blue rounded-md"
                      >
                        <Code className="h-4 w-4 mr-3 text-corporate-blue" />
                        <span>React Geliştiricileri</span>
                      </Link>
                      <Link
                        to="/frontend/vue"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-corporate-cream/50 hover:text-corporate-blue rounded-md"
                      >
                        <Code className="h-4 w-4 mr-3 text-corporate-teal" />
                        <span>Vue.js Geliştiricileri</span>
                      </Link>
                      <Link
                        to="/frontend/angular"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-corporate-cream/50 hover:text-corporate-blue rounded-md"
                      >
                        <Code className="h-4 w-4 mr-3 text-corporate-peach" />
                        <span>Angular Geliştiricileri</span>
                      </Link>
                      <Link
                        to="/frontend/javascript"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-corporate-cream/50 hover:text-corporate-blue rounded-md"
                      >
                        <Code className="h-4 w-4 mr-3 text-corporate-blue" />
                        <span>JavaScript Uzmanları</span>
                      </Link>
                      <Link
                        to="/frontend/ui-specialists"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-corporate-cream/50 hover:text-corporate-blue rounded-md"
                      >
                        <Palette className="h-4 w-4 mr-3 text-corporate-teal" />
                        <span>UI Uzmanları</span>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Backend Developers with submenu */}
                <div
                  className="relative"
                  onMouseEnter={() => handleSubMenuHover("backend")}
                  onMouseLeave={handleSubMenuLeave}
                >
                  <Link
                    to="/backend"
                    className="flex items-center justify-between px-4 py-3 text-sm text-gray-700 hover:bg-corporate-cream/50 hover:text-corporate-blue rounded-md group"
                  >
                    <div className="flex flex-col">
                      <span className="font-medium">
                        Backend Geliştiriciler
                      </span>
                      <span className="text-xs text-gray-500">
                        Node.js, Python, Java uzmanları
                      </span>
                    </div>
                    <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                  {/* Backend Developers Submenu */}
                  <div
                    className={`absolute left-full top-0 ml-2 w-64 transition-all duration-200 bg-white/95 backdrop-blur-md border border-corporate-teal/20 rounded-xl shadow-lg overflow-hidden ${activeSubMenu === "backend" ? "opacity-100 visible translate-x-0" : "opacity-0 invisible -translate-x-2"}`}
                  >
                    <div className="bg-gradient-to-r from-corporate-blue/5 to-corporate-teal/5 px-4 py-3 border-b border-corporate-teal/10">
                      <h4 className="font-semibold text-corporate-blue">
                        Backend Uzmanları
                      </h4>
                      <p className="text-xs text-gray-500">
                        Sunucu taraflı teknoloji uzmanları
                      </p>
                    </div>
                    <div className="p-2">
                      <Link
                        to="/backend/node"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-corporate-cream/50 hover:text-corporate-blue rounded-md"
                      >
                        <Server className="h-4 w-4 mr-3 text-corporate-teal" />
                        <span>Node.js Geliştiricileri</span>
                      </Link>
                      <Link
                        to="/backend/python"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-corporate-cream/50 hover:text-corporate-blue rounded-md"
                      >
                        <Server className="h-4 w-4 mr-3 text-corporate-blue" />
                        <span>Python Geliştiricileri</span>
                      </Link>
                      <Link
                        to="/backend/java"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-corporate-cream/50 hover:text-corporate-blue rounded-md"
                      >
                        <Server className="h-4 w-4 mr-3 text-corporate-peach" />
                        <span>Java Geliştiricileri</span>
                      </Link>
                      <Link
                        to="/backend/php"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-corporate-cream/50 hover:text-corporate-blue rounded-md"
                      >
                        <Server className="h-4 w-4 mr-3 text-corporate-teal" />
                        <span>PHP Geliştiricileri</span>
                      </Link>
                      <Link
                        to="/backend/database"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-corporate-cream/50 hover:text-corporate-blue rounded-md"
                      >
                        <Database className="h-4 w-4 mr-3 text-corporate-blue" />
                        <span>Veritabanı Uzmanları</span>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Full Stack Developers with submenu */}
                <div
                  className="relative"
                  onMouseEnter={() => handleSubMenuHover("fullstack")}
                  onMouseLeave={handleSubMenuLeave}
                >
                  <Link
                    to="/fullstack"
                    className="flex items-center justify-between px-4 py-3 text-sm text-gray-700 hover:bg-corporate-cream/50 hover:text-corporate-blue rounded-md group"
                  >
                    <div className="flex flex-col">
                      <span className="font-medium">
                        Full Stack Geliştiriciler
                      </span>
                      <span className="text-xs text-gray-500">
                        Uçtan uca çözüm geliştiricileri
                      </span>
                    </div>
                    <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                  {/* Full Stack Developers Submenu */}
                  <div
                    className={`absolute left-full top-0 ml-2 w-64 transition-all duration-200 bg-white/95 backdrop-blur-md border border-corporate-teal/20 rounded-xl shadow-lg overflow-hidden ${activeSubMenu === "fullstack" ? "opacity-100 visible translate-x-0" : "opacity-0 invisible -translate-x-2"}`}
                  >
                    <div className="bg-gradient-to-r from-corporate-blue/5 to-corporate-teal/5 px-4 py-3 border-b border-corporate-teal/10">
                      <h4 className="font-semibold text-corporate-blue">
                        Full Stack Uzmanları
                      </h4>
                      <p className="text-xs text-gray-500">
                        Tam teknoloji yığını uzmanları
                      </p>
                    </div>
                    <div className="p-2">
                      <Link
                        to="/fullstack/mern"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-corporate-cream/50 hover:text-corporate-blue rounded-md"
                      >
                        <Code className="h-4 w-4 mr-3 text-corporate-blue" />
                        <span>MERN Stack Geliştiricileri</span>
                      </Link>
                      <Link
                        to="/fullstack/mean"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-corporate-cream/50 hover:text-corporate-blue rounded-md"
                      >
                        <Code className="h-4 w-4 mr-3 text-corporate-peach" />
                        <span>MEAN Stack Geliştiricileri</span>
                      </Link>
                      <Link
                        to="/fullstack/lamp"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-corporate-cream/50 hover:text-corporate-blue rounded-md"
                      >
                        <Code className="h-4 w-4 mr-3 text-corporate-teal" />
                        <span>LAMP Stack Geliştiricileri</span>
                      </Link>
                      <Link
                        to="/fullstack/jamstack"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-corporate-cream/50 hover:text-corporate-blue rounded-md"
                      >
                        <Code className="h-4 w-4 mr-3 text-corporate-blue" />
                        <span>JAMstack Geliştiricileri</span>
                      </Link>
                      <Link
                        to="/fullstack/python-django"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-corporate-cream/50 hover:text-corporate-blue rounded-md"
                      >
                        <Code className="h-4 w-4 mr-3 text-corporate-teal" />
                        <span>Python/Django Geliştiricileri</span>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Mobile Developers with submenu */}
                <div
                  className="relative"
                  onMouseEnter={() => handleSubMenuHover("mobile-dev")}
                  onMouseLeave={handleSubMenuLeave}
                >
                  <Link
                    to="/mobile"
                    className="flex items-center justify-between px-4 py-3 text-sm text-gray-700 hover:bg-corporate-cream/50 hover:text-corporate-blue rounded-md group"
                  >
                    <div className="flex flex-col">
                      <span className="font-medium">Mobil Geliştiriciler</span>
                      <span className="text-xs text-gray-500">
                        iOS, Android, React Native
                      </span>
                    </div>
                    <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                  {/* Mobile Developers Submenu */}
                  <div
                    className={`absolute left-full top-0 ml-2 w-64 transition-all duration-200 bg-white/95 backdrop-blur-md border border-corporate-teal/20 rounded-xl shadow-lg overflow-hidden ${activeSubMenu === "mobile-dev" ? "opacity-100 visible translate-x-0" : "opacity-0 invisible -translate-x-2"}`}
                  >
                    <div className="bg-gradient-to-r from-corporate-blue/5 to-corporate-teal/5 px-4 py-3 border-b border-corporate-teal/10">
                      <h4 className="font-semibold text-corporate-blue">
                        Mobil Uzmanları
                      </h4>
                      <p className="text-xs text-gray-500">
                        Uygulama geliştirme uzmanları
                      </p>
                    </div>
                    <div className="p-2">
                      <Link
                        to="/mobile/ios"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-corporate-cream/50 hover:text-corporate-blue rounded-md"
                      >
                        <Smartphone className="h-4 w-4 mr-3 text-corporate-blue" />
                        <span>iOS Geliştiricileri</span>
                      </Link>
                      <Link
                        to="/mobile/android"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-corporate-cream/50 hover:text-corporate-blue rounded-md"
                      >
                        <Smartphone className="h-4 w-4 mr-3 text-corporate-teal" />
                        <span>Android Geliştiricileri</span>
                      </Link>
                      <Link
                        to="/mobile/react-native"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-corporate-cream/50 hover:text-corporate-blue rounded-md"
                      >
                        <Code className="h-4 w-4 mr-3 text-corporate-blue" />
                        <span>React Native Geliştiricileri</span>
                      </Link>
                      <Link
                        to="/mobile/flutter"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-corporate-cream/50 hover:text-corporate-blue rounded-md"
                      >
                        <Code className="h-4 w-4 mr-3 text-corporate-peach" />
                        <span>Flutter Geliştiricileri</span>
                      </Link>
                      <Link
                        to="/mobile/xamarin"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-corporate-cream/50 hover:text-corporate-blue rounded-md"
                      >
                        <Code className="h-4 w-4 mr-3 text-corporate-teal" />
                        <span>Xamarin Geliştiricileri</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-corporate-cream/20 p-3 border-t border-corporate-teal/10">
                <Link
                  to="/all-developers"
                  className="text-xs text-corporate-blue font-medium flex items-center justify-center hover:underline"
                >
                  Tüm geliştirici kategorilerini incele{" "}
                  <ChevronRight className="h-3 w-3 ml-1" />
                </Link>
              </div>
            </div>
          </div>

          <div
            className="relative group"
            onMouseEnter={() => handleMenuHover("developers")}
            onMouseLeave={handleMenuLeave}
          >
            <button
              className={`flex items-center text-corporate-cream hover:text-white font-medium transition-colors px-4 py-2 rounded-full ${activeMenu === "developers" ? "bg-white/10 text-white" : "hover:bg-white/10"}`}
            >
              Geliştiriciler İçin{" "}
              <ChevronDown
                className={`ml-1 h-4 w-4 transition-transform duration-200 ${activeMenu === "developers" ? "rotate-180" : ""}`}
              />
            </button>
            <div
              className={`absolute left-0 mt-2 w-64 transition-all duration-200 bg-white/95 backdrop-blur-md border border-corporate-teal/20 rounded-xl shadow-lg overflow-hidden ${activeMenu === "developers" ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"}`}
            >
              <div className="bg-gradient-to-r from-corporate-blue/10 to-corporate-peach/10 px-4 py-3 border-b border-corporate-peach/10">
                <h4 className="font-semibold text-corporate-blue">
                  Ağımıza Katılın
                </h4>
                <p className="text-xs text-gray-500">
                  Teknoloji profesyonelleri için fırsatlar
                </p>
              </div>
              <div className="p-2">
                <Link
                  to="/apply"
                  className="flex items-center justify-between px-4 py-3 text-sm text-gray-700 hover:bg-corporate-cream/50 hover:text-corporate-blue rounded-md group"
                >
                  <div className="flex flex-col">
                    <span className="font-medium">
                      Geliştirici Olarak Başvur
                    </span>
                    <span className="text-xs text-gray-500">
                      Global yetenek ağımıza katılın
                    </span>
                  </div>
                  <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
                <Link
                  to="/how-it-works"
                  className="flex items-center justify-between px-4 py-3 text-sm text-gray-700 hover:bg-corporate-cream/50 hover:text-corporate-blue rounded-md group"
                >
                  <div className="flex flex-col">
                    <span className="font-medium">Nasıl Çalışır</span>
                    <span className="text-xs text-gray-500">
                      Değerlendirme ve eşleştirme sürecimiz
                    </span>
                  </div>
                  <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
                <Link
                  to="/developer-faq"
                  className="flex items-center justify-between px-4 py-3 text-sm text-gray-700 hover:bg-corporate-cream/50 hover:text-corporate-blue rounded-md group"
                >
                  <div className="flex flex-col">
                    <span className="font-medium">Sıkça Sorulan Sorular</span>
                    <span className="text-xs text-gray-500">
                      Yazılımcılar için SSS
                    </span>
                  </div>
                  <ChevronRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </div>
              <div className="bg-corporate-cream/20 p-3 border-t border-corporate-peach/10">
                <Link
                  to="/success-stories"
                  className="text-xs text-corporate-blue font-medium flex items-center justify-center hover:underline"
                >
                  Geliştirici başarı hikayelerini oku{" "}
                  <ChevronRight className="h-3 w-3 ml-1" />
                </Link>
              </div>
            </div>
          </div>

          <Link
            to="/pricing"
            className="px-4 py-2 text-corporate-cream hover:text-white font-medium transition-colors rounded-full hover:bg-white/10"
          >
            Fiyatlandırma
          </Link>

          <Link
            to="/about"
            className="px-4 py-2 text-corporate-cream hover:text-white font-medium transition-colors rounded-full hover:bg-white/10"
          >
            Hakkımızda
          </Link>
        </nav>

        {/* Authentication Buttons */}
        <div className="hidden md:flex items-center space-x-3">
          <button className="text-corporate-cream hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors">
            <Search size={20} />
          </button>
          <Link to="/signin">
            <Button
              variant="ghost"
              size="default"
              className="text-corporate-cream hover:text-white hover:bg-white/10 rounded-full px-5"
            >
              Giriş Yap
            </Button>
          </Link>
          <Link to="/get-started">
            <Button
              variant="default"
              size="default"
              className="bg-corporate-teal hover:bg-corporate-teal/90 text-white rounded-full px-5 shadow-md shadow-corporate-teal/20"
            >
              Başlayın
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-corporate-cream hover:text-white p-2 rounded-full hover:bg-white/10"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-corporate-blue/95 backdrop-blur-md border-t border-white/10 shadow-lg z-50">
          <div className="container mx-auto px-4 py-6 flex flex-col space-y-6">
            <div className="relative">
              <div className="flex items-center bg-white/10 rounded-lg px-4 py-2">
                <Search className="h-5 w-5 text-corporate-cream/70 mr-2" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-transparent border-none text-corporate-cream w-full focus:outline-none placeholder:text-corporate-cream/50"
                />
              </div>
            </div>

            {/* Services Menu - Mobile */}
            <div className="border-b border-white/10 pb-4">
              <div className="font-medium text-white mb-3 px-2 flex items-center">
                <span className="bg-corporate-teal/20 w-1 h-5 rounded mr-2"></span>
                Digital Services
              </div>
              <Link
                to="/services/website-development"
                className="flex justify-between items-center py-3 px-4 text-corporate-cream hover:text-white rounded-lg hover:bg-white/10"
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="flex items-center">
                  <Globe className="h-5 w-5 mr-3 text-corporate-teal" />
                  <div>
                    <div>Website Development</div>
                    <div className="text-xs text-corporate-cream/60">
                      Responsive, SEO-optimized websites
                    </div>
                  </div>
                </div>
                <ChevronRight className="h-4 w-4 text-corporate-cream/60" />
              </Link>
              <Link
                to="/services/mobile-app-development"
                className="flex justify-between items-center py-3 px-4 text-corporate-cream hover:text-white rounded-lg hover:bg-white/10"
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="flex items-center">
                  <Smartphone className="h-5 w-5 mr-3 text-corporate-peach" />
                  <div>
                    <div>Mobile App Development</div>
                    <div className="text-xs text-corporate-cream/60">
                      iOS & Android native applications
                    </div>
                  </div>
                </div>
                <ChevronRight className="h-4 w-4 text-corporate-cream/60" />
              </Link>
              <Link
                to="/services/custom-software"
                className="flex justify-between items-center py-3 px-4 text-corporate-cream hover:text-white rounded-lg hover:bg-white/10"
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="flex items-center">
                  <Code className="h-5 w-5 mr-3 text-corporate-blue" />
                  <div>
                    <div>Custom Software Solutions</div>
                    <div className="text-xs text-corporate-cream/60">
                      Tailored enterprise applications
                    </div>
                  </div>
                </div>
                <ChevronRight className="h-4 w-4 text-corporate-cream/60" />
              </Link>
              <Link
                to="/services/ecommerce-development"
                className="flex justify-between items-center py-3 px-4 text-corporate-cream hover:text-white rounded-lg hover:bg-white/10"
                onClick={() => setIsMenuOpen(false)}
              >
                <div className="flex items-center">
                  <ShoppingCart className="h-5 w-5 mr-3 text-corporate-teal" />
                  <div>
                    <div>E-commerce Development</div>
                    <div className="text-xs text-corporate-cream/60">
                      High-converting online stores
                    </div>
                  </div>
                </div>
                <ChevronRight className="h-4 w-4 text-corporate-cream/60" />
              </Link>
              <Link
                to="/services"
                className="flex justify-center items-center py-2 px-4 text-corporate-teal text-sm hover:text-white rounded-lg hover:bg-white/10 mt-2"
                onClick={() => setIsMenuOpen(false)}
              >
                View all digital services
                <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </div>

            <div className="border-b border-white/10 pb-4">
              <div className="font-medium text-white mb-3 px-2 flex items-center">
                <span className="bg-corporate-teal/20 w-1 h-5 rounded mr-2"></span>
                Hire Developers
              </div>
              <Link
                to="/frontend"
                className="flex justify-between items-center py-3 px-4 text-corporate-cream hover:text-white rounded-lg hover:bg-white/10"
                onClick={() => setIsMenuOpen(false)}
              >
                <div>
                  <div>Frontend Developers</div>
                  <div className="text-xs text-corporate-cream/60">
                    React, Vue, Angular specialists
                  </div>
                </div>
                <ChevronRight className="h-4 w-4 text-corporate-cream/60" />
              </Link>
              <Link
                to="/backend"
                className="flex justify-between items-center py-3 px-4 text-corporate-cream hover:text-white rounded-lg hover:bg-white/10"
                onClick={() => setIsMenuOpen(false)}
              >
                <div>
                  <div>Backend Developers</div>
                  <div className="text-xs text-corporate-cream/60">
                    Node.js, Python, Java experts
                  </div>
                </div>
                <ChevronRight className="h-4 w-4 text-corporate-cream/60" />
              </Link>
              <Link
                to="/fullstack"
                className="flex justify-between items-center py-3 px-4 text-corporate-cream hover:text-white rounded-lg hover:bg-white/10"
                onClick={() => setIsMenuOpen(false)}
              >
                <div>
                  <div>Full Stack Developers</div>
                  <div className="text-xs text-corporate-cream/60">
                    End-to-end solution builders
                  </div>
                </div>
                <ChevronRight className="h-4 w-4 text-corporate-cream/60" />
              </Link>
              <Link
                to="/mobile"
                className="flex justify-between items-center py-3 px-4 text-corporate-cream hover:text-white rounded-lg hover:bg-white/10"
                onClick={() => setIsMenuOpen(false)}
              >
                <div>
                  <div>Mobile Developers</div>
                  <div className="text-xs text-corporate-cream/60">
                    iOS, Android, React Native
                  </div>
                </div>
                <ChevronRight className="h-4 w-4 text-corporate-cream/60" />
              </Link>
              <Link
                to="/all-developers"
                className="flex justify-center items-center py-2 px-4 text-corporate-teal text-sm hover:text-white rounded-lg hover:bg-white/10 mt-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Browse all developer categories
                <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </div>

            <div className="border-b border-white/10 pb-4">
              <div className="font-medium text-white mb-3 px-2 flex items-center">
                <span className="bg-corporate-peach/20 w-1 h-5 rounded mr-2"></span>
                For Developers
              </div>
              <Link
                to="/apply"
                className="flex justify-between items-center py-3 px-4 text-corporate-cream hover:text-white rounded-lg hover:bg-white/10"
                onClick={() => setIsMenuOpen(false)}
              >
                <div>
                  <div>Apply as Developer</div>
                  <div className="text-xs text-corporate-cream/60">
                    Join our global talent network
                  </div>
                </div>
                <ChevronRight className="h-4 w-4 text-corporate-cream/60" />
              </Link>
              <Link
                to="/how-it-works"
                className="flex justify-between items-center py-3 px-4 text-corporate-cream hover:text-white rounded-lg hover:bg-white/10"
                onClick={() => setIsMenuOpen(false)}
              >
                <div>
                  <div>How It Works</div>
                  <div className="text-xs text-corporate-cream/60">
                    Our vetting and matching process
                  </div>
                </div>
                <ChevronRight className="h-4 w-4 text-corporate-cream/60" />
              </Link>
              <Link
                to="/developer-faq"
                className="flex justify-between items-center py-3 px-4 text-corporate-cream hover:text-white rounded-lg hover:bg-white/10"
                onClick={() => setIsMenuOpen(false)}
              >
                <div>
                  <div>Sıkça Sorulan Sorular</div>
                  <div className="text-xs text-corporate-cream/60">
                    Yazılımcılar için SSS
                  </div>
                </div>
                <ChevronRight className="h-4 w-4 text-corporate-cream/60" />
              </Link>
              <Link
                to="/success-stories"
                className="flex justify-center items-center py-2 px-4 text-corporate-teal text-sm hover:text-white rounded-lg hover:bg-white/10 mt-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Read developer success stories
                <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </div>

            <div className="flex flex-col space-y-2">
              <Link
                to="/pricing"
                className="block py-2 px-4 text-corporate-cream hover:text-white rounded-lg hover:bg-white/10 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>

              <Link
                to="/about"
                className="block py-2 px-4 text-corporate-cream hover:text-white rounded-lg hover:bg-white/10 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </div>

            <div className="flex flex-col space-y-3 pt-4 border-t border-white/10">
              <Button
                variant="outline"
                size="lg"
                className="w-full border-white/20 text-corporate-cream hover:bg-white/10 rounded-full"
              >
                Sign In
              </Button>
              <Link to="/get-started" className="w-full">
                <Button
                  variant="default"
                  size="lg"
                  className="w-full bg-corporate-teal hover:bg-corporate-teal/90 text-white rounded-full shadow-md shadow-corporate-teal/20"
                >
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
