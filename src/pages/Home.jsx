import { Helmet } from 'react-helmet';
import HeroSection from '../components/home/HeroSection';
import FeatureSection from '../components/home/FeatureSection';
import ServicesSection from '../components/home/ServicesSection';
import CtaSection from '../components/home/CtaSection';
import PortfolioSection from '../components/home/PortfolioSection';
import StatsSection from '../components/home/StatsSection';
import ContactSection from '../components/home/ContactSection';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Creative Agency - Modern Digital Solutions</title>
        <meta name="description" content="A full-service creative agency specializing in branding, web design, and digital marketing solutions that drive results." />
      </Helmet>
      <HeroSection />
      <FeatureSection />
      <ServicesSection />
      <CtaSection />
      <PortfolioSection />
      <StatsSection />
      <ContactSection />
    </>
  );
};

export default Home;
