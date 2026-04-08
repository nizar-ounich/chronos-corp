export default function ExpertiseHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center bg-black text-white overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-32 text-center">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
            Notre Expertise
          </h1>
          
          <p className="max-w-3xl mx-auto text-lg md:text-xl text-white/70 leading-relaxed">
            Des solutions complètes pour propulser votre marque vers de nouveaux sommets. 
            De la production audiovisuelle au management de talents, en passant par le digital, 
            nous maîtrisons tous les aspects de votre communication.
          </p>
        </div>
      </div>
    </section>
  );
}
