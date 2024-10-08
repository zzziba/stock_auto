import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import SettingsPage from './pages/SettingsPage';
import AccountPage from './pages/AccountPage';

const App: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="space-y-2.5">
        <Router>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/account" element={<AccountPage />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
};

export default App;
