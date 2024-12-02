import React, { useState } from 'react';
import { Package, Truck, Clock, AlertCircle } from 'lucide-react';
import FulfillmentStages from './components/FulfillmentStages';
import ManufacturersSection from './components/ManufacturersSection';

const metrics = [
  {
    label: 'Active Orders',
    value: '42',
    change: '+8',
    icon: Package,
  },
  {
    label: 'In Transit',
    value: '18',
    change: '43%',
    icon: Truck,
  },
  {
    label: 'Delayed',
    value: '3',
    change: '7%',
    icon: Clock,
  },
  {
    label: 'Issues',
    value: '1',
    change: '2%',
    icon: AlertCircle,
  },
];

const Fulfillment = () => {
  const [activeTab, setActiveTab] = useState('stages');

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-2xl font-bold text-white">Order Fulfillment</h2>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveTab('stages')}
            className={`px-4 py-2 rounded-lg ${
              activeTab === 'stages'
                ? 'bg-white text-black'
                : 'bg-dark-lighter text-white hover:bg-dark-card'
            }`}
          >
            Orders
          </button>
          <button
            onClick={() => setActiveTab('manufacturers')}
            className={`px-4 py-2 rounded-lg ${
              activeTab === 'manufacturers'
                ? 'bg-white text-black'
                : 'bg-dark-lighter text-white hover:bg-dark-card'
            }`}
          >
            Manufacturers
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((metric, index) => (
          <div key={index} className="stat-card">
            <div className="flex items-center">
              <div className="p-2 bg-dark-lighter rounded-xl">
                <metric.icon className="h-5 w-5 text-white" />
              </div>
              <div className="ml-3">
                <p className="text-sm text-gray-400">{metric.label}</p>
                <div className="flex items-baseline gap-2">
                  <p className="text-2xl font-semibold text-white">{metric.value}</p>
                  <span className="text-sm text-gray-400">{metric.change}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {activeTab === 'stages' && <FulfillmentStages />}
      {activeTab === 'manufacturers' && <ManufacturersSection />}
    </div>
  );
};

export default Fulfillment;