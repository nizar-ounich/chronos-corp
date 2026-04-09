import Link from 'next/link';
import Image from 'next/image';

export default function Projects() {
  const projects = [
    { brand: 'DIOR' },
    { brand: 'TOMMY HILFIGER' },
    { brand: 'NOCIBÉ' },
    { brand: 'LACOSTE' },
  ];

  return (
    <section className="bg-black text-white py-24 md:py-32 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Title and Text */}
          <div className="space-y-8">
            <div>
              <h2 className="text-6xl md:text-7xl font-light mb-2 font-francy">03</h2>
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-8 font-francy">PROJETS</h3>
            </div>
            <div className="space-y-6 text-white/80 text-base leading-relaxed font-francy">
              <p>
                Nous collaborons avec des marques prestigieuses pour les accompagner dans la création de contenus vidéo sur mesure. À chaque étape du projet, nous cherchons à mettre en valeur leur identité et leurs produits, en alliant créativité et savoir-faire technique, du concept initial jusqu'à la livraison finale.
              </p>
            </div>
            <div className="pt-6">
              <Link
                href="/projets"
                className="inline-block bg-white/5 text-white px-8 py-3 rounded-md text-sm font-medium hover:bg-white/10 transition-all duration-200 font-francy"
              >
                DÉCOUVRIR
              </Link>
            </div>
          </div>

          {/* Right Column - Images */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="aspect-[4/5] bg-white/5 rounded-lg overflow-hidden relative">
                <Image
                  src="/projets1.jpg"
                  alt="Projet 1"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <Image
                    src="/client-logo/nb-logo.avif"
                    alt="Client Logo"
                    width={180}
                    height={180}
                    className="object-contain"
                    style={{ width: 'auto', height: 'auto' }}
                  />
                </div>
              </div>
              <div className="aspect-[4/3] bg-white/5 rounded-lg overflow-hidden relative">
                <Image
                  src="/projets3.jpeg"
                  alt="Projet 2"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <Image
                    src="/client-logo/rd.png"
                    alt="Client Logo"
                    width={240}
                    height={240}
                    className="object-contain"
                    style={{ width: 'auto', height: 'auto' }}
                  />
                </div>
              </div>
            </div>
            <div className="pt-12">
              <div className="aspect-[3/4] bg-white/5 rounded-lg overflow-hidden relative">
                <Image
                  src="/projets2.jpeg"
                  alt="Projet 3"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <Image
                    src="/client-logo/nike-logo.png"
                    alt="Client Logo"
                    width={180}
                    height={180}
                    className="object-contain"
                    style={{ width: 'auto', height: 'auto' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
