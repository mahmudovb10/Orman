import { useState } from "react";
import emailjs from "@emailjs/browser"; // EmailJS ulandi
import {
  CreditCard,
  Truck,
  AlertCircle,
  CheckCircle,
  ArrowLeft,
} from "lucide-react";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

export function CheckoutPage({ onNavigate }) {
  const { cart, getCartTotal, clearCart } = useCart();
  const { user, isAuthenticated } = useAuth();
  const [fullName, setFullName] = useState(user?.name || "");
  const [emailAddress, setEmailAddres] = useState(user?.email || "");
  const [phone, setPhone] = useState(user?.phone || "");
  const [address, setAddress] = useState(user?.address || "");

  const [showWarning, setShowWarning] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  // --- EMAILJS FUNKSIYASI ---
  const sendEmailOrder = () => {
    const ordersArray = cart.map((item) => ({
      name: item.title,
      units: item.quantity,
      price: (item.price * item.quantity).toLocaleString(),
      image_url: item.image, // PUBLIC URL bo‘lishi shart
    }));

    const templateParams = {
      order_id: Math.floor(Math.random() * 1000000),

      customer_name: fullName,
      customer_phone: phone,
      customer_email: emailAddress,
      customer_address: address,

      email: emailAddress,

      orders: ordersArray,

      cost: {
        shipping: "Free",
        total: getCartTotal().toLocaleString(),
      },
    };

    emailjs.send(
      "service_1uq66yb",
      "template_uewwyfv",
      templateParams,
      "nIdfdldPYcfb5buo5"
    );
  };

  // ---------------------------

  const handlePlaceOrder = () => {
    if (!phone || !address) {
      return;
    }
    if (!isAuthenticated) {
      setShowWarning(true);
      return;
    }

    sendEmailOrder();

    setOrderPlaced(true);

    setTimeout(() => {
      clearCart();
      onNavigate("home");
    }, 3000);
  };

  if (cart.length === 0 && !orderPlaced) {
    return (
      <div className="min-h-screen pt-24 pb-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center py-20">
            <h2 className="mb-4 text-gray-900">Savatingiz boʻsh</h2>
            <p className="text-gray-600 mb-8">
              Tekshirishdan oldin mahsulotlarni savatga qo'shing.
            </p>
            <button
              onClick={() => onNavigate("products")}
              className="px-8 py-3 bg-amber-900 text-white rounded-lg hover:bg-amber-800 transition-colors"
            >
              Mahsulotlarni ko'rish
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (orderPlaced) {
    return (
      <div className="min-h-screen pt-24 pb-20 bg-gray-50 flex items-center justify-center">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg p-8 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle size={48} className="text-green-600" />
            </div>
            <h2 className="text-green-600 mb-4">
              Buyurtma muvaffaqiyatli topshirildi!
            </h2>
            <p className="text-gray-600 mb-6">
              Sizga tez orada operatorlarimiz aloqaga chiqishadi !
            </p>
            <div className="space-y-3 text-gray-700">
              <p>
                Jami Buyurtmalar:{" "}
                <span className="text-amber-900">
                  {(getCartTotal() * 1.1).toLocaleString()} So'm
                </span>
              </p>
              <p>
                Mahsulotlar soni:{" "}
                {cart.reduce((sum, item) => sum + item.quantity, 0)}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <button
          onClick={() => onNavigate("cart")}
          className="flex items-center gap-2 text-gray-700 hover:text-amber-900 transition-colors mb-8"
        >
          <ArrowLeft size={20} />
          Back to Cart
        </button>

        {showWarning && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertCircle size={32} className="text-red-600" />
              </div>
              <h3 className="text-center mb-4 text-gray-900">
                Hisob talab qilinadi
              </h3>
              <p className="text-center text-gray-600 mb-6">
                Buyurtma berish uchun hisob yaratish yoki tizimga kirishingiz
                kerak.
              </p>
              <div className="space-y-3">
                <button
                  onClick={() => onNavigate("register")}
                  className="w-full py-3 bg-amber-900 text-white rounded-lg hover:bg-amber-800 transition-colors"
                >
                  Hisob yaratish
                </button>
                <button
                  onClick={() => onNavigate("login")}
                  className="w-full py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
                >
                  Kirish
                </button>
                <button
                  onClick={() => setShowWarning(false)}
                  className="w-full py-3 text-gray-600 hover:text-gray-800 transition-colors"
                >
                  Bekor qilish
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <h1 className="text-amber-900">Rasmiylashtirish</h1>

            <div className="bg-white rounded-2xl p-6 shadow-md">
              <div className="flex items-center gap-2 mb-6">
                <Truck className="text-amber-900" size={24} />
                <h3 className="text-gray-900">Buyurtma qabul qiluvchi</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700 mb-2">
                    To'liq Ism Familiya
                  </label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-900 focus:border-transparent bg-gray-50"
                    placeholder="Your name"
                  />
                </div>

                {/* <div>
                  <label className="block text-gray-700 mb-2">
                    Email Manzil
                  </label>
                  <input
                    type="email"
                    value={emailAddress}
                    onChange={(e) => setEmailAddres(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-900 focus:border-transparent bg-gray-50"
                    placeholder="your@email.com"
                    required
                  />
                </div> */}

                <div>
                  <label className="block text-gray-700 mb-2">
                    Telefon Raqam
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-900 focus:border-transparent bg-gray-50"
                    placeholder="+998 (90) 123-45-67"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">Manzil</label>
                  <textarea
                    value={address}
                    rows={3}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-900 focus:border-transparent bg-gray-50 resize-none"
                    placeholder="Manzilingizni yozing"
                  />
                </div>

                {isAuthenticated && (!user?.phone || !user?.address) && (
                  <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg text-amber-800">
                    Iltimos, rasmiylashtirishdan oldin profil ma'lumotlarini
                    to'ldiring.{" "}
                    <button
                      onClick={() => onNavigate("profile")}
                      className="underline hover:no-underline"
                    >
                      Profilni Yangilash
                    </button>
                  </div>
                )}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-md">
              <div className="flex items-center gap-2 mb-6">
                <CreditCard className="text-amber-900" size={24} />
                <h3 className="text-gray-900">To'lov qilish usullari</h3>
              </div>

              <div className="space-y-3">
                <label className="flex items-center gap-3 p-4 border-2 border-amber-900 rounded-lg cursor-pointer bg-amber-50">
                  <input
                    type="radio"
                    name="payment"
                    defaultChecked
                    className="w-4 h-4"
                  />
                  <span>Buyurtmani qabul qilganimda</span>
                </label>
                <label className="flex items-center gap-3 p-4 border border-gray-300 rounded-lg cursor-pointer">
                  <input type="radio" name="payment" className="w-4 h-4" />
                  <span>Karta orqali ( Tez orada )</span>
                </label>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 shadow-md sticky top-24">
              <h3 className="mb-6 text-gray-900">Buyurtma xulosasi</h3>

              <div className="space-y-4 mb-6">
                {cart.map((item) => (
                  <div key={item.id} className="flex gap-3">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h4 className="text-gray-900 mb-1">{item.title}</h4>
                      <p className="text-gray-600">Soni: {item.quantity}</p>
                    </div>
                    <div className="text-amber-900">
                      {(item.price * item.quantity).toLocaleString()} So'm
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-3 mb-6 pt-4 border-t border-gray-200">
                <div className="flex justify-between text-gray-600">
                  <span>Barchasi</span>
                  <span>{getCartTotal().toLocaleString()} So'm</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Yetkazib berish</span>
                  <span className="text-green-600">Free</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  {/* <span>Tax</span>
                  <span>${(getCartTotal() * 0.1).toLocaleString()}</span> */}
                </div>
                <div className="flex justify-between text-gray-900 pt-3 border-t border-gray-200">
                  <span>Hammasi</span>
                  <span>{(getCartTotal() * 1.1).toLocaleString()} So'm</span>
                </div>
              </div>

              <button
                onClick={handlePlaceOrder}
                className={`w-full py-4 rounded-lg transition-colors text-white
    ${
      !phone || !address
        ? "bg-gray-400 cursor-not-allowed"
        : "bg-amber-900 hover:bg-amber-800"
    }`}
              >
                Buyurtma qilish
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
