import { useState } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import PortfolioSection from '@/components/PortfolioSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import FAQSection from '@/components/FAQSection';
import ContactSection from '@/components/ContactSection';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import ServiceRequestModal from '@/components/ServiceRequestModal';
import Footer from '@/components/Footer';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const handleRequestService = (serviceName?: string) => {
    setSelectedService(serviceName || 'الخدمة');
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <HeroSection onRequestService={handleRequestService} />

      {/* Services Section */}
      <ServicesSection onRequestService={handleRequestService} />

      {/* About Section */}
      <AboutSection />

      {/* Portfolio Section */}
      <PortfolioSection />

      {/* How It Works Section */}
      <HowItWorksSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Button */}
      <FloatingWhatsApp />

      {/* Service Request Modal */}
      <ServiceRequestModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        serviceName={selectedService}
      />
    </div>
  );
}
