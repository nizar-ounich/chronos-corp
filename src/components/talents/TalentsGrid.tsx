export default function TalentsGrid() {
  const talents = [
    { name: 'Talent 1', category: 'Mode & Lifestyle', followers: '250K' },
    { name: 'Talent 2', category: 'Beauté', followers: '180K' },
    { name: 'Talent 3', category: 'Voyage', followers: '320K' },
    { name: 'Talent 4', category: 'Sport & Fitness', followers: '150K' },
    { name: 'Talent 5', category: 'Gastronomie', followers: '200K' },
    { name: 'Talent 6', category: 'Tech & Innovation', followers: '280K' },
  ];

  return (
    <section id="talents" className="bg-black text-white py-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Nos Talents
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-white/70">
            Découvrez notre réseau de créateurs de contenu et influenceurs dans différents domaines
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {talents.map((talent, index) => (
            <div
              key={index}
              className="group relative aspect-[3/4] bg-white/5 rounded-lg overflow-hidden cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />
              <div className="absolute inset-0 bg-white/10 group-hover:bg-white/20 transition-colors duration-300" />
              
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <div className="mb-2">
                  <span className="text-xs text-white/60 uppercase tracking-wider">
                    {talent.category}
                  </span>
                </div>
                <h3 className="text-2xl font-semibold mb-2">{talent.name}</h3>
                <p className="text-white/70 text-sm">{talent.followers} abonnés</p>
              </div>

              <div className="absolute inset-0 flex items-center justify-center text-white/20">
                Image
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
