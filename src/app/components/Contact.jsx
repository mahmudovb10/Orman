import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

export function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    alert("Thank you for your message! We will get back to you soon.");
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="mb-4 text-amber-900">Get In Touch</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Have questions about our products? We'd love to hear from you. Send
            us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="mb-6 text-amber-900">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-amber-900/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone size={20} className="text-amber-900" />
                  </div>
                  <div>
                    <div className="text-gray-900 mb-1">Phone</div>
                    <a
                      href="tel:+998901234567"
                      className="text-gray-600 hover:text-amber-900 transition-colors"
                    >
                      +998 (90) 123-45-67
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-amber-900/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail size={20} className="text-amber-900" />
                  </div>
                  <div>
                    <div className="text-gray-900 mb-1">Email</div>
                    <a
                      href="mailto:info@ormancompany.uz"
                      className="text-gray-600 hover:text-amber-900 transition-colors"
                    >
                      info@ormancompany.uz
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-amber-900/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-amber-900" />
                  </div>
                  <div>
                    <div className="text-gray-900 mb-1">Address</div>
                    <p className="text-gray-600">
                      123 Craftsman Street
                      <br />
                      Tashkent, Uzbekistan
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-amber-900/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock size={20} className="text-amber-900" />
                  </div>
                  <div>
                    <div className="text-gray-900 mb-1">Working Hours</div>
                    <p className="text-gray-600">
                      Monday - Friday: 9:00 AM - 6:00 PM
                      <br />
                      Saturday: 10:00 AM - 4:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="h-64 bg-gray-200 rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1677156811762-842312963ecd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1emJla2lzdGFuJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc2NjA1OTc2MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Location"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-900 focus:border-transparent"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-900 focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-900 focus:border-transparent"
                  placeholder="+998 (90) 123-45-67"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-900 focus:border-transparent resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-amber-900 text-white rounded-lg hover:bg-amber-800 transition-colors flex items-center justify-center gap-2"
              >
                Send Message
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
