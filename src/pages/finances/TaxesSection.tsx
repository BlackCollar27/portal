import React from 'react';
import { Calculator, FileText, Calendar, ArrowUpRight } from 'lucide-react';

const quarterlyData = [
  {
    quarter: 'Q1 2024',
    taxLiability: 85000,
    change: -2.3,
    categories: [
      { name: 'Federal Tax', amount: 45000, rate: '21%' },
      { name: 'State Tax', amount: 25000, rate: '8.5%' },
      { name: 'Local Tax', amount: 15000, rate: '3.2%' }
    ],
    deadlines: [
      { name: 'Quarterly Payment', date: '2024-04-15', status: 'upcoming' },
      { name: 'State Filing', date: '2024-04-30', status: 'upcoming' }
    ]
  },
  {
    quarter: 'Q2 2024',
    taxLiability: 92000,
    change: -1.8,
    categories: [
      { name: 'Federal Tax', amount: 48000, rate: '21%' },
      { name: 'State Tax', amount: 27000, rate: '8.5%' },
      { name: 'Local Tax', amount: 17000, rate: '3.2%' }
    ],
    deadlines: [
      { name: 'Quarterly Payment', date: '2024-07-15', status: 'upcoming' },
      { name: 'State Filing', date: '2024-07-31', status: 'upcoming' }
    ]
  },
  {
    quarter: 'Q3 2024',
    taxLiability: 98000,
    change: -1.2,
    categories: [
      { name: 'Federal Tax', amount: 52000, rate: '21%' },
      { name: 'State Tax', amount: 28000, rate: '8.5%' },
      { name: 'Local Tax', amount: 18000, rate: '3.2%' }
    ],
    deadlines: [
      { name: 'Quarterly Payment', date: '2024-10-15', status: 'upcoming' },
      { name: 'State Filing', date: '2024-10-31', status: 'upcoming' }
    ]
  },
  {
    quarter: 'Q4 2024',
    taxLiability: 105000,
    change: -0.7,
    categories: [
      { name: 'Federal Tax', amount: 55000, rate: '21%' },
      { name: 'State Tax', amount: 30000, rate: '8.5%' },
      { name: 'Local Tax', amount: 20000, rate: '3.2%' }
    ],
    deadlines: [
      { name: 'Quarterly Payment', date: '2025-01-15', status: 'upcoming' },
      { name: 'Annual Filing', date: '2025-03-15', status: 'upcoming' }
    ]
  }
];

const TaxesSection = () => {
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
                    }).format(quarter.taxLiability)}
                  </p>
                  <span className="text-red-400 text-sm">{quarter.change}%</span>
                </div>
              </div>
              <Calculator className="h-6 w-6 text-white" />
            </div>

            <div className="space-y-4">
              {quarter.categories.map((category, categoryIndex) => (
                <div key={categoryIndex} className="bg-dark-lighter p-4 rounded-xl">
                  <div className="flex justify-between items-start mb-2">
                    <p className="text-white font-medium">{category.name}</p>
                    <span className="text-sm text-gray-400">{category.rate}</span>
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

              <div className="mt-6">
                <h4 className="text-white font-medium mb-3">Important Deadlines</h4>
                <div className="space-y-2">
                  {quarter.deadlines.map((deadline, deadlineIndex) => (
                    <div key={deadlineIndex} className="flex items-center justify-between bg-dark-lighter p-3 rounded-lg">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 text-gray-400 mr-2" />
                        <span className="text-white">{deadline.name}</span>
                      </div>
                      <span className="text-sm text-gray-400">
                        {new Date(deadline.date).toLocaleDateString()}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaxesSection;