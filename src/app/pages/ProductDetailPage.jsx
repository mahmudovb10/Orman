import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, ShoppingCart, Check } from "lucide-react";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";

export function ProductDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === parseInt(id));
  const { addToCart } = useCart();
  const [showSuccess, setShowSuccess] = useState(false);

  if (!product) {
    return (
      <div className="pt-32 text-center">
        Mahsulot topilmadi.{" "}
        <Link to="/products" className="text-amber-900">
          Ortga qaytish
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 2000);
  };

  return (
    <div className="min-h-screen pt-24 pb-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-700 mb-8"
        >
          <ArrowLeft size={20} /> Orqaga
        </button>
        <div className="grid lg:grid-cols-2 gap-12 bg-white rounded-2xl p-8 shadow-lg">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-[400px] object-cover rounded-xl"
          />
          <div className="flex flex-col">
            <span className="text-amber-700 text-sm uppercase">
              {product.category}
            </span>
            <h1 className="text-3xl font-bold text-amber-900 my-4">
              {product.title}
            </h1>
            <p className="text-2xl font-bold text-amber-900 mb-6">
              {product.price.toLocaleString()} So'm
            </p>
            <p className="text-gray-600 mb-8">{product.description}</p>
            <button
              onClick={handleAddToCart}
              className={`w-full py-4 rounded-lg flex items-center justify-center gap-2 transition-all ${
                showSuccess ? "bg-green-600" : "bg-amber-900"
              } text-white`}
            >
              <ShoppingCart size={20} />{" "}
              {showSuccess ? "Savatga Qo'shildi!" : "Savatga Qo'shish"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
