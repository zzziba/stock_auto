import React from 'react';
import StockItem from '../components/StockItem';

const StockList: React.FC = () => {
  const stocks = ['KR_005930', 'US_AAPL', 'KR_035720', 'US_GOOGL'];

  return (
    <div className="stock-list">
      <h1>주식 목록</h1>
      {stocks.map(stock => (
        <StockItem key={stock} code={stock} />
      ))}
    </div>
  );
};

export default StockList;