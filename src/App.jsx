import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import PresentationPage from './pages/PresentationPage';
import VisualizationHub from './pages/VisualizationHub';
import ComparisonPlayground from './pages/ComparisonPlayground';

export default function App() {
  const [activeTab, setActiveTab] = useState('presentation');

  const renderActivePage = () => {
    switch (activeTab) {
      case 'presentation':
        return <PresentationPage />;
      case 'visualizations':
        return <VisualizationHub />;
      case 'playground':
        return <ComparisonPlayground />;
      default:
        return <PresentationPage />;
    }
  };

  return (
    <div className="app-container">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="main-content">
        {renderActivePage()}
      </main>
    </div>
  );
}
