// KanaMaster - Interactive 3D Flashcards System
// Supports 7 decks: Hiragana Basic, Dakuon, Yoon; Katakana Basic, Dakuon, Yoon; and Curated Vocab.

const HIRAGANA_YOON = [
  { char: 'きゃ', romaji: 'kya', tip: 'Kombinasi き (ki) + ゃ (ya kecil). Bunyi konsonan K + ya.', row: 'KA', script: 'hiragana' },
  { char: 'きゅ', romaji: 'kyu', tip: 'Kombinasi き (ki) + ゅ (yu kecil). Bunyi konsonan K + yu.', row: 'KA', script: 'hiragana' },
  { char: 'きょ', romaji: 'kyo', tip: 'Kombinasi き (ki) + ょ (yo kecil). Bunyi konsonan K + yo.', row: 'KA', script: 'hiragana' },
  { char: 'しゃ', romaji: 'sha', tip: 'Kombinasi し (shi) + ゃ (ya kecil). Bunyi "sya" atau "sha".', row: 'SA', script: 'hiragana' },
  { char: 'しゅ', romaji: 'shu', tip: 'Kombinasi し (shi) + ゅ (yu kecil). Bunyi "syu" atau "shu".', row: 'SA', script: 'hiragana' },
  { char: 'しょ', romaji: 'sho', tip: 'Kombinasi し (shi) + ょ (yo kecil). Bunyi "syo" atau "sho".', row: 'SA', script: 'hiragana' },
  { char: 'ちゃ', romaji: 'cha', tip: 'Kombinasi ち (chi) + ゃ (ya kecil). Bunyi "ca" atau "cha".', row: 'TA', script: 'hiragana' },
  { char: 'ちゅ', romaji: 'chu', tip: 'Kombinasi ち (chi) + ゅ (yu kecil). Bunyi "cu" atau "chu".', row: 'TA', script: 'hiragana' },
  { char: 'ちょ', romaji: 'cho', tip: 'Kombinasi ち (chi) + ょ (yo kecil). Bunyi "co" atau "cho".', row: 'TA', script: 'hiragana' },
  { char: 'にゃ', romaji: 'nya', tip: 'Kombinasi に (ni) + ゃ (ya kecil). Bunyi sengau "nya".', row: 'NA', script: 'hiragana' },
  { char: 'にゅ', romaji: 'nyu', tip: 'Kombinasi に (ni) + ゅ (yu kecil). Bunyi "nyu".', row: 'NA', script: 'hiragana' },
  { char: 'にょ', romaji: 'nyo', tip: 'Kombinasi に (ni) + ょ (yo kecil). Bunyi "nyo".', row: 'NA', script: 'hiragana' },
  { char: 'ひゃ', romaji: 'hya', tip: 'Kombinasi ひ (hi) + ゃ (ya kecil). Bunyi hembusan "hya".', row: 'HA', script: 'hiragana' },
  { char: 'ひゅ', romaji: 'hyu', tip: 'Kombinasi ひ (hi) + ゅ (yu kecil). Bunyi "hyu".', row: 'HA', script: 'hiragana' },
  { char: 'ひょ', romaji: 'hyo', tip: 'Kombinasi ひ (hi) + ょ (yo kecil). Bunyi "hyo".', row: 'HA', script: 'hiragana' },
  { char: 'みゃ', romaji: 'mya', tip: 'Kombinasi み (mi) + ゃ (ya kecil). Bunyi bibir "mya".', row: 'MA', script: 'hiragana' },
  { char: 'みゅ', romaji: 'myu', tip: 'Kombinasi み (mi) + ゅ (yu kecil). Bunyi "myu".', row: 'MA', script: 'hiragana' },
  { char: 'みょ', romaji: 'myo', tip: 'Kombinasi み (mi) + ょ (yo kecil). Bunyi "myo".', row: 'MA', script: 'hiragana' },
  { char: 'りゃ', romaji: 'rya', tip: 'Kombinasi り (ri) + ゃ (ya kecil). Getaran lidah "rya".', row: 'RA', script: 'hiragana' },
  { char: 'りゅ', romaji: 'ryu', tip: 'Kombinasi り (ri) + ゅ (yu kecil). Bunyi naga "ryu".', row: 'RA', script: 'hiragana' },
  { char: 'りょ', romaji: 'ryo', tip: 'Kombinasi り (ri) + ょ (yo kecil). Bunyi "ryo".', row: 'RA', script: 'hiragana' },
  { char: 'ぎゃ', romaji: 'gya', tip: 'Dakuon ぎ (gi) + ゃ (ya kecil). Bunyi berat "gya".', row: 'GA', script: 'hiragana' },
  { char: 'ぎゅ', romaji: 'gyu', tip: 'Dakuon ぎ (gi) + ゅ (yu kecil). Bunyi sapi/daging "gyu".', row: 'GA', script: 'hiragana' },
  { char: 'ぎょ', romaji: 'gyo', tip: 'Dakuon ぎ (gi) + ょ (yo kecil). Bunyi ikan/pangsit "gyo".', row: 'GA', script: 'hiragana' },
  { char: 'じゃ', romaji: 'ja', tip: 'Dakuon じ (ji) + ゃ (ya kecil). Bunyi "ja".', row: 'ZA', script: 'hiragana' },
  { char: 'じゅ', romaji: 'ju', tip: 'Dakuon じ (ji) + ゅ (yu kecil). Bunyi angka 10 "juu".', row: 'ZA', script: 'hiragana' },
  { char: 'じょ', romaji: 'jo', tip: 'Dakuon じ (ji) + ょ (yo kecil). Bunyi wanita "jo".', row: 'ZA', script: 'hiragana' },
  { char: 'びゃ', romaji: 'bya', tip: 'Dakuon び (bi) + ゃ (ya kecil). Bunyi "bya".', row: 'BA', script: 'hiragana' },
  { char: 'びゅ', romaji: 'byu', tip: 'Dakuon び (bi) + ゅ (yu kecil). Bunyi angin "byu".', row: 'BA', script: 'hiragana' },
  { char: 'びょ', romaji: 'byo', tip: 'Dakuon び (bi) + ょ (yo kecil). Bunyi rumah sakit "byo".', row: 'BA', script: 'hiragana' },
  { char: 'ぴゃ', romaji: 'pya', tip: 'Handakuon ぴ (pi) + ゃ (ya kecil). Letupan "pya".', row: 'PA', script: 'hiragana' },
  { char: 'ぴゅ', romaji: 'pyu', tip: 'Handakuon ぴ (pi) + ゅ (yu kecil). Letupan murni "pyu".', row: 'PA', script: 'hiragana' },
  { char: 'ぴょ', romaji: 'pyo', tip: 'Handakuon ぴ (pi) + ょ (yo kecil). Lompatan katak "pyo".', row: 'PA', script: 'hiragana' }
];

