import React, { useState, useEffect } from 'react';
import { getStockImage } from '../utils/imageUtils';

interface StockItemProps {
  code: string;
}

const StockItem: React.FC<StockItemProps> = ({ code }) => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  useEffect(() => {
    const fetchImageSrc = async () => {
      const src = await getStockImage(code);
      setImageSrc(src);
    };
    fetchImageSrc();
  }, [code]);

  const handleImageError = () => {
    // 이미지 로드 실패 시 기본 이미지로 대체
    setImageSrc('/assets/default-stock-image.png');
  };

  return (
    <div className="stock-item">
      <img 
        src={imageSrc || ''}  // Fallback to an empty string if imageSrc is null
        alt={`Stock image for ${code}`} 
        width="50" 
        height="50"
        onError={handleImageError}
      />
      <p>{code}</p>
    </div>
  );
};

export default StockItem;