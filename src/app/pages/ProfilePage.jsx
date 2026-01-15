import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { User, Mail, Phone, MapPin, Save, LogOut, X } from "lucide-react";
import { useAuth } from "../context/AuthContext";

function ProfilePage() {
  const { user, updateProfile, logout } = useAuth();
  const navigate = useNavigate();

  // State-lar
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  // Foydalanuvchi ma'lumotlari o'zgarganda state-ni yangilash
  useEffect(() => {
    if (user) {
      setName(user.displayName || user.name || "");
      setPhone(user.phone || "");
      setAddress(user.address || "");
    }
  }, [user]);

  // Agar foydalanuvchi tizimga kirmagan bo'lsa
  if (!user) {
    return (
      <div className="min-h-screen pt-24 pb-20 bg-gray-50 flex items-center justify-center">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg p-8 text-center">
            <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <User size={40} className="text-amber-900" />
            </div>
            <h2 className="text-2xl font-bold text-amber-900 mb-4">
              Kirish taqiqlangan
            </h2>
            <p className="text-gray-600 mb-6">
              Profil sahifasini ko'rish uchun iltimos tizimga kiring.
            </p>
            <button
              onClick={() => navigate("/login")}
              className="w-full px-8 py-3 bg-amber-900 text-white rounded-lg hover:bg-amber-800 transition-colors"
            >
              Login sahifasiga o'tish
            </button>
          </div>
        </div>
      </div>
    );
  }

  const handleSave = async () => {
    try {
      await updateProfile({ name, phone, address });
      setIsEditing(false);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    } catch (error) {
      console.error("Profilni yangilashda xatolik:", error);
      alert("Xatolik yuz berdi!");
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/"); // Asosiy sahifaga qaytarish
    } catch (error) {
      console.error("Logout xatosi:", error);
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            {/* Profil Header */}
            <div className="bg-gradient-to-r from-amber-900 to-amber-800 p-8 text-white">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4 text-center md:text-left flex-col md:flex-row">
                  <div className="w-24 h-24 bg-white/20 rounded-full border-4 border-white/30 flex items-center justify-center overflow-hidden">
                    {user.photoURL ? (
                      <img
                        src={user.photoURL}
                        alt="Profile"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <User size={48} />
                    )}
                  </div>
                  <div>
                    <h1 className="text-2xl font-bold text-white mb-1">
                      {name || "Foydalanuvchi"}
                    </h1>
                    <p className="text-white/80">{user.email}</p>
                  </div>
                </div>
                <button
                  onClick={handleLogout}
                  className="px-6 py-2 bg-white/10 backdrop-blur-sm text-white border border-white/30 rounded-lg hover:bg-red-600/40 transition-colors flex items-center gap-2"
                >
                  <LogOut size={18} />
                  Chiqish
                </button>
              </div>
            </div>

            {/* Muvaffaqiyat xabari */}
            {showSuccess && (
              <div className="mx-8 mt-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 flex justify-between items-center">
                <span>Profil muvaffaqiyatli yangilandi!</span>
                <button onClick={() => setShowSuccess(false)}>
                  <X size={18} />
                </button>
              </div>
            )}

            {/* Profil Ma'lumotlari */}
            <div className="p-8">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-amber-900">
                  Shaxsiy ma'lumotlar
                </h2>
                {!isEditing && (
                  <button
                    onClick={() => setIsEditing(true)}
                    className="px-6 py-2 bg-amber-900 text-white rounded-lg hover:bg-amber-800 transition-all shadow-md"
                  >
                    Tahrirlash
                  </button>
                )}
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Ism */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                    <User size={16} className="text-amber-700" /> To'liq ism
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    disabled={!isEditing}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-900 outline-none disabled:bg-gray-50 transition-all"
                  />
                </div>

                {/* Email (O'zgartirib bo'lmaydi) */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                    <Mail size={16} className="text-amber-700" /> Email
                  </label>
                  <input
                    type="email"
                    value={user.email}
                    disabled
                    className="w-full px-4 py-3 border border-gray-100 rounded-xl bg-gray-50 text-gray-500 cursor-not-allowed"
                  />
                </div>

                {/* Telefon */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                    <Phone size={16} className="text-amber-700" /> Telefon raqam
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    disabled={!isEditing}
                    placeholder="+998 90 123 45 67"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-900 outline-none disabled:bg-gray-50 transition-all"
                  />
                </div>

                {/* Manzil */}
                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                    <MapPin size={16} className="text-amber-700" /> Yetkazib
                    berish manzili
                  </label>
                  <textarea
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    disabled={!isEditing}
                    rows={3}
                    placeholder="Viloyat, tuman, ko'cha va uy raqami..."
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-900 outline-none disabled:bg-gray-50 transition-all resize-none"
                  />
                </div>
              </div>

              {/* Tahrirlash tugmalari */}
              {isEditing && (
                <div className="flex gap-4 mt-8">
                  <button
                    onClick={handleSave}
                    className="flex-1 py-3 bg-amber-900 text-white rounded-xl hover:bg-amber-800 transition-colors flex items-center justify-center gap-2 font-bold shadow-lg"
                  >
                    <Save size={20} />
                    Saqlash
                  </button>
                  <button
                    onClick={() => {
                      setIsEditing(false);
                      setName(user.displayName || user.name || "");
                      setPhone(user.phone || "");
                      setAddress(user.address || "");
                    }}
                    className="flex-1 py-3 bg-gray-200 text-gray-700 rounded-xl hover:bg-gray-300 transition-colors font-bold"
                  >
                    Bekor qilish
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
