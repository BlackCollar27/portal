import React from 'react';
import { DollarSign, TrendingDown, ArrowUpRight } from 'lucide-react';

const quarterlyData = [
  {
    quarter: 'Q1 2024',
    expenses: 420000,
    change: -8.3,
    categories: [
      { name: 'Operating Costs', amount: 180000, change: -5.2 },
      { name: 'Payroll', amount: 160000, change: -2.4 },
      { name: 'Marketing', amount: 80000, change: -12.1 }
    ]
  },
  {
    quarter: 'Q2 2024',
    expenses: 450000,
    change: -6.8,
    categories: [
      { name: 'Operating Costs', amount: 190000, change: -4.8 },
      { name: 'Payroll', amount: 170000, change: -3.2 },
      { name: 'Marketing', amount: 90000, change: -10.4 }
    ]
  },
  {
    quarter: 'Q3 2024',
    expenses: 480000,
    change: -5.2,
    categories: [
      { name: 'Operating Costs', amount: 200000, change: -4.4 },
      { name: 'Payroll', amount: 180000, change: -2.8 },
      { name: 'Marketing', amount: 100000, change: -9.2 }
    ]
  },
  {
    quarter: 'Q4 2024',
    expenses: 520000,
    change: -4.7,
    categories: [
      { name: 'Operating Costs', amount: 220000, change: -3.2 },
      { name: 'Payroll', amount: 190000, change: -2.6 },
      { name: 'Marketing', amount: 110000, change: -8.8 }
    ]
  }
];

const ExpensesSection = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {quarterlyData.map((quarter, index) => (
          <div key={index} className="card">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-lg font-medium text-white">{quarter.quarter}</h3>
                <div className="flex items-baseline gap-2 mt-1">
                  <p className="text-2xl font-semibold text-white">
                    {new Intl.NumberFormat('en-US', {
                      style: 'currency',
                      currency: 'USD',
                      notation: 'compact',
                      maximumFractionDigits: 1,
                    }).format(quarter.expenses)}
                  </p>
                  <span className="text-red-400 text-sm">{quarter.change}%</span>
                </div>
              </div>
              <TrendingDown className="h-6 w-6 text-red-400" />
            </div>

            <div className="space-y-4">
              {quarter.categories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="bg-dark-lighter p-4 rounded-xl">
                  <div className="flex justify-between items-start mb-2">
                    <p className="text-white font-medium">{category.name}</p>
                    <div className="flex items-center text-red-400">
                      <span className="text-sm">{category.change}%</span>
                      <ArrowUpRight className="h-4 w-4 ml-1 transform rotate-90" />
                    </div>
                  </div>
                  <p className="text-xl font-semibold text-white">
                    {new Intl.NumberFormat('en-US', {
                      style: 'currency',
                      currency: 'USD',
                      notation: 'compact',
                      maximumFractionDigits: 1,
                    }).format(category.amount)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpensesSection;