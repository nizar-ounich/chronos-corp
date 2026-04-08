import ProjectDetail from '@/components/projets/ProjectDetail';
import { notFound } from 'next/navigation';

// Sample project data - in production, this would come from a database
const projects = [
  {
    id: 'dior',
    brand: 'DIOR',
    category: 'Mode',
    title: 'Campagne Automne-Hiver 2024',
    description: 'Campagne de lancement pour la nouvelle collection automne-hiver avec des influenceurs mode de premier plan.',
    year: '2024',
    services: ['Production audiovisuelle', 'Management de talents', 'Stratégie digitale'],
    challenge: 'Créer une campagne authentique qui résonne avec la génération Z tout en respectant l\'héritage de la maison Dior.',
    solution: 'Collaboration avec des créateurs de contenu émergents pour une approche fraîche et moderne, tout en maintenant l\'élégance caractéristique de Dior.',
    results: [
      '5M+ impressions sur les réseaux sociaux',
      '250K+ engagements',
      '+45% de trafic vers le site web',
    ],
    images: ['/projects/dior-1.jpg', '/projects/dior-2.jpg', '/projects/dior-3.jpg'],
  },
  {
    id: 'tommy-hilfiger',
    brand: 'TOMMY HILFIGER',
    category: 'Mode',
    title: 'Collection Streetwear 2024',
    description: 'Production de contenu pour la campagne streetwear avec des talents urbains et sportifs.',
    year: '2024',
    services: ['Production audiovisuelle', 'Management de talents'],
    challenge: 'Capturer l\'essence du streetwear tout en restant fidèle à l\'ADN Tommy Hilfiger.',
    solution: 'Partenariat avec des influenceurs streetwear et création de contenu authentique dans des environnements urbains.',
    results: [
      '3M+ vues sur TikTok',
      '180K+ engagements',
      '+30% de notoriété de marque',
    ],
    images: ['/projects/tommy-1.jpg', '/projects/tommy-2.jpg'],
  },
  {
    id: 'nocibe',
    brand: 'NOCIBÉ',
    category: 'Beauté',
    title: 'Lancement Nouveaux Produits',
    description: 'Stratégie d\'influence pour le lancement de nouveaux produits beauté avec des créateurs spécialisés.',
    year: '2024',
    services: ['Management de talents', 'Stratégie digitale'],
    challenge: 'Se démarquer dans un marché beauté saturé et créer du buzz autour des nouveaux produits.',
    solution: 'Activation d\'un réseau d\'influenceurs beauté avec des tutoriels et revues authentiques.',
    results: [
      '2M+ impressions',
      '120K+ engagements',
      'Produits en rupture de stock en 48h',
    ],
    images: ['/projects/nocibe-1.jpg', '/projects/nocibe-2.jpg'],
  },
  {
    id: 'lacoste',
    brand: 'LACOSTE',
    category: 'Mode',
    title: 'Campagne Sport & Lifestyle',
    description: 'Collaboration avec des influenceurs sportifs pour promouvoir la collection sport.',
    year: '2024',
    services: ['Production audiovisuelle', 'Management de talents'],
    challenge: 'Rajeunir l\'image de marque et toucher une audience plus jeune et sportive.',
    solution: 'Partenariat avec des athlètes et créateurs de contenu sport pour des contenus dynamiques et inspirants.',
    results: [
      '4M+ impressions',
      '200K+ engagements',
      '+50% d\'engagement sur Instagram',
    ],
    images: ['/projects/lacoste-1.jpg', '/projects/lacoste-2.jpg'],
  },
];

export async function generateMetadata({ params }: { params: { id: string } }) {
  const project = projects.find(p => p.id === params.id);
  
  if (!project) {
    return {
      title: 'Projet non trouvé - Chronos Corp',
    };
  }

  return {
    title: `${project.brand} - ${project.title} | Chronos Corp`,
    description: project.description,
  };
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects.find(p => p.id === params.id);

  if (!project) {
    notFound();
  }

  return (
    <main className="bg-black">
      <ProjectDetail project={project} />
    </main>
  );
}
