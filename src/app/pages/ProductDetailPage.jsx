import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ShoppingCart,
  Check,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";

function ProductDetailPage() {
  const { id } = useParams();
  const productId = parseInt(id, 10);
  const product = products.find((p) => p.id === productId);

  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [showSuccess, setShowSuccess] = useState(false);

  // Ranglar indeksi (0 - birinchi rang)
  const [currentVariantIndex, setCurrentVariantIndex] = useState(0);

  if (!product) {
    return (
      <div className="min-h-screen pt-24 pb-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600 mb-4">Mahsulot topilmadi</p>
          <button
            onClick={() => navigate("/products")}
            className="px-6 py-3 bg-amber-900 text-white rounded-lg hover:bg-amber-800 transition-colors"
          >
            Mahsulotlarga qaytish
          </button>
        </div>
      </div>
    );
  }

  // Variantlar bormi tekshiramiz
  const hasVariants = product.variants && product.variants.length > 0;

  // Hozirgi tanlangan rasm va rang
  const currentImage = hasVariants
    ? product.variants[currentVariantIndex].image
    : product.image;

  const currentColor = hasVariants
    ? product.variants[currentVariantIndex].color
    : product.color || "Standart";

  // Keyingi rangga o'tish
  const handleNext = (e) => {
    e.stopPropagation();
    if (!hasVariants) return;
    setCurrentVariantIndex((prev) =>
      prev === product.variants.length - 1 ? 0 : prev + 1,
    );
  };

  // Oldingi rangga o'tish
  const handlePrev = (e) => {
    e.stopPropagation();
    if (!hasVariants) return;
    setCurrentVariantIndex((prev) =>
      prev === 0 ? product.variants.length - 1 : prev - 1,
    );
  };

  const handleAddToCart = () => {
    // Savatga maxsus obyekt qo'shamiz
    const itemToAdd = {
      ...product,
      // ID ni o'zgartiramiz, shunda har xil ranglar alohida mahsulot bo'lib tushadi
      id: `${product.id}-${currentColor}`,
      originalId: product.id,
      image: currentImage, // Tanlangan rasm
      selectedColor: currentColor, // Tanlangan rang nomi
      title: `${product.title} (${currentColor})`, // Nomiga rangni qo'shib qo'yamiz
    };

    addToCart(itemToAdd);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 2000);
  };

  return (
    <div className="min-h-screen pt-24 pb-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-700 hover:text-amber-900 transition-colors mb-8"
        >
          <ArrowLeft size={20} /> Mahsulotlarga qaytish
        </button>

        <div className="grid lg:grid-cols-2 gap-12 bg-white rounded-2xl p-8 shadow-lg">
          {/* Rasm qismi o'zgartirildi: Strelkalar qo'shildi */}
          <div className="relative">
            <div className="aspect-square rounded-xl overflow-hidden relative group">
              <img
                src={currentImage}
                alt={product.title}
                loading="lazy"
                className="w-full h-full object-cover transition-all duration-300"
              />

              {/* Agar variantlar bo'lsa strelkalar chiqadi */}
              {hasVariants && (
                <>
                  <button
                    onClick={handlePrev}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white shadow-md z-10 text-amber-900 hover:scale-110 transition-all"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={handleNext}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white shadow-md z-10 text-amber-900 hover:scale-110 transition-all"
                  >
                    <ChevronRight size={24} />
                  </button>
                </>
              )}
            </div>

            {/* Rang nomini rasm pasida ko'rsatish */}
            <div className="mt-4 text-center">
              <p className="text-gray-600">
                Color:{" "}
                <span className="font-bold text-amber-900">{currentColor}</span>
              </p>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="text-amber-900 uppercase tracking-wide mb-2">
              {product.category}
            </div>
            <h1 className="mb-4 text-amber-900">{product.title}</h1>
            <div className="mb-6">
              <div className="text-amber-900">
                {product.price.toLocaleString()} So'm
              </div>
            </div>
            <p className="text-gray-600 mb-8">{product.description}</p>

            {/* Features */}
            <div className="mb-8">
              <h3 className="mb-4 text-gray-900">Features</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {product.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-gray-700"
                  >
                    <div className="w-5 h-5 bg-amber-900/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check size={14} className="text-amber-900" />
                    </div>
                    {feature}
                  </div>
                ))}
              </div>
            </div>

            {/* Specifications */}
            <div className="mb-8 p-6 bg-gray-50 rounded-lg">
              <h3 className="mb-4 text-gray-900">Specifications</h3>
              <div className="space-y-3">
                {product.material && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Material:</span>
                    <span className="text-gray-900">{product.material}</span>
                  </div>
                )}
                {product.dimensions && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Dimensions:</span>
                    <span className="text-gray-900">{product.dimensions}</span>
                  </div>
                )}
                {/* Bu yerda ham tanlangan rang chiqadi */}
                <div className="flex justify-between">
                  <span className="text-gray-600">Color:</span>
                  <span className="text-gray-900 font-medium">
                    {currentColor}
                  </span>
                </div>
              </div>
            </div>

            <button
              onClick={handleAddToCart}
              className="w-full py-4 bg-amber-900 text-white rounded-lg hover:bg-amber-800 transition-colors flex items-center justify-center gap-2 mt-auto"
            >
              <ShoppingCart size={20} />
              {showSuccess ? "Savatga qo‘shildi!" : "Savatga qo‘shish"}
            </button>

            {showSuccess && (
              <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 text-center">
                Mahsulot savatga muvaffaqiyatli qo‘shildi!
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="mb-8 text-amber-900">O‘xshash mahsulotlar</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products
              .filter(
                (p) => p.category === product.category && p.id !== product.id,
              )
              .slice(0, 4)
              .map((relatedProduct) => (
                <div
                  key={relatedProduct.id}
                  onClick={() => navigate(`/product/${relatedProduct.id}`)}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={relatedProduct.image}
                      alt={relatedProduct.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="text-gray-900 mb-2">
                      {relatedProduct.title}
                    </h4>
                    <div className="text-amber-900">
                      {relatedProduct.price.toLocaleString()} So'm
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailPage;
