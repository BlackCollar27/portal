import React from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import SalesScripts from './components/SalesScripts';
import ProductPipeline from './components/ProductPipeline';
import LeadsOverview from './components/LeadsOverview';

const CustomerAcquisition = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname.split('/').pop() || 'scripts';

  const handleTabChange = (tab: string) => {
    navigate(`/business-systems/customer-acquisition/${tab}`);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-2xl font-bold text-white">Customer Acquisition</h2>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => handleTabChange('scripts')}
            className={`px-4 py-2 rounded-lg ${
              currentPath === 'scripts'
                ? 'bg-white text-black'
                : 'bg-dark-lighter text-white hover:bg-dark-card'
            }`}
          >
            Sales Scripts
          </button>
          <button
            onClick={() => handleTabChange('pipeline')}
            className={`px-4 py-2 rounded-lg ${
              currentPath === 'pipeline'
                ? 'bg-white text-black'
                : 'bg-dark-lighter text-white hover:bg-dark-card'
            }`}
          >
            Product Pipeline
          </button>
          <button
            onClick={() => handleTabChange('leads')}
            className={`px-4 py-2 rounded-lg ${
              currentPath === 'leads'
                ? 'bg-white text-black'
                : 'bg-dark-lighter text-white hover:bg-dark-card'
            }`}
          >
            Leads
          </button>
        </div>
      </div>

      <Routes>
        <Route index element={<SalesScripts />} />
        <Route path="scripts" element={<SalesScripts />} />
        <Route path="pipeline" element={<ProductPipeline />} />
        <Route path="leads" element={<LeadsOverview />} />
      </Routes>
    </div>
  );
};

export default CustomerAcquisition;