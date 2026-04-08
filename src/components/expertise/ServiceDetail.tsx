import Link from 'next/link';

export default function ServiceDetail() {
  const services = [
    {
      id: 'production-audiovisuelle',
      title: 'Production audiovisuelle',
      subtitle: 'Créez des contenus visuels qui captivent',
      description: 'Création de contenus vidéo pour les marques et la publicité, allant de la conception à la livraison finale. Cela inclut la vidéo promotionnelle, les contenus YouTube, les campagnes publicitaires et tous les projets nécessitant des moyens techniques professionnels.',
      features: [
        'Vidéos promotionnelles et publicitaires',
        'Contenus pour YouTube et réseaux sociaux',
        'Campagnes publicitaires multi-formats',
        'Production de bout en bout',
        'Post-production et montage professionnel',
        'Direction artistique et créative',
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      id: 'management-talents',
      title: 'Management de talents',
      subtitle: 'Développez et valorisez vos talents',
      description: 'Sélection et accompagnement de modèles et talents, que ce soit pour des collaborations avec des réalisateurs, le développement de leur présence sur les réseaux sociaux, ou la mise en relation avec des marques pour des missions et partenariats.',
      features: [
        'Scouting et sélection de talents',
        'Développement de carrière personnalisé',
        'Gestion de la présence sur les réseaux sociaux',
        'Mise en relation avec des marques',
        'Négociation de contrats et partenariats',
        'Accompagnement stratégique long terme',
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      id: 'digital-web',
      title: 'Digital & Web',
      subtitle: 'Dominez votre présence en ligne',
      description: 'Gestion de la présence en ligne, community management, développement web et création graphique, pour assurer une communication complète et cohérente sur tous les supports numériques.',
      features: [
        'Développement web sur mesure',
        'Community management professionnel',
        'Stratégie de contenu digital',
        'Création graphique et branding',
        'SEO et optimisation de la visibilité',
        'Analytics et reporting détaillé',
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-black text-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="space-y-32">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="text-white/80 mb-6">
                  {service.icon}
                </div>
                
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-3">
                    {service.title}
                  </h2>
                  <p className="text-xl text-white/60 mb-6">
                    {service.subtitle}
                  </p>
                </div>

                <p className="text-white/70 text-lg leading-relaxed">
                  {service.description}
                </p>

                <div className="pt-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full text-base font-semibold hover:bg-white/90 transition-all duration-200"
                  >
                    Discutons de votre projet
                    <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>

              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="border border-white/10 rounded-2xl p-8 bg-white/5">
                  <h3 className="text-xl font-semibold mb-6">Ce que nous offrons</h3>
                  <ul className="space-y-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <svg
                          className="w-6 h-6 text-white flex-shrink-0 mt-0.5"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-white/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-32 text-center border-t border-white/10 pt-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à démarrer votre projet ?
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
            Contactez-nous pour discuter de vos besoins et découvrir comment nous pouvons vous aider à atteindre vos objectifs.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full text-base font-semibold hover:bg-white/90 transition-all duration-200"
          >
            Contactez-nous
            <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
