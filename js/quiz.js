function setQuizSubMode(mode) {
      quizSubMode = mode;
      const btnRoadmap = document.getElementById('modeRoadmapBtn');
      const btnFree = document.getElementById('modeFreeBtn');
      const roadmapCard = document.getElementById('quizRoadmapCard');
      const freeCard = document.getElementById('quizSetupCard');

      if (mode === 'roadmap') {
        btnRoadmap.className = 'flex-1 sm:flex-none px-4 sm:px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all duration-200 flex items-center justify-center gap-2 bg-primary text-white shadow-glass-cta';
        btnFree.className = 'flex-1 sm:flex-none px-4 sm:px-5 py-2.5 rounded-xl font-medium text-xs sm:text-sm text-ink-muted hover:text-ink hover:bg-white/60 transition-all duration-200 flex items-center justify-center gap-2';
        roadmapCard.classList.remove('hidden');
        freeCard.classList.add('hidden');
        renderRoadmapHeader();
        renderRoadmapGrid();
      } else {
        btnFree.className = 'flex-1 sm:flex-none px-4 sm:px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all duration-200 flex items-center justify-center gap-2 bg-primary text-white shadow-glass-cta';
        btnRoadmap.className = 'flex-1 sm:flex-none px-4 sm:px-5 py-2.5 rounded-xl font-medium text-xs sm:text-sm text-ink-muted hover:text-ink hover:bg-white/60 transition-all duration-200 flex items-center justify-center gap-2';
        freeCard.classList.remove('hidden');
        roadmapCard.classList.add('hidden');
      }
    }

    function filterRoadmapStage(stage) {
      currentRoadmapStage = stage;
      document.querySelectorAll('.roadmap-stage-btn').forEach(btn => {
        const s = btn.getAttribute('data-stage');
        if ((s === 'ALL' && stage === 'ALL') || (parseInt(s, 10) === stage)) {
          btn.className = 'roadmap-stage-btn px-3.5 py-1.5 rounded-full text-xs font-bold bg-primary text-white transition border border-primary shrink-0';
        } else {
          btn.className = 'roadmap-stage-btn px-3.5 py-1.5 rounded-full text-xs font-medium bg-white/70 border border-secondary-border text-ink-muted hover:text-ink transition shrink-0';
        }
      });
      renderRoadmapGrid();
    }

    function renderRoadmapHeader() {
      const totalLevels = LEVELS_CONFIG.length;
      const completedCount = Object.values(userProgress.levels).filter(l => l.stars >= 2).length;
      const pct = Math.round((completedCount / totalLevels) * 100);

      const headerStars = document.getElementById('headerStarsTotal');
      const headerLevel = document.getElementById('headerLevelUnlocked');
      const percentText = document.getElementById('roadmapPercentText');
      const progressBar = document.getElementById('roadmapProgressBar');

      if (headerStars) headerStars.innerText = userProgress.totalStars;
      if (headerLevel) headerLevel.innerText = userProgress.unlockedLevel;
      if (percentText) percentText.innerText = `${completedCount}/${totalLevels} Level Selesai (${pct}%) • ${userProgress.totalStars}/${totalLevels * 3} Bintang`;
      if (progressBar) progressBar.style.width = `${Math.max(4, pct)}%`;
    }

    function renderRoadmapGrid() {
      const grid = document.getElementById('levelsGrid');
      if (!grid) return;
      grid.innerHTML = '';

      LEVELS_CONFIG.forEach(lvl => {
        if (currentRoadmapStage !== 'ALL' && lvl.stage !== currentRoadmapStage) {
          return;
        }

        const isUnlocked = lvl.id <= userProgress.unlockedLevel;
        const stat = userProgress.levels[lvl.id] || null;
        const stars = stat ? stat.stars : 0;
        const accuracy = stat ? stat.accuracy : 0;
        const isCompleted = isUnlocked && stars >= 2;
        const isCurrent = lvl.id === userProgress.unlockedLevel && !isCompleted;

        const card = document.createElement('div');

        if (!isUnlocked) {
          // Locked Card
          card.className = 'glass-card rounded-3xl p-5 border border-secondary-border/50 opacity-65 flex flex-col justify-between hover:opacity-80 transition select-none';
          card.innerHTML = `
            <div>
              <div class="flex items-center justify-between pb-3 border-b border-secondary-border/50">
                <span class="text-xs font-mono font-bold text-ink-muted">Level ${String(lvl.id).padStart(2, '0')}</span>
                <span class="inline-flex items-center gap-1.5 text-[11px] font-semibold text-ink-muted bg-black/5 px-2.5 py-0.5 rounded-full border border-secondary-border/50">
                  ${SVG_LOCK}
                  <span>Terkunci</span>
                </span>
              </div>
              <div class="mt-3 space-y-1.5">
                <h4 class="font-bold text-ink font-heading text-base">${lvl.title}</h4>
                <div class="flex items-center gap-1.5 flex-wrap">
                  <span class="text-[10px] font-mono uppercase px-2 py-0.5 rounded-md bg-black/5 text-ink-muted font-bold">${lvl.stageName.split(':')[0]}</span>
                  <span class="text-xs font-jp text-ink-muted font-bold">${lvl.badge}</span>
                </div>
                <p class="text-xs text-ink-muted leading-relaxed line-clamp-2">${lvl.description}</p>
              </div>
            </div>
            <div class="mt-4 pt-3 border-t border-secondary-border/50 flex items-center justify-between text-[11px] text-ink-muted">
              <span>Syarat: Lulus Level ${lvl.id - 1} (≥80%)</span>
              <div class="flex items-center gap-1">${renderStarSVGs(0)}</div>
            </div>
          `;
        } else if (isCurrent) {
          // Current Active Card
          card.className = 'glass-card rounded-3xl p-5 border-2 border-primary/60 shadow-glass-cta flex flex-col justify-between transition hover:-translate-y-1 relative overflow-hidden bg-white/95';
          card.innerHTML = `
            <div class="absolute top-0 right-0 left-0 h-1 bg-primary"></div>
            <div>
              <div class="flex items-center justify-between pb-3 border-b border-secondary-border/60">
                <span class="text-xs font-mono font-black text-primary tracking-wide">Level ${String(lvl.id).padStart(2, '0')}</span>
                <span class="inline-flex items-center gap-1.5 text-[11px] font-bold text-primary bg-primary/10 px-2.5 py-0.5 rounded-full border border-primary/20 animate-pulse">
                  ${SVG_UNLOCK}
                  <span>Target Anda</span>
                </span>
              </div>
              <div class="mt-3 space-y-1.5">
                <h4 class="font-bold text-ink font-heading text-base">${lvl.title}</h4>
                <div class="flex items-center gap-1.5 flex-wrap">
                  <span class="text-[10px] font-mono uppercase px-2 py-0.5 rounded-md bg-primary/10 text-primary font-bold">${lvl.stageName.split(':')[0]}</span>
                  <span class="text-xs font-jp text-primary font-black tracking-wide">${lvl.badge}</span>
                </div>
                <p class="text-xs text-ink-muted leading-relaxed">${lvl.description}</p>
              </div>
            </div>
            <div class="mt-4 pt-3 border-t border-secondary-border/60 space-y-3">
              <div class="flex items-center justify-between text-xs">
                <span class="text-[11px] text-ink-muted font-medium">Bintang Target:</span>
                <div class="flex items-center gap-1">${renderStarSVGs(stars)}</div>
              </div>
              <button onclick="startLevelQuiz(${lvl.id})" class="w-full bg-primary hover:bg-primary-dark text-white font-bold py-2.5 px-4 rounded-full text-xs shadow-glass-cta flex items-center justify-center gap-2 transition hover:-translate-y-0.5 active:translate-y-0">
                <span>Mulai Level ${lvl.id} (${lvl.id === 22 ? '15' : '10'} Soal)</span>
                <svg class="w-3.5 h-3.5 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"/></svg>
              </button>
            </div>
          `;
        } else {
          // Completed or Previously Attempted Card
          const cardBorder = isCompleted ? 'border-emerald-500/35 bg-white/90' : 'border-secondary-border bg-white/80';
          const statusPill = isCompleted
            ? `<span class="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-800 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full">Lulus (${accuracy}%)</span>`
            : `<span class="inline-flex items-center gap-1 text-[11px] font-bold text-amber-700 bg-amber-500/10 border border-amber-500/20 px-2.5 py-0.5 rounded-full">Belum Lulus (${accuracy}%)</span>`;

          card.className = `glass-card rounded-3xl p-5 border ${cardBorder} flex flex-col justify-between transition hover:-translate-y-1`;
          card.innerHTML = `
            <div>
              <div class="flex items-center justify-between pb-3 border-b border-secondary-border/50">
                <span class="text-xs font-mono font-bold text-ink">Level ${String(lvl.id).padStart(2, '0')}</span>
                <div class="flex items-center gap-2">
                  ${statusPill}
                  <div class="flex items-center gap-0.5">${renderStarSVGs(stars)}</div>
                </div>
              </div>
              <div class="mt-3 space-y-1.5">
                <h4 class="font-bold text-ink font-heading text-base">${lvl.title}</h4>
                <div class="flex items-center gap-1.5 flex-wrap">
                  <span class="text-[10px] font-mono uppercase px-2 py-0.5 rounded-md bg-black/5 text-ink-muted font-bold">${lvl.stageName.split(':')[0]}</span>
                  <span class="text-xs font-jp text-ink font-semibold">${lvl.badge}</span>
                </div>
                <p class="text-xs text-ink-muted leading-relaxed line-clamp-2">${lvl.description}</p>
              </div>
            </div>
            <div class="mt-4 pt-3 border-t border-secondary-border/50 flex items-center justify-between">
              <span class="text-[11px] text-ink-muted">Skor: <strong class="text-ink">${stat ? stat.bestScore : 0}/${stat ? stat.total : 10}</strong></span>
              <button onclick="startLevelQuiz(${lvl.id})" class="px-4 py-1.5 rounded-full text-xs font-bold ${isCompleted ? 'glass-btn-secondary text-ink hover:text-primary' : 'bg-primary text-white shadow-glass-cta'} transition hover:-translate-y-0.5">
                ${isCompleted ? 'Latih Ulang' : 'Coba Lagi'}
              </button>
            </div>
          `;
        }

        grid.appendChild(card);
      });
    }

    function generateLevelQuestions(levelId) {
      const cfg = LEVELS_CONFIG.find(l => l.id === levelId);
      if (!cfg) return [];

      let singleCharItems = [];
      if (cfg.targetChars && cfg.targetChars.length > 0) {
        singleCharItems = cfg.targetChars.map(c => {
          const meta = KANA_CHARS.find(k => k.char === c) || {};
          return {
            id: `char_${c}`,
            kana: c,
            romaji: meta.romaji || '',
            meaning: `Karakter ${cfg.script === 'katakana' ? 'Katakana' : 'Hiragana'} [${meta.romaji || c}]`,
            script: meta.script || cfg.script,
            row: meta.row || cfg.row,
            isCharDrill: true
          };
        });
      }

      let vocabItems = [];
      if (cfg.row === 'A') {
        vocabItems = VOCAB_DATABASE.filter(w => w.script === 'hiragana' && w.row === 'A');
      } else if (['KA','SA','TA','NA','HA','MA','YA','RA','WA'].includes(cfg.row)) {
        vocabItems = VOCAB_DATABASE.filter(w => w.script === 'hiragana' && w.row === cfg.row);
      } else if (cfg.row === 'DAKUON_GZ' || cfg.row === 'DAKUON_DBP') {
        vocabItems = VOCAB_DATABASE.filter(w => w.script === 'hiragana' && cfg.targetChars.some(c => w.kana.includes(c)));
      } else if (cfg.row === 'ALL') {
        vocabItems = VOCAB_DATABASE.filter(w => w.script === 'hiragana');
      } else if (['A_KA','SA_TA','NA_HA','MA_YA','RA_WA_N'].includes(cfg.row)) {
        vocabItems = VOCAB_DATABASE.filter(w => w.script === 'katakana' && cfg.targetChars.some(c => w.kana.includes(c)));
      } else if (cfg.row === 'DAKUON') {
        vocabItems = VOCAB_DATABASE.filter(w => w.script === 'katakana' && cfg.targetChars.some(c => w.kana.includes(c)));
      } else if (cfg.row === 'FOOD') {
        vocabItems = VOCAB_DATABASE.filter(w => w.script === 'katakana' && w.row === 'FOOD');
      } else if (cfg.row === 'TECH_LIFE') {
        vocabItems = VOCAB_DATABASE.filter(w => w.script === 'katakana' && ['TECH','PLACE','DAILY','LIFE'].includes(w.row));
      } else if (cfg.row === 'YOON_HIRA' || cfg.row === 'YOON_HIRAGANA') {
        vocabItems = VOCAB_DATABASE.filter(w => w.script === 'hiragana' && (w.row === 'YOON' || (cfg.targetChars && cfg.targetChars.some(c => w.kana.includes(c)))));
      } else if (cfg.row === 'YOON_KATA' || cfg.row === 'YOON_KATAKANA') {
        vocabItems = VOCAB_DATABASE.filter(w => w.script === 'katakana' && (w.row === 'YOON' || (cfg.targetChars && cfg.targetChars.some(c => w.kana.includes(c)))));
      } else if (cfg.row === 'YOON_ALL' || cfg.row === 'YOON_MASTER') {
        vocabItems = VOCAB_DATABASE.filter(w => w.row === 'YOON' || (cfg.targetChars && cfg.targetChars.some(c => w.kana.includes(c))));
      } else if (cfg.row === 'MASTER') {
        vocabItems = [...VOCAB_DATABASE];
      } else if (cfg.targetChars && cfg.targetChars.length > 0) {
        vocabItems = VOCAB_DATABASE.filter(w => cfg.targetChars.some(c => w.kana.includes(c)));
      }

      if (vocabItems.length === 0) {
        vocabItems = VOCAB_DATABASE.filter(w => cfg.script === 'all' || w.script === cfg.script);
      }

      const shuffledVocab = [...vocabItems].sort(() => 0.5 - Math.random());
      const maxLevel = LEVELS_CONFIG.length;
      const isGrandChallenge = levelId === 22 || levelId === maxLevel;
      const sessionTargetCount = isGrandChallenge ? 15 : 10;
      let sessionItems = [];

      if (singleCharItems.length > 0) {
        const shuffledChars = [...singleCharItems].sort(() => 0.5 - Math.random());
        const numCharsToPick = Math.min(shuffledChars.length, Math.min(5, sessionTargetCount - 3));
        const pickedChars = shuffledChars.slice(0, numCharsToPick);
        const neededVocab = sessionTargetCount - pickedChars.length;
        const pickedVocab = shuffledVocab.slice(0, neededVocab);
        sessionItems = [...pickedChars, ...pickedVocab];
      } else {
        sessionItems = shuffledVocab.slice(0, sessionTargetCount);
      }

      return sessionItems.sort(() => 0.5 - Math.random());
    }

    function startLevelQuiz(levelId) {
      if (levelId > userProgress.unlockedLevel) return;
      activeQuizLevelId = levelId;
      const questions = generateLevelQuestions(levelId);
      if (!questions || !questions.length) return;
      startQuizSession(questions);
    }

    function handleLevelCompletion(levelId, accuracy, total, correctCount) {
      let starsEarned = 0;
      if (accuracy >= 90) starsEarned = 3;
      else if (accuracy >= 80) starsEarned = 2;
      else if (accuracy >= 60) starsEarned = 1;

      const isPassed = accuracy >= 80;
      let isNewUnlock = false;

      const maxLevel = LEVELS_CONFIG.length;
      if (isPassed && levelId >= userProgress.unlockedLevel && levelId < maxLevel) {
        userProgress.unlockedLevel = levelId + 1;
        isNewUnlock = true;
      }

      const prev = userProgress.levels[levelId] || { stars: 0, accuracy: 0, bestScore: 0 };
      userProgress.levels[levelId] = {
        stars: Math.max(prev.stars, starsEarned),
        accuracy: Math.max(prev.accuracy, accuracy),
        bestScore: Math.max(prev.bestScore, correctCount),
        total: total,
        lastPlayed: Date.now()
      };

      userProgress.totalStars = Object.values(userProgress.levels).reduce((sum, l) => sum + (l.stars || 0), 0);
      saveProgress();
      renderRoadmapHeader();
      renderRoadmapGrid();
      if (typeof renderRowMasteryDashboard === 'function') {
        renderRowMasteryDashboard();
      }

      const banner = document.getElementById('levelResultBanner');
      banner.classList.remove('hidden');

      if (isPassed) {
        banner.className = 'glass-panel rounded-3xl p-6 sm:p-8 text-center space-y-3.5 animate-pop border-2 border-emerald-500/40 bg-emerald-500/10 shadow-glass';
        banner.innerHTML = `
          <div class="flex items-center justify-center gap-1.5 mb-1">
            ${renderStarSVGsLarge(starsEarned)}
          </div>
          <div>
            <h3 class="text-xl sm:text-2xl font-bold text-emerald-950 font-heading">
              ${isNewUnlock ? `Level ${levelId} Lulus! 🔓 Level ${levelId + 1} Terbuka` : `Level ${levelId} Berhasil Diselesaikan!`}
            </h3>
            <p class="text-xs sm:text-sm text-emerald-800 mt-1 max-w-md mx-auto">
              ${isNewUnlock ? `Hebat sekali! Akurasi ${accuracy}% (${correctCount}/${total} kata) berhasil melampaui batas minimal 80%.` : `Akurasi ${accuracy}% (${correctCount}/${total} kata). Skor dan bintang Anda telah diperbarui.`}
            </p>
          </div>
        `;
      } else {
        banner.className = 'glass-panel rounded-3xl p-6 sm:p-8 text-center space-y-3.5 animate-pop border-2 border-amber-500/40 bg-amber-500/10 shadow-glass';
        banner.innerHTML = `
          <div class="flex items-center justify-center gap-1.5 mb-1">
            ${renderStarSVGsLarge(starsEarned)}
          </div>
          <div>
            <h3 class="text-xl sm:text-2xl font-bold text-amber-950 font-heading">
              Belum Mencapai Syarat Kelulusan (≥ 80%)
            </h3>
            <p class="text-xs sm:text-sm text-amber-800 mt-1 max-w-md mx-auto">
              Akurasi Anda ${accuracy}% (${correctCount}/${total} kata). Dibutuhkan minimal 80% (8 dari 10 soal benar) untuk membuka level berikutnya. Jangan berkecil hati!
            </p>
          </div>
        `;
      }

      const actionsContainer = document.getElementById('summaryActionButtonsContainer');
      if (isPassed && levelId < maxLevel) {
        actionsContainer.innerHTML = `
          <div class="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button onclick="startLevelQuiz(${levelId + 1})" class="w-full sm:w-auto px-7 py-3 bg-primary hover:bg-primary-dark text-white rounded-full font-bold transition text-sm shadow-glass-cta flex items-center justify-center gap-2 hover:-translate-y-0.5">
              <span>Lanjut ke Level ${levelId + 1}</span>
              <svg class="w-4 h-4 stroke-[2.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"/></svg>
            </button>
            <button onclick="startLevelQuiz(${levelId})" class="w-full sm:w-auto px-6 py-3 glass-btn-secondary text-ink rounded-full font-semibold transition text-sm hover:-translate-y-0.5">
              Ulangi Level Ini
            </button>
            <button onclick="resetToQuizSetup()" class="w-full sm:w-auto px-6 py-3 glass-btn-secondary text-ink rounded-full font-semibold transition text-sm hover:-translate-y-0.5">
              Kembali ke Roadmap
            </button>
          </div>
        `;
      } else if (isPassed && levelId === maxLevel) {
        actionsContainer.innerHTML = `
          <div class="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button onclick="resetToQuizSetup()" class="px-7 py-3 bg-primary hover:bg-primary-dark text-white rounded-full font-bold transition text-sm shadow-glass-cta flex items-center justify-center gap-2 hover:-translate-y-0.5">
              <span>Selamat! Kembali ke Roadmap</span>
            </button>
            <button onclick="startLevelQuiz(${maxLevel})" class="px-6 py-3 glass-btn-secondary text-ink rounded-full font-semibold transition text-sm hover:-translate-y-0.5">
              Tantang Ulang Grand Master
            </button>
          </div>
        `;
      } else {
        actionsContainer.innerHTML = `
          <div class="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button onclick="startLevelQuiz(${levelId})" class="w-full sm:w-auto px-7 py-3 bg-primary hover:bg-primary-dark text-white rounded-full font-bold transition text-sm shadow-glass-cta flex items-center justify-center gap-2 hover:-translate-y-0.5">
              <span>Coba Lagi Level ${levelId}</span>
              <svg class="w-4 h-4 stroke-[2]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>
            </button>
            <button onclick="resetToQuizSetup()" class="w-full sm:w-auto px-6 py-3 glass-btn-secondary text-ink rounded-full font-semibold transition text-sm hover:-translate-y-0.5">
              Kembali ke Roadmap
            </button>
          </div>
        `;
      }
    }

