import React, { useState, useEffect } from 'react';

export default function VisualizationIframe({ threshold, chartType }) {
  const [loading, setLoading] = useState(true);

  const fileMap = {
    docMap: 'document_map.html',
    hierarchy: 'hierarchy_tree.html',
    similarity: 'topic_similarity.html'
  };

  const srcPath = `/visualizations/${threshold}_review_visualizations/${fileMap[chartType]}`;

  useEffect(() => {
    setLoading(true);
  }, [threshold, chartType]);

  return (
    <div className="iframe-container glass-panel">
      {loading && (
        <div className="iframe-loader">
          <div className="loader-spinner" />
          <p>Rendering interactive visualization...</p>
        </div>
      )}
      <iframe
        src={srcPath}
        title={`Visualizer - Threshold ${threshold} - ${chartType}`}
        className={`viz-iframe ${loading ? 'hidden' : ''}`}
        sandbox="allow-scripts allow-downloads"
        onLoad={() => setLoading(false)}
      />

      <style dangerouslySetInnerHTML={{ __html: `
        .iframe-container {
          position: relative;
          width: 100%;
          height: 750px;
          padding: 0;
          overflow: hidden;
          background: #ffffff;
          border-radius: 16px;
        }

        .iframe-loader {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: var(--bg-card);
          backdrop-filter: var(--glass-blur);
          z-index: 5;
          gap: 1rem;
        }

        .iframe-loader p {
          font-size: 0.95rem;
          color: var(--text-secondary);
        }

        .viz-iframe {
          width: 100%;
          height: 100%;
          border: none;
          background: #ffffff;
          transition: opacity 0.3s ease;
        }

        .viz-iframe.hidden {
          opacity: 0;
        }
      `}} />
    </div>
  );
}
