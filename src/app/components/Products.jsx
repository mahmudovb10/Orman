import { TreePine, LampCeiling, Sofa, ArrowRight } from "lucide-react";

export function Products() {
  const products = [
    {
      icon: TreePine,
      title: "Wooden Furniture",
      description:
        "Handcrafted wooden furniture made from premium hardwood. Each piece showcases the natural beauty of wood grain and expert joinery.",
      image:
        "https://images.unsplash.com/photo-1687180497278-ca4d736ecc99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3b29kZW4lMjBmdXJuaXR1cmV8ZW58MXx8fHwxNzY2MTE4NzA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: ["Premium Hardwood", "Custom Designs", "Durable Finish"],
    },
    {
      icon: LampCeiling,
      title: "Chandeliers",
      description:
        "Elegant chandeliers that illuminate your space with sophistication. From classic crystal to contemporary designs.",
      image:
        "https://images.unsplash.com/photo-1765118106411-dccdfb21f77d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcnlzdGFsJTIwY2hhbmRlbGllciUyMGVsZWdhbnR8ZW58MXx8fHwxNzY2MDM5MjY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: ["Crystal Elements", "LED Compatible", "Various Sizes"],
    },
    {
      icon: Sofa,
      title: "Luxury Sofas",
      description:
        "Comfort meets style in our collection of luxury sofas. Designed for both aesthetics and relaxation.",
      image:
        "https://images.unsplash.com/photo-1759722668253-1767030ad9b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzb2ZhJTIwbGl2aW5nJTIwcm9vbXxlbnwxfHx8fDE3NjYxMTg3MTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: ["Premium Fabrics", "Ergonomic Design", "Customizable"],
    },
  ];

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-amber-900">Mahsulotlarimiz</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Discover our exceptional range of handcrafted furniture and lighting
            solutions, designed to enhance your living spaces.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 w-14 h-14 bg-amber-900 rounded-xl flex items-center justify-center">
                  <product.icon size={28} className="text-white" />
                </div>
              </div>

              <div className="p-6">
                <h3 className="mb-3 text-amber-900">{product.title}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>

                <div className="space-y-2 mb-6">
                  {product.features.map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-gray-700"
                    >
                      <div className="w-1.5 h-1.5 bg-amber-900 rounded-full" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <button className="w-full py-3 bg-amber-900 text-white rounded-lg hover:bg-amber-800 transition-colors flex items-center justify-center gap-2 group">
                  Learn More
                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
