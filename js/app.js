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

  const inactiveClass = 'px-4 py-2 rounded-full text-ink-muted hover:text-ink hover:bg-white/60 transition-all duration-200 flex items-center gap-2 font-medium text-xs sm:text-sm border border-transparent shrink-0';
  const activeClass = 'px-4 py-2 rounded-full transition-all duration-200 flex items-center gap-2 bg-primary text-white shadow-glass-cta font-bold text-xs sm:text-sm border border-primary shrink-0';

  Object.values(views).forEach(v => v && v.classList.add('hidden'));
  Object.values(navBtns).forEach(b => b && (b.className = inactiveClass));

  if (views[tab]) {
    views[tab].classList.remove('hidden');
  }
  if (navBtns[tab]) {
    navBtns[tab].className = activeClass;
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
  loadProgress();
  setQuizFormat(currentQuizFormat);
  renderRoadmapHeader();
  renderRoadmapGrid();
  initCanvas();
  updateCategoryFilterButtons();
  renderVocabTable(VOCAB_DATABASE);
  if (typeof initFlashcards === 'function') initFlashcards();
  if (typeof initGojuonChart === 'function') initGojuonChart();
});
