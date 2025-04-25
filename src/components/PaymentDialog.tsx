
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Bitcoin, Eth } from "lucide-react";
import { useCopyToClipboard } from '@/hooks/use-clipboard';

interface PaymentDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  platform: string;
  onPaymentMethodSelect: (method: string) => void;
}

const PaymentDialog = ({ open, onOpenChange, platform, onPaymentMethodSelect }: PaymentDialogProps) => {
  const [showQR, setShowQR] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState('');
  const [, copy] = useCopyToClipboard();

  const handleMethodSelect = (method: string) => {
    setSelectedMethod(method);
    onPaymentMethodSelect(method);
    setShowQR(true);
  };

  const getWalletAddress = () => {
    switch (selectedMethod) {
      case 'btc':
        return 'bc1qd0l9j7llwxj875e43u8rycnjwvswk6lm4m3p5g';
      case 'eth':
        return '0x1f930a8BBB1A3F54EEc89cFb87f6789a21fB6484';
      case 'usdt':
        return 'TVwNs33BS7KrqvWAU7vkKRgvRZWPAPdtqC';
      default:
        return '';
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-gray-900 text-white border-gray-800">
        <DialogHeader>
          <DialogTitle className="text-center text-xl">
            {showQR ? `Pay with ${selectedMethod.toUpperCase()}` : 'Select Payment Method'}
          </DialogTitle>
        </DialogHeader>
        
        {!showQR ? (
          <div className="grid grid-cols-3 gap-4 mt-4">
            {['btc', 'eth', 'usdt'].map((method) => (
              <Button
                key={method}
                variant="outline"
                className="flex flex-col items-center p-6 hover:bg-gray-800 border-gray-700"
                onClick={() => handleMethodSelect(method)}
              >
                {method === 'btc' && <Bitcoin className="h-8 w-8 mb-2" />}
                {method === 'eth' && <Eth className="h-8 w-8 mb-2" />}
                {method === 'usdt' && <span className="text-2xl mb-2">₮</span>}
                <span>{method.toUpperCase()}</span>
              </Button>
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            <p className="text-center font-semibold">Amount: $1500 USD</p>
            <div className="flex justify-center">
              <img 
                src={`/${selectedMethod}-qr.png`}
                alt="Payment QR Code"
                className="w-64 h-64 bg-white p-2 rounded-lg"
              />
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                value={getWalletAddress()}
                readOnly
                className="flex-1 bg-gray-800 border border-gray-700 rounded px-3 py-2 text-sm"
              />
              <Button
                variant="outline"
                className="border-gray-700"
                onClick={() => copy(getWalletAddress())}
              >
                Copy
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default PaymentDialog;