const KATAKANA_YOON = [
  { char: 'キャ', romaji: 'kya', tip: 'Kombinasi キ (ki) + ャ (ya kecil).', row: 'KA', script: 'katakana' },
  { char: 'キュ', romaji: 'kyu', tip: 'Kombinasi キ (ki) + ュ (yu kecil).', row: 'KA', script: 'katakana' },
  { char: 'キョ', romaji: 'kyo', tip: 'Kombinasi キ (ki) + ョ (yo kecil).', row: 'KA', script: 'katakana' },
  { char: 'シャ', romaji: 'sha', tip: 'Kombinasi シ (shi) + ャ (ya kecil).', row: 'SA', script: 'katakana' },
  { char: 'シュ', romaji: 'shu', tip: 'Kombinasi シ (shi) + ュ (yu kecil).', row: 'SA', script: 'katakana' },
  { char: 'ショ', romaji: 'sho', tip: 'Kombinasi シ (shi) + ョ (yo kecil).', row: 'SA', script: 'katakana' },
  { char: 'チャ', romaji: 'cha', tip: 'Kombinasi チ (chi) + ャ (ya kecil).', row: 'TA', script: 'katakana' },
  { char: 'チュ', romaji: 'chu', tip: 'Kombinasi チ (chi) + ュ (yu kecil).', row: 'TA', script: 'katakana' },
  { char: 'チョ', romaji: 'cho', tip: 'Kombinasi チ (chi) + ョ (yo kecil).', row: 'TA', script: 'katakana' },
  { char: 'ニャ', romaji: 'nya', tip: 'Kombinasi ニ (ni) + ャ (ya kecil).', row: 'NA', script: 'katakana' },
  { char: 'ニュ', romaji: 'nyu', tip: 'Kombinasi ニ (ni) + ュ (yu kecil).', row: 'NA', script: 'katakana' },
  { char: 'ニョ', romaji: 'nyo', tip: 'Kombinasi ニ (ni) + ョ (yo kecil).', row: 'NA', script: 'katakana' },
  { char: 'ヒャ', romaji: 'hya', tip: 'Kombinasi ヒ (hi) + ャ (ya kecil).', row: 'HA', script: 'katakana' },
  { char: 'ヒュ', romaji: 'hyu', tip: 'Kombinasi ヒ (hi) + ュ (yu kecil).', row: 'HA', script: 'katakana' },
  { char: 'ヒョ', romaji: 'hyo', tip: 'Kombinasi ヒ (hi) + ョ (yo kecil).', row: 'HA', script: 'katakana' },
  { char: 'ミャ', romaji: 'mya', tip: 'Kombinasi ミ (mi) + ャ (ya kecil).', row: 'MA', script: 'katakana' },
  { char: 'ミュ', romaji: 'myu', tip: 'Kombinasi ミ (mi) + ュ (yu kecil).', row: 'MA', script: 'katakana' },
  { char: 'ミョ', romaji: 'myo', tip: 'Kombinasi ミ (mi) + ョ (yo kecil).', row: 'MA', script: 'katakana' },
  { char: 'リャ', romaji: 'rya', tip: 'Kombinasi リ (ri) + ャ (ya kecil).', row: 'RA', script: 'katakana' },
  { char: 'リュ', romaji: 'ryu', tip: 'Kombinasi リ (ri) + ュ (yu kecil).', row: 'RA', script: 'katakana' },
  { char: 'リョ', romaji: 'ryo', tip: 'Kombinasi リ (ri) + ョ (yo kecil).', row: 'RA', script: 'katakana' },
  { char: 'ギャ', romaji: 'gya', tip: 'Kombinasi ギ (gi) + ャ (ya kecil).', row: 'GA', script: 'katakana' },
  { char: 'ギュ', romaji: 'gyu', tip: 'Kombinasi ギ (gi) + ュ (yu kecil).', row: 'GA', script: 'katakana' },
  { char: 'ギョ', romaji: 'gyo', tip: 'Kombinasi ギ (gi) + ョ (yo kecil).', row: 'GA', script: 'katakana' },
  { char: 'ジャ', romaji: 'ja', tip: 'Kombinasi ジ (ji) + ャ (ya kecil).', row: 'ZA', script: 'katakana' },
  { char: 'ジュ', romaji: 'ju', tip: 'Kombinasi ジ (ji) + ュ (yu kecil).', row: 'ZA', script: 'katakana' },
  { char: 'ジョ', romaji: 'jo', tip: 'Kombinasi ジ (ji) + ョ (yo kecil).', row: 'ZA', script: 'katakana' },
  { char: 'ビャ', romaji: 'bya', tip: 'Kombinasi ビ (bi) + ャ (ya kecil).', row: 'BA', script: 'katakana' },
  { char: 'ビュ', romaji: 'byu', tip: 'Kombinasi ビ (bi) + ュ (yu kecil).', row: 'BA', script: 'katakana' },
  { char: 'ビョ', romaji: 'byo', tip: 'Kombinasi ビ (bi) + ョ (yo kecil).', row: 'BA', script: 'katakana' },
  { char: 'ピャ', romaji: 'pya', tip: 'Kombinasi ピ (pi) + ャ (ya kecil).', row: 'PA', script: 'katakana' },
  { char: 'ピュ', romaji: 'pyu', tip: 'Kombinasi ピ (pi) + ュ (yu kecil).', row: 'PA', script: 'katakana' },
  { char: 'ピョ', romaji: 'pyo', tip: 'Kombinasi ピ (pi) + ョ (yo kecil).', row: 'PA', script: 'katakana' }
];

