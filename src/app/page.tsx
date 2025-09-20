import Hero from '@/components/Hero';
import About from '@/components/About';
import Facilities from '@/components/Facilities';
import DailySchedule from '@/components/DailySchedule';
import Pricing from '@/components/Pricing';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <div className="pt-16">
      <Hero />
      <About />
      <Facilities />
      <DailySchedule />
      <Pricing />
      <Contact />
    </div>
  );
}
