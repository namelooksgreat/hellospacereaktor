import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";
import { Separator } from "./ui/separator";
import { Alert, AlertDescription } from "./ui/alert";
import {
  ArrowRight,
  ArrowLeft,
  Lock,
  Mail,
  User,
  Building,
  Code,
  Briefcase,
  PenTool,
  AlertCircle,
  Github,
  Linkedin,
  Globe,
  ChevronRight,
  CheckCircle,
  Eye,
  EyeOff,
} from "lucide-react";

const SignUp = () => {
  const [userType, setUserType] = useState<string>("client");
  const [step, setStep] = useState<number>(1);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  // Form data state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    company: "",
    role: "",
    skills: [],
    experience: "",
    agreeTerms: false,
    receiveUpdates: false,
  });

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Validate form data
    if (step === 1) {
      if (!formData.firstName || !formData.lastName || !formData.email) {
        setError("Lütfen tüm zorunlu alanları doldurun.");
        setIsLoading(false);
        return;
      }
      setStep(2);
      setIsLoading(false);
      return;
    }

    if (step === 2) {
      if (!formData.password || !formData.confirmPassword) {
        setError("Lütfen şifre alanlarını doldurun.");
        setIsLoading(false);
        return;
      }

      if (formData.password !== formData.confirmPassword) {
        setError("Şifreler eşleşmiyor.");
        setIsLoading(false);
        return;
      }

      if (formData.password.length < 8) {
        setError("Şifre en az 8 karakter olmalıdır.");
        setIsLoading(false);
        return;
      }

      if (!formData.agreeTerms) {
        setError("Devam etmek için kullanım koşullarını kabul etmelisiniz.");
        setIsLoading(false);
        return;
      }
    }

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // For demo purposes, always succeed
      console.log("Signed up as", userType, "with data", formData);
      // Redirect to success page or dashboard
      window.location.href = "/";
    }, 1500);
  };

  // Handle social sign up
  const handleSocialSignUp = (provider: string) => {
    setIsLoading(true);
    setError("");

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      console.log("Signed up with", provider);
      // Redirect to success page or dashboard
      window.location.href = "/";
    }, 1500);
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-corporate-blue/5 to-corporate-blue/10 p-4">
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8 items-stretch relative">
        {/* Back to Home Button */}
        <Link
          to="/"
          className="absolute top-6 left-6 text-corporate-blue hover:text-corporate-blue/80 transition-colors flex items-center gap-2 bg-white/80 backdrop-blur-sm py-2 px-4 rounded-full shadow-sm"
        >
          <ArrowLeft className="h-4 w-4" />
          <span className="text-sm font-medium">Ana Sayfaya Dön</span>
        </Link>

        {/* Left Column - Sign Up Form */}
        <div className="lg:col-span-3 bg-white rounded-3xl shadow-2xl border border-corporate-blue/10 overflow-hidden">
          <div className="p-8 md:p-10">
            <div className="text-center mb-8">
              <img
                src="/Hellospace-Logo-Site.png"
                alt="Hellospace"
                className="h-12 mx-auto mb-6"
              />
              <h1 className="text-3xl font-bold text-corporate-blue mb-2">
                Hellospace'e Hoş Geldiniz
              </h1>
              <p className="text-gray-600">
                Hesap oluşturarak dijital yolculuğunuza başlayın
              </p>
            </div>

            {/* User Type Tabs */}
            <div className="mb-8">
              <div className="grid w-full grid-cols-2 bg-corporate-blue/5 p-1 border border-corporate-blue/10 rounded-full">
                <button
                  type="button"
                  onClick={() => setUserType("client")}
                  className={`rounded-full py-3 text-sm font-medium flex items-center justify-center transition-all duration-300 ${userType === "client" ? "bg-corporate-teal text-white shadow-md" : "text-corporate-blue hover:bg-corporate-blue/10"}`}
                >
                  <Briefcase className="h-4 w-4 mr-2" />
                  Müşteri
                </button>
                <button
                  type="button"
                  onClick={() => setUserType("developer")}
                  className={`rounded-full py-3 text-sm font-medium flex items-center justify-center transition-all duration-300 ${userType === "developer" ? "bg-corporate-peach text-white shadow-md" : "text-corporate-blue hover:bg-corporate-blue/10"}`}
                >
                  <Code className="h-4 w-4 mr-2" />
                  Yazılımcı/Tasarımcı
                </button>
              </div>
            </div>

            {error && (
              <Alert variant="destructive" className="mb-6">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {step === 1 && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label
                        htmlFor="firstName"
                        className="text-sm font-medium text-gray-700 mb-1.5 block"
                      >
                        Adınız <span className="text-red-500">*</span>
                      </Label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                        <Input
                          id="firstName"
                          name="firstName"
                          placeholder="Adınız"
                          className="pl-10 py-6 h-auto border-gray-200 focus:border-corporate-blue/30 focus:ring-corporate-blue/20 rounded-xl"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label
                        htmlFor="lastName"
                        className="text-sm font-medium text-gray-700 mb-1.5 block"
                      >
                        Soyadınız <span className="text-red-500">*</span>
                      </Label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                        <Input
                          id="lastName"
                          name="lastName"
                          placeholder="Soyadınız"
                          className="pl-10 py-6 h-auto border-gray-200 focus:border-corporate-blue/30 focus:ring-corporate-blue/20 rounded-xl"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <Label
                      htmlFor="email"
                      className="text-sm font-medium text-gray-700 mb-1.5 block"
                    >
                      E-posta Adresiniz <span className="text-red-500">*</span>
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="ornek@email.com"
                        className="pl-10 py-6 h-auto border-gray-200 focus:border-corporate-blue/30 focus:ring-corporate-blue/20 rounded-xl"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  {userType === "client" ? (
                    <div>
                      <Label
                        htmlFor="company"
                        className="text-sm font-medium text-gray-700 mb-1.5 block"
                      >
                        Şirket Adı
                      </Label>
                      <div className="relative">
                        <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                        <Input
                          id="company"
                          name="company"
                          placeholder="Şirketinizin adı"
                          className="pl-10 py-6 h-auto border-gray-200 focus:border-corporate-blue/30 focus:ring-corporate-blue/20 rounded-xl"
                          value={formData.company}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  ) : (
                    <div>
                      <Label
                        htmlFor="role"
                        className="text-sm font-medium text-gray-700 mb-1.5 block"
                      >
                        Uzmanlık Alanınız
                      </Label>
                      <div className="relative">
                        <PenTool className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                        <Input
                          id="role"
                          name="role"
                          placeholder="Örn: Frontend Developer, UI Designer"
                          className="pl-10 py-6 h-auto border-gray-200 focus:border-corporate-blue/30 focus:ring-corporate-blue/20 rounded-xl"
                          value={formData.role}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  )}
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6">
                  <div>
                    <Label
                      htmlFor="password"
                      className="text-sm font-medium text-gray-700 mb-1.5 block"
                    >
                      Şifre <span className="text-red-500">*</span>
                    </Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                      <Input
                        id="password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        className="pl-10 pr-10 py-6 h-auto border-gray-200 focus:border-corporate-blue/30 focus:ring-corporate-blue/20 rounded-xl"
                        value={formData.password}
                        onChange={handleInputChange}
                        required
                      />
                      <button
                        type="button"
                        onClick={togglePasswordVisibility}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        {showPassword ? (
                          <EyeOff className="h-5 w-5" />
                        ) : (
                          <Eye className="h-5 w-5" />
                        )}
                      </button>
                    </div>
                    <p className="text-xs text-gray-500 mt-1.5">
                      Şifreniz en az 8 karakter uzunluğunda olmalıdır.
                    </p>
                  </div>

                  <div>
                    <Label
                      htmlFor="confirmPassword"
                      className="text-sm font-medium text-gray-700 mb-1.5 block"
                    >
                      Şifre Tekrar <span className="text-red-500">*</span>
                    </Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                      <Input
                        id="confirmPassword"
                        name="confirmPassword"
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        className="pl-10 py-6 h-auto border-gray-200 focus:border-corporate-blue/30 focus:ring-corporate-blue/20 rounded-xl"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Checkbox
                        id="agreeTerms"
                        name="agreeTerms"
                        checked={formData.agreeTerms}
                        onCheckedChange={(checked) =>
                          setFormData({
                            ...formData,
                            agreeTerms: !!checked,
                          })
                        }
                        className="data-[state=checked]:bg-corporate-blue data-[state=checked]:border-corporate-blue"
                      />
                      <label
                        htmlFor="agreeTerms"
                        className="ml-2 text-sm font-medium text-gray-600"
                      >
                        <span className="text-red-500 mr-1">*</span>
                        <a
                          href="/terms"
                          className="text-corporate-blue hover:underline"
                        >
                          Kullanım Koşulları
                        </a>{" "}
                        ve{" "}
                        <a
                          href="/privacy"
                          className="text-corporate-blue hover:underline"
                        >
                          Gizlilik Politikası
                        </a>
                        'nı kabul ediyorum
                      </label>
                    </div>

                    <div className="flex items-center">
                      <Checkbox
                        id="receiveUpdates"
                        name="receiveUpdates"
                        checked={formData.receiveUpdates}
                        onCheckedChange={(checked) =>
                          setFormData({
                            ...formData,
                            receiveUpdates: !!checked,
                          })
                        }
                        className="data-[state=checked]:bg-corporate-blue data-[state=checked]:border-corporate-blue"
                      />
                      <label
                        htmlFor="receiveUpdates"
                        className="ml-2 text-sm font-medium text-gray-600"
                      >
                        Hellospace'den güncellemeler ve özel teklifler almak
                        istiyorum
                      </label>
                    </div>
                  </div>
                </div>
              )}

              <div className="flex justify-between">
                {step === 2 && (
                  <Button
                    type="button"
                    variant="outline"
                    className="py-6 h-auto text-base font-medium rounded-xl border-gray-200 hover:bg-gray-50"
                    onClick={() => setStep(1)}
                    disabled={isLoading}
                  >
                    <ArrowLeft className="mr-2 h-5 w-5" /> Geri
                  </Button>
                )}
                <Button
                  type="submit"
                  className={`${step === 1 ? "w-full" : ""} py-6 h-auto text-base font-semibold rounded-xl shadow-lg ${userType === "client" ? "bg-corporate-teal hover:bg-corporate-teal/90 shadow-corporate-teal/20" : "bg-corporate-peach hover:bg-corporate-peach/90 shadow-corporate-peach/20"} text-white transition-all duration-300`}
                  disabled={isLoading}
                >
                  <span className="flex items-center justify-center">
                    {isLoading
                      ? "İşleniyor..."
                      : step === 1
                        ? "Devam Et"
                        : "Hesap Oluştur"}
                    {!isLoading && step === 1 && (
                      <ArrowRight className="ml-2 h-5 w-5" />
                    )}
                  </span>
                </Button>
              </div>
            </form>

            <div className="mt-8">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <Separator className="w-full" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-white px-3 text-gray-500">
                    Veya şununla devam et
                  </span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
                <Button
                  type="button"
                  variant="outline"
                  className="py-5 h-auto text-sm font-medium border-gray-200 hover:bg-gray-50 rounded-xl transition-colors"
                  onClick={() => handleSocialSignUp("google")}
                  disabled={isLoading}
                >
                  <Globe className="h-5 w-5 mr-2 text-corporate-blue" />
                  Google ile Kaydol
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  className="py-5 h-auto text-sm font-medium border-gray-200 hover:bg-gray-50 rounded-xl transition-colors"
                  onClick={() => handleSocialSignUp("github")}
                  disabled={isLoading}
                >
                  <Github className="h-5 w-5 mr-2 text-gray-700" />
                  GitHub ile Kaydol
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  className="py-5 h-auto text-sm font-medium border-gray-200 hover:bg-gray-50 rounded-xl transition-colors"
                  onClick={() => handleSocialSignUp("linkedin")}
                  disabled={isLoading}
                >
                  <Linkedin className="h-5 w-5 mr-2 text-blue-600" />
                  LinkedIn ile Kaydol
                </Button>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-600">
                Zaten bir hesabınız var mı?{" "}
                <Link
                  to="/signin"
                  className={`font-medium ${userType === "client" ? "text-corporate-teal" : "text-corporate-peach"} hover:underline transition-colors`}
                >
                  Giriş Yapın
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Right Column - Benefits */}
        <div className="hidden lg:block lg:col-span-2">
          <div
            className={`h-full ${userType === "client" ? "bg-gradient-to-br from-corporate-blue via-corporate-blue/90 to-corporate-blue/80" : "bg-gradient-to-br from-corporate-blue via-corporate-blue/90 to-corporate-blue/80"} text-white rounded-3xl shadow-2xl relative overflow-hidden`}
          >
            {/* Abstract background elements */}
            <div
              className={`absolute -top-[30%] -right-[10%] w-[70%] h-[70%] rounded-full ${userType === "client" ? "bg-gradient-to-br from-corporate-teal/20 to-corporate-peach/20" : "bg-gradient-to-br from-corporate-peach/20 to-corporate-teal/20"} blur-3xl animate-pulse duration-3000`}
            />
            <div
              className={`absolute -bottom-[20%] -left-[10%] w-[60%] h-[60%] rounded-full ${userType === "client" ? "bg-gradient-to-tr from-corporate-cream/20 to-corporate-teal/20" : "bg-gradient-to-tr from-corporate-cream/20 to-corporate-peach/20"} blur-3xl animate-pulse duration-2000`}
            />
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:30px_30px]" />

            <div className="relative z-10 p-10 flex flex-col h-full justify-between">
              <div>
                <div className="inline-flex items-center px-3 py-1.5 mb-6 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
                  <User
                    className={`h-4 w-4 ${userType === "client" ? "text-corporate-teal" : "text-corporate-peach"} mr-2`}
                  />
                  <span className="text-xs font-medium text-corporate-cream">
                    {userType === "client"
                      ? "Müşteriler İçin"
                      : "Yazılımcılar & Tasarımcılar İçin"}
                  </span>
                </div>

                <h2 className="text-2xl font-bold mb-8">
                  {userType === "client"
                    ? "Hellospace ile Yetenek Bulmanın Avantajları"
                    : "Hellospace ile Çalışmanın Avantajları"}
                </h2>

                <ul className="space-y-6">
                  {userType === "client" ? (
                    <>
                      <li className="flex">
                        <div className="w-12 h-12 rounded-full bg-corporate-teal/20 flex items-center justify-center mr-4 flex-shrink-0">
                          <User className="h-6 w-6 text-corporate-teal" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-white mb-1 text-lg">
                            Elit Yetenek Havuzu
                          </h3>
                          <p className="text-corporate-cream/90 text-sm leading-relaxed">
                            En iyi %3'lük dilime giren, titizlikle seçilmiş
                            yazılımcı ve tasarımcılarla çalışın.
                          </p>
                        </div>
                      </li>
                      <li className="flex">
                        <div className="w-12 h-12 rounded-full bg-corporate-teal/20 flex items-center justify-center mr-4 flex-shrink-0">
                          <Building className="h-6 w-6 text-corporate-teal" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-white mb-1 text-lg">
                            Şirketinize Özel Eşleştirme
                          </h3>
                          <p className="text-corporate-cream/90 text-sm leading-relaxed">
                            AI algoritmalarımız, şirket kültürünüze ve proje
                            gereksinimlerinize en uygun yetenekleri bulur.
                          </p>
                        </div>
                      </li>
                      <li className="flex">
                        <div className="w-12 h-12 rounded-full bg-corporate-teal/20 flex items-center justify-center mr-4 flex-shrink-0">
                          <Lock className="h-6 w-6 text-corporate-teal" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-white mb-1 text-lg">
                            Risksiz Deneme
                          </h3>
                          <p className="text-corporate-cream/90 text-sm leading-relaxed">
                            İlk iki hafta memnun kalmazsanız, ücret iadesi
                            garantisi sunuyoruz.
                          </p>
                        </div>
                      </li>
                    </>
                  ) : (
                    <>
                      <li className="flex">
                        <div className="w-12 h-12 rounded-full bg-corporate-peach/20 flex items-center justify-center mr-4 flex-shrink-0">
                          <Globe className="h-6 w-6 text-corporate-peach" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-white mb-1 text-lg">
                            Global Fırsatlar
                          </h3>
                          <p className="text-corporate-cream/90 text-sm leading-relaxed">
                            Dünyanın dört bir yanından prestijli şirketlerle
                            çalışma fırsatı yakalayın.
                          </p>
                        </div>
                      </li>
                      <li className="flex">
                        <div className="w-12 h-12 rounded-full bg-corporate-peach/20 flex items-center justify-center mr-4 flex-shrink-0">
                          <Code className="h-6 w-6 text-corporate-peach" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-white mb-1 text-lg">
                            Rekabetçi Ücretler
                          </h3>
                          <p className="text-corporate-cream/90 text-sm leading-relaxed">
                            Global piyasa standartlarında, yeteneklerinizin
                            değerini yansıtan ücretler kazanın.
                          </p>
                        </div>
                      </li>
                      <li className="flex">
                        <div className="w-12 h-12 rounded-full bg-corporate-peach/20 flex items-center justify-center mr-4 flex-shrink-0">
                          <PenTool className="h-6 w-6 text-corporate-peach" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-white mb-1 text-lg">
                            Esnek Çalışma
                          </h3>
                          <p className="text-corporate-cream/90 text-sm leading-relaxed">
                            Kendi programınızı oluşturun, istediğiniz yerden
                            çalışın.
                          </p>
                        </div>
                      </li>
                    </>
                  )}
                </ul>
              </div>

              <div className="mt-8 bg-white/10 rounded-xl p-5 border border-white/10">
                <div className="flex items-center mb-3">
                  <CheckCircle
                    className={`h-5 w-5 ${userType === "client" ? "text-corporate-teal" : "text-corporate-peach"} mr-2`}
                  />
                  <h4 className="font-medium text-white">
                    {userType === "client"
                      ? "Müşteri Memnuniyeti"
                      : "Geliştirici Memnuniyeti"}
                  </h4>
                </div>
                <p className="text-corporate-cream/80 text-sm mb-4">
                  {userType === "client"
                    ? "Müşterilerimizin %98'i Hellospace deneyiminden memnun kaldıklarını belirtiyor."
                    : "Geliştiricilerimizin %96'sı Hellospace ile çalışmayı diğer platformlara tercih ediyor."}
                </p>
                <Link
                  to={userType === "client" ? "/services" : "/apply"}
                  className="inline-flex items-center text-white text-sm font-medium hover:text-corporate-cream transition-colors"
                >
                  {userType === "client"
                    ? "Hizmetlerimizi Keşfedin"
                    : "Başvuru Sürecini Öğrenin"}
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