const FLASHCARD_DECKS = [
  { id: 'HIRA_BASIC', name: 'Hiragana Dasar', badge: '46 Huruf', desc: 'Vokal utama A-O dan konsonan dasar Ka-Wa + N', script: 'hiragana' },
  { id: 'HIRA_DAKUON', name: 'Hiragana Dakuon', badge: '25 Huruf', desc: 'Huruf dengan tanda petik/lingkaran (Ga, Za, Da, Ba, Pa)', script: 'hiragana' },
  { id: 'HIRA_YOON', name: 'Hiragana Yōon', badge: '33 Kombinasi', desc: 'Kombinasi huruf kecil ゃ, ゅ, ょ (Kya, Sha, Cha...)', script: 'hiragana' },
  { id: 'KATA_BASIC', name: 'Katakana Dasar', badge: '46 Huruf', desc: 'Aksara garis tegas untuk kata serapan (Gairaigo)', script: 'katakana' },
  { id: 'KATA_DAKUON', name: 'Katakana Dakuon', badge: '25 Huruf', desc: 'Dakuon & Handakuon Katakana bersuara', script: 'katakana' },
  { id: 'KATA_YOON', name: 'Katakana Yōon', badge: '33 Kombinasi', desc: 'Kombinasi Katakana suara ganda (Kya, Sha, Cha...)', script: 'katakana' },
  { id: 'VOCAB_CURATED', name: 'Kosakata Pilihan', badge: '35 Kata', desc: 'Kosakata penting sehari-hari Hiragana & Katakana', script: 'mixed' }
];

