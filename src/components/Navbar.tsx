import React from 'react';
import { Bell, Search, Menu } from 'lucide-react';

interface NavbarProps {
  onMenuClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onMenuClick }) => {
  return (
    <nav className="bg-dark-card border-b border-dark-lighter sticky top-0 z-50">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <button 
              onClick={onMenuClick}
              className="lg:hidden p-2 rounded-md text-gray-400 hover:text-white hover:bg-dark-lighter"
            >
              <Menu className="h-6 w-6" />
            </button>
            <div className="flex-shrink-0 flex items-center ml-2 lg:ml-0">
              <span className="text-xl sm:text-2xl font-bold text-white">AI Enterprise</span>
            </div>
          </div>
          
          <div className="flex items-center">
            <div className="hidden sm:block relative mx-4">
              <input
                type="text"
                placeholder="Search..."
                className="w-48 md:w-64 px-4 py-2 rounded-xl bg-dark-lighter border-none text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            
            <button className="p-2 rounded-full hover:bg-dark-lighter">
              <Bell className="h-6 w-6 text-gray-400" />
            </button>
            
            <div className="ml-4 flex items-center">
              <img
                className="h-8 w-8 rounded-full ring-2 ring-white"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="User"
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;