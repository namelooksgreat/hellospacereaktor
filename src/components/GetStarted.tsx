import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Button } from "./ui/button";
import {
  ArrowRight,
  Rocket,
  Users,
  Globe,
  Code,
  DollarSign,
  Clock,
  Shield,
  Zap,
  Star,
  CheckCircle,
  Award,
  Sparkles,
  Briefcase,
  ChevronRight,
  Laptop,
  Smartphone,
  MessageCircle,
  FileCode,
  Headphones,
  BarChart,
  Target,
  Lightbulb,
  Cpu,
  PenTool,
  Layout,
  Database,
} from "lucide-react";

const GetStarted = () => {
  const [activeTab, setActiveTab] = useState<string>("client");

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
          <div className="inline-flex items-center px-4 py-2 mb-6 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
            <Rocket className="h-5 w-5 text-corporate-peach mr-2" />
            <span className="text-sm font-medium text-corporate-cream">
              Hellospace'e Hoş Geldiniz
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
            Dijital Evreninizde{" "}
            <span className="text-corporate-teal">Yeni Bir Yolculuk</span>{" "}
            Başlıyor
          </h1>
          <p className="text-xl text-corporate-cream/90 mb-8 max-w-3xl mx-auto">
            Hellospace, yazılım dünyasında yeni bir çağ açıyor. İster yetenek
            arıyor, ister yeteneklerinizi sergilemek istiyor olun - doğru
            yerdesiniz.
          </p>

          {/* User Type Tabs */}
          <div className="max-w-3xl mx-auto mb-10">
            <div className="grid w-full grid-cols-2 mb-8 bg-white/10 p-2 border border-white/20 backdrop-blur-sm rounded-full shadow-lg">
              <button
                type="button"
                onClick={() => setActiveTab("client")}
                className={`rounded-full py-3 text-base text-corporate-cream font-medium transition-all duration-300 flex items-center justify-center ${activeTab === "client" ? "bg-corporate-teal text-white" : "hover:bg-white/10"}`}
              >
                <Briefcase className="h-5 w-5 mr-3" />
                Yetenek Arıyorum
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("developer")}
                className={`rounded-full py-3 text-base text-corporate-cream font-medium transition-all duration-300 flex items-center justify-center ${activeTab === "developer" ? "bg-corporate-peach text-white" : "hover:bg-white/10"}`}
              >
                <Code className="h-5 w-5 mr-3" />
                Yazılımcı/Tasarımcıyım
              </button>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-5 mb-12">
            {activeTab === "client" ? (
              <>
                <Button
                  size="lg"
                  className="text-base font-semibold px-10 py-6 h-auto bg-gradient-to-r from-corporate-teal to-corporate-teal/80 hover:from-corporate-teal/90 hover:to-corporate-teal/70 text-white border-0 shadow-xl shadow-corporate-teal/20 relative overflow-hidden group"
                >
                  <span className="relative z-10 flex items-center">
                    Ücretsiz Danışmanlık Alın
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-corporate-teal/0 via-white/20 to-corporate-teal/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-base font-semibold px-10 py-6 h-auto bg-white/5 backdrop-blur-sm border-white/30 text-white hover:bg-white/10 relative overflow-hidden group"
                >
                  <span className="relative z-10 flex items-center">
                    Yetenekleri Keşfedin
                    <div className="ml-2 relative">
                      <div className="absolute -inset-1 rounded-full bg-corporate-teal/20 animate-ping"></div>
                      <Users className="h-5 w-5 text-corporate-teal animate-pulse" />
                    </div>
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
                </Button>
              </>
            ) : (
              <>
                <Button
                  size="lg"
                  className="text-base font-semibold px-10 py-6 h-auto bg-gradient-to-r from-corporate-peach to-corporate-peach/80 hover:from-corporate-peach/90 hover:to-corporate-peach/70 text-white border-0 shadow-xl shadow-corporate-peach/20 relative overflow-hidden group"
                >
                  <span className="relative z-10 flex items-center">
                    Hemen Başvurun
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-corporate-peach/0 via-white/20 to-corporate-peach/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-base font-semibold px-10 py-6 h-auto bg-white/5 backdrop-blur-sm border-white/30 text-white hover:bg-white/10 relative overflow-hidden group"
                >
                  <span className="relative z-10 flex items-center">
                    Nasıl Çalışır?
                    <div className="ml-2 relative">
                      <div className="absolute -inset-1 rounded-full bg-corporate-peach/20 animate-ping"></div>
                      <Rocket className="h-5 w-5 text-corporate-peach animate-pulse" />
                    </div>
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
                </Button>
              </>
            )}
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-6 text-corporate-cream">
            <div className="flex items-center bg-white/10 px-5 py-2.5 rounded-full border border-white/20 backdrop-blur-sm">
              <Star className="h-5 w-5 text-corporate-peach mr-2.5" />
              <span className="font-medium">5,000+ Yazılımcı & Tasarımcı</span>
            </div>
            <div className="flex items-center bg-white/10 px-5 py-2.5 rounded-full border border-white/20 backdrop-blur-sm">
              <Globe className="h-5 w-5 text-corporate-teal mr-2.5" />
              <span className="font-medium">150+ Ülke</span>
            </div>
            <div className="flex items-center bg-white/10 px-5 py-2.5 rounded-full border border-white/20 backdrop-blur-sm">
              <CheckCircle className="h-5 w-5 text-corporate-peach mr-2.5" />
              <span className="font-medium">%98 Müşteri Memnuniyeti</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content - Tabbed Interface */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Client Content */}
          {activeTab === "client" && (
            <>
              {/* Platform Benefits */}
              <div className="mb-20">
                <div className="text-center mb-12">
                  <div className="inline-flex items-center px-3 py-1.5 mb-4 rounded-full bg-corporate-teal/10 border border-corporate-teal/20">
                    <Award className="h-4 w-4 text-corporate-teal mr-2" />
                    <span className="text-xs font-medium text-corporate-blue">
                      Müşterilerimiz İçin
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-corporate-blue">
                    Neden Hellospace ile Çalışmalısınız?
                  </h2>
                  <p className="text-gray-600 max-w-3xl mx-auto">
                    Hellospace, en iyi yazılımcı ve tasarımcıları bulmanızı
                    sağlayan, yapay zeka destekli bir platformdur. Projeniz için
                    mükemmel eşleşmeyi garanti ediyoruz.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Benefit 1 */}
                  <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]">
                    <div className="w-14 h-14 bg-corporate-teal/10 rounded-full flex items-center justify-center mb-5">
                      <Sparkles className="h-7 w-7 text-corporate-teal" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-corporate-blue">
                      Elit Yetenek Havuzu
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Sadece en iyi %3'lük dilime giren, titizlikle seçilmiş
                      yazılımcı ve tasarımcılarla çalışın. Her aday kapsamlı
                      teknik değerlendirmelerden geçer.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Doğrulanmış Beceriler",
                        "Deneyimli Uzmanlar",
                        "İngilizce Yetkinliği",
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

                  {/* Benefit 2 */}
                  <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]">
                    <div className="w-14 h-14 bg-corporate-blue/10 rounded-full flex items-center justify-center mb-5">
                      <Cpu className="h-7 w-7 text-corporate-blue" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-corporate-blue">
                      AI Destekli Eşleştirme
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Yapay zeka algoritmalarımız, projenizin gereksinimlerine
                      ve şirket kültürünüze en uygun yetenekleri bulur. Zaman ve
                      kaynak tasarrufu sağlarsınız.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Hassas Eşleştirme",
                        "Hızlı Sonuçlar",
                        "Kültürel Uyum",
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

                  {/* Benefit 3 */}
                  <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]">
                    <div className="w-14 h-14 bg-corporate-peach/10 rounded-full flex items-center justify-center mb-5">
                      <Shield className="h-7 w-7 text-corporate-peach" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-corporate-blue">
                      Risksiz Deneme
                    </h3>
                    <p className="text-gray-600 mb-4">
                      İlk iki hafta memnun kalmazsanız, ücret iadesi garantisi
                      sunuyoruz. Ayrıca, tüm ödemeler güvenli bir şekilde emanet
                      hesabında tutulur.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Para İadesi Garantisi",
                        "Güvenli Ödemeler",
                        "Şeffaf Sözleşmeler",
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
                </div>
              </div>

              {/* How It Works */}
              <div className="mb-20 bg-corporate-blue/5 py-16 px-4 rounded-2xl">
                <div className="text-center mb-12">
                  <div className="inline-flex items-center px-3 py-1.5 mb-4 rounded-full bg-corporate-blue/10 border border-corporate-blue/20">
                    <Rocket className="h-4 w-4 text-corporate-blue mr-2" />
                    <span className="text-xs font-medium text-corporate-blue">
                      Süreç
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-corporate-blue">
                    Nasıl Çalışır?
                  </h2>
                  <p className="text-gray-600 max-w-3xl mx-auto">
                    Hellospace ile yetenek bulma süreciniz basit, hızlı ve
                    etkilidir. İşte adım adım nasıl çalıştığımız:
                  </p>
                </div>

                <div className="max-w-4xl mx-auto">
                  <div className="relative">
                    {/* Connecting line */}
                    <div className="absolute left-[25px] md:left-[35px] top-0 h-full w-1 bg-gradient-to-b from-corporate-teal via-corporate-blue to-corporate-peach rounded-full"></div>

                    {/* Step 1 */}
                    <div className="flex mb-12 relative">
                      <div className="w-[50px] md:w-[70px] h-[50px] md:h-[70px] bg-corporate-teal rounded-full flex items-center justify-center text-white font-bold shadow-lg z-10 flex-shrink-0">
                        <Target className="h-6 w-6 md:h-8 md:w-8" />
                      </div>
                      <div className="ml-6 pt-3">
                        <h3 className="text-xl md:text-2xl font-bold text-corporate-blue mb-2">
                          İhtiyaçlarınızı Belirleyin
                        </h3>
                        <p className="text-gray-600">
                          Proje gereksinimlerinizi, bütçenizi ve zaman
                          çizelgenizi belirleyin. Danışmanlarımız,
                          ihtiyaçlarınızı anlamak için sizinle görüşecek.
                        </p>
                      </div>
                    </div>

                    {/* Step 2 */}
                    <div className="flex mb-12 relative">
                      <div className="w-[50px] md:w-[70px] h-[50px] md:h-[70px] bg-corporate-blue rounded-full flex items-center justify-center text-white font-bold shadow-lg z-10 flex-shrink-0">
                        <Users className="h-6 w-6 md:h-8 md:w-8" />
                      </div>
                      <div className="ml-6 pt-3">
                        <h3 className="text-xl md:text-2xl font-bold text-corporate-blue mb-2">
                          Yetenek Eşleştirmesi
                        </h3>
                        <p className="text-gray-600">
                          AI algoritmalarımız, ihtiyaçlarınıza en uygun
                          yetenekleri belirler. Size özel bir kısa liste sunulur
                          ve görüşmeler ayarlanır.
                        </p>
                      </div>
                    </div>

                    {/* Step 3 */}
                    <div className="flex mb-12 relative">
                      <div className="w-[50px] md:w-[70px] h-[50px] md:h-[70px] bg-corporate-peach rounded-full flex items-center justify-center text-white font-bold shadow-lg z-10 flex-shrink-0">
                        <Briefcase className="h-6 w-6 md:h-8 md:w-8" />
                      </div>
                      <div className="ml-6 pt-3">
                        <h3 className="text-xl md:text-2xl font-bold text-corporate-blue mb-2">
                          İşbirliği Başlasın
                        </h3>
                        <p className="text-gray-600">
                          Seçtiğiniz yetenekle çalışmaya başlayın. Platform
                          üzerinden iletişim kurun, ilerlemeyi takip edin ve
                          güvenli ödeme sistemimizi kullanın.
                        </p>
                      </div>
                    </div>

                    {/* Step 4 */}
                    <div className="flex relative">
                      <div className="w-[50px] md:w-[70px] h-[50px] md:h-[70px] bg-gradient-to-r from-corporate-teal to-corporate-peach rounded-full flex items-center justify-center text-white font-bold shadow-lg z-10 flex-shrink-0">
                        <Zap className="h-6 w-6 md:h-8 md:w-8" />
                      </div>
                      <div className="ml-6 pt-3">
                        <h3 className="text-xl md:text-2xl font-bold text-corporate-blue mb-2">
                          Başarıya Ulaşın
                        </h3>
                        <p className="text-gray-600">
                          Projeniz tamamlandığında, sonuçları değerlendirin ve
                          dilediğiniz takdirde işbirliğini uzatın. Hellospace,
                          uzun vadeli başarınız için yanınızda.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Success Stories */}
              <div className="mb-16">
                <div className="text-center mb-12">
                  <div className="inline-flex items-center px-3 py-1.5 mb-4 rounded-full bg-corporate-peach/10 border border-corporate-peach/20">
                    <Star className="h-4 w-4 text-corporate-peach mr-2" />
                    <span className="text-xs font-medium text-corporate-blue">
                      Başarı Hikayeleri
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-corporate-blue">
                    Müşterilerimizin Deneyimleri
                  </h2>
                  <p className="text-gray-600 max-w-3xl mx-auto">
                    Hellospace ile çalışan şirketlerin başarı hikayelerini
                    keşfedin.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Testimonial 1 */}
                  <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border border-gray-200">
                        <img
                          src="https://api.dicebear.com/7.x/avataaars/svg?seed=ceo1"
                          alt="CEO"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800">
                          Ahmet Yılmaz
                        </h4>
                        <p className="text-sm text-gray-500">TechSoft CEO</p>
                      </div>
                    </div>

                    <div className="flex mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 text-corporate-teal fill-corporate-teal"
                        />
                      ))}
                    </div>

                    <p className="text-gray-600 text-sm mb-4">
                      "Hellospace ile çalışmak, yazılım geliştirme sürecimizi
                      tamamen değiştirdi. İhtiyaçlarımıza mükemmel uyan bir
                      geliştirici ekibi bulduk ve projemizi zamanında
                      tamamladık. Kesinlikle tavsiye ediyorum!"
                    </p>

                    <div className="flex items-center text-corporate-teal text-sm font-medium">
                      <span>Vaka Çalışmasını Okuyun</span>
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </div>
                  </div>

                  {/* Testimonial 2 */}
                  <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border border-gray-200">
                        <img
                          src="https://api.dicebear.com/7.x/avataaars/svg?seed=ceo2"
                          alt="CTO"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800">
                          Zeynep Kaya
                        </h4>
                        <p className="text-sm text-gray-500">E-Commerce CTO</p>
                      </div>
                    </div>

                    <div className="flex mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 text-corporate-teal fill-corporate-teal"
                        />
                      ))}
                    </div>

                    <p className="text-gray-600 text-sm mb-4">
                      "E-ticaret platformumuzun yeniden tasarımı için
                      Hellospace'ten bir UI/UX tasarımcısı ile çalıştık.
                      Sonuçlar inanılmazdı - dönüşüm oranlarımız %40 arttı ve
                      müşteri memnuniyeti yükseldi."
                    </p>

                    <div className="flex items-center text-corporate-teal text-sm font-medium">
                      <span>Vaka Çalışmasını Okuyun</span>
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </div>
                  </div>

                  {/* Testimonial 3 */}
                  <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border border-gray-200">
                        <img
                          src="https://api.dicebear.com/7.x/avataaars/svg?seed=ceo3"
                          alt="Founder"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800">
                          Mehmet Demir
                        </h4>
                        <p className="text-sm text-gray-500">
                          StartupX Founder
                        </p>
                      </div>
                    </div>

                    <div className="flex mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 text-corporate-teal fill-corporate-teal"
                        />
                      ))}
                    </div>

                    <p className="text-gray-600 text-sm mb-4">
                      "Startup'ımız için sınırlı bir bütçeyle çalışıyorduk,
                      ancak Hellospace bize dünya standartlarında bir mobil
                      uygulama geliştirme ekibi sağladı. Yatırımcılarımız
                      sonuçtan çok etkilendi!"
                    </p>

                    <div className="flex items-center text-corporate-teal text-sm font-medium">
                      <span>Vaka Çalışmasını Okuyun</span>
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div className="bg-gradient-to-r from-corporate-blue via-corporate-blue/90 to-corporate-blue/80 text-white rounded-2xl p-8 md:p-12 relative overflow-hidden">
                {/* Abstract shapes */}
                <div className="absolute -top-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-gradient-to-br from-corporate-teal/20 to-corporate-peach/20 blur-3xl animate-pulse duration-3000" />
                <div className="absolute -bottom-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-gradient-to-tr from-corporate-cream/20 to-corporate-teal/20 blur-3xl animate-pulse duration-2000" />
                <div className="absolute inset-0 bg-grid-white/[0.03] bg-[length:30px_30px]" />

                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                  <div className="text-center md:text-left">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">
                      Projeniz İçin Mükemmel Yeteneği Bulun
                    </h3>
                    <p className="text-white/80 mb-0 max-w-xl">
                      Hellospace ile işe alım sürecinizi hızlandırın,
                      maliyetlerinizi düşürün ve en iyi yeteneklerle çalışın.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="bg-gradient-to-r from-corporate-teal to-corporate-teal/80 hover:from-corporate-teal/90 hover:to-corporate-teal/70 text-white px-8 py-3 h-auto text-lg font-medium rounded-full shadow-lg shadow-corporate-teal/20 group whitespace-nowrap">
                      <span className="flex items-center">
                        Ücretsiz Danışmanlık Alın
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </Button>
                    <Button
                      variant="outline"
                      className="border-white/30 hover:bg-white/10 px-8 py-3 h-auto text-lg font-medium rounded-full backdrop-blur-sm hover:border-white/50 transition-all duration-300 bg-corporate-blue/30 whitespace-nowrap"
                    >
                      <span className="text-white">Yetenekleri Keşfedin</span>
                    </Button>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* Developer Content */}
          {activeTab === "developer" && (
            <>
              {/* Platform Benefits */}
              <div className="mb-20">
                <div className="text-center mb-12">
                  <div className="inline-flex items-center px-3 py-1.5 mb-4 rounded-full bg-corporate-peach/10 border border-corporate-peach/20">
                    <Award className="h-4 w-4 text-corporate-peach mr-2" />
                    <span className="text-xs font-medium text-corporate-blue">
                      Yazılımcılar & Tasarımcılar İçin
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-corporate-blue">
                    Hellospace ile Çalışmanın Avantajları
                  </h2>
                  <p className="text-gray-600 max-w-3xl mx-auto">
                    Hellospace, yazılımcı ve tasarımcılara benzersiz fırsatlar
                    ve avantajlar sunar. İşte platformumuzda yer almanın size
                    kazandıracakları:
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Benefit 1 */}
                  <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]">
                    <div className="w-14 h-14 bg-corporate-peach/10 rounded-full flex items-center justify-center mb-5">
                      <Globe className="h-7 w-7 text-corporate-peach" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-corporate-blue">
                      Global Fırsatlar
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Dünyanın dört bir yanından prestijli şirketlerle çalışma
                      fırsatı yakalayın. Coğrafi sınırlamaları aşarak, global
                      pazarda yeteneklerinizi sergileyebilirsiniz.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Uluslararası Projeler",
                        "Uzaktan Çalışma",
                        "Ağınızı Genişletin",
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

                  {/* Benefit 2 */}
                  <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]">
                    <div className="w-14 h-14 bg-corporate-blue/10 rounded-full flex items-center justify-center mb-5">
                      <DollarSign className="h-7 w-7 text-corporate-blue" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-corporate-blue">
                      Rekabetçi Ücretler
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Global piyasa standartlarında, yeteneklerinizin değerini
                      yansıtan ücretler kazanın. Saatlik veya proje bazlı ödeme
                      seçenekleriyle finansal özgürlüğünüzü artırın.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Piyasa Üstü Ücretler",
                        "Düzenli Ödemeler",
                        "Şeffaf Ücretlendirme",
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

                  {/* Benefit 3 */}
                  <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]">
                    <div className="w-14 h-14 bg-corporate-teal/10 rounded-full flex items-center justify-center mb-5">
                      <Clock className="h-7 w-7 text-corporate-teal" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-corporate-blue">
                      Esnek Çalışma
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Kendi programınızı oluşturun, istediğiniz yerden çalışın.
                      Tam zamanlı, yarı zamanlı veya proje bazlı çalışma
                      seçenekleri arasından size uygun olanı seçin.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Esnek Saatler",
                        "İstediğiniz Yerden",
                        "İş-Yaşam Dengesi",
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
                </div>
              </div>

              {/* How It Works */}
              <div className="mb-20 bg-corporate-blue/5 py-16 px-4 rounded-2xl">
                <div className="text-center mb-12">
                  <div className="inline-flex items-center px-3 py-1.5 mb-4 rounded-full bg-corporate-blue/10 border border-corporate-blue/20">
                    <Rocket className="h-4 w-4 text-corporate-blue mr-2" />
                    <span className="text-xs font-medium text-corporate-blue">
                      Süreç
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-corporate-blue">
                    Nasıl Çalışır?
                  </h2>
                  <p className="text-gray-600 max-w-3xl mx-auto">
                    Hellospace'e katılmak ve global projelerle çalışmaya
                    başlamak için izlemeniz gereken adımlar son derece basit ve
                    şeffaftır.
                  </p>
                </div>

                <div className="max-w-4xl mx-auto">
                  <div className="relative">
                    {/* Connecting line */}
                    <div className="absolute left-[25px] md:left-[35px] top-0 h-full w-1 bg-gradient-to-b from-corporate-peach via-corporate-blue to-corporate-teal rounded-full"></div>

                    {/* Step 1 */}
                    <div className="flex mb-12 relative">
                      <div className="w-[50px] md:w-[70px] h-[50px] md:h-[70px] bg-corporate-peach rounded-full flex items-center justify-center text-white font-bold shadow-lg z-10 flex-shrink-0">
                        <FileCode className="h-6 w-6 md:h-8 md:w-8" />
                      </div>
                      <div className="ml-6 pt-3">
                        <h3 className="text-xl md:text-2xl font-bold text-corporate-blue mb-2">
                          Başvuru ve Profil Oluşturma
                        </h3>
                        <p className="text-gray-600">
                          Platformumuza kaydolun ve yeteneklerinizi,
                          deneyiminizi, çalışma tercihlerinizi ve ücret
                          beklentilerinizi içeren detaylı profilinizi oluşturun.
                        </p>
                      </div>
                    </div>

                    {/* Step 2 */}
                    <div className="flex mb-12 relative">
                      <div className="w-[50px] md:w-[70px] h-[50px] md:h-[70px] bg-corporate-blue rounded-full flex items-center justify-center text-white font-bold shadow-lg z-10 flex-shrink-0">
                        <Code className="h-6 w-6 md:h-8 md:w-8" />
                      </div>
                      <div className="ml-6 pt-3">
                        <h3 className="text-xl md:text-2xl font-bold text-corporate-blue mb-2">
                          Yetenek Değerlendirmesi
                        </h3>
                        <p className="text-gray-600">
                          Teknik becerilerinizi ve problem çözme yeteneklerinizi
                          değerlendiren online testleri tamamlayın. Bu aşama,
                          doğru projelerle eşleşmenizi sağlar.
                        </p>
                      </div>
                    </div>

                    {/* Step 3 */}
                    <div className="flex mb-12 relative">
                      <div className="w-[50px] md:w-[70px] h-[50px] md:h-[70px] bg-corporate-teal rounded-full flex items-center justify-center text-white font-bold shadow-lg z-10 flex-shrink-0">
                        <Headphones className="h-6 w-6 md:h-8 md:w-8" />
                      </div>
                      <div className="ml-6 pt-3">
                        <h3 className="text-xl md:text-2xl font-bold text-corporate-blue mb-2">
                          Görüşme ve Onay
                        </h3>
                        <p className="text-gray-600">
                          Ekibimizle online bir görüşme yaparak deneyimlerinizi,
                          beklentilerinizi ve çalışma tarzınızı paylaşın.
                          Başarılı adaylar platformumuza kabul edilir.
                        </p>
                      </div>
                    </div>

                    {/* Step 4 */}
                    <div className="flex relative">
                      <div className="w-[50px] md:w-[70px] h-[50px] md:h-[70px] bg-gradient-to-r from-corporate-peach to-corporate-teal rounded-full flex items-center justify-center text-white font-bold shadow-lg z-10 flex-shrink-0">
                        <Briefcase className="h-6 w-6 md:h-8 md:w-8" />
                      </div>
                      <div className="ml-6 pt-3">
                        <h3 className="text-xl md:text-2xl font-bold text-corporate-blue mb-2">
                          Proje Eşleştirme ve Çalışma
                        </h3>
                        <p className="text-gray-600">
                          Yapay zeka destekli eşleştirme sistemimiz,
                          becerilerinize ve tercihlerinize en uygun projeleri
                          bulur. Size sunulan proje önerilerini değerlendirin ve
                          çalışmaya başlayın.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Success Stories */}
              <div className="mb-16">
                <div className="text-center mb-12">
                  <div className="inline-flex items-center px-3 py-1.5 mb-4 rounded-full bg-corporate-teal/10 border border-corporate-teal/20">
                    <Star className="h-4 w-4 text-corporate-teal mr-2" />
                    <span className="text-xs font-medium text-corporate-blue">
                      Başarı Hikayeleri
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-corporate-blue">
                    Yazılımcılarımızın Deneyimleri
                  </h2>
                  <p className="text-gray-600 max-w-3xl mx-auto">
                    Hellospace ile çalışan yazılımcı ve tasarımcıların gerçek
                    hikayeleri ve deneyimleri.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Testimonial 1 */}
                  <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border border-gray-200">
                        <img
                          src="https://api.dicebear.com/7.x/avataaars/svg?seed=dev1"
                          alt="Developer"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800">
                          Mert Yılmaz
                        </h4>
                        <p className="text-sm text-gray-500">
                          Senior Frontend Developer
                        </p>
                      </div>
                    </div>

                    <div className="flex mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 text-corporate-peach fill-corporate-peach"
                        />
                      ))}
                    </div>

                    <p className="text-gray-600 text-sm mb-4">
                      "Hellospace sayesinde dünya çapında projelerle çalışma
                      fırsatı buldum. Esnek çalışma saatleri ve rekabetçi
                      ücretler kariyerimde büyük bir sıçrama yapmamı sağladı.
                      Artık istediğim yerden çalışabiliyorum."
                    </p>

                    <div className="flex items-center text-corporate-peach text-sm font-medium">
                      <span>Tam Hikayeyi Oku</span>
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </div>
                  </div>

                  {/* Testimonial 2 */}
                  <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border border-gray-200">
                        <img
                          src="https://api.dicebear.com/7.x/avataaars/svg?seed=dev2"
                          alt="Designer"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800">
                          Ayşe Demir
                        </h4>
                        <p className="text-sm text-gray-500">UI/UX Designer</p>
                      </div>
                    </div>

                    <div className="flex mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 text-corporate-peach fill-corporate-peach"
                        />
                      ))}
                    </div>

                    <p className="text-gray-600 text-sm mb-4">
                      "Tasarımcı olarak Hellospace'te çalışmak, yaratıcılığımı
                      farklı projelerle geliştirmemi sağladı. Platform üzerinden
                      edindiğim bağlantılar ve aldığım geri bildirimler
                      sayesinde tasarım becerilerimi sürekli
                      geliştirebiliyorum."
                    </p>

                    <div className="flex items-center text-corporate-peach text-sm font-medium">
                      <span>Tam Hikayeyi Oku</span>
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </div>
                  </div>

                  {/* Testimonial 3 */}
                  <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border border-gray-200">
                        <img
                          src="https://api.dicebear.com/7.x/avataaars/svg?seed=dev3"
                          alt="Developer"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800">Can Özkan</h4>
                        <p className="text-sm text-gray-500">
                          Full Stack Developer
                        </p>
                      </div>
                    </div>

                    <div className="flex mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 text-corporate-peach fill-corporate-peach"
                        />
                      ))}
                    </div>

                    <p className="text-gray-600 text-sm mb-4">
                      "İki yıldır Hellospace üzerinden çalışıyorum ve bu süreçte
                      hem teknik becerilerimi geliştirdim hem de finansal
                      özgürlüğümü kazandım. Platform, proje bulma ve müşteri
                      iletişimi konusundaki tüm endişelerimi ortadan kaldırdı."
                    </p>

                    <div className="flex items-center text-corporate-peach text-sm font-medium">
                      <span>Tam Hikayeyi Oku</span>
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Skills in Demand */}
              <div className="mb-16">
                <div className="text-center mb-12">
                  <div className="inline-flex items-center px-3 py-1.5 mb-4 rounded-full bg-corporate-blue/10 border border-corporate-blue/20">
                    <Lightbulb className="h-4 w-4 text-corporate-blue mr-2" />
                    <span className="text-xs font-medium text-corporate-blue">
                      Aranan Yetenekler
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-corporate-blue">
                    En Çok Talep Edilen Uzmanlık Alanları
                  </h2>
                  <p className="text-gray-600 max-w-3xl mx-auto">
                    Müşterilerimizin en çok aradığı teknoloji ve tasarım
                    uzmanlıklarını keşfedin.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {/* Skill Category 1 */}
                  <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]">
                    <div className="w-12 h-12 bg-corporate-teal/10 rounded-full flex items-center justify-center mb-4">
                      <Code className="h-6 w-6 text-corporate-teal" />
                    </div>
                    <h3 className="text-lg font-bold mb-3 text-corporate-blue">
                      Frontend Geliştirme
                    </h3>
                    <div className="space-y-2">
                      {[
                        "React",
                        "Vue.js",
                        "Angular",
                        "TypeScript",
                        "Next.js",
                      ].map((skill, i) => (
                        <div key={i} className="flex items-center">
                          <div className="w-2 h-2 rounded-full bg-corporate-teal mr-2"></div>
                          <span className="text-gray-600 text-sm">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Skill Category 2 */}
                  <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]">
                    <div className="w-12 h-12 bg-corporate-blue/10 rounded-full flex items-center justify-center mb-4">
                      <Database className="h-6 w-6 text-corporate-blue" />
                    </div>
                    <h3 className="text-lg font-bold mb-3 text-corporate-blue">
                      Backend Geliştirme
                    </h3>
                    <div className="space-y-2">
                      {[
                        "Node.js",
                        "Python/Django",
                        "Java",
                        "PHP/Laravel",
                        "Ruby on Rails",
                      ].map((skill, i) => (
                        <div key={i} className="flex items-center">
                          <div className="w-2 h-2 rounded-full bg-corporate-blue mr-2"></div>
                          <span className="text-gray-600 text-sm">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Skill Category 3 */}
                  <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]">
                    <div className="w-12 h-12 bg-corporate-peach/10 rounded-full flex items-center justify-center mb-4">
                      <Smartphone className="h-6 w-6 text-corporate-peach" />
                    </div>
                    <h3 className="text-lg font-bold mb-3 text-corporate-blue">
                      Mobil Geliştirme
                    </h3>
                    <div className="space-y-2">
                      {[
                        "React Native",
                        "Flutter",
                        "iOS/Swift",
                        "Android/Kotlin",
                        "Xamarin",
                      ].map((skill, i) => (
                        <div key={i} className="flex items-center">
                          <div className="w-2 h-2 rounded-full bg-corporate-peach mr-2"></div>
                          <span className="text-gray-600 text-sm">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Skill Category 4 */}
                  <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]">
                    <div className="w-12 h-12 bg-corporate-teal/10 rounded-full flex items-center justify-center mb-4">
                      <PenTool className="h-6 w-6 text-corporate-teal" />
                    </div>
                    <h3 className="text-lg font-bold mb-3 text-corporate-blue">
                      UI/UX Tasarım
                    </h3>
                    <div className="space-y-2">
                      {[
                        "Figma",
                        "Adobe XD",
                        "Sketch",
                        "UI Design",
                        "UX Research",
                      ].map((skill, i) => (
                        <div key={i} className="flex items-center">
                          <div className="w-2 h-2 rounded-full bg-corporate-teal mr-2"></div>
                          <span className="text-gray-600 text-sm">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div className="bg-gradient-to-r from-corporate-blue via-corporate-blue/90 to-corporate-blue/80 text-white rounded-2xl p-8 md:p-12 relative overflow-hidden">
                {/* Abstract shapes */}
                <div className="absolute -top-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-gradient-to-br from-corporate-teal/20 to-corporate-peach/20 blur-3xl animate-pulse duration-3000" />
                <div className="absolute -bottom-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-gradient-to-tr from-corporate-cream/20 to-corporate-teal/20 blur-3xl animate-pulse duration-2000" />
                <div className="absolute inset-0 bg-grid-white/[0.03] bg-[length:30px_30px]" />

                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                  <div className="text-center md:text-left">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">
                      Yeteneklerinizi Global Arenaya Taşıyın
                    </h3>
                    <p className="text-white/80 mb-0 max-w-xl">
                      Hellospace ile dünyanın her yerinden projelerle çalışın,
                      esnek çalışma saatlerinin keyfini çıkarın ve kariyerinizi
                      kendi şartlarınızda yönetin.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="bg-gradient-to-r from-corporate-peach to-corporate-peach/80 hover:from-corporate-peach/90 hover:to-corporate-peach/70 text-white px-8 py-3 h-auto text-lg font-medium rounded-full shadow-lg shadow-corporate-peach/20 group whitespace-nowrap">
                      <span className="flex items-center">
                        Hemen Başvurun
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </Button>
                    <Button
                      variant="outline"
                      className="border-white/30 hover:bg-white/10 px-8 py-3 h-auto text-lg font-medium rounded-full backdrop-blur-sm hover:border-white/50 transition-all duration-300 bg-corporate-blue/30 whitespace-nowrap"
                    >
                      <span className="text-white">SSS'leri Görüntüle</span>
                    </Button>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default GetStarted;
