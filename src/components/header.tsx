import React from 'react';
import { FaChevronDown } from 'react-icons/fa';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="flex items-center">
        <img src="/ht-logo.png" alt="HT Logo" className="h-8 mr-4" />
        <h1 className="text-xl font-bold">Henry Carlson Company</h1>
      </div>
      <div className="flex items-center">
        <span className="mr-2">Select a project</span>
        <FaChevronDown />
      </div>
    </header>
  );
};

export default Header;
