import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import {
  ArrowRight,
  Search,
  Code,
  DollarSign,
  Briefcase,
  Clock,
  Shield,
  Users,
  Zap,
  Globe,
  Rocket,
  MessageCircle,
  Laptop,
  Puzzle,
  Milestone,
  Lightbulb,
  Sparkles,
  Star,
  Award,
  Calendar,
  FileCode,
  Headphones,
} from "lucide-react";

const DeveloperFAQ = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("");

  // Update active category based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      // Find the category that is currently in view
      for (const category of faqCategories) {
        const element = document.getElementById(category.id);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          if (top <= 200 && bottom >= 200) {
            setActiveCategory(category.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // FAQ categories and questions
  const faqCategories = [
    {
      id: "application",
      name: "Başvuru Süreci",
      icon: <FileCode className="h-5 w-5" />,
      questions: [
        {
          question:
            "Hellospace'e katılmak için hangi niteliklere sahip olmalıyım?",
          answer:
            "Alanınızda en az 2 yıllık profesyonel deneyime sahip olmanız, İngilizce iletişim kurabilmeniz ve uzaktan çalışma disiplinine sahip olmanız gerekmektedir. Teknik becerilerinizi değerlendiren testleri başarıyla tamamlamanız da önemlidir. Başvuru sürecimiz, yeteneklerinizin ve deneyiminizin doğrulanmasını içerir.",
        },
        {
          question: "Başvuru süreci ne kadar sürüyor?",
          answer:
            "Başvuru sürecimiz genellikle 1-2 hafta içinde tamamlanmaktadır. Bu süre, başvurunuzun incelenmesi, teknik değerlendirme ve görüşme aşamalarını kapsamaktadır. Başarılı olmanız durumunda, hemen proje eşleştirme sürecine başlayabiliriz. Süreç şu adımlardan oluşur: 1) Online başvuru, 2) Teknik değerlendirme, 3) Görüşme, 4) Platform onayı.",
        },
        {
          question: "Hangi teknoloji alanlarında uzmanlar arıyorsunuz?",
          answer:
            "Hellospace, geniş bir teknoloji yelpazesinde uzmanlar arıyor. Frontend (React, Vue, Angular), Backend (Node.js, Python, Java, PHP), Mobil (iOS, Android, React Native, Flutter), UI/UX Tasarım, DevOps, Veri Bilimi ve Yapay Zeka alanlarında deneyimli profesyonelleri platformumuza davet ediyoruz. Sürekli büyüyen müşteri tabanımız için farklı uzmanlık alanlarına ihtiyaç duyuyoruz.",
        },
        {
          question: "Teknik değerlendirme süreci nasıl işliyor?",
          answer:
            "Teknik değerlendirme sürecimiz, uzmanlık alanınıza göre özelleştirilmiş çeşitli testleri içerir. Bu testler, teknik bilginizi, problem çözme yeteneklerinizi ve kod kalitesini değerlendirir. Frontend geliştiriciler için UI oluşturma, backend geliştiriciler için API geliştirme, tasarımcılar için UX/UI tasarımı gibi pratik görevler verilir. Değerlendirme, gerçek dünya senaryolarına dayalıdır ve genellikle 2-4 saat sürer.",
        },
        {
          question: "Başvurum reddedilirse, tekrar başvurabilir miyim?",
          answer:
            "Evet, başvurunuz reddedilse bile 3 ay sonra tekrar başvurabilirsiniz. Bu süre, becerilerinizi geliştirmeniz ve eksikliklerinizi gidermeniz için bir fırsat olabilir. Tekrar başvuru yaparken, ilk değerlendirmede belirtilen geri bildirimleri dikkate almanız ve bu alanlarda nasıl ilerleme kaydettiğinizi göstermeniz önemlidir. Sürekli öğrenme ve gelişime değer veriyoruz.",
        },
      ],
    },
    {
      id: "payment",
      name: "Ödeme ve Ücretlendirme",
      icon: <DollarSign className="h-5 w-5" />,
      questions: [
        {
          question: "Ücretlendirme nasıl yapılıyor?",
          answer:
            "Ücretler, uzmanlık alanınıza, deneyiminize ve projenin kapsamına göre belirlenir. Saatlik veya proje bazlı ödeme seçenekleri sunuyoruz. Ödemeler, tercih ettiğiniz para birimi üzerinden ve düzenli olarak yapılmaktadır. Platform üzerinden şeffaf bir şekilde kazançlarınızı takip edebilir ve faturalandırma işlemlerinizi yönetebilirsiniz.",
        },
        {
          question: "Hellospace ne kadar komisyon alıyor?",
          answer:
            "Hellospace, kazancınızın %10-15'i arasında bir komisyon almaktadır. Bu oran, platform üzerindeki deneyiminize ve tamamladığınız proje sayısına göre değişebilir. Uzun vadeli çalışmalarda ve yüksek hacimli projelerde komisyon oranları düşebilir. Komisyon, müşteri bulma, ödeme güvencesi, sözleşme yönetimi ve teknik destek gibi platform hizmetlerini kapsar.",
        },
        {
          question: "Ödemeler ne sıklıkla yapılıyor?",
          answer:
            "Ödemeler, projenin yapısına bağlı olarak haftalık, iki haftalık veya aylık olarak yapılabilir. Saatlik çalışmalarda genellikle iki haftada bir ödeme yapılırken, proje bazlı çalışmalarda belirli kilometre taşlarına ulaşıldığında ödemeler gerçekleştirilir. Tüm ödemeler, anlaşılan ödeme döngüsünde, gecikme olmadan hesabınıza aktarılır.",
        },
        {
          question: "Hangi ödeme yöntemlerini kullanabiliyorum?",
          answer:
            "Hellospace, çeşitli ödeme yöntemleri sunmaktadır: Banka havalesi, PayPal, Wise, ve kripto para birimleri (Bitcoin, Ethereum). Tercih ettiğiniz ödeme yöntemini profilinizde belirtebilir ve istediğiniz zaman değiştirebilirsiniz. Her ödeme yöntemi için minimum ödeme tutarları ve işlem süreleri farklılık gösterebilir.",
        },
        {
          question: "Vergi konuları nasıl ele alınıyor?",
          answer:
            "Hellospace, vergi beyannameleriniz için gerekli kazanç raporlarını sağlar, ancak vergi yükümlülükleriniz sizin sorumluluğunuzdadır. Bulunduğunuz ülkenin vergi kanunlarına göre, serbest çalışan veya küçük işletme olarak vergi beyanında bulunmanız gerekebilir. Platform, bazı ülkeler için otomatik vergi hesaplaması ve fatura oluşturma özellikleri sunmaktadır. Vergi danışmanınızla görüşmenizi öneririz.",
        },
      ],
    },
    {
      id: "projects",
      name: "Projeler ve İş Akışı",
      icon: <Briefcase className="h-5 w-5" />,
      questions: [
        {
          question: "Ne tür projelerle çalışacağım?",
          answer:
            "Platformumuzda startup'lardan kurumsal şirketlere kadar çeşitli müşteriler için web, mobil, e-ticaret, SaaS ve kurumsal yazılım projeleri bulunmaktadır. Becerilerinize ve tercihlerinize en uygun projelerle eşleştirileceksiniz. Proje süreleri birkaç haftadan birkaç aya kadar değişebilir, uzun vadeli işbirliği fırsatları da mevcuttur.",
        },
        {
          question: "Proje eşleştirme süreci nasıl işliyor?",
          answer:
            "Yapay zeka destekli eşleştirme sistemimiz, becerilerinize, deneyiminize, çalışma tercihlerinize ve müsaitlik durumunuza göre en uygun projeleri belirler. Size sunulan proje önerilerini inceleyebilir ve ilgilendiğiniz projeler için başvurabilirsiniz. Müşteri ile kısa bir tanışma görüşmesi sonrasında, karşılıklı onay ile proje başlatılır.",
        },
        {
          question: "Aynı anda birden fazla projede çalışabilir miyim?",
          answer:
            "Evet, kapasitenizdeyse aynı anda birden fazla projede çalışabilirsiniz. Ancak, her projeye yeterli zaman ve enerji ayırabildiğinizden emin olmanız önemlidir. Platform üzerinden çalışma programınızı ve iş yükünüzü yönetebilir, müsaitlik durumunuzu güncelleyebilirsiniz. Müşterilerinize karşı taahhütlerinizi yerine getirmeniz, platformdaki itibarınız için kritik öneme sahiptir.",
        },
        {
          question: "Proje sırasında sorun yaşarsam ne yapmalıyım?",
          answer:
            "Proje sırasında teknik, iletişim veya ödeme ile ilgili herhangi bir sorun yaşarsanız, öncelikle müşteri ile açık bir iletişim kurmanızı öneririz. Sorun çözülmezse, platform destek ekibimiz arabuluculuk yapabilir ve çözüm sürecinde size yardımcı olabilir. 7/24 destek hattımız ve proje yöneticilerimiz, sorunların hızlı ve adil bir şekilde çözülmesini sağlar.",
        },
        {
          question: "Proje tamamlandıktan sonra ne olur?",
          answer:
            "Proje tamamlandığında, hem siz hem de müşteri karşılıklı değerlendirme yaparsınız. Olumlu değerlendirmeler profilinizde görünür ve gelecekteki eşleşmelerinizi olumlu etkiler. Başarılı projeler portföyünüze eklenebilir ve referans olarak kullanılabilir. Ayrıca, memnun müşterilerle uzun vadeli işbirliği fırsatları doğabilir veya yeni projeler için tekrar sizinle çalışmak isteyebilirler.",
        },
      ],
    },
    {
      id: "workstyle",
      name: "Çalışma Şekli ve Esneklik",
      icon: <Clock className="h-5 w-5" />,
      questions: [
        {
          question: "Ne kadar süre çalışmam gerekiyor?",
          answer:
            "Çalışma sürenizi kendiniz belirleyebilirsiniz. Tam zamanlı, yarı zamanlı veya proje bazlı çalışma seçenekleri sunuyoruz. Haftada minimum 10 saat ayırabilmeniz, projelerin sürekliliği açısından önerilmektedir. Profilinizde tercih ettiğiniz çalışma saatlerini belirtebilir ve buna göre projelerle eşleştirilirsiniz.",
        },
        {
          question: "Çalışma saatlerimi kendim belirleyebilir miyim?",
          answer:
            "Evet, çalışma saatlerinizi büyük ölçüde kendiniz belirleyebilirsiniz. Ancak, müşteri toplantıları ve ekip işbirliği için bazı ortak çalışma saatleri gerekebilir. Zaman dilimi farklılıklarını yönetmek ve müşterilerle etkili iletişim kurmak için belirli bir esneklik göstermeniz beklenebilir. Platform, çalışma saatlerinizi kaydetmenize ve yönetmenize yardımcı olan araçlar sunar.",
        },
        {
          question: "İstediğim yerden çalışabilir miyim?",
          answer:
            "Evet, Hellospace tamamen uzaktan çalışma modeline dayanmaktadır. Dünyanın herhangi bir yerinden, internet bağlantınızın olduğu her yerden çalışabilirsiniz. Dijital göçebe olarak seyahat ederken çalışabilir veya ev ofis ortamınızda kalabilirsiniz. Tek gereksinim, güvenilir bir internet bağlantısı ve müşterilerle etkili iletişim kurabilmenizdir.",
        },
        {
          question: "Tatil ve izin politikası nasıl işliyor?",
          answer:
            "Serbest çalışan olarak, tatil ve izin planlamanızı kendiniz yönetirsiniz. Uzun süreli bir mola veya tatil planladığınızda, bunu önceden müşterilerinize ve platform ekibine bildirmeniz önemlidir. Aktif projeleriniz varsa, izin planlarınızı proje takvimlerine göre ayarlamanız ve müşterilerinizle açık iletişim kurmanız beklenir. Platform, yokluğunuz sırasında gerekirse geçici destek sağlayabilir.",
        },
        {
          question: "Hangi ülkelerden başvuru yapabilirim?",
          answer:
            "Hellospace global bir platform olduğu için dünyanın her yerinden başvuru kabul ediyoruz. İnternet bağlantınızın olduğu her yerden çalışabilirsiniz. Farklı zaman dilimlerinde çalışma esnekliği sunuyoruz. Bazı ülkelerde ödeme yöntemleri veya vergi konularında özel düzenlemeler olabilir, bu durumda platform ekibimiz size rehberlik edecektir.",
        },
      ],
    },
    {
      id: "platform",
      name: "Platform Özellikleri",
      icon: <Laptop className="h-5 w-5" />,
      questions: [
        {
          question: "Hellospace platformunda hangi araçlar sunuluyor?",
          answer:
            "Hellospace, verimli çalışmanızı sağlayan çeşitli araçlar sunar: Proje yönetim paneli, zaman takibi, iletişim araçları (mesajlaşma, görüntülü görüşme, ekran paylaşımı), dosya paylaşımı, görev yönetimi, fatura oluşturma ve ödeme takibi. Ayrıca, kod depoları, tasarım araçları ve test ortamları ile entegrasyon sağlanmaktadır.",
        },
        {
          question: "Müşterilerle nasıl iletişim kuracağım?",
          answer:
            "Platform üzerindeki entegre iletişim araçlarımızla müşterilerle doğrudan iletişim kurabilirsiniz. Mesajlaşma, görüntülü görüşme, ekran paylaşımı ve dosya paylaşımı özellikleri mevcuttur. Tüm iletişim kayıtları platform üzerinde saklanır, böylece proje geçmişine her zaman erişebilirsiniz. Ayrıca, müşteri ile anlaşmanız dahilinde platform dışı iletişim kanalları da kullanılabilir.",
        },
        {
          question: "Platform üzerinden nasıl destek alabilirim?",
          answer:
            "7/24 destek ekibimiz, teknik sorunlar, ödeme konuları, müşteri ilişkileri ve platform kullanımı hakkında yardımcı olmak için hazırdır. Canlı sohbet, e-posta veya destek bileti oluşturarak destek ekibimize ulaşabilirsiniz. Ayrıca, sık karşılaşılan sorunlar için kapsamlı bir yardım merkezi ve eğitim videoları sunuyoruz. Premium üyeler için öncelikli destek ve özel proje yöneticisi atanabilir.",
        },
        {
          question: "Platformda nasıl daha görünür olabilirim?",
          answer:
            "Platformda daha görünür olmak için: 1) Profilinizi eksiksiz ve güncel tutun, 2) Becerilerinizi doğrulayan sertifikalar ve portföy çalışmaları ekleyin, 3) Tamamlanan projelerden olumlu değerlendirmeler alın, 4) Platform içi etkinliklere ve topluluklara katılın, 5) Uzmanlık alanınızda makaleler yazın veya webinarlara katılın. Algoritma, aktif ve olumlu değerlendirmelere sahip profilleri daha üst sıralarda gösterir.",
        },
        {
          question: "Platformda kariyer gelişimi için ne gibi fırsatlar var?",
          answer:
            "Hellospace, kariyer gelişiminiz için çeşitli fırsatlar sunar: 1) Mentorluk programları, 2) Beceri geliştirme kursları ve sertifikalar, 3) Endüstri uzmanlarıyla webinarlar, 4) Topluluk etkinlikleri ve networking, 5) Yeni teknolojileri öğrenme fırsatları. Ayrıca, farklı projelerde çalışarak portföyünüzü genişletebilir ve yeni beceriler kazanabilirsiniz. Başarılı üyeler için liderlik ve mentorluk rolleri de mevcuttur.",
        },
      ],
    },
    {
      id: "community",
      name: "Topluluk ve Networking",
      icon: <Users className="h-5 w-5" />,
      questions: [
        {
          question: "Hellospace'te nasıl bir topluluk var?",
          answer:
            "Hellospace, 150+ ülkeden 5000+ yazılımcı ve tasarımcıdan oluşan global bir topluluğa sahiptir. Farklı uzmanlık alanlarından profesyoneller, bilgi paylaşımı, networking ve işbirliği için bir araya gelir. Platform üzerindeki forum, özel ilgi grupları ve etkinlikler aracılığıyla topluluk üyeleriyle etkileşime geçebilirsiniz.",
        },
        {
          question: "Diğer geliştiricilerle işbirliği yapabilir miyim?",
          answer:
            "Evet, platform üzerinde diğer geliştiricilerle işbirliği yapabilirsiniz. Büyük projeler için takımlar oluşturabilir, uzmanlık alanlarınızı birleştirerek daha kapsamlı çözümler sunabilirsiniz. Ayrıca, bilgi paylaşımı, kod incelemeleri ve mentorluk gibi faaliyetlerle birbirinize destek olabilirsiniz. Platform, işbirliği araçları ve takım yönetimi özellikleri sunmaktadır.",
        },
        {
          question: "Platform üzerinde mentorluk imkanları var mı?",
          answer:
            "Evet, Hellospace'te hem mentor hem de mentee olarak yer alabilirsiniz. Deneyimli profesyoneller, yeni başlayanlara rehberlik edebilir, kariyer tavsiyesi verebilir ve teknik konularda yardımcı olabilir. Resmi mentorluk programımız, yapılandırılmış bir öğrenme deneyimi sunar. Mentorlar için ek gelir fırsatları da mevcuttur. Mentorluk ilişkileri, uzun vadeli profesyonel bağlantılar kurmanıza yardımcı olabilir.",
        },
        {
          question: "Hellospace'te ne tür etkinlikler düzenleniyor?",
          answer:
            "Hellospace, çeşitli online etkinlikler düzenler: Webinarlar, workshop'lar, hackathon'lar, soru-cevap oturumları, networking etkinlikleri ve teknoloji konferansları. Bu etkinlikler, yeni beceriler öğrenmenize, endüstri trendlerini takip etmenize ve diğer profesyonellerle bağlantı kurmanıza olanak tanır. Bazı bölgelerde yüz yüze buluşmalar da organize edilmektedir.",
        },
        {
          question: "Topluluğa nasıl katkıda bulunabilirim?",
          answer:
            "Topluluğa çeşitli şekillerde katkıda bulunabilirsiniz: 1) Forum ve tartışmalarda bilgi paylaşımı, 2) Blog yazıları ve teknik makaleler yazma, 3) Webinar ve workshop'lar düzenleme, 4) Açık kaynak projelere katılım, 5) Yeni üyelere mentorluk yapma, 6) Yerel meetup'lar organize etme. Topluluk katkılarınız, platformdaki görünürlüğünüzü artırır ve profesyonel ağınızı genişletir.",
        },
      ],
    },
    {
      id: "security",
      name: "Güvenlik ve Gizlilik",
      icon: <Shield className="h-5 w-5" />,
      questions: [
        {
          question: "Kişisel ve finansal bilgilerim nasıl korunuyor?",
          answer:
            "Hellospace, kişisel ve finansal bilgilerinizi en üst düzey güvenlik önlemleriyle korur. Tüm veriler SSL/TLS şifreleme ile korunur, ödeme bilgileri PCI DSS standartlarına uygun olarak işlenir. Çok faktörlü kimlik doğrulama, düzenli güvenlik denetimleri ve veri koruma politikalarımız mevcuttur. Verileriniz, yalnızca hizmet sağlamak için gerekli olan minimum süre boyunca saklanır.",
        },
        {
          question:
            "Müşterilerle NDA (Gizlilik Sözleşmesi) imzalayabilir miyim?",
          answer:
            "Evet, müşterilerle NDA (Gizlilik Sözleşmesi) imzalayabilirsiniz. Platform, standart NDA şablonları sunar veya müşterinin kendi NDA'sini kullanabilirsiniz. Tüm yasal belgeler platform üzerinden dijital olarak imzalanabilir ve saklanabilir. Gizlilik gerektiren projeler için ek güvenlik önlemleri ve özel çalışma alanları oluşturulabilir.",
        },
        {
          question: "Fikri mülkiyet hakları nasıl yönetiliyor?",
          answer:
            "Fikri mülkiyet hakları, proje sözleşmesinde açıkça belirtilir. Genel olarak, ücretli projeler için tüm haklar müşteriye devredilir, ancak farklı düzenlemeler yapılabilir. Kendi geliştirdiğiniz araçları veya kütüphaneleri kullanmak istiyorsanız, bunu önceden müşteriyle görüşmeniz önerilir. Platform, fikri mülkiyet anlaşmazlıklarında arabuluculuk hizmeti sunar.",
        },
        {
          question:
            "Platform üzerindeki iletişim ve dosyalar ne kadar güvenli?",
          answer:
            "Platform üzerindeki tüm iletişim ve dosya paylaşımları uçtan uca şifreleme ile korunur. Dosyalar, güvenli bulut depolama sistemlerinde saklanır ve yalnızca yetkili kişiler tarafından erişilebilir. Hassas projelerde çalışırken ek güvenlik katmanları eklenebilir. Düzenli güvenlik testleri ve güncellemeleri ile sistemin güvenliği sürekli olarak iyileştirilmektedir.",
        },
        {
          question:
            "Hesabım veya ödemelerimle ilgili bir sorun olursa ne yapmalıyım?",
          answer:
            "Hesabınız veya ödemelerinizle ilgili herhangi bir sorun yaşarsanız, 7/24 destek ekibimizle iletişime geçebilirsiniz. Şüpheli aktiviteler fark ederseniz, hemen hesabınızı güvence altına almak için adımlar atılacaktır. Ödeme sorunları için, işlem kayıtları ve sözleşmeler incelenerek adil bir çözüm sağlanır. Tüm finansal işlemler kayıt altına alınır ve şeffaf bir şekilde izlenebilir.",
        },
      ],
    },
  ];

  // Filter questions based on search query
  const filteredCategories = faqCategories
    .map((category) => {
      const filteredQuestions = category.questions.filter(
        (q) =>
          q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          q.answer.toLowerCase().includes(searchQuery.toLowerCase()),
      );
      return {
        ...category,
        questions: filteredQuestions,
        hasMatches: filteredQuestions.length > 0,
      };
    })
    .filter((category) => searchQuery === "" || category.hasMatches);

  // Most common questions for quick access
  const commonQuestions = [
    {
      question: "Hellospace'e katılmak için hangi niteliklere sahip olmalıyım?",
      category: "application",
    },
    {
      question: "Ücretlendirme nasıl yapılıyor?",
      category: "payment",
    },
    {
      question: "Ne tür projelerle çalışacağım?",
      category: "projects",
    },
    {
      question: "Ne kadar süre çalışmam gerekiyor?",
      category: "workstyle",
    },
    {
      question: "Hellospace platformunda hangi araçlar sunuluyor?",
      category: "platform",
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
          <div className="inline-flex items-center px-3 py-1.5 mb-6 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
            <Puzzle className="h-4 w-4 text-corporate-peach mr-2" />
            <span className="text-xs font-medium text-corporate-cream">
              Yazılımcılar & Tasarımcılar İçin
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
            Sıkça Sorulan Sorular
          </h1>
          <p className="text-xl text-corporate-cream/90 mb-8 max-w-3xl mx-auto">
            Hellospace platformuna katılmak isteyen yazılımcı ve tasarımcıların
            en çok merak ettiği soruların cevaplarını burada bulabilirsiniz.
          </p>

          {/* Quick Access Common Questions */}
          <div className="max-w-4xl mx-auto bg-white/20 backdrop-blur-md rounded-xl p-4 md:p-6 border border-white/30 shadow-lg">
            <h3 className="text-xl font-semibold text-white mb-4">
              Sık Sorulan Sorular
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3">
              {commonQuestions.map((q, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="bg-white/10 border-white/20 text-white hover:bg-white/20 rounded-lg text-xs md:text-sm justify-start h-auto py-2 md:py-3 px-3 md:px-4"
                  onClick={() => {
                    const element = document.getElementById(q.category);
                    if (element) {
                      element.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                      // Find the accordion item and expand it
                      const accordionItem = document.getElementById(
                        `accordion-${q.category}-0`,
                      );
                      if (
                        accordionItem &&
                        accordionItem.getAttribute("data-state") !== "open"
                      ) {
                        accordionItem.click();
                      }
                    }
                  }}
                >
                  <div className="flex items-center w-full">
                    <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-white/10 flex items-center justify-center mr-2 md:mr-3 flex-shrink-0">
                      <Search className="h-3 w-3 md:h-4 md:w-4 text-corporate-cream" />
                    </div>
                    <span className="text-left truncate">{q.question}</span>
                  </div>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Search Bar */}
      <section className="py-8 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="relative w-full md:w-96 mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-corporate-blue/50" />
            <Input
              type="text"
              placeholder="Sorularınızı arayın..."
              className="pl-10 py-2 bg-white border-corporate-blue/20 text-corporate-blue placeholder:text-corporate-blue/50 rounded-full focus:ring-corporate-teal focus:border-corporate-teal/50 w-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* FAQ Content Section */}
      <section className="py-16 px-4 bg-white mt-4">
        <div className="max-w-4xl mx-auto">
          {searchQuery && filteredCategories.length === 0 ? (
            <div className="text-center py-12 bg-gray-50 rounded-xl border border-gray-200">
              <Milestone className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-700 mb-2">
                Sonuç Bulunamadı
              </h3>
              <p className="text-gray-500 max-w-md mx-auto mb-6">
                Aramanızla eşleşen soru bulunamadı. Lütfen farklı anahtar
                kelimelerle tekrar deneyin veya kategorilere göz atın.
              </p>
              <Button
                variant="outline"
                className="border-corporate-blue/30 text-corporate-blue"
                onClick={() => setSearchQuery("")}
              >
                Tüm Soruları Göster
              </Button>
            </div>
          ) : (
            <div>
              {/* Category Tabs for Mobile */}
              <div className="md:hidden mb-8">
                <Tabs defaultValue="all" className="w-full">
                  <TabsList className="w-full overflow-x-auto flex justify-start p-1 bg-gray-100 rounded-lg mb-4">
                    <TabsTrigger value="all" className="flex-shrink-0">
                      Tümü
                    </TabsTrigger>
                    {faqCategories.map((category) => (
                      <TabsTrigger
                        key={category.id}
                        value={category.id}
                        className="flex-shrink-0 flex items-center gap-1"
                      >
                        {category.icon}
                        <span>{category.name}</span>
                      </TabsTrigger>
                    ))}
                  </TabsList>

                  <TabsContent value="all">
                    <Accordion type="single" collapsible className="w-full">
                      {filteredCategories.map((category) => (
                        <div key={category.id} id={category.id}>
                          <div className="flex items-center bg-corporate-blue/5 p-3 rounded-t-lg mt-8 mb-2">
                            <div className="w-8 h-8 rounded-full bg-corporate-blue/10 flex items-center justify-center mr-3">
                              {category.icon}
                            </div>
                            <h2 className="text-xl font-bold text-corporate-blue">
                              {category.name}
                            </h2>
                          </div>
                          {category.questions.map((q, qIndex) => (
                            <AccordionItem
                              key={qIndex}
                              value={`${category.id}-${qIndex}`}
                              id={`accordion-${category.id}-${qIndex}`}
                              className="border border-gray-200 rounded-lg mb-4 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
                            >
                              <AccordionTrigger className="px-4 py-3 hover:bg-gray-50 text-left font-medium text-corporate-blue">
                                {q.question}
                              </AccordionTrigger>
                              <AccordionContent className="px-4 py-4 bg-gray-50 text-gray-700 leading-relaxed">
                                <div className="space-y-3 text-base">
                                  {q.answer.split(". ").map(
                                    (sentence, i) =>
                                      sentence.trim() && (
                                        <p key={i} className="mb-2">
                                          {sentence.trim() +
                                            (i < q.answer.split(". ").length - 1
                                              ? "."
                                              : "")}
                                        </p>
                                      ),
                                  )}
                                </div>
                              </AccordionContent>
                            </AccordionItem>
                          ))}
                        </div>
                      ))}
                    </Accordion>
                  </TabsContent>

                  {faqCategories.map((category) => (
                    <TabsContent key={category.id} value={category.id}>
                      <Accordion type="single" collapsible className="w-full">
                        <div className="flex items-center bg-corporate-blue/5 p-3 rounded-t-lg mb-2">
                          <div className="w-8 h-8 rounded-full bg-corporate-blue/10 flex items-center justify-center mr-3">
                            {category.icon}
                          </div>
                          <h2 className="text-xl font-bold text-corporate-blue">
                            {category.name}
                          </h2>
                        </div>
                        {category.questions
                          .filter(
                            (q) =>
                              searchQuery === "" ||
                              q.question
                                .toLowerCase()
                                .includes(searchQuery.toLowerCase()) ||
                              q.answer
                                .toLowerCase()
                                .includes(searchQuery.toLowerCase()),
                          )
                          .map((q, qIndex) => (
                            <AccordionItem
                              key={qIndex}
                              value={`${category.id}-${qIndex}`}
                              className="border border-gray-200 rounded-lg mb-4 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
                            >
                              <AccordionTrigger className="px-4 py-3 hover:bg-gray-50 text-left font-medium text-corporate-blue">
                                {q.question}
                              </AccordionTrigger>
                              <AccordionContent className="px-4 py-4 bg-gray-50 text-gray-700 leading-relaxed">
                                <div className="space-y-3 text-base">
                                  {q.answer.split(". ").map(
                                    (sentence, i) =>
                                      sentence.trim() && (
                                        <p key={i} className="mb-2">
                                          {sentence.trim() +
                                            (i < q.answer.split(". ").length - 1
                                              ? "."
                                              : "")}
                                        </p>
                                      ),
                                  )}
                                </div>
                              </AccordionContent>
                            </AccordionItem>
                          ))}
                      </Accordion>
                    </TabsContent>
                  ))}
                </Tabs>
              </div>

              {/* Desktop Layout */}
              <div className="hidden md:block">
                <Accordion type="multiple" className="w-full">
                  {filteredCategories.map((category) => (
                    <div
                      key={category.id}
                      id={category.id}
                      className="mb-12 scroll-mt-48"
                    >
                      <div className="flex items-center bg-corporate-blue/5 p-4 rounded-t-lg mb-4">
                        <div className="w-10 h-10 rounded-full bg-corporate-blue/10 flex items-center justify-center mr-3">
                          {category.icon}
                        </div>
                        <h2 className="text-2xl font-bold text-corporate-blue">
                          {category.name}
                        </h2>
                      </div>
                      {category.questions.map((q, qIndex) => (
                        <AccordionItem
                          key={qIndex}
                          value={`${category.id}-${qIndex}`}
                          id={`accordion-${category.id}-${qIndex}`}
                          className="border border-gray-200 rounded-lg mb-4 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
                        >
                          <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 text-left font-medium text-corporate-blue">
                            {q.question}
                          </AccordionTrigger>
                          <AccordionContent className="px-6 py-5 bg-gray-50 text-gray-700 leading-relaxed">
                            <div className="space-y-4 text-base">
                              {q.answer.split(". ").map(
                                (sentence, i) =>
                                  sentence.trim() && (
                                    <p key={i} className="mb-2">
                                      {sentence.trim() +
                                        (i < q.answer.split(". ").length - 1
                                          ? "."
                                          : "")}
                                    </p>
                                  ),
                              )}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </div>
                  ))}
                </Accordion>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Still Have Questions Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-corporate-blue/5 to-corporate-cream/30 relative overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute -top-[10%] -right-[5%] w-[30%] h-[30%] rounded-full bg-gradient-to-br from-corporate-teal/10 to-corporate-peach/10 blur-3xl" />
        <div className="absolute -bottom-[10%] -left-[5%] w-[30%] h-[30%] rounded-full bg-gradient-to-tr from-corporate-cream/10 to-corporate-teal/10 blur-3xl" />

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="bg-white rounded-xl shadow-lg border border-corporate-teal/10 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 text-left">
                <div className="inline-flex items-center px-3 py-1.5 mb-4 rounded-full bg-corporate-teal/10 border border-corporate-teal/20">
                  <MessageCircle className="h-4 w-4 text-corporate-teal mr-2" />
                  <span className="text-xs font-medium text-corporate-blue">
                    Daha Fazla Yardım
                  </span>
                </div>
                <h2 className="text-3xl font-bold mb-4 text-corporate-blue">
                  Hala Sorularınız Mı Var?
                </h2>
                <p className="text-gray-600 mb-6">
                  Burada cevabını bulamadığınız sorularınız için destek
                  ekibimizle iletişime geçebilir veya topluluk forumlarımızı
                  ziyaret edebilirsiniz.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-gradient-to-r from-corporate-blue to-corporate-blue/80 hover:from-corporate-blue/90 hover:to-corporate-blue/70 text-white px-6 py-2 h-auto rounded-lg shadow-lg shadow-corporate-blue/20 group">
                    <span className="flex items-center">
                      Destek Ekibine Ulaşın
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Button>
                  <Button
                    variant="outline"
                    className="border-corporate-blue/30 text-corporate-blue hover:bg-corporate-blue/5 px-6 py-2 h-auto rounded-lg"
                  >
                    Topluluk Forumlarını Ziyaret Edin
                  </Button>
                </div>
              </div>
              <div className="bg-corporate-blue/5 p-8 flex flex-col justify-center">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-corporate-teal/10 flex items-center justify-center mr-4 flex-shrink-0">
                      <Globe className="h-5 w-5 text-corporate-teal" />
                    </div>
                    <div>
                      <h4 className="font-medium text-corporate-blue mb-1">
                        Topluluk Forumları
                      </h4>
                      <p className="text-sm text-gray-600">
                        Diğer geliştiricilerle bilgi paylaşımı yapın ve
                        sorularınızı sorun
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-corporate-peach/10 flex items-center justify-center mr-4 flex-shrink-0">
                      <MessageCircle className="h-5 w-5 text-corporate-peach" />
                    </div>
                    <div>
                      <h4 className="font-medium text-corporate-blue mb-1">
                        Canlı Destek
                      </h4>
                      <p className="text-sm text-gray-600">
                        7/24 destek ekibimizle canlı sohbet edin
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-corporate-blue/10 flex items-center justify-center mr-4 flex-shrink-0">
                      <Headphones className="h-5 w-5 text-corporate-blue" />
                    </div>
                    <div>
                      <h4 className="font-medium text-corporate-blue mb-1">
                        Birebir Görüşme
                      </h4>
                      <p className="text-sm text-gray-600">
                        Karmaşık sorularınız için görüntülü görüşme talep edin
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Apply Now CTA Section */}
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
                  Kariyerinizi Dönüştürün
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Yeteneklerinizi{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-corporate-peach to-corporate-teal">
                  Global Arenaya
                </span>{" "}
                Taşıyın
              </h2>
              <p className="text-white/90 mb-8 text-lg leading-relaxed">
                Hellospace ile dünyanın her yerinden projelerle çalışın, esnek
                çalışma saatlerinin keyfini çıkarın ve kariyerinizi kendi
                şartlarınızda yönetin. Hemen başvurun ve global yetenek ağımıza
                katılın.
              </p>
              <div className="flex flex-col sm:flex-row gap-5 mb-8">
                <Button className="bg-gradient-to-r from-corporate-teal to-corporate-teal/80 hover:from-corporate-teal/90 hover:to-corporate-teal/70 text-white px-10 py-4 h-auto text-lg font-semibold rounded-full shadow-xl shadow-corporate-teal/30 transform transition-all duration-300 hover:scale-105 group">
                  <span className="flex items-center">
                    Hemen Başvur
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
                <Button
                  variant="outline"
                  className="border-white/30 hover:bg-white/10 px-8 py-4 h-auto text-lg font-medium rounded-full backdrop-blur-sm hover:border-white/50 transition-all duration-300 bg-corporate-blue/30"
                >
                  <span className="text-white">Nasıl Çalıştığını Öğren</span>
                </Button>
              </div>
              <div className="flex items-center space-x-6">
                <div className="flex -space-x-3">
                  {["mert", "ayse", "can", "zeynep"].map((seed, i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full border-2 border-corporate-blue overflow-hidden"
                    >
                      <img
                        src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${seed}`}
                        alt="Developer"
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
                  <p className="text-corporate-cream/80">
                    5,000+ yazılımcı ve tasarımcı
                  </p>
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
                    <h3 className="text-xl font-bold">Başvuru Adımları</h3>
                    <p className="text-corporate-cream/70 text-sm">
                      Birkaç adımda başvurunuzu tamamlayın
                    </p>
                  </div>
                </div>

                <div className="space-y-5">
                  <div className="flex p-4 rounded-xl hover:bg-white/5 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4 flex-shrink-0">
                      <FileCode className="h-5 w-5 text-corporate-teal" />
                    </div>
                    <div>
                      <h4 className="font-medium">Profil Oluşturun</h4>
                      <p className="text-sm text-corporate-cream/70">
                        Yeteneklerinizi ve deneyiminizi paylaşın
                      </p>
                    </div>
                  </div>
                  <div className="flex p-4 rounded-xl hover:bg-white/5 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4 flex-shrink-0">
                      <Code className="h-5 w-5 text-corporate-peach" />
                    </div>
                    <div>
                      <h4 className="font-medium">
                        Yetenek Testini Tamamlayın
                      </h4>
                      <p className="text-sm text-corporate-cream/70">
                        Teknik becerilerinizi gösterin
                      </p>
                    </div>
                  </div>
                  <div className="flex p-4 rounded-xl hover:bg-white/5 transition-colors">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-4 flex-shrink-0">
                      <Headphones className="h-5 w-5 text-corporate-cream" />
                    </div>
                    <div>
                      <h4 className="font-medium">Görüşmeye Katılın</h4>
                      <p className="text-sm text-corporate-cream/70">
                        Ekibimizle online görüşme yapın
                      </p>
                    </div>
                  </div>
                </div>

                <Button className="w-full mt-6 bg-gradient-to-r from-corporate-peach/80 to-corporate-peach/60 hover:from-corporate-peach hover:to-corporate-peach/80 text-white font-medium py-3 rounded-lg shadow-lg shadow-corporate-peach/20">
                  Başvuru Formunu Doldur
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

export default DeveloperFAQ;
