import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Button, GradientButton } from "@/design-system/components/buttons";
import { Input, Textarea } from "@/design-system/components/inputs";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  FeatureCard,
} from "@/design-system/components/cards";
import { Badge } from "@/design-system/components/badges";
import { Icon, IconWithText } from "@/design-system/components/icons";
import { colors, gradients } from "@/design-system/core/colors";
import { spacing } from "@/design-system/core/spacing";
import { cn } from "@/lib/utils";
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  MessageCircle,
  Send,
  CheckCircle,
  AlertCircle,
  Building,
  Clock,
  Calendar,
  ArrowRight,
  Rocket,
} from "lucide-react";

const ContactUs = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  // Form submission state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  // Handle input change
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
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

  // Reset form after successful submission
  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
    setSubmitSuccess(false);
  };

  // Office locations
  const officeLocations = [
    {
      city: "İstanbul",
      address: "Levent, İstanbul, Türkiye",
      phone: "+90 (212) 123 45 67",
      email: "istanbul@hellospace.com",
      hours: "Pazartesi - Cuma: 09:00 - 18:00",
    },
    {
      city: "Ankara",
      address: "Çankaya, Ankara, Türkiye",
      phone: "+90 (312) 123 45 67",
      email: "ankara@hellospace.com",
      hours: "Pazartesi - Cuma: 09:00 - 18:00",
    },
    {
      city: "İzmir",
      address: "Konak, İzmir, Türkiye",
      phone: "+90 (232) 123 45 67",
      email: "izmir@hellospace.com",
      hours: "Pazartesi - Cuma: 09:00 - 18:00",
    },
  ];

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

          {/* Animated stars */}
          <div className="absolute inset-0">
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-white animate-twinkle"
                style={{
                  width: `${Math.random() * 2 + 1}px`,
                  height: `${Math.random() * 2 + 1}px`,
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  opacity: Math.random() * 0.7 + 0.3,
                }}
              />
            ))}
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 mb-6 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
            <MessageCircle className="h-5 w-5 text-corporate-peach mr-2" />
            <span className="text-sm font-medium text-corporate-cream">
              Bize Ulaşın
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
            Projenizi Hayata Geçirmek İçin{" "}
            <span className="text-corporate-teal">Yanınızdayız</span>
          </h1>
          <p className="text-xl text-corporate-cream/90 mb-8 max-w-3xl mx-auto">
            Sorularınız, önerileriniz veya işbirliği fırsatları için bizimle
            iletişime geçin. Ekibimiz size en kısa sürede dönüş yapacaktır.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 bg-white relative">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-[10%] right-[5%] w-[30%] h-[30%] rounded-full bg-gradient-to-br from-corporate-teal/5 to-corporate-peach/5 blur-3xl" />
          <div className="absolute bottom-[10%] left-[5%] w-[30%] h-[30%] rounded-full bg-gradient-to-tr from-corporate-cream/5 to-corporate-teal/5 blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column - Contact Form */}
            <div className="lg:col-span-7">
              <Card className="shadow-lg border-corporate-teal/10">
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <div className="w-10 h-10 rounded-full bg-corporate-teal/10 flex items-center justify-center mr-3">
                      <MessageCircle className="h-5 w-5 text-corporate-teal" />
                    </div>
                    <div>
                      <CardTitle>İletişim Formu</CardTitle>
                      <CardDescription>
                        Bizimle iletişime geçin, 24 saat içinde dönüş yapalım
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  {submitSuccess ? (
                    <div className="text-center py-8">
                      <div className="w-16 h-16 bg-corporate-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="h-8 w-8 text-corporate-teal" />
                      </div>
                      <h3 className="text-xl font-bold text-corporate-blue mb-2">
                        Mesajınız Alındı!
                      </h3>
                      <p className="text-gray-600 mb-6">
                        İletişim talebiniz başarıyla alınmıştır. Ekibimiz en
                        kısa sürede sizinle iletişime geçecektir.
                      </p>
                      <Button
                        variant="secondary"
                        onClick={handleReset}
                        className="mx-auto"
                      >
                        Yeni Mesaj Gönder
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Adınız Soyadınız"
                          required
                        />
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="E-posta Adresiniz"
                          required
                        />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Telefon Numaranız"
                        />
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          placeholder="Konu"
                          required
                        />
                      </div>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Mesajınız"
                        required
                      />

                      {submitError && (
                        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md flex items-start">
                          <AlertCircle className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                          <p className="text-sm">{submitError}</p>
                        </div>
                      )}

                      <div className="flex justify-end">
                        <GradientButton
                          type="submit"
                          gradientFrom={colors.corporate.teal}
                          gradientTo={colors.teal[500]}
                          disabled={isSubmitting}
                          rightIcon={
                            isSubmitting ? (
                              <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            ) : (
                              <Send className="h-5 w-5" />
                            )
                          }
                        >
                          {isSubmitting ? "Gönderiliyor..." : "Mesaj Gönder"}
                        </GradientButton>
                      </div>
                    </form>
                  )}
                </CardContent>
              </Card>

              {/* FAQ Section */}
              <div className="mt-12">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 rounded-full bg-corporate-peach/10 flex items-center justify-center mr-3">
                    <MessageCircle className="h-5 w-5 text-corporate-peach" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-corporate-blue">
                      Sıkça Sorulan Sorular
                    </h2>
                    <p className="text-gray-600">
                      İletişim hakkında merak edilenler
                    </p>
                  </div>
                </div>

                <div className="space-y-4 mt-6">
                  {[
                    {
                      question: "Ne kadar sürede dönüş yapıyorsunuz?",
                      answer:
                        "İletişim formundan gelen taleplerinize genellikle 24 saat içerisinde dönüş yapmaktayız. Acil durumlarda telefon numaralarımızdan bize ulaşabilirsiniz.",
                    },
                    {
                      question: "Yüz yüze görüşme için randevu alabilir miyim?",
                      answer:
                        "Elbette, ofislerimizde yüz yüze görüşme için randevu alabilirsiniz. Bunun için iletişim formunu doldurarak veya telefon numaralarımızdan bizi arayarak randevu talebinde bulunabilirsiniz.",
                    },
                    {
                      question:
                        "Teknik destek için nasıl iletişime geçebilirim?",
                      answer:
                        "Teknik destek talepleriniz için support@hellospace.com adresine e-posta gönderebilir veya iletişim formunda konu kısmına 'Teknik Destek' yazarak talebinizi iletebilirsiniz.",
                    },
                  ].map((faq, index) => (
                    <Card key={index} className="border-corporate-blue/10">
                      <CardContent className="p-6">
                        <h3 className="text-lg font-semibold text-corporate-blue mb-2">
                          {faq.question}
                        </h3>
                        <p className="text-gray-600">{faq.answer}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Contact Information */}
            <div className="lg:col-span-5">
              <div className="sticky top-24 space-y-8">
                {/* Contact Info Card */}
                <Card className="border-corporate-blue/10 shadow-md">
                  <CardHeader>
                    <div className="flex items-center mb-2">
                      <div className="w-10 h-10 rounded-full bg-corporate-blue/10 flex items-center justify-center mr-3">
                        <Phone className="h-5 w-5 text-corporate-blue" />
                      </div>
                      <div>
                        <CardTitle>İletişim Bilgilerimiz</CardTitle>
                        <CardDescription>Bize doğrudan ulaşın</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-corporate-blue/10 flex items-center justify-center mr-3 flex-shrink-0">
                        <Mail className="h-5 w-5 text-corporate-blue" />
                      </div>
                      <div>
                        <h3 className="font-medium text-corporate-blue">
                          E-posta
                        </h3>
                        <p className="text-gray-600">info@hellospace.com</p>
                        <p className="text-gray-600">support@hellospace.com</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-corporate-blue/10 flex items-center justify-center mr-3 flex-shrink-0">
                        <Phone className="h-5 w-5 text-corporate-blue" />
                      </div>
                      <div>
                        <h3 className="font-medium text-corporate-blue">
                          Telefon
                        </h3>
                        <p className="text-gray-600">+90 (212) 123 45 67</p>
                        <p className="text-gray-600">+90 (212) 123 45 68</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-corporate-blue/10 flex items-center justify-center mr-3 flex-shrink-0">
                        <Clock className="h-5 w-5 text-corporate-blue" />
                      </div>
                      <div>
                        <h3 className="font-medium text-corporate-blue">
                          Çalışma Saatleri
                        </h3>
                        <p className="text-gray-600">
                          Pazartesi - Cuma: 09:00 - 18:00
                        </p>
                        <p className="text-gray-600">
                          Cumartesi - Pazar: Kapalı
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-corporate-blue/10 flex items-center justify-center mr-3 flex-shrink-0">
                        <Globe className="h-5 w-5 text-corporate-blue" />
                      </div>
                      <div>
                        <h3 className="font-medium text-corporate-blue">
                          Sosyal Medya
                        </h3>
                        <div className="flex space-x-3 mt-2">
                          {[
                            { icon: "Twitter", url: "#" },
                            { icon: "Linkedin", url: "#" },
                            { icon: "Instagram", url: "#" },
                            { icon: "Facebook", url: "#" },
                          ].map((social, index) => (
                            <a
                              key={index}
                              href={social.url}
                              className="w-8 h-8 rounded-full bg-corporate-blue/10 flex items-center justify-center hover:bg-corporate-blue/20 transition-colors"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Icon
                                name={social.icon as any}
                                size="sm"
                                className="text-corporate-blue"
                              />
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Office Locations */}
                <div className="space-y-4">
                  <div className="flex items-center mb-2">
                    <div className="w-10 h-10 rounded-full bg-corporate-teal/10 flex items-center justify-center mr-3">
                      <Building className="h-5 w-5 text-corporate-teal" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-corporate-blue">
                        Ofislerimiz
                      </h2>
                      <p className="text-gray-600">
                        Türkiye genelindeki lokasyonlarımız
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4">
                    {officeLocations.map((office, index) => (
                      <Card
                        key={index}
                        className="border-corporate-teal/10 hover:shadow-md transition-shadow"
                      >
                        <CardContent className="p-6">
                          <div className="flex items-center mb-4">
                            <Badge variant="secondary" className="mr-2">
                              {office.city}
                            </Badge>
                          </div>
                          <div className="space-y-3">
                            <IconWithText
                              icon="MapPin"
                              text={office.address}
                              iconSize="sm"
                              variant="secondary"
                              textClassName="text-gray-600 text-sm"
                            />
                            <IconWithText
                              icon="Phone"
                              text={office.phone}
                              iconSize="sm"
                              variant="secondary"
                              textClassName="text-gray-600 text-sm"
                            />
                            <IconWithText
                              icon="Mail"
                              text={office.email}
                              iconSize="sm"
                              variant="secondary"
                              textClassName="text-gray-600 text-sm"
                            />
                            <IconWithText
                              icon="Clock"
                              text={office.hours}
                              iconSize="sm"
                              variant="secondary"
                              textClassName="text-gray-600 text-sm"
                            />
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 px-4 bg-corporate-blue/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="primary" className="mb-4">
              Bizi Ziyaret Edin
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-corporate-blue">
              Merkez Ofisimiz
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              İstanbul Levent'teki merkez ofisimizi ziyaret ederek ekibimizle
              tanışabilir ve projelerinizi yüz yüze görüşebilirsiniz.
            </p>
          </div>

          <div className="rounded-xl overflow-hidden shadow-lg border border-corporate-blue/10 h-[400px] w-full">
            {/* In a real implementation, you would use a map component like Google Maps or Mapbox */}
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-corporate-blue mx-auto mb-4" />
                <p className="text-lg font-medium text-corporate-blue">
                  Harita Görünümü
                </p>
                <p className="text-gray-600">Levent, İstanbul, Türkiye</p>
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

        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center px-4 py-2 mb-6 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm shadow-lg">
            <Rocket className="h-5 w-5 text-corporate-peach mr-2" />
            <span className="text-sm font-medium text-corporate-cream">
              Projelerinizi Hayata Geçirelim
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Hayallerinizi{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-corporate-peach to-corporate-teal">
              Gerçeğe Dönüştürelim
            </span>
          </h2>
          <p className="text-white/90 mb-8 text-lg leading-relaxed max-w-3xl mx-auto">
            Yazılım ihtiyaçlarınız için uzman ekibimizle yanınızdayız. Ücretsiz
            danışmanlık hizmetimizden yararlanarak projenizi hayata geçirmenin
            ilk adımını atın.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center mb-8">
            <Link to="/consultation">
              <Button
                variant="secondary"
                size="lg"
                rounded="full"
                className="shadow-xl shadow-corporate-teal/30 transform transition-all duration-300 hover:scale-105"
                rightIcon={
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                }
              >
                Ücretsiz Danışmanlık Alın
              </Button>
            </Link>
            <Link to="/services/website-development">
              <Button
                variant="outline"
                size="lg"
                rounded="full"
                className="border-white/30 hover:bg-white/10 backdrop-blur-sm hover:border-white/50 transition-all duration-300 bg-corporate-blue/30 text-white"
              >
                Hizmetlerimizi Keşfedin
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ContactUs;
