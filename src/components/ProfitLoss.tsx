import React, { useState, useRef } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ChartData, ChartOptions, ScatterDataPoint, BubbleDataPoint, TimeScale } from 'chart.js';
import 'chartjs-adapter-date-fns'; // date-fns 어댑터를 import
import { Line } from 'react-chartjs-2';
import './ProfitLoss.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale  // TimeScale을 여기에 추가
);

interface ProfitLossProps {
  totalAmount: number;
  profitLoss: number;
  dailyData: Array<{ date: string; value: number }>;
}

const ProfitLoss: React.FC<ProfitLossProps> = ({ totalAmount, profitLoss, dailyData }) => {
  const [currency, setCurrency] = useState<'KRW' | 'USD'>('KRW');
  const chartRef = useRef<ChartJS<"line", (number | ScatterDataPoint | BubbleDataPoint | null)[], unknown>>(null);

  const chartData: ChartData<'line'> = {
    labels: dailyData.map(d => d.date),
    datasets: [
      {
        // label 속성 제거
        data: dailyData.map(d => d.value),
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }
    ]
  };

  const options: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false // 범례 숨기기
      }
    },
    scales: {
      x: {
        type: 'time',
        time: {
          unit: 'day',
          displayFormats: {
            day: 'd' // 일(day)만 표시
          }
        }
      },
      y: {
        type: 'linear' as const,
      },
    },
  };

  return (
    <div className="profit-loss-container">
      
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">손익</h2>
        <select
          value={currency}
          onChange={(e) => setCurrency(e.target.value as 'KRW' | 'USD')}
          className="border rounded p-1"
        >
          <option value="KRW">원화</option>
          <option value="USD">외화</option>
        </select>
      </div>
      <div className="flex justify-between items-center mb-4">
        <div>
          <p className="text-xl font-bold">{totalAmount.toLocaleString()} {currency}</p>
          <p className={`text-lg ${profitLoss >= 0 ? 'text-green-500' : 'text-red-500'}`}>
            {profitLoss >= 0 ? '+' : '-'}{Math.abs(profitLoss).toLocaleString()} {currency}
          </p>
        </div>
        <div className="w-1/2 h-40">
          <Line 
            data={chartData as ChartData<"line", number[], string>}
            options={options}
            ref={chartRef}
          />
        </div>
      </div>
    </div>
  );
};

export default ProfitLoss;