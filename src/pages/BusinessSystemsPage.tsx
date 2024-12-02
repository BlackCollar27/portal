import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Users, Target, Workflow, Package } from 'lucide-react';
import SocialProof from './business/SocialProof';
import CustomerAcquisition from './business/CustomerAcquisition';
import Onboarding from './business/Onboarding';
import Fulfillment from './business/Fulfillment';

const BusinessOverview = () => (
  <div className="space-y-6">
    <h2 className="text-2xl font-bold text-white mb-6">Business Systems Overview</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="card">
        <div className="flex items-center mb-4">
          <Users className="h-8 w-8 text-white mr-3" />
          <h3 className="text-lg font-medium text-white">Social Proof</h3>
        </div>
        <p className="text-gray-400">Active testimonials: 1,234</p>
        <p className="text-gray-400">Engagement rate: 76%</p>
      </div>
      <div className="card">
        <div className="flex items-center mb-4">
          <Target className="h-8 w-8 text-white mr-3" />
          <h3 className="text-lg font-medium text-white">Customer Acquisition</h3>
        </div>
        <p className="text-gray-400">New leads: 342</p>
        <p className="text-gray-400">Conversion rate: 12.4%</p>
      </div>
      <div className="card">
        <div className="flex items-center mb-4">
          <Package className="h-8 w-8 text-white mr-3" />
          <h3 className="text-lg font-medium text-white">Fulfillment</h3>
        </div>
        <p className="text-gray-400">Orders processed: 892</p>
        <p className="text-gray-400">Success rate: 99.9%</p>
      </div>
    </div>
  </div>
);

const BusinessSystemsPage = () => {
  return (
    <Routes>
      <Route index element={<BusinessOverview />} />
      <Route path="social-proof/*" element={<SocialProof />} />
      <Route path="customer-acquisition/*" element={<CustomerAcquisition />} />
      <Route path="onboarding/*" element={<Onboarding />} />
      <Route path="fulfillment/*" element={<Fulfillment />} />
    </Routes>
  );
};

export default BusinessSystemsPage;