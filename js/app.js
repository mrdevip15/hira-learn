function switchTab(tab) {
  const views = {
    quiz: document.getElementById('quizView'),
    flashcards: document.getElementById('flashcardsView'),
    chart: document.getElementById('chartView'),
    vocab: document.getElementById('vocabView'),
    draw: document.getElementById('drawView')
  };

  const navBtns = {
    quiz: document.getElementById('navQuizBtn'),
    flashcards: document.getElementById('navFlashcardsBtn'),
    chart: document.getElementById('navChartBtn'),
    vocab: document.getElementById('navVocabBtn'),
    draw: document.getElementById('navDrawBtn')
  };

  const inactiveClass = 'px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-full text-ink-muted hover:text-ink hover:bg-white/60 transition-all duration-200 flex items-center gap-1.5 font-medium text-xs sm:text-sm border border-transparent shrink-0';
  const activeClass = 'px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-full transition-all duration-200 flex items-center gap-1.5 bg-primary text-white shadow-glass-cta font-bold text-xs sm:text-sm border border-primary shrink-0';

  Object.values(views).forEach(v => v && v.classList.add('hidden'));
  Object.entries(navBtns).forEach(([k, b]) => {
    if (!b) return;
    const isTarget = k === tab;
    b.className = isTarget ? activeClass : inactiveClass;
    const glyph = b.querySelector('.tab-glyph');
    if (glyph) {
      glyph.className = isTarget
        ? 'tab-glyph w-5 h-5 rounded-md bg-white/20 flex items-center justify-center font-jp font-bold text-xs shrink-0 text-white'
        : 'tab-glyph w-5 h-5 rounded-md bg-black/5 flex items-center justify-center font-jp font-bold text-xs shrink-0 text-ink';
    }
  });

  if (views[tab]) {
    views[tab].classList.remove('hidden');
  }

  if (tab === 'vocab') {
    if (typeof updateCategoryFilterButtons === 'function') updateCategoryFilterButtons();
    if (typeof filterVocabList === 'function') filterVocabList();
  } else if (tab === 'flashcards') {
    if (typeof initFlashcards === 'function') initFlashcards();
  } else if (tab === 'chart') {
    if (typeof initGojuonChart === 'function') initGojuonChart();
  }
}

window.addEventListener('DOMContentLoaded', () => {
  if (typeof initTheme === 'function') {
    initTheme();
  }
  loadProgress();
  setQuizFormat(currentQuizFormat);
  renderRoadmapHeader();
  renderRoadmapGrid();
  if (typeof renderRowMasteryDashboard === 'function') {
    renderRowMasteryDashboard();
  }
  initCanvas();
  updateCategoryFilterButtons();
  renderVocabTable(VOCAB_DATABASE);
  if (typeof initFlashcards === 'function') initFlashcards();
  if (typeof initGojuonChart === 'function') initGojuonChart();
});

