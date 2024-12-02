import React from 'react';
import { Building2 } from 'lucide-react';

interface Vertical {
  id: string;
  name: string;
  description: string;
  totalProspects: number;
  totalValue: number;
}

interface VerticalSelectorProps {
  verticals: Vertical[];
  selectedVertical: string;
  onSelect: (verticalId: string) => void;
}

const VerticalSelector: React.FC<VerticalSelectorProps> = ({
  verticals,
  selectedVertical,
  onSelect,
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
      <div
        className={`card cursor-pointer transition-all ${
          selectedVertical === 'all'
            ? 'ring-2 ring-white'
            : 'hover:ring-1 hover:ring-white/20'
        }`}
        onClick={() => onSelect('all')}
      >
        <div className="flex items-center gap-3">
          <div className="p-2 bg-dark-lighter rounded-lg">
            <Building2 className="h-5 w-5 text-white" />
          </div>
          <div>
            <h3 className="text-white font-medium">All Verticals</h3>
            <p className="text-sm text-gray-400">View all prospects</p>
          </div>
        </div>
      </div>
      
      {verticals.map((vertical) => (
        <div
          key={vertical.id}
          className={`card cursor-pointer transition-all ${
            selectedVertical === vertical.id
              ? 'ring-2 ring-white'
              : 'hover:ring-1 hover:ring-white/20'
          }`}
          onClick={() => onSelect(vertical.id)}
        >
          <div className="flex items-center gap-3">
            <div className="p-2 bg-dark-lighter rounded-lg">
              <Building2 className="h-5 w-5 text-white" />
            </div>
            <div>
              <h3 className="text-white font-medium">{vertical.name}</h3>
              <p className="text-sm text-gray-400">{vertical.description}</p>
            </div>
          </div>
          <div className="mt-3 grid grid-cols-2 gap-2 text-sm">
            <div>
              <p className="text-gray-400">Prospects</p>
              <p className="text-white font-medium">{vertical.totalProspects}</p>
            </div>
            <div>
              <p className="text-gray-400">Total Value</p>
              <p className="text-white font-medium">
                {new Intl.NumberFormat('en-US', {
                  style: 'currency',
                  currency: 'USD',
                  notation: 'compact',
                  maximumFractionDigits: 1,
                }).format(vertical.totalValue)}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VerticalSelector;