// Flashcard Session State
let currentFlashcardDeckId = 'HIRA_BASIC';
let flashcardQueue = [];
let flashcardCurrentIndex = 0;
let isFlashcardFlipped = false;
let flashcardsKnown = [];
let flashcardsForgotten = [];

function getCuratedVocabList() {
  if (typeof VOCAB_DATABASE === 'undefined' || !Array.isArray(VOCAB_DATABASE)) return [];
  // Sample a diverse list of 35 words
  const sampleIndices = [
    0, 2, 6, 8, 12, 16, 20, 24, 28, 32, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130,
    140, 150, 160, 170, 180, 200, 220, 240, 250, 260, 270, 280, 290, 300, 310
  ];
  return sampleIndices
    .map(i => VOCAB_DATABASE[i])
    .filter(Boolean)
    .map(w => ({
      char: w.kana,
      romaji: w.romaji,
      meaning: w.meaning,
      tip: `Kosakata ${w.script}: ${w.kana} dibaca "${w.romaji}".`,
      script: w.script,
      isVocabWord: true
    }));
}

function loadDeckItems(deckId) {
  if (deckId === 'HIRA_BASIC') {
    return KANA_CHARS.filter(k => k.script === 'hiragana' && ['A','KA','SA','TA','NA','HA','MA','YA','RA','WA'].includes(k.row));
  } else if (deckId === 'HIRA_DAKUON') {
    return KANA_CHARS.filter(k => k.script === 'hiragana' && ['GA','ZA','DA','BA','PA'].includes(k.row));
  } else if (deckId === 'HIRA_YOON') {
    return HIRAGANA_YOON;
  } else if (deckId === 'KATA_BASIC') {
    return KANA_CHARS.filter(k => k.script === 'katakana' && ['A','KA','SA','TA','NA','HA','MA','YA','RA','WA'].includes(k.row));
  } else if (deckId === 'KATA_DAKUON') {
    return KANA_CHARS.filter(k => k.script === 'katakana' && ['GA','ZA','DA','BA','PA'].includes(k.row));
  } else if (deckId === 'KATA_YOON') {
    return KATAKANA_YOON;
  } else if (deckId === 'VOCAB_CURATED') {
    return getCuratedVocabList();
  }
  return [];
}

