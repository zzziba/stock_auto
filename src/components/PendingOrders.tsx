import React, { useEffect, useState } from 'react';
import { getStockImage } from '../utils/imageUtils';

interface PendingOrder {
  code: string; // 종목 코드 추가
  name: string;
  score: number;
  targetProfitRate: number;
  currentPrice: number;
  profitLoss: number;
  profitLossRate: number;
}

interface PendingOrdersProps {
  orders: PendingOrder[];
}

const PendingOrderCard: React.FC<{ order: PendingOrder }> = ({ order }) => {
  const [icon, setIcon] = useState<string | undefined>(undefined);

  useEffect(() => {
    const fetchImage = async () => {
      const imagePath = await getStockImage(order.code);
      setIcon(imagePath);
    };

    fetchImage();
  }, [order.code]);

  return (
    <div className="flex items-center p-2 bg-transparent rounded-lg mb-2">
      <img src={icon} alt={order.name} className="w-10 h-10 mr-3" />
      <div className="flex-grow flex"> {/* {{ edit_1 }}: 'flex' 클래스를 추가하여 가로 정렬 */}
        <div className="mr-4 w-1/3"> {/* {{ edit_2 }}: 고정된 너비 추가 */}
          <p className="font-semibold">{order.name}</p>
        </div>
        <div className="mr-4 w-1/3"> {/* {{ edit_3 }}: 고정된 너비 추가 */}
          <p>{order.score}점</p>
        </div>
        <div className="w-1/3"> {/* {{ edit_4 }}: 고정된 너비 추가 */}
          <p>{order.targetProfitRate}%</p>
        </div>
      </div>
      <div className="text-right">
        <p>{order.currentPrice.toLocaleString()}원</p>
        <p className={order.profitLoss >= 0 ? 'text-green-500' : 'text-red-500'}>
          {order.profitLoss.toLocaleString()}원 ({order.profitLossRate.toFixed(2)}%)
        </p>
      </div>
    </div>
  );
};

const PendingOrders: React.FC<PendingOrdersProps> = ({ orders }) => {
  return (
    <div className="pending-orders">
      <h2 className="text-lg font-bold mb-2">주문대기 종목</h2>
      {orders.map((order, index) => (
        <PendingOrderCard key={index} order={order} />
      ))}
    </div>
  );
};

export default PendingOrders;
