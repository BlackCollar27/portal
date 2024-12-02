import React, { useState } from 'react';
import { Building2, Phone, Mail, Truck, DollarSign, Clock, MapPin, Plus, Search } from 'lucide-react';

interface Manufacturer {
  id: string;
  name: string;
  contact: {
    name: string;
    email: string;
    phone: string;
  };
  location: string;
  products: {
    name: string;
    price: number;
    moq: number;
    leadTime: string;
  }[];
  shipping: {
    method: string;
    cost: number;
    estimatedTime: string;
  };
  rating: number;
  activeOrders: number;
}

const manufacturers: Manufacturer[] = [
  {
    id: '1',
    name: 'TechManufacturing Co.',
    contact: {
      name: 'John Smith',
      email: 'john@techmanufacturing.com',
      phone: '+1 (555) 123-4567'
    },
    location: 'San Jose, CA',
    products: [
      {
        name: 'Product A',
        price: 150,
        moq: 100,
        leadTime: '2-3 weeks'
      },
      {
        name: 'Product B',
        price: 200,
        moq: 50,
        leadTime: '1-2 weeks'
      }
    ],
    shipping: {
      method: 'Express Air Freight',
      cost: 1500,
      estimatedTime: '3-5 days'
    },
    rating: 4.8,
    activeOrders: 3
  },
  {
    id: '2',
    name: 'Global Electronics Ltd.',
    contact: {
      name: 'Sarah Johnson',
      email: 'sarah@globalelectronics.com',
      phone: '+1 (555) 987-6543'
    },
    location: 'Austin, TX',
    products: [
      {
        name: 'Product C',
        price: 180,
        moq: 75,
        leadTime: '2-4 weeks'
      },
      {
        name: 'Product D',
        price: 250,
        moq: 25,
        leadTime: '1-3 weeks'
      }
    ],
    shipping: {
      method: 'Standard Ground',
      cost: 800,
      estimatedTime: '5-7 days'
    },
    rating: 4.5,
    activeOrders: 2
  }
];

const ManufacturersSection = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredManufacturers = manufacturers.filter(manufacturer =>
    manufacturer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    manufacturer.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, index) => (
      <svg
        key={index}
        className={`h-4 w-4 ${index < rating ? 'text-white fill-white' : 'text-gray-400'}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ));
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h3 className="text-lg font-medium text-white">Manufacturers</h3>
        <div className="flex gap-2 w-full sm:w-auto">
          <div className="relative flex-1 sm:flex-initial">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search manufacturers..."
              className="w-full sm:w-64 pl-10 pr-4 py-2 bg-dark-lighter text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-white"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="px-4 py-2 bg-white text-black rounded-xl hover:bg-gray-200 flex items-center gap-2">
            <Plus className="h-4 w-4" />
            Add New
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredManufacturers.map((manufacturer) => (
          <div key={manufacturer.id} className="card hover:ring-1 hover:ring-white/20 transition-all">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h4 className="text-lg font-medium text-white">{manufacturer.name}</h4>
                <div className="flex items-center gap-2 mt-1">
                  <MapPin className="h-4 w-4 text-gray-400" />
                  <span className="text-sm text-gray-400">{manufacturer.location}</span>
                </div>
              </div>
              <div className="flex items-center gap-1">
                {renderStars(manufacturer.rating)}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div className="bg-dark-lighter p-4 rounded-xl">
                <h5 className="text-white font-medium mb-2">Contact Information</h5>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center text-gray-400">
                    <Building2 className="h-4 w-4 mr-2" />
                    {manufacturer.contact.name}
                  </div>
                  <div className="flex items-center text-gray-400">
                    <Mail className="h-4 w-4 mr-2" />
                    {manufacturer.contact.email}
                  </div>
                  <div className="flex items-center text-gray-400">
                    <Phone className="h-4 w-4 mr-2" />
                    {manufacturer.contact.phone}
                  </div>
                </div>
              </div>

              <div className="bg-dark-lighter p-4 rounded-xl">
                <h5 className="text-white font-medium mb-2">Shipping Details</h5>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center text-gray-400">
                    <Truck className="h-4 w-4 mr-2" />
                    {manufacturer.shipping.method}
                  </div>
                  <div className="flex items-center text-gray-400">
                    <DollarSign className="h-4 w-4 mr-2" />
                    {new Intl.NumberFormat('en-US', {
                      style: 'currency',
                      currency: 'USD',
                    }).format(manufacturer.shipping.cost)}
                  </div>
                  <div className="flex items-center text-gray-400">
                    <Clock className="h-4 w-4 mr-2" />
                    {manufacturer.shipping.estimatedTime}
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h5 className="text-white font-medium">Products</h5>
              {manufacturer.products.map((product, index) => (
                <div key={index} className="bg-dark-lighter p-4 rounded-xl">
                  <div className="flex justify-between items-start mb-2">
                    <h6 className="text-white font-medium">{product.name}</h6>
                    <span className="text-sm text-accent">
                      {new Intl.NumberFormat('en-US', {
                        style: 'currency',
                        currency: 'USD',
                      }).format(product.price)}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-400">
                    <span>MOQ: {product.moq} units</span>
                    <span>Lead Time: {product.leadTime}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManufacturersSection;