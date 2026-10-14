// 25 Progressive Levels across 6 Stages
    const LEVELS_CONFIG = [
      {
        id: 1,
        stage: 1,
        stageName: "Stage 1: Hiragana Dasar",
        title: "Baris A (Vokal Dasar)",
        badge: "あいうえお",
        targetChars: ["あ", "い", "う", "え", "お"],
        description: "5 vokal fondasi bahasa Jepang: A, I, U, E, O.",
        script: "hiragana",
        row: "A"
      },
      {
        id: 2,
        stage: 1,
        stageName: "Stage 1: Hiragana Dasar",
        title: "Baris Ka (Konsonan K)",
        badge: "かきくけこ",
        targetChars: ["か", "き", "く", "け", "こ"],
        description: "Suara K: Ka, Ki, Ku, Ke, Ko serta kosakata vokal kombinasi.",
        script: "hiragana",
        row: "KA"
      },
      {
        id: 3,
        stage: 1,
        stageName: "Stage 1: Hiragana Dasar",
        title: "Baris Sa (Konsonan S)",
        badge: "さしすせそ",
        targetChars: ["さ", "し", "す", "せ", "そ"],
        description: "Suara S: Sa, Shi (bukan si), Su, Se, So dan kata sehari-hari.",
        script: "hiragana",
        row: "SA"
      },
      {
        id: 4,
        stage: 1,
        stageName: "Stage 1: Hiragana Dasar",
        title: "Baris Ta (Konsonan T)",
        badge: "たちつてと",
        targetChars: ["た", "ち", "つ", "て", "と"],
        description: "Suara T: Ta, Chi, Tsu, Te, To dengan fonetik khas.",
        script: "hiragana",
        row: "TA"
      },
      {
        id: 5,
        stage: 1,
        stageName: "Stage 1: Hiragana Dasar",
        title: "Baris Na (Konsonan N)",
        badge: "なにぬねの",
        targetChars: ["な", "に", "ぬ", "ね", "の"],
        description: "Suara sengau nasal N: Na, Ni, Nu, Ne, No.",
        script: "hiragana",
        row: "NA"
      },
      {
        id: 6,
        stage: 1,
        stageName: "Stage 1: Hiragana Dasar",
        title: "Baris Ha (Konsonan H)",
        badge: "はひふへほ",
        targetChars: ["は", "ひ", "ふ", "へ", "ほ"],
        description: "Suara H: Ha, Hi, Fu (hembusan lembut bibir), He, Ho.",
        script: "hiragana",
        row: "HA"
      },
      {
        id: 7,
        stage: 1,
        stageName: "Stage 1: Hiragana Dasar",
        title: "Baris Ma (Konsonan M)",
        badge: "まみむめも",
        targetChars: ["ま", "み", "む", "め", "も"],
        description: "Suara bibir M: Ma, Mi, Mu, Me, Mo.",
        script: "hiragana",
        row: "MA"
      },
      {
        id: 8,
        stage: 1,
        stageName: "Stage 1: Hiragana Dasar",
        title: "Baris Ya (Semi-Vokal Y)",
        badge: "やゆよ",
        targetChars: ["や", "ゆ", "よ"],
        description: "Tiga vokal luncuran: Ya, Yu, Yo penting untuk yōon.",
        script: "hiragana",
        row: "YA"
      },
      {
        id: 9,
        stage: 1,
        stageName: "Stage 1: Hiragana Dasar",
        title: "Baris Ra (Konsonan R)",
        badge: "らりるれろ",
        targetChars: ["ら", "り", "る", "れ", "ろ"],
        description: "Flap R khas Jepang (ujung lidah menepuk langit-langit mulut).",
        script: "hiragana",
        row: "RA"
      },
      {
        id: 10,
        stage: 1,
        stageName: "Stage 1: Hiragana Dasar",
        title: "Baris Wa & N (Penutup Dasar)",
        badge: "わをん",
        targetChars: ["わ", "を", "ん"],
        description: "Konsonan Wa, partikel Wo (O), dan bunyi sengau penutup N (ん).",
        script: "hiragana",
        row: "WA"
      },
      {
        id: 11,
        stage: 2,
        stageName: "Stage 2: Hiragana Dakuon",
        title: "Dakuon Ga & Za (Tenten ゛)",
        badge: "が〜ご・ざ〜ぞ",
        targetChars: ["が", "ぎ", "ぐ", "げ", "ご", "ざ", "じ", "ず", "ぜ", "ぞ"],
        description: "Variasi suara berdengung G (Ga-Go) dan Z/J (Za-Zo).",
        script: "hiragana",
        row: "DAKUON_GZ"
      },
      {
        id: 12,
        stage: 2,
        stageName: "Stage 2: Hiragana Dakuon",
        title: "Dakuon Da & Ba, Handakuon Pa",
        badge: "だ〜ど・ば〜ぼ・ぱ〜ぽ",
        targetChars: ["だ", "ぢ", "づ", "で", "ど", "ば", "び", "ぶ", "べ", "ぼ", "ぱ", "ぴ", "ぷ", "ぺ", "ぽ"],
        description: "Suara letup D, B, dan P (Handakuon dengan maru ゜).",
        script: "hiragana",
        row: "DAKUON_DBP"
      },
      {
        id: 13,
        stage: 2,
        stageName: "Stage 2: Hiragana Dakuon",
        title: "Hiragana Mastery Challenge",
        badge: "71 Hiragana Lengkap",
        targetChars: [],
        description: "Ujian kelulusan Hiragana komprehensif dari seluruh variasi.",
        script: "hiragana",
        row: "ALL"
      },
      {
        id: 14,
        stage: 3,
        stageName: "Stage 3: Katakana Dasar",
        title: "Katakana Baris A & Ka",
        badge: "ア〜コ",
        targetChars: ["ア", "イ", "ウ", "エ", "オ", "カ", "キ", "ク", "ケ", "コ"],
        description: "Aksara Katakana bersudut tegas: Vokal A-O dan Konsonan Ka-Ko.",
        script: "katakana",
        row: "A_KA"
      },
      {
        id: 15,
        stage: 3,
        stageName: "Stage 3: Katakana Dasar",
        title: "Katakana Baris Sa & Ta (Uji Kembar)",
        badge: "サ〜ト",
        targetChars: ["サ", "シ", "ス", "セ", "ソ", "タ", "チ", "ツ", "テ", "ト"],
        description: "Kuasai perbedaan bentuk goresan kritis [シ vs ツ] dan [ソ vs ン]!",
        script: "katakana",
        row: "SA_TA"
      },
      {
        id: 16,
        stage: 3,
        stageName: "Stage 3: Katakana Dasar",
        title: "Katakana Baris Na & Ha",
        badge: "ナ〜ホ",
        targetChars: ["ナ", "ニ", "ヌ", "ネ", "ノ", "ハ", "ヒ", "フ", "ヘ", "ホ"],
        description: "Katakana baris Na-No dan Ha-Ho, banyak terdapat pada label makanan.",
        script: "katakana",
        row: "NA_HA"
      },
      {
        id: 17,
        stage: 3,
        stageName: "Stage 3: Katakana Dasar",
        title: "Katakana Baris Ma & Ya",
        badge: "マ〜ヨ",
        targetChars: ["マ", "ミ", "ム", "メ", "モ", "ヤ", "ユ", "ヨ"],
        description: "Katakana baris Ma-Mo dan Ya-Yo.",
        script: "katakana",
        row: "MA_YA"
      },
      {
        id: 18,
        stage: 3,
        stageName: "Stage 3: Katakana Dasar",
        title: "Katakana Baris Ra, Wa, N",
        badge: "ラ〜ン",
        targetChars: ["ラ", "リ", "ル", "レ", "ロ", "ワ", "ヲ", "ン"],
        description: "Penutup 46 Katakana dasar: baris Ra-Ro, Wa, dan sengau N (ン).",
        script: "katakana",
        row: "RA_WA_N"
      },
      {
        id: 19,
        stage: 4,
        stageName: "Stage 4: Katakana Gairaigo",
        title: "Katakana Dakuon & Handakuon",
        badge: "ガ〜ポ",
        targetChars: ["ガ", "ギ", "グ", "ゲ", "ゴ", "ザ", "ジ", "ズ", "ゼ", "ゾ", "ダ", "ヂ", "ヅ", "デ", "ド", "バ", "ビ", "ブ", "ベ", "ボ", "パ", "ピ", "プ", "ペ", "ポ"],
        description: "Dakuon Katakana untuk kata serapan: G, Z, D, B dan P.",
        script: "katakana",
        row: "DAKUON"
      },
      {
        id: 20,
        stage: 4,
        stageName: "Stage 4: Katakana Gairaigo",
        title: "Gairaigo: Makanan & Restoran",
        badge: "Food & Cafe",
        targetChars: [],
        description: "Kata serapan makanan & minuman: コーヒー, ケーキ, カレー, ラーメン, パン.",
        script: "katakana",
        row: "FOOD"
      },
      {
        id: 21,
        stage: 4,
        stageName: "Stage 4: Katakana Gairaigo",
        title: "Gairaigo: Gadget & Kehidupan Modern",
        badge: "Tech & Life",
        targetChars: [],
        description: "Kata serapan modern: パソコン, スマホ, テレビ, ホテル, タクシー.",
        script: "katakana",
        row: "TECH_LIFE"
      },
      {
        id: 22,
        stage: 5,
        stageName: "Stage 5: Grand Master",
        title: "Grand Master Kana Challenge",
        badge: "142 Kana • 320+ Kata",
        targetChars: [],
        description: "Uji kecakapan puncak membaca cepat gabungan Hiragana dan Katakana.",
        script: "all",
        row: "MASTER"
      },
      {
        id: 23,
        stage: 6,
        stageName: "Stage 6: Yōon & Kombinasi Khusus",
        title: "Hiragana Yōon Seion (Kombinasi Ya, Yu, Yo)",
        badge: "きゃ〜りょ (21 Hiragana)",
        targetChars: [
          "きゃ", "きゅ", "きょ",
          "しゃ", "しゅ", "しょ",
          "ちゃ", "ちゅ", "ちょ",
          "にゃ", "にゅ", "にょ",
          "ひゃ", "ひゅ", "ひょ",
          "みゃ", "みゅ", "みょ",
          "りゃ", "りゅ", "りょ"
        ],
        description: "Kuasai 21 kombinasi vokal luncuran Ya, Yu, Yo pada konsonan dasar Hiragana (K, S, T, N, H, M, R) serta kosakata esensial seperti おちゃ, しゃしん, りょこう.",
        script: "hiragana",
        row: "YOON_HIRA"
      },
      {
        id: 24,
        stage: 6,
        stageName: "Stage 6: Yōon & Kombinasi Khusus",
        title: "Dakuon/Handakuon Yōon & Katakana Yōon",
        badge: "ぎゃ〜ぴょ • キャ〜ピョ",
        targetChars: [
          "ぎゃ", "ぎゅ", "ぎょ",
          "じゃ", "じゅ", "じょ",
          "びゃ", "びゅ", "びょ",
          "ぴゃ", "ぴゅ", "ぴょ",
          "キャ", "キュ", "キョ",
          "シャ", "シュ", "ショ",
          "チャ", "チュ", "チョ",
          "ニャ", "ニュ", "ニョ",
          "ヒャ", "ヒュ", "ヒョ",
          "ミャ", "ミュ", "ミョ",
          "リャ", "リュ", "リョ",
          "ギャ", "ギュ", "ギョ",
          "ジャ", "ジュ", "ジョ",
          "ビャ", "ビュ", "ビョ",
          "ピャ", "ピュ", "ピョ"
        ],
        description: "Kombinasi Yōon bersuara tebal (G, J, B) dan letupan (P) serta adaptasi aksara Katakana Yōon pada kata serapan modern (ジュース, シャツ, ニュース).",
        script: "all",
        row: "YOON_ALL"
      },
      {
        id: 25,
        stage: 6,
        stageName: "Stage 6: Yōon & Kombinasi Khusus",
        title: "Yōon & JLPT N5 Master Challenge",
        badge: "72 Yōon • Sokuon • 430+ Kata",
        targetChars: [
          "きゃ", "きゅ", "きょ",
          "しゃ", "しゅ", "しょ",
          "ちゃ", "ちゅ", "ちょ",
          "にゃ", "にゅ", "にょ",
          "ひゃ", "ひゅ", "ひょ",
          "みゃ", "みゅ", "みょ",
          "りゃ", "りゅ", "りょ",
          "ぎゃ", "ぎゅ", "ぎょ",
          "じゃ", "じゅ", "じょ",
          "びゃ", "びゅ", "びょ",
          "ぴゃ", "ぴゅ", "ぴょ",
          "キャ", "キュ", "キョ",
          "シャ", "シュ", "ショ",
          "チャ", "チュ", "チョ",
          "ニャ", "ニュ", "ニョ",
          "ヒャ", "ヒュ", "ヒョ",
          "ミャ", "ミュ", "ミョ",
          "リャ", "リュ", "リョ",
          "ギャ", "ギュ", "ギョ",
          "ジャ", "ジュ", "ジョ",
          "ビャ", "ビュ", "ビョ",
          "ピャ", "ピュ", "ピョ"
        ],
        description: "Tantangan kelulusan komprehensif Yōon, sokuon konsonan ganda (っ/ッ), tanda vokal panjang (ー), dan kosakata esensial JLPT N5.",
        script: "all",
        row: "YOON_MASTER"
      }
    ];

    function loadProgress() {
      try {
        const raw = localStorage.getItem(PROGRESS_STORAGE_KEY);
        if (raw) {
          const parsed = JSON.parse(raw);
          userProgress.unlockedLevel = parsed.unlockedLevel || 1;
          userProgress.levels = parsed.levels || {};
          userProgress.totalStars = parsed.totalStars || 0;
        }
        const savedFormat = localStorage.getItem('kanamaster_quiz_format');
        if (savedFormat && ['TYPE_INPUT', 'CHOICE_KANA_TO_ROMAJI', 'CHOICE_ROMAJI_TO_KANA'].includes(savedFormat)) {
          currentQuizFormat = savedFormat;
        }
      } catch (e) {
        console.warn('localStorage not accessible, using in-memory progress');
      }
    }

    function setQuizFormat(format) {
      currentQuizFormat = format;
      try {
        localStorage.setItem('kanamaster_quiz_format', format);
      } catch (e) {}

      document.querySelectorAll('.quiz-format-btn').forEach(btn => {
        if (btn.getAttribute('data-format') === format) {
          btn.className = 'quiz-format-btn px-3.5 py-1 rounded-full text-xs font-bold bg-primary text-white transition border border-primary shadow-xs';
        } else {
          btn.className = 'quiz-format-btn px-3.5 py-1 rounded-full text-xs font-medium bg-white/70 border border-secondary-border text-ink-muted hover:text-ink hover:bg-white transition';
        }
      });

      const formatSelect = document.getElementById('quizFormatSelect');
      if (formatSelect) formatSelect.value = format;
    }

    function generateMultipleChoices(item, format) {
      const isReverse = format === 'CHOICE_ROMAJI_TO_KANA' || format === 'CHOICE_AUDIO_TO_KANA';
      let candidates = [];
      if (item.isCharDrill) {
        candidates = KANA_CHARS.filter(k => k.char !== item.kana && k.script === item.script);
      } else {
        candidates = VOCAB_DATABASE.filter(w => w.kana !== item.kana && w.script === item.script);
      }

      const shuffledCandidates = [...candidates].sort(() => 0.5 - Math.random());
      const distractors = [];

      for (const c of shuffledCandidates) {
        if (distractors.length >= 3) break;
        const key = isReverse ? c.kana || c.char : c.romaji;
        const correctKey = isReverse ? item.kana : item.romaji;
        if (key !== correctKey && !distractors.some(d => (isReverse ? d.kana || d.char : d.romaji) === key)) {
          distractors.push(c);
        }
      }

      while (distractors.length < 3) {
        const fallback = VOCAB_DATABASE[Math.floor(Math.random() * VOCAB_DATABASE.length)];
        distractors.push(fallback);
      }

      const correctOption = {
        id: 'correct',
        kana: item.kana,
        romaji: item.romaji,
        meaning: item.meaning,
        isCorrect: true
      };

      const distractorOptions = distractors.map((d, i) => ({
        id: `distractor_${i}`,
        kana: d.kana || d.char,
        romaji: d.romaji,
        meaning: d.meaning || `Karakter [${d.romaji}]`,
        isCorrect: false
      }));

      return [correctOption, ...distractorOptions].sort(() => 0.5 - Math.random());
    }

    function renderChoicesForQuestion(item, format) {
      currentQuestionChoices = generateMultipleChoices(item, format);
      const grid = document.getElementById('choicesGrid');
      if (!grid) return;
      grid.innerHTML = '';

      currentQuestionChoices.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.id = `choiceBtn_${idx}`;
        btn.onclick = () => handleChoiceSelect(idx);

        if (format === 'CHOICE_ROMAJI_TO_KANA' || format === 'CHOICE_AUDIO_TO_KANA') {
          btn.className = 'choice-option-btn glass-card p-4 rounded-2xl border border-secondary-border flex items-center justify-between text-left hover:border-primary/50 hover:bg-white transition cursor-pointer w-full group active:scale-[0.98]';
          btn.innerHTML = `
            <div class="flex items-center gap-3.5">
              <span class="w-7 h-7 rounded-full bg-black/5 group-hover:bg-primary group-hover:text-white text-ink-muted text-xs font-mono font-bold flex items-center justify-center shrink-0 transition">${idx + 1}</span>
              <div>
                <span class="font-jp font-bold text-2xl text-ink group-hover:text-primary transition block">${opt.kana}</span>
                <span class="text-xs text-ink-muted block line-clamp-1">${opt.meaning ? opt.meaning : opt.romaji}</span>
              </div>
            </div>
          `;
        } else {
          btn.className = 'choice-option-btn glass-card p-4 rounded-2xl border border-secondary-border flex items-center justify-between text-left hover:border-primary/50 hover:bg-white transition cursor-pointer w-full group active:scale-[0.98]';
          btn.innerHTML = `
            <div class="flex items-center gap-3">
              <span class="w-7 h-7 rounded-full bg-black/5 group-hover:bg-primary group-hover:text-white text-ink-muted text-xs font-mono font-bold flex items-center justify-center shrink-0 transition">${idx + 1}</span>
              <div>
                <span class="font-mono font-bold text-base text-ink group-hover:text-primary transition block">${opt.romaji}</span>
                <span class="text-xs text-ink-muted block line-clamp-1">${opt.meaning}</span>
              </div>
            </div>
          `;
        }

        grid.appendChild(btn);
      });
    }

    function handleChoiceSelect(index) {
      if (isQuestionResolved) return;
      const selectedOpt = currentQuestionChoices[index];
      if (!selectedOpt) return;

      const currentItem = currentQuizQueue[currentIndex];
      const isCorrect = selectedOpt.isCorrect;

      isQuestionResolved = true;
      revealHint();

      currentQuestionChoices.forEach((opt, idx) => {
        const btn = document.getElementById(`choiceBtn_${idx}`);
        if (!btn) return;
        btn.disabled = true;
        if (opt.isCorrect) {
          btn.className = 'choice-option-btn p-4 rounded-2xl border-2 border-emerald-500 bg-emerald-500/15 text-emerald-950 flex items-center justify-between text-left transition w-full shadow-xs';
        } else if (idx === index && !isCorrect) {
          btn.className = 'choice-option-btn p-4 rounded-2xl border-2 border-primary bg-primary/10 text-primary flex items-center justify-between text-left transition w-full shadow-xs';
        } else {
          btn.className = 'choice-option-btn p-4 rounded-2xl border border-secondary-border/40 opacity-40 flex items-center justify-between text-left transition w-full cursor-not-allowed';
        }
      });

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
      } else {
        wrongCount++;
        streak = 0;
        playToneSound(false);

        sessionMistakes.push({
          word: currentItem,
          userRomaji: selectedOpt.romaji || selectedOpt.kana
        });

        Array.from(currentItem.kana).forEach(c => {
          if (c === 'ー') return;
          if (KANA_CHARS.some(k => k.char === c)) {
            charMistakeMap[c] = (charMistakeMap[c] || 0) + 1;
          }
        });

        feedbackBox.className = 'p-4 rounded-2xl text-left border bg-primary/10 border-primary/30 text-ink backdrop-blur-md animate-pop';
        feedbackTitle.innerText = 'Pilihan Kurang Tepat';
        feedbackIconWrap.className = 'w-9 h-9 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0';
        feedbackIcon.innerHTML = SVG_CROSS;
      }

      if (currentQuizFormat === 'CHOICE_AUDIO_TO_KANA') {
        const kanaDisplay = document.getElementById('quizHiragana');
        if (kanaDisplay) {
          kanaDisplay.className = 'font-jp text-6xl md:text-8xl font-bold tracking-wider text-ink select-none animate-pop cursor-pointer';
          kanaDisplay.innerText = currentItem.kana;
          kanaDisplay.onclick = () => playCurrentAudio();
        }
      }

      document.getElementById('statCorrect').innerText = correctCount;
      document.getElementById('statWrong').innerText = wrongCount;

      speakJapanese(currentItem.kana);
    }

    function saveProgress() {
      try {
        localStorage.setItem(PROGRESS_STORAGE_KEY, JSON.stringify(userProgress));
      } catch (e) {
        console.warn('Failed to save to localStorage');
      }
    }

    function confirmResetProgress() {
      const modal = document.getElementById('resetModal');
      if (modal) modal.classList.remove('hidden');
    }

    function closeResetModal() {
      const modal = document.getElementById('resetModal');
      if (modal) modal.classList.add('hidden');
    }

    function executeResetProgress() {
      userProgress = {
        unlockedLevel: 1,
        levels: {},
        totalStars: 0
      };
      saveProgress();
      closeResetModal();
      renderRoadmapHeader();
      renderRoadmapGrid();
    }

    function renderStarSVGs(count, max = 3) {
      let html = '';
      for (let i = 1; i <= max; i++) {
        html += i <= count ? SVG_STAR_FILLED : SVG_STAR_OUTLINE;
      }
      return html;
    }

    function renderStarSVGsLarge(count, max = 3) {
      let html = '';
      for (let i = 1; i <= max; i++) {
        html += i <= count ? SVG_STAR_LARGE_FILLED : SVG_STAR_LARGE_OUTLINE;
      }
      return html;
    }

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { LEVELS_CONFIG };
}
