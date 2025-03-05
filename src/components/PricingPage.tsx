import React, { useState, useEffect, useRef } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Slider } from "./ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import {
  CheckCircle,
  X,
  Sparkles,
  Rocket,
  Star,
  Zap,
  Shield,
  Clock,
  Calculator,
  DollarSign,
  CreditCard,
  Users,
  Calendar,
  Code,
  Database,
  Server,
  Laptop,
  Smartphone,
  Globe,
  HelpCircle,
  ChevronRight,
  ArrowRight,
  Briefcase,
  Building,
  LineChart,
  Settings,
} from "lucide-react";

const PricingPage = () => {
  const starsRef = useRef<HTMLDivElement>(null);
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">(
    "monthly",
  );

  // Project calculator state
  const [projectType, setProjectType] = useState("web");
  const [teamSize, setTeamSize] = useState([3]);
  const [projectDuration, setProjectDuration] = useState([3]);
  const [complexity, setComplexity] = useState("medium");
  const [features, setFeatures] = useState<string[]>([
    "authentication",
    "database",
  ]);
  const [calculatedCost, setCalculatedCost] = useState(0);

  // Feature options with their costs
  const featureOptions = [
    { id: "authentication", label: "User Authentication", cost: 1000 },
    { id: "database", label: "Database Integration", cost: 1500 },
    { id: "payment", label: "Payment Processing", cost: 2000 },
    { id: "api", label: "API Integration", cost: 1800 },
    { id: "analytics", label: "Analytics Dashboard", cost: 2500 },
    { id: "realtime", label: "Real-time Features", cost: 3000 },
    { id: "mobile", label: "Mobile Responsiveness", cost: 1200 },
    { id: "admin", label: "Admin Panel", cost: 2200 },
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

    // Calculate base cost
    let base = baseCosts[projectType as keyof typeof baseCosts];

    // Add team size cost (each developer costs $2000/month)
    const teamCost = teamSize[0] * 2000;

    // Add duration cost
    const durationCost = projectDuration[0] * teamCost;

    // Add feature costs
    const featureCost = features.reduce((total, featureId) => {
      const feature = featureOptions.find((f) => f.id === featureId);
      return total + (feature?.cost || 0);
    }, 0);

    // Apply complexity multiplier
    const totalCost =
      (base + featureCost) *
        complexityMultipliers[
          complexity as keyof typeof complexityMultipliers
        ] +
      durationCost;

    // Apply discount for yearly billing
    setCalculatedCost(Math.round(totalCost));
  }, [projectType, teamSize, projectDuration, complexity, features]);

  // Create stars background effect
  useEffect(() => {
    if (starsRef.current) {
      const starsContainer = starsRef.current;
      starsContainer.innerHTML = "";

      for (let i = 0; i < 100; i++) {
        const star = document.createElement("div");
        star.className = "absolute rounded-full";

        // Random size between 1-3px
        const size = Math.random() * 2 + 1;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;

        // Random position
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;

        // Random color (white, blue-ish, yellow-ish)
        const colors = ["#ffffff", "#E6F0FF", "#FFFDE7"];
        star.style.backgroundColor =
          colors[Math.floor(Math.random() * colors.length)];

        // Random opacity
        star.style.opacity = `${Math.random() * 0.7 + 0.3}`;

        // Random animation delay
        star.style.animationDelay = `${Math.random() * 5}s`;
        star.classList.add("animate-twinkle");

        starsContainer.appendChild(star);
      }
    }
  }, []);

  // Toggle feature selection
  const toggleFeature = (featureId: string) => {
    if (features.includes(featureId)) {
      setFeatures(features.filter((id) => id !== featureId));
    } else {
      setFeatures([...features, featureId]);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-corporate-blue overflow-hidden">
        {/* Stars background */}
        <div ref={starsRef} className="absolute inset-0 z-0"></div>

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
            <DollarSign className="h-4 w-4 text-corporate-peach mr-2" />
            <span className="text-xs font-medium text-corporate-cream">
              Transparent Pricing
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
            Simple, Transparent Pricing for Your Projects
          </h1>
          <p className="text-xl text-corporate-cream/90 mb-8 max-w-3xl mx-auto">
            Choose the perfect plan for your business needs and calculate the
            exact cost of your custom software solution.
          </p>
        </div>
      </section>

      {/* Pricing Plans Section */}
      <section className="py-16 px-4 bg-white relative z-10 -mt-10">
        <div className="max-w-7xl mx-auto">
          {/* Billing toggle */}
          <div className="flex justify-center mb-12">
            <div className="bg-corporate-cream/30 p-1 rounded-full inline-flex items-center">
              <button
                onClick={() => setBillingPeriod("monthly")}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${billingPeriod === "monthly" ? "bg-white shadow-md text-corporate-blue" : "text-gray-600 hover:text-corporate-blue"}`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingPeriod("yearly")}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all flex items-center ${billingPeriod === "yearly" ? "bg-white shadow-md text-corporate-blue" : "text-gray-600 hover:text-corporate-blue"}`}
              >
                Yearly
                <Badge className="ml-2 bg-corporate-peach/20 text-corporate-peach border-none text-xs">
                  Save 20%
                </Badge>
              </button>
            </div>
          </div>

          {/* Pricing cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Starter Plan */}
            <Card className="border-corporate-teal/10 hover:border-corporate-teal/30 transition-all duration-300 hover:shadow-lg relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-corporate-teal/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardHeader className="pb-4">
                <div className="w-12 h-12 rounded-full bg-corporate-teal/10 flex items-center justify-center mb-4">
                  <Rocket className="h-6 w-6 text-corporate-teal" />
                </div>
                <CardTitle className="text-2xl font-bold text-corporate-blue">
                  Starter
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Perfect for small businesses and startups
                </CardDescription>
              </CardHeader>
              <CardContent className="pb-4">
                <div className="mb-6">
                  <span className="text-4xl font-bold text-corporate-blue">
                    ${billingPeriod === "monthly" ? "1,499" : "1,199"}
                  </span>
                  <span className="text-gray-500 ml-2">
                    /{" "}
                    {billingPeriod === "monthly"
                      ? "month"
                      : "month, billed annually"}
                  </span>
                </div>
                <ul className="space-y-3">
                  {[
                    "Up to 3 developers",
                    "Basic project management tools",
                    "Standard support (24-48h response)",
                    "5 concurrent projects",
                    "Basic analytics",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-corporate-teal mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                  {[
                    "Advanced security features",
                    "Dedicated account manager",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start text-gray-400">
                      <X className="h-5 w-5 text-gray-300 mr-2 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-white hover:bg-corporate-teal/10 text-corporate-teal border border-corporate-teal/30 hover:border-corporate-teal/50 transition-all duration-300">
                  Get Started
                </Button>
              </CardFooter>
            </Card>

            {/* Professional Plan */}
            <Card className="border-corporate-blue/20 hover:border-corporate-blue/40 transition-all duration-300 hover:shadow-xl relative overflow-hidden scale-105 z-10 group">
              <div className="absolute inset-0 bg-gradient-to-br from-corporate-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute top-0 left-0 right-0 bg-corporate-blue text-white text-center text-sm py-1.5 font-medium">
                Most Popular
              </div>
              <CardHeader className="pt-12 pb-4">
                <div className="w-12 h-12 rounded-full bg-corporate-blue/10 flex items-center justify-center mb-4">
                  <Star className="h-6 w-6 text-corporate-blue" />
                </div>
                <CardTitle className="text-2xl font-bold text-corporate-blue">
                  Professional
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Ideal for growing teams and businesses
                </CardDescription>
              </CardHeader>
              <CardContent className="pb-4">
                <div className="mb-6">
                  <span className="text-4xl font-bold text-corporate-blue">
                    ${billingPeriod === "monthly" ? "2,999" : "2,399"}
                  </span>
                  <span className="text-gray-500 ml-2">
                    /{" "}
                    {billingPeriod === "monthly"
                      ? "month"
                      : "month, billed annually"}
                  </span>
                </div>
                <ul className="space-y-3">
                  {[
                    "Up to 10 developers",
                    "Advanced project management",
                    "Priority support (12-24h response)",
                    "15 concurrent projects",
                    "Advanced analytics and reporting",
                    "Enhanced security features",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-corporate-blue mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                  {["Dedicated account manager"].map((feature, index) => (
                    <li key={index} className="flex items-start text-gray-400">
                      <X className="h-5 w-5 text-gray-300 mr-2 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-corporate-blue hover:bg-corporate-blue/90 text-white shadow-md shadow-corporate-blue/20">
                  Get Started
                </Button>
              </CardFooter>
            </Card>

            {/* Enterprise Plan */}
            <Card className="border-corporate-peach/10 hover:border-corporate-peach/30 transition-all duration-300 hover:shadow-lg relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-corporate-peach/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardHeader className="pb-4">
                <div className="w-12 h-12 rounded-full bg-corporate-peach/10 flex items-center justify-center mb-4">
                  <Building className="h-6 w-6 text-corporate-peach" />
                </div>
                <CardTitle className="text-2xl font-bold text-corporate-blue">
                  Enterprise
                </CardTitle>
                <CardDescription className="text-gray-600">
                  For large organizations with complex needs
                </CardDescription>
              </CardHeader>
              <CardContent className="pb-4">
                <div className="mb-6">
                  <span className="text-4xl font-bold text-corporate-blue">
                    ${billingPeriod === "monthly" ? "5,999" : "4,799"}
                  </span>
                  <span className="text-gray-500 ml-2">
                    /{" "}
                    {billingPeriod === "monthly"
                      ? "month"
                      : "month, billed annually"}
                  </span>
                </div>
                <ul className="space-y-3">
                  {[
                    "Unlimited developers",
                    "Enterprise project management",
                    "24/7 premium support",
                    "Unlimited concurrent projects",
                    "Custom analytics and reporting",
                    "Advanced security and compliance",
                    "Dedicated account manager",
                    "Custom integrations",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-corporate-peach mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-white hover:bg-corporate-peach/10 text-corporate-peach border border-corporate-peach/30 hover:border-corporate-peach/50 transition-all duration-300">
                  Contact Sales
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Project Cost Calculator */}
      <section className="py-20 px-4 bg-gradient-to-br from-corporate-blue/5 to-corporate-cream/30 relative overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute -top-[10%] -right-[5%] w-[30%] h-[30%] rounded-full bg-gradient-to-br from-corporate-teal/10 to-corporate-peach/10 blur-3xl" />
        <div className="absolute -bottom-[10%] -left-[5%] w-[30%] h-[30%] rounded-full bg-gradient-to-tr from-corporate-cream/10 to-corporate-teal/10 blur-3xl" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1.5 mb-4 rounded-full bg-corporate-teal/10 border border-corporate-teal/20">
              <Calculator className="h-4 w-4 text-corporate-teal mr-2" />
              <span className="text-xs font-medium text-corporate-blue">
                Project Estimator
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-corporate-blue">
              Calculate Your Project Cost
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Use our interactive calculator to estimate the cost of your custom
              software project
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Calculator Form */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-corporate-teal/10">
              <h3 className="text-xl font-bold mb-6 text-corporate-blue">
                Project Details
              </h3>

              {/* Project Type */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Project Type
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    {
                      id: "web",
                      label: "Web App",
                      icon: <Globe className="h-4 w-4" />,
                    },
                    {
                      id: "mobile",
                      label: "Mobile App",
                      icon: <Smartphone className="h-4 w-4" />,
                    },
                    {
                      id: "desktop",
                      label: "Desktop App",
                      icon: <Laptop className="h-4 w-4" />,
                    },
                    {
                      id: "enterprise",
                      label: "Enterprise",
                      icon: <Building className="h-4 w-4" />,
                    },
                  ].map((type) => (
                    <button
                      key={type.id}
                      onClick={() => setProjectType(type.id)}
                      className={`flex flex-col items-center justify-center p-4 rounded-lg border ${projectType === type.id ? "bg-corporate-teal/10 border-corporate-teal/30 text-corporate-blue" : "bg-gray-50 border-gray-200 text-gray-600 hover:bg-gray-100"}`}
                    >
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 ${projectType === type.id ? "bg-corporate-teal/20" : "bg-gray-200"}`}
                      >
                        {type.icon}
                      </div>
                      <span className="text-sm font-medium">{type.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Team Size */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Team Size
                  </label>
                  <span className="text-sm text-corporate-blue font-medium">
                    {teamSize[0]} developers
                  </span>
                </div>
                <Slider
                  value={teamSize}
                  min={1}
                  max={10}
                  step={1}
                  onValueChange={setTeamSize}
                  className="py-4"
                />
                <div className="flex justify-between mt-1 text-xs text-gray-500">
                  <span>1</span>
                  <span>5</span>
                  <span>10</span>
                </div>
              </div>

              {/* Project Duration */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Project Duration
                  </label>
                  <span className="text-sm text-corporate-blue font-medium">
                    {projectDuration[0]} months
                  </span>
                </div>
                <Slider
                  value={projectDuration}
                  min={1}
                  max={12}
                  step={1}
                  onValueChange={setProjectDuration}
                  className="py-4"
                />
                <div className="flex justify-between mt-1 text-xs text-gray-500">
                  <span>1</span>
                  <span>6</span>
                  <span>12</span>
                </div>
              </div>

              {/* Project Complexity */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Project Complexity
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { id: "simple", label: "Simple" },
                    { id: "medium", label: "Medium" },
                    { id: "complex", label: "Complex" },
                  ].map((level) => (
                    <button
                      key={level.id}
                      onClick={() => setComplexity(level.id)}
                      className={`py-2 px-4 rounded-lg border text-sm font-medium ${complexity === level.id ? "bg-corporate-blue/10 border-corporate-blue/30 text-corporate-blue" : "bg-gray-50 border-gray-200 text-gray-600 hover:bg-gray-100"}`}
                    >
                      {level.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Required Features
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {featureOptions.map((feature) => (
                    <div
                      key={feature.id}
                      onClick={() => toggleFeature(feature.id)}
                      className={`flex items-center p-3 rounded-lg border cursor-pointer ${features.includes(feature.id) ? "bg-corporate-cream/50 border-corporate-teal/30" : "bg-gray-50 border-gray-200 hover:bg-gray-100"}`}
                    >
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center mr-3 ${features.includes(feature.id) ? "bg-corporate-teal/20" : "bg-gray-200"}`}
                      >
                        {features.includes(feature.id) ? (
                          <CheckCircle className="h-3 w-3 text-corporate-teal" />
                        ) : null}
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium">
                          {feature.label}
                        </div>
                        <div className="text-xs text-gray-500">
                          ${feature.cost.toLocaleString()}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Cost Estimate */}
            <div className="sticky top-24">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-corporate-teal/10 mb-6">
                <h3 className="text-xl font-bold mb-6 text-corporate-blue flex items-center">
                  <DollarSign className="h-5 w-5 mr-2 text-corporate-teal" />
                  Estimated Project Cost
                </h3>

                <div className="text-5xl font-bold text-corporate-blue mb-4">
                  ${calculatedCost.toLocaleString()}
                </div>

                <p className="text-gray-600 mb-6">
                  This estimate includes development costs for a {complexity}{" "}
                  {projectType} application with {teamSize[0]} developers over{" "}
                  {projectDuration[0]} months.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Base cost:</span>
                    <span className="font-medium">
                      ${(calculatedCost * 0.3).toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Development team:</span>
                    <span className="font-medium">
                      $
                      {(
                        teamSize[0] *
                        2000 *
                        projectDuration[0]
                      ).toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">
                      Features ({features.length}):
                    </span>
                    <span className="font-medium">
                      ${(calculatedCost * 0.2).toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Complexity factor:</span>
                    <span className="font-medium">
                      {complexity === "simple"
                        ? "1x"
                        : complexity === "medium"
                          ? "1.5x"
                          : "2.5x"}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col space-y-3">
                  <Button className="bg-corporate-teal hover:bg-corporate-teal/90 text-white shadow-md shadow-corporate-teal/20">
                    Request Detailed Quote
                  </Button>
                  <Button
                    variant="outline"
                    className="border-corporate-blue/30 text-corporate-blue hover:bg-corporate-blue/5"
                  >
                    Schedule Consultation
                  </Button>
                </div>
              </div>

              <div className="bg-corporate-cream/30 p-4 rounded-lg border border-corporate-teal/10">
                <div className="flex items-start">
                  <div className="bg-corporate-teal/20 p-2 rounded-full mr-3 flex-shrink-0">
                    <Sparkles className="h-4 w-4 text-corporate-teal" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-corporate-blue mb-1">
                      Need a more precise estimate?
                    </h4>
                    <p className="text-xs text-gray-600 mb-2">
                      Our team can provide a detailed analysis based on your
                      specific requirements.
                    </p>
                    <Button
                      variant="link"
                      className="text-xs text-corporate-teal p-0 h-auto flex items-center"
                    >
                      Contact our experts{" "}
                      <ChevronRight className="h-3 w-3 ml-1" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-3 py-1.5 mb-4 rounded-full bg-corporate-blue/10 border border-corporate-blue/20">
              <HelpCircle className="h-4 w-4 text-corporate-blue mr-2" />
              <span className="text-xs font-medium text-corporate-blue">
                Common Questions
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-corporate-blue">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our pricing and project
              costs
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem
              value="item-1"
              className="border border-corporate-teal/10 rounded-lg overflow-hidden"
            >
              <AccordionTrigger className="px-6 py-4 hover:bg-corporate-cream/10 hover:no-underline">
                <span className="text-left font-medium text-corporate-blue">
                  How is project pricing determined?
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-0 text-gray-600">
                Project pricing is determined by several factors including
                project type, complexity, team size, duration, and required
                features. Our calculator provides an estimate, but for a precise
                quote, we recommend scheduling a consultation with our team who
                will analyze your specific requirements in detail.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-2"
              className="border border-corporate-teal/10 rounded-lg overflow-hidden"
            >
              <AccordionTrigger className="px-6 py-4 hover:bg-corporate-cream/10 hover:no-underline">
                <span className="text-left font-medium text-corporate-blue">
                  What's included in the subscription plans?
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-0 text-gray-600">
                Our subscription plans include access to our talent pool,
                project management tools, support services, and various features
                depending on the plan level. The Starter plan is ideal for small
                projects, Professional for medium-sized businesses, and
                Enterprise for large organizations with complex needs. All plans
                include our core platform features, with higher tiers offering
                more advanced capabilities and support options.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-3"
              className="border border-corporate-teal/10 rounded-lg overflow-hidden"
            >
              <AccordionTrigger className="px-6 py-4 hover:bg-corporate-cream/10 hover:no-underline">
                <span className="text-left font-medium text-corporate-blue">
                  Can I change plans or cancel my subscription?
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-0 text-gray-600">
                Yes, you can upgrade, downgrade, or cancel your subscription at
                any time. When upgrading, the new pricing takes effect
                immediately with prorated charges. When downgrading, the new
                pricing takes effect at the start of the next billing cycle.
                Cancellations require a 30-day notice period for monthly plans
                and are non-refundable for annual plans.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-4"
              className="border border-corporate-teal/10 rounded-lg overflow-hidden"
            >
              <AccordionTrigger className="px-6 py-4 hover:bg-corporate-cream/10 hover:no-underline">
                <span className="text-left font-medium text-corporate-blue">
                  Are there any hidden fees or additional costs?
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-0 text-gray-600">
                No, we believe in complete transparency. The price you see is
                the price you pay. There are no hidden fees or surprise charges.
                However, if your project requirements change significantly
                during development (such as adding new features or increasing
                scope), this may affect the overall cost. Any potential changes
                will be discussed and approved by you before implementation.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-5"
              className="border border-corporate-teal/10 rounded-lg overflow-hidden"
            >
              <AccordionTrigger className="px-6 py-4 hover:bg-corporate-cream/10 hover:no-underline">
                <span className="text-left font-medium text-corporate-blue">
                  How accurate is the project cost calculator?
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-0 text-gray-600">
                Our calculator provides a reasonable estimate based on industry
                standards and our experience with similar projects. However,
                every project has unique requirements that may affect the final
                cost. The estimate is typically within 15-20% of the actual cost
                for most standard projects. For complex or highly customized
                solutions, we recommend requesting a detailed quote from our
                team.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-6"
              className="border border-corporate-teal/10 rounded-lg overflow-hidden"
            >
              <AccordionTrigger className="px-6 py-4 hover:bg-corporate-cream/10 hover:no-underline">
                <span className="text-left font-medium text-corporate-blue">
                  Do you offer custom pricing for specific industries?
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 pt-0 text-gray-600">
                Yes, we offer specialized pricing for certain industries such as
                healthcare, finance, and education, which may have specific
                compliance requirements or unique needs. Our Enterprise plan is
                highly customizable and can be tailored to industry-specific
                requirements. Contact our sales team to discuss your
                industry-specific needs and receive a customized quote.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-corporate-blue to-corporate-blue/80 text-white relative overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-gradient-to-br from-corporate-teal/10 to-corporate-peach/10 blur-3xl" />
        <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-gradient-to-tr from-corporate-cream/10 to-corporate-teal/10 blur-3xl" />
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:30px_30px]" />

        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center px-3 py-1.5 mb-6 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
            <Rocket className="h-4 w-4 text-corporate-cream mr-2" />
            <span className="text-xs font-medium text-corporate-cream">
              Ready to Get Started?
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Transform Your Business with Custom Software
          </h2>
          <p className="text-white/90 max-w-3xl mx-auto mb-8 text-lg">
            Join thousands of companies that have accelerated their growth with
            our tailored software solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-corporate-teal to-corporate-teal/80 hover:from-corporate-teal/90 hover:to-corporate-teal/70 text-white px-8 py-3 h-auto text-lg font-medium rounded-full shadow-lg shadow-corporate-teal/20">
              Schedule a Demo
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white/10 px-8 py-3 h-auto text-lg font-medium rounded-full backdrop-blur-sm"
            >
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default PricingPage;
