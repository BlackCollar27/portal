import React, { useState } from 'react';
import { Star, Mail, MessageSquare, Copy, Check } from 'lucide-react';

interface Feedback {
  id: string;
  customerName: string;
  rating: number;
  comment: string;
  platform: string;
  date: string;
}

const FeedbackSection = () => {
  const [selectedTemplate, setSelectedTemplate] = useState('email');
  const [copied, setCopied] = useState<string | null>(null);

  const recentFeedback: Feedback[] = [
    {
      id: '1',
      customerName: 'John Smith',
      rating: 5,
      comment: "The product exceeded my expectations. The AI features are incredibly intuitive and have significantly improved our workflow.",
      platform: 'Product Review',
      date: '2024-03-15'
    },
    {
      id: '2',
      customerName: 'Sarah Johnson',
      rating: 4,
      comment: "Great customer service and support team. They were very helpful in getting us set up.",
      platform: 'Trustpilot',
      date: '2024-03-14'
    },
    {
      id: '3',
      customerName: 'Michael Brown',
      rating: 5,
      comment: "This solution has transformed how we handle our data processing. Highly recommended!",
      platform: 'G2',
      date: '2024-03-13'
    }
  ];

  const templates = {
    email: {
      subject: "We'd love your feedback on your recent experience",
      body: `Hi [Customer Name],

We hope you're enjoying our product! We're constantly working to improve our service, and your feedback would be incredibly valuable.

Would you mind taking a moment to share your experience? It won't take more than 2 minutes.

[Feedback Link]

Thank you for your time!

Best regards,
The Team`
    },
    sms: {
      body: "Hi [Customer Name]! How was your experience with our product? We'd love your quick feedback: [Short Link]"
    }
  };

  const handleCopy = (type: string, content: string) => {
    navigator.clipboard.writeText(content);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${
          index < rating ? 'text-white fill-white' : 'text-gray-400'
        }`}
      />
    ));
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="space-y-6">
        <div className="card">
          <h3 className="text-lg font-medium text-white mb-4">Recent Customer Feedback</h3>
          <div className="space-y-4">
            {recentFeedback.map((feedback) => (
              <div key={feedback.id} className="p-4 bg-dark-lighter rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="text-white font-medium">{feedback.customerName}</h4>
                    <p className="text-sm text-gray-400">{feedback.platform}</p>
                  </div>
                  <div className="flex">{renderStars(feedback.rating)}</div>
                </div>
                <p className="text-gray-300">{feedback.comment}</p>
                <p className="text-sm text-gray-400 mt-2">{new Date(feedback.date).toLocaleDateString()}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="card">
          <h3 className="text-lg font-medium text-white mb-4">Feedback Request Templates</h3>
          <div className="space-y-4">
            <div className="flex space-x-2 mb-4">
              <button
                onClick={() => setSelectedTemplate('email')}
                className={`flex items-center px-4 py-2 rounded-lg ${
                  selectedTemplate === 'email'
                    ? 'bg-white text-black'
                    : 'bg-dark-lighter text-white hover:bg-dark-card'
                }`}
              >
                <Mail className="h-4 w-4 mr-2" />
                Email
              </button>
              <button
                onClick={() => setSelectedTemplate('sms')}
                className={`flex items-center px-4 py-2 rounded-lg ${
                  selectedTemplate === 'sms'
                    ? 'bg-white text-black'
                    : 'bg-dark-lighter text-white hover:bg-dark-card'
                }`}
              >
                <MessageSquare className="h-4 w-4 mr-2" />
                SMS
              </button>
            </div>

            {selectedTemplate === 'email' && (
              <div className="space-y-4">
                <div className="p-4 bg-dark-lighter rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-white font-medium">Subject</h4>
                    <button
                      onClick={() => handleCopy('subject', templates.email.subject)}
                      className="p-2 hover:bg-dark-card rounded-lg"
                    >
                      {copied === 'subject' ? (
                        <Check className="h-4 w-4 text-green-400" />
                      ) : (
                        <Copy className="h-4 w-4 text-white" />
                      )}
                    </button>
                  </div>
                  <p className="text-gray-300">{templates.email.subject}</p>
                </div>
                <div className="p-4 bg-dark-lighter rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-white font-medium">Email Body</h4>
                    <button
                      onClick={() => handleCopy('emailBody', templates.email.body)}
                      className="p-2 hover:bg-dark-card rounded-lg"
                    >
                      {copied === 'emailBody' ? (
                        <Check className="h-4 w-4 text-green-400" />
                      ) : (
                        <Copy className="h-4 w-4 text-white" />
                      )}
                    </button>
                  </div>
                  <pre className="text-gray-300 whitespace-pre-wrap font-sans">{templates.email.body}</pre>
                </div>
              </div>
            )}

            {selectedTemplate === 'sms' && (
              <div className="p-4 bg-dark-lighter rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-white font-medium">SMS Message</h4>
                  <button
                    onClick={() => handleCopy('sms', templates.sms.body)}
                    className="p-2 hover:bg-dark-card rounded-lg"
                  >
                    {copied === 'sms' ? (
                      <Check className="h-4 w-4 text-green-400" />
                    ) : (
                      <Copy className="h-4 w-4 text-white" />
                    )}
                  </button>
                </div>
                <p className="text-gray-300">{templates.sms.body}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackSection;