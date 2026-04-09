'use client';

import Image from 'next/image';

export default function ProjectsGrid() {
  const projects = [
    {
      brand: 'NEW BALANCE',
      category: 'Mode',
      description: 'Campagne de lancement pour la nouvelle collection automne-hiver',
      image: '/projets1.jpg',
      logo: '/client-logo/nb-logo.avif',
    },
    {
      brand: 'NIKE',
      category: 'Mode',
      description: 'Production de contenu pour la campagne streetwear',
      image: '/projets3.jpeg',
      logo: '/client-logo/rd.png',
    },
    {
      brand: 'NIKE',
      category: 'Beauté',
      description: 'Stratégie d\'influence pour le lancement de nouveaux produits',
      image: '/projets2.jpeg',
      logo: '/client-logo/nike-logo.png',
    },
  ];

  return (
    <section className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-12 lg:px-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-4">RÉALISATIONS</h1>
          <div className="w-24 h-0.5 bg-white mx-auto mb-8"></div>
        </div>
        
        <div className="grid grid-cols-3 gap-4 max-w-4xl mx-auto justify-center">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/3] bg-white/5 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.brand}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <h3 className="text-white text-lg font-medium text-center">{project.brand}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
