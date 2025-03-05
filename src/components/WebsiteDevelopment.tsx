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
  DollarSign,
  Calendar,
  Layers,
  Monitor,
  Layout,
  FileText,
  Image,
  ShoppingCart,
  Search,
  Settings,
  Database,
  Server,
  BarChart,
  LineChart,
  Palette,
  Cpu,
} from "lucide-react";

const WebsiteDevelopment = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <Header />

      {/* Hero Section - Corporate Focused */}
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

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Content - Value Proposition */}
            <div className="text-left">
              <div className="inline-flex items-center px-3 py-1.5 mb-6 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
                <Award className="h-4 w-4 text-corporate-peach mr-2" />
                <span className="text-xs font-medium text-corporate-cream">
                  Kurumsal Web Çözümleri
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
                Kurumsal Markanızı{" "}
                <span className="text-corporate-teal">Dijital Dünyada</span>{" "}
                Güçlendirin
              </h1>
              <p className="text-xl text-corporate-cream/90 mb-8 max-w-xl">
                Şirketinizin dijital dönüşümünü profesyonel web çözümlerimizle
                hızlandırın. Rekabette öne çıkmanızı sağlayacak, marka
                değerinizi artıracak kurumsal web siteleri geliştiriyoruz.
              </p>

              {/* Trust Indicators */}
              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center">
                  <div className="bg-white/10 p-2 rounded-full mr-3">
                    <CheckCircle className="h-5 w-5 text-corporate-teal" />
                  </div>
                  <div>
                    <p className="text-white font-medium">
                      500+ Kurumsal Müşteri
                    </p>
                    <p className="text-corporate-cream/70 text-sm">
                      Farklı sektörlerden
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-white/10 p-2 rounded-full mr-3">
                    <CheckCircle className="h-5 w-5 text-corporate-teal" />
                  </div>
                  <div>
                    <p className="text-white font-medium">
                      %98 Müşteri Memnuniyeti
                    </p>
                    <p className="text-corporate-cream/70 text-sm">
                      Uzun vadeli işbirlikleri
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="text-base font-semibold px-8 py-6 h-auto bg-gradient-to-r from-corporate-teal to-corporate-teal/80 hover:from-corporate-teal/90 hover:to-corporate-teal/70 text-white border-0 shadow-lg shadow-corporate-teal/20 relative overflow-hidden group"
                >
                  <span className="relative z-10 flex items-center">
                    Ücretsiz Keşif Görüşmesi{" "}
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
                    Kurumsal Portföyümüz
                    <div className="ml-2 relative">
                      <div className="absolute -inset-1 rounded-full bg-corporate-peach/20 animate-ping"></div>
                      <Briefcase className="h-5 w-5 text-corporate-peach animate-pulse" />
                    </div>
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-corporate-peach/0 via-white/10 to-corporate-peach/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
                </Button>
              </div>
            </div>

            {/* Right Content - Featured Clients & Stats */}
            <div className="relative mt-10 lg:mt-0">
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-corporate-teal/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                <h3 className="text-xl font-bold text-white mb-6">
                  Güvenilir Kurumsal Çözüm Ortağınız
                </h3>

                {/* Client Logos */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div
                      key={i}
                      className="bg-white/10 rounded-lg p-3 flex items-center justify-center h-16"
                    >
                      <div className="w-full h-full bg-white/20 rounded flex items-center justify-center">
                        <Briefcase className="h-6 w-6 text-white/70" />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 rounded-lg p-4">
                    <h4 className="text-3xl font-bold text-corporate-teal mb-1">
                      45%
                    </h4>
                    <p className="text-sm text-corporate-cream/80">
                      Ortalama Dönüşüm Artışı
                    </p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <h4 className="text-3xl font-bold text-corporate-teal mb-1">
                      3x
                    </h4>
                    <p className="text-sm text-corporate-cream/80">
                      Müşteri Etkileşimi
                    </p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <h4 className="text-3xl font-bold text-corporate-teal mb-1">
                      60%
                    </h4>
                    <p className="text-sm text-corporate-cream/80">
                      SEO Trafik Artışı
                    </p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <h4 className="text-3xl font-bold text-corporate-teal mb-1">
                      2x
                    </h4>
                    <p className="text-sm text-corporate-cream/80">
                      Satış Oranı
                    </p>
                  </div>
                </div>

                {/* Testimonial */}
                <div className="mt-8 bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-corporate-teal/30">
                        <img
                          src="https://api.dicebear.com/7.x/avataaars/svg?seed=ceo"
                          alt="CEO"
                          className="w-full h-full"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex mb-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className="h-4 w-4 text-corporate-teal fill-corporate-teal"
                          />
                        ))}
                      </div>
                      <p className="text-sm text-corporate-cream/90 italic mb-2">
                        "Hellospace ile çalışmak, dijital dönüşüm sürecimizi
                        hızlandırdı ve online satışlarımızı %120 artırdı."
                      </p>
                      <p className="text-xs text-corporate-cream/70">
                        Ahmet Yılmaz, XYZ Holding CEO
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1.5 mb-4 rounded-full bg-corporate-teal/10 border border-corporate-teal/20">
              <Rocket className="h-4 w-4 text-corporate-teal mr-2" />
              <span className="text-xs font-medium text-corporate-blue">
                Geliştirme Sürecimiz
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-corporate-blue">
              Web Sitesi Geliştirme Sürecimiz
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Şeffaf ve verimli bir süreç ile ihtiyaçlarınıza uygun web sitesi
              çözümleri sunuyoruz. Her aşamada sizinle iletişim halinde kalarak,
              beklentilerinizi karşılayan sonuçlar elde ediyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-corporate-teal/10 hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px] relative">
              <div className="absolute -top-3 -right-3 w-8 h-8 bg-corporate-teal rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                1
              </div>
              <div className="w-12 h-12 bg-corporate-teal/10 rounded-full flex items-center justify-center mb-4">
                <Search className="h-6 w-6 text-corporate-teal" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-corporate-blue">
                Keşif & Analiz
              </h3>
              <p className="text-gray-600">
                İhtiyaçlarınızı, hedef kitlenizi ve rekabet ortamınızı analiz
                ederek, projeniz için en uygun stratejiyi belirliyoruz.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-corporate-peach/10 hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px] relative">
              <div className="absolute -top-3 -right-3 w-8 h-8 bg-corporate-peach rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                2
              </div>
              <div className="w-12 h-12 bg-corporate-peach/10 rounded-full flex items-center justify-center mb-4">
                <PenTool className="h-6 w-6 text-corporate-peach" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-corporate-blue">
                Tasarım
              </h3>
              <p className="text-gray-600">
                Markanızı yansıtan, kullanıcı dostu ve modern tasarımlar
                oluşturuyoruz. Wireframe'ler ve prototiplerle vizyonunuzu
                somutlaştırıyoruz.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-corporate-blue/10 hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px] relative">
              <div className="absolute -top-3 -right-3 w-8 h-8 bg-corporate-blue rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                3
              </div>
              <div className="w-12 h-12 bg-corporate-blue/10 rounded-full flex items-center justify-center mb-4">
                <Code className="h-6 w-6 text-corporate-blue" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-corporate-blue">
                Geliştirme
              </h3>
              <p className="text-gray-600">
                Modern teknolojiler kullanarak, hızlı, güvenli ve ölçeklenebilir
                web siteleri geliştiriyoruz. Düzenli geri bildirimlerle süreci
                yönetiyoruz.
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
                Lansman & Destek
              </h3>
              <p className="text-gray-600">
                Web sitenizi yayına alıyor ve sürekli destek sağlıyoruz. SEO
                optimizasyonu, performans iyileştirmeleri ve güncellemelerle
                yanınızdayız.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-corporate-blue/5 to-corporate-cream/30 relative overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute -top-[10%] -right-[5%] w-[30%] h-[30%] rounded-full bg-gradient-to-br from-corporate-teal/10 to-corporate-peach/10 blur-3xl" />
        <div className="absolute -bottom-[10%] -left-[5%] w-[30%] h-[30%] rounded-full bg-gradient-to-tr from-corporate-cream/10 to-corporate-teal/10 blur-3xl" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1.5 mb-4 rounded-full bg-corporate-blue/10 border border-corporate-blue/20">
              <Layers className="h-4 w-4 text-corporate-blue mr-2" />
              <span className="text-xs font-medium text-corporate-blue">
                Web Sitesi Çözümlerimiz
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-corporate-blue">
              İhtiyacınıza Özel Web Sitesi Çözümleri
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Her işletmenin kendine özgü ihtiyaçları vardır. Biz, bu
              ihtiyaçlara uygun, özelleştirilmiş web sitesi çözümleri sunuyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-corporate-teal/10 hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]">
              <div className="w-12 h-12 bg-corporate-teal/10 rounded-full flex items-center justify-center mb-4">
                <Monitor className="h-6 w-6 text-corporate-teal" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-corporate-blue">
                Kurumsal Web Siteleri
              </h3>
              <p className="text-gray-600 mb-4">
                Profesyonel, marka kimliğinizi yansıtan ve potansiyel
                müşterilerinizi etkileyecek kurumsal web siteleri
                geliştiriyoruz.
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Responsive Tasarım",
                  "SEO Uyumlu",
                  "Hızlı Yükleme",
                  "İçerik Yönetimi",
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

            {/* Service 2 */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-corporate-peach/10 hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]">
              <div className="w-12 h-12 bg-corporate-peach/10 rounded-full flex items-center justify-center mb-4">
                <ShoppingCart className="h-6 w-6 text-corporate-peach" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-corporate-blue">
                E-ticaret Siteleri
              </h3>
              <p className="text-gray-600 mb-4">
                Satışlarınızı artıracak, kullanıcı dostu ve güvenli e-ticaret
                siteleri ile online mağazanızı hayata geçirin.
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Ödeme Entegrasyonu",
                  "Stok Yönetimi",
                  "Mobil Uyumlu",
                  "Analitik",
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

            {/* Service 3 */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-corporate-blue/10 hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]">
              <div className="w-12 h-12 bg-corporate-blue/10 rounded-full flex items-center justify-center mb-4">
                <Layout className="h-6 w-6 text-corporate-blue" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-corporate-blue">
                Landing Page'ler
              </h3>
              <p className="text-gray-600 mb-4">
                Yüksek dönüşüm oranlarına sahip, etkileyici landing page'ler ile
                kampanyalarınızın etkisini artırın.
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "A/B Testleri",
                  "Dönüşüm Odaklı",
                  "Hızlı Geliştirme",
                  "Analiz",
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

            {/* Service 4 */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-corporate-teal/10 hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]">
              <div className="w-12 h-12 bg-corporate-teal/10 rounded-full flex items-center justify-center mb-4">
                <FileText className="h-6 w-6 text-corporate-teal" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-corporate-blue">
                Blog & İçerik Siteleri
              </h3>
              <p className="text-gray-600 mb-4">
                SEO dostu, içerik odaklı blog ve haber siteleri ile hedef
                kitlenizle etkileşime geçin ve organik trafiğinizi artırın.
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "İçerik Yönetimi",
                  "SEO Optimizasyonu",
                  "Sosyal Paylaşım",
                  "Yorum Sistemi",
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

            {/* Service 5 */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-corporate-peach/10 hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]">
              <div className="w-12 h-12 bg-corporate-peach/10 rounded-full flex items-center justify-center mb-4">
                <Image className="h-6 w-6 text-corporate-peach" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-corporate-blue">
                Portfolyo Siteleri
              </h3>
              <p className="text-gray-600 mb-4">
                Yaratıcı çalışmalarınızı sergileyebileceğiniz, etkileyici
                portfolyo siteleri ile yeteneklerinizi ön plana çıkarın.
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Görsel Odaklı",
                  "Yaratıcı Tasarım",
                  "Proje Vitrini",
                  "İletişim Formları",
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

            {/* Service 6 */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-corporate-blue/10 hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]">
              <div className="w-12 h-12 bg-corporate-blue/10 rounded-full flex items-center justify-center mb-4">
                <Settings className="h-6 w-6 text-corporate-blue" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-corporate-blue">
                Özel Web Uygulamaları
              </h3>
              <p className="text-gray-600 mb-4">
                İşletmenizin özel ihtiyaçlarına yönelik, ölçeklenebilir ve
                güvenli web uygulamaları geliştiriyoruz.
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Özel Çözümler",
                  "API Entegrasyonu",
                  "Veritabanı",
                  "Kullanıcı Yönetimi",
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

      {/* Technologies Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1.5 mb-4 rounded-full bg-corporate-peach/10 border border-corporate-peach/20">
              <Code className="h-4 w-4 text-corporate-peach mr-2" />
              <span className="text-xs font-medium text-corporate-blue">
                Teknolojilerimiz
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-corporate-blue">
              Kullandığımız Modern Teknolojiler
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              En son teknolojileri kullanarak, hızlı, güvenli ve ölçeklenebilir
              web siteleri geliştiriyoruz. İşte projelerimizde kullandığımız
              bazı teknolojiler:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Frontend Technologies */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-corporate-teal/10 hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]">
              <div className="w-12 h-12 bg-corporate-teal/10 rounded-full flex items-center justify-center mb-4">
                <Monitor className="h-6 w-6 text-corporate-teal" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-corporate-blue">
                Frontend Teknolojileri
              </h3>
              <p className="text-gray-600 mb-4">
                Modern, hızlı ve kullanıcı dostu arayüzler için en güncel
                frontend teknolojilerini kullanıyoruz.
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  "React",
                  "Vue.js",
                  "Next.js",
                  "Tailwind CSS",
                  "TypeScript",
                  "HTML5/CSS3",
                ].map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-2 bg-corporate-cream/50 text-xs font-medium text-corporate-blue rounded-lg text-center"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Backend Technologies */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-corporate-peach/10 hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]">
              <div className="w-12 h-12 bg-corporate-peach/10 rounded-full flex items-center justify-center mb-4">
                <Server className="h-6 w-6 text-corporate-peach" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-corporate-blue">
                Backend Teknolojileri
              </h3>
              <p className="text-gray-600 mb-4">
                Güvenli, ölçeklenebilir ve performanslı backend sistemleri için
                güçlü teknolojiler kullanıyoruz.
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  "Node.js",
                  "Python",
                  "PHP",
                  "Java",
                  "GraphQL",
                  "RESTful API",
                ].map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-2 bg-corporate-cream/50 text-xs font-medium text-corporate-blue rounded-lg text-center"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Database & Infrastructure */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-corporate-blue/10 hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]">
              <div className="w-12 h-12 bg-corporate-blue/10 rounded-full flex items-center justify-center mb-4">
                <Database className="h-6 w-6 text-corporate-blue" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-corporate-blue">
                Veritabanı & Altyapı
              </h3>
              <p className="text-gray-600 mb-4">
                Veri güvenliği ve sistem performansı için güvenilir veritabanı
                ve altyapı çözümleri kullanıyoruz.
              </p>
              <div className="grid grid-cols-2 gap-2">
                {[
                  "MongoDB",
                  "MySQL",
                  "PostgreSQL",
                  "AWS",
                  "Firebase",
                  "Docker",
                ].map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-2 bg-corporate-cream/50 text-xs font-medium text-corporate-blue rounded-lg text-center"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-corporate-blue/5 to-corporate-cream/30 relative overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute -top-[10%] -right-[5%] w-[30%] h-[30%] rounded-full bg-gradient-to-br from-corporate-teal/10 to-corporate-peach/10 blur-3xl" />
        <div className="absolute -bottom-[10%] -left-[5%] w-[30%] h-[30%] rounded-full bg-gradient-to-tr from-corporate-cream/10 to-corporate-teal/10 blur-3xl" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1.5 mb-4 rounded-full bg-corporate-teal/10 border border-corporate-teal/20">
              <Briefcase className="h-4 w-4 text-corporate-teal mr-2" />
              <span className="text-xs font-medium text-corporate-blue">
                Başarı Hikayeleri
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-corporate-blue">
              Projelerimizden Örnekler
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Farklı sektörlerden müşterilerimiz için geliştirdiğimiz web sitesi
              projelerinden bazı örnekler:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Case Study 1 */}
            <div className="bg-white rounded-xl shadow-md border border-corporate-teal/10 overflow-hidden hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]">
              <div className="aspect-w-16 aspect-h-9 w-full">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80"
                  alt="E-commerce Website"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-corporate-teal/10 text-xs font-medium text-corporate-teal rounded-full">
                    E-ticaret
                  </span>
                  <span className="px-3 py-1 bg-corporate-cream/50 text-xs font-medium text-corporate-blue rounded-full">
                    Shopify
                  </span>
                </div>
                <h3 className="text-lg font-bold text-corporate-blue mb-2">
                  ModaVista E-ticaret Sitesi
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Moda perakendecisi için geliştirdiğimiz e-ticaret sitesi,
                  satışları %120 artırdı ve mobil dönüşüm oranlarını
                  iyileştirdi.
                </p>
                <Button
                  variant="link"
                  className="text-corporate-teal p-0 h-auto text-sm flex items-center"
                >
                  Vaka Çalışmasını İncele{" "}
                  <ChevronRight className="h-3 w-3 ml-1" />
                </Button>
              </div>
            </div>

            {/* Case Study 2 */}
            <div className="bg-white rounded-xl shadow-md border border-corporate-peach/10 overflow-hidden hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]">
              <div className="aspect-w-16 aspect-h-9 w-full">
                <img
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Corporate Website"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-corporate-peach/10 text-xs font-medium text-corporate-peach rounded-full">
                    Kurumsal
                  </span>
                  <span className="px-3 py-1 bg-corporate-cream/50 text-xs font-medium text-corporate-blue rounded-full">
                    React
                  </span>
                </div>
                <h3 className="text-lg font-bold text-corporate-blue mb-2">
                  FinTech Solutions Kurumsal Site
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Finans teknolojileri şirketi için geliştirdiğimiz kurumsal
                  site, lead dönüşüm oranlarını %45 artırdı ve marka algısını
                  güçlendirdi.
                </p>
                <Button
                  variant="link"
                  className="text-corporate-peach p-0 h-auto text-sm flex items-center"
                >
                  Vaka Çalışmasını İncele{" "}
                  <ChevronRight className="h-3 w-3 ml-1" />
                </Button>
              </div>
            </div>

            {/* Case Study 3 */}
            <div className="bg-white rounded-xl shadow-md border border-corporate-blue/10 overflow-hidden hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]">
              <div className="aspect-w-16 aspect-h-9 w-full">
                <img
                  src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Web Application"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-corporate-blue/10 text-xs font-medium text-corporate-blue rounded-full">
                    Web Uygulaması
                  </span>
                  <span className="px-3 py-1 bg-corporate-cream/50 text-xs font-medium text-corporate-blue rounded-full">
                    Next.js
                  </span>
                </div>
                <h3 className="text-lg font-bold text-corporate-blue mb-2">
                  TaskMaster Proje Yönetim Uygulaması
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Ekip verimliliğini artırmak için geliştirdiğimiz web
                  uygulaması, kullanıcı dostu arayüzü ve güçlü özellikleriyle
                  öne çıkıyor.
                </p>
                <Button
                  variant="link"
                  className="text-corporate-blue p-0 h-auto text-sm flex items-center"
                >
                  Vaka Çalışmasını İncele{" "}
                  <ChevronRight className="h-3 w-3 ml-1" />
                </Button>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button className="bg-gradient-to-r from-corporate-blue to-corporate-blue/80 hover:from-corporate-blue/90 hover:to-corporate-blue/70 text-white px-8 py-3 h-auto text-lg font-medium rounded-full shadow-lg shadow-corporate-blue/20 group">
              <span className="flex items-center">
                Tüm Projelerimizi Görüntüle
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 mb-6 rounded-full bg-corporate-teal/10 border border-corporate-teal/20 shadow-sm">
                <Award className="h-5 w-5 text-corporate-teal mr-2" />
                <span className="text-sm font-medium text-corporate-blue">
                  Neden Biz?
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-corporate-blue">
                Web Sitenizi
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-corporate-blue to-corporate-teal">
                  {" "}
                  Neden Bize{" "}
                </span>
                Emanet Etmelisiniz?
              </h2>
              <p className="text-gray-600 mb-6 text-lg">
                Deneyimli ekibimiz, modern teknolojiler ve kullanıcı odaklı
                yaklaşımımızla, işletmenizin dijital varlığını güçlendiriyoruz.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <div className="bg-corporate-teal/10 p-2 rounded-full">
                    <CheckCircle className="h-5 w-5 text-corporate-teal" />
                  </div>
                  <div>
                    <h3 className="font-medium text-corporate-blue">
                      Uzman Ekip
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Deneyimli geliştiriciler ve tasarımcılar
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-corporate-peach/10 p-2 rounded-full">
                    <Zap className="h-5 w-5 text-corporate-peach" />
                  </div>
                  <div>
                    <h3 className="font-medium text-corporate-blue">
                      Hızlı Geliştirme
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Zamanında teslim, hızlı sonuçlar
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-corporate-blue/10 p-2 rounded-full">
                    <Shield className="h-5 w-5 text-corporate-blue" />
                  </div>
                  <div>
                    <h3 className="font-medium text-corporate-blue">
                      Güvenlik Odaklı
                    </h3>
                    <p className="text-gray-600 text-sm">
                      En üst düzey güvenlik önlemleri
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-corporate-cream/20 p-2 rounded-full">
                    <Smartphone className="h-5 w-5 text-corporate-blue" />
                  </div>
                  <div>
                    <h3 className="font-medium text-corporate-blue">
                      Mobil Öncelikli
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Tüm cihazlarda mükemmel deneyim
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-corporate-teal/10 p-2 rounded-full">
                    <BarChart className="h-5 w-5 text-corporate-teal" />
                  </div>
                  <div>
                    <h3 className="font-medium text-corporate-blue">
                      SEO Optimizasyonu
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Arama motorlarında üst sıralarda yer alın
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-corporate-peach/10 p-2 rounded-full">
                    <Cpu className="h-5 w-5 text-corporate-peach" />
                  </div>
                  <div>
                    <h3 className="font-medium text-corporate-blue">
                      Performans Odaklı
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Hızlı yükleme süreleri, optimum performans
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Button className="bg-gradient-to-r from-corporate-teal to-corporate-teal/80 hover:from-corporate-teal/90 hover:to-corporate-teal/70 text-white px-8 py-3 h-auto text-lg font-medium rounded-full shadow-lg shadow-corporate-teal/20 group">
                  <span className="flex items-center">
                    Ücretsiz Danışmanlık Alın
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-corporate-teal/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-corporate-peach/10 rounded-full blur-3xl"></div>

              <div className="relative bg-white rounded-2xl shadow-xl border border-corporate-teal/10 overflow-hidden">
                <div className="aspect-w-16 aspect-h-9 w-full">
                  <img
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="Web Development Team"
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
                          Web Geliştirme Ekibimiz
                        </h3>
                        <p className="text-sm text-gray-500">
                          Uzman geliştiriciler ve tasarımcılar
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
                      <span className="ml-2 text-sm text-gray-500">+15</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {["Frontend", "Backend", "UI/UX", "DevOps", "SEO"].map(
                      (skill, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-corporate-cream/50 text-xs font-medium text-corporate-blue rounded-full"
                        >
                          {skill}
                        </span>
                      ),
                    )}
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-corporate-teal fill-corporate-teal" />
                      <span className="ml-1 text-sm font-medium">4.9/5</span>
                      <span className="ml-1 text-xs text-gray-500">
                        (200+ değerlendirme)
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
                  Projenize Başlayın
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Web Sitenizi{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-corporate-peach to-corporate-teal">
                  Hayata Geçirelim
                </span>
              </h2>
              <p className="text-white/90 mb-8 text-lg leading-relaxed">
                İster yeni bir web sitesi geliştirmek, ister mevcut sitenizi
                yenilemek isteyin, uzman ekibimiz yanınızda. Hemen ücretsiz
                danışmanlık alın ve projenizi hayata geçirelim.
              </p>
              <div className="flex flex-col sm:flex-row gap-5 mb-8">
                <Button className="bg-gradient-to-r from-corporate-teal to-corporate-teal/80 hover:from-corporate-teal/90 hover:to-corporate-teal/70 text-white px-10 py-4 h-auto text-lg font-semibold rounded-full shadow-xl shadow-corporate-teal/30 transform transition-all duration-300 hover:scale-105 group">
                  <span className="flex items-center">
                    Hemen Başlayın
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
                <Button
                  variant="outline"
                  className="border-white/30 hover:bg-white/10 px-8 py-4 h-auto text-lg font-medium rounded-full backdrop-blur-sm hover:border-white/50 transition-all duration-300 bg-corporate-blue/30"
                >
                  <span className="text-white">Projelerimizi İnceleyin</span>
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
                  <p className="text-corporate-cream/80">200+ memnun müşteri</p>
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
                    <MessageCircle className="h-6 w-6 text-corporate-peach" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">İletişime Geçin</h3>
                    <p className="text-corporate-cream/70 text-sm">
                      Projeniz hakkında konuşalım
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
                        web@hellospace.com
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
                      <Globe className="h-5 w-5 text-corporate-cream" />
                    </div>
                    <div>
                      <h4 className="font-medium">Web Geliştirme Ekibi</h4>
                      <p className="text-sm text-corporate-cream/70">
                        Uzman geliştiriciler ve tasarımcılar
                      </p>
                    </div>
                  </div>
                </div>

                <Button className="w-full mt-6 bg-gradient-to-r from-corporate-peach/80 to-corporate-peach/60 hover:from-corporate-peach hover:to-corporate-peach/80 text-white font-medium py-3 rounded-lg shadow-lg shadow-corporate-peach/20">
                  Ücretsiz Danışmanlık Alın
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Developers Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1.5 mb-4 rounded-full bg-corporate-blue/10 border border-corporate-blue/20">
              <Code className="h-4 w-4 text-corporate-blue mr-2" />
              <span className="text-xs font-medium text-corporate-blue">
                Yazılımcılar & Tasarımcılar İçin
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-corporate-blue">
              Web Geliştirme Ekibimize Katılın
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Hellospace'in web geliştirme ekibinde yeteneklerinizi gösterin,
              global projelerle çalışın ve kariyerinizi ilerletin.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Developer Benefit 1 */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-corporate-teal/10 hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]">
              <div className="w-12 h-12 bg-corporate-teal/10 rounded-full flex items-center justify-center mb-4">
                <Globe className="h-6 w-6 text-corporate-teal" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-corporate-blue">
                Global Projeler
              </h3>
              <p className="text-gray-600">
                Dünyanın dört bir yanından prestijli şirketlerle çalışma fırsatı
                yakalayın. Farklı sektörlerden çeşitli web projeleriyle
                deneyiminizi zenginleştirin.
              </p>
            </div>

            {/* Developer Benefit 2 */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-corporate-peach/10 hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]">
              <div className="w-12 h-12 bg-corporate-peach/10 rounded-full flex items-center justify-center mb-4">
                <Rocket className="h-6 w-6 text-corporate-peach" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-corporate-blue">
                Kariyer Gelişimi
              </h3>
              <p className="text-gray-600">
                Modern web teknolojileriyle çalışarak becerilerinizi geliştirin.
                Mentorluk, eğitim kaynakları ve sürekli öğrenme fırsatlarıyla
                kariyerinizi ilerletin.
              </p>
            </div>

            {/* Developer Benefit 3 */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-corporate-blue/10 hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]">
              <div className="w-12 h-12 bg-corporate-blue/10 rounded-full flex items-center justify-center mb-4">
                <DollarSign className="h-6 w-6 text-corporate-blue" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-corporate-blue">
                Rekabetçi Ücretler
              </h3>
              <p className="text-gray-600">
                Yeteneklerinizin değerini yansıtan, global piyasa
                standartlarında ücretler kazanın. Esnek çalışma modelleri ve
                proje bazlı ödemelerle finansal özgürlüğünüzü artırın.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button className="bg-gradient-to-r from-corporate-blue to-corporate-blue/80 hover:from-corporate-blue/90 hover:to-corporate-blue/70 text-white px-8 py-3 h-auto text-lg font-medium rounded-full shadow-lg shadow-corporate-blue/20 group">
              <span className="flex items-center">
                Ekibimize Katılın
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default WebsiteDevelopment;
