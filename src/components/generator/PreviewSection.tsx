
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface PreviewSectionProps {
  title: string;
  description: string;
}

const PreviewSection: React.FC<PreviewSectionProps> = ({ title, description }) => {
  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold mb-4">YouTube Search Preview</h2>
      <Card className="overflow-hidden">
        <CardContent className="p-0">
          <div className="bg-white p-4 border-b border-gray-200">
            <div className="flex items-center space-x-4">
              <div className="h-9 w-9 bg-red-600 rounded-full flex items-center justify-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M15.964 4.634a2 2 0 0 0-2.811-.389L4.034 10.003a2 2 0 0 0-.389 2.811l.09.09 7.282 7.283a3 3 0 0 0 4.242 0l2.121-2.121a3 3 0 0 0 0-4.243L12.1 8.542l.389-.389 3.086 3.086.39-.389-3.086-3.086.778-.778.778.778.389-.39-.778-.778.389-.389.778.778.39-.39-.779-.778z" />
                </svg>
              </div>
              <span className="font-medium">YouTube</span>
            </div>
          </div>
          <div className="bg-white p-4">
            <div className="flex space-x-4">
              <div className="w-40 h-24 bg-gray-200 rounded-md flex-shrink-0 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-gray-400">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-blue-600 mb-1">{title || 'Video Title Will Appear Here'}</h3>
                <div className="flex items-center text-gray-500 text-sm mb-1">
                  <span>YouTube</span>
                  <span className="mx-1">•</span>
                  <span>Channel Name</span>
                </div>
                <p className="text-sm text-gray-600 line-clamp-2">
                  {description || 'Your video description will appear here after generation...'}
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      <p className="text-gray-500 text-sm mt-2">
        This is a preview of how your video might appear in YouTube search results.
      </p>
    </div>
  );
};

export default PreviewSection;
