export const getStockIcon = (code: string, isInternational: boolean): string => {
    const basePath = isInternational
      ? '../assets/images/stock-icons/international/'
      : '../assets/images/stock-icons/domestic/';
    
    try {
      return require(`${basePath}${code}.png`);
    } catch (err) {
      return require('../assets/images/stock-icons/default.png'); // 기본 이미지
    }
  };