import React, { useState } from 'react';
import { Users, CheckCircle, Clock, AlertCircle } from 'lucide-react';
import OnboardingStages from './components/OnboardingStages';

const metrics = [
  {
    label: 'Active Clients',
    value: '24',
    change: '+3',
    icon: Users,
  },
  {
    label: 'On Track',
    value: '18',
    change: '75%',
    icon: CheckCircle,
  },
  {
    label: 'Delayed',
    value: '5',
    change: '21%',
    icon: Clock,
  },
  {
    label: 'Blocked',
    value: '1',
    change: '4%',
    icon: AlertCircle,
  },
];

const Onboarding = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-2xl font-bold text-white">Customer Onboarding</h2>
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

      <OnboardingStages />
    </div>
  );
};

export default Onboarding;