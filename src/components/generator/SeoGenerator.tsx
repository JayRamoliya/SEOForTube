
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

interface GeneratedContent {
  title: string;
  description: string;
  tags: string[];
}

const SeoGenerator: React.FC = () => {
  const [keyword, setKeyword] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedContent, setGeneratedContent] = useState<GeneratedContent | null>(null);

  // For demonstration purposes, we'll use mock data
  const generateSEOContent = async () => {
    if (!keyword.trim()) {
      toast.error('Please enter a keyword');
      return;
    }

    setIsGenerating(true);

    try {
      // In a real app, this would be an API call to an AI service
      // Mocking a delay to simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Mock response
      const mockContent = {
        title: `${keyword.toUpperCase()} in 2025 - Complete Guide (Tips & Tricks)`,
        description: `Learn everything about ${keyword} with our comprehensive guide for 2025. We cover all the essential tips, tricks, and strategies to help you master ${keyword} and achieve better results. Perfect for beginners and experts alike!`,
        tags: [
          keyword.toLowerCase().replace(/\s+/g, ''),
          `${keyword.toLowerCase().replace(/\s+/g, '')}tutorial`,
          `${keyword.toLowerCase().replace(/\s+/g, '')}guide`,
          'youtube',
          '2025guide',
          'howto',
          'tutorial',
          'tips',
          'tricks',
          'beginner',
        ]
      };
      
      setGeneratedContent(mockContent);
      toast.success('SEO content generated successfully!');
    } catch (error) {
      toast.error('Failed to generate content. Please try again.');
      console.error(error);
    } finally {
      setIsGenerating(false);
    }
  };

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    toast.success(`${type} copied to clipboard!`);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">YouTube SEO Generator</h1>
        <p className="text-lg text-gray-600">
          Enter the main keyword or topic of your video, and our AI will generate SEO-optimized content for you.
        </p>
      </div>
      
      <div className="mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <Input
            placeholder="Enter your main keyword (e.g., 'How to start a podcast')"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            className="flex-grow"
          />
          <Button 
            onClick={generateSEOContent} 
            disabled={isGenerating || !keyword.trim()} 
            className="bg-primary-500 hover:bg-primary-600 min-w-[140px]"
          >
            {isGenerating ? 'Generating...' : 'Generate SEO'}
          </Button>
        </div>
      </div>
      
      {generatedContent && (
        <div className="space-y-6">
          <Card>
            <CardContent className="pt-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-lg">🎯 SEO Title</h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => copyToClipboard(generatedContent.title, 'Title')}
                  className="text-primary-500 hover:text-primary-600 hover:bg-primary-50"
                >
                  Copy
                </Button>
              </div>
              <div className="p-3 bg-gray-50 rounded-md border border-gray-200">
                <p className="font-medium">{generatedContent.title}</p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-lg">📝 SEO Description</h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => copyToClipboard(generatedContent.description, 'Description')}
                  className="text-primary-500 hover:text-primary-600 hover:bg-primary-50"
                >
                  Copy
                </Button>
              </div>
              <Textarea
                readOnly
                value={generatedContent.description}
                className="bg-gray-50 border border-gray-200 min-h-[120px]"
              />
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-lg">🔖 SEO Tags</h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => copyToClipboard(generatedContent.tags.join(', '), 'Tags')}
                  className="text-primary-500 hover:text-primary-600 hover:bg-primary-50"
                >
                  Copy
                </Button>
              </div>
              <div className="p-3 bg-gray-50 rounded-md border border-gray-200">
                <div className="flex flex-wrap gap-2">
                  {generatedContent.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="bg-primary-100 text-primary-700 px-2 py-1 rounded-md text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default SeoGenerator;
