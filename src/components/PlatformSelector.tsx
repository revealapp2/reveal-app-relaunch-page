
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Smartphone } from "lucide-react";

interface PlatformSelectorProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSelect: (platform: string) => void;
}

const PlatformSelector = ({ open, onOpenChange, onSelect }: PlatformSelectorProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-gray-900 text-white border-gray-800">
        <DialogHeader>
          <DialogTitle className="text-center text-xl">Selecione Sua Plataforma</DialogTitle>
          <DialogDescription className="text-center text-gray-400">
            Escolha a plataforma em que você deseja utilizar nosso aplicativo
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
            <span className="font-medium">Android</span>
            <span className="text-xs text-gray-400 mt-1">Versão 7.0 ou superior</span>
          </Button>
          <Button
            variant="outline"
            className="flex flex-col items-center p-6 hover:bg-gray-800 border-gray-700 hover:border-blue-500 transition-all"
            onClick={() => onSelect('ios')}
          >
            <div className="rounded-full bg-blue-900/30 p-3 mb-3">
              <Smartphone className="h-8 w-8 text-blue-500" />
            </div>
            <span className="font-medium">iOS</span>
            <span className="text-xs text-gray-400 mt-1">Versão 12 ou superior</span>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PlatformSelector;
