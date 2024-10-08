import React from 'react';
import Header from '../components/Header';
import AccountInfo from '../components/AccountInfo';
import ProfitLoss from '../components/ProfitLoss';
import StockHoldings from '../components/StockHoldings';
import OrderStatus from '../components/OrderStatus';
import PendingOrders from '../components/PendingOrders';


const MainPage: React.FC = () => {
  // 더미 데이터
  const accounts = [
    { number: '123-456-789', totalKRW: 10000000, totalForeign: 5000 },
    { number: '987-654-321', totalKRW: 20000000, totalForeign: 10000 },
  ];

  const profitLossData = {
    totalAmount: 30000000,
    profitLoss: 1500000,
    dailyData: [
      { date: '2023-05-01', value: 29000000 },
      { date: '2023-05-02', value: 29500000 },
      { date: '2023-05-03', value: 30000000 },
    ],
  };

  const stockHoldings = {
    domestic: [
      { code: '005930', name: '삼성전자', targetProfit: 100000, currentPrice: 60000, profitLoss: 5000, profitLossRate: 2.5 },
      { code: '000660', name: 'SK하이닉스', targetProfit: 80000, currentPrice: 70000, profitLoss: -2000, profitLossRate: -1.5 },
    ],
    foreign: [
      { code: 'AAPL', name: 'Apple', targetProfit: 200, currentPrice: 150, profitLoss: 10, profitLossRate: 3.0 },
      { code: 'GOOGL', name: 'Google', targetProfit: 300, currentPrice: 280, profitLoss: -5, profitLossRate: -0.8 },
    ],
  };

  const orderStatus = {
    pendingOrders: 3,
    executedOrders: 10,
    closedPositions: 5,
  };

  const pendingOrders = [
    { code: '066570', name: 'LG전자', score: 80, targetProfitRate: 10, currentPrice: 100000, profitLoss: 0, profitLossRate: 0 },
    { code: 'TSLA', name: 'Tesla', score: 75, targetProfitRate: 15, currentPrice: 700, profitLoss: 0, profitLossRate: 0 },
  ];

  return (
    <div className="main-page">
      <Header />
      <div className="container mx-auto px-4">
        <div style={{ marginTop: '15px' }}>
          <AccountInfo accounts={accounts} />
        </div>
        <div style={{ marginTop: '15px' }}>
          <ProfitLoss 
            totalAmount={profitLossData.totalAmount} 
            profitLoss={profitLossData.profitLoss} 
            dailyData={profitLossData.dailyData} 
          />
        </div>
        <div style={{ marginTop: '15px' }}>
          <StockHoldings domestic={stockHoldings.domestic} foreign={stockHoldings.foreign} />
        </div>
        <div style={{ marginTop: '15px' }}>
          <OrderStatus 
            pendingOrders={orderStatus.pendingOrders} 
            executedOrders={orderStatus.executedOrders} 
            closedPositions={orderStatus.closedPositions} 
          />
        </div>
        <div style={{ marginTop: '15px' }}>
          <PendingOrders orders={pendingOrders} />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
