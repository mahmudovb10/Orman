import { useState } from "react";
import { TreePine, LampCeiling, Sofa } from "lucide-react";
import { products } from "../data/products";

export function ProductsPage({ onProductClick }) {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", label: "Hamma mahsulotlar", icon: null },
    { id: "wooden", label: "Yog'och mahsulotlar", icon: TreePine },
    { id: "chandelier", label: "Lyustra mahsulotlar", icon: LampCeiling },
    { id: "sofa", label: "Boshqa", icon: Sofa },
  ];

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen pt-24 pb-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="mb-4 text-amber-900">Mahsulotlarimiz</h1>
          <p className="max-w-2xl mx-auto text-gray-600">
            Bizning qo'lda ishlangan nafis qandillar va yog'ochdan tayyorlangan
            buyumlar to'plamini ko'rib chiqing
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-lg flex items-center gap-2 transition-colors ${
                selectedCategory === category.id
                  ? "bg-amber-900 text-white"
                  : "bg-white text-gray-700 hover:bg-amber-50"
              }`}
            >
              {category.icon && <category.icon size={20} />}
              {category.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              onClick={() => onProductClick(product.id)}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all cursor-pointer group"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-amber-900 text-white px-3 py-1 rounded-full">
                  ${product.price.toLocaleString()}
                </div>
              </div>

              <div className="p-5">
                <div className="text-amber-900 mb-2 uppercase tracking-wide">
                  {product.category}
                </div>
                <h3 className="mb-2 text-gray-900">{product.title}</h3>
                <p className="text-gray-600 line-clamp-2 mb-4">
                  {product.description}
                </p>
                <button className="w-full py-2 bg-amber-900/10 text-amber-900 rounded-lg hover:bg-amber-900 hover:text-white transition-colors">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500">No products found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}
