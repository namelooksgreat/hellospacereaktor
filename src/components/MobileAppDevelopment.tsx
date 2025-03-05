import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import {
  ArrowRight,
  Smartphone,
  Code,
  Zap,
  CheckCircle,
  ShoppingCart,
  Users,
  Building,
  BarChart,
  Layers,
  Rocket,
  Star,
  MessageCircle,
  Globe,
  Shield,
  Clock,
  DollarSign,
  Sparkles,
  Cpu,
  PenTool,
  Phone,
  ChevronRight,
  Award,
  FileCode,
  Headphones,
} from "lucide-react";

const MobileAppDevelopment = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-corporate-blue overflow-hidden">
        {/* Abstract background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-[30%] -right-[10%] w-[70%] h-[70%] rounded-full bg-gradient-to-br from-corporate-teal/20 to-corporate-peach/20 blur-3xl" />
          <div className="absolute -bottom-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-gradient-to-tr from-corporate-cream/20 to-corporate-teal/20 blur-3xl" />
          <div className="absolute top-[20%] left-[15%] w-[40%] h-[40%] rounded-full bg-gradient-to-br from-corporate-blue/10 to-corporate-peach/10 blur-3xl" />
          <div className="absolute inset-0 bg-corporate-blue/60 backdrop-blur-[1px]" />

          {/* Grid pattern overlay */}
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:30px_30px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-3 py-1.5 mb-6 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
            <Smartphone className="h-4 w-4 text-corporate-peach mr-2" />
            <span className="text-xs font-medium text-corporate-cream">
              iOS & Android Uygulamaları
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
            Mobil Uygulama Çözümleri
          </h1>
          <p className="text-xl text-corporate-cream/90 mb-8 max-w-3xl mx-auto">
            İşletmenizin başarısını artıracak, kullanıcı odaklı ve yenilikçi
            mobil uygulamalar geliştiriyoruz.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
            <Button
              size="lg"
              className="text-base font-semibold px-8 py-6 h-auto bg-gradient-to-r from-corporate-teal to-corporate-teal/80 hover:from-corporate-teal/90 hover:to-corporate-teal/70 text-white border-0 shadow-lg shadow-corporate-teal/20 relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center">
                Ücretsiz Danışmanlık Alın{" "}
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
                Portföyümüzü İnceleyin
                <div className="ml-2 relative">
                  <div className="absolute -inset-1 rounded-full bg-corporate-peach/20 animate-ping"></div>
                  <ChevronRight className="h-5 w-5 text-corporate-peach animate-pulse" />
                </div>
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-corporate-peach/0 via-white/10 to-corporate-peach/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
            </Button>
          </div>

          {/* App Store Badges */}
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-black/80 backdrop-blur-sm px-4 py-2 rounded-xl border border-white/10 flex items-center">
              <div className="mr-3">
                <svg viewBox="0 0 24 24" className="h-8 w-8 text-white">
                  <path
                    fill="currentColor"
                    d="M17.05,20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24,0-1.44.62-2.2.44-3.06-.35C2.79,15.37,3.51,7.08,8.92,6.82c1.56.06,2.63,1.05,3.54,1.08,1.35-.12,2.63-1.18,4.03-1,1.53.2,2.68.93,3.41,2.32-3.34,2.14-2.76,6.61.45,7.85C19.77,18.46,18.61,19.72,17.05,20.28ZM12.03,6.3c-.15-2.93,2.33-5.48,5.1-5.3C17.47,3.97,15.07,6.47,12.03,6.3Z"
                  />
                </svg>
              </div>
              <div className="text-left">
                <div className="text-white/70 text-xs">Download on the</div>
                <div className="text-white font-semibold">App Store</div>
              </div>
            </div>
            <div className="bg-black/80 backdrop-blur-sm px-4 py-2 rounded-xl border border-white/10 flex items-center">
              <div className="mr-3">
                <svg viewBox="0 0 24 24" className="h-8 w-8 text-white">
                  <path
                    fill="currentColor"
                    d="M3.609 1.814L13.792 12 3.609 22.186a.996.996 0 0 1-.273-.635V2.449c0-.228.08-.44.273-.635zM14.392 12l4.216 4.216-9.216 5.299 5-9.515zm4.216-4.216L14.392 12l-5-9.515 9.216 5.299zM3.827 1.008c.067-.012.136-.008.204-.008.265 0 .516.099.705.289l17.04 9.805c.284.164.445.472.445.793 0 .32-.161.629-.445.793l-17.04 9.805c-.188.19-.44.289-.705.289-.068 0-.137.004-.204-.008-.367-.066-.655-.338-.743-.696-.032-.129-.044-.265-.044-.397V2.106c0-.132.012-.268.044-.397.088-.358.376-.63.743-.696z"
                  />
                </svg>
              </div>
              <div className="text-left">
                <div className="text-white/70 text-xs">GET IT ON</div>
                <div className="text-white font-semibold">Google Play</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* App Types Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1.5 mb-4 rounded-full bg-corporate-blue/10 border border-corporate-blue/20">
              <Layers className="h-4 w-4 text-corporate-blue mr-2" />
              <span className="text-xs font-medium text-corporate-blue">
                Uygulama Türleri
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-corporate-blue">
              İhtiyacınıza Özel Mobil Çözümler
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Her sektör ve iş modeli için özelleştirilmiş, kullanıcı deneyimini
              ön planda tutan mobil uygulamalar geliştiriyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* App Type 1 */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]">
              <div className="w-14 h-14 bg-corporate-teal/10 rounded-full flex items-center justify-center mb-5">
                <ShoppingCart className="h-7 w-7 text-corporate-teal" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-corporate-blue">
                E-Ticaret Uygulamaları
              </h3>
              <p className="text-gray-600 mb-4">
                Satışlarınızı artıracak, kullanıcı dostu arayüze sahip, güvenli
                ödeme sistemleri ile entegre e-ticaret uygulamaları.
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Ürün Katalogları",
                  "Sepet Yönetimi",
                  "Ödeme Entegrasyonu",
                  "Kullanıcı Profilleri",
                ].map((feature, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-corporate-teal/10 text-xs font-medium text-corporate-teal rounded-full"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>

            {/* App Type 2 */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]">
              <div className="w-14 h-14 bg-corporate-peach/10 rounded-full flex items-center justify-center mb-5">
                <Users className="h-7 w-7 text-corporate-peach" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-corporate-blue">
                Sosyal Medya Uygulamaları
              </h3>
              <p className="text-gray-600 mb-4">
                Topluluk oluşturma, içerik paylaşımı ve kullanıcı etkileşimini
                maksimize eden sosyal ağ uygulamaları.
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Kullanıcı Profilleri",
                  "İçerik Paylaşımı",
                  "Anlık Bildirimler",
                  "Mesajlaşma",
                ].map((feature, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-corporate-peach/10 text-xs font-medium text-corporate-peach rounded-full"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>

            {/* App Type 3 */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]">
              <div className="w-14 h-14 bg-corporate-blue/10 rounded-full flex items-center justify-center mb-5">
                <Building className="h-7 w-7 text-corporate-blue" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-corporate-blue">
                Kurumsal Uygulamalar
              </h3>
              <p className="text-gray-600 mb-4">
                İş süreçlerinizi optimize eden, veri güvenliğini ön planda
                tutan, şirket içi iletişimi güçlendiren kurumsal çözümler.
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "İş Akışı Yönetimi",
                  "Veri Analizi",
                  "Ekip İletişimi",
                  "Güvenli Erişim",
                ].map((feature, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-corporate-blue/10 text-xs font-medium text-corporate-blue rounded-full"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MobileAppDevelopment;
