
import { useState } from 'react';
import { MessageSquare, Instagram, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import HeroSection from '@/components/HeroSection';
import VideoGallery from '@/components/VideoGallery';
import PlatformSelector from '@/components/PlatformSelector';
import PaymentDialog from '@/components/PaymentDialog';
import LanguageSelector from '@/components/LanguageSelector';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { Toaster } from '@/components/ui/toaster';
import { useLanguage } from '@/contexts/LanguageContext';

const IndexContent = () => {
  const [showPlatformDialog, setShowPlatformDialog] = useState(false);
  const [showPaymentDialog, setShowPaymentDialog] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState<string>('');
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string>('');
  const { t } = useLanguage();

  const handlePlatformSelect = (platform: string) => {
    setSelectedPlatform(platform);
    setShowPlatformDialog(false);
    setShowPaymentDialog(true);
  };

  return (
    <>
      <Toaster />
      <LanguageSelector />
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
        <HeroSection onGetStarted={() => setShowPlatformDialog(true)} />
        
        <main className="container mx-auto px-4 py-12 space-y-24">
          <section className="max-w-4xl mx-auto space-y-6">
            <h2 className="text-3xl font-bold text-center mb-8">{t('ourStory')}</h2>
            <p className="text-gray-300 leading-relaxed">{t('storyText')}</p>
            <div className="text-lg font-semibold text-primary-foreground bg-primary/10 p-6 rounded-lg border border-primary/20 space-y-3">
              <p>{t('revolutionText')}</p>
            </div>
          </section>

          <VideoGallery />

          <section className="text-center space-y-8 max-w-3xl mx-auto bg-gray-800/50 p-8 rounded-xl border border-gray-700">
            <h2 className="text-3xl font-bold">{t('readyToMaster')}</h2>
            <p className="text-xl text-gray-300">{t('transformText')}</p>
            <Button 
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-6 text-lg"
              onClick={() => setShowPlatformDialog(true)}
            >
              {t('getAppNow')} <ArrowRight className="ml-2" />
            </Button>
          </section>

          <section className="text-center space-y-6 pb-12">
            <h2 className="text-2xl font-semibold">{t('contactUs')}</h2>
            <div className="flex justify-center gap-6">
              <a href="https://t.me/Bedmalcon_temp" target="_blank" rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors">
                <MessageSquare size={32} />
              </a>
              <a href="https://www.instagram.com/hackpoker_updated" target="_blank" rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors">
                <Instagram size={32} />
              </a>
            </div>
          </section>
        </main>

        <footer className="py-6 bg-black/30 text-center text-gray-400">
          <p>{t('footer')}</p>
        </footer>

        <PlatformSelector 
          open={showPlatformDialog}
          onOpenChange={setShowPlatformDialog}
          onSelect={handlePlatformSelect}
        />

        <PaymentDialog 
          open={showPaymentDialog}
          onOpenChange={setShowPaymentDialog}
          platform={selectedPlatform}
          onPaymentMethodSelect={setSelectedPaymentMethod}
        />
      </div>
    </>
  );
};

const Index = () => (
  <LanguageProvider>
    <IndexContent />
  </LanguageProvider>
);

export default Index;
