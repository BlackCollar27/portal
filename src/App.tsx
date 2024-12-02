import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import BusinessSystemsPage from './pages/BusinessSystemsPage';
import BusinessFinancesPage from './pages/BusinessFinancesPage';
import SettingsPage from './pages/SettingsPage';

const App: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <Router>
      <div className="min-h-screen bg-dark">
        <Navbar onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
        <div className="flex">
          <Sidebar isOpen={sidebarOpen} onClose={closeSidebar} />
          <main className="flex-1 p-4 sm:p-6 lg:p-8 w-full lg:ml-64">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/business-systems/*" element={<BusinessSystemsPage />} />
              <Route path="/finances/*" element={<BusinessFinancesPage />} />
              <Route path="/settings" element={<SettingsPage />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;