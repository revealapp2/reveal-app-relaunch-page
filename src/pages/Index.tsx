
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Check, Telegram, Instagram } from "lucide-react";
import HeroSection from '@/components/HeroSection';
import VideoGallery from '@/components/VideoGallery';
import PlatformSelector from '@/components/PlatformSelector';
import PaymentDialog from '@/components/PaymentDialog';

const Index = () => {
  const [showPlatformDialog, setShowPlatformDialog] = useState(false);
  const [showPaymentDialog, setShowPaymentDialog] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState<string>('');
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string>('');

  const handlePlatformSelect = (platform: string) => {
    setSelectedPlatform(platform);
    setShowPlatformDialog(false);
    setShowPaymentDialog(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <HeroSection onGetStarted={() => setShowPlatformDialog(true)} />
      
      <main className="container mx-auto px-4 py-12 space-y-24">
        <section className="max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold text-center mb-8">Our Story: How We Revolutionized Poker</h2>
          <p className="text-gray-300 leading-relaxed">
            It all started with a series of unexpected defeats, sparking a quest to uncover hidden vulnerabilities in popular poker apps like PPPOKER and XPoker. Through months of rigorous research, we revealed critical flaws that were being exploited.
          </p>
          <p className="text-lg font-semibold text-primary-foreground bg-primary/10 p-6 rounded-lg border border-primary/20">
            This isn't just a tool—it's a revolution. Players worldwide are gaining a strategic edge, and now it's your turn to transform your game.
            <span className="block mt-2 text-white">Act now, because every moment without this app is a missed opportunity to dominate!</span>
          </p>
        </section>

        <VideoGallery />

        <section className="text-center space-y-8 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold">Ready to Dominate?</h2>
          <p className="text-xl text-gray-300">
            Transform your poker game today with unparalleled insights into your opponents' strategies.
          </p>
          <Button 
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-6 text-lg"
            onClick={() => setShowPlatformDialog(true)}
          >
            Get the App Now
          </Button>
        </section>

        <section className="text-center space-y-6 pb-12">
          <h2 className="text-2xl font-semibold">Contact Us</h2>
          <div className="flex justify-center gap-6">
            <a href="https://t.me/Bedmalcon_temp" target="_blank" rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors">
              <Telegram size={32} />
            </a>
            <a href="https://www.instagram.com/hackpoker_updated" target="_blank" rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors">
              <Instagram size={32} />
            </a>
          </div>
        </section>
      </main>

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
  );
};

export default Index;
