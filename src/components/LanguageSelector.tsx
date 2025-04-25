
import React from 'react';
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import { useLanguage } from '@/contexts/LanguageContext';

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();

  const cycleLanguage = () => {
    const languages = ['en', 'pt', 'zh', 'vi', 'ru'];
    const currentIndex = languages.indexOf(language);
    const nextIndex = (currentIndex + 1) % languages.length;
    setLanguage(languages[nextIndex]);
  };

  const getLanguageDisplay = () => {
    switch (language) {
      case 'en': return 'EN';
      case 'pt': return 'PT';
      case 'zh': return '中文';
      case 'vi': return 'VI';
      case 'ru': return 'RU';
      default: return language.toUpperCase();
    }
  };

  return (
    <Button
      variant="outline"
      onClick={cycleLanguage}
      className="fixed top-4 right-4 z-50 bg-gray-900 text-white border-gray-700 hover:bg-gray-800"
    >
      <Globe className="mr-2 h-4 w-4" />
      {getLanguageDisplay()}
    </Button>
  );
};

export default LanguageSelector;
