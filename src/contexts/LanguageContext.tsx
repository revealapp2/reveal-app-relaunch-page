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
  zh: {
    selectPlatform: "选择您的平台",
    choosePlatform: "选择您想要使用我们应用程序的平台",
    android: "安卓",
    ios: "苹果",
    androidVersion: "7.0 或更高版本",
    iosVersion: "12.0 或更高版本",
    paymentTitle: "使用以下方式支付",
    selectPayment: "选择支付方式",
    copyAddress: "复制",
    copied: "已复制！",
    amount: "金额：$1500 美元",
    ourStory: "我们的故事：我们如何革新扑克",
    storyText: "这一切都始于一系列意外的损失，促使我们去发现像 PPPOKER 和 XPoker 这样流行扑克应用程序中的隐藏漏洞。通过数月的严格研究，我们发现了正在被利用的关键缺陷。",
    revolutionText: "这不仅仅是一个工具——这是一场革命。全球玩家正在获得战略优势，现在是您改变游戏的时候了。",
    readyToMaster: "准备掌握？",
    transformText: "今天就通过对对手策略的无与伦比的洞察来改变您的扑克游戏。",
    getAppNow: "立即获取应用",
    contactUs: "联系我们",
    footer: "© 2025 Reveal App for Poker。您的使命就是我们的成功。",
    access: "立即访问",
    contactSupport: "联系支持",
  },
  vi: {
    selectPlatform: "Chọn Nền Tảng",
    choosePlatform: "Chọn nền tảng bạn muốn sử dụng ứng dụng của chúng tôi",
    android: "Android",
    ios: "iOS",
    androidVersion: "Phiên bản 7.0 trở lên",
    iosVersion: "Phiên bản 12 trở lên",
    paymentTitle: "Thanh toán bằng",
    selectPayment: "Chọn Phương Thức Thanh Toán",
    copyAddress: "Sao chép",
    copied: "Đã sao chép!",
    amount: "Số tiền: $1500 USD",
    ourStory: "Câu Chuyện: Cách Chúng Tôi Cách Mạng Hóa Poker",
    storyText: "Tất cả bắt đầu với một loạt thất bại bất ngờ, kích thích cuộc tìm kiếm để khám phá các lỗ hổng ẩn trong các ứng dụng poker phổ biến như PPPOKER và XPoker. Qua nhiều tháng nghiên cứu nghiêm túc, chúng tôi đã phát hiện ra các lỗ hổng quan trọng đang bị khai thác.",
    revolutionText: "Đây không chỉ là một công cụ—đây là một cuộc cách mạng. Người chơi trên toàn thế giới đang có được lợi thế chiến lược, và bây giờ là lúc để bạn thay đổi trò chơi của mình.",
    readyToMaster: "Sẵn Sàng Để Thành Thạo?",
    transformText: "Thay đổi trò chơi poker của bạn ngay hôm nay với những hiểu biết sâu sắc về chiến lược của đối thủ.",
    getAppNow: "Tải Ứng Dụng Ngay",
    contactUs: "Liên Hệ",
    footer: "© 2025 Reveal App for Poker. Sứ mệnh của bạn là thành công của chúng tôi.",
    access: "Truy Cập Ngay",
    contactSupport: "Liên Hệ Hỗ Trợ",
  },
  ru: {
    selectPlatform: "Выберите Платформу",
    choosePlatform: "Выберите платформу, на которой вы хотите использовать наше приложение",
    android: "Android",
    ios: "iOS",
    androidVersion: "Версия 7.0 или выше",
    iosVersion: "Версия 12 или выше",
    paymentTitle: "Оплата через",
    selectPayment: "Выберите Способ Оплаты",
    copyAddress: "Копировать",
    copied: "Скопировано!",
    amount: "Сумма: $1500 USD",
    ourStory: "Наша История: Как Мы Революционизировали Покер",
    storyText: "Всё началось с серии н��ожиданных поражений, что привело к поиску скрытых уязвимостей в популярных покерных приложениях, таких как PPPOKER и XPoker. После месяцев тщательных исследований мы обнаружили критические недостатки, которые использовались.",
    revolutionText: "Это не просто инструмент — это революция. Игроки по всему миру получают стратегическое преимущество, и теперь ваша очередь изменить свою игру.",
    readyToMaster: "Готовы Стать Мастером?",
    transformText: "Преобразите свою игру в покер сегодня с непревзойденным пониманием стратегий ваших оппонентов.",
    getAppNow: "Получить Приложение",
    contactUs: "Связаться с Нами",
    footer: "© 2025 Reveal App for Poker. Ваша миссия - наш успех.",
    access: "Получить Доступ",
    contactSupport: "Служба Поддержки",
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