function initFlashcards() {
  renderDeckFilterPills();
  startFlashcardDeck(currentFlashcardDeckId);
}

function renderDeckFilterPills() {
  const container = document.getElementById('flashcardDeckPills');
  if (!container) return;
  container.innerHTML = '';

  FLASHCARD_DECKS.forEach(deck => {
    const btn = document.createElement('button');
    btn.onclick = () => switchFlashcardDeck(deck.id);
    const isActive = deck.id === currentFlashcardDeckId;
    btn.className = isActive
      ? 'flashcard-deck-btn px-4 py-2 rounded-full text-xs font-bold bg-primary text-white shadow-glass-cta border border-primary shrink-0 transition flex items-center gap-1.5'
      : 'flashcard-deck-btn px-4 py-2 rounded-full text-xs font-medium bg-white/75 border border-secondary-border text-ink-muted hover:text-ink hover:bg-white shrink-0 transition flex items-center gap-1.5';
    btn.innerHTML = `<span>${deck.name}</span><span class="text-[10px] opacity-75 font-mono">(${deck.badge})</span>`;
    container.appendChild(btn);
  });
}

function switchFlashcardDeck(deckId) {
  currentFlashcardDeckId = deckId;
  renderDeckFilterPills();
  startFlashcardDeck(deckId);
}

function shuffleFlashcardQueue() {
  for (let i = flashcardQueue.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [flashcardQueue[i], flashcardQueue[j]] = [flashcardQueue[j], flashcardQueue[i]];
  }
  flashcardCurrentIndex = 0;
  flashcardsKnown = [];
  flashcardsForgotten = [];
  isFlashcardFlipped = false;
  renderCurrentFlashcard();
}

function startFlashcardDeck(deckId, customItems = null) {
  currentFlashcardDeckId = deckId;
  const rawItems = customItems || loadDeckItems(deckId);
  flashcardQueue = [...rawItems];
  flashcardCurrentIndex = 0;
  isFlashcardFlipped = false;
  flashcardsKnown = [];
  flashcardsForgotten = [];

  const arena = document.getElementById('flashcardArena');
  const summary = document.getElementById('flashcardSummary');
  if (arena) arena.classList.remove('hidden');
  if (summary) summary.classList.add('hidden');

  renderCurrentFlashcard();
}

function findVocabExamples(char) {
  if (typeof VOCAB_DATABASE === 'undefined' || !Array.isArray(VOCAB_DATABASE)) return [];
  return VOCAB_DATABASE.filter(w => w.kana.includes(char)).slice(0, 3);
}

