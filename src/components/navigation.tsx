import React from 'react';

const Navigation: React.FC = () => {
  return (
    <nav className="bg-yellow-500 p-2">
      <ul className="flex space-x-4">
        <li className="font-bold">Portfolio</li>
        <li>Documents</li>
        <li>Welcome to Procore</li>
      </ul>
    </nav>
  );
};

export default Navigation;
