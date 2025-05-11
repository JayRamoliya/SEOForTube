
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-auto">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-primary-400 to-primary-600 text-white rounded-lg h-8 w-8 flex items-center justify-center">
                <span className="font-bold text-lg">Y</span>
              </div>
              <span className="font-bold text-xl">YTubeSEO</span>
            </Link>
            <p className="mt-4 text-sm text-gray-600">
              Generate SEO-optimized titles, descriptions, and tags for your YouTube videos with AI.
            </p>
          </div>
          
          <div>
            <h3 className="font-medium text-sm mb-4 text-gray-900">Product</h3>
            <ul className="space-y-3">
              <li><Link to="/generator" className="text-sm text-gray-600 hover:text-primary-500">Generator</Link></li>
              <li><Link to="/pricing" className="text-sm text-gray-600 hover:text-primary-500">Pricing</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-sm mb-4 text-gray-900">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-sm text-gray-600 hover:text-primary-500">About</Link></li>
              <li><Link to="/contact" className="text-sm text-gray-600 hover:text-primary-500">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-sm mb-4 text-gray-900">Legal</h3>
            <ul className="space-y-3">
              <li><Link to="/privacy" className="text-sm text-gray-600 hover:text-primary-500">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-sm text-gray-600 hover:text-primary-500">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 text-center">
            © {new Date().getFullYear()} YTubeSEO. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
