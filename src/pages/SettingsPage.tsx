import React from 'react';
import { Bell, Lock, User, Globe, Database } from 'lucide-react';

const SettingsPage = () => {
  const settingsSections = [
    {
      title: 'Profile Settings',
      icon: User,
      settings: [
        { name: 'Name', value: 'John Doe' },
        { name: 'Email', value: 'john@example.com' },
        { name: 'Role', value: 'Administrator' }
      ]
    },
    {
      title: 'Notifications',
      icon: Bell,
      settings: [
        { name: 'Email Notifications', value: 'Enabled' },
        { name: 'Push Notifications', value: 'Disabled' },
        { name: 'Alert Preferences', value: 'High Priority Only' }
      ]
    },
    {
      title: 'Security',
      icon: Lock,
      settings: [
        { name: '2FA', value: 'Enabled' },
        { name: 'Password Last Changed', value: '2 months ago' },
        { name: 'Active Sessions', value: '2 devices' }
      ]
    },
    {
      title: 'System',
      icon: Database,
      settings: [
        { name: 'Language', value: 'English' },
        { name: 'Time Zone', value: 'UTC-5' },
        { name: 'Data Retention', value: '90 days' }
      ]
    }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white mb-6">Settings</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {settingsSections.map((section, index) => (
          <div key={index} className="card">
            <div className="flex items-center mb-4">
              <section.icon className="h-6 w-6 text-accent mr-3" />
              <h3 className="text-lg font-medium text-white">{section.title}</h3>
            </div>
            <div className="space-y-4">
              {section.settings.map((setting, settingIndex) => (
                <div key={settingIndex} className="flex justify-between items-center">
                  <span className="text-gray-400">{setting.name}</span>
                  <span className="text-white">{setting.value}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SettingsPage;