import Hero from '@/components/home/Hero';
import About from '@/components/home/About';
import Expertise from '@/components/home/Expertise';
import Projects from '@/components/home/Projects';

export default function Home() {
  return (
    <main className="bg-black">
      <Hero />
      <About />
      <Expertise />
      <Projects />
    </main>
  );
}
