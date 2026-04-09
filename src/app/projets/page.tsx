import ProjectsGrid from '@/components/projets/ProjectsGrid';

export const metadata = {
  title: 'Projets - Chronos Corp.',
  description: 'Découvrez nos réalisations et collaborations avec des marques prestigieuses. Production audiovisuelle, management de talents et stratégies digitales.',
};

export default function ProjetsPage() {
  return (
    <main className="bg-black">
      <ProjectsGrid />
    </main>
  );
}
