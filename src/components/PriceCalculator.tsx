import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Slider } from "./ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Badge } from "./ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import {
  Calculator,
  DollarSign,
  Laptop,
  Smartphone,
  Globe,
  ChevronRight,
  ArrowRight,
  Building,
  CheckCircle,
  Phone,
  Zap,
  Info,
  Clock,
  Users,
  Calendar,
  ShieldCheck,
  Sparkles,
  BarChart,
  HelpCircle,
} from "lucide-react";

const PriceCalculator = () => {
  // Project calculator state
  const [projectType, setProjectType] = useState("web");
  const [complexity, setComplexity] = useState("medium");
  const [features, setFeatures] = useState<string[]>([
    "authentication",
    "database",
  ]);
  const [timeframe, setTimeframe] = useState("standard"); // standard, fast, flexible
  const [teamSize, setTeamSize] = useState(2); // 1-5 team members
  const [calculatedCost, setCalculatedCost] = useState(0);
  const [monthlySupport, setMonthlySupport] = useState(false);
  const [activeTab, setActiveTab] = useState("basic"); // basic, advanced

  // Feature options with their costs
  const featureOptions = [
    {
      id: "authentication",
      label: "Kullanıcı Girişi",
      cost: 1000,
      description:
        "Güvenli kullanıcı kimlik doğrulama, kayıt ve profil yönetimi",
    },
    {
      id: "database",
      label: "Veri Tabanı",
      cost: 1500,
      description: "Verilerin güvenli depolanması ve yönetimi",
    },
    {
      id: "payment",
      label: "Ödeme Sistemi",
      cost: 2000,
      description: "Güvenli online ödeme entegrasyonu",
    },
    {
      id: "api",
      label: "API Entegrasyonu",
      cost: 1800,
      description: "Diğer sistemlerle veri alışverişi",
    },
    {
      id: "analytics",
      label: "Raporlama Paneli",
      cost: 2500,
      description: "Detaylı istatistikler ve veri görselleştirme",
    },
    {
      id: "realtime",
      label: "Anlık Bildirimler",
      cost: 3000,
      description: "Gerçek zamanlı bildirimler ve güncellemeler",
    },
    {
      id: "mobile",
      label: "Mobil Uyumluluk",
      cost: 1200,
      description: "Tüm mobil cihazlarda sorunsuz çalışma",
    },
    {
      id: "admin",
      label: "Yönetici Paneli",
      cost: 2200,
      description: "Kapsamlı içerik ve kullanıcı yönetimi",
    },
    {
      id: "multilingual",
      label: "Çoklu Dil Desteği",
      cost: 1600,
      description: "Birden fazla dil seçeneği",
    },
    {
      id: "seo",
      label: "SEO Optimizasyonu",
      cost: 1400,
      description: "Arama motorlarında üst sıralarda yer alma",
    },
    {
      id: "security",
      label: "Gelişmiş Güvenlik",
      cost: 2800,
      description: "DDoS koruması, güvenlik duvarı ve veri şifreleme",
    },
    {
      id: "customization",
      label: "Özel Tasarım",
      cost: 3500,
      description: "Markanıza özel premium tasarım",
    },
  ];

  // Calculate project cost
  useEffect(() => {
    // Base costs by project type
    const baseCosts = {
      web: 5000,
      mobile: 8000,
      desktop: 7000,
      enterprise: 15000,
    };

    // Complexity multipliers
    const complexityMultipliers = {
      simple: 1,
      medium: 1.5,
      complex: 2.5,
    };

    // Timeframe multipliers
    const timeframeMultipliers = {
      flexible: 0.9,
      standard: 1,
      fast: 1.4,
    };

    // Calculate base cost
    let base = baseCosts[projectType as keyof typeof baseCosts];

    // Add feature costs
    const featureCost = features.reduce((total, featureId) => {
      const feature = featureOptions.find((f) => f.id === featureId);
      return total + (feature?.cost || 0);
    }, 0);

    // Apply complexity multiplier
    let totalCost =
      (base + featureCost) *
      complexityMultipliers[complexity as keyof typeof complexityMultipliers];

    // Apply timeframe multiplier
    totalCost *=
      timeframeMultipliers[timeframe as keyof typeof timeframeMultipliers];

    // Add team size cost (each additional team member adds 15% to the cost)
    totalCost *= 1 + (teamSize - 1) * 0.15;

    // Add monthly support if selected (10% of project cost annually, divided by 12)
    if (monthlySupport) {
      totalCost += (totalCost * 0.1) / 12;
    }

    setCalculatedCost(Math.round(totalCost));
  }, [projectType, complexity, features, timeframe, teamSize, monthlySupport]);

  // Toggle feature selection
  const toggleFeature = (featureId: string) => {
    if (features.includes(featureId)) {
      setFeatures(features.filter((id) => id !== featureId));
    } else {
      setFeatures([...features, featureId]);
    }
  };

  // Project type labels in Turkish
  const projectTypeLabels = {
    web: "Web Sitesi",
    mobile: "Mobil Uygulama",
    desktop: "Masaüstü Program",
    enterprise: "Kurumsal Yazılım",
  };

  // Complexity labels in Turkish
  const complexityLabels = {
    simple: "Basit",
    medium: "Orta",
    complex: "Karmaşık",
  };

  // Timeframe labels
  const timeframeLabels = {
    flexible: "Esnek Zamanlama",
    standard: "Standart Süre",
    fast: "Hızlandırılmış",
  };

  // Timeframe descriptions
  const timeframeDescriptions = {
    flexible: "Zaman kısıtlaması olmadan, daha ekonomik",
    standard: "Endüstri standartlarında proje süresi",
    fast: "Acil projeler için hızlandırılmış geliştirme",
  };

  return (
    <div className="w-full max-w-[1200px] mx-auto bg-white p-6 md:p-8 rounded-xl border border-gray-200 shadow-md relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-corporate-blue/5 rounded-full -translate-y-1/3 translate-x-1/3 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-corporate-teal/5 rounded-full translate-y-1/3 -translate-x-1/3 blur-3xl"></div>

      <div className="relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-4 py-2 mb-3 rounded-full bg-corporate-blue/10 border border-corporate-blue/20">
            <Calculator className="h-5 w-5 text-corporate-blue mr-2" />
            <span className="text-sm font-medium text-corporate-blue">
              Hızlı Fiyat Hesaplama
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-gray-800">
            Projenizin Maliyetini Hesaplayın
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Yazılım projenizin tahmini maliyetini hemen öğrenin ve özel
            teklifimizi alın
          </p>
        </div>

        {/* Tabs for Basic/Advanced mode */}
        <div className="mb-6 flex justify-center">
          <Tabs
            defaultValue="basic"
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full max-w-md"
          >
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="basic">Temel Hesaplama</TabsTrigger>
              <TabsTrigger value="advanced">Detaylı Hesaplama</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Calculator Form */}
          <div className="lg:col-span-7 bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-200">
            {/* Project Type */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-3 flex items-center">
                Proje Türü
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <HelpCircle className="h-4 w-4 ml-1.5 text-gray-400" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="w-64 text-sm">
                        Geliştirmek istediğiniz yazılım türünü seçin
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  {
                    id: "web",
                    label: "Web Sitesi",
                    icon: <Globe className="h-5 w-5" />,
                    description: "Responsive web siteleri",
                  },
                  {
                    id: "mobile",
                    label: "Mobil Uygulama",
                    icon: <Smartphone className="h-5 w-5" />,
                    description: "iOS ve Android uygulamaları",
                  },
                  {
                    id: "desktop",
                    label: "Masaüstü Program",
                    icon: <Laptop className="h-5 w-5" />,
                    description: "Windows/Mac uygulamaları",
                  },
                  {
                    id: "enterprise",
                    label: "Kurumsal Yazılım",
                    icon: <Building className="h-5 w-5" />,
                    description: "Şirketlere özel çözümler",
                  },
                ].map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setProjectType(type.id)}
                    className={`flex flex-col items-center justify-center p-4 rounded-lg border ${projectType === type.id ? "bg-corporate-blue/5 border-corporate-blue/20 text-corporate-blue" : "bg-white border-gray-200 text-gray-700 hover:bg-gray-50"} transition-all duration-300`}
                  >
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 ${projectType === type.id ? "bg-corporate-blue/10" : "bg-gray-100"}`}
                    >
                      {type.icon}
                    </div>
                    <span className="text-sm font-medium">{type.label}</span>
                    <span className="text-xs text-gray-500 mt-1">
                      {type.description}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Complexity */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-3 flex items-center">
                Proje Karmaşıklığı
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <HelpCircle className="h-4 w-4 ml-1.5 text-gray-400" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="w-64 text-sm">
                        Projenizin karmaşıklık seviyesi maliyeti etkiler
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  {
                    id: "simple",
                    label: "Basit",
                    icon: <Zap className="h-4 w-4 mr-1.5" />,
                    description: "Temel özellikler, standart tasarım",
                  },
                  {
                    id: "medium",
                    label: "Orta",
                    icon: <Zap className="h-4 w-4 mr-1.5" />,
                    description: "Özelleştirilmiş tasarım ve işlevsellik",
                  },
                  {
                    id: "complex",
                    label: "Karmaşık",
                    icon: <Zap className="h-4 w-4 mr-1.5" />,
                    description: "İleri düzey özellikler ve entegrasyonlar",
                  },
                ].map((level) => (
                  <button
                    key={level.id}
                    onClick={() => setComplexity(level.id)}
                    className={`py-3 px-3 rounded-lg border text-sm font-medium ${complexity === level.id ? "bg-corporate-blue/5 border-corporate-blue/20 text-corporate-blue" : "bg-white border-gray-200 text-gray-700 hover:bg-gray-50"} transition-all duration-300 flex flex-col items-center justify-center`}
                  >
                    <div className="flex items-center mb-1">
                      {level.icon}
                      {level.label}
                    </div>
                    <span className="text-xs text-gray-500">
                      {level.description}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Advanced Options - Only show in advanced mode */}
            {activeTab === "advanced" && (
              <>
                {/* Timeframe Selection */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-3 flex items-center">
                    Proje Süresi
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <HelpCircle className="h-4 w-4 ml-1.5 text-gray-400" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="w-64 text-sm">
                            Daha hızlı teslimat için ek maliyet gerekebilir
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      {
                        id: "flexible",
                        label: "Esnek",
                        icon: <Calendar className="h-4 w-4 mr-1.5" />,
                        description: timeframeDescriptions.flexible,
                        discount: "-10%",
                      },
                      {
                        id: "standard",
                        label: "Standart",
                        icon: <Clock className="h-4 w-4 mr-1.5" />,
                        description: timeframeDescriptions.standard,
                      },
                      {
                        id: "fast",
                        label: "Hızlı",
                        icon: <Zap className="h-4 w-4 mr-1.5" />,
                        description: timeframeDescriptions.fast,
                        premium: "+40%",
                      },
                    ].map((option) => (
                      <button
                        key={option.id}
                        onClick={() => setTimeframe(option.id)}
                        className={`py-3 px-3 rounded-lg border text-sm font-medium ${timeframe === option.id ? "bg-corporate-blue/5 border-corporate-blue/20 text-corporate-blue" : "bg-white border-gray-200 text-gray-700 hover:bg-gray-50"} transition-all duration-300 flex flex-col items-center justify-center relative`}
                      >
                        <div className="flex items-center mb-1">
                          {option.icon}
                          {option.label}
                        </div>
                        <span className="text-xs text-gray-500">
                          {option.description}
                        </span>

                        {/* Discount/Premium Badge */}
                        {option.discount && (
                          <Badge className="absolute -top-2 -right-2 bg-green-500">
                            {option.discount}
                          </Badge>
                        )}
                        {option.premium && (
                          <Badge className="absolute -top-2 -right-2 bg-amber-500">
                            {option.premium}
                          </Badge>
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Team Size Slider */}
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-3">
                    <label className="block text-sm font-medium text-gray-700 flex items-center">
                      Ekip Büyüklüğü
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <HelpCircle className="h-4 w-4 ml-1.5 text-gray-400" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="w-64 text-sm">
                              Daha büyük ekipler projeyi hızlandırır ancak
                              maliyeti artırır
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </label>
                    <div className="flex items-center bg-corporate-blue/5 px-3 py-1 rounded-full">
                      <Users className="h-4 w-4 text-corporate-blue mr-1.5" />
                      <span className="text-sm font-medium text-corporate-blue">
                        {teamSize} Kişi
                      </span>
                    </div>
                  </div>
                  <div className="px-2">
                    <Slider
                      value={[teamSize]}
                      min={1}
                      max={5}
                      step={1}
                      onValueChange={(value) => setTeamSize(value[0])}
                      className="my-4"
                    />
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>Minimum</span>
                      <span>Maksimum</span>
                    </div>
                  </div>
                </div>

                {/* Monthly Support Option */}
                <div className="mb-6">
                  <div
                    className={`p-4 rounded-lg border cursor-pointer ${monthlySupport ? "bg-corporate-blue/5 border-corporate-blue/20" : "bg-white border-gray-200 hover:bg-gray-50"} transition-all duration-300`}
                    onClick={() => setMonthlySupport(!monthlySupport)}
                  >
                    <div className="flex items-center">
                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 ${monthlySupport ? "bg-corporate-blue/10" : "bg-gray-100"}`}
                      >
                        {monthlySupport && (
                          <CheckCircle className="h-4 w-4 text-corporate-blue" />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center">
                          <span className="text-sm font-medium text-gray-700">
                            Aylık Bakım ve Destek
                          </span>
                          <Badge className="ml-2 bg-corporate-teal text-white">
                            Önerilen
                          </Badge>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">
                          Teknik destek, güvenlik güncellemeleri ve performans
                          iyileştirmeleri
                        </p>
                      </div>
                      <div className="text-sm font-medium text-corporate-blue">
                        +%10/yıl
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* Features */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3 flex items-center">
                İstediğiniz Özellikler
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <HelpCircle className="h-4 w-4 ml-1.5 text-gray-400" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="w-64 text-sm">
                        Projenize eklemek istediğiniz özellikleri seçin
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {featureOptions.map((feature) => (
                  <div
                    key={feature.id}
                    onClick={() => toggleFeature(feature.id)}
                    className={`flex items-center p-3 rounded-lg border cursor-pointer ${features.includes(feature.id) ? "bg-corporate-blue/5 border-corporate-blue/20" : "bg-white border-gray-200 hover:bg-gray-50"} transition-all duration-300`}
                  >
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 ${features.includes(feature.id) ? "bg-corporate-blue/10" : "bg-gray-100"}`}
                    >
                      {features.includes(feature.id) ? (
                        <CheckCircle className="h-4 w-4 text-corporate-blue" />
                      ) : null}
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-gray-700">
                        {feature.label}
                      </div>
                      <div className="text-xs text-gray-500">
                        {feature.description}
                      </div>
                    </div>
                    <div className="text-sm font-medium text-corporate-blue">
                      ${feature.cost.toLocaleString()}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Cost Estimate */}
          <div className="lg:col-span-5">
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 mb-6 sticky top-24">
              <h3 className="text-xl font-bold mb-4 text-gray-800 flex items-center">
                <DollarSign className="h-6 w-6 mr-2 text-corporate-blue" />
                Tahmini Maliyet
              </h3>

              <div className="text-5xl font-bold mb-4 text-corporate-blue">
                ${calculatedCost.toLocaleString()}
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Proje Türü:</span>
                  <span className="font-medium text-gray-800">
                    {
                      projectTypeLabels[
                        projectType as keyof typeof projectTypeLabels
                      ]
                    }
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Karmaşıklık:</span>
                  <span className="font-medium text-gray-800">
                    {
                      complexityLabels[
                        complexity as keyof typeof complexityLabels
                      ]
                    }
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Özellikler:</span>
                  <span className="font-medium text-gray-800">
                    {features.length} adet
                  </span>
                </div>

                {activeTab === "advanced" && (
                  <>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Teslimat Süresi:</span>
                      <span className="font-medium text-gray-800">
                        {
                          timeframeLabels[
                            timeframe as keyof typeof timeframeLabels
                          ]
                        }
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Ekip Büyüklüğü:</span>
                      <span className="font-medium text-gray-800">
                        {teamSize} Kişi
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Aylık Destek:</span>
                      <span className="font-medium text-gray-800">
                        {monthlySupport ? "Evet" : "Hayır"}
                      </span>
                    </div>
                  </>
                )}
              </div>

              <div className="pt-4 border-t border-gray-200">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 rounded-full bg-corporate-teal/10 flex items-center justify-center mr-3">
                    <Sparkles className="h-4 w-4 text-corporate-teal" />
                  </div>
                  <div className="text-sm">
                    <span className="font-medium text-gray-800">
                      Bu fiyata dahil:
                    </span>
                  </div>
                </div>

                <div className="space-y-2 mb-6">
                  <div className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-corporate-teal mr-2 mt-0.5" />
                    <span className="text-sm text-gray-600">
                      Ücretsiz teknik destek (30 gün)
                    </span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-corporate-teal mr-2 mt-0.5" />
                    <span className="text-sm text-gray-600">
                      Kaynak kodların teslimi
                    </span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-corporate-teal mr-2 mt-0.5" />
                    <span className="text-sm text-gray-600">
                      Detaylı dokümantasyon
                    </span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-corporate-teal mr-2 mt-0.5" />
                    <span className="text-sm text-gray-600">
                      Kullanım eğitimi
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col space-y-3">
                <Button className="bg-corporate-blue hover:bg-corporate-blue/90 text-white shadow-sm py-3 h-auto group">
                  <span className="flex items-center text-base font-medium">
                    Detaylı Teklif Alın
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
                <Button
                  variant="outline"
                  className="border-corporate-blue/30 text-corporate-blue hover:bg-corporate-blue/5 py-3 h-auto text-base"
                >
                  Danışmanlık Talep Edin
                </Button>
              </div>
            </div>

            <div className="bg-gradient-to-r from-corporate-blue/5 to-corporate-teal/5 p-5 rounded-xl border border-corporate-teal/10 shadow-sm">
              <div className="flex items-start">
                <div className="bg-corporate-teal/10 p-3 rounded-full mr-4 flex-shrink-0">
                  <Phone className="h-5 w-5 text-corporate-teal" />
                </div>
                <div>
                  <h4 className="text-base font-medium text-gray-800 mb-2">
                    Daha kesin bir fiyat mı istiyorsunuz?
                  </h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Uzman ekibimiz ihtiyaçlarınıza özel detaylı bir teklif
                    hazırlayabilir. 24 saat içinde size dönüş yapalım.
                  </p>
                  <Button
                    variant="link"
                    className="text-sm text-corporate-teal p-0 h-auto flex items-center group"
                  >
                    Bize ulaşın{" "}
                    <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceCalculator;