function renderCurrentFlashcard() {
  const arena = document.getElementById('flashcardArena');
  const summary = document.getElementById('flashcardSummary');

  if (flashcardCurrentIndex >= flashcardQueue.length) {
    if (arena) arena.classList.add('hidden');
    if (summary) summary.classList.remove('hidden');
    renderFlashcardSummary();
    return;
  }

  if (arena) arena.classList.remove('hidden');
  if (summary) summary.classList.add('hidden');

  const item = flashcardQueue[flashcardCurrentIndex];
  isFlashcardFlipped = false;

  // Update Tracker Elements
  const total = flashcardQueue.length;
  const currentNum = flashcardCurrentIndex + 1;
  const progressPercent = Math.round((flashcardCurrentIndex / total) * 100);

  const trackerText = document.getElementById('flashcardTrackerText');
  if (trackerText) trackerText.innerText = `Kartu ${currentNum} dari ${total}`;

  const progressBar = document.getElementById('flashcardProgressBar');
  if (progressBar) progressBar.style.width = `${progressPercent}%`;

  const statKnown = document.getElementById('flashcardStatKnown');
  if (statKnown) statKnown.innerText = flashcardsKnown.length;

  const statForgotten = document.getElementById('flashcardStatForgotten');
  if (statForgotten) statForgotten.innerText = flashcardsForgotten.length;

  const statRemaining = document.getElementById('flashcardStatRemaining');
  if (statRemaining) statRemaining.innerText = total - flashcardCurrentIndex;

  // Reset 3D Flip state
  const innerCard = document.getElementById('flashcardInner');
  if (innerCard) {
    innerCard.classList.remove('is-flipped');
  }

  // Sisi Depan (Front Face)
  const frontKana = document.getElementById('flashcardFrontKana');
  if (frontKana) frontKana.innerText = item.char;

  const frontBadge = document.getElementById('flashcardFrontBadge');
  if (frontBadge) {
    const deck = FLASHCARD_DECKS.find(d => d.id === currentFlashcardDeckId);
    frontBadge.innerText = deck ? deck.name.toUpperCase() : (item.script || 'KANA').toUpperCase();
  }

  // Sisi Belakang (Back Face)
  const backRomaji = document.getElementById('flashcardBackRomaji');
  if (backRomaji) backRomaji.innerText = item.romaji;

  const backMeaning = document.getElementById('flashcardBackMeaning');
  if (backMeaning) {
    if (item.meaning) {
      backMeaning.innerText = item.meaning;
    } else {
      backMeaning.innerText = `Pelafalan: [${item.romaji}]`;
    }
  }

  const backTip = document.getElementById('flashcardBackTip');
  if (backTip) {
    backTip.innerText = item.tip || 'Perhatikan bentuk tarikan goresan dan ritme bunyi aksara ini.';
  }

  // Contoh Kosakata
  const examplesContainer = document.getElementById('flashcardExamples');
  if (examplesContainer) {
    examplesContainer.innerHTML = '';
    const examples = item.isVocabWord ? [] : findVocabExamples(item.char);

    if (examples.length > 0) {
      examples.forEach(ex => {
        const chip = document.createElement('div');
        chip.className = 'flex items-center justify-between p-2 rounded-xl bg-black/[0.03] border border-secondary-border/50 text-left text-xs';
        chip.innerHTML = `
          <div class="flex items-center gap-2">
            <span class="font-jp font-bold text-base text-ink">${ex.kana}</span>
            <span class="font-mono text-xs text-primary font-semibold">(${ex.romaji})</span>
            <span class="text-ink-muted text-[11px] truncate max-w-[140px] sm:max-w-[200px]">— ${ex.meaning}</span>
          </div>
          <button type="button" onclick="event.stopPropagation(); speakJapanese('${ex.kana}')" class="p-1 rounded-full text-ink-muted hover:text-primary transition" title="Dengar lafal kata">
            <svg class="w-3.5 h-3.5 stroke-[2]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
          </button>
        `;
        examplesContainer.appendChild(chip);
      });
    } else if (item.isVocabWord) {
      const chip = document.createElement('div');
      chip.className = 'p-2.5 rounded-xl bg-black/[0.03] border border-secondary-border/50 text-xs text-ink-muted';
      chip.innerHTML = `Kosakata ${item.script}: <span class="font-jp font-bold text-ink">${item.char}</span> (${item.romaji}) = <span class="font-semibold text-ink">${item.meaning}</span>`;
      examplesContainer.appendChild(chip);
    } else {
      const chip = document.createElement('div');
      chip.className = 'p-2 rounded-xl text-center text-xs text-ink-muted italic';
      chip.innerText = 'Huruf dasar dalam susunan suku kata Jepang.';
      examplesContainer.appendChild(chip);
    }
  }
}

