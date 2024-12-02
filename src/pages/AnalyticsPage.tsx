import React from 'react';
import { TrendingUp, Users, ShoppingCart, DollarSign } from 'lucide-react';

const AnalyticsPage = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white mb-6">Analytics Dashboard</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="stat-card">
          <div className="flex items-center">
            <TrendingUp className="h-8 w-8 text-accent" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-400">Revenue</p>
              <p className="text-2xl font-semibold text-white">$842.4K</p>
              <span className="text-sm text-green-400">+24.3%</span>
            </div>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="flex items-center">
            <Users className="h-8 w-8 text-accent" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-400">Users</p>
              <p className="text-2xl font-semibold text-white">8,642</p>
              <span className="text-sm text-green-400">+12.8%</span>
            </div>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="flex items-center">
            <ShoppingCart className="h-8 w-8 text-accent" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-400">Orders</p>
              <p className="text-2xl font-semibold text-white">1,234</p>
              <span className="text-sm text-green-400">+18.2%</span>
            </div>
          </div>
        </div>
        
        <div className="stat-card">
          <div className="flex items-center">
            <DollarSign className="h-8 w-8 text-accent" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-400">AOV</p>
              <p className="text-2xl font-semibold text-white">$682</p>
              <span className="text-sm text-green-400">+5.4%</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card">
          <h3 className="text-lg font-medium text-white mb-4">Revenue Overview</h3>
          <div className="h-64 flex items-center justify-center">
            <p className="text-gray-400">Revenue chart will be displayed here</p>
          </div>
        </div>

        <div className="card">
          <h3 className="text-lg font-medium text-white mb-4">User Activity</h3>
          <div className="h-64 flex items-center justify-center">
            <p className="text-gray-400">User activity chart will be displayed here</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage;