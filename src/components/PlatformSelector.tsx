import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
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
          <DialogTitle className="text-center text-xl">Select Your Platform</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <Button
            variant="outline"
            className="flex flex-col items-center p-6 hover:bg-gray-800 border-gray-700"
            onClick={() => onSelect('android')}
          >
            <Smartphone className="h-8 w-8 mb-2" />
            <span>Android</span>
          </Button>
          <Button
            variant="outline"
            className="flex flex-col items-center p-6 hover:bg-gray-800 border-gray-700"
            onClick={() => onSelect('ios')}
          >
            <Smartphone className="h-8 w-8 mb-2" />
            <span>iOS</span>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PlatformSelector;
