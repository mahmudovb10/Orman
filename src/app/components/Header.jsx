import { Menu, X, ShoppingCart, CircleUserRound } from "lucide-react";
import { useState } from "react";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

export function Header({ currentPage, onNavigate }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getCartCount } = useCart();
  const { isAuthenticated } = useAuth();
  const cartCount = getCartCount();

  const scrollToSection = (id) => {
    if (currentPage !== "home") {
      onNavigate("home");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMenuOpen(false);
  };

  const handleNavigate = (page) => {
    onNavigate(page);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => handleNavigate("home")}
            className="flex items-center gap-2"
          >
            <div className="w-10 h-10  rounded-lg flex items-center justify-center">
              <img src="/logo.jpg" alt="" className="site__logo" />
            </div>
            <span className="text-amber-900">Orman</span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-gray-700 hover:text-amber-900 transition-colors"
            >
              Bosh sahifa
            </button>
            <button
              onClick={() => handleNavigate("products")}
              className="text-gray-700 hover:text-amber-900 transition-colors"
            >
              Mahsulotlar
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-700 hover:text-amber-900 transition-colors"
            >
              Haqida
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="text-gray-700 hover:text-amber-900 transition-colors"
            >
              Galareya
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-700 hover:text-amber-900 transition-colors"
            >
              Aloqa
            </button>

            {/* Profile Icon */}
            {isAuthenticated ? (
              <button
                onClick={() => handleNavigate("profile")}
                className="text-gray-700 hover:text-amber-900 transition-colors"
              >
                <CircleUserRound size={24} />
              </button>
            ) : (
              <button
                onClick={() => handleNavigate("login")}
                className="text-gray-700 hover:text-amber-900 transition-colors"
              >
                Kirish
              </button>
            )}

            {/* Cart Icon */}
            <button
              onClick={() => handleNavigate("cart")}
              className="relative text-gray-700 hover:text-amber-900 transition-colors"
            >
              <ShoppingCart size={24} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-amber-900 text-white rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            {isAuthenticated && (
              <button
                onClick={() => handleNavigate("profile")}
                className="text-gray-700"
              >
                <CircleUserRound size={24} />
              </button>
            )}
            <button
              onClick={() => handleNavigate("cart")}
              className="relative text-gray-700"
            >
              <ShoppingCart size={24} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-amber-900 text-white rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
            <button
              className="text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection("home")}
              className="text-gray-700 hover:text-amber-900 transition-colors text-left"
            >
              Home
            </button>
            <button
              onClick={() => handleNavigate("products")}
              className="text-gray-700 hover:text-amber-900 transition-colors text-left"
            >
              Products
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-700 hover:text-amber-900 transition-colors text-left"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="text-gray-700 hover:text-amber-900 transition-colors text-left"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-700 hover:text-amber-900 transition-colors text-left"
            >
              Contact
            </button>
            {!isAuthenticated && (
              <button
                onClick={() => handleNavigate("login")}
                className="text-gray-700 hover:text-amber-900 transition-colors text-left"
              >
                Login
              </button>
            )}
          </div>
        )}
      </nav>
    </header>
  );
}
