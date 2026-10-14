/**
 * KanaMaster - Storage, Backup, and Learning Analytics Engine
 * Neoplasticism Data Engine: Backup Export/Import, Schema Validation,
 * and Kana Row Mastery Calculations (A, KA, SA, TA, NA, HA, MA, YA, RA, WA).
 */

const STORAGE_KEYS = {
  PROGRESS: 'kanamaster_progress',
  MISTAKES: 'kanamaster_char_mistakes',
  THEME: 'kanamaster_theme',
  QUIZ_FORMAT: 'kanamaster_quiz_format'
};

const TARGET_KANA_ROWS = ['A', 'KA', 'SA', 'TA', 'NA', 'HA', 'MA', 'YA', 'RA', 'WA'];

const ROW_METADATA = {
  A:  { name: 'Baris A (Vokal Dasar)', sample: 'あ・ア', hiraganaLevel: 1, katakanaLevel: 14, defaultChars: ['あ', 'い', 'う', 'え', 'お', 'ア', 'イ', 'ウ', 'エ', 'オ'] },
  KA: { name: 'Baris Ka (Konsonan K)', sample: 'か・カ', hiraganaLevel: 2, katakanaLevel: 14, defaultChars: ['か', 'き', 'く', 'け', 'こ', 'カ', 'キ', 'ク', 'ケ', 'コ'] },
  SA: { name: 'Baris Sa (Konsonan S)', sample: 'さ・サ', hiraganaLevel: 3, katakanaLevel: 15, defaultChars: ['さ', 'し', 'す', 'せ', 'そ', 'サ', 'シ', 'ス', 'セ', 'ソ'] },
  TA: { name: 'Baris Ta (Konsonan T)', sample: 'た・タ', hiraganaLevel: 4, katakanaLevel: 15, defaultChars: ['た', 'ち', 'つ', 'て', 'と', 'タ', 'チ', 'ツ', 'テ', 'ト'] },
  NA: { name: 'Baris Na (Konsonan N)', sample: 'な・ナ', hiraganaLevel: 5, katakanaLevel: 16, defaultChars: ['な', 'に', 'ぬ', 'ね', 'の', 'ナ', 'ニ', 'ヌ', 'ネ', 'ノ'] },
  HA: { name: 'Baris Ha (Konsonan H)', sample: 'は・ハ', hiraganaLevel: 6, katakanaLevel: 16, defaultChars: ['は', 'ひ', 'ふ', 'へ', 'ほ', 'ハ', 'ヒ', 'フ', 'ヘ', 'ホ'] },
  MA: { name: 'Baris Ma (Konsonan M)', sample: 'ま・マ', hiraganaLevel: 7, katakanaLevel: 17, defaultChars: ['ま', 'み', 'む', 'め', 'も', 'マ', 'ミ', 'ム', 'メ', 'モ'] },
  YA: { name: 'Baris Ya (Semi-Vokal Y)', sample: 'や・ヤ', hiraganaLevel: 8, katakanaLevel: 17, defaultChars: ['や', 'ゆ', 'よ', 'ヤ', 'ユ', 'ヨ'] },
  RA: { name: 'Baris Ra (Konsonan R)', sample: 'ら・ラ', hiraganaLevel: 9, katakanaLevel: 18, defaultChars: ['ら', 'り', 'る', 'れ', 'ろ', 'ラ', 'リ', 'ル', 'レ', 'ロ'] },
  WA: { name: 'Baris Wa & N (Penutup)', sample: 'わ・ワ', hiraganaLevel: 10, katakanaLevel: 18, defaultChars: ['わ', 'を', 'ん', 'ワ', 'ヲ', 'ン'] }
};

/**
 * Display a modern Neoplasticism toast notification.
 * @param {string} message
 * @param {'success' | 'error' | 'info'} [type='success']
 */
