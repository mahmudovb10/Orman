import { useState } from "react";
import { User, Mail, Phone, MapPin, Save, LogOut, Package } from "lucide-react";
import { useAuth } from "../context/AuthContext";

export function ProfilePage({ onNavigate }) {
  const { user, updateProfile, logout } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(user?.name || "");
  const [phone, setPhone] = useState(user?.phone || "");
  const [address, setAddress] = useState(user?.address || "");
  const [showSuccess, setShowSuccess] = useState(false);

  if (!user) {
    return (
      <div className="min-h-screen pt-24 pb-20 bg-gray-50 flex items-center justify-center">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg p-8 text-center">
            <h2 className="text-amber-900 mb-4">Please Login</h2>
            <p className="text-gray-600 mb-6">
              You need to login to view your profile
            </p>
            <button
              onClick={() => onNavigate("login")}
              className="px-8 py-3 bg-amber-900 text-white rounded-lg hover:bg-amber-800 transition-colors"
            >
              Go to Login
            </button>
          </div>
        </div>
      </div>
    );
  }

  const handleSave = () => {
    updateProfile({ name, phone, address });
    setIsEditing(false);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const handleLogout = () => {
    logout();
    onNavigate("home");
  };

  return (
    <div className="min-h-screen pt-24 pb-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-amber-900 to-amber-800 p-8 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
                    <User size={40} />
                  </div>
                  <div>
                    <h1 className="text-white mb-1">{user.name}</h1>
                    <p className="text-white/80">{user.email}</p>
                  </div>
                </div>
                <button
                  onClick={handleLogout}
                  className="px-6 py-2 bg-white/10 backdrop-blur-sm text-white border border-white/30 rounded-lg hover:bg-white/20 transition-colors flex items-center gap-2"
                >
                  <LogOut size={18} />
                  Logout
                </button>
              </div>
            </div>

            {/* Success Message */}
            {showSuccess && (
              <div className="mx-8 mt-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                Profile updated successfully!
              </div>
            )}

            {/* Profile Info */}
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-amber-900">Profile Information</h2>
                {!isEditing && (
                  <button
                    onClick={() => setIsEditing(true)}
                    className="px-4 py-2 bg-amber-900 text-white rounded-lg hover:bg-amber-800 transition-colors"
                  >
                    Edit Profile
                  </button>
                )}
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-gray-700 mb-2">
                    <div className="flex items-center gap-2">
                      <User size={18} />
                      Full Name
                    </div>
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    disabled={!isEditing}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-900 focus:border-transparent disabled:bg-gray-50 disabled:text-gray-600"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">
                    <div className="flex items-center gap-2">
                      <Mail size={18} />
                      Email Address
                    </div>
                  </label>
                  <input
                    type="email"
                    value={user.email}
                    disabled
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-600"
                  />
                  <p className="text-gray-500 mt-1">Email cannot be changed</p>
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">
                    <div className="flex items-center gap-2">
                      <Phone size={18} />
                      Phone Number
                    </div>
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    disabled={!isEditing}
                    placeholder="+998 (90) 123-45-67"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-900 focus:border-transparent disabled:bg-gray-50 disabled:text-gray-600"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">
                    <div className="flex items-center gap-2">
                      <MapPin size={18} />
                      Address
                    </div>
                  </label>
                  <textarea
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    disabled={!isEditing}
                    placeholder="Enter your full address"
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-900 focus:border-transparent disabled:bg-gray-50 disabled:text-gray-600 resize-none"
                  />
                </div>

                {isEditing && (
                  <div className="flex gap-4">
                    <button
                      onClick={handleSave}
                      className="flex-1 py-3 bg-amber-900 text-white rounded-lg hover:bg-amber-800 transition-colors flex items-center justify-center gap-2"
                    >
                      <Save size={20} />
                      Save Changes
                    </button>
                    <button
                      onClick={() => {
                        setIsEditing(false);
                        setName(user.name);
                        setPhone(user.phone || "");
                        setAddress(user.address || "");
                      }}
                      className="flex-1 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Order History */}
            <div className="border-t border-gray-200 p-8">
              <h3 className="mb-4 text-gray-900 flex items-center gap-2">
                <Package size={20} />
                Order History
              </h3>
              <div className="text-center py-8 text-gray-500">
                You haven't placed any orders yet
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
