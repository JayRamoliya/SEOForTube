
import React from 'react';

const faqs = [
  {
    question: 'How does the YouTube SEO Generator work?',
    answer: 'Our AI tool analyzes top-performing videos for your keyword, then generates optimized titles, descriptions, and tags based on YouTube SEO best practices.'
  },
  {
    question: 'Will this guarantee my videos rank higher?',
    answer: 'While our tool provides SEO-optimized content based on data analysis, video rankings depend on multiple factors including content quality, watch time, and audience engagement.'
  },
  {
    question: 'Can I use the free version for my business?',
    answer: 'Yes, the free version can be used for any channel, but has limited features. For businesses with regular content creation, we recommend our Pro or Enterprise plans.'
  },
  {
    question: 'How many videos can I optimize?',
    answer: 'The Free plan allows up to 5 generations per day. The Pro plan includes unlimited generations, and Enterprise adds bulk operations for up to 10 videos at once.'
  },
  {
    question: 'Can I cancel my subscription anytime?',
    answer: 'Yes, you can cancel your subscription at any time from your account settings. Your access will continue until the end of your billing period.'
  },
  {
    question: 'Do you offer refunds?',
    answer: 'We offer a 7-day money-back guarantee if you\'re not satisfied with our service. Contact our support team for assistance.'
  },
];

const FAQ: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about YTubeSEO
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
