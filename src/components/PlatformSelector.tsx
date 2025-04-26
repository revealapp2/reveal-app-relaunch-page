
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Smartphone, Apple, Bitcoin, ChinaIcon, RussiaIcon, VietnamIcon } from "lucide-react";
import { useLanguage } from '@/contexts/LanguageContext';

interface PlatformSelectorProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSelect: (platform: string) => void;
}

const PlatformSelector = ({ open, onOpenChange, onSelect }: PlatformSelectorProps) => {
  const { t } = useLanguage();

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-gray-900 text-white border-gray-800">
        <DialogHeader>
          <DialogTitle className="text-center text-xl">{t('selectPlatform')}</DialogTitle>
          <DialogDescription className="text-center text-gray-400">
            {t('choosePlatform')}
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <Button
            variant="outline"
            className="flex flex-col items-center p-6 hover:bg-gray-800 border-gray-700 hover:border-green-500 transition-all"
            onClick={() => onSelect('android')}
          >
            <div className="rounded-full bg-green-900/30 p-3 mb-3">
              <Smartphone className="h-8 w-8 text-green-500" />
            </div>
            <span className="font-medium">{t('android')}</span>
            <span className="text-xs text-gray-400 mt-1">{t('androidVersion')}</span>
          </Button>
          <Button
            variant="outline"
            className="flex flex-col items-center p-6 hover:bg-gray-800 border-gray-700 hover:border-blue-500 transition-all"
            onClick={() => onSelect('ios')}
          >
            <div className="rounded-full bg-blue-900/30 p-3 mb-3">
              <Apple className="h-8 w-8 text-blue-500" />
            </div>
            <span className="font-medium">{t('ios')}</span>
            <span className="text-xs text-gray-400 mt-1">{t('iosVersion')}</span>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PlatformSelector;
