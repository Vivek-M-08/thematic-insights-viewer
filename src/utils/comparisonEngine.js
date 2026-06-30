// Clean text function similar to Python implementation
export function cleanText(text) {
  if (!text) return "";
  let cleaned = text.trim().toLowerCase();
  
  // Remove outer double quotes
  if (cleaned.startsWith('"') && cleaned.endsWith('"')) {
    cleaned = cleaned.slice(1, -1).trim();
  }
  // Remove outer single quotes
  if (cleaned.startsWith("'") && cleaned.endsWith("'")) {
    cleaned = cleaned.slice(1, -1).trim();
  }
  
  cleaned = cleaned.replace(/\s+/g, ' '); // normalize whitespace
  return cleaned;
}

// Robust CSV parser that respects double quotes and handles escapes
export function parseCSVLines(csvText) {
  const result = [];
  let currentField = '';
  let inQuotes = false;
  let currentRow = [];
  
  for (let i = 0; i < csvText.length; i++) {
    const char = csvText[i];
    const nextChar = csvText[i + 1];
    
    if (char === '"') {
      if (inQuotes && nextChar === '"') {
        // Escaped quote inside quotes: "" -> "
        currentField += '"';
        i++; // skip next quote
      } else {
        // Toggle quote state
        inQuotes = !inQuotes;
      }
    } else if (char === ',' && !inQuotes) {
      currentRow.push(currentField);
      currentField = '';
    } else if ((char === '\r' || char === '\n') && !inQuotes) {
      if (char === '\r' && nextChar === '\n') {
        i++; // skip \n
      }
      currentRow.push(currentField);
      result.push(currentRow);
      currentRow = [];
      currentField = '';
    } else {
      currentField += char;
    }
  }
  
  // Handle last line without ending newline
  if (currentField || currentRow.length > 0) {
    currentRow.push(currentField);
    result.push(currentRow);
  }
  
  return result;
}

// Comparison runner with compound key (discussion_id, cleaned_text) logic
export function runComparison(localCsvText, llmCsvText, approvedThemeNames) {
  const approvedSet = new Set(approvedThemeNames.map(name => name.trim().toLowerCase()));

  // 1. Parse Local CSV lines
  const localRows = parseCSVLines(localCsvText);
  const localMappings = {};
  const localDraftThemes = new Set();
  let totalLocalRows = 0;
  
  let currentThemeName = "";
  let currentStatus = "";

  // Start from 1 to skip header row
  for (let i = 1; i < localRows.length; i++) {
    const row = localRows[i];
    if (row.length === 0 || (row.length === 1 && !row[0].trim())) continue;
    
    // Pad row if needed
    while (row.length < 7) {
      row.push("");
    }

    if (row[1] && row[1].trim()) currentThemeName = row[1].trim();
    if (row[4] && row[4].trim()) currentStatus = row[4].trim();

    if (currentStatus.toLowerCase() === "draft") {
      localDraftThemes.add(currentThemeName);
    }

    const stmt = row[6] ? row[6].trim() : "";
    if (stmt) {
      const parts = stmt.split(" | ");
      if (parts.length >= 2) {
        const discId = parts[0].trim();
        const textVal = parts[1].trim();
        const cleaned = cleanText(textVal);
        if (cleaned) {
          const key = `${discId}||${cleaned}`;
          if (!localMappings[key]) {
            localMappings[key] = [];
          }
          localMappings[key].push({
            themeName: currentThemeName,
            status: currentStatus,
            originalText: textVal
          });
          totalLocalRows++;
        }
      }
    }
  }

  // 2. Parse LLM CSV lines
  const llmRows = parseCSVLines(llmCsvText);
  const llmMappings = {};
  let totalLlmRows = 0;

  for (let i = 1; i < llmRows.length; i++) {
    const row = llmRows[i];
    if (row.length === 0 || (row.length === 1 && !row[0].trim())) continue;
    
    while (row.length < 3) {
      row.push("");
    }
    
    const themeName = row[0] ? row[0].trim() : "";
    const discId = row[1] ? row[1].trim() : "";
    const challengeText = row[2] ? row[2].trim() : "";
    const cleaned = cleanText(challengeText);
    if (cleaned) {
      const key = `${discId}||${cleaned}`;
      if (!llmMappings[key]) {
        llmMappings[key] = [];
      }
      llmMappings[key].push({
        themeName: themeName,
        originalText: challengeText
      });
      totalLlmRows++;
    }
  }

  // 3. Perform Comparisons
  const localKeys = Object.keys(localMappings);
  const llmKeys = Object.keys(llmMappings);
  const llmKeySet = new Set(llmKeys);

  const totalLocal = totalLocalRows;
  const totalLlm = totalLlmRows;

  // Metric 3: Same challenges row-by-row matching
  let sameChallenges = 0;
  localKeys.forEach(key => {
    if (llmKeySet.has(key)) {
      sameChallenges += Math.min(localMappings[key].length, llmMappings[key].length);
    }
  });
  
  const diffChallenges = (totalLocal + totalLlm) - (2 * sameChallenges);

  // Metric 5: Mapped to approved in Local, but not assigned to approved in LLM
  let localApprovedLlmNotApproved = 0;
  localKeys.forEach(key => {
    const localList = localMappings[key];
    for (const localInfo of localList) {
      const isLocalApproved = localInfo.status.toLowerCase() === "approved";
      if (!isLocalApproved) continue;

      const llmList = llmMappings[key] || [];
      const isLlmApproved = llmList.some(llmInfo => approvedSet.has(llmInfo.themeName.toLowerCase()));

      if (!isLlmApproved) {
        localApprovedLlmNotApproved++;
      }
    }
  });

  // Metric 6: Mapped to approved in LLM, but mapped to draft in Local
  let llmApprovedLocalDraft = 0;
  llmKeys.forEach(key => {
    const llmList = llmMappings[key];
    for (const llmInfo of llmList) {
      const isLlmApproved = approvedSet.has(llmInfo.themeName.toLowerCase());
      if (!isLlmApproved) continue;

      const localList = localMappings[key] || [];
      const isLocalDraft = localList.some(localInfo => localInfo.status.toLowerCase() === "draft");

      if (isLocalDraft) {
        llmApprovedLocalDraft++;
      }
    }
  });

  // Metric 7: New draft themes count
  const newDraftThemesCount = localDraftThemes.size;

  return [
    { metric: "Total rows in local output", value: totalLocal, id: 'total-local' },
    { metric: "Total rows in llm output", value: totalLlm, id: 'total-llm' },
    { metric: "No of challenges same between local and llm", value: sameChallenges, id: 'same-challenges' },
    { metric: "No of challenges not same between local and llm", value: diffChallenges, id: 'diff-challenges' },
    { metric: "No of challenges mapped to Approved theme locally, but not Approved in LLM", value: localApprovedLlmNotApproved, id: 'approved-local-not-llm' },
    { metric: "No of challenges mapped to Approved in LLM, but Draft locally", value: llmApprovedLocalDraft, id: 'approved-llm-draft-local' },
    { metric: "No of new themes from local in draft status", value: newDraftThemesCount, id: 'draft-themes-local' }
  ];
}