function showStorageToast(message, type = 'success') {
  if (typeof document === 'undefined' || !document.body) return;

  let container = document.getElementById('storageToastContainer');
  if (!container) {
    container = document.createElement('div');
    container.id = 'storageToastContainer';
    container.className = 'fixed bottom-5 right-5 z-50 flex flex-col gap-2 pointer-events-none max-w-sm w-full px-4';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  const borderColors = {
    success: 'border-emerald-500/40 bg-emerald-500/10 text-emerald-950 dark:text-emerald-200',
    error: 'border-primary/40 bg-primary/10 text-ink dark:text-rose-200',
    info: 'border-secondary-border bg-white/90 dark:bg-zinc-900/90 text-ink dark:text-white'
  };

  const icons = {
    success: `<svg class="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>`,
    error: `<svg class="w-5 h-5 text-primary shrink-0 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>`,
    info: `<svg class="w-5 h-5 text-secondary-dark shrink-0 stroke-[2]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>`
  };

  toast.className = `pointer-events-auto p-4 rounded-2xl border backdrop-blur-xl shadow-glass flex items-center gap-3 animate-pop transition-all duration-300 ${borderColors[type] || borderColors.info}`;
  toast.innerHTML = `
    ${icons[type] || icons.info}
    <p class="text-xs sm:text-sm font-medium leading-snug flex-1">${message}</p>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(8px)';
    setTimeout(() => {
      if (toast.parentNode) toast.parentNode.removeChild(toast);
    }, 300);
  }, 3500);
}

/**
 * Synchronize persistent character mistake history.
 */
function recordMistake(char) {
  if (!char) return;
  try {
    let mistakes = {};
    const raw = localStorage.getItem(STORAGE_KEYS.MISTAKES);
    if (raw) mistakes = JSON.parse(raw);
    mistakes[char] = (mistakes[char] || 0) + 1;
    localStorage.setItem(STORAGE_KEYS.MISTAKES, JSON.stringify(mistakes));
  } catch (e) {
    // Non-fatal
  }
}

/**
 * Retrieve persistent mistakes map.
 * @returns {Record<string, number>}
 */
function getPersistentMistakes() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.MISTAKES);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && typeof parsed === 'object') return parsed;
    }
  } catch (e) {}

  if (typeof charMistakeMap !== 'undefined' && charMistakeMap && typeof charMistakeMap === 'object') {
    return { ...charMistakeMap };
  }
  return {};
}

/**
 * 1. Export User Progress as JSON file.
 * Automatically bundles userProgress, level achievements, stars, accuracy, and timestamp,
 * triggering a browser download named `kanamaster_backup_<timestamp>.json`.
 * @returns {object} The exported backup payload
 */
function exportProgressJSON() {
  let progressData = {
    unlockedLevel: 1,
    levels: {},
    totalStars: 0
  };

  // 1. Gather in-memory or storage progress
  if (typeof userProgress !== 'undefined' && userProgress) {
    progressData = {
      unlockedLevel: userProgress.unlockedLevel || 1,
      levels: { ...(userProgress.levels || {}) },
      totalStars: userProgress.totalStars || 0
    };
  } else {
    try {
      const raw = localStorage.getItem(STORAGE_KEYS.PROGRESS);
      if (raw) progressData = JSON.parse(raw);
    } catch (e) {}
  }

  // Recalculate stars for data consistency
  const calculatedStars = Object.values(progressData.levels || {}).reduce((acc, lvl) => acc + (lvl.stars || 0), 0);
  progressData.totalStars = calculatedStars;

  const mistakesData = getPersistentMistakes();
  const currentFormat = (typeof currentQuizFormat !== 'undefined' ? currentQuizFormat : null) ||
    localStorage.getItem(STORAGE_KEYS.QUIZ_FORMAT) || 'TYPE_INPUT';
  const currentTheme = localStorage.getItem(STORAGE_KEYS.THEME) || 'light';

  const backupPayload = {
    app: 'KanaMaster',
    version: '1.0.0',
    exportedAt: new Date().toISOString(),
    timestamp: Date.now(),
    userProgress: progressData,
    mistakes: mistakesData,
    preferences: {
      quizFormat: currentFormat,
      theme: currentTheme
    }
  };

  const jsonString = JSON.stringify(backupPayload, null, 2);
  const blob = new Blob([jsonString], { type: 'application/json' });
  const filename = `kanamaster_backup_${Date.now()}.json`;

  if (typeof document !== 'undefined' && document.body && typeof URL !== 'undefined' && typeof URL.createObjectURL === 'function') {
    const downloadUrl = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(downloadUrl);

    showStorageToast(`Backup progres berhasil diunduh (${filename})`, 'success');
  }

  return backupPayload;
}

/**
 * Validate imported progress data against expected KanaMaster schema.
 * @param {any} data
 * @returns {{ valid: boolean, error?: string, sanitizedProgress?: object, preferences?: object, mistakes?: object }}
 */
function validateProgressSchema(data) {
  if (!data || typeof data !== 'object') {
    return { valid: false, error: 'Data backup bukan objek JSON yang valid.' };
  }

  // Support both full wrapper payload and direct userProgress object
  const rawProgress = data.userProgress && typeof data.userProgress === 'object' ? data.userProgress : data;

  const unlocked = Number(rawProgress.unlockedLevel);
  if (isNaN(unlocked) || unlocked < 1) {
    return { valid: false, error: 'Properti "unlockedLevel" tidak valid (harus angka minimal 1).' };
  }

  if (rawProgress.levels && typeof rawProgress.levels !== 'object') {
    return { valid: false, error: 'Properti "levels" harus berupa objek pemetaan level.' };
  }

  const sanitizedLevels = {};
  if (rawProgress.levels) {
    for (const [key, val] of Object.entries(rawProgress.levels)) {
      const lvlId = parseInt(key, 10);
      if (!isNaN(lvlId) && lvlId >= 1 && lvlId <= 30 && typeof val === 'object' && val !== null) {
        sanitizedLevels[lvlId] = {
          stars: Math.max(0, Math.min(3, parseInt(val.stars, 10) || 0)),
          accuracy: Math.max(0, Math.min(100, Math.round(Number(val.accuracy) || 0))),
          bestScore: Math.max(0, parseInt(val.bestScore, 10) || 0),
          total: Math.max(0, parseInt(val.total, 10) || 10),
          lastPlayed: Number(val.lastPlayed) || Date.now()
        };
      }
    }
  }

  const totalStars = Object.values(sanitizedLevels).reduce((sum, lvl) => sum + (lvl.stars || 0), 0);
  const clampedUnlocked = Math.max(1, Math.min(22, unlocked));

  const sanitizedProgress = {
    unlockedLevel: clampedUnlocked,
    levels: sanitizedLevels,
    totalStars: totalStars
  };

  return {
    valid: true,
    sanitizedProgress,
    preferences: data.preferences && typeof data.preferences === 'object' ? data.preferences : null,
    mistakes: data.mistakes && typeof data.mistakes === 'object' ? data.mistakes : null
  };
}

/**
 * 2. Import Progress from JSON File or JSON string.
 * Validates schema, safely updates localStorage, and reloads UI state without corrupting other data.
 * @param {File | Blob | string | object} fileOrContent
 * @returns {Promise<boolean>}
 */
async function importProgressJSON(fileOrContent) {
  try {
    let rawText = '';

    if (typeof fileOrContent === 'string') {
      rawText = fileOrContent;
    } else if (fileOrContent && typeof fileOrContent.text === 'function') {
      rawText = await fileOrContent.text();
    } else if (fileOrContent && typeof fileOrContent === 'object' && !('unlockedLevel' in fileOrContent)) {
      // FileReader fallback for legacy File/Blob objects
      rawText = await new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (e) => resolve(e.target.result);
        reader.onerror = () => reject(new Error('Gagal membaca file backup.'));
        reader.readAsText(fileOrContent);
      });
    } else if (fileOrContent && typeof fileOrContent === 'object') {
      rawText = JSON.stringify(fileOrContent);
    } else {
      throw new Error('Parameter file backup tidak valid.');
    }

    let parsed;
    try {
      parsed = JSON.parse(rawText);
    } catch (e) {
      throw new Error('Berkas tidak berformat JSON yang valid.');
    }

    const validation = validateProgressSchema(parsed);
    if (!validation.valid) {
      throw new Error(validation.error || 'Skema berkas backup tidak valid.');
    }

    const newProgress = validation.sanitizedProgress;

    // 1. Update in-memory userProgress
    if (typeof userProgress !== 'undefined') {
      userProgress.unlockedLevel = newProgress.unlockedLevel;
      userProgress.levels = newProgress.levels;
      userProgress.totalStars = newProgress.totalStars;
    }

    // 2. Persist to localStorage
    localStorage.setItem(STORAGE_KEYS.PROGRESS, JSON.stringify(newProgress));

    // 3. Restore mistakes if present
    if (validation.mistakes) {
      localStorage.setItem(STORAGE_KEYS.MISTAKES, JSON.stringify(validation.mistakes));
      if (typeof charMistakeMap !== 'undefined') {
        Object.assign(charMistakeMap, validation.mistakes);
      }
    }

    // 4. Restore preferences if present
    if (validation.preferences) {
      if (validation.preferences.quizFormat) {
        localStorage.setItem(STORAGE_KEYS.QUIZ_FORMAT, validation.preferences.quizFormat);
        if (typeof setQuizFormat === 'function') {
          setQuizFormat(validation.preferences.quizFormat);
        }
      }
      if (validation.preferences.theme && typeof applyTheme === 'function') {
        localStorage.setItem(STORAGE_KEYS.THEME, validation.preferences.theme);
        applyTheme(validation.preferences.theme);
      }
    }

    // 5. Refresh UI components
    if (typeof loadProgress === 'function') loadProgress();
    if (typeof renderRoadmapHeader === 'function') renderRoadmapHeader();
    if (typeof renderRoadmapGrid === 'function') renderRoadmapGrid();
    if (typeof renderRowMasteryDashboard === 'function') renderRowMasteryDashboard();

    const completedLevelsCount = Object.values(newProgress.levels).filter(l => l.stars >= 2).length;
    showStorageToast(`Progres berhasil dipulihkan: Level ${newProgress.unlockedLevel} (${completedLevelsCount} Level selesai, ${newProgress.totalStars} Bintang)`, 'success');

    return true;
  } catch (err) {
    console.error('Import progress error:', err);
    showStorageToast(err.message || 'Gagal mengimpor file backup.', 'error');
    return false;
  }
}

/**
 * Trigger file picker dialog and import user selected JSON file.
 */
function triggerImportProgress() {
  if (typeof document === 'undefined') return;

  let input = document.getElementById('kanamasterProgressFileInput');
  if (!input) {
    input = document.createElement('input');
    input.type = 'file';
    input.id = 'kanamasterProgressFileInput';
    input.accept = '.json,application/json';
    input.className = 'hidden';
    document.body.appendChild(input);
  }

  input.value = '';
  input.onchange = (e) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      importProgressJSON(file);
    }
  };
  input.click();
}

/**
 * 3. Calculate mastery percentage for each Kana consonant row:
 * (A, KA, SA, TA, NA, HA, MA, YA, RA, WA) from level achievements and mistake history.
 * @returns {Record<string, {
 *   row: string,
 *   name: string,
 *   sample: string,
 *   accuracy: number,
 *   mistakes: number,
 *   status: 'Mastered' | 'Good' | 'Needs Practice' | 'Not Started',
 *   stars: number,
 *   isUnlocked: boolean,
 *   chars: string[],
 *   valueOf: () => number,
 *   toString: () => string
 * }>}
 */
function calculateRowMastery() {
  const persistentMistakes = getPersistentMistakes();
  const masteryMap = {};

  const currentUnlocked = (typeof userProgress !== 'undefined' && userProgress.unlockedLevel) || 1;
  const currentLevels = (typeof userProgress !== 'undefined' && userProgress.levels) || {};

  TARGET_KANA_ROWS.forEach(rowKey => {
    const meta = ROW_METADATA[rowKey] || {
      name: `Baris ${rowKey}`,
      sample: rowKey,
      hiraganaLevel: 1,
      katakanaLevel: 14,
      defaultChars: []
    };

    // Find characters belonging to this row
    let chars = meta.defaultChars;
    if (typeof KANA_CHARS !== 'undefined' && Array.isArray(KANA_CHARS)) {
      const matched = KANA_CHARS.filter(k => k.row === rowKey).map(k => k.char);
      if (matched.length > 0) chars = matched;
    }

    // Sum mistakes for characters in this row
    let rowMistakes = 0;
    chars.forEach(c => {
      const inMemory = (typeof charMistakeMap !== 'undefined' && charMistakeMap[c]) || 0;
      const persisted = persistentMistakes[c] || 0;
      rowMistakes += Math.max(inMemory, persisted);
    });

    const hiraLevelStat = currentLevels[meta.hiraganaLevel];
    const kataLevelStat = currentLevels[meta.katakanaLevel];
    const isUnlocked = meta.hiraganaLevel <= currentUnlocked;

    let accuracy = 0;
    let starsEarned = 0;

    if (hiraLevelStat && hiraLevelStat.accuracy > 0) {
      let baseAcc = hiraLevelStat.accuracy;
      starsEarned = Math.max(starsEarned, hiraLevelStat.stars || 0);

      if (kataLevelStat && kataLevelStat.accuracy > 0) {
        baseAcc = Math.round((baseAcc + kataLevelStat.accuracy) / 2);
        starsEarned = Math.max(starsEarned, kataLevelStat.stars || 0);
      }

      // Adjust for mistakes
      if (rowMistakes > 0) {
        accuracy = Math.max(15, Math.min(100, Math.round(baseAcc - (rowMistakes * 3))));
      } else {
        accuracy = baseAcc;
      }
    } else if (isUnlocked) {
      if (rowMistakes > 0) {
        accuracy = Math.max(10, 65 - (rowMistakes * 5));
      } else {
        accuracy = 0; // Not practiced yet
      }
    } else {
      accuracy = 0; // Locked level
    }

    let status = 'Not Started';
    if (accuracy >= 80) {
      status = 'Mastered';
    } else if (accuracy >= 55) {
      status = 'Good';
    } else if (accuracy > 0 || rowMistakes > 0) {
      status = 'Needs Practice';
    }

    const rowResult = {
      row: rowKey,
      name: meta.name,
      sample: meta.sample,
      accuracy: accuracy,
      mistakes: rowMistakes,
      status: status,
      stars: starsEarned,
      isUnlocked: isUnlocked,
      chars: chars,
      hiraganaLevel: meta.hiraganaLevel,
      katakanaLevel: meta.katakanaLevel,
      valueOf() {
        return this.accuracy;
      },
      toString() {
        return `${this.accuracy}%`;
      }
    };

    masteryMap[rowKey] = rowResult;
  });

  return masteryMap;
}

/**
 * Render Visual Analytics Dashboard for Kana Consonant Rows.
 * Neoplasticism modular card grid with progress bars, accuracy badges, and drill launchers.
 * @param {string} [containerId='rowMasteryContainer']
 */
function renderRowMasteryDashboard(containerId = 'rowMasteryContainer') {
  if (typeof document === 'undefined') return;

  const container = document.getElementById(containerId);
  if (!container) return;

  const masteryData = calculateRowMastery();
  const rows = Object.values(masteryData);

  // Calculate overall stats
  const masteredCount = rows.filter(r => r.status === 'Mastered').length;
  const avgAccuracy = Math.round(rows.reduce((sum, r) => sum + r.accuracy, 0) / rows.length);
  const totalMistakes = rows.reduce((sum, r) => sum + r.mistakes, 0);

  const statusBadgeConfig = {
    'Mastered': {
      label: 'Sangat Mahir',
      bg: 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/30',
      barColor: 'bg-emerald-500'
    },
    'Good': {
      label: 'Berkembang',
      bg: 'bg-sky-500/10 text-sky-700 dark:text-sky-300 border-sky-500/30',
      barColor: 'bg-sky-500'
    },
    'Needs Practice': {
      label: 'Perlu Latihan',
      bg: 'bg-primary/10 text-primary dark:text-rose-300 border-primary/30',
      barColor: 'bg-primary'
    },
    'Not Started': {
      label: 'Belum Dimulai',
      bg: 'bg-secondary/15 text-ink-muted dark:text-zinc-400 border-secondary-border',
      barColor: 'bg-secondary/30'
    }
  };

  let cardsHtml = '';
  rows.forEach(item => {
    const config = statusBadgeConfig[item.status] || statusBadgeConfig['Not Started'];
    const starsHtml = typeof renderStarSVGs === 'function' ? renderStarSVGs(item.stars, 3) : '';

    cardsHtml += `
      <div class="glass-card rounded-2xl p-4 flex flex-col justify-between border border-secondary-border/50 hover:border-primary/40 transition-all duration-200">
        <div>
          <div class="flex items-center justify-between gap-2 mb-2">
            <div class="flex items-center gap-2">
              <span class="w-8 h-8 rounded-xl bg-black/5 dark:bg-white/5 font-jp font-bold text-sm text-ink flex items-center justify-center border border-secondary-border/40">
                ${item.sample}
              </span>
              <div>
                <h4 class="text-xs sm:text-sm font-bold text-ink font-heading leading-tight">${item.name}</h4>
                <span class="text-[10px] text-ink-muted">Baris ${item.row}</span>
              </div>
            </div>
            <span class="text-[10px] font-bold px-2 py-0.5 rounded-full border ${config.bg}">
              ${config.label}
            </span>
          </div>

          <!-- Progress Bar & Accuracy Metric -->
          <div class="space-y-1.5 mt-3">
            <div class="flex items-center justify-between text-xs font-semibold">
              <span class="text-ink-muted text-[11px]">Akurasi</span>
              <span class="font-mono text-ink font-bold">${item.accuracy}%</span>
            </div>
            <div class="w-full h-2 rounded-full bg-black/5 dark:bg-white/10 overflow-hidden border border-secondary-border/30">
              <div class="h-full rounded-full transition-all duration-500 ${config.barColor}" style="width: ${item.accuracy}%"></div>
            </div>
          </div>
        </div>

        <div class="flex items-center justify-between gap-2 mt-4 pt-2.5 border-t border-secondary-border/30 text-[11px]">
          <div class="flex items-center gap-1">
            ${starsHtml}
          </div>
          <div class="flex items-center gap-2">
            ${item.mistakes > 0 ? `<span class="text-primary font-semibold text-[10px]">${item.mistakes}x salah</span>` : `<span class="text-emerald-600 dark:text-emerald-400 font-medium text-[10px]">0 kesalahan</span>`}
            ${item.isUnlocked ? `
              <button onclick="startRowDrill('${item.row}')" class="px-2.5 py-1 rounded-lg bg-primary/10 hover:bg-primary text-primary hover:text-white font-bold text-[10px] transition" title="Latih Baris ${item.row}">
                Latih
              </button>
            ` : `
              <span class="text-[10px] text-ink-muted flex items-center gap-1 opacity-70">
                <svg class="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                Terkunci
              </span>
            `}
          </div>
        </div>
      </div>
    `;
  });

  container.innerHTML = `
    <div class="space-y-4">
      <!-- Summary Metrics Bar -->
      <div class="grid grid-cols-3 gap-3 p-3.5 bg-black/5 dark:bg-white/5 rounded-2xl border border-secondary-border/40">
        <div class="text-center">
          <p class="text-[11px] text-ink-muted">Baris Dikuasai</p>
          <p class="text-base sm:text-lg font-bold text-ink font-mono">${masteredCount} / 10</p>
        </div>
        <div class="text-center border-x border-secondary-border/40">
          <p class="text-[11px] text-ink-muted">Rata-rata Akurasi</p>
          <p class="text-base sm:text-lg font-bold text-primary font-mono">${avgAccuracy}%</p>
        </div>
        <div class="text-center">
          <p class="text-[11px] text-ink-muted">Total Kesalahan</p>
          <p class="text-base sm:text-lg font-bold text-ink font-mono">${totalMistakes}</p>
        </div>
      </div>

      <!-- 10 Rows Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        ${cardsHtml}
      </div>
    </div>
  `;
}

/**
 * Launch an interactive practice drill for a specific Kana row.
 * @param {string} rowKey
 */
function startRowDrill(rowKey) {
  const meta = ROW_METADATA[rowKey];
  if (!meta) return;

  if (typeof startLevelQuiz === 'function' && meta.hiraganaLevel) {
    startLevelQuiz(meta.hiraganaLevel);
    // Smooth scroll to top quiz card
    const target = document.getElementById('quizActiveCard') || document.getElementById('quizRoadmapCard');
    if (target) target.scrollIntoView({ behavior: 'smooth' });
    return;
  }

  showStorageToast(`Memulai latihan baris ${rowKey}...`, 'info');
}

/**
 * Toggle visibility of the Row Mastery Analytics Dashboard.
 */
function toggleAnalyticsDashboard() {
  if (typeof document === 'undefined') return;
  const section = document.getElementById('rowMasterySection');
  if (section) {
    const isHidden = section.classList.contains('hidden');
    if (isHidden) {
      section.classList.remove('hidden');
      renderRowMasteryDashboard();
      section.scrollIntoView({ behavior: 'smooth' });
    } else {
      section.classList.add('hidden');
    }
  }
}

// Hook into question evaluation to record character mistakes persistently
if (typeof window !== 'undefined') {
  window.STORAGE_KEYS = STORAGE_KEYS;
  window.TARGET_KANA_ROWS = TARGET_KANA_ROWS;
  window.exportProgressJSON = exportProgressJSON;
  window.importProgressJSON = importProgressJSON;
  window.validateProgressSchema = validateProgressSchema;
  window.triggerImportProgress = triggerImportProgress;
  window.calculateRowMastery = calculateRowMastery;
  window.renderRowMasteryDashboard = renderRowMasteryDashboard;
  window.startRowDrill = startRowDrill;
  window.toggleAnalyticsDashboard = toggleAnalyticsDashboard;
  window.recordMistake = recordMistake;
  window.showStorageToast = showStorageToast;
}
