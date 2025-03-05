import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Slider } from "./ui/slider";
import { Checkbox } from "./ui/checkbox";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { Badge } from "./ui/badge";
import {
  Calculator,
  Code,
  Smartphone,
  Globe,
  Clock,
  DollarSign,
  Calendar,
  Users,
  ArrowRight,
  CheckCircle,
  Rocket,
  Info,
  Zap,
  Layers,
  Database,
  ShoppingCart,
  FileText,
  HelpCircle,
  BarChart,
  Share2,
  Download,
  Mail,
} from "lucide-react";

interface ProjectFeature {
  id: string;
  name: string;
  description: string;
  price: number;
  icon: React.ReactNode;
}

interface ProjectTypeInfo {
  title: string;
  description: string;
  icon: React.ReactNode;
  basePrice: number;
  features: ProjectFeature[];
  color: string;
}

const QuickPriceCalculator = () => {
  const [projectTypes, setProjectTypes] = useState<string[]>(["website"]);
  const [complexity, setComplexity] = useState<number>(50);
  const [duration, setDuration] = useState<number>(3);
  // Ekip büyüklüğü artık otomatik hesaplanacak
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [showDetails, setShowDetails] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [showEmailInput, setShowEmailInput] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string>("website");

  // Project type information based on European and Turkish developer rates
  const projectTypeInfo: Record<string, ProjectTypeInfo> = {
    website: {
      title: "Website",
      description: "Kurumsal web sitesi, e-ticaret veya blog",
      icon: <Globe className="h-5 w-5" />,
      basePrice: 15000, // Adjusted based on Turkish market rates
      color: "corporate-teal",
      features: [
        {
          id: "responsive",
          name: "Responsive Tasarım",
          description: "Tüm cihazlarda uyumlu çalışan tasarım",
          price: 4500, // Adjusted based on UI/UX designer rates
          icon: <Smartphone className="h-4 w-4" />,
        },
        {
          id: "cms",
          name: "İçerik Yönetim Sistemi",
          description: "İçeriklerinizi kolayca yönetebileceğiniz panel",
          price: 6000, // Adjusted based on backend developer rates
          icon: <FileText className="h-4 w-4" />,
        },
        {
          id: "ecommerce",
          name: "E-Ticaret Özellikleri",
          description: "Ürün satışı ve ödeme sistemi entegrasyonu",
          price: 9500, // Adjusted based on specialized e-commerce developer rates
          icon: <ShoppingCart className="h-4 w-4" />,
        },
        {
          id: "seo",
          name: "SEO Optimizasyonu",
          description: "Arama motorlarında üst sıralarda yer alma",
          price: 3500, // Adjusted based on SEO specialist rates
          icon: <BarChart className="h-4 w-4" />,
        },
      ],
    },
    mobile: {
      title: "Mobil Uygulama",
      description: "iOS ve Android için native veya cross-platform uygulama",
      icon: <Smartphone className="h-5 w-5" />,
      basePrice: 22000, // Adjusted based on mobile developer rates
      color: "corporate-peach",
      features: [
        {
          id: "push",
          name: "Push Bildirimleri",
          description: "Kullanıcılara anlık bildirimler gönderme",
          price: 5500, // Adjusted based on specialized mobile features
          icon: <Bell className="h-4 w-4" />,
        },
        {
          id: "offline",
          name: "Çevrimdışı Çalışma",
          description: "İnternet olmadan da çalışabilen uygulama",
          price: 7000, // Adjusted based on data synchronization complexity
          icon: <Wifi className="h-4 w-4" />,
        },
        {
          id: "auth",
          name: "Kullanıcı Yönetimi",
          description: "Kayıt, giriş ve profil yönetimi",
          price: 6500, // Adjusted based on security implementation
          icon: <Users className="h-4 w-4" />,
        },
        {
          id: "payment",
          name: "Ödeme Entegrasyonu",
          description: "Uygulama içi satın alma ve abonelik",
          price: 8000, // Adjusted based on payment gateway integration complexity
          icon: <CreditCard className="h-4 w-4" />,
        },
      ],
    },
    custom: {
      title: "Özel Yazılım",
      description: "Kurumsal çözümler, ERP, CRM ve özel uygulamalar",
      icon: <Code className="h-5 w-5" />,
      basePrice: 35000, // Adjusted based on enterprise software developer rates
      color: "corporate-blue",
      features: [
        {
          id: "api",
          name: "API Entegrasyonu",
          description: "Diğer sistemlerle veri alışverişi",
          price: 9500, // Adjusted based on backend integration complexity
          icon: <Database className="h-4 w-4" />,
        },
        {
          id: "dashboard",
          name: "Yönetim Paneli",
          description: "Detaylı raporlar ve analitikler",
          price: 12000, // Adjusted based on data visualization specialist rates
          icon: <BarChart className="h-4 w-4" />,
        },
        {
          id: "automation",
          name: "İş Süreçleri Otomasyonu",
          description: "Tekrarlayan işlerin otomatikleştirilmesi",
          price: 15000, // Adjusted based on business process automation complexity
          icon: <Zap className="h-4 w-4" />,
        },
        {
          id: "security",
          name: "Gelişmiş Güvenlik",
          description: "Veri şifreleme ve güvenlik önlemleri",
          price: 11000, // Adjusted based on security specialist rates
          icon: <Shield className="h-4 w-4" />,
        },
      ],
    },
  };

  // Reset selected features when project types change
  useEffect(() => {
    setSelectedFeatures([]);
  }, [projectTypes]);

  // Toggle feature selection
  const toggleFeature = (projectType: string, featureId: string) => {
    const fullFeatureId = `${projectType}-${featureId}`;
    // Direct state update without setTimeout to ensure consistency
    setSelectedFeatures((prev) =>
      prev.includes(fullFeatureId)
        ? prev.filter((id) => id !== fullFeatureId)
        : [...prev, fullFeatureId],
    );
  };

  // Toggle project type selection
  const toggleProjectType = (type: string) => {
    setProjectTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type],
    );

    // If this is the first or only project type, set it as active tab
    if (
      !projectTypes.includes(type) &&
      (projectTypes.length === 0 ||
        (projectTypes.length === 1 && !projectTypes.includes(type)))
    ) {
      setActiveTab(type);
    }
  };

  // Calculate team size based on project types, features, and complexity
  const calculateTeamSize = () => {
    // Başlangıç ekip büyüklüğü
    let baseTeamSize = 1;

    // Proje türlerine göre ekip büyüklüğünü artır
    if (projectTypes.length > 1) {
      // Birden fazla proje türü seçilmişse ekibi büyüt
      baseTeamSize += projectTypes.length - 1;
    }

    // Seçilen özelliklerin sayısına göre ekip büyüklüğünü artır
    const featureCount = selectedFeatures.length;
    if (featureCount > 0) {
      // Her 2 özellik için ekibe 1 kişi ekle
      baseTeamSize += Math.floor(featureCount / 2);
    }

    // Karmaşıklık seviyesine göre ekip büyüklüğünü ayarla
    const complexityFactor = complexity / 100;
    baseTeamSize = baseTeamSize * (1 + complexityFactor * 0.5);

    // Proje süresine göre ekip büyüklüğünü ayarla (kısa projeler daha büyük ekip gerektirir)
    if (duration <= 2) {
      baseTeamSize *= 1.5; // Çok kısa projeler için ekibi büyüt
    } else if (duration <= 4) {
      baseTeamSize *= 1.2; // Kısa projeler için ekibi biraz büyüt
    } else if (duration >= 9) {
      baseTeamSize *= 0.8; // Uzun projeler için ekibi küçült
    }

    // Minimum ve maksimum ekip büyüklüğünü sınırla
    baseTeamSize = Math.max(1, Math.min(8, Math.round(baseTeamSize)));

    return baseTeamSize;
  };

  // Calculate estimated price based on inputs with European and Turkish developer rates
  const calculatePrice = () => {
    let basePrice = 0;
    let featurePrice = 0;

    // Calculate base price for all selected project types
    projectTypes.forEach((type) => {
      basePrice += projectTypeInfo[type].basePrice;
    });

    // Add feature prices
    featurePrice = selectedFeatures.reduce((total, featureId) => {
      // Extract project type from feature ID (format: "type-featureId")
      const [type, id] = featureId.split("-");
      const feature = projectTypeInfo[type].features.find((f) => f.id === id);
      return total + (feature ? feature.price : 0);
    }, 0);

    // Adjust for complexity (50% - 150% of base)
    // More complex projects require more senior developers with higher rates
    const complexityMultiplier = 0.5 + complexity / 100;

    // Ekip büyüklüğünü otomatik hesapla
    const calculatedTeamSize = calculateTeamSize();

    // Adjust for team size
    // Larger teams include specialists with varying rates
    // Junior developers: ~33,700 TL/month in Turkey, ~45,000 EUR/year in Europe
    // Mid-level developers: ~60,000 TL/month in Turkey, ~70,000 EUR/year in Europe
    // Senior developers: ~120,000 TL/month in Turkey, ~120,000 EUR/year in Europe
    // Team lead/architects: ~180,000 TL/month in Turkey, ~150,000+ EUR/year in Europe
    const teamSizeMultipliers = {
      1: 0.8, // Single developer (usually mid-level)
      2: 1.0, // Small team (mid-level + junior)
      3: 1.2, // Balanced team
      4: 1.4, // Standard team with specialists
      5: 1.6, // Larger team with senior members
      6: 1.8, // Comprehensive team with varied specialists
      7: 2.0, // Large team with senior specialists
      8: 2.2, // Full team with architects and specialists
    };
    const teamMultiplier =
      teamSizeMultipliers[calculatedTeamSize] || 0.8 + calculatedTeamSize * 0.2;

    // Duration affects total cost - shorter projects require more intensive work
    // and often more senior developers
    const durationMultiplier = duration <= 2 ? 1.2 : duration <= 6 ? 1.0 : 0.9;

    // Calculate final price
    const estimatedPrice =
      (basePrice + featurePrice) *
      complexityMultiplier *
      teamMultiplier *
      durationMultiplier;

    return Math.round(estimatedPrice);
  };

  const calculatedTeamSize = calculateTeamSize();
  const estimatedPrice = calculatePrice();
  const monthlyPrice = Math.round(estimatedPrice / duration);

  // Get complexity level text
  const getComplexityLevel = () => {
    if (complexity < 30) return "Basit";
    if (complexity < 70) return "Orta";
    return "Karmaşık";
  };

  // Handle email submission
  const handleSubmitEmail = () => {
    if (!email || !email.includes("@")) return;

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setShowEmailInput(false);
      alert(
        `Fiyat teklifi ${email} adresine gönderildi. En kısa sürede sizinle iletişime geçeceğiz.`,
      );
    }, 1500);
  };

  // Handle download PDF
  const handleDownloadPDF = () => {
    alert("Fiyat teklifi PDF olarak indiriliyor...");
    // In a real implementation, this would generate and download a PDF
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-2xl shadow-xl border border-corporate-blue/10 overflow-hidden relative">
      {/* Background gradient elements */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-corporate-teal/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-corporate-peach/10 rounded-full blur-3xl"></div>

      <div className="p-4 md:p-8 relative">
        {/* Header */}
        <div className="flex items-center mb-6">
          <div className="w-12 h-12 bg-corporate-blue/10 rounded-full flex items-center justify-center mr-4">
            <Calculator className="h-6 w-6 text-corporate-blue" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-corporate-blue">
              Hızlı Fiyat Hesaplama
            </h2>
            <p className="text-gray-600">
              Projeniz için yaklaşık maliyet hesaplayın
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 md:gap-8">
          {/* Calculator Form */}
          <div className="lg:col-span-3 space-y-6">
            {/* Project Type Selection */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <Label className="text-sm font-medium text-gray-700">
                  Proje Türü
                </Label>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-6 w-6 p-0 rounded-full"
                      >
                        <HelpCircle className="h-4 w-4 text-gray-400" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="w-60 text-xs">
                        Birden fazla proje türü seçebilirsiniz. Örneğin, hem web
                        sitesi hem de mobil uygulama istiyorsanız ikisini de
                        seçin.
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 mb-4">
                {Object.entries(projectTypeInfo).map(([key, type]) => {
                  const isActive = projectTypes.includes(key);
                  let bgColor = isActive
                    ? key === "website"
                      ? "bg-corporate-teal"
                      : key === "mobile"
                        ? "bg-corporate-peach"
                        : "bg-corporate-blue"
                    : "bg-gray-100";
                  let textColor = isActive ? "text-white" : "text-gray-700";

                  return (
                    <div
                      key={key}
                      onClick={() => toggleProjectType(key)}
                      className={`${bgColor} ${textColor} rounded-xl p-4 cursor-pointer transition-all duration-200 hover:shadow-md flex flex-col items-center text-center`}
                    >
                      <div
                        className={`w-10 h-10 rounded-full ${isActive ? "bg-white/20" : "bg-white"} flex items-center justify-center mb-2`}
                      >
                        {type.icon}
                      </div>
                      <span className="font-medium">{type.title}</span>
                      <span className="text-xs mt-1 opacity-80">
                        {type.basePrice.toLocaleString("tr-TR")} ₺
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="mt-3 text-sm text-gray-600 bg-white/50 p-4 rounded-lg border border-corporate-blue/10">
                <div className="flex items-center mb-2">
                  <Info className="h-4 w-4 text-corporate-blue mr-2" />
                  <p className="font-medium">Seçilen Proje Türleri:</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {projectTypes.length === 0 ? (
                    <p className="text-gray-500 italic">
                      Lütfen en az bir proje türü seçin
                    </p>
                  ) : (
                    projectTypes.map((type) => {
                      const bgColor =
                        type === "website"
                          ? "bg-corporate-teal/10"
                          : type === "mobile"
                            ? "bg-corporate-peach/10"
                            : "bg-corporate-blue/10";
                      const textColor =
                        type === "website"
                          ? "text-corporate-teal"
                          : type === "mobile"
                            ? "text-corporate-peach"
                            : "text-corporate-blue";
                      const hoverBg =
                        type === "website"
                          ? "hover:bg-corporate-teal/20"
                          : type === "mobile"
                            ? "hover:bg-corporate-peach/20"
                            : "hover:bg-corporate-blue/20";

                      return (
                        <Badge
                          key={type}
                          className={`${bgColor} ${textColor} ${hoverBg} px-3 py-1 cursor-pointer`}
                          onClick={() => setActiveTab(type)}
                        >
                          {projectTypeInfo[type].title}
                        </Badge>
                      );
                    })
                  )}
                </div>
              </div>
            </div>

            {/* Project Features */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <Label className="text-sm font-medium text-gray-700">
                  Proje Özellikleri
                </Label>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-6 w-6 p-0 rounded-full"
                      >
                        <HelpCircle className="h-4 w-4 text-gray-400" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="w-60 text-xs">
                        Projenize eklemek istediğiniz özellikleri seçin. Her
                        özellik fiyatı etkiler.
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>

              {projectTypes.length === 0 ? (
                <div className="p-4 text-center bg-gray-50 rounded-lg border border-gray-200">
                  <p className="text-gray-500">
                    Lütfen önce bir proje türü seçin
                  </p>
                </div>
              ) : (
                <div className="space-y-6">
                  <Tabs
                    defaultValue={projectTypes[0]}
                    value={activeTab}
                    onValueChange={setActiveTab}
                    className="w-full"
                  >
                    <TabsList className="w-full mb-4 bg-gray-100 p-1 rounded-lg">
                      {projectTypes.map((type) => {
                        const bgColor =
                          type === "website"
                            ? "bg-corporate-teal/10"
                            : type === "mobile"
                              ? "bg-corporate-peach/10"
                              : "bg-corporate-blue/10";
                        const textColor =
                          type === "website"
                            ? "text-corporate-teal"
                            : type === "mobile"
                              ? "text-corporate-peach"
                              : "text-corporate-blue";

                        return (
                          <TabsTrigger
                            key={type}
                            value={type}
                            className={`data-[state=active]:${bgColor} data-[state=active]:${textColor} data-[state=active]:shadow-sm rounded-md transition-all duration-200`}
                          >
                            <div className="flex items-center space-x-2">
                              <div
                                className={`w-5 h-5 rounded-full ${bgColor} flex items-center justify-center`}
                              >
                                {projectTypeInfo[type].icon}
                              </div>
                              <span>{projectTypeInfo[type].title}</span>
                            </div>
                          </TabsTrigger>
                        );
                      })}
                    </TabsList>

                    {projectTypes.map((type) => (
                      <TabsContent key={type} value={type} className="mt-0">
                        <div className="border border-gray-200 rounded-lg p-5 relative">
                          <div className="flex items-center mb-5">
                            <div
                              className={`w-8 h-8 rounded-full ${type === "website" ? "bg-corporate-teal/10" : type === "mobile" ? "bg-corporate-peach/10" : "bg-corporate-blue/10"} flex items-center justify-center mr-3`}
                            >
                              {projectTypeInfo[type].icon}
                            </div>
                            <h3 className="font-medium text-corporate-blue">
                              {projectTypeInfo[type].title} Özellikleri
                            </h3>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 max-h-[400px] overflow-y-auto pr-2 pb-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
                            {projectTypeInfo[type].features.map((feature) => {
                              const fullFeatureId = `${type}-${feature.id}`;
                              const isSelected =
                                selectedFeatures.includes(fullFeatureId);
                              const bgColor =
                                type === "website"
                                  ? "bg-corporate-teal/5"
                                  : type === "mobile"
                                    ? "bg-corporate-peach/5"
                                    : "bg-corporate-blue/5";
                              const borderColor =
                                type === "website"
                                  ? "border-corporate-teal"
                                  : type === "mobile"
                                    ? "border-corporate-peach"
                                    : "border-corporate-blue";
                              const textColor =
                                type === "website"
                                  ? "text-corporate-teal"
                                  : type === "mobile"
                                    ? "text-corporate-peach"
                                    : "text-corporate-blue";

                              return (
                                <div
                                  key={fullFeatureId}
                                  onClick={() =>
                                    toggleFeature(type, feature.id)
                                  }
                                  className={`p-4 rounded-lg border relative ${isSelected ? `${borderColor} ${bgColor}` : "border-gray-200 hover:border-gray-300"} transition-all cursor-pointer`}
                                >
                                  <div className="flex flex-col mb-2">
                                    <div className="flex items-center">
                                      <div
                                        className={`w-8 h-8 rounded-full ${isSelected ? bgColor : "bg-gray-100"} flex items-center justify-center mr-3 flex-shrink-0`}
                                      >
                                        {feature.icon}
                                      </div>
                                      <span className="font-medium text-gray-800">
                                        {feature.name}
                                      </span>
                                    </div>
                                    <div className="mt-2 ml-11">
                                      <Badge
                                        variant="outline"
                                        className={`${textColor} ${borderColor}/30 whitespace-nowrap`}
                                      >
                                        +{feature.price.toLocaleString("tr-TR")}{" "}
                                        ₺
                                      </Badge>
                                    </div>
                                  </div>
                                  <p className="text-xs text-gray-500 ml-11">
                                    {feature.description}
                                  </p>
                                  {isSelected && (
                                    <div className="absolute top-3 right-3">
                                      <CheckCircle
                                        className={`h-5 w-5 ${textColor}`}
                                      />
                                    </div>
                                  )}
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </TabsContent>
                    ))}
                  </Tabs>
                </div>
              )}
            </div>

            {/* Complexity Buttons */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <Label className="text-sm font-medium text-gray-700 flex items-center">
                  Proje Karmaşıklığı
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-6 w-6 p-0 rounded-full ml-1"
                        >
                          <Info className="h-4 w-4 text-gray-400" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="w-60 text-xs">
                          Projenizin karmaşıklık seviyesi fiyatı doğrudan
                          etkiler. Basit projeler daha az, karmaşık projeler
                          daha fazla kaynak gerektirir.
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Label>
                <span className="text-sm bg-gray-100 px-2 py-0.5 rounded-full text-gray-700 font-medium">
                  {getComplexityLevel()} ({complexity}%)
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 mb-2">
                <Button
                  type="button"
                  variant={complexity < 30 ? "default" : "outline"}
                  className={`py-3 ${complexity < 30 ? "bg-corporate-teal hover:bg-corporate-teal/90" : "border-corporate-teal/30 text-corporate-teal hover:bg-corporate-teal/10"}`}
                  onClick={() => setComplexity(25)}
                >
                  <div className="flex flex-col items-center">
                    <span className="font-medium">Basit</span>
                    <span className="text-xs opacity-80">25%</span>
                  </div>
                </Button>
                <Button
                  type="button"
                  variant={
                    complexity >= 30 && complexity < 70 ? "default" : "outline"
                  }
                  className={`py-3 ${complexity >= 30 && complexity < 70 ? "bg-corporate-blue hover:bg-corporate-blue/90" : "border-corporate-blue/30 text-corporate-blue hover:bg-corporate-blue/10"}`}
                  onClick={() => setComplexity(50)}
                >
                  <div className="flex flex-col items-center">
                    <span className="font-medium">Orta</span>
                    <span className="text-xs opacity-80">50%</span>
                  </div>
                </Button>
                <Button
                  type="button"
                  variant={complexity >= 70 ? "default" : "outline"}
                  className={`py-3 ${complexity >= 70 ? "bg-corporate-peach hover:bg-corporate-peach/90" : "border-corporate-peach/30 text-corporate-peach hover:bg-corporate-peach/10"}`}
                  onClick={() => setComplexity(85)}
                >
                  <div className="flex flex-col items-center">
                    <span className="font-medium">Karmaşık</span>
                    <span className="text-xs opacity-80">85%</span>
                  </div>
                </Button>
              </div>
            </div>

            {/* Duration Buttons */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <Label className="text-sm font-medium text-gray-700 flex items-center">
                  Proje Süresi (Ay)
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-6 w-6 p-0 rounded-full ml-1"
                        >
                          <Info className="h-4 w-4 text-gray-400" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="w-60 text-xs">
                          Projenin tamamlanması için öngörülen süre. Bu süre
                          aylık ödeme planınızı etkiler.
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Label>
                <span className="text-sm bg-gray-100 px-2 py-0.5 rounded-full text-gray-700 font-medium">
                  {duration} ay
                </span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-2">
                {[1, 3, 6, 12].map((months) => (
                  <Button
                    key={months}
                    type="button"
                    variant={duration === months ? "default" : "outline"}
                    className={`py-2 ${duration === months ? "bg-corporate-blue hover:bg-corporate-blue/90" : "border-corporate-blue/30 text-corporate-blue hover:bg-corporate-blue/10"}`}
                    onClick={() => setDuration(months)}
                  >
                    <div className="flex items-center justify-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      <span>
                        {months} {months === 1 ? "ay" : "ay"}
                      </span>
                    </div>
                  </Button>
                ))}
              </div>
            </div>

            {/* Ekip büyüklüğü bilgisi - Otomatik hesaplanıyor */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <Label className="text-sm font-medium text-gray-700 flex items-center">
                  Ekip Büyüklüğü
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-6 w-6 p-0 rounded-full ml-1"
                        >
                          <Info className="h-4 w-4 text-gray-400" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="w-60 text-xs">
                          Projenizde çalışacak geliştirici sayısı, seçtiğiniz
                          proje türü, özellikleri ve karmaşıklığına göre
                          otomatik olarak hesaplanır.
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Label>
                <div className="flex items-center">
                  <Badge className="bg-corporate-teal/10 text-corporate-teal">
                    <Users className="h-3 w-3 mr-1" />
                    <span>Otomatik Hesaplanıyor</span>
                  </Badge>
                </div>
              </div>
              <div className="p-4 bg-corporate-teal/5 rounded-lg border border-corporate-teal/20">
                <div className="flex items-center">
                  <Info className="h-4 w-4 text-corporate-teal mr-2" />
                  <p className="text-sm text-gray-600">
                    Ekip büyüklüğü, seçtiğiniz proje türü, özellikleri ve
                    karmaşıklık seviyesine göre otomatik olarak belirlenir. Daha
                    karmaşık projeler ve daha fazla özellik, daha büyük bir ekip
                    gerektirir.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Price Display */}
          <div className="lg:col-span-2">
            <div className="bg-corporate-blue/5 p-6 rounded-xl border border-corporate-blue/10 h-full flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-semibold text-corporate-blue">
                    Tahmini Fiyat
                  </h3>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-xs text-corporate-blue hover:text-corporate-blue/80 p-0 h-auto"
                    onClick={() => setShowDetails(!showDetails)}
                  >
                    {showDetails ? "Detayları Gizle" : "Detayları Göster"}
                  </Button>
                </div>

                {showDetails && (
                  <div className="space-y-3 mb-6 bg-white p-4 rounded-lg border border-gray-200">
                    <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                      <span className="text-sm text-gray-600">Temel Fiyat</span>
                      <div className="space-y-1 flex flex-col items-end">
                        {projectTypes.map((type) => {
                          const textColor =
                            type === "website"
                              ? "text-corporate-teal"
                              : type === "mobile"
                                ? "text-corporate-peach"
                                : "text-corporate-blue";

                          return (
                            <div
                              key={type}
                              className="flex justify-between text-sm w-full"
                            >
                              <span className={`${textColor} mr-3`}>
                                {projectTypeInfo[type].title}:
                              </span>
                              <span className="font-medium">
                                {projectTypeInfo[type].basePrice.toLocaleString(
                                  "tr-TR",
                                )}{" "}
                                ₺
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {selectedFeatures.length > 0 && (
                      <div className="space-y-2 pb-2 border-b border-gray-100">
                        <span className="text-sm text-gray-600 block">
                          Ek Özellikler
                        </span>
                        {selectedFeatures.map((fullFeatureId) => {
                          const [type, featureId] = fullFeatureId.split("-");
                          const feature = projectTypeInfo[type].features.find(
                            (f) => f.id === featureId,
                          );
                          const textColor =
                            type === "website"
                              ? "text-corporate-teal"
                              : type === "mobile"
                                ? "text-corporate-peach"
                                : "text-corporate-blue";

                          return feature ? (
                            <div
                              key={fullFeatureId}
                              className="flex justify-between items-center text-xs pl-2"
                            >
                              <div className="truncate max-w-[150px]">
                                <span className={textColor}>
                                  {projectTypeInfo[type].title}: {feature.name}
                                </span>
                              </div>
                              <span className="text-gray-700 ml-2 flex-shrink-0">
                                +{feature.price.toLocaleString("tr-TR")} ₺
                              </span>
                            </div>
                          ) : null;
                        })}
                      </div>
                    )}

                    <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                      <span className="text-sm text-gray-600">
                        Karmaşıklık Çarpanı
                      </span>
                      <span className="font-medium text-sm">
                        x{(0.5 + complexity / 100).toFixed(2)}
                      </span>
                    </div>

                    <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                      <span className="text-sm text-gray-600">
                        Ekip Büyüklüğü Çarpanı
                      </span>
                      <span className="font-medium text-sm">
                        x
                        {calculatedTeamSize <= 8
                          ? (0.8 + calculatedTeamSize * 0.2).toFixed(2)
                          : "2.20"}
                      </span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">
                        Süre Çarpanı
                      </span>
                      <span className="font-medium text-sm">
                        x
                        {(duration <= 2
                          ? 1.2
                          : duration <= 6
                            ? 1.0
                            : 0.9
                        ).toFixed(2)}
                      </span>
                    </div>

                    <div className="mt-3 pt-2 border-t border-gray-100">
                      <div className="flex items-center">
                        <Info className="h-4 w-4 text-corporate-blue mr-2" />
                        <span className="text-xs text-gray-500">
                          Fiyatlar, Türkiye ve Avrupa'daki yazılımcı ve
                          tasarımcı ücretleri baz alınarak hesaplanmıştır.
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                    <div className="flex items-center">
                      <Layers className="h-4 w-4 text-corporate-teal mr-2" />
                      <span className="text-gray-600 ml-2">Proje Türü</span>
                    </div>
                    <div className="flex flex-wrap gap-1 justify-end max-w-[50%]">
                      {projectTypes.map((type) => {
                        const bgColor =
                          type === "website"
                            ? "bg-corporate-teal/5"
                            : type === "mobile"
                              ? "bg-corporate-peach/5"
                              : "bg-corporate-blue/5";
                        const textColor =
                          type === "website"
                            ? "text-corporate-teal"
                            : type === "mobile"
                              ? "text-corporate-peach"
                              : "text-corporate-blue";

                        return (
                          <Badge
                            key={type}
                            variant="outline"
                            className={`${bgColor} ${textColor} text-xs`}
                          >
                            {projectTypeInfo[type].title}
                          </Badge>
                        );
                      })}
                    </div>
                  </div>

                  <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 text-corporate-teal mr-2" />
                      <span className="text-gray-600">Süre</span>
                    </div>
                    <span className="font-medium">{duration} ay</span>
                  </div>

                  <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                    <div className="flex items-center">
                      <Users className="h-4 w-4 text-corporate-teal mr-2" />
                      <span className="text-gray-600">Ekip</span>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="h-5 w-5 p-0 rounded-full ml-1"
                            >
                              <Info className="h-3 w-3 text-gray-400" />
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="w-60 text-xs">
                              Ekip büyüklüğü, seçtiğiniz proje türü, özellikleri
                              ve karmaşıklık seviyesine göre otomatik olarak
                              belirlenir. Daha karmaşık projeler ve daha fazla
                              özellik, daha büyük bir ekip gerektirir.
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                    <span className="font-medium">
                      {calculatedTeamSize} kişi
                    </span>
                  </div>

                  {selectedFeatures.length > 0 && (
                    <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                      <div className="flex items-center">
                        <Layers className="h-4 w-4 text-corporate-teal mr-2" />
                        <span className="text-gray-600">Özellikler</span>
                      </div>
                      <div className="flex flex-wrap gap-1 justify-end">
                        {projectTypes.map((type) => {
                          const typeFeatures = selectedFeatures.filter((f) =>
                            f.startsWith(`${type}-`),
                          );
                          if (typeFeatures.length === 0) return null;

                          const bgColor =
                            type === "website"
                              ? "bg-corporate-teal/10"
                              : type === "mobile"
                                ? "bg-corporate-peach/10"
                                : "bg-corporate-blue/10";
                          const textColor =
                            type === "website"
                              ? "text-corporate-teal"
                              : type === "mobile"
                                ? "text-corporate-peach"
                                : "text-corporate-blue";

                          return (
                            <Badge
                              key={type}
                              className={`${bgColor} ${textColor} text-xs`}
                            >
                              {projectTypeInfo[type].title}:{" "}
                              {typeFeatures.length}
                            </Badge>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>

                <div className="bg-white p-4 rounded-lg border border-corporate-teal/20 mb-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Toplam Tutar</span>
                    <div className="text-2xl font-bold text-corporate-blue">
                      {estimatedPrice.toLocaleString("tr-TR")} ₺
                    </div>
                  </div>
                  <div className="flex justify-between items-center mt-2 text-sm">
                    <span className="text-gray-500">Aylık Ödeme</span>
                    <div className="font-medium text-corporate-teal">
                      {monthlyPrice.toLocaleString("tr-TR")} ₺ / ay
                    </div>
                  </div>
                </div>

                {/* Share options */}
                <div className="flex justify-between mb-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-xs flex items-center gap-1 h-8"
                    onClick={handleDownloadPDF}
                  >
                    <Download className="h-3 w-3" />
                    PDF İndir
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-xs flex items-center gap-1 h-8"
                    onClick={() => setShowEmailInput(!showEmailInput)}
                  >
                    <Mail className="h-3 w-3" />
                    E-posta ile Gönder
                  </Button>
                </div>

                {showEmailInput && (
                  <div className="mb-4 flex gap-2">
                    <Input
                      type="email"
                      placeholder="E-posta adresiniz"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="h-9 text-sm"
                    />
                    <Button
                      size="sm"
                      className="h-9 bg-corporate-teal hover:bg-corporate-teal/90"
                      onClick={handleSubmitEmail}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Gönderiliyor..." : "Gönder"}
                    </Button>
                  </div>
                )}
              </div>

              <div className="mt-4">
                <Button className="w-full bg-gradient-to-r from-corporate-teal to-corporate-teal/80 hover:from-corporate-teal/90 hover:to-corporate-teal/70 text-white py-6 h-auto text-base font-semibold rounded-xl shadow-lg shadow-corporate-teal/20 group">
                  <span className="flex items-center">
                    Ücretsiz Danışmanlık Alın
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>

                <div className="flex items-center justify-center mt-4 text-xs text-gray-500">
                  <CheckCircle className="h-3 w-3 text-corporate-teal mr-1" />
                  <span>
                    Bu bir tahmini fiyattır, kesin fiyat için danışmanlık alın
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Additional icons for features
const Bell = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
    <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
  </svg>
);

const Wifi = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M5 13a10 10 0 0 1 14 0" />
    <path d="M8.5 16.5a5 5 0 0 1 7 0" />
    <path d="M2 8.82a15 15 0 0 1 20 0" />
    <line x1="12" x2="12.01" y1="20" y2="20" />
  </svg>
);

const CreditCard = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="14" x="2" y="5" rx="2" />
    <line x1="2" x2="22" y1="10" y2="10" />
  </svg>
);

const Shield = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
  </svg>
);

export default QuickPriceCalculator;
