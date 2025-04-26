
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Bitcoin, DollarSign, ArrowUp } from "lucide-react";
import { useCopyToClipboard } from '@/hooks/use-clipboard';
import { toast } from '@/hooks/use-toast';
import { useLanguage } from '@/contexts/LanguageContext';

interface PaymentDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  platform: string;
  onPaymentMethodSelect: (method: string) => void;
}

const PaymentDialog = ({ 
  open, 
  onOpenChange, 
  platform, 
  onPaymentMethodSelect 
}: PaymentDialogProps) => {
  const [selectedMethod, setSelectedMethod] = useState('');
  const { t } = useLanguage();
  const [, copy] = useCopyToClipboard();

  const handleMethodSelect = (method: string) => {
    setSelectedMethod(method);
    onPaymentMethodSelect(method);
    onOpenChange(false);
  };

  const cryptoMethods = [
    { id: 'btc', name: 'Bitcoin', icon: Bitcoin },
    { id: 'usdt', name: 'USDT', icon: ArrowUp },
    { id: 'eth', name: 'Ethereum', icon: DollarSign }
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-gray-900 text-white border-gray-800">
        <DialogHeader>
          <DialogTitle className="text-center text-xl text-white">
            {t('selectPaymentMethod')}
          </DialogTitle>
        </DialogHeader>
        
        <div className="grid grid-cols-3 gap-4 mt-4">
          {cryptoMethods.map((method) => (
            <Button
              key={method.id}
              variant="outline"
              className="flex flex-col items-center p-6 bg-gray-800 text-white hover:bg-gray-700 border-gray-700 hover:border-green-500 transition-all"
              onClick={() => handleMethodSelect(method.id)}
            >
              <div className="rounded-full bg-green-900/30 p-3 mb-3">
                <method.icon className="h-8 w-8 text-green-500" />
              </div>
              <span className="font-medium">{method.name}</span>
            </Button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PaymentDialog;
