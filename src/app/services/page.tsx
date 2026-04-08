import ExpertiseHero from '@/components/expertise/ExpertiseHero';
import ServiceDetail from '@/components/expertise/ServiceDetail';

export const metadata = {
  title: 'Nos Services - Chronos',
  description: 'Découvrez nos services : Production audiovisuelle, Management de talents, Digital & Web',
};

export default function ServicesPage() {
  return (
    <main className="bg-black">
      <ExpertiseHero />
      <ServiceDetail />
    </main>
  );
}
