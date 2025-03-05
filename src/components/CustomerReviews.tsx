import React from "react";
import { Star } from "lucide-react";

interface ReviewProps {
  name: string;
  date: string;
  rating: number;
  title: string;
  content: string;
  avatarSeed?: string;
}

const CustomerReviews = () => {
  const reviews: ReviewProps[] = [
    {
      name: "Mehmet Yılmaz",
      date: "14 Nisan 2023",
      rating: 5,
      title: "Mükemmel hizmet ve profesyonel yaklaşım",
      content:
        "Hellospace ekibi projemizi zamanında ve bütçe dahilinde tamamladı. İhtiyaçlarımızı tam olarak anladılar ve beklentilerimizin ötesinde bir sonuç sundular. Özellikle teknik ekibin uzmanlığı ve iletişim becerileri çok etkileyiciydi.",
      avatarSeed: "mehmet",
    },
    {
      name: "Ayşe Kaya",
      date: "2 Mart 2023",
      rating: 5,
      title: "Harika deneyim, kusursuz sonuç",
      content:
        "E-ticaret sitemizin yenilenmesi için Hellospace ile çalıştık ve sonuçtan çok memnun kaldık. Satışlarımız %40 arttı ve müşteri geri bildirimleri oldukça olumlu. Teknik destek ekibi her zaman yardımcı oldu ve sorularımıza hızlı yanıtlar aldık.",
      avatarSeed: "ayse",
    },
    {
      name: "Can Demir",
      date: "18 Ocak 2023",
      rating: 4,
      title: "Kaliteli yazılım çözümleri",
      content:
        "Şirketimiz için özel bir CRM sistemi geliştirdiler. Süreç boyunca şeffaf iletişim kurdular ve isteklerimize göre esnek davrandılar. Küçük gecikmeler dışında her şey mükemmeldi. Kesinlikle tekrar çalışmak isteriz.",
      avatarSeed: "can",
    },
    {
      name: "Zeynep Yıldız",
      date: "5 Aralık 2022",
      rating: 5,
      title: "Beklentilerimizin ötesinde",
      content:
        "Mobil uygulamamızın geliştirilmesi için Hellospace'i tercih ettik ve bu kararımızdan çok memnunuz. Kullanıcı deneyimi odaklı yaklaşımları ve teknik uzmanlıkları sayesinde uygulamamız kısa sürede popülerlik kazandı. Sürekli destek ve güncellemeler için teşekkürler.",
      avatarSeed: "zeynep",
    },
    {
      name: "Ahmet Şahin",
      date: "27 Ekim 2022",
      rating: 5,
      title: "Profesyonel ekip, kaliteli iş",
      content:
        "Web sitemizin yeniden tasarımı için Hellospace ile çalıştık. Modern, hızlı ve kullanıcı dostu bir site oluşturdular. SEO çalışmaları sayesinde organik trafiğimiz %60 arttı. Ekibin yaratıcı çözümleri ve teknik bilgisi etkileyici.",
      avatarSeed: "ahmet",
    },
    {
      name: "Elif Yalçın",
      date: "15 Eylül 2022",
      rating: 5,
      title: "Tam zamanında teslim ve mükemmel sonuç",
      content:
        "Startup'ımız için MVP geliştirmelerinde Hellospace ekibiyle çalıştık. Hızlı geliştirme süreçleri ve kaliteli kod yapısı sayesinde ürünümüzü zamanında piyasaya sürebildik. Yatırımcılarımız da sonuçtan çok etkilendi. Teşekkürler Hellospace!",
      avatarSeed: "elif",
    },
  ];

  return (
    <div className="w-full max-w-[1200px] mx-auto py-12 px-4">
      <div className="text-center mb-10">
        <div className="inline-flex items-center px-4 py-2 mb-3 rounded-full bg-gray-100 border border-gray-200">
          <Star className="h-5 w-5 text-corporate-blue fill-corporate-blue mr-2" />
          <span className="text-sm font-medium text-gray-700">
            Müşteri Yorumları
          </span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-gray-800">
          Müşterilerimiz Neler Söylüyor?
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Hellospace olarak müşteri memnuniyetini en üst seviyede tutmak için
          çalışıyoruz
        </p>
        <div className="flex items-center justify-center mt-4">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className="h-5 w-5 text-corporate-blue fill-corporate-blue"
              />
            ))}
          </div>
          <span className="ml-2 text-lg font-semibold text-gray-800">
            4.9/5
          </span>
          <span className="ml-2 text-gray-500 text-sm">
            <a
              href="https://www.trustpilot.com/review/hellospace.world?utm_medium=trustbox&utm_source=TrustBoxReviewCollector"
              target="_blank"
              rel="noopener noreferrer"
              className="text-corporate-blue hover:underline"
            >
              Trustpilot üzerinde 200+ değerlendirme
            </a>
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full overflow-hidden mr-4 border border-gray-200">
                <img
                  src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${review.avatarSeed || review.name.toLowerCase()}`}
                  alt={review.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-medium text-gray-800">{review.name}</h4>
                <p className="text-sm text-gray-500">{review.date}</p>
              </div>
            </div>

            <div className="flex mb-3">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${i < review.rating ? "text-corporate-blue fill-corporate-blue" : "text-gray-300"}`}
                />
              ))}
            </div>

            <h3 className="text-lg font-semibold mb-2 text-gray-800">
              {review.title}
            </h3>
            <p className="text-gray-600 text-sm">{review.content}</p>

            <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
              <div className="flex items-center">
                <img
                  src="https://cdn.trustpilot.net/brand-assets/1.1.0/logo-white.svg"
                  alt="Trustpilot"
                  className="h-5 mr-2 bg-[#00b67a] p-0.5 rounded"
                />
                <span className="text-xs text-gray-500">
                  Trustpilot üzerinden doğrulanmış
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <a
          href="https://www.trustpilot.com/review/hellospace.world?utm_medium=trustbox&utm_source=TrustBoxReviewCollector"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-corporate-blue hover:underline font-medium"
        >
          Tüm yorumları görüntüle
          <svg
            className="ml-1 w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default CustomerReviews;