function startQuizSession(customWordList = null) {
      initAudio();
      
      const scriptChoice = document.getElementById('quizScriptSelect').value;
      const lengthChoice = parseInt(document.getElementById('quizLengthSelect').value, 10);
      const orderChoice = document.getElementById('quizOrderSelect').value;
      
      let basePool = customWordList;
      if (!basePool) {
        activeQuizLevelId = null;
        basePool = VOCAB_DATABASE.filter(item => {
          if (scriptChoice === 'HIRAGANA') return item.script === 'hiragana';
          if (scriptChoice === 'KATAKANA') return item.script === 'katakana';
          return true;
        });
      }
      basePool = [...basePool];
      
      if (orderChoice === 'random' || customWordList) {
        for (let i = basePool.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [basePool[i], basePool[j]] = [basePool[j], basePool[i]];
        }
      }

      currentQuizQueue = customWordList ? basePool : basePool.slice(0, Math.min(lengthChoice, basePool.length));
      currentIndex = 0;
      correctCount = 0;
      wrongCount = 0;
      streak = 0;
      sessionMistakes = [];
      charMistakeMap = {};

      document.getElementById('quizRoadmapCard').classList.add('hidden');
      document.getElementById('quizSetupCard').classList.add('hidden');
      document.getElementById('quizSummaryCard').classList.add('hidden');
      document.getElementById('quizActiveCard').classList.remove('hidden');

      renderCurrentQuestion();
    }

    function renderCurrentQuestion() {
      if (currentIndex >= currentQuizQueue.length) {
        finishQuizSession();
        return;
      }

      const item = currentQuizQueue[currentIndex];
      isQuestionResolved = false;

      const levelBadge = document.getElementById('quizLevelBadge');
      if (activeQuizLevelId) {
        levelBadge.classList.remove('hidden');
        levelBadge.innerText = `Level ${activeQuizLevelId}`;
      } else {
        levelBadge.classList.add('hidden');
      }

      document.getElementById('quizCounterText').innerText = `Kata ${currentIndex + 1} / ${currentQuizQueue.length}`;
      
      const scriptBadge = document.getElementById('quizScriptBadge');
      if (item.script === 'katakana') {
        scriptBadge.innerText = 'KATAKANA';
        scriptBadge.className = 'px-2 py-0.5 rounded-full bg-primary/10 text-primary font-mono font-bold text-[10px] uppercase border border-primary/20';
      } else {
        scriptBadge.innerText = 'HIRAGANA';
        scriptBadge.className = 'px-2 py-0.5 rounded-full bg-black/5 text-ink font-mono font-bold text-[10px] uppercase border border-secondary-border';
      }

      document.getElementById('statCorrect').innerText = correctCount;
      document.getElementById('statWrong').innerText = wrongCount;
      
      const progressPercent = Math.round(((currentIndex) / currentQuizQueue.length) * 100);
      document.getElementById('quizProgressBar').style.width = `${progressPercent}%`;

      const streakBadge = document.getElementById('streakBadge');
      if (streak >= 3) {
        streakBadge.classList.remove('hidden');
        document.getElementById('streakNum').innerText = streak;
      } else {
        streakBadge.classList.add('hidden');
      }

      const kanaDisplay = document.getElementById('quizHiragana');
      const inputContainer = document.getElementById('quizInputModeContainer');
      const choiceContainer = document.getElementById('quizChoiceModeContainer');
      const chipsContainer = document.getElementById('quizCharChips');
      const feedbackBox = document.getElementById('feedbackBox');

      feedbackBox.classList.add('hidden');
      document.getElementById('quizMeaning').innerText = item.meaning;

      if (currentQuizFormat === 'TYPE_INPUT') {
        inputContainer.classList.remove('hidden');
        choiceContainer.classList.add('hidden');
        chipsContainer.classList.remove('hidden');

        kanaDisplay.className = 'font-jp text-6xl md:text-8xl font-bold tracking-wider text-ink select-none hover:text-primary transition-colors cursor-pointer';
        kanaDisplay.innerText = item.kana;
        hideHint();

        chipsContainer.innerHTML = '';
        Array.from(item.kana).forEach(char => {
          if (char === 'ー') {
            const span = document.createElement('span');
            span.className = 'px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-800 font-jp text-xs font-bold';
            span.innerText = 'ー (vokal panjang)';
            chipsContainer.appendChild(span);
          } else {
            const span = document.createElement('span');
            span.className = 'px-3 py-1 rounded-full bg-white/80 border border-secondary-border text-ink font-jp text-xs font-bold shadow-xs';
            span.innerText = char;
            chipsContainer.appendChild(span);
          }
        });

        const input = document.getElementById('romajiInput');
        input.value = '';
        input.disabled = false;
        input.classList.remove('border-emerald-500', 'border-primary', 'bg-emerald-50/50', 'bg-primary/5');
        input.focus();

        document.getElementById('submitBtn').classList.remove('hidden');
        document.getElementById('skipBtn').classList.remove('hidden');

      } else if (currentQuizFormat === 'CHOICE_KANA_TO_ROMAJI') {
        inputContainer.classList.add('hidden');
        choiceContainer.classList.remove('hidden');
        chipsContainer.classList.remove('hidden');

        kanaDisplay.className = 'font-jp text-6xl md:text-8xl font-bold tracking-wider text-ink select-none hover:text-primary transition-colors cursor-pointer';
        kanaDisplay.innerText = item.kana;
        hideHint();

        chipsContainer.innerHTML = '';
        Array.from(item.kana).forEach(char => {
          if (char === 'ー') {
            const span = document.createElement('span');
            span.className = 'px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-800 font-jp text-xs font-bold';
            span.innerText = 'ー (vokal panjang)';
            chipsContainer.appendChild(span);
          } else {
            const span = document.createElement('span');
            span.className = 'px-3 py-1 rounded-full bg-white/80 border border-secondary-border text-ink font-jp text-xs font-bold shadow-xs';
            span.innerText = char;
            chipsContainer.appendChild(span);
          }
        });

        renderChoicesForQuestion(item, 'CHOICE_KANA_TO_ROMAJI');

      } else if (currentQuizFormat === 'CHOICE_ROMAJI_TO_KANA') {
        inputContainer.classList.add('hidden');
        choiceContainer.classList.remove('hidden');
        chipsContainer.classList.add('hidden');

        kanaDisplay.className = 'font-mono text-5xl md:text-7xl font-black tracking-wide text-primary select-none cursor-pointer';
        kanaDisplay.innerText = item.romaji;
        revealHint();

        renderChoicesForQuestion(item, 'CHOICE_ROMAJI_TO_KANA');

      } else if (currentQuizFormat === 'CHOICE_AUDIO_TO_KANA') {
        inputContainer.classList.add('hidden');
        choiceContainer.classList.remove('hidden');
        chipsContainer.classList.add('hidden');

        kanaDisplay.className = 'py-4 flex flex-col items-center justify-center select-none';
        kanaDisplay.innerHTML = `
          <button type="button" id="audioDrillPulseBtn" onclick="playCurrentAudio()" class="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-primary/10 border-2 border-primary text-primary flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 animate-pulse group cursor-pointer" title="Klik untuk putar ulang audio">
            <svg class="w-12 h-12 stroke-[2] text-primary group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
              <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14"/>
            </svg>
          </button>
          <span class="text-xs font-bold text-primary tracking-wide uppercase mt-3 flex items-center gap-1.5">
            <span class="w-2 h-2 rounded-full bg-primary animate-ping"></span>
            Dengarkan Audio (Klik Speaker / Tekan Spasi untuk Putar Ulang)
          </span>
        `;
        hideHint();

        renderChoicesForQuestion(item, 'CHOICE_AUDIO_TO_KANA');

        // Putar audio secara otomatis
        speakJapanese(item.kana);
      }
    }

    function revealHint() {
      const meaningBox = document.getElementById('quizMeaningBox');
      const hintBtn = document.getElementById('hintBtn');
      if (meaningBox && hintBtn) {
        meaningBox.classList.remove('hidden');
        hintBtn.classList.add('hidden');
      }
    }

    function hideHint() {
      const meaningBox = document.getElementById('quizMeaningBox');
      const hintBtn = document.getElementById('hintBtn');
      if (meaningBox && hintBtn) {
        meaningBox.classList.add('hidden');
        hintBtn.classList.remove('hidden');
      }
    }

    function confirmExitQuiz() {
      const modal = document.getElementById('exitModal');
      if (modal) modal.classList.remove('hidden');
    }

    function closeExitModal() {
      const modal = document.getElementById('exitModal');
      if (modal) modal.classList.add('hidden');
      const input = document.getElementById('romajiInput');
      if (input && !input.disabled) input.focus();
    }

    function exitAndShowSummary() {
      closeExitModal();
      const attemptedCount = isQuestionResolved ? currentIndex + 1 : currentIndex;
      if (attemptedCount === 0) {
        resetToQuizSetup();
        return;
      }
      currentQuizQueue = currentQuizQueue.slice(0, attemptedCount);
      finishQuizSession();
    }

    function exitAndReset() {
      closeExitModal();
      resetToQuizSetup();
    }

    function cleanRomaji(str) {
      return (str || '')
        .toLowerCase()
        .trim()
        .replace(/\s+/g, '')
        .replace(/ō|ô/g, 'ou')
        .replace(/ū|û/g, 'uu')
        .replace(/ā|â/g, 'aa')
        .replace(/ē|ê/g, 'ee')
        .replace(/ī|î/g, 'ii')
        .replace(/[-_]/g, '');
    }

    function isRomajiMatch(userVal, correctVal) {
      const u = cleanRomaji(userVal);
      const c = cleanRomaji(correctVal);
      if (u === c) return true;
      // Also match single-vowel variant for loanwords (e.g. kohi vs koohii, keki vs keeki)
      const collapse = s => s.replace(/aa/g, 'a').replace(/ee/g, 'e').replace(/ii/g, 'i').replace(/oo/g, 'o').replace(/ou/g, 'o').replace(/uu/g, 'u');
      return collapse(u) === collapse(c);
    }

    function submitAnswer() {
      if (isQuestionResolved) {
        advanceNextQuestion();
        return;
      }

      const input = document.getElementById('romajiInput');
      const userVal = cleanRomaji(input.value);
      if (!userVal) {
        input.focus();
        return;
      }

      evaluateAnswer(userVal);
    }

    function skipQuestion() {
      if (isQuestionResolved) return;
      if (currentQuizFormat === 'TYPE_INPUT') {
        evaluateAnswer('(dilewati)');
        return;
      }

      isQuestionResolved = true;
      revealHint();

      currentQuestionChoices.forEach((opt, idx) => {
        const btn = document.getElementById(`choiceBtn_${idx}`);
        if (!btn) return;
        btn.disabled = true;
        if (opt.isCorrect) {
          btn.className = 'choice-option-btn p-4 rounded-2xl border-2 border-emerald-500 bg-emerald-500/15 text-emerald-950 flex items-center justify-between text-left transition w-full shadow-xs';
        } else {
          btn.className = 'choice-option-btn p-4 rounded-2xl border border-secondary-border/40 opacity-40 flex items-center justify-between text-left transition w-full cursor-not-allowed';
        }
      });

      const currentItem = currentQuizQueue[currentIndex];
      wrongCount++;
      streak = 0;
      playToneSound(false);

      sessionMistakes.push({
        word: currentItem,
        userRomaji: '(dilewati)'
      });

      Array.from(currentItem.kana).forEach(c => {
        if (c === 'ー') return;
        if (KANA_CHARS.some(k => k.char === c)) {
          charMistakeMap[c] = (charMistakeMap[c] || 0) + 1;
          if (typeof recordMistake === 'function') {
            recordMistake(c);
          }
        }
      });

      const feedbackBox = document.getElementById('feedbackBox');
      const feedbackTitle = document.getElementById('feedbackTitle');
      const feedbackIconWrap = document.getElementById('feedbackIconWrap');
      const feedbackIcon = document.getElementById('feedbackIcon');
      const correctRomajiText = document.getElementById('correctRomajiText');

      correctRomajiText.innerText = `${currentItem.kana} = ${currentItem.romaji} (${currentItem.meaning})`;
      feedbackBox.classList.remove('hidden');
      feedbackBox.className = 'p-4 rounded-2xl text-left border bg-primary/10 border-primary/30 text-ink backdrop-blur-md animate-pop';
      feedbackTitle.innerText = 'Soal Dilewati';
      feedbackIconWrap.className = 'w-9 h-9 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0';
      feedbackIcon.innerHTML = SVG_CROSS;

      document.getElementById('statCorrect').innerText = correctCount;
      document.getElementById('statWrong').innerText = wrongCount;

      if (currentQuizFormat === 'CHOICE_AUDIO_TO_KANA') {
        const kanaDisplay = document.getElementById('quizHiragana');
        if (kanaDisplay) {
          kanaDisplay.className = 'font-jp text-6xl md:text-8xl font-bold tracking-wider text-ink select-none animate-pop cursor-pointer';
          kanaDisplay.innerText = currentItem.kana;
          kanaDisplay.onclick = () => playCurrentAudio();
        }
      }

      speakJapanese(currentItem.kana);
    }

    function evaluateAnswer(userVal) {
      const currentItem = currentQuizQueue[currentIndex];
      const isCorrect = userVal !== '(dilewati)' && isRomajiMatch(userVal, currentItem.romaji);

      isQuestionResolved = true;
      const input = document.getElementById('romajiInput');
      input.disabled = true;

      revealHint();

      const feedbackBox = document.getElementById('feedbackBox');
      const feedbackTitle = document.getElementById('feedbackTitle');
      const feedbackIcon = document.getElementById('feedbackIcon');
      const feedbackIconWrap = document.getElementById('feedbackIconWrap');
      const correctRomajiText = document.getElementById('correctRomajiText');

      correctRomajiText.innerText = `${currentItem.kana} = ${currentItem.romaji} (${currentItem.meaning})`;
      feedbackBox.classList.remove('hidden');

      if (isCorrect) {
        correctCount++;
        streak++;
        playToneSound(true);

        feedbackBox.className = 'p-4 rounded-2xl text-left border bg-emerald-500/10 border-emerald-500/30 text-emerald-950 backdrop-blur-md animate-pop';
        feedbackTitle.innerText = 'Jawaban Tepat! (正解)';
        feedbackIconWrap.className = 'w-9 h-9 rounded-full bg-emerald-500/20 text-emerald-600 flex items-center justify-center shrink-0';
        feedbackIcon.innerHTML = SVG_CHECK;
        input.classList.add('border-emerald-500', 'bg-emerald-50/50');
      } else {
        wrongCount++;
        streak = 0;
        playToneSound(false);

        sessionMistakes.push({
          word: currentItem,
          userRomaji: userVal
        });

        Array.from(currentItem.kana).forEach(c => {
          if (c === 'ー') return;
          const isTargetKana = KANA_CHARS.some(k => k.char === c);
          if (isTargetKana) {
            charMistakeMap[c] = (charMistakeMap[c] || 0) + 1;
            if (typeof recordMistake === 'function') {
              recordMistake(c);
            }
          }
        });

        feedbackBox.className = 'p-4 rounded-2xl text-left border bg-primary/10 border-primary/30 text-ink backdrop-blur-md animate-pop';
        feedbackTitle.innerText = userVal === '(dilewati)' ? 'Kata Dilewati' : 'Masih Kurang Tepat';
        feedbackIconWrap.className = 'w-9 h-9 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0';
        feedbackIcon.innerHTML = SVG_CROSS;
        input.classList.add('border-primary', 'bg-primary/5');
      }

      document.getElementById('statCorrect').innerText = correctCount;
      document.getElementById('statWrong').innerText = wrongCount;
      document.getElementById('submitBtn').classList.add('hidden');
      document.getElementById('skipBtn').classList.add('hidden');

      speakJapanese(currentItem.kana);
    }

    function advanceNextQuestion() {
      currentIndex++;
      renderCurrentQuestion();
    }

    function playCurrentAudio() {
      if (!hasJapaneseVoice) return;
      if (currentQuizQueue[currentIndex]) {
        speakJapanese(currentQuizQueue[currentIndex].kana);
      }
    }

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        const modal = document.getElementById('exitModal');
        if (modal && !modal.classList.contains('hidden')) {
          closeExitModal();
          return;
        }
        const resetModal = document.getElementById('resetModal');
        if (resetModal && !resetModal.classList.contains('hidden')) {
          closeResetModal();
          return;
        }
      }

      const activeTab = document.getElementById('quizView');
      if (activeTab && activeTab.classList.contains('hidden')) return;

      const activeCard = document.getElementById('quizActiveCard');
      if (!activeCard || activeCard.classList.contains('hidden')) return;

      // Handle hotkeys 1-4 for multiple-choice modes
      if (['1', '2', '3', '4'].includes(e.key)) {
        const choiceContainer = document.getElementById('quizChoiceModeContainer');
        if (choiceContainer && !choiceContainer.classList.contains('hidden') && !isQuestionResolved) {
          const idx = parseInt(e.key, 10) - 1;
          handleChoiceSelect(idx);
          return;
        }
      }

      // Replay audio on Space or R when audio listening quiz is active and unresolved
      if ((e.code === 'Space' || e.key === 'r' || e.key === 'R') && currentQuizFormat === 'CHOICE_AUDIO_TO_KANA' && !isQuestionResolved) {
        e.preventDefault();
        playCurrentAudio();
        return;
      }

      if (e.key === 'Enter') {
        if (!isQuestionResolved) {
          if (currentQuizFormat === 'TYPE_INPUT') {
            submitAnswer();
          }
        } else {
          advanceNextQuestion();
        }
      }
    });

    function finishQuizSession() {
      document.getElementById('quizActiveCard').classList.add('hidden');
      document.getElementById('quizSummaryCard').classList.remove('hidden');

      const total = currentQuizQueue.length;
      const accuracy = total > 0 ? Math.round((correctCount / total) * 100) : 0;

      document.getElementById('sumAccuracy').innerText = `${accuracy}%`;
      document.getElementById('sumCorrect').innerText = correctCount;
      document.getElementById('sumWrong').innerText = wrongCount;
      document.getElementById('sumTotal').innerText = total;

      const summaryComment = document.getElementById('summaryComment');
      if (accuracy === 100) {
        summaryComment.innerText = 'Sempurna! Semua kosakata berhasil Anda baca dengan tepat.';
      } else if (accuracy >= 80) {
        summaryComment.innerText = 'Hasil sangat bagus! Tinjau beberapa karakter di bawah agar hafalan makin tajam.';
      } else {
        summaryComment.innerText = 'Terus berlatih! Perhatikan karakter yang paling sering keliru di bawah.';
      }

      if (activeQuizLevelId) {
        handleLevelCompletion(activeQuizLevelId, accuracy, total, correctCount);
      } else {
        const banner = document.getElementById('levelResultBanner');
        if (banner) banner.classList.add('hidden');
        const actionsContainer = document.getElementById('summaryActionButtonsContainer');
        if (actionsContainer) {
          actionsContainer.innerHTML = `
            <button onclick="resetToQuizSetup()" class="px-7 py-3 bg-ink hover:bg-slate-900 text-white rounded-full font-bold transition text-sm shadow-md flex items-center gap-2 mx-auto hover:-translate-y-0.5">
              <svg class="w-4 h-4 stroke-[2]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"/></svg>
              <span>Kembali ke Menu Latihan</span>
            </button>
          `;
        }
      }

      const weakCharsGrid = document.getElementById('weakCharsGrid');
      const perfectNotice = document.getElementById('perfectScoreNotice');
      const drillLaunchBtn = document.getElementById('targetedDrillLaunchBtn');
      weakCharsGrid.innerHTML = '';

      const weakEntries = Object.entries(charMistakeMap).sort((a, b) => b[1] - a[1]);

      if (weakEntries.length === 0) {
        perfectNotice.classList.remove('hidden');
        drillLaunchBtn.classList.add('hidden');
      } else {
        perfectNotice.classList.add('hidden');
        drillLaunchBtn.classList.remove('hidden');

        targetedCharsList = weakEntries.map(e => e[0]);

        weakEntries.forEach(([kana, freq]) => {
          const meta = KANA_CHARS.find(k => k.char === kana) || { romaji: '?', row: '?', script: 'kana', tip: 'Latihlah bentuk huruf ini berulang.' };
          
          const scriptTag = meta.script === 'katakana' 
            ? '<span class="text-[9px] px-1.5 py-0.5 rounded bg-primary/10 text-primary font-bold">KATAKANA</span>'
            : '<span class="text-[9px] px-1.5 py-0.5 rounded bg-black/5 text-ink font-bold">HIRAGANA</span>';

          const card = document.createElement('div');
          card.className = 'glass-card p-5 rounded-2xl flex flex-col justify-between hover:border-primary/50 transition';
          card.innerHTML = `
            <div>
              <div class="flex items-center justify-between pb-3 border-b border-secondary-border">
                <div class="flex items-center gap-3">
                  <span class="font-jp text-3xl font-bold text-white bg-primary w-12 h-12 rounded-2xl flex items-center justify-center shadow-glass-cta">${kana}</span>
                  <div>
                    <div class="flex items-center gap-1.5">
                      <h5 class="text-sm font-bold text-ink font-heading">Huruf: <span class="font-mono text-primary font-black">${meta.romaji}</span></h5>
                      ${scriptTag}
                    </div>
                    <span class="text-[11px] text-ink-muted uppercase tracking-wider font-semibold">Baris: ${meta.row}</span>
                  </div>
                </div>
                <div class="text-right">
                  <span class="inline-block px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 text-xs font-bold">
                    Keliru ${freq}x
                  </span>
                </div>
              </div>
              <p class="text-xs text-ink-muted mt-3 leading-relaxed">
                <strong class="text-ink">Tips:</strong> ${meta.tip}
              </p>
            </div>
            <div class="mt-4 pt-3 border-t border-secondary-border flex justify-between items-center text-xs">
              ${hasJapaneseVoice ? `
                <button onclick="speakJapanese('${kana}')" class="text-primary hover:text-primary-dark font-bold flex items-center gap-1.5 transition">
                  ${SVG_SPEAKER}
                  <span>Dengar Lafal</span>
                </button>
              ` : ''}
              <button onclick="openCanvasForChar('${kana}')" class="text-ink hover:text-primary font-medium flex items-center gap-1.5 transition ml-auto">
                ${SVG_PEN}
                <span>Latih Tulis</span>
              </button>
            </div>
          `;
          weakCharsGrid.appendChild(card);
        });
      }

      const mistakesTable = document.getElementById('mistakesTableBody');
      const mistakesContainer = document.getElementById('mistakesListContainer');
      mistakesTable.innerHTML = '';

      if (sessionMistakes.length === 0) {
        mistakesContainer.classList.add('hidden');
      } else {
        mistakesContainer.classList.remove('hidden');
        sessionMistakes.forEach(m => {
          const tr = document.createElement('tr');
          tr.className = 'hover:bg-white/60 transition';
          const audioCell = hasJapaneseVoice ? `
            <td class="p-3 text-right voice-ui">
              <button onclick="speakJapanese('${m.word.kana}')" class="p-1.5 hover:bg-black/5 rounded-full text-ink-muted hover:text-primary transition" title="Dengarkan Suara">
                ${SVG_SPEAKER}
              </button>
            </td>
          ` : '';

          const scriptPill = m.word.script === 'katakana'
            ? '<span class="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary font-bold">Katakana</span>'
            : '<span class="text-[10px] px-2 py-0.5 rounded-full bg-black/5 text-ink font-bold">Hiragana</span>';

          tr.innerHTML = `
            <td class="p-3 font-jp font-bold text-base text-ink">${m.word.kana}</td>
            <td class="p-3">${scriptPill}</td>
            <td class="p-3 font-mono font-bold text-emerald-700">${m.word.romaji}</td>
            <td class="p-3 font-mono font-bold text-primary">${m.userRomaji}</td>
            <td class="p-3 text-ink-muted text-xs">${m.word.meaning}</td>
            ${audioCell}
          `;
          mistakesTable.appendChild(tr);
        });
      }
    }

    function launchDrillForWeakChars() {
      if (!targetedCharsList.length) return;

      const filteredDrillWords = VOCAB_DATABASE.filter(w => {
        return targetedCharsList.some(weakChar => w.kana.includes(weakChar));
      });

      if (filteredDrillWords.length === 0) return;

      isTargetedDrillActive = true;
      document.getElementById('targetedDrillBanner').classList.remove('hidden');
      document.getElementById('targetedDrillText').innerText = 
        `Mode Target Aktif: ${filteredDrillWords.length} kata mengandung karakter lemah [${targetedCharsList.join(', ')}]`;

      switchTab('quiz');
      startQuizSession(filteredDrillWords);
    }

    function clearTargetedDrill() {
      isTargetedDrillActive = false;
      targetedCharsList = [];
      document.getElementById('targetedDrillBanner').classList.add('hidden');
      resetToQuizSetup();
    }

    function resetToQuizSetup() {
      document.getElementById('quizActiveCard').classList.add('hidden');
      document.getElementById('quizSummaryCard').classList.add('hidden');
      if (quizSubMode === 'roadmap') {
        document.getElementById('quizRoadmapCard').classList.remove('hidden');
        document.getElementById('quizSetupCard').classList.add('hidden');
        renderRoadmapHeader();
        renderRoadmapGrid();
      } else {
        document.getElementById('quizRoadmapCard').classList.add('hidden');
        document.getElementById('quizSetupCard').classList.remove('hidden');
      }
    }
