import TalentsHero from '@/components/talents/TalentsHero';
import TalentsGrid from '@/components/talents/TalentsGrid';
import TalentsBenefits from '@/components/talents/TalentsBenefits';
import TalentsJoin from '@/components/talents/TalentsJoin';

export const metadata = {
  title: 'Talents - Chronos Corp',
  description: 'Rejoignez notre réseau de talents créatifs. Management de talents, collaborations avec des marques et développement de votre présence digitale.',
};

export default function TalentsPage() {
  return (
    <main className="bg-black">
      <TalentsHero />
      <TalentsGrid />
      <TalentsBenefits />
      <TalentsJoin />
    </main>
  );
}
