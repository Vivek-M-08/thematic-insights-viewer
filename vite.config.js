import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'

// Helper function to scan assets inside public/visualizations folder
function syncWorkspaceAssets() {
  const rootDir = path.resolve(__dirname, '..');
  const publicDir = path.resolve(__dirname, 'public');
  const vizTargetDir = path.resolve(publicDir, 'visualizations');
  const samplesDir = path.resolve(publicDir, 'samples');

  // Create target dirs
  fs.mkdirSync(vizTargetDir, { recursive: true });
  fs.mkdirSync(samplesDir, { recursive: true });

  // 1. Scan vizTargetDir for thresholds
  const availableThresholds = [];
  try {
    const files = fs.readdirSync(vizTargetDir);
    const pattern = /^(\d+\.\d+)_review_visualizations$/;

    files.forEach((file) => {
      const filePath = path.join(vizTargetDir, file);
      if (fs.statSync(filePath).isDirectory()) {
        const match = file.match(pattern);
        if (match) {
          availableThresholds.push(match[1]);
        }
      }
    });

    // Sort descending
    availableThresholds.sort((a, b) => parseFloat(b) - parseFloat(a));
  } catch (err) {
    console.error('[Vite Sync] Error reading visualizations folders:', err);
  }

  // Fallback if none found
  if (availableThresholds.length === 0) {
    availableThresholds.push('0.90', '0.65', '0.60');
  }

  // Write thresholds.json
  fs.writeFileSync(path.join(publicDir, 'thresholds.json'), JSON.stringify(availableThresholds, null, 2));
  console.log(`[Vite Sync] Detected thresholds: ${availableThresholds.join(', ')}`);

  // 2. Sync approved_themes.json
  const approvedSrc = path.resolve(rootDir, '..', 'analytics-service', 'thematic_analysis', 'approved_themes.json');
  const approvedDestLocal = path.resolve(rootDir, 'approved_themes.json');
  const approvedDestPublic = path.resolve(publicDir, 'approved_themes.json');

  if (fs.existsSync(approvedSrc)) {
    fs.copyFileSync(approvedSrc, approvedDestPublic);
    fs.copyFileSync(approvedSrc, approvedDestLocal);
    console.log('[Vite Sync] Copied approved_themes.json from analytics-service.');
  } else if (fs.existsSync(approvedDestLocal)) {
    fs.copyFileSync(approvedDestLocal, approvedDestPublic);
    console.log('[Vite Sync] Copied approved_themes.json from root directory.');
  }

  // 3. Sync sample CSVs
  const csv060Src = path.join(vizTargetDir, '0.60_review_visualizations', 'tritopic_review.csv');
  if (fs.existsSync(csv060Src)) {
    fs.copyFileSync(csv060Src, path.join(samplesDir, 'tritopic_review_0.60.csv'));
  }
  const llmCsvSrc = path.join(rootDir, 'OUTPUT_LLM.csv');
  if (fs.existsSync(llmCsvSrc)) {
    fs.copyFileSync(llmCsvSrc, path.join(samplesDir, 'OUTPUT_LLM.csv'));
  }
}

// Run synchronization initially
syncWorkspaceAssets();

// Custom plugin to watch public/visualizations for new folders and re-sync
function workspaceSyncPlugin() {
  return {
    name: 'workspace-sync-plugin',
    configureServer(server) {
      const publicDir = path.resolve(__dirname, 'public');
      const vizTargetDir = path.resolve(publicDir, 'visualizations');
      
      // Watch visualizations directory for directory additions/removals
      server.watcher.add(vizTargetDir);

      // Watch approved_themes.json in root or analytics-service
      const rootDir = path.resolve(__dirname, '..');
      const approvedSrcWatch = path.resolve(rootDir, '..', 'analytics-service', 'thematic_analysis', 'approved_themes.json');
      const approvedLocalWatch = path.resolve(rootDir, 'approved_themes.json');
      server.watcher.add([approvedSrcWatch, approvedLocalWatch]);

      const handleFileChange = (file) => {
        if (file.includes('visualizations') || file.includes('approved_themes.json')) {
          console.log(`[Vite Sync] File updated: ${path.basename(file)}. Re-syncing config...`);
          syncWorkspaceAssets();
          server.ws.send({
            type: 'full-reload',
            path: '*'
          });
        }
      };

      server.watcher.on('change', handleFileChange);
      server.watcher.on('add', handleFileChange);
      server.watcher.on('unlink', handleFileChange);
    }
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), workspaceSyncPlugin()],
})
