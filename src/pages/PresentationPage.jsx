import React, { useState } from 'react';
import { Play, ShieldAlert, Lightbulb, CheckCircle, Database, GitMerge, FileText, Settings, Compass } from 'lucide-react';

export default function PresentationPage() {
  const [activeChapter, setActiveChapter] = useState('summary');
  const [activeStep, setActiveStep] = useState(0);

  const chapters = [
    { id: 'summary', title: 'Executive Summary', icon: Compass },
    { id: 'pipeline', title: 'The Core Pipeline', icon: GitMerge },
    { id: 'dashboard', title: 'Dashboard Explorer', icon: Database },
    { id: 'demo', title: 'Demo Guide & Pro Tips', icon: Settings },
  ];

  const pipelineSteps = [
    {
      title: 'Step 1: Pre-processing & Splitting',
      description: 'Filters out non-English feedback and splits pipe-separated sentences (e.g. "1. Lack of toilets | 2. Distance of school is far") into individual, clean objective statements to ensure precise mapping.',
      icon: FileText,
      badge: 'Data Cleansing'
    },
    {
      title: 'Step 2: Multi-Vector Semantic Mapping',
      description: 'Computes mathematical representation vectors (Embeddings) of the text. Approved themes are represented as multi-vectors consisting of the theme\'s description, keywords, and examples. Mapped instantly if similarity exceeds threshold.',
      icon: GitMerge,
      badge: 'Vector Search'
    },
    {
      title: 'Step 3: TriTopic Clustering',
      description: 'Any feedback that does not match an approved theme falls into the Unmapped Pool. TriTopic automatically processes this pool, identifies recurring patterns, and groups them into new candidate clusters.',
      icon: LayersIcon, // custom map
      badge: 'Unsupervised Clustering'
    },
    {
      title: 'Step 4: LLM-Powered Draft Naming',
      description: 'Google Gemini acts as an educational researcher: reviews samples from the cluster, generates a concise name, writes a comprehensive definition detailing semantic boundaries, and extracts keywords.',
      icon: CheckCircle,
      badge: 'AI Labeling & Synthesis'
    }
  ];

  function LayersIcon(props) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <path d="m12 3-10 5 10 5 10-5-10-5Z" />
        <path d="m2 17 10 5 10-5" />
        <path d="m2 12 10 5 10-5" />
      </svg>
    );
  }

  const renderContent = () => {
    switch (activeChapter) {
      case 'summary':
        return (
          <div className="chapter-content fade-in-slide">
            <h1 className="chapter-title">📊 AI-Powered Thematic Analysis System</h1>
            <p className="chapter-subtitle">Interactive Explorer for Topic Extraction, Semantic Mapping, and Thematic Clusters</p>
            
            <div className="glass-panel summary-hero">
              <h3>Executive Summary</h3>
              <p>
                In educational research and community feedback, analyzing thousands of written statements manually is slow and inconsistent.
                Our system combines <strong>Sentence Transformers (semantic embeddings)</strong>, <strong>TriTopic (advanced topic clustering)</strong>,
                and <strong>Large Language Models (LLMs)</strong> to organize raw text data into an organized thematic structure.
              </p>
            </div>

            <div className="glass-panel pipeline-flow-card">
              <h3>Visual Flowchart</h3>
              <div className="flow-steps-grid">
                <div className="flow-node">
                  <div className="node-box">Raw CSV Objectives</div>
                </div>
                <div className="flow-arrow">⬇️</div>
                <div className="flow-node">
                  <div className="node-box accent">1. English Filter & Splitter</div>
                </div>
                <div className="flow-arrow">⬇️</div>
                <div className="flow-node">
                  <div className="node-box">Clean English Statements</div>
                </div>
                <div className="flow-arrow">⬇️</div>
                <div className="flow-split">
                  <div className="split-branch">
                    <div className="branch-label">Cosine Similarity &ge; Threshold</div>
                    <div className="node-box success">2. Mapped to Approved Themes</div>
                  </div>
                  <div className="split-branch">
                    <div className="branch-label">Similarity &lt; Threshold</div>
                    <div className="node-box warning">3. TriTopic Topic Clustering</div>
                    <div className="flow-arrow" style={{margin: '0.5rem 0'}}>⬇️</div>
                    <div className="node-box warning">4. LLM Naming & Definition</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case 'pipeline':
        return (
          <div className="chapter-content fade-in-slide">
            <h1 className="chapter-title">🛠️ The Core Pipeline</h1>
            <p className="chapter-subtitle">Bridging raw data annotation with semantic discovery and LLM labeling</p>

            <div className="pipeline-wizard glass-panel">
              <div className="wizard-tabs">
                {pipelineSteps.map((step, idx) => {
                  const StepIcon = step.icon;
                  const isCurrent = activeStep === idx;
                  return (
                    <button
                      key={idx}
                      onClick={() => setActiveStep(idx)}
                      className={`wizard-tab-btn ${isCurrent ? 'active' : ''}`}
                    >
                      <div className="tab-btn-num">{idx + 1}</div>
                      <span>{step.title.split(':')[0]}</span>
                    </button>
                  );
                })}
              </div>

              <div className="wizard-pane">
                {(() => {
                  const current = pipelineSteps[activeStep];
                  const CurrentIcon = current.icon;
                  return (
                    <div className="wizard-step-details fade-in-slide" key={activeStep}>
                      <div className="step-header">
                        <div className="step-icon-wrapper">
                          <CurrentIcon size={24} />
                        </div>
                        <div>
                          <span className="step-badge">{current.badge}</span>
                          <h3>{current.title}</h3>
                        </div>
                      </div>
                      <p className="step-desc">{current.description}</p>
                    </div>
                  );
                })()}
              </div>
            </div>

            <div className="glass-panel" style={{ marginTop: '1rem' }}>
              <h3>Pipeline Highlights</h3>
              <ul className="styled-list">
                <li><strong>Dynamic Splitting:</strong> Complex multiple statements split using delimiter token matching to evaluate statements separately.</li>
                <li><strong>Multi-Vector Matching:</strong> Semantic profiles representing themes by descriptions and examples to resolve synonyms.</li>
                <li><strong>Gemini Refinement:</strong> Generates academic-grade definitions outlining what is inside or outside the theme's boundary.</li>
              </ul>
            </div>
          </div>
        );
      case 'dashboard':
        return (
          <div className="chapter-content fade-in-slide">
            <h1 className="chapter-title">📊 Dashboard Explorer</h1>
            <p className="chapter-subtitle">Interactive research utilities configured for the product portal</p>
            
            <div className="dashboard-grid">
              <div className="glass-panel dash-feature-card">
                <div className="dash-icon-circle">📁</div>
                <h4>Themes Explorer</h4>
                <p>Browse approved and draft themes in an interactive table. Select themes to inspect mapped statements and scores.</p>
              </div>
              <div className="glass-panel dash-feature-card">
                <div className="dash-icon-circle">🗺️</div>
                <h4>2D Document Map</h4>
                <p>Interactive projection mapping objectives in 2D space based on embeddings. Hover over points to read raw statements.</p>
              </div>
              <div className="glass-panel dash-feature-card">
                <div className="dash-icon-circle">🌳</div>
                <h4>Topic Hierarchy Dendrogram</h4>
                <p>Hierarchical clustering tree representing the relative cosine distances between theme centroid embeddings.</p>
              </div>
              <div className="glass-panel dash-feature-card">
                <div className="dash-icon-circle">🔥</div>
                <h4>Centroid Similarity Heatmap</h4>
                <p>Heatmap matrix comparing cosine similarity overlaps between different topic and theme centroid embeddings.</p>
              </div>
            </div>
          </div>
        );
      case 'demo':
        return (
          <div className="chapter-content fade-in-slide">
            <h1 className="chapter-title">⚙️ Demo Guide & Pro Tips</h1>
            <p className="chapter-subtitle">Practical concepts to demonstrate and pipeline configurations</p>

            <div className="glass-panel" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <h3>1. The Power of the Similarity Threshold</h3>
              <p>
                Explain how changing the similarity threshold (e.g., from 0.90 to 0.60) affects mappings:
              </p>
              <div className="threshold-demo-box">
                <div className="threshold-card high">
                  <div className="card-badge">Strict</div>
                  <h4>High Threshold (0.90)</h4>
                  <p>Extremely strict mapping. Approved themes get very few matches. Many specific draft themes are created.</p>
                </div>
                <div className="threshold-card moderate">
                  <div className="card-badge">Balanced</div>
                  <h4>Moderate Threshold (0.60 - 0.65)</h4>
                  <p>Generous mapping. Captures broader context, resulting in fewer draft themes and higher approved theme counts.</p>
                </div>
              </div>

              <h3>2. Pro Tips for Curation</h3>
              <div className="alert-banner success">
                <Lightbulb size={24} className="alert-banner-icon" />
                <div className="alert-banner-content">
                  <h4>💡 Pro Tip for Curating Approved Themes</h4>
                  <p>
                    If statements are failing to map to an Approved Theme, add 8-15 diverse example sentences directly into the theme's definition. The multi-vector matcher uses these examples as "anchors", drastically improving recognition accuracy without code changes!
                  </p>
                </div>
              </div>

              <div className="alert-banner info">
                <ShieldAlert size={24} className="alert-banner-icon" />
                <div className="alert-banner-content">
                  <h4>📝 Note: UUID Assignment</h4>
                  <p>
                    All draft themes generated offline in Kaggle are given blank IDs in the review CSV. When they are approved and imported, the database automatically assigns them a persistent UUID.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="presentation-layout">
      <div className="presentation-nav">
        {chapters.map((chap) => {
          const Icon = chap.icon;
          const isActive = activeChapter === chap.id;
          return (
            <button
              key={chap.id}
              onClick={() => setActiveChapter(chap.id)}
              className={`chap-btn ${isActive ? 'active' : ''}`}
            >
              <Icon size={18} />
              <span>{chap.title}</span>
            </button>
          );
        })}
      </div>

      <div className="presentation-content-area">
        {renderContent()}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .presentation-layout {
          display: flex;
          gap: 2rem;
          height: calc(100vh - 5rem);
        }

        .presentation-nav {
          width: 240px;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          flex-shrink: 0;
          background: rgba(255, 255, 255, 0.02);
          padding: 1rem;
          border-radius: 16px;
          border: 1px solid var(--border-color);
          height: fit-content;
        }

        .chap-btn {
          width: 100%;
          background: transparent;
          border: 1px solid transparent;
          color: var(--text-secondary);
          padding: 0.75rem 1rem;
          font-size: 0.9rem;
          font-weight: 500;
          border-radius: 10px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          transition: all var(--transition-speed);
          text-align: left;
        }

        .chap-btn:hover {
          background: rgba(255, 255, 255, 0.04);
          color: var(--text-primary);
        }

        .chap-btn.active {
          background: var(--color-primary);
          color: #ffffff;
          font-weight: 600;
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.2);
        }

        .presentation-content-area {
          flex: 1;
          overflow-y: auto;
          padding-right: 0.5rem;
        }

        .chapter-content {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .chapter-title {
          font-family: var(--font-display);
          font-size: 2.25rem;
          font-weight: 800;
          color: var(--text-primary);
          margin: 0;
        }

        .chapter-subtitle {
          font-size: 1rem;
          color: var(--text-secondary);
          margin-top: -1rem;
        }

        .summary-hero h3 {
          margin-bottom: 0.75rem;
          color: var(--color-primary);
        }

        .summary-hero p {
          font-size: 1.05rem;
          line-height: 1.6;
        }

        .pipeline-flow-card h3 {
          margin-bottom: 1.5rem;
        }

        .flow-steps-grid {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.75rem;
          max-width: 600px;
          margin: 0 auto;
        }

        .node-box {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-color);
          border-radius: 10px;
          padding: 0.75rem 1.5rem;
          font-family: var(--font-display);
          font-weight: 600;
          font-size: 0.95rem;
          text-align: center;
          min-width: 250px;
          box-shadow: var(--shadow-inset);
        }

        .node-box.accent {
          border-color: var(--color-accent);
          color: var(--color-accent);
          background: rgba(99, 102, 241, 0.05);
        }

        .node-box.success {
          border-color: var(--color-success);
          color: var(--color-success);
          background: var(--color-success-bg);
        }

        .node-box.warning {
          border-color: var(--color-warning);
          color: var(--color-warning);
          background: var(--color-warning-bg);
        }

        .flow-arrow {
          font-size: 1.25rem;
        }

        .flow-split {
          display: flex;
          gap: 2rem;
          width: 100%;
          justify-content: center;
          margin-top: 0.5rem;
        }

        .split-branch {
          display: flex;
          flex-direction: column;
          align-items: center;
          flex: 1;
        }

        .branch-label {
          font-size: 0.75rem;
          color: var(--text-muted);
          margin-bottom: 0.5rem;
          font-weight: 600;
          text-align: center;
          min-height: 18px;
        }

        .pipeline-wizard {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          padding: 1.5rem;
        }

        .wizard-tabs {
          display: flex;
          border-bottom: 1px solid var(--border-color);
          gap: 0.5rem;
          overflow-x: auto;
          padding-bottom: 0.5rem;
        }

        .wizard-tab-btn {
          background: transparent;
          border: none;
          color: var(--text-secondary);
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1rem;
          cursor: pointer;
          border-radius: 8px;
          font-size: 0.9rem;
          font-weight: 500;
          transition: all var(--transition-speed);
          white-space: nowrap;
        }

        .wizard-tab-btn:hover {
          background: rgba(255, 255, 255, 0.03);
          color: var(--text-primary);
        }

        .wizard-tab-btn.active {
          background: rgba(59, 130, 246, 0.1);
          color: var(--color-primary);
          font-weight: 600;
        }

        .tab-btn-num {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: var(--border-color);
          color: var(--text-secondary);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.75rem;
          font-weight: 700;
        }

        .wizard-tab-btn.active .tab-btn-num {
          background: var(--color-primary);
          color: #ffffff;
        }

        .wizard-pane {
          min-height: 140px;
        }

        .wizard-step-details {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .step-header {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .step-icon-wrapper {
          background: rgba(59, 130, 246, 0.1);
          color: var(--color-primary);
          padding: 0.75rem;
          border-radius: 12px;
          border: 1px solid rgba(59, 130, 246, 0.2);
        }

        .step-badge {
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-muted);
          font-weight: 700;
        }

        .step-desc {
          font-size: 0.95rem;
          line-height: 1.6;
          color: var(--text-secondary);
        }

        .styled-list {
          padding-left: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .styled-list li {
          color: var(--text-secondary);
          font-size: 0.925rem;
        }

        .dashboard-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
        }

        .dash-feature-card {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .dash-icon-circle {
          font-size: 2rem;
          margin-bottom: 0.5rem;
        }

        .threshold-demo-box {
          display: flex;
          gap: 1.5rem;
          flex-wrap: wrap;
        }

        .threshold-card {
          flex: 1;
          min-width: 250px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border-color);
          border-radius: 12px;
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .threshold-card.high {
          border-left: 4px solid var(--color-accent);
        }

        .threshold-card.moderate {
          border-left: 4px solid var(--color-primary);
        }

        .card-badge {
          font-size: 0.7rem;
          font-weight: 700;
          text-transform: uppercase;
          color: var(--text-muted);
        }
      `}} />
    </div>
  );
}
