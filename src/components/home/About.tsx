import Link from 'next/link';

export default function About() {
  const services = [
    {
      title: 'Production audiovisuelle',
      description: 'Création de contenus vidéo pour les marques et la publicité, allant de la conception à la livraison finale.',
    },
    {
      title: 'Management de talents',
      description: 'Sélection et accompagnement de modèles et talents pour des collaborations avec des marques et le développement de leur présence digitale.',
    },
    {
      title: 'Digital & Web',
      description: 'Gestion de la présence en ligne, community management, développement web et création graphique pour une communication complète.',
    },
  ];

  return (
    <section className="bg-black text-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Text Content */}
          <div className="space-y-12">
            <div>
              <h2 className="text-6xl md:text-7xl font-light mb-2">01</h2>
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">AGENCE</h3>
              <div className="space-y-6 text-white/80 text-base leading-relaxed">
                <p>
                  Chronos Corp, fondée par <span className="font-semibold">Nizar Ounich</span>, incarne une passion pour l'innovation digitale et l'influence, avec pour mission d'aider ses clients à prospérer dans un monde numérique en constante évolution.
                </p>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">Nos 3 Pôles d'Excellence :</h4>
              <ul className="space-y-6">
                {services.map((service, index) => (
                  <li key={index} className="space-y-2">
                    <h5 className="font-semibold text-white">{service.title}</h5>
                    <p className="text-white/70 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6">
              <Link
                href="/about"
                className="inline-block bg-[#1a2332] text-white px-8 py-3 rounded-md text-sm font-medium hover:bg-[#243447] transition-all duration-200"
              >
                QUI SOMMES-NOUS ?
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
