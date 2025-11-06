import Banner from './Banner/Banner';
import Benefits from './Benefits/Benefits';
import CTASection from './CTASection/CTASection';
import FeatureListSection from './FeatureListSection/FeatureListSection';
import FeatureSection from './FeatureSection/FeatureSection';
import GallarySection from './GallarySection/GallarySection';
import NewsLetterSection from './NewsLetterSection/NewsLetterSection';
import ServicesSection from './ServicesSection/ServicesSection';
import StatsSection from './StatsSection/StatsSection';
import TeamSection from './TeamSection/TeamSection';
import TestimonialSection from './TestimonialSection/TestimonialSection';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeatureSection></FeatureSection>
            <FeatureListSection></FeatureListSection>
            <Benefits></Benefits>
            <ServicesSection></ServicesSection>
            <StatsSection></StatsSection>
            <TestimonialSection></TestimonialSection>
            <CTASection></CTASection>
            <NewsLetterSection></NewsLetterSection>
            <TeamSection></TeamSection>
            <GallarySection></GallarySection>
        </div>
    );
};

export default Home;