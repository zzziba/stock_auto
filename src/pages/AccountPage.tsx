import React from 'react';
import './AccountPage.css'; // 스타일을 위한 CSS 파일

const AccountPage: React.FC = () => {
  return (
    <div className="account-page">
      <div className="header">
        <h1>44,696,313원</h1>
        <p>지난주보다 -1,156,355원 (-2.5%)</p>
        <p>2024.10.04</p>
      </div>
      <div className="chart">
        {/* 차트 컴포넌트 추가 */}
      </div>
      <div className="summary">
        <div className="summary-item">
          <h2>주문 가능 금액</h2>
          <p>32,720원</p>
        </div>
        <div className="summary-item">
          <h2>원화</h2>
          <p>32,613원</p>
        </div>
        <div className="summary-item">
          <h2>달러</h2>
          <p>$0.08</p>
        </div>
      </div>
      <div className="investment">
        <h2>투자 중인 금액</h2>
        <p>44,663,593원 (-14.8%)</p>
        <div className="investment-details">
          <div>
            <h3>국내주식</h3>
            <p>383,075원 (-750원, -1.1%)</p>
          </div>
          <div>
            <h3>해외주식</h3>
            <p>44,280,518원 ($32,885.64, -7,769,318원, -14.9%)</p>
          </div>
        </div>
      </div>
      <div className="monthly-summary">
        <h2>10월 수익</h2>
        <p>+2,696,811원</p>
        <p>판매수익 : 0원</p>
        <p>배당금 : 2,696,800원 예상</p>
        <p>기타 11월 예상</p>
      </div>
    </div>
  );
};

export default AccountPage;
