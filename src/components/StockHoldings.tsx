import React, { useEffect, useState } from 'react';
import { getStockImage } from '../utils/imageUtils';

interface Stock {
  code: string; // 종목 코드 추가
  name: string;
  targetProfit: number;
  currentPrice: number;
  profitLoss: number;
  profitLossRate: number;
}

interface StockHoldingsProps {
  domestic: Stock[];
  foreign: Stock[];
}

const StockCard: React.FC<{ stock: Stock }> = ({ stock }) => {
  const [icon, setIcon] = useState<string | undefined>(undefined);

  useEffect(() => {
    const fetchImage = async () => {
      const imagePath = await getStockImage(stock.code);
      setIcon(imagePath);
    };

    fetchImage();
  }, [stock.code]);

  return (
    <div className="flex items-center p-2 bg-transparent rounded-lg mb-2">
      <img src={icon} alt={stock.name} className="w-10 h-10 mr-3" />
      <div className="flex-grow">
        <p className="font-semibold">{stock.name}</p>
        <p>목표까지: {stock.targetProfit.toLocaleString()}원</p>
      </div>
      <div className="text-right">
        <p>{stock.currentPrice.toLocaleString()}원</p>
        <p className={stock.profitLoss >= 0 ? 'text-green-500' : 'text-red-500'}>
          {stock.profitLoss.toLocaleString()}원 ({stock.profitLossRate.toFixed(2)}%)
        </p>
      </div>
    </div>
  );
};

const StockHoldings: React.FC<StockHoldingsProps> = ({ domestic, foreign }) => {
  return (
    <div className="stock-holdings">
      <h2 className="text-lg font-bold mb-2">보유주식</h2>
      <div className="mb-4">
        <h3 className="text-md font-semibold mb-2">국내</h3>
        {domestic.map((stock, index) => (
          <StockCard key={index} stock={stock} />
        ))}
      </div>
      <div>
        <h3 className="text-md font-semibold mb-2">해외</h3>
        {foreign.map((stock, index) => (
          <StockCard key={index} stock={stock} />
        ))}
      </div>
    </div>
  );
};

export default StockHoldings;
