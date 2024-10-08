import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { MdSettings } from 'react-icons/md'; // Material Design 설정 아이콘
import './Header.css'; // 스타일 파일이 있다고 가정

interface MarketInfo {
  name: string;
  value: number;
  change: number;
}

const Header: React.FC = () => {
  const [currentMarket, setCurrentMarket] = useState<MarketInfo | null>(null);
  const markets = useMemo(() => {
    return [
      { name: '코스피', value: 2800.93, change: -0.50 },
      { name: '코스닥', value: 900.20, change: 0.30 },
      // ... 다른 시장 정보 추가
    ];
  }, []); // 필요에 따라 의존성을 추가하세요

  useEffect(() => {
    let index = 0;
    
    // 최초 실행
    setCurrentMarket(markets[index]);

    const interval = setInterval(() => {
      index = (index + 1) % markets.length;
      setCurrentMarket(markets[index]);
    }, 5000);

    return () => clearInterval(interval);
  }, [markets]); // 이제 markets는 메모이제이션됨

  return (
    <header className="header">
      <div className="market-info" style={{ textAlign: 'left' }}>
        {currentMarket && (
          <span>
            {currentMarket.name} {' '}
            <span style={{ color: currentMarket.change > 0 ? 'green' : 'red' }}>
            {currentMarket.value.toFixed(2)} {' ('}
            {currentMarket.change > 0 ? '+' : ''}{currentMarket.change.toFixed(2)}%{')'}
            </span>
          </span>
        )}
      </div>
      <Link to="/settings" className="settings-button" aria-label="설정">
        <MdSettings size={24} />
      </Link>
    </header>
  );
};

export default Header;
