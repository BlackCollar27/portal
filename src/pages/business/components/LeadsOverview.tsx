import React, { useState } from 'react';
import { Users, Target, ArrowUpRight, BarChart2, Globe, Mail, Phone, MessageSquare } from 'lucide-react';

interface LeadSource {
  id: string;
  name: string;
  type: string;
  total: number;
  converted: number;
  trend: number;
  icon: React.ElementType;
}

interface LeadMetric {
  label: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
}

const leadSources: LeadSource[] = [
  {
    id: '1',
    name: 'Website Traffic',
    type: 'Organic',
    total: 1250,
    converted: 68,
    trend: 12.5,
    icon: Globe
  },
  {
    id: '2',
    name: 'Email Campaigns',
    type: 'Marketing',
    total: 850,
    converted: 42,
    trend: 8.3,
    icon: Mail
  },
  {
    id: '3',
    name: 'Cold Calling',
    type: 'Direct',
    total: 420,
    converted: 28,
    trend: -2.1,
    icon: Phone
  },
  {
    id: '4',
    name: 'Social Media',
    type: 'Social',
    total: 680,
    converted: 35,
    trend: 15.7,
    icon: MessageSquare
  }
];

const metrics: LeadMetric[] = [
  { label: 'Total Leads', value: '3,200', change: '+15.3%', trend: 'up' },
  { label: 'Conversion Rate', value: '8.2%', change: '+2.1%', trend: 'up' },
  { label: 'Avg. Response Time', value: '2.5h', change: '-18.2%', trend: 'down' },
  { label: 'Cost per Lead', value: '$42', change: '-8.4%', trend: 'down' }
];

const LeadsOverview = () => {
  const [selectedType, setSelectedType] = useState<string>('all');
  const leadTypes = ['all', 'Organic', 'Marketing', 'Direct', 'Social'];

  const filteredSources = selectedType === 'all' 
    ? leadSources 
    : leadSources.filter(source => source.type === selectedType);

  return (
    <div className="space-y-6">
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
          </div>
        ))}
      </div>

      <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-2">
        {leadTypes.map((type) => (
          <button
            key={type}
            onClick={() => setSelectedType(type)}
            className={`px-4 py-2 rounded-xl whitespace-nowrap ${
              selectedType === type
                ? 'bg-white text-black'
                : 'bg-dark-lighter text-white hover:bg-dark-card'
            }`}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredSources.map((source) => (
          <div key={source.id} className="card hover:ring-1 hover:ring-white/20 transition-all">
            <div className="flex items-start justify-between">
              <div className="flex items-center">
                <div className="p-2 bg-dark-lighter rounded-xl">
                  <source.icon className="h-5 w-5 text-white" />
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-white">{source.name}</h3>
                  <p className="text-sm text-gray-400">{source.type}</p>
                </div>
              </div>
              <div className={`flex items-center ${
                source.trend > 0 ? 'text-green-400' : 'text-red-400'
              }`}>
                <span className="text-sm font-medium">
                  {source.trend > 0 ? '+' : ''}{source.trend}%
                </span>
                <ArrowUpRight className={`h-4 w-4 ml-1 ${
                  source.trend < 0 ? 'transform rotate-90' : ''
                }`} />
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="bg-dark-lighter p-4 rounded-xl">
                <p className="text-sm text-gray-400">Total Leads</p>
                <p className="text-xl font-semibold text-white mt-1">{source.total}</p>
              </div>
              <div className="bg-dark-lighter p-4 rounded-xl">
                <p className="text-sm text-gray-400">Converted</p>
                <p className="text-xl font-semibold text-white mt-1">{source.converted}</p>
              </div>
            </div>

            <div className="mt-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-400">Conversion Rate</span>
                <span className="text-sm text-white">
                  {((source.converted / source.total) * 100).toFixed(1)}%
                </span>
              </div>
              <div className="h-2 bg-dark-lighter rounded-full">
                <div
                  className="h-2 bg-accent rounded-full"
                  style={{ width: `${(source.converted / source.total) * 100}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeadsOverview;