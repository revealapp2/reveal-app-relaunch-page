
import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  onGetStarted: () => void;
}

const HeroSection = ({ onGetStarted }: HeroSectionProps) => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-gray-900 via-gray-800 to-transparent">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-800/20 to-blue-800/20" />
      <div className="container mx-auto px-4 py-20 relative">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
            Reveal App: Dominate PPPOKER and XPoker
          </h1>
          <p className="text-xl md:text-2xl text-gray-300">
            The ultimate tool for poker players. Elevate your strategy today!
          </p>
          <div className="flex justify-center gap-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-6 text-lg"
              onClick={onGetStarted}
            >
              Access Now
            </Button>
            <a
              href="https://t.me/Bedmalcon_temp"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-6 text-lg bg-white/10 hover:bg-white/20 text-white rounded-md transition-colors"
            >
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
