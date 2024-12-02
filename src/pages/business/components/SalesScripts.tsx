import React, { useState } from 'react';
import { Search, Plus, FileText, Phone, Mail, MessageSquare, Copy, Check, Filter } from 'lucide-react';

interface Script {
  id: string;
  title: string;
  description: string;
  type: 'phone' | 'email' | 'message';
  category: string;
  content: string;
  lastUpdated: string;
}

const scripts: Script[] = [
  {
    id: '1',
    title: 'Initial Cold Call Script',
    description: 'Script for first contact with potential clients',
    type: 'phone',
    category: 'Cold Outreach',
    content: `Hi [Name],

I'm [Your Name] from [Company]. We help businesses like yours [value proposition].

I noticed that your company [observation/trigger point]. Many of our clients faced similar challenges before working with us.

Would you be interested in learning how we helped them achieve [specific result]?

[If yes] Great! Let me briefly explain...
[If no] No problem. Would it be alright if I send you some information via email for future reference?`,
    lastUpdated: '2024-03-15'
  },
  {
    id: '2',
    title: 'Follow-up Email Template',
    description: 'Email template for following up after initial contact',
    type: 'email',
    category: 'Follow-up',
    content: `Subject: Quick follow-up regarding [Topic]

Hi [Name],

I hope this email finds you well. I wanted to follow up on our conversation about [topic].

As mentioned, we specialize in helping companies like yours to [value proposition]. I thought you might be interested in seeing how we helped [Similar Company] achieve [specific result].

Would you be open to a quick 15-minute call this week to discuss how we could help [Company Name] achieve similar results?

Best regards,
[Your Name]`,
    lastUpdated: '2024-03-14'
  },
  {
    id: '3',
    title: 'LinkedIn Message Template',
    description: 'Template for LinkedIn outreach',
    type: 'message',
    category: 'Social Outreach',
    content: `Hi [Name],

I noticed you're [position] at [Company]. I'm reaching out because we help companies in [industry] with [specific solution].

Would you be interested in learning how we helped [Similar Company] achieve [specific result]?

Looking forward to connecting!

Best,
[Your Name]`,
    lastUpdated: '2024-03-13'
  }
];

const SalesScripts = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [copied, setCopied] = useState<string | null>(null);

  const categories = ['all', 'Cold Outreach', 'Follow-up', 'Social Outreach'];
  const types = ['all', 'phone', 'email', 'message'];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'phone': return <Phone className="h-4 w-4" />;
      case 'email': return <Mail className="h-4 w-4" />;
      case 'message': return <MessageSquare className="h-4 w-4" />;
      default: return <FileText className="h-4 w-4" />;
    }
  };

  const handleCopy = (id: string, content: string) => {
    navigator.clipboard.writeText(content);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  const filteredScripts = scripts.filter(script => {
    const matchesSearch = script.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         script.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || script.category === selectedCategory;
    const matchesType = selectedType === 'all' || script.type === selectedType;
    return matchesSearch && matchesCategory && matchesType;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search scripts..."
            className="w-full pl-10 pr-4 py-2 bg-dark-lighter text-white rounded-xl focus:outline-none focus:ring-2 focus:ring-white"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
          <div className="relative">
            <select
              className="appearance-none bg-dark-lighter text-white px-4 py-2 pr-8 rounded-xl focus:outline-none focus:ring-2 focus:ring-white"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </option>
              ))}
            </select>
            <Filter className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
          </div>
          <div className="relative">
            <select
              className="appearance-none bg-dark-lighter text-white px-4 py-2 pr-8 rounded-xl focus:outline-none focus:ring-2 focus:ring-white"
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
            >
              {types.map(type => (
                <option key={type} value={type}>
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </option>
              ))}
            </select>
            <Filter className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
          </div>
          <button className="px-4 py-2 bg-white text-black rounded-xl hover:bg-gray-200 flex items-center gap-2">
            <Plus className="h-4 w-4" />
            New Script
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredScripts.map((script) => (
          <div key={script.id} className="card">
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="flex items-center gap-2">
                  {getTypeIcon(script.type)}
                  <h3 className="text-lg font-medium text-white">{script.title}</h3>
                </div>
                <p className="text-sm text-gray-400 mt-1">{script.description}</p>
              </div>
              <span className="text-sm text-gray-400">
                Updated: {new Date(script.lastUpdated).toLocaleDateString()}
              </span>
            </div>
            <div className="relative">
              <pre className="text-gray-300 whitespace-pre-wrap font-sans bg-dark-lighter p-4 rounded-xl">
                {script.content}
              </pre>
              <button
                onClick={() => handleCopy(script.id, script.content)}
                className="absolute top-2 right-2 p-2 bg-dark-card rounded-lg hover:bg-dark-lighter"
              >
                {copied === script.id ? (
                  <Check className="h-4 w-4 text-green-400" />
                ) : (
                  <Copy className="h-4 w-4 text-white" />
                )}
              </button>
            </div>
            <div className="flex justify-between items-center mt-4">
              <span className="text-sm text-accent bg-accent/10 px-3 py-1 rounded-full">
                {script.category}
              </span>
              <button className="text-sm text-gray-400 hover:text-white">
                Edit Script
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SalesScripts;