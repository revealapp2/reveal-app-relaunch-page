
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Smartphone, Apple } from "lucide-react";
import { useLanguage } from '@/contexts/LanguageContext';
import { useState } from 'react';

interface PlatformSelectorProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSelect: (platform: string) => void;
}

const PlatformSelector = ({ open, onOpenChange, onSelect }: PlatformSelectorProps) => {
  const { t } = useLanguage();
  const [selectedGame, setSelectedGame] = useState<string | null>(null);

  const gameOptions = [
    { id: 'pppoker', name: 'PPPOKER' },
    { id: 'xpoker', name: 'X-POKER' },
    { id: 'clubgg', name: 'CLUBGG' }
  ];

  const handleGameSelect = (game: string) => {
    setSelectedGame(game);
  };

  const handleDevicePlatformSelect = (device: string) => {
    onSelect(`${selectedGame}-${device}`);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-gray-900 text-white border-gray-800">
        <DialogHeader>
          <DialogTitle className="text-center text-xl text-white">
            {selectedGame ? t('selectPlatform') : 'Select Game Platform'}
          </DialogTitle>
          <DialogDescription className="text-center text-gray-400">
            {selectedGame ? t('choosePlatform') : 'Choose your preferred game platform'}
          </DialogDescription>
        </DialogHeader>

        {!selectedGame ? (
          <div className="grid grid-cols-1 gap-4 mt-4">
            {gameOptions.map((game) => (
              <Button
                key={game.id}
                variant="outline"
                className="flex items-center justify-center p-6 bg-gray-800 text-white hover:bg-gray-700 border-gray-700 hover:border-green-500 transition-all"
                onClick={() => handleGameSelect(game.id)}
              >
                <span className="font-medium text-lg">{game.name}</span>
              </Button>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-4 mt-4">
            <Button
              variant="outline"
              className="flex flex-col items-center p-6 bg-gray-800 text-white hover:bg-gray-700 border-gray-700 hover:border-green-500 transition-all"
              onClick={() => handleDevicePlatformSelect('android')}
            >
              <div className="rounded-full bg-green-900/30 p-3 mb-3">
                <Smartphone className="h-8 w-8 text-green-500" />
              </div>
              <span className="font-medium">Android</span>
              <span className="text-xs text-gray-400 mt-1">{t('androidVersion')}</span>
            </Button>
            <Button
              variant="outline"
              className="flex flex-col items-center p-6 bg-gray-800 text-white hover:bg-gray-700 border-gray-700 hover:border-blue-500 transition-all"
              onClick={() => handleDevicePlatformSelect('ios')}
            >
              <div className="rounded-full bg-blue-900/30 p-3 mb-3">
                <Apple className="h-8 w-8 text-blue-500" />
              </div>
              <span className="font-medium">iOS</span>
              <span className="text-xs text-gray-400 mt-1">{t('iosVersion')}</span>
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default PlatformSelector;
