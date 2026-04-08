import Link from 'next/link';

export default function Expertise() {
  const categories = [
    'MODE',
    'BEAUTE',
    'VOYAGE',
    'HOTELLERIE',
    'LUXE',
    'RESTAURATION',
  ];

  return (
    <section className="bg-black text-white py-24 md:py-32 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Images */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="aspect-[3/4] bg-white/5 rounded-lg overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-white/20">
                  Image 1
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="aspect-square bg-white/5 rounded-lg overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-white/20">
                  Image 2
                </div>
              </div>
              <div className="aspect-[4/3] bg-white/5 rounded-lg overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-white/20">
                  Image 3
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-12">
            <div className="text-right">
              <h2 className="text-6xl md:text-7xl font-light mb-2">02</h2>
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">EXPERTISE</h3>
            </div>

            <div className="space-y-6 text-white/80 text-base leading-relaxed">
              <p>
                Nos stratégies innovantes d'influence digitale s'appuient sur notre étroite collaboration avec des créateurs de contenu du monde entier, notre réseau et notre expertise des réseaux sociaux.
              </p>
              <p>
                Nos clients bénéficient de cette expertise combinée à une réelle proximité des équipes pour concevoir et mettre en œuvre des stratégies créatives.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-8">
              {categories.map((category, index) => (
                <div
                  key={index}
                  className="bg-[#1a2332] text-white px-6 py-3 text-center text-sm font-bold tracking-wider hover:bg-[#243447] transition-all duration-200"
                >
                  {category}
                </div>
              ))}
            </div>

            <div className="pt-6">
              <Link
                href="/services"
                className="inline-block bg-[#1a2332] text-white px-8 py-3 rounded-md text-sm font-medium hover:bg-[#243447] transition-all duration-200"
              >
                EN SAVOIR +
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
