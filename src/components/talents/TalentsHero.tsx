export default function TalentsHero() {
  return (
    <section className="relative bg-black text-white pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            Rejoignez notre réseau de modèles et talents
          </h1>
          <p className="text-xl text-white/70 leading-relaxed mb-8">
            Nous accompagnons des créateurs de contenu, modèles et influenceurs dans le développement 
            de leur carrière et de leur présence digitale. Collaborez avec des marques prestigieuses 
            et développez votre potentiel avec Chronos Corp.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#join"
              className="bg-white text-black px-8 py-4 rounded-lg text-base font-semibold hover:bg-white/90 transition-all duration-200 text-center"
            >
              Rejoindre le réseau
            </a>
            <a
              href="#talents"
              className="border border-white/20 text-white px-8 py-4 rounded-lg text-base font-semibold hover:bg-white/10 transition-all duration-200 text-center"
            >
              Découvrir nos talents
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
