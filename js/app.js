function switchTab(tab) {
      const quizView = document.getElementById('quizView');
      const vocabView = document.getElementById('vocabView');
      const drawView = document.getElementById('drawView');

      const navQuizBtn = document.getElementById('navQuizBtn');
      const navVocabBtn = document.getElementById('navVocabBtn');
      const navDrawBtn = document.getElementById('navDrawBtn');

      const inactiveClass = 'px-4 py-2 rounded-full text-ink-muted hover:text-ink hover:bg-white/60 transition-all duration-200 flex items-center gap-2 font-medium text-xs sm:text-sm border border-transparent';
      const activeClass = 'px-4 py-2 rounded-full transition-all duration-200 flex items-center gap-2 bg-primary text-white shadow-glass-cta font-bold text-xs sm:text-sm border border-primary';

      quizView.classList.add('hidden');
      vocabView.classList.add('hidden');
      drawView.classList.add('hidden');

      navQuizBtn.className = inactiveClass;
      navVocabBtn.className = inactiveClass;
      navDrawBtn.className = inactiveClass;

      if (tab === 'quiz') {
        quizView.classList.remove('hidden');
        navQuizBtn.className = activeClass;
      } else if (tab === 'vocab') {
        vocabView.classList.remove('hidden');
        navVocabBtn.className = activeClass;
        updateCategoryFilterButtons();
        filterVocabList();
      } else if (tab === 'draw') {
        drawView.classList.remove('hidden');
        navDrawBtn.className = activeClass;
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
    });
