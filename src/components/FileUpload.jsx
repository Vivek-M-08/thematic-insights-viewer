import React, { useState, useRef } from 'react';
import { Upload, FileCheck, AlertCircle } from 'lucide-react';

export default function FileUpload({ label, onFileSelect, file }) {
  const [dragActive, setDragActive] = useState(false);
  const inputRef = useRef(null);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const selectedFile = e.dataTransfer.files[0];
      if (selectedFile.name.endsWith('.csv')) {
        onFileSelect(selectedFile);
      } else {
        alert('Please drop a valid CSV file!');
      }
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      onFileSelect(e.target.files[0]);
    }
  };

  const onButtonClick = () => {
    inputRef.current.click();
  };

  return (
    <div 
      onDragEnter={handleDrag}
      onDragLeave={handleDrag}
      onDragOver={handleDrag}
      onDrop={handleDrop}
      onClick={onButtonClick}
      className={`upload-zone glass-panel ${dragActive ? 'drag-active' : ''} ${file ? 'file-loaded' : ''}`}
    >
      <input 
        ref={inputRef}
        type="file" 
        className="hidden-file-input" 
        accept=".csv"
        onChange={handleChange}
      />
      
      <div className="upload-zone-content">
        {file ? (
          <>
            <FileCheck size={40} className="upload-icon loaded" />
            <p className="file-name">{file.name}</p>
            <p className="file-size">{(file.size / 1024).toFixed(1)} KB</p>
            <span className="badge badge-approved">CSV Ready</span>
          </>
        ) : (
          <>
            <Upload size={40} className="upload-icon" />
            <p className="upload-label">{label}</p>
            <p className="upload-subtext">Drag & drop or click to browse CSV</p>
          </>
        )}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        .upload-zone {
          border: 2px dashed var(--border-color);
          background: var(--bg-card);
          border-radius: 16px;
          padding: 2.5rem 1.5rem;
          text-align: center;
          cursor: pointer;
          transition: all var(--transition-speed);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 180px;
        }

        .upload-zone:hover {
          border-color: var(--color-primary);
          background: rgba(59, 130, 246, 0.03);
        }

        .upload-zone.drag-active {
          border-color: var(--color-primary);
          background: rgba(59, 130, 246, 0.08);
          transform: scale(0.98);
        }

        .upload-zone.file-loaded {
          border-style: solid;
          border-color: var(--color-success);
          background: rgba(16, 185, 129, 0.02);
        }

        .hidden-file-input {
          display: none;
        }

        .upload-zone-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
        }

        .upload-icon {
          color: var(--text-muted);
          transition: color var(--transition-speed);
        }

        .upload-zone:hover .upload-icon {
          color: var(--color-primary);
        }

        .upload-icon.loaded {
          color: var(--color-success);
        }

        .upload-label {
          font-weight: 600;
          color: var(--text-primary);
          font-size: 1rem;
        }

        .upload-subtext {
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        .file-name {
          font-weight: 600;
          color: var(--text-primary);
          font-size: 0.9rem;
          max-width: 220px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .file-size {
          font-size: 0.75rem;
          color: var(--text-muted);
        }
      `}} />
    </div>
  );
}
