import React, { useState } from 'react';
import { ClipboardList, BarChart, Users, Link as LinkIcon, Eye, Edit, Trash, Plus, Check } from 'lucide-react';

interface Survey {
  id: string;
  title: string;
  description: string;
  status: 'draft' | 'active' | 'completed';
  responses: number;
  completionRate: number;
  created: string;
  lastModified: string;
}

const SurveySection = () => {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [selectedSurvey, setSelectedSurvey] = useState<Survey | null>(null);

  const surveys: Survey[] = [
    {
      id: '1',
      title: 'Product Satisfaction Survey',
      description: 'Gathering feedback on user experience with our latest features',
      status: 'active',
      responses: 234,
      completionRate: 78,
      created: '2024-03-01',
      lastModified: '2024-03-15'
    },
    {
      id: '2',
      title: 'Customer Service Feedback',
      description: 'Evaluating support team performance and response times',
      status: 'completed',
      responses: 456,
      completionRate: 92,
      created: '2024-02-15',
      lastModified: '2024-03-10'
    },
    {
      id: '3',
      title: 'Feature Request Survey',
      description: 'Collecting user input on desired product features',
      status: 'draft',
      responses: 0,
      completionRate: 0,
      created: '2024-03-14',
      lastModified: '2024-03-14'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'text-green-400';
      case 'completed':
        return 'text-gray-400';
      case 'draft':
        return 'text-yellow-400';
      default:
        return 'text-gray-400';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <ClipboardList className="h-6 w-6 text-white" />
          <h3 className="text-lg font-medium text-white">Survey Management</h3>
        </div>
        <button
          onClick={() => setShowCreateModal(true)}
          className="flex items-center px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-200 transition-colors"
        >
          <Plus className="h-4 w-4 mr-2" />
          Create Survey
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {surveys.map((survey) => (
          <div key={survey.id} className="card hover:ring-1 hover:ring-white/20 transition-all">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h4 className="text-white font-medium">{survey.title}</h4>
                <p className="text-sm text-gray-400 mt-1">{survey.description}</p>
              </div>
              <span className={`text-sm font-medium capitalize ${getStatusColor(survey.status)}`}>
                {survey.status}
              </span>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-dark-lighter p-3 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-400">Responses</span>
                  </div>
                  <p className="text-lg font-medium text-white mt-1">{survey.responses}</p>
                </div>
                <div className="bg-dark-lighter p-3 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <BarChart className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-400">Completion</span>
                  </div>
                  <p className="text-lg font-medium text-white mt-1">{survey.completionRate}%</p>
                </div>
              </div>

              <div className="flex justify-between items-center pt-4 border-t border-dark-lighter">
                <div className="flex space-x-2">
                  <button className="p-2 hover:bg-dark-lighter rounded-lg" title="Edit">
                    <Edit className="h-4 w-4 text-gray-400" />
                  </button>
                  <button className="p-2 hover:bg-dark-lighter rounded-lg" title="Preview">
                    <Eye className="h-4 w-4 text-gray-400" />
                  </button>
                  <button className="p-2 hover:bg-dark-lighter rounded-lg" title="Copy Link">
                    <LinkIcon className="h-4 w-4 text-gray-400" />
                  </button>
                </div>
                <button className="p-2 hover:bg-dark-lighter rounded-lg text-red-400" title="Delete">
                  <Trash className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Survey Creation Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-dark-card rounded-xl p-6 max-w-md w-full">
            <h3 className="text-lg font-medium text-white mb-4">Create New Survey</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">
                  Survey Title
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg bg-dark-lighter border-none text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
                  placeholder="Enter survey title"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">
                  Description
                </label>
                <textarea
                  className="w-full px-4 py-2 rounded-lg bg-dark-lighter border-none text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
                  placeholder="Enter survey description"
                  rows={3}
                />
              </div>
              <div className="flex justify-end space-x-2 pt-4">
                <button
                  onClick={() => setShowCreateModal(false)}
                  className="px-4 py-2 rounded-lg bg-dark-lighter text-white hover:bg-dark-card"
                >
                  Cancel
                </button>
                <button
                  onClick={() => setShowCreateModal(false)}
                  className="px-4 py-2 rounded-lg bg-white text-black hover:bg-gray-200"
                >
                  Create Survey
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SurveySection;