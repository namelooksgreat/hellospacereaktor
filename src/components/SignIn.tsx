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
} from "lucide-react";

const SignIn = () => {
  const [userType, setUserType] = useState<string>("client");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // For demo purposes, always succeed
      console.log("Signed in as", userType, "with email", email);
    }, 1500);
  };

  const handleSocialSignIn = (provider: string) => {
    setIsLoading(true);
    setError("");

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      console.log("Signed in with", provider);
    }, 1500);
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

        {/* Left Column - Sign In Form */}
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
                Hesabınıza giriş yaparak yolculuğunuza devam edin
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

            <form onSubmit={handleSignIn} className="space-y-6">
              <div className="space-y-4">
                <div>
                  <Label
                    htmlFor="email"
                    className="text-sm font-medium text-gray-700 mb-1.5 block"
                  >
                    E-posta Adresi
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="ornek@email.com"
                      className="pl-10 py-6 h-auto border-gray-200 focus:border-corporate-blue/30 focus:ring-corporate-blue/20 rounded-xl"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <Label
                      htmlFor="password"
                      className="text-sm font-medium text-gray-700"
                    >
                      Şifre
                    </Label>
                    <Link
                      to="/forgot-password"
                      className="text-sm text-corporate-blue hover:text-corporate-blue/80 transition-colors"
                    >
                      Şifremi Unuttum
                    </Link>
                  </div>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <Input
                      id="password"
                      type="password"
                      placeholder="••••••••"
                      className="pl-10 py-6 h-auto border-gray-200 focus:border-corporate-blue/30 focus:ring-corporate-blue/20 rounded-xl"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="flex items-center">
                  <Checkbox
                    id="remember"
                    checked={rememberMe}
                    onCheckedChange={(checked) => setRememberMe(!!checked)}
                    className="data-[state=checked]:bg-corporate-blue data-[state=checked]:border-corporate-blue"
                  />
                  <label
                    htmlFor="remember"
                    className="ml-2 text-sm font-medium text-gray-600"
                  >
                    Beni Hatırla
                  </label>
                </div>
              </div>

              <Button
                type="submit"
                className={`w-full py-6 h-auto text-base font-semibold rounded-xl shadow-lg ${
                  userType === "client"
                    ? "bg-corporate-teal hover:bg-corporate-teal/90 shadow-corporate-teal/20"
                    : "bg-corporate-peach hover:bg-corporate-peach/90 shadow-corporate-peach/20"
                } text-white transition-all duration-300`}
                disabled={isLoading}
              >
                <span className="flex items-center justify-center">
                  {isLoading ? "Giriş Yapılıyor..." : "Giriş Yap"}
                  {!isLoading && <ArrowRight className="ml-2 h-5 w-5" />}
                </span>
              </Button>
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
                  onClick={() => handleSocialSignIn("google")}
                  disabled={isLoading}
                >
                  <Globe className="h-5 w-5 mr-2 text-corporate-blue" />
                  Google ile Giriş
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  className="py-5 h-auto text-sm font-medium border-gray-200 hover:bg-gray-50 rounded-xl transition-colors"
                  onClick={() => handleSocialSignIn("github")}
                  disabled={isLoading}
                >
                  <Github className="h-5 w-5 mr-2 text-gray-700" />
                  GitHub ile Giriş
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  className="py-5 h-auto text-sm font-medium border-gray-200 hover:bg-gray-50 rounded-xl transition-colors"
                  onClick={() => handleSocialSignIn("linkedin")}
                  disabled={isLoading}
                >
                  <Linkedin className="h-5 w-5 mr-2 text-blue-600" />
                  LinkedIn ile Giriş
                </Button>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-600">
                Henüz hesabınız yok mu?{" "}
                <Link
                  to="/signup"
                  className={`font-medium ${userType === "client" ? "text-corporate-teal" : "text-corporate-peach"} hover:underline transition-colors`}
                >
                  Hemen Kaydolun
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

export default SignIn;
