
import React from 'react';

const AboutContent: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">About YTubeSEO</h1>
        
        <div className="prose lg:prose-lg">
          <p className="text-xl text-gray-700 mb-6">
            YTubeSEO was created with one mission: to help content creators thrive on YouTube by mastering the platform's search algorithm.
          </p>
          
          <h2 className="text-2xl font-bold mt-10 mb-4">Our Story</h2>
          <p className="text-gray-700 mb-4">
            As YouTube creators ourselves, we experienced firsthand the challenge of getting videos discovered. Despite creating great content, our videos weren't reaching the audience they deserved. We realized that mastering YouTube SEO was the missing piece.
          </p>
          <p className="text-gray-700 mb-4">
            After years of research, testing, and analyzing thousands of top-performing videos, we developed a deep understanding of YouTube's ranking factors. We then built YTubeSEO to share this knowledge and help other creators overcome the same obstacles we faced.
          </p>
          
          <h2 className="text-2xl font-bold mt-10 mb-4">Our Mission</h2>
          <p className="text-gray-700 mb-4">
            We believe that great content deserves to be seen. Our mission is to level the playing field on YouTube by giving creators of all sizes access to advanced SEO tools that were previously only available to large channels and media companies.
          </p>
          <p className="text-gray-700 mb-4">
            By democratizing YouTube SEO knowledge, we aim to help passionate creators build sustainable channels and reach the audiences that will value their content the most.
          </p>
          
          <h2 className="text-2xl font-bold mt-10 mb-4">Our Technology</h2>
          <p className="text-gray-700 mb-4">
            YTubeSEO combines cutting-edge AI with YouTube-specific SEO expertise. Our algorithms analyze patterns from millions of successful videos to generate optimized titles, descriptions, and tags tailored to your specific content.
          </p>
          <p className="text-gray-700 mb-4">
            We continuously update our systems to keep pace with YouTube's evolving algorithm, ensuring our recommendations remain effective in an ever-changing landscape.
          </p>
          
          <div className="bg-primary-50 border border-primary-100 rounded-lg p-6 mt-10">
            <h3 className="text-xl font-bold mb-3">Join Our Community</h3>
            <p className="text-gray-700">
              Beyond our tools, we're building a community of YouTube creators who share insights and support each other. Follow us on social media to join the conversation and get the latest YouTube SEO tips.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
