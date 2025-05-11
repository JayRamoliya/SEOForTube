
import React from 'react';
import Layout from '@/components/layout/Layout';
import PricingPlans from '@/components/pricing/PricingPlans';
import Faq from '@/components/pricing/Faq';

const Pricing: React.FC = () => {
  return (
    <Layout>
      <PricingPlans />
      <Faq />
    </Layout>
  );
};

export default Pricing;
