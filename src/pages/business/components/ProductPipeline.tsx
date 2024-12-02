import React, { useState } from 'react';
import { Search, Plus, Filter, Building2, DollarSign, Users, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import VerticalSelector from './VerticalSelector';

interface Prospect {
  id: string;
  companyName: string;
  vertical: string;
  stage: string;
  value: number;
  lastContact: string;
  nextAction: string;
}

const stages = [
  'Initial Contact',
  'Discovery',
  'Proposal',
  'Negotiation',
  'Contract Review',
  'Closing',
  'Won',
  'Lost'
];

const prospects: Prospect[] = [
  {
    id: '1',
    companyName: 'TechCorp Solutions',
    vertical: 'Enterprise Software',
    stage: 'Discovery',
    value: 150000,
    lastContact: '2024-03-15',
    nextAction: 'Follow-up call scheduled'
  },
  {
    id: '2',
    companyName: 'MediHealth Systems',
    vertical: 'Healthcare',
    stage: 'Proposal',
    value: 280000,
    lastContact: '2024-03-14',
    nextAction: 'Prepare detailed proposal'
  },
  {
    id: '3',
    companyName: 'EduTech Institute',
    vertical: 'Education',
    stage: 'Initial Contact',
    value: 95000,
    lastContact: '2024-03-16',
    nextAction: 'Schedule discovery call'
  },
  {
    id: '4',
    companyName: 'FinServe Global',
    vertical: 'Financial Services',
    stage: 'Negotiation',
    value: 420000,
    lastContact: '2024-03-15',
    nextAction: 'Review contract terms'
  },
  {
    id: '5',
    companyName: 'RetailPro Solutions',
    vertical: 'Retail',
    stage: 'Closing',
    value: 175000,
    lastContact: '2024-03-16',
    nextAction: 'Final contract review'
  }
];

const verticalData = [
  {
    id: 'enterprise',
    name: 'Enterprise Software',
    description: 'B2B software solutions',
    totalProspects: 45,
    totalValue: 2750000
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    description: 'Medical & healthcare services',
    totalProspects: 32,
    totalValue: 1850000
  },
  {
    id: 'education',
    name: 'Education',
    description: 'Educational institutions',
    totalProspects: 28,
    totalValue: 980000
  },
  {
    id: 'financial',
    name: 'Financial Services',
    description: 'Banking & fintech',
    totalProspects: 38,
    totalValue: 3200000
  },
  {
    id: 'retail',
    name: 'Retail',
    description: 'Retail & e-commerce',
    totalProspects: 25,
    totalValue: 850000
  }
];

const ProductPipeline = () => {
  const [selectedVertical, setSelectedVertical] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);
  const [showVerticals, setShowVerticals] = useState(true);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      const newScrollLeft = direction === 'left' 
        ? scrollContainerRef.current.scrollLeft - scrollAmount
        : scrollContainerRef.current.scrollLeft + scrollAmount;
      
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  const filteredProspects = prospects.filter(prospect => {
    const matchesSearch = prospect.companyName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesVertical = selectedVertical === 'all' || 
      verticalData.find(v => v.id === selectedVertical)?.name === prospect.vertical;
    return matchesSearch && matchesVertical;
  });

  const getProspectsByStage = (stage: string) => {
    return filteredProspects.filter(p => p.stage === stage);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search companies..."
            className="w-full pl-10 pr-4 py-2 bg-dark-lighter text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-white"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setShowVerticals(!showVerticals)}
            className="px-4 py-2 bg-dark-lighter text-white rounded-xl hover:bg-dark-card flex items-center gap-2"
          >
            <Filter className="h-4 w-4" />
            Verticals
          </button>
          <button className="px-4 py-2 bg-white text-black rounded-xl hover:bg-gray-200 flex items-center gap-2">
            <Plus className="h-4 w-4" />
            Add Prospect
          </button>
        </div>
      </div>

      {showVerticals && (
        <VerticalSelector
          verticals={verticalData}
          selectedVertical={selectedVertical}
          onSelect={setSelectedVertical}
        />
      )}

      <div className="relative">
        <button
          onClick={() => handleScroll('left')}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-dark-card rounded-full shadow-lg"
        >
          <ChevronLeft className="h-6 w-6 text-white" />
        </button>
        
        <button
          onClick={() => handleScroll('right')}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-dark-card rounded-full shadow-lg"
        >
          <ChevronRight className="h-6 w-6 text-white" />
        </button>

        <div 
          ref={scrollContainerRef}
          className="overflow-x-auto hide-scrollbar"
          style={{ scrollBehavior: 'smooth' }}
        >
          <div className="flex gap-6 p-4 min-w-max">
            {stages.map((stage) => (
              <div key={stage} className="w-80 flex-shrink-0">
                <div className="mb-4">
                  <h3 className="text-lg font-medium text-white">{stage}</h3>
                  <p className="text-sm text-gray-400">
                    {getProspectsByStage(stage).length} prospects
                  </p>
                </div>
                <div className="space-y-4">
                  {getProspectsByStage(stage).map((prospect) => (
                    <div
                      key={prospect.id}
                      className="card hover:ring-1 hover:ring-white/20 transition-all cursor-pointer"
                    >
                      <h4 className="text-white font-medium mb-2">{prospect.companyName}</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center text-gray-400">
                          <Building2 className="h-4 w-4 mr-2" />
                          {prospect.vertical}
                        </div>
                        <div className="flex items-center text-gray-400">
                          <DollarSign className="h-4 w-4 mr-2" />
                          {new Intl.NumberFormat('en-US', {
                            style: 'currency',
                            currency: 'USD',
                            notation: 'compact',
                            maximumFractionDigits: 1,
                          }).format(prospect.value)}
                        </div>
                        <div className="flex items-center text-gray-400">
                          <Calendar className="h-4 w-4 mr-2" />
                          Last Contact: {new Date(prospect.lastContact).toLocaleDateString()}
                        </div>
                        <div className="mt-3 pt-3 border-t border-dark-lighter">
                          <p className="text-accent">{prospect.nextAction}</p>
                        </div>
                      </div>
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

export default ProductPipeline;