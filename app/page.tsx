import AboutSection from "@/components/aboutSection";
import DesignsSection from "@/components/designSection";
import Footer from "@/components/footer";
import Header from "@/components/header";
import HeroSection from "@/components/heroSections";
import ServicesSection from "@/components/servicesSection";
import WhyChooseSection from "@/components/whyChooseSection";
import SocialFloatButton from "@/components/socialFloatButton";

export default function Home() {
  return (
 <div className="min-h-screen">
      <Header />
      <SocialFloatButton />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <DesignsSection />
        <WhyChooseSection />
      </main>
      <Footer />
    </div>
  );
}
