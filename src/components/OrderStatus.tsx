import React from 'react';
import { Link } from 'react-router-dom';

interface OrderStatusProps {
  pendingOrders: number;
  executedOrders: number;
  closedPositions: number;
}

const OrderStatus: React.FC<OrderStatusProps> = ({ pendingOrders, executedOrders, closedPositions }) => {
  return (
    <div className="order-status grid grid-cols-3 gap-4">
      <Link to="/pending-orders" className="bg-white rounded-lg shadow p-4">
        <h3 className="font-semibold">주문대기</h3>    
        <p>{pendingOrders}건</p>
      </Link>
      <Link to="/executed-orders" className="bg-white rounded-lg shadow p-4">
        <h3 className="font-semibold">체결내역</h3>
        <p>{executedOrders}건</p>
      </Link>
      <Link to="/closed-positions" className="bg-white rounded-lg shadow p-4">
        <h3 className="font-semibold">청산내역</h3>
        <p>{closedPositions}건</p>
      </Link>
    </div>
  );
};

export default OrderStatus;
