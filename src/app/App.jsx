import { useState } from "react";
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { HomePage } from "./pages/HomePage";
import { ProductsPage } from "./pages/ProductsPage";
import { ProductDetailPage } from "./pages/ProductDetailPage";
import { CartPage } from "./pages/CartPage";
import { CheckoutPage } from "./pages/CheckoutPage";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { ProfilePage } from "./pages/ProfilePage";

export default function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [selectedProductId, setSelectedProductId] = useState(null);

  const handleNavigate = (page) => {
    setCurrentPage(page);
  };

  const handleProductClick = (productId) => {
    setSelectedProductId(productId);
    setCurrentPage("product-detail");
  };

  const handleBackToProducts = () => {
    setCurrentPage("products");
  };

  return (
    <AuthProvider>
      <CartProvider>
        <div className="min-h-screen">
          <Header currentPage={currentPage} onNavigate={handleNavigate} />
          <main>
            {/* O'ZGARTIRILDI: onNavigate prop qo'shildi */}
            {currentPage === "home" && <HomePage onNavigate={handleNavigate} />}

            {currentPage === "products" && (
              <ProductsPage onProductClick={handleProductClick} />
            )}

            {currentPage === "product-detail" && selectedProductId && (
              <ProductDetailPage
                productId={selectedProductId}
                onBack={handleBackToProducts}
              />
            )}

            {currentPage === "cart" && <CartPage onNavigate={handleNavigate} />}
            {currentPage === "checkout" && (
              <CheckoutPage onNavigate={handleNavigate} />
            )}
            {currentPage === "login" && (
              <LoginPage onNavigate={handleNavigate} />
            )}
            {currentPage === "register" && (
              <RegisterPage onNavigate={handleNavigate} />
            )}
            {currentPage === "profile" && (
              <ProfilePage onNavigate={handleNavigate} />
            )}
          </main>
          <Footer />
        </div>
      </CartProvider>
    </AuthProvider>
  );
}
