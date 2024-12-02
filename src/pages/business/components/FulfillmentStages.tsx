import React, { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar, Clock, CheckCircle, AlertCircle, Package, Truck, DollarSign } from 'lucide-react';

interface FulfillmentOrder {
  id: string;
  orderNumber: string;
  customerName: string;
  stage: string;
  orderDate: string;
  deliveryDate: string;
  priority: 'high' | 'medium' | 'low';
  status: 'on_track' | 'delayed' | 'blocked';
  value: number;
  items: number;
  nextAction: string;
}

const stages = [
  'Order Received',
  'Processing',
  'Quality Check',
  'Packaging',
  'Shipping',
  'In Transit',
  'Delivered'
];

const orders: FulfillmentOrder[] = [
  {
    id: '1',
    orderNumber: 'ORD-2024-001',
    customerName: 'TechCorp Solutions',
    stage: 'Processing',
    orderDate: '2024-03-15',
    deliveryDate: '2024-03-20',
    priority: 'high',
    status: 'on_track',
    value: 15000,
    items: 3,
    nextAction: 'Awaiting inventory confirmation'
  },
  {
    id: '2',
    orderNumber: 'ORD-2024-002',
    customerName: 'MediHealth Systems',
    stage: 'Quality Check',
    orderDate: '2024-03-14',
    deliveryDate: '2024-03-19',
    priority: 'medium',
    status: 'delayed',
    value: 8500,
    items: 2,
    nextAction: 'Quality inspection in progress'
  },
  {
    id: '3',
    orderNumber: 'ORD-2024-003',
    customerName: 'EduTech Institute',
    stage: 'Shipping',
    orderDate: '2024-03-13',
    deliveryDate: '2024-03-18',
    priority: 'high',
    status: 'on_track',
    value: 12000,
    items: 4,
    nextAction: 'Preparing shipping labels'
  }
];

const FulfillmentStages = () => {
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

  const filteredOrders = selectedPriority === 'all'
    ? orders
    : orders.filter(order => order.priority === selectedPriority);

  const getOrdersByStage = (stage: string) => {
    return filteredOrders.filter(order => order.stage === stage);
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
                    {getOrdersByStage(stage).length} orders
                  </p>
                </div>
                <div className="space-y-4">
                  {getOrdersByStage(stage).map((order) => (
                    <div
                      key={order.id}
                      className="card hover:ring-1 hover:ring-white/20 transition-all cursor-pointer"
                    >
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h4 className="text-white font-medium">{order.customerName}</h4>
                          <p className="text-sm text-gray-400">{order.orderNumber}</p>
                        </div>
                        <span className={`text-sm px-2 py-1 rounded-full ${getPriorityColor(order.priority)}`}>
                          {order.priority}
                        </span>
                      </div>

                      <div className="space-y-3 text-sm">
                        <div className="flex items-center text-gray-400">
                          <Calendar className="h-4 w-4 mr-2" />
                          Order Date: {new Date(order.orderDate).toLocaleDateString()}
                        </div>
                        <div className="flex items-center text-gray-400">
                          <Truck className="h-4 w-4 mr-2" />
                          Delivery: {new Date(order.deliveryDate).toLocaleDateString()}
                        </div>
                        <div className="flex items-center text-gray-400">
                          <Package className="h-4 w-4 mr-2" />
                          Items: {order.items}
                        </div>
                        <div className="flex items-center text-gray-400">
                          <DollarSign className="h-4 w-4 mr-2" />
                          {new Intl.NumberFormat('en-US', {
                            style: 'currency',
                            currency: 'USD',
                            notation: 'compact',
                            maximumFractionDigits: 1,
                          }).format(order.value)}
                        </div>

                        <div className="mt-3 pt-3 border-t border-dark-lighter">
                          <div className="flex items-start gap-2">
                            {order.status === 'on_track' ? (
                              <CheckCircle className="h-4 w-4 text-green-400 mt-0.5" />
                            ) : (
                              <AlertCircle className="h-4 w-4 text-yellow-400 mt-0.5" />
                            )}
                            <p className="text-accent">{order.nextAction}</p>
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

export default FulfillmentStages;