import Link from 'next/link';

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
              <h2 className="text-6xl md:text-7xl font-light mb-2">03</h2>
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">PROJETS</h3>
            </div>
            <div className="space-y-6 text-white/80 text-base leading-relaxed">
              <p>
                Découvrez nos collaborations avec des marques prestigieuses dans les secteurs de la mode, beauté, luxe et lifestyle.
              </p>
            </div>
            <div className="pt-6">
              <Link
                href="/projets"
                className="inline-block bg-white/5 text-white px-8 py-3 rounded-md text-sm font-medium hover:bg-white/10 transition-all duration-200"
              >
                DÉCOUVRIR
              </Link>
            </div>
          </div>

          {/* Right Column - Images */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="aspect-[4/5] bg-white/5 rounded-lg overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-white/20">
                  Image 1
                </div>
              </div>
              <div className="aspect-[4/3] bg-white/5 rounded-lg overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-white/20">
                  Image 2
                </div>
              </div>
            </div>
            <div className="pt-12">
              <div className="aspect-[3/4] bg-white/5 rounded-lg overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-white/20">
                  Image 3
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
