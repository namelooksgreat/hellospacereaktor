import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import {
  ArrowRight,
  Users,
  Globe,
  Award,
  Star,
  Zap,
  Code,
  Sparkles,
  Rocket,
  CheckCircle,
  Shield,
  Briefcase,
  Clock,
  Laptop,
  PenTool,
  Heart,
  Target,
  Lightbulb,
  MessageCircle,
  ChevronRight,
  Smartphone,
  Mail,
  Phone,
  MapPin,
  DollarSign,
  Calendar,
  Layers,
  Monitor,
  Cpu,
  Database,
  Server,
  Headphones,
  Gem,
  BarChart,
  LineChart,
  Coins,
  Palette,
  FileCode,
  Wifi,
  Compass,
  Codesandbox,
  Repeat,
  Hourglass,
  Workflow,
  Bookmark,
  Flame,
  Puzzle,
  Infinity,
  Milestone,
  Glasses,
  Lightbulb as LightbulbIcon,
} from "lucide-react";

const ApplyDeveloper = () => {
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
            <Code className="h-4 w-4 text-corporate-peach mr-2" />
            <span className="text-xs font-medium text-corporate-cream">
              Yazılımcılar & Tasarımcılar İçin
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
            Yeteneklerinizi Burada Parlatın
          </h1>
          <p className="text-xl text-corporate-cream/90 mb-8 max-w-3xl mx-auto">
            Hellospace, yazılımcı ve tasarımcılar için global fırsatlar sunan,
            esnek çalışma modelleri ile kariyerinizi bir üst seviyeye taşıyan
            bir platformdur.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
            <Button
              size="lg"
              className="text-base font-semibold px-8 py-6 h-auto bg-gradient-to-r from-corporate-teal to-corporate-teal/80 hover:from-corporate-teal/90 hover:to-corporate-teal/70 text-white border-0 shadow-lg shadow-corporate-teal/20 relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center">
                Hemen Başvur{" "}
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
                Daha Fazla Bilgi
                <div className="ml-2 relative">
                  <div className="absolute -inset-1 rounded-full bg-corporate-peach/20 animate-ping"></div>
                  <Zap className="h-5 w-5 text-corporate-peach animate-pulse" />
                </div>
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-corporate-peach/0 via-white/10 to-corporate-peach/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-20 px-4 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 mb-6 rounded-full bg-corporate-teal/10 border border-corporate-teal/20 shadow-sm">
                <Rocket className="h-5 w-5 text-corporate-teal mr-2" />
                <span className="text-sm font-medium text-corporate-blue">
                  Neden Hellospace?
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-corporate-blue">
                Kariyerinizi
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-corporate-blue to-corporate-teal">
                  {" "}
                  Global Ölçeğe Taşıyın
                </span>
              </h2>
              <p className="text-gray-600 mb-6 text-lg">
                Hellospace, yazılımcı ve tasarımcılar için dünyanın her yerinden
                esnek, uzaktan çalışma fırsatları sunan bir platformdur. En iyi
                yetenekleri, en iyi projelerle buluşturuyoruz.
              </p>
              <p className="text-gray-600 mb-8">
                Platformumuzda yer alarak, global şirketlerle çalışma, rekabetçi
                ücretler kazanma ve kariyerinizi kendi şartlarınızda yönetme
                imkanına sahip olursunuz. Siz de bu ekosistemin bir parçası
                olun!
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <div className="bg-corporate-teal/10 p-2 rounded-full">
                    <Globe className="h-5 w-5 text-corporate-teal" />
                  </div>
                  <div>
                    <h3 className="font-medium text-corporate-blue">
                      Global Fırsatlar
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Dünya çapında projeler
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-corporate-peach/10 p-2 rounded-full">
                    <DollarSign className="h-5 w-5 text-corporate-peach" />
                  </div>
                  <div>
                    <h3 className="font-medium text-corporate-blue">
                      Rekabetçi Ücretler
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Değerinizi biliyoruz
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-corporate-blue/10 p-2 rounded-full">
                    <Calendar className="h-5 w-5 text-corporate-blue" />
                  </div>
                  <div>
                    <h3 className="font-medium text-corporate-blue">
                      Esnek Çalışma
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Kendi programınızı oluşturun
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-corporate-cream/20 p-2 rounded-full">
                    <Rocket className="h-5 w-5 text-corporate-blue" />
                  </div>
                  <div>
                    <h3 className="font-medium text-corporate-blue">
                      Kariyer Gelişimi
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Sürekli öğrenme ve büyüme
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-corporate-teal/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-corporate-peach/10 rounded-full blur-3xl"></div>

              <div className="relative bg-white rounded-2xl shadow-xl border border-corporate-teal/10 overflow-hidden">
                <div className="aspect-w-16 aspect-h-9 w-full">
                  <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
                    alt="Developers Collaborating"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-corporate-blue/10 flex items-center justify-center mr-3">
                        <Users className="h-5 w-5 text-corporate-blue" />
                      </div>
                      <div>
                        <h3 className="font-bold text-corporate-blue">
                          Yetenek Ağımız
                        </h3>
                        <p className="text-sm text-gray-500">
                          5,000+ yazılımcı ve tasarımcı
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="flex -space-x-2">
                        {["alex", "sarah", "michael", "emily"].map(
                          (seed, i) => (
                            <div
                              key={i}
                              className="w-8 h-8 rounded-full border-2 border-white overflow-hidden"
                            >
                              <img
                                src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${seed}`}
                                alt="Developer"
                                className="w-full h-full object-cover"
                              />
                            </div>
                          ),
                        )}
                      </div>
                      <span className="ml-2 text-sm text-gray-500">+4996</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {[
                      "Frontend",
                      "Backend",
                      "UI/UX",
                      "Mobile",
                      "Full Stack",
                    ].map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-corporate-cream/50 text-xs font-medium text-corporate-blue rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-corporate-teal fill-corporate-teal" />
                      <span className="ml-1 text-sm font-medium">4.9/5</span>
                      <span className="ml-1 text-xs text-gray-500">
                        (1000+ değerlendirme)
                      </span>
                    </div>
                    <Button
                      variant="link"
                      className="text-corporate-blue p-0 h-auto text-sm flex items-center"
                    >
                      Başarı Hikayeleri{" "}
                      <ChevronRight className="h-3 w-3 ml-1" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 bg-gradient-to-br from-corporate-blue/5 to-corporate-cream/30 relative overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute -top-[10%] -right-[5%] w-[30%] h-[30%] rounded-full bg-gradient-to-br from-corporate-teal/10 to-corporate-peach/10 blur-3xl" />
        <div className="absolute -bottom-[10%] -left-[5%] w-[30%] h-[30%] rounded-full bg-gradient-to-tr from-corporate-cream/10 to-corporate-teal/10 blur-3xl" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1.5 mb-4 rounded-full bg-corporate-blue/10 border border-corporate-blue/20">
              <Workflow className="h-4 w-4 text-corporate-blue mr-2" />
              <span className="text-xs font-medium text-corporate-blue">
                Nasıl Çalışır?
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-corporate-blue">
              Hellospace'e Katılma Süreci
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Platformumuza katılmak ve global projelerde yer almak için
              izlemeniz gereken basit adımlar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-corporate-teal/10 hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px] relative">
              <div className="absolute -top-3 -right-3 w-8 h-8 bg-corporate-teal rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                1
              </div>
              <div className="w-12 h-12 bg-corporate-teal/10 rounded-full flex items-center justify-center mb-4">
                <FileCode className="h-6 w-6 text-corporate-teal" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-corporate-blue">
                Başvuru Yap
              </h3>
              <p className="text-gray-600">
                Platformumuza kaydolun ve yeteneklerinizi, deneyiminizi ve
                tercihlerinizi içeren profilinizi oluşturun.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-corporate-peach/10 hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px] relative">
              <div className="absolute -top-3 -right-3 w-8 h-8 bg-corporate-peach rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                2
              </div>
              <div className="w-12 h-12 bg-corporate-peach/10 rounded-full flex items-center justify-center mb-4">
                <Code className="h-6 w-6 text-corporate-peach" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-corporate-blue">
                Yetenek Değerlendirmesi
              </h3>
              <p className="text-gray-600">
                Teknik becerilerinizi ve problem çözme yeteneklerinizi
                değerlendiren online testleri tamamlayın.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-corporate-blue/10 hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px] relative">
              <div className="absolute -top-3 -right-3 w-8 h-8 bg-corporate-blue rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                3
              </div>
              <div className="w-12 h-12 bg-corporate-blue/10 rounded-full flex items-center justify-center mb-4">
                <Headphones className="h-6 w-6 text-corporate-blue" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-corporate-blue">
                Görüşme
              </h3>
              <p className="text-gray-600">
                Ekibimizle online bir görüşme yaparak deneyimlerinizi,
                beklentilerinizi ve çalışma tarzınızı paylaşın.
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-corporate-teal/10 hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px] relative">
              <div className="absolute -top-3 -right-3 w-8 h-8 bg-corporate-teal rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                4
              </div>
              <div className="w-12 h-12 bg-corporate-teal/10 rounded-full flex items-center justify-center mb-4">
                <Rocket className="h-6 w-6 text-corporate-teal" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-corporate-blue">
                Proje Eşleştirme
              </h3>
              <p className="text-gray-600">
                Becerilerinize ve tercihlerinize uygun projelerle eşleşin ve
                global müşterilerle çalışmaya başlayın.
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Button className="bg-gradient-to-r from-corporate-blue to-corporate-blue/80 hover:from-corporate-blue/90 hover:to-corporate-blue/70 text-white px-8 py-3 h-auto text-lg font-medium rounded-full shadow-lg shadow-corporate-blue/20 group">
              <span className="flex items-center">
                Hemen Başvur
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1.5 mb-4 rounded-full bg-corporate-peach/10 border border-corporate-peach/20">
              <Gem className="h-4 w-4 text-corporate-peach mr-2" />
              <span className="text-xs font-medium text-corporate-blue">
                Avantajlar
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-corporate-blue">
              Hellospace Yazılımcı ve Tasarımcı Avantajları
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Platformumuzda yer alarak elde edeceğiniz benzersiz fırsatlar ve
              avantajlar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-corporate-teal/10 hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]">
              <div className="w-12 h-12 bg-corporate-teal/10 rounded-full flex items-center justify-center mb-4">
                <DollarSign className="h-6 w-6 text-corporate-teal" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-corporate-blue">
                Rekabetçi Ücretler
              </h3>
              <p className="text-gray-600 mb-4">
                Global piyasa standartlarında, yeteneklerinizin değerini
                yansıtan ücretler kazanın. Saatlik veya proje bazlı ödeme
                seçenekleri sunuyoruz.
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Dolar Bazlı Ödeme",
                  "Zamanında Ödeme",
                  "Şeffaf Ücretlendirme",
                ].map((feature, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-corporate-cream/50 text-xs font-medium text-corporate-blue rounded-full"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>

            {/* Benefit 2 */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-corporate-peach/10 hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]">
              <div className="w-12 h-12 bg-corporate-peach/10 rounded-full flex items-center justify-center mb-4">
                <Calendar className="h-6 w-6 text-corporate-peach" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-corporate-blue">
                Esnek Çalışma
              </h3>
              <p className="text-gray-600 mb-4">
                Kendi programınızı oluşturun, istediğiniz yerden çalışın. Tam
                zamanlı, yarı zamanlı veya proje bazlı çalışma seçenekleri
                arasından size uygun olanı seçin.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Uzaktan Çalışma", "Esnek Saatler", "İş-Yaşam Dengesi"].map(
                  (feature, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-corporate-cream/50 text-xs font-medium text-corporate-blue rounded-full"
                    >
                      {feature}
                    </span>
                  ),
                )}
              </div>
            </div>

            {/* Benefit 3 */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-corporate-blue/10 hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]">
              <div className="w-12 h-12 bg-corporate-blue/10 rounded-full flex items-center justify-center mb-4">
                <Rocket className="h-6 w-6 text-corporate-blue" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-corporate-blue">
                Kariyer Gelişimi
              </h3>
              <p className="text-gray-600 mb-4">
                Çeşitli projelerle deneyim kazanın, yeni teknolojiler öğrenin ve
                global bir ağın parçası olun. Sürekli öğrenme ve gelişim
                fırsatları sunuyoruz.
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Mentorluk",
                  "Eğitim Kaynakları",
                  "Sertifikasyon Desteği",
                ].map((feature, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-corporate-cream/50 text-xs font-medium text-corporate-blue rounded-full"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>

            {/* Benefit 4 */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-corporate-teal/10 hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]">
              <div className="w-12 h-12 bg-corporate-teal/10 rounded-full flex items-center justify-center mb-4">
                <Globe className="h-6 w-6 text-corporate-teal" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-corporate-blue">
                Global Projeler
              </h3>
              <p className="text-gray-600 mb-4">
                Dünyanın dört bir yanından prestijli şirketlerle çalışma fırsatı
                yakalayın. Farklı sektörlerden çeşitli projelerle deneyiminizi
                zenginleştirin.
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Uluslararası Müşteriler",
                  "Çeşitli Sektörler",
                  "Yenilikçi Projeler",
                ].map((feature, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-corporate-cream/50 text-xs font-medium text-corporate-blue rounded-full"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>

            {/* Benefit 5 */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-corporate-peach/10 hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]">
              <div className="w-12 h-12 bg-corporate-peach/10 rounded-full flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-corporate-peach" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-corporate-blue">
                Topluluk Desteği
              </h3>
              <p className="text-gray-600 mb-4">
                Benzer düşünen profesyonellerden oluşan global bir topluluğa
                katılın. Bilgi paylaşımı, networking ve işbirliği fırsatlarından
                yararlanın.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Networking", "Bilgi Paylaşımı", "Etkinlikler"].map(
                  (feature, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-corporate-cream/50 text-xs font-medium text-corporate-blue rounded-full"
                    >
                      {feature}
                    </span>
                  ),
                )}
              </div>
            </div>

            {/* Benefit 6 */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-corporate-blue/10 hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]">
              <div className="w-12 h-12 bg-corporate-blue/10 rounded-full flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-corporate-blue" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-corporate-blue">
                İş Güvencesi
              </h3>
              <p className="text-gray-600 mb-4">
                Düzenli proje akışı, sözleşme güvencesi ve zamanında ödemelerle
                güvenli bir çalışma ortamı sağlıyoruz. Uzun vadeli kariyer
                planlamanızı destekliyoruz.
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Sözleşme Güvencesi",
                  "Düzenli Projeler",
                  "Hukuki Destek",
                ].map((feature, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-corporate-cream/50 text-xs font-medium text-corporate-blue rounded-full"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 px-4 bg-gradient-to-br from-corporate-blue/5 to-corporate-cream/30 relative overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute -top-[10%] -right-[5%] w-[30%] h-[30%] rounded-full bg-gradient-to-br from-corporate-teal/10 to-corporate-peach/10 blur-3xl" />
        <div className="absolute -bottom-[10%] -left-[5%] w-[30%] h-[30%] rounded-full bg-gradient-to-tr from-corporate-cream/10 to-corporate-teal/10 blur-3xl" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
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
            {/* Success Story 1 */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-corporate-teal/10 hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]">
              <div className="flex items-center mb-4">
                <div className="w-14 h-14 rounded-full overflow-hidden mr-4 border-2 border-corporate-teal/20">
                  <img
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=mert"
                    alt="Developer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-corporate-blue">Mert Yılmaz</h3>
                  <p className="text-sm text-gray-500">
                    Senior Frontend Developer
                  </p>
                </div>
              </div>
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="h-4 w-4 text-corporate-teal fill-corporate-teal"
                  />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Hellospace sayesinde dünya çapında projelerle çalışma fırsatı
                buldum. Esnek çalışma saatleri ve rekabetçi ücretler kariyerimde
                büyük bir sıçrama yapmamı sağladı. Artık istediğim yerden
                çalışabiliyorum."
              </p>
              <div className="flex flex-wrap gap-2">
                {["React", "TypeScript", "Node.js"].map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-corporate-cream/50 text-xs font-medium text-corporate-blue rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Success Story 2 */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-corporate-peach/10 hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]">
              <div className="flex items-center mb-4">
                <div className="w-14 h-14 rounded-full overflow-hidden mr-4 border-2 border-corporate-peach/20">
                  <img
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=ayse"
                    alt="Designer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-corporate-blue">Ayşe Demir</h3>
                  <p className="text-sm text-gray-500">UI/UX Designer</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="h-4 w-4 text-corporate-peach fill-corporate-peach"
                  />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "Tasarımcı olarak Hellospace'te çalışmak, yaratıcılığımı farklı
                projelerle geliştirmemi sağladı. Platform üzerinden edindiğim
                bağlantılar ve aldığım geri bildirimler sayesinde tasarım
                becerilerimi sürekli geliştirebiliyorum."
              </p>
              <div className="flex flex-wrap gap-2">
                {["Figma", "UI Design", "Design Systems"].map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-corporate-cream/50 text-xs font-medium text-corporate-blue rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Success Story 3 */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-corporate-blue/10 hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]">
              <div className="flex items-center mb-4">
                <div className="w-14 h-14 rounded-full overflow-hidden mr-4 border-2 border-corporate-blue/20">
                  <img
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=can"
                    alt="Developer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-corporate-blue">Can Özkan</h3>
                  <p className="text-sm text-gray-500">Full Stack Developer</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="h-4 w-4 text-corporate-blue fill-corporate-blue"
                  />
                ))}
              </div>
              <p className="text-gray-600 mb-4">
                "İki yıldır Hellospace üzerinden çalışıyorum ve bu süreçte hem
                teknik becerilerimi geliştirdim hem de finansal özgürlüğümü
                kazandım. Platform, proje bulma ve müşteri iletişimi konusundaki
                tüm endişelerimi ortadan kaldırdı."
              </p>
              <div className="flex flex-wrap gap-2">
                {["Python", "Django", "React", "PostgreSQL"].map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-corporate-cream/50 text-xs font-medium text-corporate-blue rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button className="bg-gradient-to-r from-corporate-teal to-corporate-teal/80 hover:from-corporate-teal/90 hover:to-corporate-teal/70 text-white px-8 py-3 h-auto text-lg font-medium rounded-full shadow-lg shadow-corporate-teal/20 group">
              <span className="flex items-center">
                Tüm Başarı Hikayeleri
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1.5 mb-4 rounded-full bg-corporate-blue/10 border border-corporate-blue/20">
              <Puzzle className="h-4 w-4 text-corporate-blue mr-2" />
              <span className="text-xs font-medium text-corporate-blue">
                Sıkça Sorulan Sorular
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-corporate-blue">
              Merak Edilenler
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Hellospace'e katılmak isteyen yazılımcı ve tasarımcıların en çok
              merak ettiği sorular.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* FAQ Item 1 */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-corporate-teal/10 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-corporate-teal/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Milestone className="h-5 w-5 text-corporate-teal" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2 text-corporate-blue">
                    Hellospace'e katılmak için hangi niteliklere sahip
                    olmalıyım?
                  </h3>
                  <p className="text-gray-600">
                    Alanınızda en az 2 yıllık profesyonel deneyime sahip
                    olmanız, İngilizce iletişim kurabilmeniz ve uzaktan çalışma
                    disiplinine sahip olmanız gerekmektedir. Teknik
                    becerilerinizi değerlendiren testleri başarıyla tamamlamanız
                    da önemlidir.
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ Item 2 */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-corporate-peach/10 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-corporate-peach/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <DollarSign className="h-5 w-5 text-corporate-peach" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2 text-corporate-blue">
                    Ücretlendirme nasıl yapılıyor?
                  </h3>
                  <p className="text-gray-600">
                    Ücretler, uzmanlık alanınıza, deneyiminize ve projenin
                    kapsamına göre belirlenir. Saatlik veya proje bazlı ödeme
                    seçenekleri sunuyoruz. Ödemeler, tercih ettiğiniz para
                    birimi üzerinden ve düzenli olarak yapılmaktadır.
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ Item 3 */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-corporate-blue/10 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-corporate-blue/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Calendar className="h-5 w-5 text-corporate-blue" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2 text-corporate-blue">
                    Ne kadar süre çalışmam gerekiyor?
                  </h3>
                  <p className="text-gray-600">
                    Çalışma sürenizi kendiniz belirleyebilirsiniz. Tam zamanlı,
                    yarı zamanlı veya proje bazlı çalışma seçenekleri sunuyoruz.
                    Haftada minimum 10 saat ayırabilmeniz, projelerin
                    sürekliliği açısından önerilmektedir.
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ Item 4 */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-corporate-teal/10 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-corporate-teal/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Glasses className="h-5 w-5 text-corporate-teal" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2 text-corporate-blue">
                    Başvuru süreci ne kadar sürüyor?
                  </h3>
                  <p className="text-gray-600">
                    Başvuru sürecimiz genellikle 1-2 hafta içinde
                    tamamlanmaktadır. Bu süre, başvurunuzun incelenmesi, teknik
                    değerlendirme ve görüşme aşamalarını kapsamaktadır. Başarılı
                    olmanız durumunda, hemen proje eşleştirme sürecine
                    başlayabiliriz.
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ Item 5 */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-corporate-peach/10 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-corporate-peach/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Globe className="h-5 w-5 text-corporate-peach" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2 text-corporate-blue">
                    Hangi ülkelerden başvuru yapabilirim?
                  </h3>
                  <p className="text-gray-600">
                    Hellospace global bir platform olduğu için dünyanın her
                    yerinden başvuru kabul ediyoruz. İnternet bağlantınızın
                    olduğu her yerden çalışabilirsiniz. Farklı zaman
                    dilimlerinde çalışma esnekliği sunuyoruz.
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ Item 6 */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-corporate-blue/10 hover:shadow-lg transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-corporate-blue/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <LightbulbIcon className="h-5 w-5 text-corporate-blue" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2 text-corporate-blue">
                    Ne tür projelerle çalışacağım?
                  </h3>
                  <p className="text-gray-600">
                    Platformumuzda startup'lardan kurumsal şirketlere kadar
                    çeşitli müşteriler için web, mobil, e-ticaret, SaaS ve
                    kurumsal yazılım projeleri bulunmaktadır. Becerilerinize ve
                    tercihlerinize en uygun projelerle eşleştirileceksiniz.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button className="bg-gradient-to-r from-corporate-blue to-corporate-blue/80 hover:from-corporate-blue/90 hover:to-corporate-blue/70 text-white px-8 py-3 h-auto text-lg font-medium rounded-full shadow-lg shadow-corporate-blue/20 group">
              <span className="flex items-center">
                Daha Fazla Soru
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-corporate-blue via-corporate-blue/90 to-corporate-blue/80 text-white relative overflow-hidden">
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
                  Kariyerinizi Dönüştürün
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Yeteneklerinizi{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-corporate-peach to-corporate-teal">
                  Global Arenaya
                </span>{" "}
                Taşıyın
              </h2>
              <p className="text-white/90 mb-8 text-lg leading-relaxed">
                Hellospace ile dünyanın her yerinden projelerle çalışın, esnek
                çalışma saatlerinin keyfini çıkarın ve kariyerinizi kendi
                şartlarınızda yönetin. Hemen başvurun ve global yetenek ağımıza
                katılın.
              </p>
              <div className="flex flex-col sm:flex-row gap-5 mb-8">
                <Button className="bg-gradient-to-r from-corporate-teal to-corporate-teal/80 hover:from-corporate-teal/90 hover:to-corporate-teal/70 text-white px-10 py-4 h-auto text-lg font-semibold rounded-full shadow-xl shadow-corporate-teal/30 transform transition-all duration-300 hover:scale-105 group">
                  <span className="flex items-center">
                    Hemen Başvur
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
                <Button
                  variant="outline"
                  className="border-white/30 hover:bg-white/10 px-8 py-4 h-auto text-lg font-medium rounded-full backdrop-blur-sm hover:border-white/50 transition-all duration-300 bg-corporate-blue/30"
                >
                  <span className="text-white">Daha Fazla Bilgi</span>
                </Button>
              </div>
              <div className="flex items-center space-x-6">
                <div className="flex -space-x-3">
                  {["mert", "ayse", "can", "zeynep"].map((seed, i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full border-2 border-corporate-blue overflow-hidden"
                    >
                      <img
                        src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${seed}`}
                        alt="Developer"
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
                    5,000+ yazılımcı ve tasarımcı
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
                    <h3 className="text-xl font-bold">Başvuru Formu</h3>
                    <p className="text-corporate-cream/70 text-sm">
                      Birkaç adımda başvurunuzu tamamlayın
                    </p>
                  </div>
                </div>

                <div className="space-y-5">
                  <div className="flex p-4 rounded-xl hover:bg-white/5 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4 flex-shrink-0">
                      <Code className="h-5 w-5 text-corporate-teal" />
                    </div>
                    <div>
                      <h4 className="font-medium">Uzmanlık Alanınız</h4>
                      <p className="text-sm text-corporate-cream/70">
                        Frontend, Backend, UI/UX, Mobile...
                      </p>
                    </div>
                  </div>
                  <div className="flex p-4 rounded-xl hover:bg-white/5 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4 flex-shrink-0">
                      <Briefcase className="h-5 w-5 text-corporate-peach" />
                    </div>
                    <div>
                      <h4 className="font-medium">Deneyim Seviyeniz</h4>
                      <p className="text-sm text-corporate-cream/70">
                        Junior, Mid-level, Senior...
                      </p>
                    </div>
                  </div>
                  <div className="flex p-4 rounded-xl hover:bg-white/5 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4 flex-shrink-0">
                      <Calendar className="h-5 w-5 text-corporate-cream" />
                    </div>
                    <div>
                      <h4 className="font-medium">Çalışma Tercihiniz</h4>
                      <p className="text-sm text-corporate-cream/70">
                        Tam zamanlı, yarı zamanlı, proje bazlı...
                      </p>
                    </div>
                  </div>
                </div>

                <Button className="w-full mt-6 bg-gradient-to-r from-corporate-peach/80 to-corporate-peach/60 hover:from-corporate-peach hover:to-corporate-peach/80 text-white font-medium py-3 rounded-lg shadow-lg shadow-corporate-peach/20">
                  Başvuru Formunu Doldur
                </Button>
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

export default ApplyDeveloper;
