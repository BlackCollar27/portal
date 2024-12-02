import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Building2, DollarSign, Users, Settings, UserPlus, Workflow, Package, Target } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  { icon: Building2, label: 'Overview', path: '/' },
  { 
    icon: Target, 
    label: 'Business Systems',
    path: '/business-systems',
    subItems: [
      { label: 'Social Proof', icon: Users, path: '/business-systems/social-proof' },
      { label: 'Customer Acquisition', icon: UserPlus, path: '/business-systems/customer-acquisition' },
      { label: 'Onboarding', icon: Workflow, path: '/business-systems/onboarding' },
      { label: 'Fulfillment', icon: Package, path: '/business-systems/fulfillment' }
    ]
  },
  { icon: DollarSign, label: 'Finances', path: '/finances' },
  { icon: Settings, label: 'Settings', path: '/settings' },
];

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const [expandedItem, setExpandedItem] = React.useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const sidebarRef = React.useRef<HTMLDivElement>(null);

  // Handle clicks outside the sidebar on mobile
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, onClose]);

  const handleNavigation = (path: string, hasSubItems: boolean) => {
    if (!hasSubItems) {
      navigate(path);
      onClose();
    }
  };

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };

  // Prevent scroll on body when sidebar is open on mobile
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden transition-opacity"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`
          fixed top-0 left-0 z-50 w-64 h-full bg-dark-card transform transition-transform duration-200 ease-in-out
          lg:relative lg:transform-none lg:transition-none
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        <div className="p-4">
          <div className="flex justify-between items-center lg:hidden mb-4">
            <span className="text-xl font-bold gradient-text">Menu</span>
            <button 
              onClick={onClose}
              className="p-2 rounded-md hover:bg-dark-lighter"
              aria-label="Close menu"
            >
              <svg className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav className="space-y-1">
            {menuItems.map((item, index) => (
              <div key={index}>
                <div
                  onClick={() => {
                    if (item.subItems) {
                      setExpandedItem(expandedItem === item.label ? null : item.label);
                      navigate(item.path);
                    } else {
                      handleNavigation(item.path, false);
                    }
                  }}
                  className={`
                    flex items-center justify-between px-4 py-3 text-sm font-medium rounded-xl cursor-pointer
                    ${isActive(item.path)
                      ? 'bg-accent/10 text-accent'
                      : 'text-gray-400 hover:bg-dark-lighter hover:text-white'
                    }
                  `}
                >
                  <div className="flex items-center">
                    <item.icon className="h-5 w-5 mr-3" />
                    {item.label}
                  </div>
                  {item.subItems && (
                    <svg
                      className={`w-4 h-4 transition-transform ${
                        expandedItem === item.label ? 'transform rotate-180' : ''
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </div>

                {item.subItems && expandedItem === item.label && (
                  <div className="ml-8 mt-2 space-y-1">
                    {item.subItems.map((subItem, subIndex) => (
                      <div
                        key={subIndex}
                        onClick={() => handleNavigation(subItem.path, false)}
                        className={`
                          flex items-center px-4 py-2 text-sm cursor-pointer rounded-xl
                          ${isActive(subItem.path)
                            ? 'text-accent bg-accent/10'
                            : 'text-gray-400 hover:text-white hover:bg-dark-lighter'
                          }
                        `}
                      >
                        <subItem.icon className="h-4 w-4 mr-3" />
                        {subItem.label}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Sidebar;