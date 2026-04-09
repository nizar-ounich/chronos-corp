import Link from 'next/link';
import Image from 'next/image';

export default function Expertise() {
  const categories = [
    'COMMUNITY MANAGEMENT',
    'PUBLICITÉ',
    'DÉVELOPPEMENT WEB',
    'GRAPHISME',
    'MANAGEMENT DE TALENT',
    'MODEL',
  ];

  return (
    <section className="bg-black text-white py-24 md:py-32 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Images */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="aspect-[3/4] bg-white/5 rounded-lg overflow-hidden relative">
                <Image
                  src="/about1.jpeg"
                  alt="Expertise 1"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="space-y-4">
              <div className="aspect-square bg-white/5 rounded-lg overflow-hidden relative">
                <Image
                  src="/about2.JPEG"
                  alt="Expertise 2"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="aspect-[4/3] bg-white/5 rounded-lg overflow-hidden relative">
                <Image
                  src="/about3.jpeg"
                  alt="Expertise 3"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-12">
            <div className="text-right">
              <h2 className="text-6xl md:text-7xl font-light mb-2">02</h2>
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">SERVICES</h3>
            </div>

            <div className="space-y-6 text-white/80 text-base leading-relaxed">
              <p>
                Nous accompagnons les marques à chaque étape de leur développement digital. De la création audiovisuelle à la mise en ligne, nous concevons des dispositifs cohérents, pensés pour maximiser l'impact et la visibilité.
              </p>
              <p>
                Grâce à une approche transversale et une collaboration étroite avec nos clients, nous construisons des stratégies sur mesure, alliant créativité, performance et maîtrise des outils digitaux.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-8">
              {categories.map((category, index) => (
                <div
                  key={index}
                  className="bg-white/5 text-white px-6 py-3 text-center text-sm font-bold tracking-wider hover:bg-white/10 transition-all duration-200"
                >
                  {category}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
