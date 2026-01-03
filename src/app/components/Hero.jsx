import { ArrowRight } from "lucide-react";

export function Hero({ onNavigate }) {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleExploreProducts = () => {
    // App.jsx dagi handleNavigate funksiyasini ishga tushiradi
    if (onNavigate) {
      onNavigate("products");
      // Sahifa almashgach, tepaga skroll qiladi
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1687180497278-ca4d736ecc99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3b29kZW4lMjBmdXJuaXR1cmV8ZW58MXx8fHwxNzY2MTE4NzA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="mb-6 text-white">
          Yog'ochdan hunarmandchilikning mukammalligi
        </h1>
        <p className="max-w-2xl mx-auto mb-8 text-white/90">
          O'zbekistonda hashamatli yog'och mebellar va nafis qandillar ishlab
          chiqaruvchi yetakchi kompaniya. An'anaviy hunarmandchilik va zamonaviy
          dizaynning mukammal uyg'unligini his eting.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={handleExploreProducts}
            className="px-8 py-3 bg-amber-900 text-white rounded-lg hover:bg-amber-800 transition-colors flex items-center justify-center gap-2"
          >
            Mahsulotlarni ko'rish
            <ArrowRight size={20} />
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="px-8 py-3 bg-white/10 backdrop-blur-sm text-white border border-white/30 rounded-lg hover:bg-white/20 transition-colors"
          >
            Biz bilan bog'lanish
          </button>
        </div>
      </div>
    </section>
  );
}
