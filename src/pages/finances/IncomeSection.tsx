import React from 'react';
import { DollarSign, TrendingUp, ArrowUpRight } from 'lucide-react';

const quarterlyData = [
  {
    quarter: 'Q1 2024',
    revenue: 680000,
    growth: 15.3,
    sources: [
      { name: 'Product Sales', amount: 420000, growth: 18.2 },
      { name: 'Services', amount: 180000, growth: 12.4 },
      { name: 'Subscriptions', amount: 80000, growth: 22.1 }
    ]
  },
  {
    quarter: 'Q2 2024',
    revenue: 750000,
    growth: 12.8,
    sources: [
      { name: 'Product Sales', amount: 460000, growth: 15.8 },
      { name: 'Services', amount: 200000, growth: 10.2 },
      { name: 'Subscriptions', amount: 90000, growth: 18.4 }
    ]
  },
  {
    quarter: 'Q3 2024',
    revenue: 820000,
    growth: 14.2,
    sources: [
      { name: 'Product Sales', amount: 500000, growth: 16.4 },
      { name: 'Services', amount: 220000, growth: 11.8 },
      { name: 'Subscriptions', amount: 100000, growth: 20.2 }
    ]
  },
  {
    quarter: 'Q4 2024',
    revenue: 950000,
    growth: 16.7,
    sources: [
      { name: 'Product Sales', amount: 580000, growth: 19.2 },
      { name: 'Services', amount: 250000, growth: 13.6 },
      { name: 'Subscriptions', amount: 120000, growth: 23.8 }
    ]
  }
];

const IncomeSection = () => {
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
                    }).format(quarter.revenue)}
                  </p>
                  <span className="text-green-400 text-sm">+{quarter.growth}%</span>
                </div>
              </div>
              <TrendingUp className="h-6 w-6 text-green-400" />
            </div>

            <div className="space-y-4">
              {quarter.sources.map((source, sourceIndex) => (
                <div key={sourceIndex} className="bg-dark-lighter p-4 rounded-xl">
                  <div className="flex justify-between items-start mb-2">
                    <p className="text-white font-medium">{source.name}</p>
                    <div className="flex items-center text-green-400">
                      <span className="text-sm">+{source.growth}%</span>
                      <ArrowUpRight className="h-4 w-4 ml-1" />
                    </div>
                  </div>
                  <p className="text-xl font-semibold text-white">
                    {new Intl.NumberFormat('en-US', {
                      style: 'currency',
                      currency: 'USD',
                      notation: 'compact',
                      maximumFractionDigits: 1,
                    }).format(source.amount)}
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

export default IncomeSection;