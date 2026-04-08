import Link from 'next/link';

export default function Projects() {
  const projects = [
    { brand: 'DIOR' },
    { brand: 'TOMMY HILFIGER' },
    { brand: 'NOCIBÉ' },
    { brand: 'LACOSTE' },
  ];

  return (
    <section className="bg-black text-white pt-16 pb-0">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-12">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-6xl md:text-7xl font-light mb-2">03</h2>
            <h3 className="text-3xl md:text-4xl font-bold tracking-tight">PROJETS</h3>
          </div>
          <Link
            href="/projets"
            className="bg-white text-black px-8 py-3 rounded-md text-sm font-medium hover:bg-white/90 transition-all duration-200"
          >
            DÉCOUVRIR
          </Link>
        </div>
      </div>

      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative aspect-[3/4] bg-gray-100 overflow-hidden group cursor-pointer"
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all duration-300 z-10" />
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <h4 className="text-white text-2xl md:text-3xl font-bold tracking-wider text-center px-4">
                  {project.brand}
                </h4>
              </div>
              <div className="absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-400">
                Image
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
