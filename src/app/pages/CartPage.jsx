import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export function CartPage() {
  const { cart, removeFromCart, updateQuantity, getCartTotal, clearCart } =
    useCart();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen pt-24 pb-20 flex items-center justify-center">
        <div className="text-center">
          <ShoppingBag size={64} className="mx-auto text-amber-900/20 mb-4" />
          <h2 className="text-2xl font-bold mb-4">Savatchangiz bo'sh</h2>
          <Link
            to="/products"
            className="px-6 py-2 bg-amber-900 text-white rounded-lg"
          >
            Mahsulotlarni ko'rish
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <Link
          to="/products"
          className="flex items-center gap-2 text-gray-600 mb-8"
        >
          <ArrowLeft size={20} /> Davom etish
        </Link>
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            <h1 className="text-2xl font-bold text-amber-900">
              Xaridlar sahifasi
            </h1>
            {cart.map((item) => (
              <div
                key={item.id}
                className="bg-white p-4 rounded-xl shadow-sm flex gap-4"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-24 h-24 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <div className="flex justify-between">
                    <h3 className="font-semibold">{item.title}</h3>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                  <div className="flex justify-between mt-4 items-center">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="p-1 bg-gray-100 rounded"
                      >
                        <Minus size={14} />
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="p-1 bg-gray-100 rounded"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                    <span className="font-bold">
                      {(item.price * item.quantity).toLocaleString()} So'm
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md h-fit">
            <h3 className="text-xl font-bold mb-4">Umumiy Summa</h3>
            <div className="flex justify-between mb-2">
              <span>Jami:</span>
              <span className="font-bold">
                {getCartTotal().toLocaleString()} So'm
              </span>
            </div>
            <Link
              to="/checkout"
              className="block w-full text-center py-3 bg-amber-900 text-white rounded-lg mt-4"
            >
              Rasmiylashtirish
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
