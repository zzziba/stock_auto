import React from 'react';
import { Link } from 'react-router-dom'; // Link 컴포넌트 추가


interface Account {
  number: string;
  totalKRW: number;
  totalForeign: number;
}

interface AccountInfoProps {
  accounts: Account[];
}

const AccountInfo: React.FC<AccountInfoProps> = ({ accounts }) => {
  return (
    <Link to="/account">
      <div className="account-info space-y-2.5">
        <h2 className="text-lg font-bold">계좌정보</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {accounts.map((account) => (
            <div key={account.number} className="bg-white rounded-lg shadow p-4">
              <p className="font-semibold mb-2">{account.number}</p>
              <div className="flex justify-between">
                <p>￦{account.totalKRW.toLocaleString()}</p>
                <p>${account.totalForeign.toLocaleString()}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default AccountInfo;