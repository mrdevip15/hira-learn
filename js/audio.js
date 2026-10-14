// Reusable Modern SVG Icons
    const SVG_SPEAKER = `<svg class="w-4 h-4 inline-block shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.083-1.64.24-2.42.234-.847 1.058-1.354 1.938-1.354h2.322Z"/></svg>`;
    const SVG_PEN = `<svg class="w-3.5 h-3.5 inline-block shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"/></svg>`;
    const SVG_CHECK = `<svg class="w-5 h-5 inline-block text-emerald-600 stroke-[3]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>`;
    const SVG_CROSS = `<svg class="w-5 h-5 inline-block text-primary stroke-[3]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`;
    const SVG_EYE = `<svg class="w-4 h-4 text-ink-muted shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`;
    const SVG_EYE_SLASH = `<svg class="w-4 h-4 text-ink-muted shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>`;
    const SVG_STAR_FILLED = `<svg class="w-3.5 h-3.5 fill-amber-400 text-amber-500 inline-block" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`;
    const SVG_STAR_OUTLINE = `<svg class="w-3.5 h-3.5 text-secondary/40 stroke-current inline-block" fill="none" stroke-width="2" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`;
    const SVG_STAR_LARGE_FILLED = `<svg class="w-7 h-7 fill-amber-400 text-amber-500 inline-block drop-shadow-sm" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`;
    const SVG_STAR_LARGE_OUTLINE = `<svg class="w-7 h-7 text-secondary/30 stroke-current inline-block" fill="none" stroke-width="2" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`;
    const SVG_LOCK = `<svg class="w-3.5 h-3.5 inline-block stroke-[2]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`;
    const SVG_UNLOCK = `<svg class="w-3.5 h-3.5 inline-block text-primary stroke-[2]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 9.9-1"/></svg>`;

    // State variables
    let currentQuizQueue = [];
    let currentIndex = 0;
    let correctCount = 0;
    let wrongCount = 0;
    let streak = 0;
    let sessionMistakes = [];
    let charMistakeMap = {};
    let isQuestionResolved = false;
    let currentVocabScript = 'ALL';
    let currentFilterRow = 'ALL';
    let isTargetedDrillActive = false;
    let targetedCharsList = [];
    let currentCanvasQuickTab = 'HIRA_BASIC';

    // Progressive Levels State & Storage
    const PROGRESS_STORAGE_KEY = 'kanamaster_progress';
    let quizSubMode = 'roadmap'; // 'roadmap' | 'free'
    let activeQuizLevelId = null; // null for free practice, 1..22 for level mode
    let currentRoadmapStage = 'ALL'; // 'ALL' | 1 | 2 | 3 | 4 | 5
    let currentQuizFormat = 'TYPE_INPUT'; // 'TYPE_INPUT' | 'CHOICE_KANA_TO_ROMAJI' | 'CHOICE_ROMAJI_TO_KANA'
    let currentQuestionChoices = [];
    let userProgress = {
      unlockedLevel: 1,
      levels: {},
      totalStars: 0
    };

    // Tone.js Synth
    let synth = null;
    function initAudio() {
      if (!synth && window.Tone) {
        synth = new Tone.PolySynth(Tone.Synth, {
          oscillator: { type: 'sine' },
          envelope: { attack: 0.01, decay: 0.1, sustain: 0.1, release: 0.4 }
        }).toDestination();
        synth.volume.value = -6;
      }
    }

    function playToneSound(isSuccess) {
      try {
        initAudio();
        if (Tone.context.state !== 'running') {
          Tone.start();
        }
        if (synth) {
          const now = Tone.now();
          if (isSuccess) {
            synth.triggerAttackRelease("E5", "16n", now);
            synth.triggerAttackRelease("G#5", "16n", now + 0.08);
            synth.triggerAttackRelease("B5", "8n", now + 0.16);
          } else {
            synth.triggerAttackRelease("D4", "16n", now);
            synth.triggerAttackRelease("C#4", "8n", now + 0.1);
          }
        }
      } catch (e) {}
    }

    // Japanese Voice Detection & Synthesis
    let japaneseVoice = null;
    let hasJapaneseVoice = false;

    function detectJapaneseVoice() {
      if (!('speechSynthesis' in window)) {
        updateVoiceUI(false);
        return;
      }

      const voices = window.speechSynthesis.getVoices();
      japaneseVoice = voices.find(v => {
        const lang = (v.lang || '').toLowerCase().replace('_', '-');
        const name = (v.name || '').toLowerCase();
        return lang.startsWith('ja') || name.includes('japanese') || name.includes('nihongo') || name.includes('日本語') || name.includes('kyoko') || name.includes('otoya');
      }) || null;

      hasJapaneseVoice = !!japaneseVoice;
      updateVoiceUI(hasJapaneseVoice);
    }

    function updateVoiceUI(hasVoice) {
      document.querySelectorAll('.voice-ui').forEach(el => {
        if (hasVoice) {
          el.classList.remove('hidden');
        } else {
          el.classList.add('hidden');
        }
      });

      const hiraganaEl = document.getElementById('quizHiragana');
      if (hiraganaEl) {
        if (hasVoice) {
          hiraganaEl.title = 'Klik untuk mendengar suara';
          hiraganaEl.classList.add('cursor-pointer');
        } else {
          hiraganaEl.title = '';
          hiraganaEl.classList.remove('cursor-pointer');
        }
      }

      if (typeof VOCAB_DATABASE !== 'undefined' && VOCAB_DATABASE.length) {
        if (typeof filterVocabList === 'function') {
          filterVocabList();
        }
      }
    }

    if ('speechSynthesis' in window) {
      window.speechSynthesis.onvoiceschanged = detectJapaneseVoice;
      detectJapaneseVoice();
    }

    function speakJapanese(text) {
      if (!hasJapaneseVoice || !japaneseVoice || !('speechSynthesis' in window)) return;
      try {
        if (window.speechSynthesis.speaking) {
          window.speechSynthesis.cancel();
        }
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.voice = japaneseVoice;
        utterance.lang = japaneseVoice.lang || 'ja-JP';
        utterance.rate = 0.85;
        window.speechSynthesis.speak(utterance);
      } catch (e) {}
    }
