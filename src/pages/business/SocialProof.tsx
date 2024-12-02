import React, { useState } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { Calendar, ChevronLeft, ChevronRight, Instagram, Twitter, Linkedin, Youtube, Star, Mail, MessageSquare, Copy, Check, ClipboardList } from 'lucide-react';
import FeedbackSection from './components/FeedbackSection';
import ContentCalendar from './components/ContentCalendar';
import SurveySection from './components/SurveySection';

const SocialProof = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname.split('/').pop() || 'calendar';

  const handleTabChange = (tab: string) => {
    navigate(`/business-systems/social-proof/${tab}`);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-2xl font-bold text-white">Social Proof Management</h2>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => handleTabChange('calendar')}
            className={`px-4 py-2 rounded-lg ${
              currentPath === 'calendar'
                ? 'bg-white text-black'
                : 'bg-dark-lighter text-white hover:bg-dark-card'
            }`}
          >
            Content Calendar
          </button>
          <button
            onClick={() => handleTabChange('feedback')}
            className={`px-4 py-2 rounded-lg ${
              currentPath === 'feedback'
                ? 'bg-white text-black'
                : 'bg-dark-lighter text-white hover:bg-dark-card'
            }`}
          >
            Customer Feedback
          </button>
          <button
            onClick={() => handleTabChange('surveys')}
            className={`px-4 py-2 rounded-lg ${
              currentPath === 'surveys'
                ? 'bg-white text-black'
                : 'bg-dark-lighter text-white hover:bg-dark-card'
            }`}
          >
            Surveys
          </button>
        </div>
      </div>

      <Routes>
        <Route index element={<ContentCalendar />} />
        <Route path="calendar" element={<ContentCalendar />} />
        <Route path="feedback" element={<FeedbackSection />} />
        <Route path="surveys" element={<SurveySection />} />
      </Routes>
    </div>
  );
};

export default SocialProof;