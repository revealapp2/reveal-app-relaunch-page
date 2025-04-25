
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Copy, Bitcoin, Ethereum } from "lucide-react";
import { useCopyToClipboard } from '@/hooks/use-clipboard';
import { toast } from '@/hooks/use-toast';
import { useLanguage } from '@/contexts/LanguageContext';

interface PaymentDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  platform: string;
  onPaymentMethodSelect: (method: string) => void;
}

const PaymentDialog = ({ open, onOpenChange, platform, onPaymentMethodSelect }: PaymentDialogProps) => {
  const [selectedMethod, setSelectedMethod] = useState('');
  const [, copy] = useCopyToClipboard();
  const { t } = useLanguage();

  const handleMethodSelect = (method: string) => {
    setSelectedMethod(method);
    onPaymentMethodSelect(method);
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

  const handleCopy = () => {
    copy(getWalletAddress());
    toast({
      title: t('copied'),
      description: '',
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-gray-900 text-white border-gray-800">
        <DialogHeader>
          <DialogTitle className="text-center text-xl">
            {selectedMethod ? `${t('paymentTitle')} ${selectedMethod.toUpperCase()}` : t('selectPayment')}
          </DialogTitle>
        </DialogHeader>
        
        {!selectedMethod ? (
          <div className="grid grid-cols-3 gap-4 mt-4">
            <Button
              variant="outline"
              className="flex flex-col items-center p-6 hover:bg-gray-800 border-gray-700"
              onClick={() => handleMethodSelect('btc')}
            >
              <Bitcoin className="h-8 w-8 mb-2 text-orange-500" />
              <span>BTC</span>
            </Button>
            <Button
              variant="outline"
              className="flex flex-col items-center p-6 hover:bg-gray-800 border-gray-700"
              onClick={() => handleMethodSelect('eth')}
            >
              <Ethereum className="h-8 w-8 mb-2 text-blue-500" />
              <span>ETH</span>
            </Button>
            <Button
              variant="outline"
              className="flex flex-col items-center p-6 hover:bg-gray-800 border-gray-700"
              onClick={() => handleMethodSelect('usdt')}
            >
              <span className="text-2xl mb-2 text-green-500">₮</span>
              <span>USDT</span>
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            <p className="text-center font-semibold">{t('amount')}</p>
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
                onClick={handleCopy}
              >
                <Copy className="mr-1" size={16} />
                {t('copyAddress')}
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default PaymentDialog;
