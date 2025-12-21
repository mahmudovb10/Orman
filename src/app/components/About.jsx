import { Award, Users, Factory, TrendingUp } from "lucide-react";

export function About() {
  const stats = [
    {
      icon: Award,
      value: "#1",
      label: "Manufacturer in Uzbekistan",
    },
    {
      icon: Users,
      value: "500+",
      label: "Skilled Craftsmen",
    },
    {
      icon: Factory,
      value: "15+",
      label: "Years of Excellence",
    },
    {
      icon: TrendingUp,
      value: "10k+",
      label: "Happy Customers",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="mb-6 text-amber-900">About Orman Company</h2>
            <p className="text-gray-600 mb-6">
              As Uzbekistan's largest and most trusted manufacturer of wooden
              furniture, chandeliers, and sofas, Orman Company has been setting
              the standard for quality and craftsmanship since our founding.
            </p>
            <p className="text-gray-600 mb-6">
              Our commitment to excellence is evident in every piece we create.
              We combine traditional woodworking techniques passed down through
              generations with modern design sensibilities to create furniture
              that stands the test of time.
            </p>
            <p className="text-gray-600 mb-8">
              From sourcing the finest materials to the final finishing touches,
              every step of our manufacturing process is carefully monitored to
              ensure the highest quality standards. Our team of skilled artisans
              takes pride in their work, creating pieces that are not just
              furniture, but works of art.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-12 h-12 bg-amber-900/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <stat.icon size={24} className="text-amber-900" />
                  </div>
                  <div>
                    <div className="text-amber-900 mb-1">{stat.value}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1759307278083-852eb23b6e98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjBjcmFmdHNtYW5zaGlwJTIwZGV0YWlsfGVufDF8fHx8MTc2NjA4NjczMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Craftsmanship"
                className="w-full h-[600px] object-cover"
              />
            </div>

            {/* Decorative Element */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-amber-900 rounded-2xl -z-10" />
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-amber-900/20 rounded-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
