import React from 'react';
import { Brain, Users, Cpu, Database, Target, TrendingUp, UserPlus, Package } from 'lucide-react';

const stats = [
  { name: 'Active AI Models', value: '156', icon: Brain, change: '+12%', changeType: 'increase' },
  { name: 'Customer Acquisition', value: '2.4K', icon: UserPlus, change: '+24%', changeType: 'increase' },
  { name: 'System Performance', value: '89%', icon: Cpu, change: '-2%', changeType: 'decrease' },
  { name: 'Fulfillment Rate', value: '98%', icon: Package, change: '+3%', changeType: 'increase' },
];

const departments = [
  {
    name: 'Social Proof System',
    description: 'Customer testimonials and social validation metrics',
    progress: 92,
  },
  {
    name: 'Customer Acquisition',
    description: 'Lead generation and conversion optimization',
    progress: 78,
  },
  {
    name: 'Onboarding Experience',
    description: 'Customer onboarding and system integration',
    progress: 85,
  },
  {
    name: 'Back-End Fulfillment',
    description: 'Order processing and delivery systems',
    progress: 95,
  },
];

const businessMetrics = [
  {
    category: 'Growth Strategy',
    metrics: [
      { name: 'Customer Retention', value: '94%', trend: '+2.3%' },
      { name: 'Revenue Growth', value: '$2.4M', trend: '+18%' },
      { name: 'Market Expansion', value: '3 Regions', trend: '+1' }
    ]
  },
  {
    category: 'System Performance',
    metrics: [
      { name: 'Response Time', value: '124ms', trend: '-12ms' },
      { name: 'Uptime', value: '99.99%', trend: '+0.01%' },
      { name: 'Error Rate', value: '0.02%', trend: '-0.01%' }
    ]
  }
];

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item, index) => (
          <div key={index} className="stat-card">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <item.icon className="h-8 w-8 text-accent" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-400">{item.name}</p>
                <div className="flex items-baseline">
                  <p className="text-2xl font-semibold text-white">{item.value}</p>
                  <span className={`ml-2 text-sm font-medium ${
                    item.changeType === 'increase' ? 'text-green-400' : 'text-red-400'
                  }`}>
                    {item.change}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card">
          <div className="px-6 py-5 border-b border-dark-lighter">
            <h3 className="text-lg font-medium text-white">Business Systems</h3>
          </div>
          <div className="divide-y divide-dark-lighter">
            {departments.map((dept, index) => (
              <div key={index} className="px-6 py-5">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-medium text-white">{dept.name}</h4>
                    <p className="mt-1 text-sm text-gray-400">{dept.description}</p>
                  </div>
                  <div className="ml-6">
                    <div className="flex items-center">
                      <span className="text-sm font-medium text-accent">{dept.progress}%</span>
                      <div className="ml-4 w-48 h-2 bg-dark-lighter rounded-full">
                        <div
                          className="h-2 bg-accent rounded-full"
                          style={{ width: `${dept.progress}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <div className="px-6 py-5 border-b border-dark-lighter">
            <h3 className="text-lg font-medium text-white">Business Metrics</h3>
          </div>
          <div className="divide-y divide-dark-lighter">
            {businessMetrics.map((section, index) => (
              <div key={index} className="px-6 py-5">
                <h4 className="text-sm font-medium text-white mb-4">{section.category}</h4>
                <div className="grid grid-cols-3 gap-4">
                  {section.metrics.map((metric, mIndex) => (
                    <div key={mIndex} className="text-center">
                      <p className="text-sm text-gray-400">{metric.name}</p>
                      <p className="text-lg font-semibold text-white">{metric.value}</p>
                      <span className={`text-sm ${
                        metric.trend.startsWith('+') ? 'text-green-400' : 'text-red-400'
                      }`}>
                        {metric.trend}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;