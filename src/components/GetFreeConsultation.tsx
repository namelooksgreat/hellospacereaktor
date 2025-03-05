import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Alert, AlertDescription } from "./ui/alert";
import {
  ArrowRight,
  ArrowLeft,
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
  Calendar,
  Building,
  Phone,
  Mail,
  AlertCircle,
  Check,
  PuzzleIcon,
} from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const GetFreeConsultation = () => {
  const [formStep, setFormStep] = useState<number>(1);
  const [projectType, setProjectType] = useState<string>("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    budget: "",
    timeline: "",
    description: "",
    hearAbout: "",
    agreeTerms: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData({
      ...formData,
      agreeTerms: checked,
    });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleProjectTypeSelect = (type: string) => {
    setProjectType(type);
    setFormData({
      ...formData,
      projectType: type,
    });
  };

  const nextStep = () => {
    setFormStep(formStep + 1);
  };

  const prevStep = () => {
    setFormStep(formStep - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      // In a real application, you would send the form data to your backend here
      console.log("Form submitted:", formData);
    }, 1500);
  };

  // Services offered
  const services = [
    {
      id: "web",
      title: "Web Geliştirme",
      icon: <Globe className="h-6 w-6 text-corporate-teal" />,
      description: "Responsive, SEO dostu ve kullanıcı odaklı web siteleri",
    },
    {
      id: "mobile",
      title: "Mobil Uygulama",
      icon: <Smartphone className="h-6 w-6 text-corporate-peach" />,
      description: "iOS ve Android için native ve cross-platform uygulamalar",
    },
    {
      id: "custom",
      title: "Özel Yazılım",
      icon: <Code className="h-6 w-6 text-corporate-blue" />,
      description: "İşletmenize özel yazılım çözümleri ve entegrasyonlar",
    },
    {
      id: "ecommerce",
      title: "E-Ticaret",
      icon: <Briefcase className="h-6 w-6 text-corporate-teal" />,
      description: "Yüksek dönüşüm oranlı online satış platformları",
    },
    {
      id: "ui",
      title: "UI/UX Tasarım",
      icon: <PenTool className="h-6 w-6 text-corporate-peach" />,
      description: "Kullanıcı deneyimini ön plana çıkaran arayüz tasarımları",
    },
    {
      id: "consulting",
      title: "Teknoloji Danışmanlığı",
      icon: <Lightbulb className="h-6 w-6 text-corporate-blue" />,
      description: "Dijital dönüşüm ve teknoloji stratejisi danışmanlığı",
    },
  ];

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
            <MessageCircle className="h-5 w-5 text-corporate-peach mr-2" />
            <span className="text-sm font-medium text-corporate-cream">
              Ücretsiz Danışmanlık
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
            Dijital Dönüşüm Yolculuğunuz{" "}
            <span className="text-corporate-teal">Burada Başlıyor</span>
          </h1>
          <p className="text-xl text-corporate-cream/90 mb-8 max-w-3xl mx-auto">
            Projeniz için uzman ekibimizden ücretsiz danışmanlık alın.
            Fikirlerinizi gerçeğe dönüştürmek için yanınızdayız.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-6 text-corporate-cream mb-8">
            <div className="flex items-center bg-white/10 px-5 py-2.5 rounded-full border border-white/20 backdrop-blur-sm">
              <Star className="h-5 w-5 text-corporate-peach mr-2.5" />
              <span className="font-medium">5,000+ Başarılı Proje</span>
            </div>
            <div className="flex items-center bg-white/10 px-5 py-2.5 rounded-full border border-white/20 backdrop-blur-sm">
              <Users className="h-5 w-5 text-corporate-teal mr-2.5" />
              <span className="font-medium">200+ Uzman Ekip</span>
            </div>
            <div className="flex items-center bg-white/10 px-5 py-2.5 rounded-full border border-white/20 backdrop-blur-sm">
              <CheckCircle className="h-5 w-5 text-corporate-peach mr-2.5" />
              <span className="font-medium">%98 Müşteri Memnuniyeti</span>
            </div>
          </div>

          {/* Scroll down indicator */}
          <div className="mt-8 animate-bounce">
            <div className="w-8 h-12 mx-auto border-2 border-white/30 rounded-full flex items-center justify-center">
              <div className="w-1.5 h-3 bg-white/60 rounded-full animate-pulse"></div>
            </div>
            <p className="text-corporate-cream/60 text-sm mt-2">Aşağı Kaydır</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column - Benefits */}
            <div className="lg:col-span-5">
              <div className="sticky top-24">
                <div className="mb-8">
                  <div className="inline-flex items-center px-3 py-1.5 mb-4 rounded-full bg-corporate-teal/10 border border-corporate-teal/20">
                    <Award className="h-4 w-4 text-corporate-teal mr-2" />
                    <span className="text-xs font-medium text-corporate-blue">
                      Neden Hellospace?
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold mb-4 text-corporate-blue">
                    Yazılım İhtiyaçlarınız İçin Doğru Adres
                  </h2>
                  <p className="text-gray-600">
                    Hellospace olarak, işletmenizin dijital dönüşüm yolculuğunda
                    yanınızdayız. Ücretsiz danışmanlık hizmetimizle,
                    ihtiyaçlarınızı anlar ve size özel çözümler sunarız.
                  </p>
                </div>

                <div className="space-y-6">
                  {/* Benefit 1 */}
                  <div className="flex">
                    <div className="w-12 h-12 rounded-full bg-corporate-teal/10 flex items-center justify-center mr-4 flex-shrink-0">
                      <Sparkles className="h-6 w-6 text-corporate-teal" />
                    </div>
                    <div>
                      <h3 className="font-bold text-corporate-blue mb-1 text-lg">
                        Uzman Ekip
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Alanında uzman, deneyimli yazılım geliştiricileri ve
                        tasarımcılardan oluşan ekibimiz, projenizi en yüksek
                        kalitede hayata geçirir.
                      </p>
                    </div>
                  </div>

                  {/* Benefit 2 */}
                  <div className="flex">
                    <div className="w-12 h-12 rounded-full bg-corporate-peach/10 flex items-center justify-center mr-4 flex-shrink-0">
                      <Target className="h-6 w-6 text-corporate-peach" />
                    </div>
                    <div>
                      <h3 className="font-bold text-corporate-blue mb-1 text-lg">
                        Kişiselleştirilmiş Çözümler
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Her işletmenin ihtiyaçları farklıdır. Size özel,
                        ölçeklenebilir ve sürdürülebilir çözümler
                        geliştiriyoruz.
                      </p>
                    </div>
                  </div>

                  {/* Benefit 3 */}
                  <div className="flex">
                    <div className="w-12 h-12 rounded-full bg-corporate-blue/10 flex items-center justify-center mr-4 flex-shrink-0">
                      <Shield className="h-6 w-6 text-corporate-blue" />
                    </div>
                    <div>
                      <h3 className="font-bold text-corporate-blue mb-1 text-lg">
                        Güvenilir Ortaklık
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Sadece bir hizmet sağlayıcı değil, uzun vadeli bir iş
                        ortağı olarak yanınızdayız. Projenizin her aşamasında
                        şeffaf iletişim ve destek sağlıyoruz.
                      </p>
                    </div>
                  </div>

                  {/* Benefit 4 */}
                  <div className="flex">
                    <div className="w-12 h-12 rounded-full bg-corporate-teal/10 flex items-center justify-center mr-4 flex-shrink-0">
                      <Zap className="h-6 w-6 text-corporate-teal" />
                    </div>
                    <div>
                      <h3 className="font-bold text-corporate-blue mb-1 text-lg">
                        Hızlı ve Etkili Süreç
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Çevik metodolojiler kullanarak, projenizi hızlı ve
                        verimli bir şekilde hayata geçiriyoruz. Zamanında
                        teslimat ve kalite garantisi sunuyoruz.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Testimonial */}
                <div className="mt-10 bg-corporate-blue/5 p-6 rounded-xl border border-corporate-blue/10">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-corporate-blue/20">
                      <img
                        src="https://api.dicebear.com/7.x/avataaars/svg?seed=ceo1"
                        alt="CEO"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium text-corporate-blue">
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
                  <p className="text-gray-600 text-sm italic">
                    "Hellospace ekibi, projemizi tam zamanında ve bütçe
                    dahilinde tamamladı. İhtiyaçlarımızı tam olarak anladılar ve
                    beklentilerimizin ötesinde bir sonuç sundular. Kesinlikle
                    tavsiye ediyorum!"
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Consultation Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
                {submitSuccess ? (
                  <div className="p-8 text-center">
                    <div className="w-20 h-20 bg-corporate-teal/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Check className="h-10 w-10 text-corporate-teal" />
                    </div>
                    <h3 className="text-2xl font-bold text-corporate-blue mb-4">
                      Talebiniz Alındı!
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Danışmanlık talebiniz başarıyla alınmıştır. Ekibimiz en
                      kısa sürede sizinle iletişime geçecektir. Teşekkür ederiz!
                    </p>
                    <div className="flex justify-center gap-4">
                      <Button
                        className="bg-corporate-teal hover:bg-corporate-teal/90 text-white"
                        onClick={() => {
                          setSubmitSuccess(false);
                          setFormStep(1);
                          setFormData({
                            fullName: "",
                            email: "",
                            phone: "",
                            company: "",
                            projectType: "",
                            budget: "",
                            timeline: "",
                            description: "",
                            hearAbout: "",
                            agreeTerms: false,
                          });
                        }}
                      >
                        Yeni Talep Oluştur
                      </Button>
                      <Link to="/">
                        <Button
                          variant="outline"
                          className="border-corporate-blue/30 text-corporate-blue hover:bg-corporate-blue/5"
                        >
                          Ana Sayfaya Dön
                        </Button>
                      </Link>
                    </div>
                  </div>
                ) : (
                  <>
                    {/* Form Header */}
                    <div className="bg-gradient-to-r from-corporate-blue to-corporate-blue/90 p-6 text-white">
                      <h3 className="text-xl font-bold mb-2 flex items-center">
                        <MessageCircle className="h-5 w-5 mr-2" />
                        Ücretsiz Danışmanlık Formu
                      </h3>
                      <p className="text-corporate-cream/80 text-sm">
                        Projeniz hakkında bize bilgi verin, 24 saat içinde size
                        özel çözüm önerilerimizle dönüş yapalım.
                      </p>
                    </div>

                    {/* Form Steps Indicator */}
                    <div className="px-6 pt-6">
                      <div className="flex items-center mb-6">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center ${formStep >= 1 ? "bg-corporate-teal text-white" : "bg-gray-200 text-gray-500"}`}
                        >
                          1
                        </div>
                        <div
                          className={`flex-1 h-1 mx-2 ${formStep >= 2 ? "bg-corporate-teal" : "bg-gray-200"}`}
                        ></div>
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center ${formStep >= 2 ? "bg-corporate-teal text-white" : "bg-gray-200 text-gray-500"}`}
                        >
                          2
                        </div>
                        <div
                          className={`flex-1 h-1 mx-2 ${formStep >= 3 ? "bg-corporate-teal" : "bg-gray-200"}`}
                        ></div>
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center ${formStep >= 3 ? "bg-corporate-teal text-white" : "bg-gray-200 text-gray-500"}`}
                        >
                          3
                        </div>
                      </div>
                    </div>

                    {/* Form Content */}
                    <form onSubmit={handleSubmit} className="p-6 pt-0">
                      {/* Step 1: Personal Information */}
                      {formStep === 1 && (
                        <div className="space-y-6">
                          <div className="mb-2">
                            <h4 className="text-lg font-semibold text-corporate-blue mb-1">
                              Kişisel Bilgiler
                            </h4>
                            <p className="text-gray-500 text-sm">
                              Size ulaşabilmemiz için bilgilerinizi paylaşın
                            </p>
                          </div>

                          <div className="space-y-4">
                            <div>
                              <Label
                                htmlFor="fullName"
                                className="text-sm font-medium text-gray-700 mb-1.5 block"
                              >
                                Ad Soyad <span className="text-red-500">*</span>
                              </Label>
                              <Input
                                id="fullName"
                                name="fullName"
                                placeholder="Ad Soyad"
                                className="border-gray-300 focus:border-corporate-teal/50 focus:ring-corporate-teal/20"
                                value={formData.fullName}
                                onChange={handleInputChange}
                                required
                              />
                            </div>

                            <div>
                              <Label
                                htmlFor="email"
                                className="text-sm font-medium text-gray-700 mb-1.5 block"
                              >
                                E-posta Adresi{" "}
                                <span className="text-red-500">*</span>
                              </Label>
                              <Input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="ornek@sirket.com"
                                className="border-gray-300 focus:border-corporate-teal/50 focus:ring-corporate-teal/20"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                              />
                            </div>

                            <div>
                              <Label
                                htmlFor="phone"
                                className="text-sm font-medium text-gray-700 mb-1.5 block"
                              >
                                Telefon Numarası
                              </Label>
                              <Input
                                id="phone"
                                name="phone"
                                placeholder="+90 (___) ___ __ __"
                                className="border-gray-300 focus:border-corporate-teal/50 focus:ring-corporate-teal/20"
                                value={formData.phone}
                                onChange={handleInputChange}
                              />
                            </div>

                            <div>
                              <Label
                                htmlFor="company"
                                className="text-sm font-medium text-gray-700 mb-1.5 block"
                              >
                                Şirket / Kurum Adı
                              </Label>
                              <Input
                                id="company"
                                name="company"
                                placeholder="Şirket Adı"
                                className="border-gray-300 focus:border-corporate-teal/50 focus:ring-corporate-teal/20"
                                value={formData.company}
                                onChange={handleInputChange}
                              />
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Step 2: Project Type */}
                      {formStep === 2 && (
                        <div className="space-y-6">
                          <div className="mb-2">
                            <h4 className="text-lg font-semibold text-corporate-blue mb-1">
                              Proje Detayları
                            </h4>
                            <p className="text-gray-500 text-sm">
                              İhtiyacınız olan hizmet türünü seçin
                            </p>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {services.map((service) => (
                              <div
                                key={service.id}
                                className={`p-4 border rounded-xl cursor-pointer transition-all duration-200 ${formData.projectType === service.id ? "border-corporate-teal bg-corporate-teal/5" : "border-gray-200 hover:border-corporate-teal/30 hover:bg-gray-50"}`}
                                onClick={() =>
                                  handleProjectTypeSelect(service.id)
                                }
                              >
                                <div className="flex items-start">
                                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center mr-3 border border-gray-200">
                                    {service.icon}
                                  </div>
                                  <div>
                                    <h5 className="font-medium text-corporate-blue">
                                      {service.title}
                                    </h5>
                                    <p className="text-gray-500 text-sm">
                                      {service.description}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>

                          <div className="space-y-4 mt-6">
                            <div>
                              <Label
                                htmlFor="budget"
                                className="text-sm font-medium text-gray-700 mb-1.5 block"
                              >
                                Bütçe Aralığı
                              </Label>
                              <Select
                                value={formData.budget}
                                onValueChange={(value) =>
                                  handleSelectChange("budget", value)
                                }
                              >
                                <SelectTrigger className="border-gray-300 focus:border-corporate-teal/50 focus:ring-corporate-teal/20">
                                  <SelectValue placeholder="Bütçe aralığı seçin" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="10k-below">
                                    10.000 TL'den az
                                  </SelectItem>
                                  <SelectItem value="10k-50k">
                                    10.000 TL - 50.000 TL
                                  </SelectItem>
                                  <SelectItem value="50k-100k">
                                    50.000 TL - 100.000 TL
                                  </SelectItem>
                                  <SelectItem value="100k-250k">
                                    100.000 TL - 250.000 TL
                                  </SelectItem>
                                  <SelectItem value="250k-above">
                                    250.000 TL ve üzeri
                                  </SelectItem>
                                  <SelectItem value="undecided">
                                    Henüz belirlemedim
                                  </SelectItem>
                                </SelectContent>
                              </Select>
                            </div>

                            <div>
                              <Label
                                htmlFor="timeline"
                                className="text-sm font-medium text-gray-700 mb-1.5 block"
                              >
                                Proje Zaman Çizelgesi
                              </Label>
                              <Select
                                value={formData.timeline}
                                onValueChange={(value) =>
                                  handleSelectChange("timeline", value)
                                }
                              >
                                <SelectTrigger className="border-gray-300 focus:border-corporate-teal/50 focus:ring-corporate-teal/20">
                                  <SelectValue placeholder="Zaman çizelgesi seçin" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="urgent">
                                    Acil (1 ay içinde)
                                  </SelectItem>
                                  <SelectItem value="1-3months">
                                    1-3 ay içinde
                                  </SelectItem>
                                  <SelectItem value="3-6months">
                                    3-6 ay içinde
                                  </SelectItem>
                                  <SelectItem value="6months-plus">
                                    6 ay ve üzeri
                                  </SelectItem>
                                  <SelectItem value="undecided">
                                    Henüz belirlemedim
                                  </SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Step 3: Project Details */}
                      {formStep === 3 && (
                        <div className="space-y-6">
                          <div className="mb-2">
                            <h4 className="text-lg font-semibold text-corporate-blue mb-1">
                              Proje Açıklaması
                            </h4>
                            <p className="text-gray-500 text-sm">
                              Projeniz hakkında daha fazla bilgi verin
                            </p>
                          </div>

                          <div>
                            <Label
                              htmlFor="description"
                              className="text-sm font-medium text-gray-700 mb-1.5 block"
                            >
                              Proje Detayları{" "}
                              <span className="text-red-500">*</span>
                            </Label>
                            <Textarea
                              id="description"
                              name="description"
                              placeholder="Projeniz hakkında detaylı bilgi verin. İhtiyaçlarınız, beklentileriniz ve hedefleriniz nelerdir?"
                              className="border-gray-300 focus:border-corporate-teal/50 focus:ring-corporate-teal/20 min-h-[150px]"
                              value={formData.description}
                              onChange={handleInputChange}
                              required
                            />
                          </div>

                          <div>
                            <Label
                              htmlFor="hearAbout"
                              className="text-sm font-medium text-gray-700 mb-1.5 block"
                            >
                              Bizi nereden duydunuz?
                            </Label>
                            <Select
                              value={formData.hearAbout}
                              onValueChange={(value) =>
                                handleSelectChange("hearAbout", value)
                              }
                            >
                              <SelectTrigger className="border-gray-300 focus:border-corporate-teal/50 focus:ring-corporate-teal/20">
                                <SelectValue placeholder="Seçim yapın" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="search">
                                  Arama Motoru (Google, Bing, vb.)
                                </SelectItem>
                                <SelectItem value="social">
                                  Sosyal Medya
                                </SelectItem>
                                <SelectItem value="referral">
                                  Arkadaş/Meslektaş Tavsiyesi
                                </SelectItem>
                                <SelectItem value="event">
                                  Etkinlik/Konferans
                                </SelectItem>
                                <SelectItem value="ad">Reklam</SelectItem>
                                <SelectItem value="other">Diğer</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>

                          <div className="flex items-start space-x-2 pt-2">
                            <Checkbox
                              id="agreeTerms"
                              checked={formData.agreeTerms}
                              onCheckedChange={handleCheckboxChange}
                              className="data-[state=checked]:bg-corporate-teal data-[state=checked]:border-corporate-teal mt-1"
                            />
                            <div className="grid gap-1.5 leading-none">
                              <label
                                htmlFor="agreeTerms"
                                className="text-sm font-medium leading-none text-gray-700 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                <span className="text-red-500 mr-1">*</span>
                                Kişisel verilerimin işlenmesine ilişkin{" "}
                                <Link
                                  to="/privacy"
                                  className="text-corporate-teal hover:underline"
                                >
                                  Aydınlatma Metni
                                </Link>
                                'ni okudum ve kabul ediyorum.
                              </label>
                            </div>
                          </div>

                          {submitError && (
                            <Alert variant="destructive">
                              <AlertCircle className="h-4 w-4" />
                              <AlertDescription>{submitError}</AlertDescription>
                            </Alert>
                          )}
                        </div>
                      )}

                      {/* Form Navigation */}
                      <div className="flex justify-between mt-8">
                        {formStep > 1 ? (
                          <Button
                            type="button"
                            variant="outline"
                            className="border-corporate-blue/30 text-corporate-blue hover:bg-corporate-blue/5"
                            onClick={prevStep}
                          >
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Geri
                          </Button>
                        ) : (
                          <div></div>
                        )}

                        {formStep < 3 ? (
                          <Button
                            type="button"
                            className="bg-corporate-teal hover:bg-corporate-teal/90 text-white"
                            onClick={nextStep}
                          >
                            İleri
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        ) : (
                          <Button
                            type="submit"
                            className="bg-corporate-teal hover:bg-corporate-teal/90 text-white"
                            disabled={isSubmitting || !formData.agreeTerms}
                          >
                            {isSubmitting ? (
                              <>
                                <span className="mr-2">Gönderiliyor</span>
                                <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                              </>
                            ) : (
                              <>
                                Gönder
                                <ArrowRight className="ml-2 h-4 w-4" />
                              </>
                            )}
                          </Button>
                        )}
                      </div>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-corporate-blue/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-3 py-1.5 mb-4 rounded-full bg-corporate-blue/10 border border-corporate-blue/20">
              <PuzzleIcon className="h-4 w-4 text-corporate-blue mr-2" />
              <span className="text-xs font-medium text-corporate-blue">
                Hizmetlerimiz
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-corporate-blue">
              Kapsamlı Yazılım Çözümleri
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              İşletmenizin ihtiyaçlarına özel, yenilikçi ve ölçeklenebilir
              yazılım çözümleri sunuyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]">
              <div className="w-14 h-14 bg-corporate-teal/10 rounded-full flex items-center justify-center mb-5">
                <Globe className="h-7 w-7 text-corporate-teal" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-corporate-blue">
                Web Geliştirme
              </h3>
              <p className="text-gray-600 mb-4">
                Modern, responsive ve kullanıcı dostu web siteleri ve web
                uygulamaları geliştiriyoruz. SEO dostu yapı ile online
                görünürlüğünüzü artırın.
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Kurumsal Web Siteleri",
                  "Web Uygulamaları",
                  "E-Ticaret Siteleri",
                  "CMS Sistemleri",
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

            {/* Service 2 */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]">
              <div className="w-14 h-14 bg-corporate-peach/10 rounded-full flex items-center justify-center mb-5">
                <Smartphone className="h-7 w-7 text-corporate-peach" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-corporate-blue">
                Mobil Uygulama Geliştirme
              </h3>
              <p className="text-gray-600 mb-4">
                iOS ve Android platformları için native ve cross-platform mobil
                uygulamalar geliştiriyoruz. Kullanıcı deneyimini ön planda tutan
                tasarımlar.
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "iOS Uygulamaları",
                  "Android Uygulamaları",
                  "React Native",
                  "Flutter",
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

            {/* Service 3 */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]">
              <div className="w-14 h-14 bg-corporate-blue/10 rounded-full flex items-center justify-center mb-5">
                <Code className="h-7 w-7 text-corporate-blue" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-corporate-blue">
                Özel Yazılım Çözümleri
              </h3>
              <p className="text-gray-600 mb-4">
                İşletmenizin benzersiz ihtiyaçlarına yönelik özel yazılım
                çözümleri geliştiriyoruz. İş süreçlerinizi otomatikleştirin ve
                verimliliğinizi artırın.
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "CRM Sistemleri",
                  "ERP Çözümleri",
                  "İş Akışı Otomasyonu",
                  "Veri Analizi",
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

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-3 py-1.5 mb-4 rounded-full bg-corporate-peach/10 border border-corporate-peach/20">
              <PuzzleIcon className="h-4 w-4 text-corporate-blue mr-2" />
              <span className="text-xs font-medium text-corporate-blue">
                Sıkça Sorulan Sorular
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-corporate-blue">
              Merak Edilenler
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Danışmanlık hizmetimiz hakkında sık sorulan soruların cevaplarını
              burada bulabilirsiniz.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem
              value="item-1"
              className="border border-gray-200 rounded-lg mb-4 overflow-hidden"
            >
              <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 text-left font-medium text-corporate-blue">
                Ücretsiz danışmanlık hizmeti tam olarak neyi kapsıyor?
              </AccordionTrigger>
              <AccordionContent className="px-6 py-5 bg-gray-50 text-gray-700 leading-relaxed">
                Ücretsiz danışmanlık hizmetimiz, projenizin teknik
                gereksinimlerinin belirlenmesi, uygun teknoloji seçimi, maliyet
                ve zaman tahmini, proje planlaması ve potansiyel zorlukların
                değerlendirilmesi gibi konuları kapsar. Bu hizmet, herhangi bir
                ücret veya taahhüt olmadan sunulur.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-2"
              className="border border-gray-200 rounded-lg mb-4 overflow-hidden"
            >
              <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 text-left font-medium text-corporate-blue">
                Danışmanlık sonrası süreç nasıl işliyor?
              </AccordionTrigger>
              <AccordionContent className="px-6 py-5 bg-gray-50 text-gray-700 leading-relaxed">
                Danışmanlık görüşmesinden sonra, ekibimiz projeniz için detaylı
                bir teklif hazırlar. Bu teklif, proje kapsamı, zaman çizelgesi,
                maliyet ve kullanılacak teknolojileri içerir. Teklifi
                onaylamanız durumunda, proje sözleşmesi imzalanır ve geliştirme
                süreci başlar.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-3"
              className="border border-gray-200 rounded-lg mb-4 overflow-hidden"
            >
              <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 text-left font-medium text-corporate-blue">
                Projemi tamamlamak ne kadar sürer?
              </AccordionTrigger>
              <AccordionContent className="px-6 py-5 bg-gray-50 text-gray-700 leading-relaxed">
                Proje süresi, projenin karmaşıklığına, kapsamına ve
                gereksinimlerine bağlı olarak değişir. Basit bir web sitesi 2-4
                hafta içinde tamamlanabilirken, karmaşık bir mobil uygulama veya
                özel yazılım çözümü 3-6 ay veya daha uzun sürebilir. Kesin süre,
                danışmanlık görüşmesi sonrasında belirlenecektir.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-4"
              className="border border-gray-200 rounded-lg mb-4 overflow-hidden"
            >
              <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 text-left font-medium text-corporate-blue">
                Proje tamamlandıktan sonra destek alabilir miyim?
              </AccordionTrigger>
              <AccordionContent className="px-6 py-5 bg-gray-50 text-gray-700 leading-relaxed">
                Evet, tüm projelerimiz için bakım ve destek hizmetleri
                sunuyoruz. Proje tamamlandıktan sonra, ihtiyaçlarınıza göre
                aylık veya yıllık bakım paketleri seçebilirsiniz. Bu paketler,
                teknik destek, güvenlik güncellemeleri, performans
                iyileştirmeleri ve küçük değişiklikleri kapsar.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-5"
              className="border border-gray-200 rounded-lg mb-4 overflow-hidden"
            >
              <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 text-left font-medium text-corporate-blue">
                Ödeme koşulları nasıl işliyor?
              </AccordionTrigger>
              <AccordionContent className="px-6 py-5 bg-gray-50 text-gray-700 leading-relaxed">
                Projelerimizde genellikle aşamalı bir ödeme planı uyguluyoruz.
                Tipik olarak, proje başlangıcında %30-40 ön ödeme, geliştirme
                sürecinde belirli kilometre taşlarında ara ödemeler ve proje
                tesliminde kalan bakiye şeklinde bir plan izlenir. Özel ödeme
                planları da ihtiyaçlarınıza göre düzenlenebilir.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-corporate-blue via-corporate-blue/90 to-corporate-blue/80 text-white relative overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute -top-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-gradient-to-br from-corporate-teal/20 to-corporate-peach/20 blur-3xl animate-pulse duration-3000" />
        <div className="absolute -bottom-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-gradient-to-tr from-corporate-cream/20 to-corporate-teal/20 blur-3xl animate-pulse duration-2000" />
        <div className="absolute inset-0 bg-grid-white/[0.03] bg-[length:30px_30px]" />

        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center px-4 py-2 mb-6 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm shadow-lg">
            <Rocket className="h-5 w-5 text-corporate-peach mr-2" />
            <span className="text-sm font-medium text-corporate-cream">
              Hemen Başlayın
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Projenizi{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-corporate-peach to-corporate-teal">
              Hayata Geçirmeye
            </span>{" "}
            Hazır Mısınız?
          </h2>
          <p className="text-white/90 mb-8 text-lg leading-relaxed max-w-3xl mx-auto">
            Fikirlerinizi gerçeğe dönüştürmek için ilk adımı atın. Ücretsiz
            danışmanlık hizmetimizle, projenizin potansiyelini keşfedin ve
            başarıya giden yolda yanınızda olalım.
          </p>
          <Button className="bg-gradient-to-r from-corporate-teal to-corporate-teal/80 hover:from-corporate-teal/90 hover:to-corporate-teal/70 text-white px-8 py-6 h-auto text-lg font-semibold rounded-xl shadow-lg shadow-corporate-teal/20 group">
            <span className="flex items-center">
              Ücretsiz Danışmanlık Alın
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default GetFreeConsultation;
