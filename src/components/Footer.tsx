import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 text-center">
      <div className="container mx-auto">
        <p className="text-sm">&copy; 2024 Your Company Name. All rights reserved.</p>
        <p className="text-sm mt-2">Contact us at support@example.com</p>
        <div className="flex justify-center mt-4">
          <a href="#" className="text-white hover:text-gray-300 mx-2">
            Facebook
          </a>
          <a href="#" className="text-white hover:text-gray-300 mx-2">
            Twitter
          </a>
          <a href="#" className="text-white hover:text-gray-300 mx-2">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

