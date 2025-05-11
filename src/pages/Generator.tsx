
import React, { useState, useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import SeoGenerator from '@/components/generator/SeoGenerator';
import PreviewSection from '@/components/generator/PreviewSection';

interface GeneratedContent {
  title: string;
  description: string;
  tags: string[];
  logoDescription?: string;
}

const Generator: React.FC = () => {
  const [generatedContent, setGeneratedContent] = useState<GeneratedContent>({
    title: '',
    description: '',
    tags: [],
    logoDescription: ''
  });
  
  // Listen for generated content from the SeoGenerator component
  useEffect(() => {
    const handleContentGenerated = (event: any) => {
      setGeneratedContent(event.detail);
    };
    
    window.addEventListener('contentGenerated', handleContentGenerated);
    
    return () => {
      window.removeEventListener('contentGenerated', handleContentGenerated);
    };
  }, []);
  
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
