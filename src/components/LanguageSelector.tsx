
import React from 'react';
import { Button } from "@/components/ui/button";
import { Languages } from "lucide-react";
import { useLanguage } from '@/contexts/LanguageContext';

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'pt' : 'en');
  };

  return (
    <Button
      variant="outline"
      onClick={toggleLanguage}
      className="fixed top-4 right-4 z-50 bg-gray-900 text-white border-gray-700 hover:bg-gray-800"
    >
      <Languages className="mr-2 h-4 w-4" />
      {language.toUpperCase()}
    </Button>
  );
};

export default LanguageSelector;
