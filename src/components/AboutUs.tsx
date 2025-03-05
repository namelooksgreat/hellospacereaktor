import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Button } from "./ui/button";
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
} from "lucide-react";

const AboutUs = () => {
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
            <Users className="h-4 w-4 text-corporate-peach mr-2" />
            <span className="text-xs font-medium text-corporate-cream">
              Hakkımızda
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
            Yazılım Dünyasında Köprü Kuruyoruz
          </h1>
          <p className="text-xl text-corporate-cream/90 mb-8 max-w-3xl mx-auto">
            Hellospace, yetenekli yazılımcılar ve tasarımcılar ile işletmeleri
            buluşturan, yenilikçi çözümler sunan bir teknoloji platformudur.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
            <Button
              size="lg"
              className="text-base font-semibold px-8 py-6 h-auto bg-gradient-to-r from-corporate-teal to-corporate-teal/80 hover:from-corporate-teal/90 hover:to-corporate-teal/70 text-white border-0 shadow-lg shadow-corporate-teal/20 relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center">
                Yeteneklerimizi Keşfedin{" "}
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
                Ekibimize Katılın
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

      {/* Our Story Section */}
      <section className="py-20 px-4 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 mb-6 rounded-full bg-corporate-teal/10 border border-corporate-teal/20 shadow-sm">
                <Rocket className="h-5 w-5 text-corporate-teal mr-2" />
                <span className="text-sm font-medium text-corporate-blue">
                  Hikayemiz
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-corporate-blue">
                Teknoloji ve Yetenek Arasında
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-corporate-blue to-corporate-teal">
                  {" "}
                  Mükemmel Uyum
                </span>
              </h2>
              <p className="text-gray-600 mb-6 text-lg">
                2018 yılında kurulan Hellospace, yazılım dünyasındaki yetenek
                açığını kapatmak ve işletmelere en uygun yazılımcı ve
                tasarımcıları bulmalarında yardımcı olmak amacıyla yola çıktı.
              </p>
              <p className="text-gray-600 mb-8">
                Bugün, 150'den fazla ülkede 5000+ yazılımcı ve tasarımcıyı
                platformumuzda buluşturarak, işletmelerin dijital dönüşüm
                yolculuklarında yanlarında oluyoruz. Yapay zeka destekli
                eşleştirme sistemimiz, her projeye en uygun yeteneği bulmanızı
                sağlıyor.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <div className="bg-corporate-teal/10 p-2 rounded-full">
                    <CheckCircle className="h-5 w-5 text-corporate-teal" />
                  </div>
                  <div>
                    <h3 className="font-medium text-corporate-blue">
                      Titiz Seçim Süreci
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Sadece en iyi %1'lik dilim
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-corporate-peach/10 p-2 rounded-full">
                    <Shield className="h-5 w-5 text-corporate-peach" />
                  </div>
                  <div>
                    <h3 className="font-medium text-corporate-blue">
                      Güvenilir Ortaklık
                    </h3>
                    <p className="text-gray-600 text-sm">500+ başarılı proje</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-corporate-blue/10 p-2 rounded-full">
                    <Globe className="h-5 w-5 text-corporate-blue" />
                  </div>
                  <div>
                    <h3 className="font-medium text-corporate-blue">
                      Global Erişim
                    </h3>
                    <p className="text-gray-600 text-sm">150+ ülkede yetenek</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-corporate-cream/20 p-2 rounded-full">
                    <Clock className="h-5 w-5 text-corporate-blue" />
                  </div>
                  <div>
                    <h3 className="font-medium text-corporate-blue">
                      Hızlı Eşleşme
                    </h3>
                    <p className="text-gray-600 text-sm">
                      48 saat içinde başlangıç
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
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="Hellospace Team"
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
                          Ekibimiz
                        </h3>
                        <p className="text-sm text-gray-500">
                          Tutkulu teknoloji uzmanları
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
                                alt="Team Member"
                                className="w-full h-full object-cover"
                              />
                            </div>
                          ),
                        )}
                      </div>
                      <span className="ml-2 text-sm text-gray-500">+25</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {[
                      "Yazılım",
                      "Tasarım",
                      "Proje Yönetimi",
                      "Yapay Zeka",
                      "Veri Bilimi",
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
                        (500+ değerlendirme)
                      </span>
                    </div>
                    <Button
                      variant="link"
                      className="text-corporate-blue p-0 h-auto text-sm flex items-center"
                    >
                      Ekibimizi tanıyın{" "}
                      <ChevronRight className="h-3 w-3 ml-1" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission & Values */}
      <section className="py-20 px-4 bg-gradient-to-br from-corporate-blue/5 to-corporate-cream/30 relative overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute -top-[10%] -right-[5%] w-[30%] h-[30%] rounded-full bg-gradient-to-br from-corporate-teal/10 to-corporate-peach/10 blur-3xl" />
        <div className="absolute -bottom-[10%] -left-[5%] w-[30%] h-[30%] rounded-full bg-gradient-to-tr from-corporate-cream/10 to-corporate-teal/10 blur-3xl" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1.5 mb-4 rounded-full bg-corporate-blue/10 border border-corporate-blue/20">
              <Heart className="h-4 w-4 text-corporate-blue mr-2" />
              <span className="text-xs font-medium text-corporate-blue">
                Misyonumuz & Değerlerimiz
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-corporate-blue">
              Teknoloji ile Değer Yaratıyoruz
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Hellospace olarak, teknoloji dünyasında fark yaratacak bağlantılar
              kurarak hem işletmelerin hem de yeteneklerin potansiyellerini en
              üst düzeye çıkarmayı hedefliyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-corporate-teal/10 hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]">
              <div className="w-12 h-12 bg-corporate-teal/10 rounded-full flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-corporate-teal" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-corporate-blue">
                Misyonumuz
              </h3>
              <p className="text-gray-600">
                İşletmelere en uygun yazılım ve tasarım yeteneklerini sunarak
                dijital dönüşüm yolculuklarını hızlandırmak ve yazılımcılara
                esnek, değerli çalışma fırsatları sağlamak.
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-corporate-peach/10 hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]">
              <div className="w-12 h-12 bg-corporate-peach/10 rounded-full flex items-center justify-center mb-4">
                <Lightbulb className="h-6 w-6 text-corporate-peach" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-corporate-blue">
                Vizyonumuz
              </h3>
              <p className="text-gray-600">
                Teknoloji yetenek ekosistemine öncülük ederek, global ölçekte en
                güvenilir ve etkili yazılım geliştirme platformu olmak ve
                dijital dünyanın geleceğini şekillendirmek.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-corporate-blue/10 hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]">
              <div className="w-12 h-12 bg-corporate-blue/10 rounded-full flex items-center justify-center mb-4">
                <Star className="h-6 w-6 text-corporate-blue" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-corporate-blue">
                Değerlerimiz
              </h3>
              <p className="text-gray-600">
                Kalite, şeffaflık, yenilikçilik ve güven temel değerlerimizdir.
                Her projede mükemmelliği hedefler, açık iletişimi destekler ve
                sürekli gelişimi teşvik ederiz.
              </p>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Stat 1 */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-corporate-teal/10 text-center">
              <div className="w-16 h-16 bg-corporate-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-corporate-teal" />
              </div>
              <div className="text-3xl font-bold text-corporate-blue mb-1">
                5,000+
              </div>
              <p className="text-gray-600">Yetenekli Yazılımcı</p>
            </div>

            {/* Stat 2 */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-corporate-peach/10 text-center">
              <div className="w-16 h-16 bg-corporate-peach/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="h-8 w-8 text-corporate-peach" />
              </div>
              <div className="text-3xl font-bold text-corporate-blue mb-1">
                500+
              </div>
              <p className="text-gray-600">Başarılı Proje</p>
            </div>

            {/* Stat 3 */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-corporate-blue/10 text-center">
              <div className="w-16 h-16 bg-corporate-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-corporate-blue" />
              </div>
              <div className="text-3xl font-bold text-corporate-blue mb-1">
                150+
              </div>
              <p className="text-gray-600">Ülke Genelinde</p>
            </div>

            {/* Stat 4 */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-corporate-teal/10 text-center">
              <div className="w-16 h-16 bg-corporate-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-corporate-teal" />
              </div>
              <div className="text-3xl font-bold text-corporate-blue mb-1">
                98%
              </div>
              <p className="text-gray-600">Müşteri Memnuniyeti</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Expertise */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1.5 mb-4 rounded-full bg-corporate-peach/10 border border-corporate-peach/20">
              <Code className="h-4 w-4 text-corporate-peach mr-2" />
              <span className="text-xs font-medium text-corporate-blue">
                Uzmanlık Alanlarımız
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-corporate-blue">
              Teknoloji Çözümlerimiz
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              İşletmenizin ihtiyaçlarına özel yazılım ve tasarım çözümleri
              sunuyoruz. Deneyimli ekibimiz, en son teknolojileri kullanarak
              işletmenizi bir adım öne taşır.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Expertise 1 */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-corporate-teal/10 hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]">
              <div className="w-12 h-12 bg-corporate-teal/10 rounded-full flex items-center justify-center mb-4">
                <Globe className="h-6 w-6 text-corporate-teal" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-corporate-blue">
                Web Geliştirme
              </h3>
              <p className="text-gray-600 mb-4">
                Responsive, SEO dostu ve kullanıcı odaklı web siteleri ve web
                uygulamaları geliştiriyoruz. React, Vue.js, Angular gibi modern
                frontend teknolojileri kullanıyoruz.
              </p>
              <div className="flex flex-wrap gap-2">
                {["React", "Vue.js", "Node.js", "Next.js"].map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-corporate-cream/50 text-xs font-medium text-corporate-blue rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Expertise 2 */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-corporate-peach/10 hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]">
              <div className="w-12 h-12 bg-corporate-peach/10 rounded-full flex items-center justify-center mb-4">
                <Smartphone className="h-6 w-6 text-corporate-peach" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-corporate-blue">
                Mobil Uygulama Geliştirme
              </h3>
              <p className="text-gray-600 mb-4">
                iOS ve Android platformları için native ve cross-platform mobil
                uygulamalar geliştiriyoruz. Kullanıcı deneyimini ön planda
                tutarak, performanslı uygulamalar sunuyoruz.
              </p>
              <div className="flex flex-wrap gap-2">
                {["React Native", "Flutter", "Swift", "Kotlin"].map(
                  (tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-corporate-cream/50 text-xs font-medium text-corporate-blue rounded-full"
                    >
                      {tech}
                    </span>
                  ),
                )}
              </div>
            </div>

            {/* Expertise 3 */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-corporate-blue/10 hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]">
              <div className="w-12 h-12 bg-corporate-blue/10 rounded-full flex items-center justify-center mb-4">
                <PenTool className="h-6 w-6 text-corporate-blue" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-corporate-blue">
                UI/UX Tasarım
              </h3>
              <p className="text-gray-600 mb-4">
                Kullanıcı odaklı, estetik ve işlevsel arayüz tasarımları
                oluşturuyoruz. Kullanıcı deneyimini en üst düzeye çıkaran, marka
                kimliğinizi yansıtan tasarımlar sunuyoruz.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Figma", "Adobe XD", "Sketch", "Prototyping"].map(
                  (tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-corporate-cream/50 text-xs font-medium text-corporate-blue rounded-full"
                    >
                      {tech}
                    </span>
                  ),
                )}
              </div>
            </div>

            {/* Expertise 4 */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-corporate-teal/10 hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]">
              <div className="w-12 h-12 bg-corporate-teal/10 rounded-full flex items-center justify-center mb-4">
                <Laptop className="h-6 w-6 text-corporate-teal" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-corporate-blue">
                Özel Yazılım Çözümleri
              </h3>
              <p className="text-gray-600 mb-4">
                İşletmenizin ihtiyaçlarına özel yazılım çözümleri
                geliştiriyoruz. ERP, CRM, e-ticaret sistemleri ve daha fazlası
                için ölçeklenebilir, güvenli çözümler sunuyoruz.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Python", "Java", "C#", ".NET"].map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-corporate-cream/50 text-xs font-medium text-corporate-blue rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Expertise 5 */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-corporate-peach/10 hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]">
              <div className="w-12 h-12 bg-corporate-peach/10 rounded-full flex items-center justify-center mb-4">
                <Code className="h-6 w-6 text-corporate-peach" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-corporate-blue">
                E-ticaret Çözümleri
              </h3>
              <p className="text-gray-600 mb-4">
                Yüksek dönüşüm oranlarına sahip, kullanıcı dostu e-ticaret
                platformları geliştiriyoruz. Shopify, WooCommerce ve özel
                e-ticaret çözümleri sunuyoruz.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Shopify", "WooCommerce", "Magento", "PrestaShop"].map(
                  (tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-corporate-cream/50 text-xs font-medium text-corporate-blue rounded-full"
                    >
                      {tech}
                    </span>
                  ),
                )}
              </div>
            </div>

            {/* Expertise 6 */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-corporate-blue/10 hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]">
              <div className="w-12 h-12 bg-corporate-blue/10 rounded-full flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-corporate-blue" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-corporate-blue">
                Yapay Zeka & Veri Bilimi
              </h3>
              <p className="text-gray-600 mb-4">
                Yapay zeka ve makine öğrenimi çözümleri ile işletmenizin
                verilerini anlamlı içgörülere dönüştürüyoruz. Veri analizi,
                tahminleme ve otomasyon çözümleri sunuyoruz.
              </p>
              <div className="flex flex-wrap gap-2">
                {["TensorFlow", "PyTorch", "NLP", "Computer Vision"].map(
                  (tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-corporate-cream/50 text-xs font-medium text-corporate-blue rounded-full"
                    >
                      {tech}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-corporate-blue/5 to-corporate-cream/30 relative overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute -top-[10%] -right-[5%] w-[30%] h-[30%] rounded-full bg-gradient-to-br from-corporate-teal/10 to-corporate-peach/10 blur-3xl" />
        <div className="absolute -bottom-[10%] -left-[5%] w-[30%] h-[30%] rounded-full bg-gradient-to-tr from-corporate-cream/10 to-corporate-teal/10 blur-3xl" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1.5 mb-4 rounded-full bg-corporate-teal/10 border border-corporate-teal/20">
              <Users className="h-4 w-4 text-corporate-teal mr-2" />
              <span className="text-xs font-medium text-corporate-blue">
                Ekibimiz
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-corporate-blue">
              Uzman Kadromuz
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Hellospace'in arkasında, teknoloji ve tasarım konusunda tutkulu,
              deneyimli bir ekip var. Her biri alanında uzman olan ekip
              üyelerimiz, en iyi çözümleri sunmak için çalışıyor.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white rounded-xl shadow-md border border-corporate-teal/10 overflow-hidden hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]">
              <div className="aspect-w-1 aspect-h-1 w-full">
                <img
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=alex"
                  alt="Team Member"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-corporate-blue mb-1">
                  Ahmet Yılmaz
                </h3>
                <p className="text-sm text-gray-500 mb-3">Kurucu & CEO</p>
                <p className="text-sm text-gray-600 mb-4">
                  10+ yıllık yazılım geliştirme ve teknoloji liderliği deneyimi
                  ile Hellospace'i kurdu.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Liderlik", "Strateji", "Yazılım"].map((skill, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-corporate-cream/50 text-xs font-medium text-corporate-blue rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white rounded-xl shadow-md border border-corporate-peach/10 overflow-hidden hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]">
              <div className="aspect-w-1 aspect-h-1 w-full">
                <img
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=sarah"
                  alt="Team Member"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-corporate-blue mb-1">
                  Ayşe Kaya
                </h3>
                <p className="text-sm text-gray-500 mb-3">CTO</p>
                <p className="text-sm text-gray-600 mb-4">
                  Teknoloji vizyonu ve mühendislik liderliği ile platformumuzun
                  teknik altyapısını yönetiyor.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Mimari", "AI", "Ölçeklendirme"].map((skill, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-corporate-cream/50 text-xs font-medium text-corporate-blue rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white rounded-xl shadow-md border border-corporate-blue/10 overflow-hidden hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]">
              <div className="aspect-w-1 aspect-h-1 w-full">
                <img
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=michael"
                  alt="Team Member"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-corporate-blue mb-1">
                  Mehmet Demir
                </h3>
                <p className="text-sm text-gray-500 mb-3">Tasarım Direktörü</p>
                <p className="text-sm text-gray-600 mb-4">
                  Kullanıcı deneyimi ve arayüz tasarımı konusundaki uzmanlığı
                  ile ürünlerimize hayat veriyor.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["UX/UI", "Marka", "Tasarım Sistemleri"].map((skill, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-corporate-cream/50 text-xs font-medium text-corporate-blue rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Team Member 4 */}
            <div className="bg-white rounded-xl shadow-md border border-corporate-teal/10 overflow-hidden hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]">
              <div className="aspect-w-1 aspect-h-1 w-full">
                <img
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=emily"
                  alt="Team Member"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-corporate-blue mb-1">
                  Zeynep Yıldız
                </h3>
                <p className="text-sm text-gray-500 mb-3">Yetenek Müdürü</p>
                <p className="text-sm text-gray-600 mb-4">
                  Platformumuzdaki yazılımcı ve tasarımcıların seçimi ve
                  eşleştirilmesinden sorumlu.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["İK", "Yetenek", "Eşleştirme"].map((skill, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-corporate-cream/50 text-xs font-medium text-corporate-blue rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button className="bg-gradient-to-r from-corporate-blue to-corporate-blue/80 hover:from-corporate-blue/90 hover:to-corporate-blue/70 text-white px-8 py-3 h-auto text-lg font-medium rounded-full shadow-lg shadow-corporate-blue/20 group">
              <span className="flex items-center">
                Tüm Ekibi Görüntüle
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
                <MessageCircle className="h-5 w-5 text-corporate-peach mr-2" />
                <span className="text-sm font-medium text-corporate-cream">
                  Bizimle İletişime Geçin
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Projenizi{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-corporate-peach to-corporate-teal">
                  Hayata Geçirelim
                </span>
              </h2>
              <p className="text-white/90 mb-8 text-lg leading-relaxed">
                İster yazılım ve tasarım ihtiyaçlarınız için çözüm arıyor olun,
                ister yeteneklerinizi değerlendirmek için bir platform,
                Hellospace size uygun çözümler sunar.
              </p>
              <div className="flex flex-col sm:flex-row gap-5 mb-8">
                <Button className="bg-gradient-to-r from-corporate-teal to-corporate-teal/80 hover:from-corporate-teal/90 hover:to-corporate-teal/70 text-white px-10 py-4 h-auto text-lg font-semibold rounded-full shadow-xl shadow-corporate-teal/30 transform transition-all duration-300 hover:scale-105 group">
                  <span className="flex items-center">
                    Ücretsiz Danışmanlık Alın
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
                <Button
                  variant="outline"
                  className="border-white/30 hover:bg-white/10 px-8 py-4 h-auto text-lg font-medium rounded-full backdrop-blur-sm hover:border-white/50 transition-all duration-300 bg-corporate-blue/30"
                >
                  <span className="text-white">Yeteneklerimizi Keşfedin</span>
                </Button>
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
                  <p className="text-corporate-cream/80">500+ memnun müşteri</p>
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
                    <h3 className="text-xl font-bold">İletişim Bilgilerimiz</h3>
                    <p className="text-corporate-cream/70 text-sm">
                      Size yardımcı olmak için buradayız
                    </p>
                  </div>
                </div>

                <div className="space-y-5">
                  <div className="flex p-4 rounded-xl hover:bg-white/5 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4 flex-shrink-0">
                      <Mail className="h-5 w-5 text-corporate-teal" />
                    </div>
                    <div>
                      <h4 className="font-medium">E-posta</h4>
                      <p className="text-sm text-corporate-cream/70">
                        info@hellospace.com
                      </p>
                    </div>
                  </div>
                  <div className="flex p-4 rounded-xl hover:bg-white/5 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4 flex-shrink-0">
                      <Phone className="h-5 w-5 text-corporate-peach" />
                    </div>
                    <div>
                      <h4 className="font-medium">Telefon</h4>
                      <p className="text-sm text-corporate-cream/70">
                        +90 (212) 123 4567
                      </p>
                    </div>
                  </div>
                  <div className="flex p-4 rounded-xl hover:bg-white/5 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4 flex-shrink-0">
                      <MapPin className="h-5 w-5 text-corporate-cream" />
                    </div>
                    <div>
                      <h4 className="font-medium">Adres</h4>
                      <p className="text-sm text-corporate-cream/70">
                        Levent, İstanbul, Türkiye
                      </p>
                    </div>
                  </div>
                </div>

                <Button className="w-full mt-6 bg-gradient-to-r from-corporate-peach/80 to-corporate-peach/60 hover:from-corporate-peach hover:to-corporate-peach/80 text-white font-medium py-3 rounded-lg shadow-lg shadow-corporate-peach/20">
                  Bize Mesaj Gönderin
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

export default AboutUs;
