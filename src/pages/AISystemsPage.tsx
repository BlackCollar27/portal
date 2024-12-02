import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Brain, Cpu, Network, MessageSquare } from 'lucide-react';

const AIOverview = () => (
  <div className="space-y-6">
    <h2 className="text-2xl font-bold text-white mb-6">AI Systems Overview</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="card">
        <div className="flex items-center mb-4">
          <Brain className="h-8 w-8 text-accent mr-3" />
          <h3 className="text-lg font-medium text-white">Machine Learning Models</h3>
        </div>
        <p className="text-gray-400">Active training sessions: 24</p>
        <p className="text-gray-400">Model accuracy: 94.3%</p>
      </div>
      <div className="card">
        <div className="flex items-center mb-4">
          <Network className="h-8 w-8 text-accent mr-3" />
          <h3 className="text-lg font-medium text-white">Neural Networks</h3>
        </div>
        <p className="text-gray-400">Active networks: 12</p>
        <p className="text-gray-400">Average performance: 91.7%</p>
      </div>
      <div className="card">
        <div className="flex items-center mb-4">
          <MessageSquare className="h-8 w-8 text-accent mr-3" />
          <h3 className="text-lg font-medium text-white">Natural Language</h3>
        </div>
        <p className="text-gray-400">Processing requests: 1.2K/s</p>
        <p className="text-gray-400">Response time: 42ms</p>
      </div>
    </div>
  </div>
);

const MachineLearning = () => (
  <div className="space-y-6">
    <h2 className="text-2xl font-bold text-white mb-6">Machine Learning Systems</h2>
    <div className="card">
      <h3 className="text-lg font-medium text-white mb-4">Active Models</h3>
      {/* Add content for Machine Learning page */}
    </div>
  </div>
);

const NeuralNetworks = () => (
  <div className="space-y-6">
    <h2 className="text-2xl font-bold text-white mb-6">Neural Networks</h2>
    <div className="card">
      <h3 className="text-lg font-medium text-white mb-4">Network Architecture</h3>
      {/* Add content for Neural Networks page */}
    </div>
  </div>
);

const NaturalLanguage = () => (
  <div className="space-y-6">
    <h2 className="text-2xl font-bold text-white mb-6">Natural Language Processing</h2>
    <div className="card">
      <h3 className="text-lg font-medium text-white mb-4">Language Models</h3>
      {/* Add content for Natural Language page */}
    </div>
  </div>
);

const AISystemsPage = () => {
  return (
    <Routes>
      <Route index element={<AIOverview />} />
      <Route path="machine-learning" element={<MachineLearning />} />
      <Route path="neural-networks" element={<NeuralNetworks />} />
      <Route path="natural-language" element={<NaturalLanguage />} />
    </Routes>
  );
};

export default AISystemsPage;