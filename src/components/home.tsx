import React from "react";
import { Link } from "react-router-dom";
import { Building, Cloud } from "lucide-react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import PriceCalculatorDialog from "./PriceCalculatorDialog";
import Footer from "./Footer";
import OnboardingModal from "./OnboardingModal";
import { useOnboarding } from "@/hooks/useOnboarding";
import { Button } from "./ui/button";
import {
  ArrowRight,
  CheckCircle2,
  Globe,
  Shield,
  Zap,
  Code,
  Database,
  Server,
  Cpu,
  Users,
  Star,
  Sparkles,
  Rocket,
  Award,
  Briefcase,
  Clock,
  RefreshCw,
  ChevronRight,
  Smartphone,
} from "lucide-react";

interface HomePageProps {
  heroTitle?: string;
  heroSubtitle?: string;
  heroPrimaryCta?: string;
  heroSecondaryCta?: string;
  heroBackgroundImage?: string;
}

const HomePage = ({
  heroTitle,
  heroSubtitle,
  heroPrimaryCta,
  heroSecondaryCta,
  heroBackgroundImage,
}: HomePageProps) => {
  // Use the onboarding hook to manage onboarding state
  const {
    showOnboarding,
    setShowOnboarding,
    completeOnboarding,
    resetOnboarding,
    hasSeenOnboarding,
  } = useOnboarding();

  // Function to handle search submission
  const handleSearch = (filters: any) => {
    console.log("Search filters:", filters);
    // In a real implementation, this would fetch filtered results from an API
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Onboarding Modal */}
      {showOnboarding && <OnboardingModal onClose={completeOnboarding} />}

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section with Header integrated */}
        <div className="relative">
          <Header />
          <HeroSection
            title={heroTitle}
            subtitle={heroSubtitle}
            primaryCta={heroPrimaryCta}
            secondaryCta={heroSecondaryCta}
            backgroundImage={heroBackgroundImage}
          />
        </div>

        {/* Software Solutions Section */}
        <section className="py-24 md:py-32 relative overflow-hidden bg-gradient-to-br from-corporate-blue/5 to-corporate-cream/20">
          {/* Abstract background elements similar to hero section */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-[30%] -right-[10%] w-[70%] h-[70%] rounded-full bg-gradient-to-br from-corporate-teal/10 to-corporate-peach/10 blur-3xl animate-pulse duration-3000" />
            <div className="absolute -bottom-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-gradient-to-tr from-corporate-cream/10 to-corporate-teal/10 blur-3xl animate-pulse duration-2000" />
            <div className="absolute inset-0 bg-white/80 backdrop-blur-[1px]" />
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:30px_30px]" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 mb-4 rounded-full bg-corporate-blue/10 border border-corporate-blue/20 shadow-sm">
                <Rocket className="h-5 w-5 text-corporate-blue mr-2" />
                <span className="text-sm font-medium text-corporate-blue">
                  Çözümlerimizi Keşfedin
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-corporate-blue">
                İhtiyacınıza Uygun{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-corporate-blue to-corporate-teal">
                  Yazılım Çözümleri
                </span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Uzman ekibimiz, işletmenizin benzersiz ihtiyaçlarına göre
                özelleştirilmiş, yüksek performanslı yazılım çözümleri sunar.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                  {/* Solution Card 1 */}
                  <div className="bg-white p-6 rounded-xl shadow-md border border-corporate-teal/10 hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px] group">
                    <div className="w-14 h-14 bg-corporate-teal/10 rounded-full flex items-center justify-center mb-5 group-hover:bg-corporate-teal/20 transition-colors duration-300">
                      <Code className="h-7 w-7 text-corporate-teal" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-corporate-blue">
                      Özel Web Uygulamaları
                    </h3>
                    <p className="text-gray-600 mb-4">
                      İş süreçlerinizi otomatikleştiren ve verimliliği artıran
                      özelleştirilmiş web çözümleri.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-2 py-1 bg-corporate-teal/10 text-xs font-medium text-corporate-teal rounded-full">
                        React
                      </span>
                      <span className="px-2 py-1 bg-corporate-teal/10 text-xs font-medium text-corporate-teal rounded-full">
                        Node.js
                      </span>
                    </div>
                    <Button
                      variant="link"
                      className="text-corporate-teal p-0 h-auto flex items-center text-sm font-medium"
                    >
                      Detaylı Bilgi <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  </div>

                  {/* Solution Card 2 */}
                  <div className="bg-white p-6 rounded-xl shadow-md border border-corporate-peach/10 hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px] group">
                    <div className="w-14 h-14 bg-corporate-peach/10 rounded-full flex items-center justify-center mb-5 group-hover:bg-corporate-peach/20 transition-colors duration-300">
                      <Database className="h-7 w-7 text-corporate-peach" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-corporate-blue">
                      Kurumsal Sistemler
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Operasyonları düzenleyen ve verimliliği artıran
                      ölçeklenebilir kurumsal çözümler.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-2 py-1 bg-corporate-peach/10 text-xs font-medium text-corporate-peach rounded-full">
                        ERP
                      </span>
                      <span className="px-2 py-1 bg-corporate-peach/10 text-xs font-medium text-corporate-peach rounded-full">
                        CRM
                      </span>
                    </div>
                    <Button
                      variant="link"
                      className="text-corporate-peach p-0 h-auto flex items-center text-sm font-medium"
                    >
                      Detaylı Bilgi <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  </div>

                  {/* Solution Card 3 */}
                  <div className="bg-white p-6 rounded-xl shadow-md border border-corporate-blue/10 hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px] group">
                    <div className="w-14 h-14 bg-corporate-blue/10 rounded-full flex items-center justify-center mb-5 group-hover:bg-corporate-blue/20 transition-colors duration-300">
                      <Smartphone className="h-7 w-7 text-corporate-blue" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-corporate-blue">
                      Mobil Uygulamalar
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Kullanıcıları etkileyen ve iş büyümesini destekleyen
                      native ve cross-platform mobil uygulamalar.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-2 py-1 bg-corporate-blue/10 text-xs font-medium text-corporate-blue rounded-full">
                        iOS
                      </span>
                      <span className="px-2 py-1 bg-corporate-blue/10 text-xs font-medium text-corporate-blue rounded-full">
                        Android
                      </span>
                    </div>
                    <Button
                      variant="link"
                      className="text-corporate-blue p-0 h-auto flex items-center text-sm font-medium"
                    >
                      Detaylı Bilgi <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  </div>

                  {/* Solution Card 4 */}
                  <div className="bg-white p-6 rounded-xl shadow-md border border-corporate-teal/10 hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px] group">
                    <div className="w-14 h-14 bg-corporate-teal/10 rounded-full flex items-center justify-center mb-5 group-hover:bg-corporate-teal/20 transition-colors duration-300">
                      <Server className="h-7 w-7 text-corporate-teal" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-corporate-blue">
                      API Entegrasyonu
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Sistemlerinizi bağlayan ve veri akışını geliştiren
                      sorunsuz entegrasyon hizmetleri.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-2 py-1 bg-corporate-teal/10 text-xs font-medium text-corporate-teal rounded-full">
                        REST API
                      </span>
                      <span className="px-2 py-1 bg-corporate-teal/10 text-xs font-medium text-corporate-teal rounded-full">
                        GraphQL
                      </span>
                    </div>
                    <Button
                      variant="link"
                      className="text-corporate-teal p-0 h-auto flex items-center text-sm font-medium"
                    >
                      Detaylı Bilgi <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  </div>
                </div>

                <div className="mt-10 text-center lg:text-left">
                  <Button className="bg-gradient-to-r from-corporate-blue to-corporate-blue/80 hover:from-corporate-blue/90 hover:to-corporate-blue/70 text-white px-8 py-4 h-auto text-base font-semibold rounded-full shadow-lg shadow-corporate-blue/20 group">
                    <span className="flex items-center">
                      Tüm Çözümleri Keşfedin
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Button>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <div className="bg-white p-8 rounded-2xl shadow-xl border border-corporate-blue/10 relative overflow-hidden transform transition-all duration-500 hover:shadow-2xl hover:border-corporate-blue/20">
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-corporate-teal/10 rounded-full blur-3xl animate-pulse"></div>
                  <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-corporate-peach/10 rounded-full blur-3xl animate-pulse delay-700"></div>

                  <div className="relative z-10">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 rounded-full bg-corporate-blue/10 flex items-center justify-center mr-4">
                        <Cpu className="h-8 w-8 text-corporate-blue" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-corporate-blue">
                          Yapay Zeka Destekli Çözümler
                        </h3>
                        <p className="text-gray-600">
                          Modern işletmeler için akıllı yazılımlar
                        </p>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                      Uzman geliştirme ekibimiz, gelişmiş yapay zeka
                      teknolojisini kullanarak karmaşık iş zorluklarını çözen ve
                      %40 daha fazla verimlilikle ölçülebilir sonuçlar sağlayan
                      akıllı yazılım çözümleri sunar.
                    </p>

                    <div className="grid grid-cols-3 gap-4 mb-8">
                      {[
                        { number: "500+", text: "Başarılı Proje" },
                        { number: "98%", text: "Müşteri Memnuniyeti" },
                        { number: "40%", text: "Verimlilik Artışı" },
                      ].map((stat, i) => (
                        <div
                          key={i}
                          className="bg-white/50 p-4 rounded-xl border border-corporate-blue/5 text-center hover:shadow-md transition-all duration-300 hover:border-corporate-blue/10"
                        >
                          <div className="text-2xl font-bold text-corporate-blue mb-1">
                            {stat.number}
                          </div>
                          <p className="text-gray-600 text-sm">{stat.text}</p>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-semibold text-corporate-blue">
                        Kullandığımız Teknolojiler
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {[
                          {
                            name: "React",
                            icon: <Code className="h-4 w-4 mr-1" />,
                          },
                          {
                            name: "Node.js",
                            icon: <Server className="h-4 w-4 mr-1" />,
                          },
                          {
                            name: "Python",
                            icon: <Code className="h-4 w-4 mr-1" />,
                          },
                          {
                            name: "AWS",
                            icon: <Cloud className="h-4 w-4 mr-1" />,
                          },
                          {
                            name: "Azure",
                            icon: <Cloud className="h-4 w-4 mr-1" />,
                          },
                          {
                            name: "Mobile",
                            icon: <Smartphone className="h-4 w-4 mr-1" />,
                          },
                          {
                            name: "Enterprise",
                            icon: <Building className="h-4 w-4 mr-1" />,
                          },
                        ].map((tech, i) => (
                          <div
                            key={i}
                            className="px-3 py-1.5 bg-corporate-cream/40 rounded-full text-sm font-medium text-corporate-blue flex items-center hover:bg-corporate-cream/60 transition-colors cursor-pointer"
                          >
                            {tech.icon}
                            {tech.name}
                          </div>
                        ))}
                      </div>

                      <Button className="w-full mt-6 bg-gradient-to-r from-corporate-teal to-corporate-teal/80 hover:from-corporate-teal hover:to-corporate-teal/90 text-white py-3 rounded-lg shadow-md shadow-corporate-teal/10 flex items-center justify-center group">
                        <span className="flex items-center">
                          Ücretsiz Danışmanlık Alın
                          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Client testimonial */}
            <div className="mt-20 bg-white p-6 rounded-xl shadow-lg border border-corporate-blue/10 max-w-3xl mx-auto relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-corporate-teal/10 rounded-full blur-3xl"></div>

              <div className="flex items-start gap-6 relative z-10">
                <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 border-2 border-corporate-teal/20">
                  <img
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=john"
                    alt="Müşteri"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="flex text-corporate-teal mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="h-5 w-5 fill-corporate-teal"
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 italic mb-4">
                    "Hellospace ekibi tarafından geliştirilen özel yazılım
                    çözümü, şirketimizin verimliliğini %35 artırdı ve müşteri
                    memnuniyetimizi önemli ölçüde yükseltti. Profesyonel
                    yaklaşımları ve teknik uzmanlıkları için teşekkür ederiz."
                  </p>
                  <div>
                    <h4 className="font-semibold text-corporate-blue">
                      Ahmet Yılmaz
                    </h4>
                    <p className="text-sm text-gray-500">TechCorp CEO</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-corporate-blue/5 to-corporate-cream/30 relative overflow-hidden">
          {/* Abstract shapes */}
          <div className="absolute -top-[10%] -right-[5%] w-[40%] h-[40%] rounded-full bg-gradient-to-br from-corporate-teal/10 to-corporate-peach/10 blur-3xl animate-pulse duration-3000" />
          <div className="absolute -bottom-[10%] -left-[5%] w-[40%] h-[40%] rounded-full bg-gradient-to-tr from-corporate-cream/10 to-corporate-teal/10 blur-3xl animate-pulse duration-2000" />
          <div className="absolute inset-0 bg-grid-white/[0.03] bg-[length:30px_30px]" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
              <div className="text-left">
                <div className="inline-flex items-center px-4 py-2 mb-6 rounded-full bg-corporate-blue/10 border border-corporate-blue/20 shadow-sm">
                  <Rocket className="h-5 w-5 text-corporate-blue mr-2" />
                  <span className="text-sm font-medium text-corporate-blue">
                    Kanıtlanmış Geliştirme Metodolojisi
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-corporate-blue">
                  İş Vizyonunuzu{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-corporate-blue to-corporate-teal">
                    Gerçeğe
                  </span>{" "}
                  Dönüştürüyoruz
                </h2>
                <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                  Optimize edilmiş geliştirme sürecimiz, benzersiz iş
                  zorluklarınızı çözen ve ölçülebilir sonuçlar sağlayan kurumsal
                  düzeyde yazılım çözümleri sunar.
                </p>

                <div className="space-y-6 mb-8">
                  {[
                    {
                      icon: <Briefcase className="h-5 w-5 text-white" />,
                      title: "İş Odaklı Yaklaşım",
                      text: "Tek satır kod yazmadan önce işletme hedeflerinize odaklanıyoruz",
                    },
                    {
                      icon: <Shield className="h-5 w-5 text-white" />,
                      title: "Kurumsal Düzeyde Güvenlik",
                      text: "Banka seviyesinde güvenlik protokolleri hassas verilerinizi korur",
                    },
                    {
                      icon: <Zap className="h-5 w-5 text-white" />,
                      title: "Hızlı Dağıtım",
                      text: "Çevik geliştirme metodolojimizle pazara daha hızlı girin",
                    },
                  ].map((feature, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-corporate-blue to-corporate-teal flex items-center justify-center flex-shrink-0 shadow-lg">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-corporate-blue">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600">{feature.text}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-gradient-to-r from-corporate-blue to-corporate-blue/90 hover:from-corporate-blue/90 hover:to-corporate-blue/80 text-white px-8 py-4 h-auto text-lg font-medium rounded-full shadow-xl shadow-corporate-blue/20 group">
                    <span className="flex items-center">
                      Ücretsiz Danışmanlık Alın
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Button>
                  <Button
                    variant="outline"
                    className="border-corporate-blue/30 text-corporate-blue hover:bg-corporate-blue/5 px-6 py-4 h-auto rounded-full"
                  >
                    Başarı Hikayelerini Görüntüle
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-corporate-teal/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-corporate-blue/10 rounded-full blur-3xl animate-pulse delay-700"></div>

                <div className="bg-white p-8 rounded-2xl shadow-xl border border-corporate-blue/10 relative overflow-hidden">
                  <div className="flex items-center mb-8">
                    <div className="w-14 h-14 rounded-full bg-corporate-blue/10 flex items-center justify-center mr-4">
                      <Code className="h-7 w-7 text-corporate-blue" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-corporate-blue">
                        Geliştirme Sürecimiz
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Verimlilik ve sonuç odaklı optimize edilmiş
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    {[
                      {
                        number: "01",
                        title: "Keşif ve Analiz",
                        desc: "İş ihtiyaçlarınızı analiz eder ve proje gereksinimlerini tanımlarız",
                        progress: 100,
                        color: "corporate-teal",
                      },
                      {
                        number: "02",
                        title: "Çözüm Tasarımı",
                        desc: "Mimarlarımız optimal teknik planı oluşturur",
                        progress: 100,
                        color: "corporate-blue",
                      },
                      {
                        number: "03",
                        title: "Çevik Geliştirme",
                        desc: "Düzenli müşteri geri bildirimiyle yinelemeli geliştirme",
                        progress: 100,
                        color: "corporate-peach",
                      },
                      {
                        number: "04",
                        title: "Test ve Kalite Kontrol",
                        desc: "Titiz testler kusursuz performans sağlar",
                        progress: 100,
                        color: "corporate-teal",
                      },
                      {
                        number: "05",
                        title: "Dağıtım ve Destek",
                        desc: "Sürekli bakımla sorunsuz uygulama",
                        progress: 100,
                        color: "corporate-blue",
                      },
                    ].map((step, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-4 group hover:bg-gray-50 p-3 rounded-xl transition-colors"
                      >
                        <div
                          className={`w-12 h-12 rounded-full bg-${step.color}/10 flex items-center justify-center flex-shrink-0 font-bold text-${step.color}`}
                        >
                          {step.number}
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-center mb-1">
                            <h4 className="font-semibold text-corporate-blue">
                              {step.title}
                            </h4>
                            <div className="text-xs font-medium text-corporate-teal">
                              100%
                            </div>
                          </div>
                          <p className="text-sm text-gray-600 mb-2">
                            {step.desc}
                          </p>
                          <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                            <div
                              className={`h-full bg-${step.color} w-[${step.progress}%] rounded-full`}
                            ></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 pt-6 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-corporate-blue/10 flex items-center justify-center mr-3">
                          <Clock className="h-5 w-5 text-corporate-blue" />
                        </div>
                        <div>
                          <h4 className="font-medium text-corporate-blue">
                            Ortalama Süre
                          </h4>
                          <p className="text-sm text-gray-500">
                            Konseptten lansmana
                          </p>
                        </div>
                      </div>
                      <div className="text-2xl font-bold text-corporate-blue">
                        8-12{" "}
                        <span className="text-sm font-normal text-gray-500">
                          hafta
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <div className="inline-flex items-center px-4 py-2 mb-4 rounded-full bg-corporate-cream/50 border border-corporate-teal/20">
                <Star className="h-4 w-4 text-corporate-teal mr-2" />
                <span className="text-sm font-medium text-corporate-blue">
                  Yazılımımızı Kullanan 500+ İşletmeye Katılın
                </span>
              </div>
              <div className="flex flex-wrap justify-center items-center gap-8 opacity-70 mt-6">
                {[
                  "TechCorp",
                  "InnovateSoft",
                  "DataSphere",
                  "CloudNexus",
                  "LunarTech",
                  "QuantumSystems",
                ].map((company, i) => (
                  <div
                    key={i}
                    className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-corporate-blue/10 hover:shadow-md hover:border-corporate-blue/20 transition-all duration-300 cursor-pointer"
                  >
                    <Globe className="h-4 w-4 text-corporate-blue" />
                    <span className="text-sm font-medium text-corporate-blue">
                      {company}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="text-left">
                <div className="inline-flex items-center px-4 py-2 mb-6 rounded-full bg-corporate-peach/10 border border-corporate-peach/20 shadow-sm">
                  <Award className="h-5 w-5 text-corporate-peach mr-2" />
                  <span className="text-sm font-medium text-corporate-blue">
                    Enterprise Software Solutions
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-corporate-blue">
                  Why Leading Companies{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-corporate-peach to-corporate-blue">
                    Trust Our Software
                  </span>{" "}
                  Expertise
                </h2>
                <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                  From startups to Fortune 500 companies, organizations choose
                  our custom software development services to drive innovation,
                  streamline operations, and gain competitive advantage.
                </p>

                <div className="flex flex-col sm:flex-row gap-5 mb-8">
                  <Button className="bg-gradient-to-r from-corporate-blue to-corporate-blue/80 hover:from-corporate-blue/90 hover:to-corporate-blue/70 text-white px-10 py-4 h-auto text-lg font-semibold rounded-full shadow-xl shadow-corporate-blue/30 transform transition-all duration-300 hover:scale-105 group">
                    <span className="flex items-center">
                      Schedule Software Consultation
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-corporate-peach/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-corporate-blue/10 rounded-full blur-3xl animate-pulse delay-700"></div>

                <div className="bg-white p-8 rounded-2xl shadow-xl border border-corporate-peach/10 relative overflow-hidden group hover:shadow-2xl transition-all duration-500">
                  <div className="flex items-center mb-8">
                    <div className="w-14 h-14 rounded-full bg-corporate-peach/10 flex items-center justify-center mr-4">
                      <Cpu className="h-7 w-7 text-corporate-peach" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-corporate-blue">
                        Technology Excellence
                      </h3>
                      <p className="text-gray-600 text-sm">
                        Cutting-edge solutions for modern businesses
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-corporate-blue/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-corporate-blue font-bold">
                          98%
                        </span>
                      </div>
                      <div className="flex-1">
                        <div className="h-2.5 w-full bg-gray-100 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-corporate-blue to-corporate-blue/70 w-[98%] rounded-full"></div>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">
                          Client satisfaction rate
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-corporate-teal/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-corporate-teal font-bold">
                          100+
                        </span>
                      </div>
                      <div className="flex-1">
                        <div className="h-2.5 w-full bg-gray-100 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-corporate-teal to-corporate-teal/70 w-[85%] rounded-full"></div>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">
                          Enterprise projects delivered
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-corporate-peach/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-corporate-peach font-bold">
                          24/7
                        </span>
                      </div>
                      <div className="flex-1">
                        <div className="h-2.5 w-full bg-gray-100 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-corporate-peach to-corporate-peach/70 w-[100%] rounded-full"></div>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">
                          Technical support & monitoring
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-100 pt-6">
                    <h4 className="font-medium text-corporate-blue mb-3">
                      Industry-Leading Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "React",
                        "Node.js",
                        "Python",
                        "AWS",
                        "Azure",
                        "Docker",
                        "Kubernetes",
                      ].map((tech, i) => (
                        <div
                          key={i}
                          className="px-3 py-1.5 bg-corporate-cream/30 rounded-full text-xs font-medium text-corporate-blue"
                        >
                          {tech}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-gradient-to-br from-white to-corporate-cream/30 p-8 rounded-xl border border-corporate-teal/10 shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px]">
                <div className="w-12 h-12 bg-corporate-peach/10 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="h-6 w-6 text-corporate-peach" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-corporate-blue">
                  Rigorous Vetting Process
                </h3>
                <p className="text-gray-600">
                  Only the top 1% of talent passes our comprehensive technical
                  assessments and background checks.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-gradient-to-br from-white to-corporate-cream/30 p-8 rounded-xl border border-corporate-teal/10 shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px]">
                <div className="w-12 h-12 bg-corporate-peach/10 rounded-full flex items-center justify-center mb-6">
                  <Zap className="h-6 w-6 text-corporate-peach" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-corporate-blue">
                  AI-Powered Matching
                </h3>
                <p className="text-gray-600">
                  Our proprietary AI algorithms analyze over 100 data points
                  including skills, experience, and work preferences to find
                  your ideal developer match with 98% accuracy.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-gradient-to-br from-white to-corporate-cream/30 p-8 rounded-xl border border-corporate-teal/10 shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px]">
                <div className="w-12 h-12 bg-corporate-peach/10 rounded-full flex items-center justify-center mb-6">
                  <Globe className="h-6 w-6 text-corporate-peach" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-corporate-blue">
                  Global Talent Network
                </h3>
                <p className="text-gray-600">
                  Access skilled developers from over 150 countries, bringing
                  diverse perspectives to your projects.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="bg-gradient-to-br from-white to-corporate-cream/30 p-8 rounded-xl border border-corporate-teal/10 shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px]">
                <div className="w-12 h-12 bg-corporate-peach/10 rounded-full flex items-center justify-center mb-6">
                  <Shield className="h-6 w-6 text-corporate-peach" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-corporate-blue">
                  Risk-Free Trial Period
                </h3>
                <p className="text-gray-600">
                  Work with your developer for two weeks to ensure they're the
                  right fit before making a commitment.
                </p>
              </div>

              {/* Feature 5 */}
              <div className="bg-gradient-to-br from-white to-corporate-cream/30 p-8 rounded-xl border border-corporate-teal/10 shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px]">
                <div className="w-12 h-12 bg-corporate-peach/10 rounded-full flex items-center justify-center mb-6">
                  <Briefcase className="h-6 w-6 text-corporate-peach" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-corporate-blue">
                  Project Management Tools
                </h3>
                <p className="text-gray-600">
                  Streamline collaboration with integrated tools for task
                  tracking, communication, and milestone management.
                </p>
              </div>

              {/* Feature 6 */}
              <div className="bg-gradient-to-br from-white to-corporate-cream/30 p-8 rounded-xl border border-corporate-teal/10 shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px]">
                <div className="w-12 h-12 bg-corporate-peach/10 rounded-full flex items-center justify-center mb-6">
                  <Clock className="h-6 w-6 text-corporate-peach" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-corporate-blue">
                  Transparent Pricing
                </h3>
                <p className="text-gray-600">
                  No hidden fees or surprises. Our straightforward pricing
                  ensures you know exactly what you're paying for.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-24 px-4 bg-gradient-to-br from-corporate-blue/5 to-corporate-cream/30 relative overflow-hidden">
          {/* Abstract shapes */}
          <div className="absolute -top-[10%] -right-[5%] w-[30%] h-[30%] rounded-full bg-gradient-to-br from-corporate-teal/10 to-corporate-peach/10 blur-3xl" />
          <div className="absolute -bottom-[10%] -left-[5%] w-[30%] h-[30%] rounded-full bg-gradient-to-tr from-corporate-cream/10 to-corporate-teal/10 blur-3xl" />

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                <div className="inline-flex items-center px-4 py-2 mb-6 rounded-full bg-corporate-teal/10 border border-corporate-teal/20 shadow-sm">
                  <Code className="h-5 w-5 text-corporate-teal mr-2" />
                  <span className="text-sm font-medium text-corporate-blue">
                    Client Success Stories
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-corporate-blue">
                  Transforming Businesses with{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-corporate-teal to-corporate-blue">
                    Custom Software
                  </span>{" "}
                  Solutions
                </h2>
                <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                  Our expert development team has helped companies across
                  industries streamline operations, reduce costs, and accelerate
                  growth with tailored software solutions.
                </p>

                <div className="space-y-6 mb-8">
                  {[
                    {
                      percent: "65%",
                      text: "Average reduction in operational costs",
                    },
                    {
                      percent: "3x",
                      text: "Faster time-to-market for new features",
                    },
                    {
                      percent: "99.9%",
                      text: "Uptime for mission-critical applications",
                    },
                  ].map((stat, i) => (
                    <div key={i} className="flex items-center">
                      <div className="w-16 h-16 rounded-full bg-corporate-teal/10 flex items-center justify-center mr-4 flex-shrink-0">
                        <span className="text-xl font-bold text-corporate-teal">
                          {stat.percent}
                        </span>
                      </div>
                      <p className="text-gray-700 font-medium">{stat.text}</p>
                    </div>
                  ))}
                </div>

                <Button className="bg-gradient-to-r from-corporate-teal to-corporate-teal/80 hover:from-corporate-teal/90 hover:to-corporate-teal/70 text-white px-8 py-3 h-auto text-lg font-medium rounded-full shadow-lg shadow-corporate-teal/20 group">
                  <span className="flex items-center">
                    Request Case Studies
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </div>

              <div className="space-y-6">
                {/* Testimonial Cards */}
                <div className="bg-white p-6 rounded-xl shadow-md border border-corporate-teal/10 hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px] relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-corporate-teal/5 rounded-full blur-xl -translate-y-1/2 translate-x-1/2"></div>

                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0 border-2 border-corporate-teal/20">
                      <img
                        src="https://api.dicebear.com/7.x/avataaars/svg?seed=john"
                        alt="John D."
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold text-corporate-blue">
                            John Davidson
                          </h3>
                          <p className="text-sm text-gray-500">
                            CTO, TechStart Inc.
                          </p>
                        </div>
                        <div className="flex text-corporate-teal">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className="h-4 w-4 fill-corporate-teal"
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-600 mt-3">
                        "The custom ERP system developed by Hellospace has
                        transformed our operations completely. We've seen a{" "}
                        <span className="font-semibold text-corporate-blue">
                          70% reduction in processing time
                        </span>{" "}
                        and significantly improved data accuracy across
                        departments."
                      </p>
                      <div className="mt-3 flex items-center text-sm text-corporate-teal">
                        <span className="font-medium">
                          Enterprise Resource Planning Solution
                        </span>
                        <div className="w-2 h-2 rounded-full bg-corporate-teal/30 mx-2"></div>
                        <span>6-month project</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md border border-corporate-peach/10 hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px] relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-corporate-peach/5 rounded-full blur-xl -translate-y-1/2 translate-x-1/2"></div>

                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0 border-2 border-corporate-peach/20">
                      <img
                        src="https://api.dicebear.com/7.x/avataaars/svg?seed=lisa"
                        alt="Lisa M."
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold text-corporate-blue">
                            Lisa Martinez
                          </h3>
                          <p className="text-sm text-gray-500">
                            Product Manager, GrowthLabs
                          </p>
                        </div>
                        <div className="flex text-corporate-peach">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className="h-4 w-4 fill-corporate-peach"
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-600 mt-3">
                        "Our customer engagement increased by{" "}
                        <span className="font-semibold text-corporate-blue">
                          45% after launching
                        </span>{" "}
                        the mobile application developed by Hellospace. The
                        intuitive UI and seamless performance have received
                        outstanding feedback from our users."
                      </p>
                      <div className="mt-3 flex items-center text-sm text-corporate-peach">
                        <span className="font-medium">
                          Mobile Application Development
                        </span>
                        <div className="w-2 h-2 rounded-full bg-corporate-peach/30 mx-2"></div>
                        <span>4-month project</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-md border border-corporate-blue/10 hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px] relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-corporate-blue/5 rounded-full blur-xl -translate-y-1/2 translate-x-1/2"></div>

                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0 border-2 border-corporate-blue/20">
                      <img
                        src="https://api.dicebear.com/7.x/avataaars/svg?seed=robert"
                        alt="Robert K."
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold text-corporate-blue">
                            Robert Kim
                          </h3>
                          <p className="text-sm text-gray-500">
                            Founder, InnovateCo
                          </p>
                        </div>
                        <div className="flex text-corporate-blue">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className="h-4 w-4 fill-corporate-blue"
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-600 mt-3">
                        "The API integration solution developed by Hellospace
                        helped us{" "}
                        <span className="font-semibold text-corporate-blue">
                          connect our legacy systems
                        </span>{" "}
                        with modern cloud services. Data flows seamlessly now,
                        and we've eliminated countless hours of manual work."
                      </p>
                      <div className="mt-3 flex items-center text-sm text-corporate-blue">
                        <span className="font-medium">
                          API Integration Services
                        </span>
                        <div className="w-2 h-2 rounded-full bg-corporate-blue/30 mx-2"></div>
                        <span>3-month project</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-br from-corporate-blue via-corporate-blue/90 to-corporate-blue/80 text-white relative overflow-hidden">
          {/* Abstract shapes */}
          <div className="absolute -top-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-gradient-to-br from-corporate-teal/20 to-corporate-peach/20 blur-3xl animate-pulse duration-3000" />
          <div className="absolute -bottom-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-gradient-to-tr from-corporate-cream/20 to-corporate-teal/20 blur-3xl animate-pulse duration-2000" />
          <div className="absolute inset-0 bg-grid-white/[0.03] bg-[length:30px_30px]" />

          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                <div className="inline-flex items-center px-4 py-2 mb-6 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm shadow-lg">
                  <Rocket className="h-5 w-5 text-corporate-peach mr-2" />
                  <span className="text-sm font-medium text-corporate-cream">
                    Accelerate Your Business Growth
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  Transform Your Ideas into{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-corporate-peach to-corporate-teal">
                    Powerful Software
                  </span>{" "}
                  Solutions
                </h2>
                <p className="text-white/90 mb-8 text-lg leading-relaxed">
                  Our elite team of developers will bring your vision to life
                  with custom software tailored to your unique business needs.
                  From web applications to enterprise systems, we deliver
                  solutions that drive efficiency and growth.
                </p>
                <div className="flex flex-col sm:flex-row gap-5 mb-8">
                  <Button className="bg-gradient-to-r from-corporate-teal to-corporate-teal/80 hover:from-corporate-teal/90 hover:to-corporate-teal/70 text-white px-10 py-4 h-auto text-lg font-semibold rounded-full shadow-xl shadow-corporate-teal/30 transform transition-all duration-300 hover:scale-105 group">
                    <span className="flex items-center">
                      Get Free Consultation
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Button>
                  <Link to="/contact">
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-white/30 hover:bg-white/10 backdrop-blur-sm hover:border-white/50 transition-all duration-300 bg-corporate-blue/30 text-white"
                    >
                      Bize Ulaşın
                    </Button>
                  </Link>
                </div>
                <div className="flex items-center space-x-6">
                  <div className="flex -space-x-3">
                    {["alex", "sarah", "michael", "emily"].map((seed, i) => (
                      <div
                        key={i}
                        className="w-10 h-10 rounded-full border-2 border-corporate-blue overflow-hidden"
                      >
                        <img
                          src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${seed}`}
                          alt="Client"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="text-sm">
                    <div className="flex items-center">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className="h-4 w-4 text-corporate-peach fill-corporate-peach"
                          />
                        ))}
                      </div>
                      <span className="ml-2 font-medium">4.9/5</span>
                    </div>
                    <p className="text-corporate-cream/80">
                      From 500+ satisfied clients
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-corporate-teal/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-corporate-peach/20 rounded-full blur-3xl animate-pulse delay-700"></div>

                <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-2xl relative overflow-hidden group hover:border-white/20 transition-all duration-500">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-corporate-teal/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-full bg-corporate-peach/20 flex items-center justify-center mr-4">
                      <Sparkles className="h-6 w-6 text-corporate-peach" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Our Services</h3>
                      <p className="text-corporate-cream/70 text-sm">
                        Tailored to your business needs
                      </p>
                    </div>
                  </div>

                  <div className="space-y-5">
                    {[
                      {
                        icon: <Code className="h-5 w-5 text-corporate-teal" />,
                        title: "Custom Web Applications",
                        desc: "Tailored solutions for your unique business needs",
                      },
                      {
                        icon: (
                          <Database className="h-5 w-5 text-corporate-peach" />
                        ),
                        title: "Enterprise Software",
                        desc: "Scalable systems for growing organizations",
                      },
                      {
                        icon: (
                          <Server className="h-5 w-5 text-corporate-cream" />
                        ),
                        title: "API Development",
                        desc: "Connect your systems seamlessly",
                      },
                    ].map((service, i) => (
                      <div
                        key={i}
                        className="flex p-4 rounded-xl hover:bg-white/5 transition-colors"
                      >
                        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4 flex-shrink-0">
                          {service.icon}
                        </div>
                        <div>
                          <h4 className="font-medium">{service.title}</h4>
                          <p className="text-sm text-corporate-cream/70">
                            {service.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Button className="w-full mt-6 bg-gradient-to-r from-corporate-peach/80 to-corporate-peach/60 hover:from-corporate-peach hover:to-corporate-peach/80 text-white font-medium py-3 rounded-lg shadow-lg shadow-corporate-peach/20">
                    Explore All Services
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
