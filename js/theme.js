/**
 * KanaMaster - Neoplasticism Dark Mode & Theme Management
 * Mondrian Design System: Claro Red #D52B1E, Dark Canvas #121212 / #18181b,
 * Glass Card Dark #242426/80, Text #F5F5F7, Border #38383a.
 */

const THEME_STORAGE_KEY = 'kanamaster_theme_v2';

// Japanese Kanji for Theme Toggle Button (昼 for Day/Light, 夜 for Night/Dark)
const THEME_ICONS = {
  SUN: `<span class="font-jp font-bold text-xs text-amber-600">昼</span>`,
  MOON: `<span class="font-jp font-bold text-xs text-ink-muted">夜</span>`
};

/**
 * Determine user's preferred theme from localStorage.
 * Always defaults to 'light' to strictly follow DESIGN.md (Mondrian #FFFFFF canvas).
 * @returns {'dark' | 'light'}
 */
function getPreferredTheme() {
  try {
    const saved = localStorage.getItem(THEME_STORAGE_KEY);
    if (saved === 'dark' || saved === 'light') {
      return saved;
    }
  } catch (e) {
    // LocalStorage might be disabled/restricted
  }

  // Strict compliance with DESIGN.md: Mondrian Design System Canvas is #FFFFFF
  return 'light';
}

/**
 * Update UI controls displaying the current theme state.
 * @param {'dark' | 'light'} theme
 */
function updateThemeUI(theme) {
  const isDark = theme === 'dark';
  const toggleBtns = document.querySelectorAll('.theme-toggle-btn, #themeToggleBtn');

  toggleBtns.forEach(btn => {
    btn.setAttribute('aria-label', isDark ? 'Beralih ke Mode Terang' : 'Beralih ke Mode Gelap');
    btn.setAttribute('title', isDark ? 'Beralih ke Mode Terang' : 'Beralih ke Mode Gelap');
    btn.setAttribute('aria-pressed', isDark ? 'true' : 'false');

    const iconWrap = btn.querySelector('.theme-icon-wrap') || btn;
    if (btn.querySelector('.theme-icon-wrap')) {
      iconWrap.innerHTML = isDark ? THEME_ICONS.SUN : THEME_ICONS.MOON;
    } else {
      btn.innerHTML = `${isDark ? THEME_ICONS.SUN : THEME_ICONS.MOON}<span class="theme-text text-xs font-semibold hidden sm:inline">${isDark ? 'Terang' : 'Gelap'}</span>`;
    }
  });

  // Update mobile browser chrome color
  const metaThemeColor = document.querySelector('meta[name="theme-color"]');
  if (metaThemeColor) {
    metaThemeColor.setAttribute('content', isDark ? '#121212' : '#D52B1E');
  }
}

/**
 * Apply the requested theme to document.documentElement and sync UI.
 * @param {'dark' | 'light' | 'system'} theme
 * @returns {'dark' | 'light'} The resolved theme
 */
function applyTheme(theme) {
  let resolvedTheme = theme;
  if (theme === 'system' || !theme) {
    resolvedTheme = 'light';
  }

  if (typeof document !== 'undefined' && document.documentElement) {
    if (resolvedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    updateThemeUI(resolvedTheme);

    // Dispatch event for other modules (e.g. canvas background refresh)
    window.dispatchEvent(new CustomEvent('kanamaster-theme-changed', {
      detail: { theme: resolvedTheme }
    }));
  }

  return resolvedTheme;
}

/**
 * Toggle between dark and light themes and persist the choice in localStorage.
 * @returns {'dark' | 'light'} The newly active theme
 */
function toggleDarkMode() {
  const isCurrentlyDark = document.documentElement.classList.contains('dark');
  const nextTheme = isCurrentlyDark ? 'light' : 'dark';

  try {
    localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
  } catch (e) {
    console.warn('Could not persist theme to localStorage', e);
  }

  applyTheme(nextTheme);
  return nextTheme;
}

// Immediate initial execution to prevent flash of wrong theme (FOUC)
if (typeof document !== 'undefined') {
  const initialTheme = getPreferredTheme();
  if (initialTheme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }

  // Sync button elements once DOM is parsed
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      updateThemeUI(initialTheme);
    });
  } else {
    updateThemeUI(initialTheme);
  }
}

// Expose API to window
if (typeof window !== 'undefined') {
  window.THEME_STORAGE_KEY = THEME_STORAGE_KEY;
  window.getPreferredTheme = getPreferredTheme;
  window.applyTheme = applyTheme;
  window.toggleDarkMode = toggleDarkMode;
  window.updateThemeUI = updateThemeUI;
}
