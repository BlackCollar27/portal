import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar, Clock, CheckCircle, AlertCircle, User, FileText } from 'lucide-react';

interface OnboardingClient {
  id: string;
  name: string;
  stage: string;
  startDate: string;
  assignedTo: string;
  priority: 'high' | 'medium' | 'low';
  status: 'on_track' | 'delayed' | 'blocked';
  nextAction: string;
  completedTasks: number;
  totalTasks: number;
}

const stages = [
  'Account Setup',
  'Data Collection',
  'System Integration',
  'Training',
  'Review & Testing',
  'Go Live',
  'Post-Launch'
];

const clients: OnboardingClient[] = [
  {
    id: '1',
    name: 'TechCorp Solutions',
    stage: 'Data Collection',
    startDate: '2024-03-10',
    assignedTo: 'Sarah Johnson',
    priority: 'high',
    status: 'on_track',
    nextAction: 'Awaiting system requirements document',
    completedTasks: 3,
    totalTasks: 5
  },
  {
    id: '2',
    name: 'MediHealth Systems',
    stage: 'System Integration',
    startDate: '2024-03-08',
    assignedTo: 'Mike Brown',
    priority: 'medium',
    status: 'delayed',
    nextAction: 'API integration pending',
    completedTasks: 4,
    totalTasks: 8
  },
  {
    id: '3',
    name: 'EduTech Institute',
    stage: 'Training',
    startDate: '2024-03-05',
    assignedTo: 'Alex Wong',
    priority: 'high',
    status: 'on_track',
    nextAction: 'Schedule user training session',
    completedTasks: 6,
    totalTasks: 7
  }
];

const OnboardingStages = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [selectedPriority, setPriority] = useState<string>('all');

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

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'on_track': return 'text-green-400';
      case 'delayed': return 'text-yellow-400';
      case 'blocked': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-400/10 text-red-400';
      case 'medium': return 'bg-yellow-400/10 text-yellow-400';
      case 'low': return 'bg-green-400/10 text-green-400';
      default: return 'bg-gray-400/10 text-gray-400';
    }
  };

  const filteredClients = selectedPriority === 'all'
    ? clients
    : clients.filter(client => client.priority === selectedPriority);

  const getClientsByStage = (stage: string) => {
    return filteredClients.filter(client => client.stage === stage);
  };

  return (
    <div className="space-y-6">
      <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-2">
        {['all', 'high', 'medium', 'low'].map((priority) => (
          <button
            key={priority}
            onClick={() => setPriority(priority)}
            className={`px-4 py-2 rounded-xl whitespace-nowrap ${
              selectedPriority === priority
                ? 'bg-white text-black'
                : 'bg-dark-lighter text-white hover:bg-dark-card'
            }`}
          >
            {priority.charAt(0).toUpperCase() + priority.slice(1)} Priority
          </button>
        ))}
      </div>

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
                    {getClientsByStage(stage).length} clients
                  </p>
                </div>
                <div className="space-y-4">
                  {getClientsByStage(stage).map((client) => (
                    <div
                      key={client.id}
                      className="card hover:ring-1 hover:ring-white/20 transition-all cursor-pointer"
                    >
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="text-white font-medium">{client.name}</h4>
                        <span className={`text-sm px-2 py-1 rounded-full ${getPriorityColor(client.priority)}`}>
                          {client.priority}
                        </span>
                      </div>

                      <div className="space-y-3 text-sm">
                        <div className="flex items-center text-gray-400">
                          <Calendar className="h-4 w-4 mr-2" />
                          Started: {new Date(client.startDate).toLocaleDateString()}
                        </div>
                        <div className="flex items-center text-gray-400">
                          <User className="h-4 w-4 mr-2" />
                          {client.assignedTo}
                        </div>
                        <div className="flex items-center text-gray-400">
                          <FileText className="h-4 w-4 mr-2" />
                          Tasks: {client.completedTasks}/{client.totalTasks}
                        </div>

                        <div className="h-2 bg-dark-lighter rounded-full">
                          <div
                            className="h-2 bg-accent rounded-full"
                            style={{ width: `${(client.completedTasks / client.totalTasks) * 100}%` }}
                          />
                        </div>

                        <div className="mt-3 pt-3 border-t border-dark-lighter">
                          <div className="flex items-start gap-2">
                            {client.status === 'on_track' ? (
                              <CheckCircle className="h-4 w-4 text-green-400 mt-0.5" />
                            ) : (
                              <AlertCircle className="h-4 w-4 text-yellow-400 mt-0.5" />
                            )}
                            <p className="text-accent">{client.nextAction}</p>
                          </div>
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

export default OnboardingStages;