export default function ProjectsGrid() {
  const projects = [
    {
      brand: 'DIOR',
      category: 'Mode',
      description: 'Campagne de lancement pour la nouvelle collection automne-hiver',
      image: '/projects/dior.jpg',
    },
    {
      brand: 'TOMMY HILFIGER',
      category: 'Mode',
      description: 'Production de contenu pour la campagne streetwear',
      image: '/projects/tommy.jpg',
    },
    {
      brand: 'NOCIBÉ',
      category: 'Beauté',
      description: 'Stratégie d\'influence pour le lancement de nouveaux produits',
      image: '/projects/nocibe.jpg',
    },
    {
      brand: 'LACOSTE',
      category: 'Mode',
      description: 'Collaboration avec des influenceurs sportifs',
      image: '/projects/lacoste.jpg',
    },
    {
      brand: 'CHANEL',
      category: 'Luxe',
      description: 'Production audiovisuelle pour événement exclusif',
      image: '/projects/chanel.jpg',
    },
    {
      brand: 'LOUIS VUITTON',
      category: 'Luxe',
      description: 'Campagne digitale pour la collection voyage',
      image: '/projects/lv.jpg',
    },
    {
      brand: 'SEPHORA',
      category: 'Beauté',
      description: 'Management de talents pour campagne beauté',
      image: '/projects/sephora.jpg',
    },
    {
      brand: 'MARRIOTT',
      category: 'Hôtellerie',
      description: 'Contenu créatif pour hôtels de luxe',
      image: '/projects/marriott.jpg',
    },
    {
      brand: 'AIR FRANCE',
      category: 'Voyage',
      description: 'Campagne d\'influence pour destinations premium',
      image: '/projects/airfrance.jpg',
    },
  ];

  return (
    <section className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] bg-white/5 rounded-lg overflow-hidden mb-6">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />
                <div className="absolute inset-0 bg-white/10 group-hover:bg-white/20 transition-colors duration-300" />
                
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <h3 className="text-white text-3xl md:text-4xl font-bold tracking-wider">
                    {project.brand}
                  </h3>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium mb-3">
                    {project.category}
                  </span>
                </div>

                <div className="absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-400">
                  Image
                </div>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-xl font-semibold group-hover:text-white/80 transition-colors">
                  {project.brand}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="bg-white text-black px-8 py-4 rounded-lg text-base font-semibold hover:bg-white/90 transition-all duration-200">
            Charger plus de projets
          </button>
        </div>
      </div>
    </section>
  );
}
