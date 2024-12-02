import React from 'react';
import { Routes, Route, useNavigate, useLocation, Navigate } from 'react-router-dom';
import { DollarSign, TrendingUp, ArrowUpRight } from 'lucide-react';
import IncomeSection from './finances/IncomeSection';
import ExpensesSection from './finances/ExpensesSection';
import TaxesSection from './finances/TaxesSection';

const metrics = [
  {
    label: 'Company Valuation',
    value: '$4.2M',
    change: '+15.3%',
    trend: 'up',
    description: 'Current company valuation'
  },
  {
    label: 'MoM Growth',
    value: '18.2%',
    change: '+2.8%',
    trend: 'up',
    description: 'Month over month growth'
  },
  {
    label: 'Revenue Run Rate',
    value: '$2.8M',
    change: '+12.4%',
    trend: 'up',
    description: 'Annualized revenue'
  },
  {
    label: 'Burn Rate',
    value: '$85K',
    change: '-5.2%',
    trend: 'down',
    description: 'Monthly expenses'
  }
];

const BusinessFinancesPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname.split('/').pop() || 'income';

  const handleTabChange = (tab: string) => {
    navigate(`/finances/${tab}`);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-2xl font-bold text-white">Business Finances</h2>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => handleTabChange('income')}
            className={`px-4 py-2 rounded-lg ${
              currentPath === 'income'
                ? 'bg-white text-black'
                : 'bg-dark-lighter text-white hover:bg-dark-card'
            }`}
          >
            Income
          </button>
          <button
            onClick={() => handleTabChange('expenses')}
            className={`px-4 py-2 rounded-lg ${
              currentPath === 'expenses'
                ? 'bg-white text-black'
                : 'bg-dark-lighter text-white hover:bg-dark-card'
            }`}
          >
            Expenses
          </button>
          <button
            onClick={() => handleTabChange('taxes')}
            className={`px-4 py-2 rounded-lg ${
              currentPath === 'taxes'
                ? 'bg-white text-black'
                : 'bg-dark-lighter text-white hover:bg-dark-card'
            }`}
          >
            Taxes
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric, index) => (
          <div key={index} className="stat-card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">{metric.label}</p>
                <p className="text-2xl font-semibold text-white mt-1">{metric.value}</p>
              </div>
              <div className={`flex items-center ${
                metric.trend === 'up' ? 'text-green-400' : 'text-red-400'
              }`}>
                <span className="text-sm font-medium">{metric.change}</span>
                <ArrowUpRight className={`h-4 w-4 ml-1 ${
                  metric.trend === 'down' ? 'transform rotate-90' : ''
                }`} />
              </div>
            </div>
            <p className="text-sm text-gray-400 mt-2">{metric.description}</p>
          </div>
        ))}
      </div>

      <Routes>
        <Route index element={<Navigate to="income" replace />} />
        <Route path="income" element={<IncomeSection />} />
        <Route path="expenses" element={<ExpensesSection />} />
        <Route path="taxes" element={<TaxesSection />} />
      </Routes>
    </div>
  );
};

export default BusinessFinancesPage;