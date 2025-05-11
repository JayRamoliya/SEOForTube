
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    description: 'Basic SEO tools for YouTube creators just starting out.',
    features: [
      '5 SEO generations per day',
      'Basic title optimization',
      'Basic description generation',
      '5 tags per video',
      'Copy functionality',
    ],
    buttonText: 'Get Started',
    buttonVariant: 'outline',
    popular: false,
  },
  {
    name: 'Pro',
    price: '$9.99',
    period: 'per month',
    description: 'Advanced tools for growing YouTube channels.',
    features: [
      'Unlimited SEO generations',
      'Advanced title optimization',
      'Enhanced description generation',
      'Up to 20 tags per video',
      'Preview functionality',
      'Language support (5 languages)',
      'Bulk generation (up to 10 videos)',
      'Email support',
    ],
    buttonText: 'Upgrade to Pro',
    buttonVariant: 'primary',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: '$29.99',
    period: 'per month',
    description: 'Complete solution for professional content creators and teams.',
    features: [
      'All Pro features',
      'Team collaboration (up to 5 users)',
      'API access',
      'Language support (all languages)',
      'Custom branding',
      'Analytics dashboard',
      'Priority support',
      'Custom integrations',
    ],
    buttonText: 'Contact Sales',
    buttonVariant: 'outline',
    popular: false,
  },
];

const PricingPlans: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Choose the perfect plan for your YouTube content creation needs
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan) => (
          <div 
            key={plan.name} 
            className={`relative rounded-lg border ${
              plan.popular ? 'border-primary-400 shadow-lg' : 'border-gray-200'
            } bg-white p-6 flex flex-col`}
          >
            {plan.popular && (
              <div className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/2">
                <span className="bg-primary-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Most Popular
                </span>
              </div>
            )}
            
            <div className="mb-6">
              <h3 className="text-xl font-bold">{plan.name}</h3>
              <div className="mt-3">
                <span className="text-3xl font-bold">{plan.price}</span>
                <span className="text-gray-500 ml-1">/{plan.period}</span>
              </div>
              <p className="mt-2 text-gray-600">{plan.description}</p>
            </div>
            
            <div className="flex-grow">
              <ul className="space-y-3">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mt-8">
              <Button 
                className={`w-full ${
                  plan.buttonVariant === 'primary' 
                    ? 'bg-primary-500 hover:bg-primary-600 text-white' 
                    : 'border-primary-500 text-primary-500 hover:bg-primary-50'
                }`}
                variant={plan.buttonVariant === 'primary' ? 'default' : 'outline'}
              >
                {plan.buttonText}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPlans;
