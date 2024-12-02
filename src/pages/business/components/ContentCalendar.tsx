import React, { useState } from 'react';
import { Calendar, ChevronLeft, ChevronRight, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';

interface ContentItem {
  id: string;
  platform: 'instagram' | 'twitter' | 'linkedin' | 'youtube';
  title: string;
  type: string;
  time: string;
}

const ContentCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const days = new Date(year, month + 1, 0).getDate();
    const firstDay = new Date(year, month, 1).getDay();
    return { days, firstDay };
  };

  const { days, firstDay } = getDaysInMonth(currentDate);

  const contentData: { [key: string]: ContentItem[] } = {
    '2024-03-15': [
      { id: '1', platform: 'instagram', title: 'Product Feature Showcase', type: 'Post', time: '10:00 AM' },
      { id: '2', platform: 'twitter', title: 'Industry News Update', type: 'Thread', time: '2:00 PM' }
    ],
    '2024-03-16': [
      { id: '3', platform: 'linkedin', title: 'Case Study Release', type: 'Article', time: '11:00 AM' },
      { id: '4', platform: 'youtube', title: 'Tutorial Video', type: 'Video', time: '3:00 PM' }
    ],
  };

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case 'instagram': return <Instagram className="h-4 w-4" />;
      case 'twitter': return <Twitter className="h-4 w-4" />;
      case 'linkedin': return <Linkedin className="h-4 w-4" />;
      case 'youtube': return <Youtube className="h-4 w-4" />;
      default: return null;
    }
  };

  return (
    <>
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <button onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1))} className="p-2 hover:bg-dark-lighter rounded-lg">
            <ChevronLeft className="h-5 w-5 text-white" />
          </button>
          <span className="text-white font-medium">
            {currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
          </span>
          <button onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1))} className="p-2 hover:bg-dark-lighter rounded-lg">
            <ChevronRight className="h-5 w-5 text-white" />
          </button>
        </div>
      </div>

      <div className="card">
        <div className="grid grid-cols-7 gap-px bg-dark-lighter">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
            <div key={day} className="p-2 text-center text-sm font-medium text-white">
              {day}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-px bg-dark-lighter">
          {Array.from({ length: 42 }, (_, i) => {
            const dayNumber = i - firstDay + 1;
            const isCurrentMonth = dayNumber > 0 && dayNumber <= days;
            const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), dayNumber);
            const dateString = isCurrentMonth ? date.toISOString().split('T')[0] : '';
            const content = contentData[dateString] || [];

            return (
              <div
                key={i}
                className={`min-h-[120px] p-2 ${
                  isCurrentMonth ? 'bg-dark-card' : 'bg-dark-lighter opacity-50'
                } ${selectedDate?.getDate() === dayNumber ? 'ring-2 ring-white' : ''}`}
                onClick={() => isCurrentMonth && setSelectedDate(date)}
              >
                {isCurrentMonth && (
                  <>
                    <div className="text-sm font-medium text-white mb-2">{dayNumber}</div>
                    <div className="space-y-1">
                      {content.map((item) => (
                        <div
                          key={item.id}
                          className="flex items-center space-x-1 text-xs p-1 rounded bg-dark-lighter"
                        >
                          {getPlatformIcon(item.platform)}
                          <span className="text-gray-400 truncate">{item.title}</span>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {selectedDate && (
        <div className="card">
          <h3 className="text-lg font-medium text-white mb-4">
            Content for {selectedDate.toLocaleDateString()}
          </h3>
          <div className="space-y-4">
            {contentData[selectedDate.toISOString().split('T')[0]]?.map((item) => (
              <div key={item.id} className="flex items-start space-x-4 p-4 bg-dark-lighter rounded-lg">
                <div className="p-2 bg-dark-card rounded-lg">
                  {getPlatformIcon(item.platform)}
                </div>
                <div>
                  <h4 className="text-white font-medium">{item.title}</h4>
                  <p className="text-gray-400 text-sm">{item.type} • {item.time}</p>
                </div>
              </div>
            )) || (
              <p className="text-gray-400">No content planned for this date</p>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ContentCalendar;