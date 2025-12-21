import {
  TreePine,
  LampCeiling,
  Sofa,
  Send,
  Instagram,
  Youtube,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-amber-950 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-amber-900 rounded-lg flex items-center justify-center">
                <span className="text-white">O</span>
              </div>
              <span className="text-white">Orman Company</span>
            </div>
            <p className="text-white/70 mb-4">
              Uzbekistan's largest manufacturer of premium wooden furniture,
              elegant chandeliers, and luxury sofas. Crafting excellence since
              our inception.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Send size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="mb-4 text-white">Our Products</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#products"
                  className="text-white/70 hover:text-white transition-colors flex items-center gap-2"
                >
                  <TreePine size={16} />
                  Wooden Furniture
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="text-white/70 hover:text-white transition-colors flex items-center gap-2"
                >
                  <LampCeiling size={16} />
                  Chandeliers
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="text-white/70 hover:text-white transition-colors flex items-center gap-2"
                >
                  <Sofa size={16} />
                  Luxury Sofas
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-white/50">
          <p>
            © 2024 Orman Company. All rights reserved. Proudly crafted in
            Uzbekistan.
          </p>
        </div>
      </div>
    </footer>
  );
}
