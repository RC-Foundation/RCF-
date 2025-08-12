import HeroSection from '../components/home/HeroSection';
import AboutPreview from '../components/home/AboutPreview';
import OurPillars from '../components/home/OurPillars';
import InteractiveMap from '../components/home/InteractiveMap';
import SentryTestButton from '../components/common/SentryTestButton';

const HomePage: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <AboutPreview />
      <OurPillars />
      <InteractiveMap />
      <SentryTestButton />
    </div>
  );
};

export default HomePage;
