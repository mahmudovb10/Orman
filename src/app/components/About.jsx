import { Award, Users, Factory, TrendingUp } from "lucide-react";

export function About() {
  const stats = [
    {
      icon: Award,
      value: "#1",
      label: "O'zbekistonda ishlab chiqaruvchi",
    },
    {
      icon: Users,
      value: "50+",
      label: "Malakali hunarmandlar",
    },
    {
      icon: Factory,
      value: "15+",
      label: "Mukammallik yillari",
    },
    {
      icon: TrendingUp,
      value: "10k+",
      label: "Baxtli mijozlar",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="mb-6 text-amber-900">Orman kompaniyasi haqida</h2>
            <p className="text-gray-600 mb-6">
              O‘zbekistondagi eng yirik va eng ishonchli yog‘och mahsulotlari va
              lyustralar ishlab chiqaruvchi “Orman” kompaniyasi tashkil
              etilganimizdan beri sifat va mahorat standartini belgilab
              kelmoqda.
            </p>
            <p className="text-gray-600 mb-6">
              Bizning mukammallikka sodiqligimiz biz yaratgan har bir asarimizda
              yaqqol ko'rinadi. Biz an'anaviy yog'ochga ishlov berish usullarini
              birlashtiramiz lyustra va yog'och mahsulotlarini yaratish uchun
              zamonaviy dizayn sezgirliklari bilan avlodlar bu vaqt sinovidan
              o'tadi.
            </p>
            <p className="text-gray-600 mb-8">
              Eng yaxshi materiallarni sotib olishdan yakuniy pardozlashgacha,
              ishlab chiqarish jarayonimizning har bir bosqichi eng yuqori sifat
              standartlarini ta'minlash uchun diqqat bilan nazorat qilinadi.
              Bizning mahoratli hunarmandlar jamoasi o'z ishlaridan faxrlanib,
              nafaqat yog'ochdan yasalgan buyumlar, balki san'at asarlarini
              yaratadi.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-12 h-12 bg-amber-900/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <stat.icon size={24} className="text-amber-900" />
                  </div>
                  <div>
                    <div className="text-amber-900 mb-1">{stat.value}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/logo.jpg"
                alt="Craftsmanship"
                className="w-full h-[600px] object-cover"
              />
            </div>

            {/* Decorative Element */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-amber-900 rounded-2xl -z-10" />
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-amber-900/20 rounded-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
