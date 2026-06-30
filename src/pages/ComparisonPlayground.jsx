import React, { useState, useEffect } from 'react';
import FileUpload from '../components/FileUpload';
import { runComparison, parseCSVLines } from '../utils/comparisonEngine';
import { RefreshCw, Play, BarChart2, ShieldAlert, Sparkles, HelpCircle } from 'lucide-react';

export default function ComparisonPlayground() {
  const [localFile, setLocalFile] = useState(null);
  const [llmFile, setLlmFile] = useState(null);
  
  const [localText, setLocalText] = useState('');
  const [llmText, setLlmText] = useState('');
  
  const [approvedThemes, setApprovedThemes] = useState([]);
  const [metrics, setMetrics] = useState(null);
  const [calculating, setCalculating] = useState(false);
  const [demoLoaded, setDemoLoaded] = useState(false);

  // Load Approved Themes on Mount
  useEffect(() => {
    fetch('/approved_themes.json')
      .then((res) => (res.ok ? res.json() : []))
      .then((data) => {
        const names = data.map((t) => t.name);
        setApprovedThemes(names);
      })
      .catch(() => setApprovedThemes([]));
  }, []);

  // Run comparison when text for both files is loaded
  useEffect(() => {
    if (localText && llmText && approvedThemes.length > 0) {
      setCalculating(true);
      // Run in timeout to prevent UI freeze for large files
      setTimeout(() => {
        const results = runComparison(localText, llmText, approvedThemes);
        setMetrics(results);
        setCalculating(false);
      }, 300);
    } else {
      setMetrics(null);
    }
  }, [localText, llmText, approvedThemes]);

  // Read file contents helper
  const handleLocalSelect = (file) => {
    setLocalFile(file);
    setDemoLoaded(false);
    const reader = new FileReader();
    reader.onload = (e) => {
      setLocalText(e.target.result || '');
    };
    reader.readAsText(file);
  };

  const handleLlmSelect = (file) => {
    setLlmFile(file);
    setDemoLoaded(false);
    const reader = new FileReader();
    reader.onload = (e) => {
      setLlmText(e.target.result || '');
    };
    reader.readAsText(file);
  };

  // Load Workspace Demo CSVs
  const loadDemoData = () => {
    setCalculating(true);
    setDemoLoaded(true);
    
    // Set dummy file objects for visual state
    setLocalFile({ name: 'tritopic_review_0.60.csv (Demo)', size: 8549512 });
    setLlmFile({ name: 'OUTPUT_LLM.csv (Demo)', size: 17562761 });

    Promise.all([
      fetch('/samples/tritopic_review_0.60.csv').then((res) => res.text()),
      fetch('/samples/OUTPUT_LLM.csv').then((res) => res.text()),
    ])
      .then(([localCsvText, llmCsvText]) => {
        setLocalText(localCsvText);
        setLlmText(llmCsvText);
      })
      .catch((err) => {
        alert('Failed to load demo files from public directory!');
        setLocalFile(null);
        setLlmFile(null);
        setCalculating(false);
      });
  };

  const resetUploader = () => {
    setLocalFile(null);
    setLlmFile(null);
    setLocalText('');
    setLlmText('');
    setMetrics(null);
    setDemoLoaded(false);
  };

  const getMetricIcon = (id) => {
    switch (id) {
      case 'total-local': return '📁';
      case 'total-llm': return '🤖';
      case 'same-challenges': return '✅';
      case 'diff-challenges': return '🔄';
      case 'approved-local-not-llm': return '⚠️';
      case 'approved-llm-draft-local': return '⚡';
      case 'draft-themes-local': return '💡';
      default: return '📈';
    }
  };

  return (
    <div className="playground-container fade-in-slide">
      <div className="playground-header">
        <h1>⚙️ Comparison Playground</h1>
        <p>Compare local clustering outputs and LLM baselines in real-time inside your browser</p>
      </div>

      {/* Control Buttons */}
      <div className="glass-panel playground-controls">
        <div className="controls-description">
          <Sparkles size={18} className="sparkle-icon" />
          <p>
            Upload your CSV files to compare semantic mapping alignment, or click <strong>Load Demo Data</strong> to test with default datasets from your workspace.
          </p>
        </div>
        <div className="controls-actions">
          <button onClick={loadDemoData} className="btn-primary" disabled={calculating}>
            <Play size={16} />
            <span>Load Demo Data</span>
          </button>
          <button onClick={resetUploader} className="btn-secondary" disabled={calculating}>
            <RefreshCw size={16} />
            <span>Clear Files</span>
          </button>
        </div>
      </div>

      {/* Upload Zone Grid */}
      <div className="upload-grid">
        <div className="upload-col">
          <FileUpload 
            label="Local Output CSV (Tritopic)" 
            onFileSelect={handleLocalSelect} 
            file={localFile} 
          />
        </div>
        <div className="upload-col">
          <FileUpload 
            label="LLM Output CSV (Baseline)" 
            onFileSelect={handleLlmSelect} 
            file={llmFile} 
          />
        </div>
      </div>

      {/* Output Results Dashboard */}
      {calculating && (
        <div className="glass-panel loader-container">
          <div className="loader-spinner" />
          <p>Analyzing datasets and evaluating keys in memory...</p>
        </div>
      )}

      {!calculating && metrics && (
        <div className="comparison-results-panel fade-in-slide">
          <div className="results-header">
            <BarChart2 size={20} />
            <h2>Evaluation Analytics Summary</h2>
            {demoLoaded && <span className="demo-tag badge badge-approved">Demo Workspace Mode</span>}
          </div>

          <div className="metrics-summary-grid">
            {metrics.map((m) => {
              let cardClass = '';
              if (m.id === 'same-challenges') cardClass = 'success';
              else if (m.id === 'diff-challenges') cardClass = 'warning';
              else if (m.id.startsWith('approved-')) cardClass = 'accent';

              return (
                <div key={m.id} className={`metric-card glass-panel ${cardClass}`}>
                  <span className="metric-label">
                    {getMetricIcon(m.id)} {m.metric}
                  </span>
                  <span className="metric-value">{m.value.toLocaleString()}</span>
                </div>
              );
            })}
          </div>

          <div className="glass-panel results-explanation">
            <div className="explanation-header">
              <HelpCircle size={18} />
              <h3>Understanding the Metrics</h3>
            </div>
            <div className="explanation-body">
              <ul>
                <li>
                  <strong>Alignment Index (Same Challenges):</strong> Number of challenge statements matching exactly between local and LLM outputs, which validates pre-processing integrity.
                </li>
                <li>
                  <strong>Symmetric Difference:</strong> Statements present in one output file but absent in the other (often due to threshold filtering or pre-processing splits).
                </li>
                <li>
                  <strong>Approved theme locally, but not Approved in LLM:</strong> Challenges mapped to approved themes locally that the LLM missed or mapped to drafts (e.g. Other/Unmapped). This demonstrates the superior recall of multi-vector matching over LLM direct classification.
                </li>
                <li>
                  <strong>Approved in LLM, but Draft locally:</strong> Challenges that the LLM labeled as approved but the local model clustered as a draft due to similarity scores falling below strict threshold settings.
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}

      <style dangerouslySetInnerHTML={{ __html: `
        .playground-container {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .playground-header h1 {
          color: var(--text-primary);
        }

        .playground-controls {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 2rem;
          flex-wrap: wrap;
        }

        .controls-description {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex: 1;
          min-width: 300px;
        }

        .sparkle-icon {
          color: var(--color-primary);
          flex-shrink: 0;
        }

        .controls-actions {
          display: flex;
          gap: 1rem;
        }

        .upload-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
        }

        @media (max-width: 768px) {
          .upload-grid {
            grid-template-columns: 1fr;
          }
        }

        .comparison-results-panel {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .results-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .results-header h2 {
          font-size: 1.5rem;
          color: var(--text-primary);
        }

        .results-header .demo-tag {
          margin-left: 1rem;
        }

        .metrics-summary-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 1.5rem;
        }

        .results-explanation {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .explanation-header {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: var(--color-primary);
        }

        .explanation-header h3 {
          font-size: 1.1rem;
        }

        .explanation-body ul {
          padding-left: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .explanation-body li {
          font-size: 0.9rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        .explanation-body strong {
          color: var(--text-primary);
        }
      `}} />
    </div>
  );
}
