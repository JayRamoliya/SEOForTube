
import React, { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

interface GeneratedContent {
  title: string;
  description: string;
  tags: string[];
  logoDescription?: string;
}

const SeoGenerator: React.FC = () => {
  const [keyword, setKeyword] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedContent, setGeneratedContent] = useState<GeneratedContent | null>(null);

  // Pass generated content up to parent component
  useEffect(() => {
    if (generatedContent) {
      // Use a custom event to communicate up to parent component
      const event = new CustomEvent('contentGenerated', { 
        detail: { 
          title: generatedContent.title,
          description: generatedContent.description,
          tags: generatedContent.tags,
          logoDescription: generatedContent.logoDescription
        } 
      });
      window.dispatchEvent(event);
    }
  }, [generatedContent]);

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
      
      // Generate 30 tags based on keyword - improved version
      const generateTags = (keyword: string): string[] => {
        const baseKeyword = keyword.toLowerCase().trim();
        const keywordParts = baseKeyword.split(' ');
        const currentYear = new Date().getFullYear();
        
        // Common YouTube tag patterns and relevant tag categories
        const commonPrefixes = ['how to', 'best', 'top', 'learn', 'easy', 'simple', 'quick', 'professional', 'beginner', 'advanced'];
        const commonSuffixes = ['tutorial', 'guide', 'tips', 'tricks', 'hacks', 'secrets', 'explained', 'review', 'basics', 'masterclass'];
        const contentTypes = ['tutorial', 'how-to', 'guide', 'explainer', 'review', 'tips', 'vlog', 'series', 'course'];
        const qualifiers = ['best', 'top', 'essential', 'must-know', 'professional', 'expert', 'beginner', 'advanced', 'complete', 'comprehensive'];
        const timeframes = [`${currentYear}`, 'latest', 'updated', 'new', 'modern', 'trending'];
        const platforms = ['youtube', 'online', 'digital', 'video'];
        const benefits = ['easy', 'simple', 'fast', 'effective', 'proven', 'quick', 'step by step', 'ultimate'];
        
        let tags: string[] = [];
        
        // Basic keyword and variations
        tags.push(baseKeyword);
        if (keywordParts.length > 1) {
          // Add individual words from multi-word keywords
          tags = tags.concat(keywordParts.filter(part => part.length > 3));
        }
        
        // Add common YouTube tag formats
        commonPrefixes.forEach(prefix => {
          if (!baseKeyword.includes(prefix)) {
            tags.push(`${prefix} ${baseKeyword}`);
          }
        });
        
        commonSuffixes.forEach(suffix => {
          if (!baseKeyword.includes(suffix)) {
            tags.push(`${baseKeyword} ${suffix}`);
          }
        });
        
        // Add content type tags
        contentTypes.forEach(type => {
          if (!tags.some(tag => tag === `${baseKeyword} ${type}`)) {
            tags.push(`${baseKeyword} ${type}`);
          }
        });
        
        // Add qualifier + keyword combinations
        qualifiers.forEach(qualifier => {
          if (!baseKeyword.includes(qualifier)) {
            tags.push(`${qualifier} ${baseKeyword}`);
          }
        });
        
        // Add keyword + timeframe combinations
        timeframes.forEach(time => {
          tags.push(`${baseKeyword} ${time}`);
        });
        
        // Add platform-specific tags
        platforms.forEach(platform => {
          if (!baseKeyword.includes(platform)) {
            tags.push(`${baseKeyword} ${platform}`);
          }
        });
        
        // Add benefit-focused tags
        benefits.forEach(benefit => {
          if (!baseKeyword.includes(benefit)) {
            tags.push(`${benefit} ${baseKeyword}`);
          }
        });
        
        // Special combinations
        tags.push(`how to ${baseKeyword} in ${currentYear}`);
        tags.push(`learn ${baseKeyword} step by step`);
        tags.push(`${baseKeyword} for beginners`);
        tags.push(`advanced ${baseKeyword} techniques`);
        
        // Make tags unique and limit to 30
        return [...new Set(tags)]
          .filter(tag => tag.trim() !== '')  // Remove empty tags
          .map(tag => tag.toLowerCase())     // Lowercase all tags
          .slice(0, 30);                     // Limit to 30 tags
      };
      
      // Generate logo description
      const generateLogoDescription = (keyword: string): string => {
        const concepts = [
          "minimalist", "modern", "geometric", "abstract", "3D", "vintage", 
          "flat design", "gradient", "illustrated", "dynamic"
        ];
        const colors = [
          "blue and red", "green and gold", "purple and teal", "black and white", 
          "vibrant multicolor", "earth tones", "pastel", "neon", "monochromatic"
        ];
        
        const randomConcept = concepts[Math.floor(Math.random() * concepts.length)];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        
        return `A ${randomConcept} logo for "${keyword}" using ${randomColor} colors with a professional and memorable design that reflects the topic's essence.`;
      };
      
      // Mock response
      const mockContent = {
        title: `${keyword.toUpperCase()} in ${new Date().getFullYear()} - Complete Guide (Tips & Tricks)`,
        description: `Learn everything about ${keyword} with our comprehensive guide for ${new Date().getFullYear()}. We cover all the essential tips, tricks, and strategies to help you master ${keyword} and achieve better results. Perfect for beginners and experts alike!`,
        tags: generateTags(keyword),
        logoDescription: generateLogoDescription(keyword)
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
                <h3 className="font-semibold text-lg">🎨 Logo Description</h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => copyToClipboard(generatedContent.logoDescription || '', 'Logo Description')}
                  className="text-primary-500 hover:text-primary-600 hover:bg-primary-50"
                >
                  Copy
                </Button>
              </div>
              <div className="p-3 bg-gray-50 rounded-md border border-gray-200">
                <p className="text-gray-700">{generatedContent.logoDescription}</p>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-lg">🔖 SEO Tags (30)</h3>
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
