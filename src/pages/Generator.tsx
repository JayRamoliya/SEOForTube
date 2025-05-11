
import React, { useState } from 'react';
import Layout from '@/components/layout/Layout';
import SeoGenerator from '@/components/generator/SeoGenerator';
import PreviewSection from '@/components/generator/PreviewSection';

const Generator: React.FC = () => {
  const [generatedContent, setGeneratedContent] = useState({
    title: '',
    description: ''
  });
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <SeoGenerator />
        {(generatedContent.title || generatedContent.description) && (
          <PreviewSection
            title={generatedContent.title}
            description={generatedContent.description}
          />
        )}
      </div>
    </Layout>
  );
};

export default Generator;