function toggleFlashcardFlip() {
  const innerCard = document.getElementById('flashcardInner');
  if (!innerCard) return;
  isFlashcardFlipped = !isFlashcardFlipped;
  if (isFlashcardFlipped) {
    innerCard.classList.add('is-flipped');
  } else {
    innerCard.classList.remove('is-flipped');
  }
}

function playCurrentFlashcardAudio(e) {
  if (e && e.stopPropagation) e.stopPropagation();
  const item = flashcardQueue[flashcardCurrentIndex];
  if (item && typeof speakJapanese === 'function') {
    speakJapanese(item.char);
  }
}

function markCardKnown(e) {
  if (e && e.stopPropagation) e.stopPropagation();
  if (flashcardCurrentIndex >= flashcardQueue.length) return;

  const item = flashcardQueue[flashcardCurrentIndex];
  flashcardsKnown.push(item);
  if (typeof playToneSound === 'function') playToneSound(true);

  flashcardCurrentIndex++;
  renderCurrentFlashcard();
}

function markCardForgotten(e) {
  if (e && e.stopPropagation) e.stopPropagation();
  if (flashcardCurrentIndex >= flashcardQueue.length) return;

  const item = flashcardQueue[flashcardCurrentIndex];
  flashcardsForgotten.push(item);
  if (typeof playToneSound === 'function') playToneSound(false);

  flashcardCurrentIndex++;
  renderCurrentFlashcard();
}

function renderFlashcardSummary() {
  const total = flashcardQueue.length;
  const known = flashcardsKnown.length;
  const forgotten = flashcardsForgotten.length;
  const accuracy = total > 0 ? Math.round((known / total) * 100) : 0;

  const accEl = document.getElementById('flashcardSumAccuracy');
  if (accEl) accEl.innerText = `${accuracy}%`;

  const knownEl = document.getElementById('flashcardSumKnown');
  if (knownEl) knownEl.innerText = known;

  const forgottenEl = document.getElementById('flashcardSumForgotten');
  if (forgottenEl) forgottenEl.innerText = forgotten;

  const totalEl = document.getElementById('flashcardSumTotal');
  if (totalEl) totalEl.innerText = total;

  const repeatForgottenBtn = document.getElementById('flashcardRepeatForgottenBtn');
  if (repeatForgottenBtn) {
    if (forgotten > 0) {
      repeatForgottenBtn.classList.remove('hidden');
      repeatForgottenBtn.innerHTML = `
        <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>
        <span>Latih Kartu Lupa Saja (${forgotten} Kartu)</span>
      `;
      repeatForgottenBtn.onclick = () => {
        const itemsToReview = [...flashcardsForgotten];
        startFlashcardDeck(currentFlashcardDeckId, itemsToReview);
      };
    } else {
      repeatForgottenBtn.classList.add('hidden');
    }
  }
}

// Hotkey listener for Flashcards: Space = Flip, ArrowLeft = Lupa, ArrowRight = Paham, R = Audio
document.addEventListener('keydown', (e) => {
  const flashView = document.getElementById('flashcardsView');
  if (!flashView || flashView.classList.contains('hidden')) return;

  const summary = document.getElementById('flashcardSummary');
  const isFinished = summary && !summary.classList.contains('hidden');
  if (isFinished) return;

  if (e.code === 'Space') {
    e.preventDefault();
    toggleFlashcardFlip();
  } else if (e.key === 'ArrowLeft') {
    e.preventDefault();
    markCardForgotten();
  } else if (e.key === 'ArrowRight') {
    e.preventDefault();
    markCardKnown();
  } else if (e.key === 'r' || e.key === 'R') {
    e.preventDefault();
    playCurrentFlashcardAudio();
  }
});
