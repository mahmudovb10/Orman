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
              O'zbekistondagi eng yirik yog'och va hashamatli lyustra ishlab
              chiqaruvchisi.
            </p>
            <div className="flex gap-4">
              <a
                href="https://t.me/orman_uz"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Send size={18} />
              </a>
              <a
                href="https://www.instagram.com/orman_uz/?utm_source=ig_web_button_share_sheet"
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
            <h4 className="mb-4 text-white">Mahsulotlarimiz</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#products"
                  className="text-white/70 hover:text-white transition-colors flex items-center gap-2"
                >
                  <TreePine size={16} />
                  Yog'och mahsulotlar
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="text-white/70 hover:text-white transition-colors flex items-center gap-2"
                >
                  <LampCeiling size={16} />
                  Lyustralar
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
                  Bosh sahifa
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Haqida
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Galareya
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Bog'lanish
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-white/50">
          <p>© 2025 Orman kompaniyasi. Barcha huquqlar himoyalangan.</p>
        </div>
      </div>
    </footer>
  );
}
