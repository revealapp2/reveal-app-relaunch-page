
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Bitcoin, DollarSign, ArrowUp, Copy, ArrowLeft } from "lucide-react";
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
  const [showAddressScreen, setShowAddressScreen] = useState(false);
  const { t } = useLanguage();
  const [, copy] = useCopyToClipboard();

  const handleMethodSelect = (method: string) => {
    setSelectedMethod(method);
    onPaymentMethodSelect(method);
    setShowAddressScreen(true);
  };

  const handleCopyAddress = (address: string) => {
    copy(address);
    toast({
      title: "Address copied",
      description: "Payment address copied to clipboard",
      variant: "success",
    });
  };

  const handleBack = () => {
    setShowAddressScreen(false);
  };

  const cryptoMethods = [
    { id: 'btc', name: 'Bitcoin', icon: Bitcoin },
    { id: 'usdt', name: 'USDT', icon: ArrowUp },
    { id: 'eth', name: 'Ethereum', icon: DollarSign }
  ];

  const paymentAddresses = {
    btc: "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh",
    usdt: "0x3f5CE5FBFe3E9af3971dD833D26bA9b5C936f0bE",
    eth: "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045"
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-gray-900 text-white border-gray-800">
        {!showAddressScreen ? (
          <>
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
          </>
        ) : (
          <>
            <DialogHeader>
              <Button 
                variant="ghost" 
                size="sm" 
                className="absolute left-4 top-4 p-0 h-8 w-8 text-gray-400 hover:text-white"
                onClick={handleBack}
              >
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <DialogTitle className="text-center text-xl text-white">
                {selectedMethod === 'btc' ? 'Bitcoin' : selectedMethod === 'usdt' ? 'USDT' : 'Ethereum'} Payment
              </DialogTitle>
              <DialogDescription className="text-center text-gray-400 mt-2">
                Send payment to the address below
              </DialogDescription>
            </DialogHeader>
            
            <div className="mt-4 p-4 bg-gray-800 rounded-lg border border-gray-700">
              <div className="flex items-center">
                <div className="flex-1 overflow-hidden">
                  <p className="text-sm font-mono text-gray-300 truncate">
                    {paymentAddresses[selectedMethod as keyof typeof paymentAddresses]}
                  </p>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="ml-2 bg-gray-700 hover:bg-gray-600 border-gray-600"
                  onClick={() => handleCopyAddress(paymentAddresses[selectedMethod as keyof typeof paymentAddresses])}
                >
                  <Copy className="h-4 w-4 mr-1" />
                  Copy
                </Button>
              </div>
            </div>
            
            <div className="mt-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
              <p className="text-sm text-gray-300">
                After sending payment, please contact our support team with your transaction ID to activate your account.
              </p>
            </div>
            
            <Button 
              className="mt-4 bg-green-700 hover:bg-green-600 text-white"
              onClick={() => onOpenChange(false)}
            >
              Done
            </Button>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default PaymentDialog;
