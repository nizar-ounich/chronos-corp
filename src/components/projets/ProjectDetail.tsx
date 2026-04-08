import Link from 'next/link';

interface Project {
  id: string;
  brand: string;
  category: string;
  title: string;
  description: string;
  year: string;
  services: string[];
  challenge: string;
  solution: string;
  results: string[];
  images: string[];
}

interface ProjectDetailProps {
  project: Project;
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-black text-white pt-32 pb-16 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Link
            href="/projets"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-8"
          >
            <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M15 19l-7-7 7-7" />
            </svg>
            Retour aux projets
          </Link>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
            <div>
              <span className="inline-block px-4 py-1 bg-white/10 rounded-full text-sm font-medium mb-4">
                {project.category}
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4">
                {project.brand}
              </h1>
              <p className="text-2xl text-white/70">{project.title}</p>
            </div>
            <div className="text-white/60">
              <p className="text-sm uppercase tracking-wider mb-1">Année</p>
              <p className="text-3xl font-bold">{project.year}</p>
            </div>
          </div>

          <p className="text-xl text-white/70 max-w-3xl leading-relaxed">
            {project.description}
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-black text-white py-16 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-sm uppercase tracking-wider text-white/60 mb-6">Services fournis</h2>
          <div className="flex flex-wrap gap-3">
            {project.services.map((service, index) => (
              <span
                key={index}
                className="px-6 py-3 bg-white/5 border border-white/10 rounded-lg text-base font-medium"
              >
                {service}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Images Gallery */}
      <section className="bg-black text-white py-16 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.images.map((image, index) => (
              <div
                key={index}
                className="aspect-[4/3] bg-white/5 rounded-lg overflow-hidden"
              >
                <div className="w-full h-full flex items-center justify-center text-white/20">
                  Image {index + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="bg-black text-white py-16 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Le Défi</h2>
              <p className="text-white/70 text-lg leading-relaxed">
                {project.challenge}
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Notre Solution</h2>
              <p className="text-white/70 text-lg leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="bg-black text-white py-16 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12">Résultats</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {project.results.map((result, index) => (
              <div
                key={index}
                className="p-8 bg-white/5 border border-white/10 rounded-lg"
              >
                <p className="text-2xl font-bold mb-2">{result}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black text-white py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Prêt à lancer votre projet ?
          </h2>
          <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
            Discutons de vos objectifs et créons ensemble une campagne qui marque les esprits.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-black px-8 py-4 rounded-lg text-base font-semibold hover:bg-white/90 transition-all duration-200"
          >
            Contactez-nous
          </Link>
        </div>
      </section>
    </div>
  );
}
