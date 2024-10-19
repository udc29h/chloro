import HeroSection from './components/HeroSection';
import BeautyLanding from './components/Bueatylanding';
import OurService from './components/OurServices'
import FeaturedProduct from './components/FeaturedProduct';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <BeautyLanding/>
      <FeaturedProduct/>
      <OurService/>
      {/* Other sections of your homepage */}
    </main>
  );
}