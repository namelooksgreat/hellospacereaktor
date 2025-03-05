import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { Separator } from "./ui/separator";
import {
  ArrowRight,
  Code,
  Search,
  Filter,
  Star,
  CheckCircle,
  Clock,
  DollarSign,
  Globe,
  Zap,
  Shield,
  Users,
  Briefcase,
  ChevronRight,
  MessageCircle,
  Laptop,
  Sparkles,
  Award,
  Rocket,
  FileCode,
  Layout,
  PenTool,
  Cpu,
  Layers,
} from "lucide-react";

const FrontendDevelopers = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFrameworks, setSelectedFrameworks] = useState<string[]>([]);
  const [selectedExperience, setSelectedExperience] = useState<string[]>([]);
  const [selectedAvailability, setSelectedAvailability] = useState<string[]>(
    [],
  );

  // Sample developer data
  const developers = [
    {
      id: 1,
      name: "Ahmet Yılmaz",
      title: "Senior React Developer",
      rating: 4.9,
      hourlyRate: "$45-60",
      experience: "8 yıl",
      availability: "Tam zamanlı",
      location: "İstanbul, Türkiye",
      skills: ["React", "TypeScript", "Next.js", "Redux", "Tailwind CSS"],
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=dev1",
      description:
        "8 yıllık deneyime sahip, performans odaklı React geliştirici. E-ticaret ve fintech projelerinde uzmanlık.",
    },
    {
      id: 2,
      name: "Zeynep Kaya",
      title: "Vue.js & Nuxt Specialist",
      rating: 4.8,
      hourlyRate: "$40-55",
      experience: "6 yıl",
      availability: "Yarı zamanlı",
      location: "Ankara, Türkiye",
      skills: ["Vue.js", "Nuxt.js", "JavaScript", "SCSS", "Vuex"],
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=dev2",
      description:
        "Vue.js ekosisteminde uzmanlaşmış, kullanıcı deneyimine odaklanan frontend geliştirici. SPA ve PWA konularında deneyimli.",
    },
    {
      id: 3,
      name: "Mehmet Demir",
      title: "Angular Expert",
      rating: 4.7,
      hourlyRate: "$50-65",
      experience: "7 yıl",
      availability: "Tam zamanlı",
      location: "İzmir, Türkiye",
      skills: ["Angular", "TypeScript", "RxJS", "NgRx", "Material UI"],
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=dev3",
      description:
        "Kurumsal uygulamalar için Angular çözümleri geliştiren, test odaklı çalışan deneyimli geliştirici.",
    },
    {
      id: 4,
      name: "Ayşe Şahin",
      title: "Frontend Developer & UI Designer",
      rating: 4.9,
      hourlyRate: "$35-50",
      experience: "5 yıl",
      availability: "Proje bazlı",
      location: "Antalya, Türkiye",
      skills: ["React", "Figma", "UI/UX", "CSS Animation", "Styled Components"],
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=dev4",
      description:
        "Tasarım odaklı frontend geliştirici. Kullanıcı arayüzü tasarımı ve geliştirmesi konusunda çift yönlü uzmanlık.",
    },
    {
      id: 5,
      name: "Can Özkan",
      title: "JavaScript & React Native Developer",
      rating: 4.6,
      hourlyRate: "$40-55",
      experience: "4 yıl",
      availability: "Tam zamanlı",
      location: "Bursa, Türkiye",
      skills: ["JavaScript", "React", "React Native", "Redux", "Firebase"],
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=dev5",
      description:
        "Web ve mobil uygulamalar için cross-platform çözümler geliştiren, React ve React Native uzmanı.",
    },
    {
      id: 6,
      name: "Elif Yıldız",
      title: "Frontend Performance Specialist",
      rating: 4.8,
      hourlyRate: "$45-60",
      experience: "6 yıl",
      availability: "Yarı zamanlı",
      location: "İstanbul, Türkiye",
      skills: ["JavaScript", "Web Performance", "Webpack", "React", "PWA"],
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=dev6",
      description:
        "Web performansı ve optimizasyon konusunda uzmanlaşmış, hızlı ve verimli frontend uygulamaları geliştiren yazılımcı.",
    },
  ];

  // Filter developers based on search and filters
  const filteredDevelopers = developers.filter((dev) => {
    // Search filter
    if (
      searchQuery &&
      !dev.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !dev.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !dev.skills.some((skill) =>
        skill.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    ) {
      return false;
    }

    // Framework/library filter
    if (
      selectedFrameworks.length > 0 &&
      !dev.skills.some((skill) => selectedFrameworks.includes(skill))
    ) {
      return false;
    }

    // Experience filter
    if (selectedExperience.length > 0) {
      const years = parseInt(dev.experience.split(" ")[0]);
      if (
        selectedExperience.includes("0-2") &&
        (years < 0 || years > 2) &&
        selectedExperience.includes("3-5") &&
        (years < 3 || years > 5) &&
        selectedExperience.includes("6-8") &&
        (years < 6 || years > 8) &&
        selectedExperience.includes("8+") &&
        years < 8
      ) {
        return false;
      }
    }

    // Availability filter
    if (
      selectedAvailability.length > 0 &&
      !selectedAvailability.includes(dev.availability)
    ) {
      return false;
    }

    return true;
  });

  // Handle framework/library filter change
  const handleFrameworkChange = (framework: string) => {
    setSelectedFrameworks((prev) =>
      prev.includes(framework)
        ? prev.filter((f) => f !== framework)
        : [...prev, framework],
    );
  };

  // Handle experience filter change
  const handleExperienceChange = (experience: string) => {
    setSelectedExperience((prev) =>
      prev.includes(experience)
        ? prev.filter((e) => e !== experience)
        : [...prev, experience],
    );
  };

  // Handle availability filter change
  const handleAvailabilityChange = (availability: string) => {
    setSelectedAvailability((prev) =>
      prev.includes(availability)
        ? prev.filter((a) => a !== availability)
        : [...prev, availability],
    );
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-corporate-blue overflow-hidden">
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
            <Code className="h-5 w-5 text-corporate-peach mr-2" />
            <span className="text-sm font-medium text-corporate-cream">
              Frontend Developers
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
            Projeniz İçin{" "}
            <span className="text-corporate-teal">
              Uzman Frontend Geliştiriciler
            </span>{" "}
            Bulun
          </h1>
          <p className="text-xl text-corporate-cream/90 mb-8 max-w-3xl mx-auto">
            Hellospace'in AI destekli eşleştirme sistemi ile projenize en uygun
            frontend geliştiricileri bulun. React, Vue.js, Angular ve daha
            fazlası için uzman yazılımcılarla çalışın.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-6 text-corporate-cream mb-8">
            <div className="flex items-center bg-white/10 px-5 py-2.5 rounded-full border border-white/20 backdrop-blur-sm">
              <CheckCircle className="h-5 w-5 text-corporate-peach mr-2.5" />
              <span className="font-medium">%100 Yetenek Garantisi</span>
            </div>
            <div className="flex items-center bg-white/10 px-5 py-2.5 rounded-full border border-white/20 backdrop-blur-sm">
              <Users className="h-5 w-5 text-corporate-teal mr-2.5" />
              <span className="font-medium">1,500+ Frontend Uzmanı</span>
            </div>
            <div className="flex items-center bg-white/10 px-5 py-2.5 rounded-full border border-white/20 backdrop-blur-sm">
              <Star className="h-5 w-5 text-corporate-peach mr-2.5" />
              <span className="font-medium">%98 Müşteri Memnuniyeti</span>
            </div>
          </div>

          {/* Search Bar */}
          <div className="max-w-3xl mx-auto relative">
            <div className="flex items-center bg-white rounded-full shadow-lg overflow-hidden">
              <div className="flex-grow flex items-center px-4">
                <Search className="h-5 w-5 text-gray-400 mr-2" />
                <input
                  type="text"
                  placeholder="React, Vue.js, Angular uzmanı ara..."
                  className="w-full py-4 px-2 text-gray-700 focus:outline-none"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button className="h-full px-8 rounded-none bg-corporate-teal hover:bg-corporate-teal/90 text-white">
                <span className="flex items-center">
                  Ara
                  <ArrowRight className="ml-2 h-5 w-5" />
                </span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 sticky top-24">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-bold text-corporate-blue flex items-center">
                    <Filter className="h-5 w-5 mr-2 text-corporate-teal" />
                    Filtreler
                  </h3>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-sm text-corporate-blue hover:text-corporate-teal"
                    onClick={() => {
                      setSelectedFrameworks([]);
                      setSelectedExperience([]);
                      setSelectedAvailability([]);
                    }}
                  >
                    Temizle
                  </Button>
                </div>

                {/* Framework/Library Filter */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-3">
                    Framework / Kütüphane
                  </h4>
                  <div className="space-y-2">
                    {[
                      "React",
                      "Vue.js",
                      "Angular",
                      "TypeScript",
                      "JavaScript",
                    ].map((framework) => (
                      <div key={framework} className="flex items-center">
                        <Checkbox
                          id={`framework-${framework}`}
                          checked={selectedFrameworks.includes(framework)}
                          onCheckedChange={() =>
                            handleFrameworkChange(framework)
                          }
                          className="data-[state=checked]:bg-corporate-teal data-[state=checked]:border-corporate-teal"
                        />
                        <Label
                          htmlFor={`framework-${framework}`}
                          className="ml-2 text-sm font-medium text-gray-700 cursor-pointer"
                        >
                          {framework}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Experience Filter */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-3">
                    Deneyim
                  </h4>
                  <div className="space-y-2">
                    {[
                      { id: "0-2", label: "0-2 yıl" },
                      { id: "3-5", label: "3-5 yıl" },
                      { id: "6-8", label: "6-8 yıl" },
                      { id: "8+", label: "8+ yıl" },
                    ].map((exp) => (
                      <div key={exp.id} className="flex items-center">
                        <Checkbox
                          id={`exp-${exp.id}`}
                          checked={selectedExperience.includes(exp.id)}
                          onCheckedChange={() => handleExperienceChange(exp.id)}
                          className="data-[state=checked]:bg-corporate-teal data-[state=checked]:border-corporate-teal"
                        />
                        <Label
                          htmlFor={`exp-${exp.id}`}
                          className="ml-2 text-sm font-medium text-gray-700 cursor-pointer"
                        >
                          {exp.label}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Availability Filter */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-3">
                    Çalışma Şekli
                  </h4>
                  <div className="space-y-2">
                    {[
                      "Tam zamanlı",
                      "Yarı zamanlı",
                      "Proje bazlı",
                      "Saat bazlı",
                    ].map((availability) => (
                      <div key={availability} className="flex items-center">
                        <Checkbox
                          id={`availability-${availability}`}
                          checked={selectedAvailability.includes(availability)}
                          onCheckedChange={() =>
                            handleAvailabilityChange(availability)
                          }
                          className="data-[state=checked]:bg-corporate-teal data-[state=checked]:border-corporate-teal"
                        />
                        <Label
                          htmlFor={`availability-${availability}`}
                          className="ml-2 text-sm font-medium text-gray-700 cursor-pointer"
                        >
                          {availability}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-8 p-4 bg-corporate-blue/5 rounded-lg border border-corporate-blue/10">
                  <h4 className="text-corporate-blue font-semibold mb-2 flex items-center">
                    <Sparkles className="h-4 w-4 mr-2 text-corporate-teal" />
                    Özel Eşleştirme
                  </h4>
                  <p className="text-sm text-gray-600 mb-4">
                    Projenize özel gereksinimleriniz mi var? Size en uygun
                    frontend geliştiricileri bulalım.
                  </p>
                  <Button className="w-full bg-corporate-blue hover:bg-corporate-blue/90">
                    Ücretsiz Danışmanlık Alın
                  </Button>
                </div>
              </div>
            </div>

            {/* Developers Grid */}
            <div className="lg:col-span-3">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-corporate-blue mb-2">
                  Frontend Geliştiriciler
                </h2>
                <p className="text-gray-600">
                  {filteredDevelopers.length} uzman geliştirici bulundu
                </p>
              </div>

              {/* Tabs */}
              <Tabs defaultValue="all" className="mb-8">
                <TabsList className="bg-gray-100">
                  <TabsTrigger value="all">Tümü</TabsTrigger>
                  <TabsTrigger value="react">React</TabsTrigger>
                  <TabsTrigger value="vue">Vue.js</TabsTrigger>
                  <TabsTrigger value="angular">Angular</TabsTrigger>
                  <TabsTrigger value="javascript">JavaScript</TabsTrigger>
                </TabsList>
                <TabsContent value="all">
                  {/* All developers content */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredDevelopers.map((developer) => (
                      <DeveloperCard key={developer.id} developer={developer} />
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="react">
                  {/* React developers content */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredDevelopers
                      .filter((dev) =>
                        dev.skills.some(
                          (skill) =>
                            skill === "React" || skill.includes("React"),
                        ),
                      )
                      .map((developer) => (
                        <DeveloperCard
                          key={developer.id}
                          developer={developer}
                        />
                      ))}
                  </div>
                </TabsContent>
                <TabsContent value="vue">
                  {/* Vue.js developers content */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredDevelopers
                      .filter((dev) =>
                        dev.skills.some(
                          (skill) =>
                            skill === "Vue.js" || skill.includes("Vue"),
                        ),
                      )
                      .map((developer) => (
                        <DeveloperCard
                          key={developer.id}
                          developer={developer}
                        />
                      ))}
                  </div>
                </TabsContent>
                <TabsContent value="angular">
                  {/* Angular developers content */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredDevelopers
                      .filter((dev) =>
                        dev.skills.some(
                          (skill) =>
                            skill === "Angular" || skill.includes("Angular"),
                        ),
                      )
                      .map((developer) => (
                        <DeveloperCard
                          key={developer.id}
                          developer={developer}
                        />
                      ))}
                  </div>
                </TabsContent>
                <TabsContent value="javascript">
                  {/* JavaScript developers content */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredDevelopers
                      .filter((dev) =>
                        dev.skills.some(
                          (skill) =>
                            skill === "JavaScript" ||
                            skill.includes("JavaScript"),
                        ),
                      )
                      .map((developer) => (
                        <DeveloperCard
                          key={developer.id}
                          developer={developer}
                        />
                      ))}
                  </div>
                </TabsContent>
              </Tabs>

              {/* No Results */}
              {filteredDevelopers.length === 0 && (
                <div className="text-center py-12 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="h-8 w-8 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">
                    Sonuç Bulunamadı
                  </h3>
                  <p className="text-gray-500 mb-4">
                    Arama kriterlerinize uygun geliştirici bulunamadı. Lütfen
                    filtrelerinizi değiştirin veya yeni bir arama yapın.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedFrameworks([]);
                      setSelectedExperience([]);
                      setSelectedAvailability([]);
                    }}
                  >
                    Filtreleri Temizle
                  </Button>
                </div>
              )}

              {/* Pagination */}
              {filteredDevelopers.length > 0 && (
                <div className="flex justify-center mt-8">
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-9 h-9 p-0 rounded-md"
                      disabled
                    >
                      <span className="sr-only">Previous</span>
                      <ChevronRight className="h-4 w-4 rotate-180" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-9 h-9 p-0 rounded-md bg-corporate-blue text-white border-corporate-blue"
                    >
                      1
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-9 h-9 p-0 rounded-md"
                    >
                      2
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-9 h-9 p-0 rounded-md"
                    >
                      3
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-9 h-9 p-0 rounded-md"
                    >
                      <span className="sr-only">Next</span>
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Hellospace Section */}
      <section className="py-16 px-4 bg-corporate-blue/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-3 py-1.5 mb-4 rounded-full bg-corporate-teal/10 border border-corporate-teal/20">
              <Award className="h-4 w-4 text-corporate-teal mr-2" />
              <span className="text-xs font-medium text-corporate-blue">
                Neden Hellospace?
              </span>
            </div>
            <h2 className="text-3xl font-bold mb-4 text-corporate-blue">
              Frontend Geliştirici Bulmanın En Akıllı Yolu
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Hellospace, projeniz için en uygun frontend geliştiricileri
              bulmanızı sağlayan yapay zeka destekli bir platformdur. İşte bizi
              farklı kılan özellikler:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]">
              <div className="w-14 h-14 bg-corporate-teal/10 rounded-full flex items-center justify-center mb-5">
                <Cpu className="h-7 w-7 text-corporate-teal" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-corporate-blue">
                AI Destekli Eşleştirme
              </h3>
              <p className="text-gray-600 mb-4">
                Yapay zeka algoritmalarımız, projenizin gereksinimlerine ve
                şirket kültürünüze en uygun frontend geliştiricileri belirler.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Hassas Eşleştirme", "Hızlı Sonuçlar", "Kültürel Uyum"].map(
                  (feature, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-corporate-teal/10 text-xs font-medium text-corporate-teal rounded-full"
                    >
                      {feature}
                    </span>
                  ),
                )}
              </div>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]">
              <div className="w-14 h-14 bg-corporate-blue/10 rounded-full flex items-center justify-center mb-5">
                <Sparkles className="h-7 w-7 text-corporate-blue" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-corporate-blue">
                Elit Yetenek Havuzu
              </h3>
              <p className="text-gray-600 mb-4">
                Sadece en iyi %3'lük dilime giren, titizlikle seçilmiş frontend
                geliştiricilerle çalışın. Her aday kapsamlı teknik
                değerlendirmelerden geçer.
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Doğrulanmış Beceriler",
                  "Deneyimli Uzmanlar",
                  "İngilizce Yetkinliği",
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

            {/* Feature 3 */}
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
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-3 py-1.5 mb-4 rounded-full bg-corporate-blue/10 border border-corporate-blue/20">
              <Rocket className="h-4 w-4 text-corporate-blue mr-2" />
              <span className="text-xs font-medium text-corporate-blue">
                Süreç
              </span>
            </div>
            <h2 className="text-3xl font-bold mb-4 text-corporate-blue">
              Frontend Geliştirici Bulma Süreciniz
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Hellospace ile frontend geliştirici bulma süreciniz basit, hızlı
              ve etkilidir. İşte adım adım nasıl çalıştığımız:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px] relative">
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-corporate-teal rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                1
              </div>
              <div className="w-14 h-14 bg-corporate-teal/10 rounded-full flex items-center justify-center mb-5">
                <FileCode className="h-7 w-7 text-corporate-teal" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-corporate-blue">
                İhtiyaçlarınızı Belirleyin
              </h3>
              <p className="text-gray-600">
                Proje gereksinimlerinizi, bütçenizi ve zaman çizelgenizi
                belirleyin. Danışmanlarımız, ihtiyaçlarınızı anlamak için
                sizinle görüşecek.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px] relative">
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-corporate-blue rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                2
              </div>
              <div className="w-14 h-14 bg-corporate-blue/10 rounded-full flex items-center justify-center mb-5">
                <Users className="h-7 w-7 text-corporate-blue" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-corporate-blue">
                Yetenek Eşleştirmesi
              </h3>
              <p className="text-gray-600">
                AI algoritmalarımız, ihtiyaçlarınıza en uygun frontend
                geliştiricileri belirler. Size özel bir kısa liste sunulur ve
                görüşmeler ayarlanır.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px] relative">
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-corporate-peach rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                3
              </div>
              <div className="w-14 h-14 bg-corporate-peach/10 rounded-full flex items-center justify-center mb-5">
                <MessageCircle className="h-7 w-7 text-corporate-peach" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-corporate-blue">
                Görüşme ve Seçim
              </h3>
              <p className="text-gray-600">
                Kısa listedeki frontend geliştiricilerle görüşün ve projeniz
                için en uygun olanı seçin. Platformumuz tüm görüşme sürecini
                kolaylaştırır.
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px] relative">
              <div className="absolute -top-4 -left-4 w-10 h-10 bg-gradient-to-r from-corporate-teal to-corporate-blue rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                4
              </div>
              <div className="w-14 h-14 bg-corporate-teal/10 rounded-full flex items-center justify-center mb-5">
                <Briefcase className="h-7 w-7 text-corporate-teal" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-corporate-blue">
                İşbirliği Başlasın
              </h3>
              <p className="text-gray-600">
                Seçtiğiniz frontend geliştirici ile çalışmaya başlayın. Platform
                üzerinden iletişim kurun, ilerlemeyi takip edin ve güvenli ödeme
                sistemimizi kullanın.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Frontend Expertise Section */}
      <section className="py-16 px-4 bg-corporate-blue/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-3 py-1.5 mb-4 rounded-full bg-corporate-peach/10 border border-corporate-peach/20">
              <Code className="h-4 w-4 text-corporate-peach mr-2" />
              <span className="text-xs font-medium text-corporate-blue">
                Uzmanlık Alanları
              </span>
            </div>
            <h2 className="text-3xl font-bold mb-4 text-corporate-blue">
              Frontend Geliştirme Uzmanlıklarımız
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Hellospace'te her türlü frontend geliştirme ihtiyacınız için uzman
              geliştiriciler bulabilirsiniz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Expertise 1 */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]">
              <div className="w-12 h-12 bg-corporate-blue/10 rounded-full flex items-center justify-center mb-4">
                <Layers className="h-6 w-6 text-corporate-blue" />
              </div>
              <h3 className="text-lg font-bold mb-3 text-corporate-blue">
                React Geliştirme
              </h3>
              <p className="text-gray-600 mb-4">
                Modern web uygulamaları için React uzmanları. Redux, Next.js ve
                React Native deneyimine sahip geliştiriciler.
              </p>
              <div className="space-y-2">
                {[
                  "React.js",
                  "Redux / Context API",
                  "Next.js",
                  "React Native",
                  "React Query",
                ].map((skill, i) => (
                  <div key={i} className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-corporate-blue mr-2"></div>
                    <span className="text-gray-600 text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Expertise 2 */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]">
              <div className="w-12 h-12 bg-corporate-teal/10 rounded-full flex items-center justify-center mb-4">
                <Layers className="h-6 w-6 text-corporate-teal" />
              </div>
              <h3 className="text-lg font-bold mb-3 text-corporate-blue">
                Vue.js Geliştirme
              </h3>
              <p className="text-gray-600 mb-4">
                Hızlı ve verimli web uygulamaları için Vue.js uzmanları. Vuex,
                Nuxt.js ve Vue 3 Composition API deneyimi.
              </p>
              <div className="space-y-2">
                {[
                  "Vue.js 2/3",
                  "Vuex / Pinia",
                  "Nuxt.js",
                  "Vue Router",
                  "Composition API",
                ].map((skill, i) => (
                  <div key={i} className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-corporate-teal mr-2"></div>
                    <span className="text-gray-600 text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Expertise 3 */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]">
              <div className="w-12 h-12 bg-corporate-peach/10 rounded-full flex items-center justify-center mb-4">
                <Layers className="h-6 w-6 text-corporate-peach" />
              </div>
              <h3 className="text-lg font-bold mb-3 text-corporate-blue">
                Angular Geliştirme
              </h3>
              <p className="text-gray-600 mb-4">
                Kurumsal uygulamalar için Angular uzmanları. TypeScript, RxJS ve
                NgRx deneyimine sahip geliştiriciler.
              </p>
              <div className="space-y-2">
                {[
                  "Angular 2+",
                  "TypeScript",
                  "RxJS",
                  "NgRx",
                  "Angular Material",
                ].map((skill, i) => (
                  <div key={i} className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-corporate-peach mr-2"></div>
                    <span className="text-gray-600 text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Expertise 4 */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]">
              <div className="w-12 h-12 bg-corporate-blue/10 rounded-full flex items-center justify-center mb-4">
                <Layout className="h-6 w-6 text-corporate-blue" />
              </div>
              <h3 className="text-lg font-bold mb-3 text-corporate-blue">
                Responsive Web Tasarımı
              </h3>
              <p className="text-gray-600 mb-4">
                Tüm cihazlarda mükemmel görünen duyarlı web siteleri ve
                uygulamalar için HTML5, CSS3 ve modern framework uzmanları.
              </p>
              <div className="space-y-2">
                {[
                  "HTML5 & CSS3",
                  "Tailwind CSS",
                  "Bootstrap",
                  "SASS/SCSS",
                  "CSS Grid & Flexbox",
                ].map((skill, i) => (
                  <div key={i} className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-corporate-blue mr-2"></div>
                    <span className="text-gray-600 text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Expertise 5 */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]">
              <div className="w-12 h-12 bg-corporate-teal/10 rounded-full flex items-center justify-center mb-4">
                <Laptop className="h-6 w-6 text-corporate-teal" />
              </div>
              <h3 className="text-lg font-bold mb-3 text-corporate-blue">
                Modern JavaScript
              </h3>
              <p className="text-gray-600 mb-4">
                ES6+, TypeScript ve modern JavaScript araçlarında uzmanlaşmış
                geliştiriciler. Webpack, Babel ve ESLint deneyimi.
              </p>
              <div className="space-y-2">
                {[
                  "ES6+ JavaScript",
                  "TypeScript",
                  "Webpack/Vite",
                  "Babel",
                  "Jest/Testing Library",
                ].map((skill, i) => (
                  <div key={i} className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-corporate-teal mr-2"></div>
                    <span className="text-gray-600 text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Expertise 6 */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]">
              <div className="w-12 h-12 bg-corporate-peach/10 rounded-full flex items-center justify-center mb-4">
                <PenTool className="h-6 w-6 text-corporate-peach" />
              </div>
              <h3 className="text-lg font-bold mb-3 text-corporate-blue">
                UI/UX Entegrasyonu
              </h3>
              <p className="text-gray-600 mb-4">
                Tasarımları kodlama konusunda uzmanlaşmış, Figma, Adobe XD ve
                Sketch deneyimine sahip frontend geliştiriciler.
              </p>
              <div className="space-y-2">
                {[
                  "Figma to Code",
                  "Responsive Design",
                  "CSS Animations",
                  "Accessibility (a11y)",
                  "UI Component Libraries",
                ].map((skill, i) => (
                  <div key={i} className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-corporate-peach mr-2"></div>
                    <span className="text-gray-600 text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-3 py-1.5 mb-4 rounded-full bg-corporate-blue/10 border border-corporate-blue/20">
              <Star className="h-4 w-4 text-corporate-blue mr-2" />
              <span className="text-xs font-medium text-corporate-blue">
                Başarı Hikayeleri
              </span>
            </div>
            <h2 className="text-3xl font-bold mb-4 text-corporate-blue">
              Müşterilerimizin Deneyimleri
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Hellospace üzerinden frontend geliştirici bulan şirketlerin başarı
              hikayelerini keşfedin.
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
                  <h4 className="font-medium text-gray-800">Ahmet Yılmaz</h4>
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
                "Hellospace üzerinden bulduğumuz React uzmanı, e-ticaret
                platformumuzun yeniden tasarımını zamanında ve bütçe dahilinde
                tamamladı. Kullanıcı deneyimi %40 iyileşti ve dönüşüm
                oranlarımız arttı."
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
                  <h4 className="font-medium text-gray-800">Zeynep Kaya</h4>
                  <p className="text-sm text-gray-500">FinTech CTO</p>
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
                "Fintech uygulamamız için Angular uzmanı arıyorduk.
                Hellospace'in AI eşleştirme sistemi sayesinde, tam ihtiyacımıza
                uygun bir geliştirici bulduk. Şimdi uygulamamız daha hızlı ve
                güvenli."
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
                  <h4 className="font-medium text-gray-800">Mehmet Demir</h4>
                  <p className="text-sm text-gray-500">StartupX Founder</p>
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
                "Startup'ımız için sınırlı bir bütçeyle çalışıyorduk. Hellospace
                üzerinden bulduğumuz Vue.js uzmanı, MVP'mizi hızla geliştirdi ve
                yatırımcılarımızı etkilemeyi başardık."
              </p>

              <div className="flex items-center text-corporate-teal text-sm font-medium">
                <span>Vaka Çalışmasını Okuyun</span>
                <ChevronRight className="h-4 w-4 ml-1" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-corporate-blue via-corporate-blue/90 to-corporate-blue/80 text-white relative overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute -top-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-gradient-to-br from-corporate-teal/20 to-corporate-peach/20 blur-3xl animate-pulse duration-3000" />
        <div className="absolute -bottom-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-gradient-to-tr from-corporate-cream/20 to-corporate-teal/20 blur-3xl animate-pulse duration-2000" />
        <div className="absolute inset-0 bg-grid-white/[0.03] bg-[length:30px_30px]" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <div className="inline-flex items-center px-4 py-2 mb-6 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm shadow-lg">
                <Rocket className="h-5 w-5 text-corporate-peach mr-2" />
                <span className="text-sm font-medium text-corporate-cream">
                  Projenizi Hayata Geçirin
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                Projeniz İçin{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-corporate-peach to-corporate-teal">
                  Mükemmel Frontend Geliştiricisini
                </span>{" "}
                Bulun
              </h2>
              <p className="text-white/90 mb-8 text-lg leading-relaxed">
                Hellospace'in AI destekli eşleştirme sistemi ile projenize en
                uygun frontend geliştiricileri bulun. Ücretsiz danışmanlık
                hizmetimizden yararlanarak ilk adımı atın.
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
                  className="border-white/30 hover:bg-white/10 backdrop-blur-sm hover:border-white/50 transition-all duration-300 bg-corporate-blue/30 text-white px-8 py-4 h-auto text-lg font-medium rounded-full"
                >
                  Yetenekleri Keşfedin
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
                    <h3 className="text-xl font-bold">Frontend Uzmanlıkları</h3>
                    <p className="text-corporate-cream/70 text-sm">
                      Projeniz için en uygun yetenekler
                    </p>
                  </div>
                </div>

                <div className="space-y-5">
                  {[
                    {
                      icon: <Layers className="h-5 w-5 text-corporate-teal" />,
                      title: "React Uzmanları",
                      desc: "Modern web uygulamaları için React geliştiricileri",
                    },
                    {
                      icon: <Layers className="h-5 w-5 text-corporate-peach" />,
                      title: "Vue.js Geliştiricileri",
                      desc: "Hızlı ve verimli uygulamalar için Vue uzmanları",
                    },
                    {
                      icon: <Layers className="h-5 w-5 text-corporate-cream" />,
                      title: "Angular Geliştiricileri",
                      desc: "Kurumsal uygulamalar için Angular uzmanları",
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
                        <h4 className="font-medium text-white">
                          {service.title}
                        </h4>
                        <p className="text-sm text-corporate-cream/70">
                          {service.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <Button className="w-full mt-6 bg-gradient-to-r from-corporate-peach/80 to-corporate-peach/60 hover:from-corporate-peach hover:to-corporate-peach/80 text-white font-medium py-3 rounded-lg shadow-lg shadow-corporate-peach/20">
                  Tüm Uzmanlıkları Görüntüle
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-3 py-1.5 mb-4 rounded-full bg-corporate-teal/10 border border-corporate-teal/20">
              <MessageCircle className="h-4 w-4 text-corporate-teal mr-2" />
              <span className="text-xs font-medium text-corporate-blue">
                Sıkça Sorulan Sorular
              </span>
            </div>
            <h2 className="text-3xl font-bold mb-4 text-corporate-blue">
              Frontend Geliştirici Bulma Hakkında
            </h2>
            <p className="text-gray-600">
              Frontend geliştirici bulma süreciyle ilgili en çok sorulan sorular
              ve yanıtları.
            </p>
          </div>

          <div className="space-y-6">
            {/* FAQ Item 1 */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
              <h3 className="text-lg font-bold text-corporate-blue mb-3">
                Hellospace'te frontend geliştirici bulma süreci ne kadar sürer?
              </h3>
              <p className="text-gray-600">
                Hellospace'in AI destekli eşleştirme sistemi sayesinde,
                genellikle 48 saat içinde projenize uygun frontend
                geliştiricileri bulabilirsiniz. Acil projeler için
                hızlandırılmış eşleştirme hizmetimiz de mevcuttur.
              </p>
            </div>

            {/* FAQ Item 2 */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
              <h3 className="text-lg font-bold text-corporate-blue mb-3">
                Frontend geliştiricilerin ücretlendirmesi nasıl yapılıyor?
              </h3>
              <p className="text-gray-600">
                Frontend geliştiricilerimizin ücretleri, deneyim seviyelerine,
                uzmanlık alanlarına ve çalışma şekillerine göre değişiklik
                gösterir. Saatlik, proje bazlı veya tam zamanlı çalışma
                seçenekleri sunuyoruz. Tüm ödemeler güvenli emanet hesabı
                üzerinden yapılır.
              </p>
            </div>

            {/* FAQ Item 3 */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
              <h3 className="text-lg font-bold text-corporate-blue mb-3">
                Frontend geliştiricilerin kalitesini nasıl garanti ediyorsunuz?
              </h3>
              <p className="text-gray-600">
                Tüm frontend geliştiricilerimiz, kapsamlı teknik
                değerlendirmeler, kod incelemeleri ve mülakat süreçlerinden
                geçer. Sadece en iyi %3'lük dilime giren geliştiricileri
                platformumuza kabul ediyoruz. Ayrıca, 2 haftalık memnuniyet
                garantisi sunuyoruz.
              </p>
            </div>

            {/* FAQ Item 4 */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
              <h3 className="text-lg font-bold text-corporate-blue mb-3">
                Projem için hangi frontend teknolojisini seçmeliyim?
              </h3>
              <p className="text-gray-600">
                Projenizin gereksinimlerine bağlı olarak farklı frontend
                teknolojileri uygun olabilir. Ücretsiz danışmanlık hizmetimizle,
                uzmanlarımız projeniz için en uygun teknoloji seçiminde size
                yardımcı olabilir. React, Vue.js ve Angular gibi popüler
                frameworklerin yanı sıra, özel ihtiyaçlarınıza göre çözümler
                sunuyoruz.
              </p>
            </div>

            {/* FAQ Item 5 */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
              <h3 className="text-lg font-bold text-corporate-blue mb-3">
                Frontend geliştiricilerle nasıl iletişim kuracağım?
              </h3>
              <p className="text-gray-600">
                Platformumuz üzerinden geliştiricilerle doğrudan iletişim
                kurabilirsiniz. Video görüşmeleri, mesajlaşma ve proje yönetimi
                araçları sunuyoruz. Ayrıca, iletişim sürecini kolaylaştırmak
                için proje yöneticilerimiz size destek olabilir.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

// Developer Card Component
interface DeveloperCardProps {
  developer: {
    id: number;
    name: string;
    title: string;
    rating: number;
    hourlyRate: string;
    experience: string;
    availability: string;
    location: string;
    skills: string[];
    avatar: string;
    description: string;
  };
}

const DeveloperCard = ({ developer }: DeveloperCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:border-corporate-teal/30">
      <CardContent className="p-0">
        <div className="p-6">
          <div className="flex items-start">
            <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-corporate-teal/20 flex-shrink-0">
              <img
                src={developer.avatar}
                alt={developer.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="font-bold text-corporate-blue">
                {developer.name}
              </h3>
              <p className="text-gray-600 text-sm">{developer.title}</p>
              <div className="flex items-center mt-1">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-3.5 w-3.5 ${i < Math.floor(developer.rating) ? "text-corporate-teal fill-corporate-teal" : "text-gray-300"}`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600 ml-1">
                  {developer.rating}
                </span>
              </div>
            </div>
          </div>

          <p className="text-gray-600 text-sm mt-4">{developer.description}</p>

          <div className="flex flex-wrap gap-2 mt-4">
            {developer.skills.map((skill, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="bg-corporate-blue/5 text-corporate-blue hover:bg-corporate-blue/10"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        <Separator />

        <div className="p-4 bg-gray-50">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="flex items-center">
              <Clock className="h-4 w-4 text-corporate-teal mr-2" />
              <span className="text-sm text-gray-600">
                {developer.experience}
              </span>
            </div>
            <div className="flex items-center">
              <DollarSign className="h-4 w-4 text-corporate-teal mr-2" />
              <span className="text-sm text-gray-600">
                {developer.hourlyRate}
              </span>
            </div>
            <div className="flex items-center">
              <Briefcase className="h-4 w-4 text-corporate-teal mr-2" />
              <span className="text-sm text-gray-600">
                {developer.availability}
              </span>
            </div>
            <div className="flex items-center">
              <Globe className="h-4 w-4 text-corporate-teal mr-2" />
              <span className="text-sm text-gray-600">
                {developer.location}
              </span>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <Button
              variant="outline"
              size="sm"
              className="text-corporate-blue border-corporate-blue/30 hover:bg-corporate-blue/5"
            >
              Profili Görüntüle
            </Button>
            <Button
              size="sm"
              className="bg-corporate-teal hover:bg-corporate-teal/90"
            >
              İletişime Geç
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FrontendDevelopers;
