
import React, { createContext, useContext, useState } from 'react';

interface Translations {
  [key: string]: {
    [key: string]: string;
  };
}

const translations: Translations = {
  en: {
    selectPlatform: "Select Your Platform",
    choosePlatform: "Choose the platform where you want to use our application",
    android: "Android",
    ios: "iOS",
    androidVersion: "Version 7.0 or higher",
    iosVersion: "Version 12 or higher",
    paymentTitle: "Pay with",
    selectPayment: "Select Payment Method",
    copyAddress: "Copy",
    copied: "Copied!",
    amount: "Amount: $1500 USD",
    ourStory: "Our Story: How We Revolutionized Poker",
    storyText: "It all started with a series of unexpected losses, triggering a quest to discover hidden vulnerabilities in popular poker apps like PPPOKER and XPoker. Through months of rigorous research, we revealed critical flaws that were being exploited.",
    revolutionText: "This isn't just a tool—it's a revolution. Players worldwide are gaining a strategic advantage, and now it's your time to transform your game.",
    readyToMaster: "Ready to Master?",
    transformText: "Transform your poker game today with unparalleled insights into your opponents' strategies.",
    getAppNow: "Get the App Now",
    contactUs: "Contact Us",
    footer: "© 2025 Reveal App for Poker. Your mission is our success.",
    access: "Access Now",
    contactSupport: "Contact Support",
  },
  pt: {
    selectPlatform: "Selecione Sua Plataforma",
    choosePlatform: "Escolha a plataforma em que você deseja utilizar nosso aplicativo",
    android: "Android",
    ios: "iOS",
    androidVersion: "Versão 7.0 ou superior",
    iosVersion: "Versão 12 ou superior",
    paymentTitle: "Pagar com",
    selectPayment: "Selecione o Método de Pagamento",
    copyAddress: "Copiar",
    copied: "Copiado!",
    amount: "Valor: $1500 USD",
    ourStory: "Nossa História: Como Revolucionamos o Poker",
    storyText: "Tudo começou com uma série de derrotas inesperadas, desencadeando uma busca para descobrir vulnerabilidades ocultas em aplicativos populares de poker como PPPOKER e XPoker. Através de meses de pesquisa rigorosa, revelamos falhas críticas que estavam sendo exploradas.",
    revolutionText: "Esta não é apenas uma ferramenta—é uma revolução. Jogadores em todo o mundo estão obtendo uma vantagem estratégica, e agora é sua vez de transformar seu jogo.",
    readyToMaster: "Pronto para Dominar?",
    transformText: "Transforme seu jogo de poker hoje com percepções incomparáveis sobre as estratégias dos seus oponentes.",
    getAppNow: "Obtenha o App Agora",
    contactUs: "Contate-nos",
    footer: "© 2025 Reveal App for Poker. Sua missão é nosso sucesso.",
    access: "Acessar Agora",
    contactSupport: "Suporte",
  },
};

interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
