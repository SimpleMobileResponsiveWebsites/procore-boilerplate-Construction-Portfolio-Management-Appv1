import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import PortfolioList from './components/PortfolioList';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <PortfolioList />
      </main>
    </div>
  );
};

export default App;
