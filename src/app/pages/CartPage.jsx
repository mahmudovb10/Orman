import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft } from "lucide-react";

import { useCart } from "../context/CartContext";

import { useNavigate } from "react-router-dom";

export function CartPage({ onNavigate }) {
  const { cart, removeFromCart, updateQuantity, getCartTotal, clearCart } =
    useCart();
  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen pt-24 pb-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center py-20">
            <div className="w-24 h-24 bg-amber-900/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingBag size={48} className="text-amber-900" />
            </div>

            <h2 className="mb-4 text-gray-900">Sizning savatingiz bo'sh</h2>

            <p className="text-gray-600 mb-8">
              Siz hali savatga hech qanday mahsulot qo‘shmagansiz
            </p>

            <button
              onClick={() => navigate("/products")}
              className="px-8 py-3 bg-amber-900 text-white rounded-lg hover:bg-amber-800 transition-colors"
            >
              Mahsulotlarni ko'rish
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Back Button */}

        <button
          onClick={() => onNavigate("products")}
          className="flex items-center gap-2 text-gray-700 hover:text-amber-900 transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          Sotib olishda davom etish
        </button>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}

          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-amber-900">Xaridlar sahifasi</h1>

              <button
                onClick={clearCart}
                className="text-gray-600 hover:text-red-600 transition-colors"
              >
                Hammasini tozalash
              </button>
            </div>

            {cart.map((item) => (
              <div key={item.id} className="bg-white rounded-xl p-6 shadow-md">
                <div className="flex gap-6">
                  {/* Product Image */}

                  <div className="w-32 h-32 flex-shrink-0 rounded-lg overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Product Info */}

                  <div className="flex-1 flex flex-col">
                    <div className="flex justify-between mb-2">
                      <div>
                        <div className="text-amber-900 uppercase tracking-wide mb-1">
                          {item.category}
                        </div>

                        <h3 className="text-gray-900">{item.title}</h3>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-gray-400 hover:text-red-600 transition-colors"
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>

                    {item.material && (
                      <p className="text-gray-600 mb-4">
                        Material: {item.material}
                      </p>
                    )}

                    <div className="mt-auto flex items-center justify-between">
                      {/* Quantity Controls */}

                      <div className="flex items-center gap-3">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors"
                        >
                          <Minus size={16} />
                        </button>

                        <span className="w-12 text-center">
                          {item.quantity}
                        </span>

                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors"
                        >
                          <Plus size={16} />
                        </button>
                      </div>

                      {/* Price */}

                      <div className="text-right">
                        <div className="text-amber-900">
                          {(item.price * item.quantity).toLocaleString()} So'm
                        </div>

                        <div className="text-gray-500">
                          {item.price.toLocaleString()} So'm har biri
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}

          {/* Order Summary qismi */}

          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl p-6 shadow-md sticky top-24">
              <h3 className="mb-6 text-gray-900">Umumiy Summa</h3>

              <div className="space-y-4 mb-6">
                {/* Mahsulotlarning umumiy narxi */}

                <div className="flex justify-between text-gray-600">
                  <span>Barchasi</span>

                  <span>{getCartTotal().toLocaleString()} So'm</span>
                </div>

                {/* Yetkazib berish */}

                <div className="flex justify-between text-gray-600">
                  <span>Yetkazib berish</span>

                  <span className="text-green-600">Bepul !</span>
                </div>

                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between text-gray-900  text-lg">
                    <span>Hammasi</span>

                    <span>{getCartTotal().toLocaleString()} So'm</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => navigate("/checkout")} // Boshiga / qo'shildi
                className="w-full py-4 bg-amber-900 text-white rounded-lg hover:bg-amber-800 transition-colors mb-3"
              >
                Rasmiylashtirish
              </button>

              <button
                onClick={() => navigate("/products")} // onNavigate o'rniga navigate("/")
                className="w-full py-4 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
              >
                Sotib olishda davom etish
              </button>

              <div className="mt-6 p-4 bg-amber-50 rounded-lg">
                <p className="text-amber-900">
                  🎉 Barcha mahsulotlarni yetkazib berish bepul !
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
