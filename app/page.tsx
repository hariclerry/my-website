import Hero from './components/Hero';
import { FloatingNav } from './components/ui/FloatingNav';
import { navItems } from './data';
import RecentProjects from './components/RecentProjects';
import Footer from './components/Footer';
import TechStack from './components/TechStack';

export default function Home() {
  return (
    <main
      className="relative bg-black-100 flex justify-center items-center 
    flex-col overflow-hidden mx-auto sm:px-10 px-5"
    >
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <RecentProjects />
        <TechStack />
        <Footer />
      </div>
    </main>
  );
}
