// KanaMaster - Interactive Gojūon (50-Sound) Chart
// Includes Gojūon Dasar (5x10 Grid), Dakuon/Handakuon (5x5 Grid), and Yōon (11x3 Grid).
// Supports Hiragana/Katakana toggle, direct audio playback, and shortcut to canvas writing.

const GOJUON_BASIC_DATA = [
  {
    rowName: 'A (Vokal)',
    hiragana: ['あ', 'い', 'う', 'え', 'お'],
    katakana: ['ア', 'イ', 'ウ', 'エ', 'オ'],
    romaji: ['a', 'i', 'u', 'e', 'o']
  },
  {
    rowName: 'Ka (K)',
    hiragana: ['か', 'き', 'く', 'け', 'こ'],
    katakana: ['カ', 'キ', 'ク', 'ケ', 'コ'],
    romaji: ['ka', 'ki', 'ku', 'ke', 'ko']
  },
  {
    rowName: 'Sa (S)',
    hiragana: ['さ', 'し', 'す', 'せ', 'そ'],
    katakana: ['サ', 'シ', 'ス', 'セ', 'ソ'],
    romaji: ['sa', 'shi', 'su', 'se', 'so']
  },
  {
    rowName: 'Ta (T)',
    hiragana: ['た', 'ち', 'つ', 'て', 'と'],
    katakana: ['タ', 'チ', 'ツ', 'テ', 'ト'],
    romaji: ['ta', 'chi', 'tsu', 'te', 'to']
  },
  {
    rowName: 'Na (N)',
    hiragana: ['な', 'に', 'ぬ', 'ね', 'の'],
    katakana: ['ナ', 'ニ', 'ヌ', 'ネ', 'ノ'],
    romaji: ['na', 'ni', 'nu', 'ne', 'no']
  },
  {
    rowName: 'Ha (H)',
    hiragana: ['は', 'ひ', 'ふ', 'へ', 'ほ'],
    katakana: ['ハ', 'ヒ', 'フ', 'ヘ', 'ホ'],
    romaji: ['ha', 'hi', 'fu', 'he', 'ho']
  },
  {
    rowName: 'Ma (M)',
    hiragana: ['ま', 'み', 'む', 'め', 'mo'],
    katakana: ['マ', 'ミ', 'ム', 'メ', 'モ'],
    romaji: ['ma', 'mi', 'mu', 'me', 'mo']
  },
  {
    rowName: 'Ya (Y)',
    hiragana: ['や', null, 'ゆ', null, 'よ'],
    katakana: ['ヤ', null, 'ユ', null, 'ヨ'],
    romaji: ['ya', null, 'yu', null, 'yo']
  },
  {
    rowName: 'Ra (R)',
    hiragana: ['ら', 'り', 'る', 'れ', 'ろ'],
    katakana: ['ラ', 'リ', 'ル', 'レ', 'ロ'],
    romaji: ['ra', 'ri', 'ru', 're', 'ro']
  },
  {
    rowName: 'Wa (W/N)',
    hiragana: ['わ', null, null, null, 'を'],
    katakana: ['ワ', null, null, null, 'ヲ'],
    romaji: ['wa', null, null, null, 'wo']
  },
  {
    rowName: 'N (Sengau)',
    hiragana: ['ん', null, null, null, null],
    katakana: ['ン', null, null, null, null],
    romaji: ['n', null, null, null, null]
  }
];

const DAKUON_DATA = [
  {
    rowName: 'Ga (G)',
    hiragana: ['が', 'ぎ', 'ぐ', 'げ', 'ご'],
    katakana: ['ガ', 'ギ', 'グ', 'ゲ', 'ゴ'],
    romaji: ['ga', 'gi', 'gu', 'ge', 'go']
  },
  {
    rowName: 'Za (Z/J)',
    hiragana: ['ざ', 'じ', 'ず', 'ぜ', 'ぞ'],
    katakana: ['ザ', 'ジ', 'ズ', 'ゼ', 'ゾ'],
    romaji: ['za', 'ji', 'zu', 'ze', 'zo']
  },
  {
    rowName: 'Da (D)',
    hiragana: ['だ', 'ぢ', 'づ', 'で', 'ど'],
    katakana: ['ダ', 'ヂ', 'ヅ', 'デ', 'ド'],
    romaji: ['da', 'ji', 'zu', 'de', 'do']
  },
  {
    rowName: 'Ba (B)',
    hiragana: ['ば', 'び', 'ぶ', 'べ', 'ぼ'],
    katakana: ['バ', 'ビ', 'ブ', 'ベ', 'ボ'],
    romaji: ['ba', 'bi', 'bu', 'be', 'bo']
  },
  {
    rowName: 'Pa (P)',
    hiragana: ['ぱ', 'ぴ', 'ぷ', 'ぺ', 'ぽ'],
    katakana: ['パ', 'ピ', 'プ', 'ペ', 'ポ'],
    romaji: ['pa', 'pi', 'pu', 'pe', 'po']
  }
];

const YOON_DATA = [
  {
    rowName: 'Kya (K)',
    hiragana: ['きゃ', 'きゅ', 'きょ'],
    katakana: ['キャ', 'キュ', 'キョ'],
    romaji: ['kya', 'kyu', 'kyo']
  },
  {
    rowName: 'Sha (S)',
    hiragana: ['しゃ', 'しゅ', 'しょ'],
    katakana: ['シャ', 'シュ', 'ショ'],
    romaji: ['sha', 'shu', 'sho']
  },
  {
    rowName: 'Cha (T)',
    hiragana: ['ちゃ', 'ちゅ', 'ちょ'],
    katakana: ['チャ', 'チュ', 'チョ'],
    romaji: ['cha', 'chu', 'cho']
  },
  {
    rowName: 'Nya (N)',
    hiragana: ['にゃ', 'にゅ', 'にょ'],
    katakana: ['ニャ', 'ニュ', 'ニョ'],
    romaji: ['nya', 'nyu', 'nyo']
  },
  {
    rowName: 'Hya (H)',
    hiragana: ['ひゃ', 'ひゅ', 'ひょ'],
    katakana: ['ヒャ', 'ヒュ', 'ヒョ'],
    romaji: ['hya', 'hyu', 'hyo']
  },
  {
    rowName: 'Mya (M)',
    hiragana: ['みゃ', 'みゅ', 'みょ'],
    katakana: ['ミャ', 'ミュ', 'ミョ'],
    romaji: ['mya', 'myu', 'myo']
  },
  {
    rowName: 'Rya (R)',
    hiragana: ['りゃ', 'りゅ', 'りょ'],
    katakana: ['リャ', 'リュ', 'リョ'],
    romaji: ['rya', 'ryu', 'ryo']
  },
  {
    rowName: 'Gya (G)',
    hiragana: ['ぎゃ', 'ぎゅ', 'ぎょ'],
    katakana: ['ギャ', 'ギュ', 'ギョ'],
    romaji: ['gya', 'gyu', 'gyo']
  },
  {
    rowName: 'Ja (Z/J)',
    hiragana: ['じゃ', 'じゅ', 'じょ'],
    katakana: ['ジャ', 'ジュ', 'ジョ'],
    romaji: ['ja', 'ju', 'jo']
  },
  {
    rowName: 'Bya (B)',
    hiragana: ['びゃ', 'びゅ', 'びょ'],
    katakana: ['ビャ', 'ビュ', 'ビョ'],
    romaji: ['bya', 'byu', 'byo']
  },
  {
    rowName: 'Pya (P)',
    hiragana: ['ぴゃ', 'ぴゅ', 'ぴょ'],
    katakana: ['ピャ', 'ピュ', 'ピョ'],
    romaji: ['pya', 'pyu', 'pyo']
  }
];

let currentChartScript = 'hiragana'; // 'hiragana' | 'katakana'
let chartSearchQuery = '';

function initGojuonChart() {
  renderGojuonTable();
  renderDakuonTable();
  renderYoonTable();
}

function setChartScript(script) {
  currentChartScript = script;
  const hiraBtn = document.getElementById('chartTabHiragana');
  const kataBtn = document.getElementById('chartTabKatakana');

  const activeClass = 'px-4 py-2 rounded-full text-xs font-bold bg-primary text-white shadow-glass-cta border border-primary transition';
  const inactiveClass = 'px-4 py-2 rounded-full text-xs font-medium bg-white/70 border border-secondary-border text-ink-muted hover:text-ink hover:bg-white transition';

  if (hiraBtn && kataBtn) {
    if (script === 'hiragana') {
      hiraBtn.className = activeClass;
      kataBtn.className = inactiveClass;
    } else {
      hiraBtn.className = inactiveClass;
      kataBtn.className = activeClass;
    }
  }

  renderGojuonTable();
  renderDakuonTable();
  renderYoonTable();
}

function filterGojuonChart() {
  const input = document.getElementById('chartSearchInput');
  chartSearchQuery = input ? input.value.trim().toLowerCase() : '';
  renderGojuonTable();
  renderDakuonTable();
  renderYoonTable();
}

function createKanaCell(char, romaji) {
  if (!char) {
    return `
      <div class="h-24 sm:h-28 rounded-2xl border border-dashed border-secondary-border/30 bg-black/[0.01] flex items-center justify-center text-ink-muted/30 text-xs select-none">
        —
      </div>
    `;
  }

  const isMatched = chartSearchQuery && (
    char.includes(chartSearchQuery) ||
    romaji.toLowerCase().includes(chartSearchQuery)
  );

  const highlightBorder = isMatched ? 'border-2 border-primary bg-primary/5 ring-2 ring-primary/20' : 'border border-secondary-border/80';

  return `
    <div class="glass-card ${highlightBorder} h-24 sm:h-28 rounded-2xl p-2 sm:p-2.5 flex flex-col justify-between items-center text-center group hover:border-primary hover:bg-white hover:shadow-md transition-all duration-200">
      <div class="cursor-pointer" onclick="speakJapanese('${char}')" title="Klik karakter untuk dengar suara">
        <span class="font-jp font-bold text-2xl sm:text-3xl text-ink group-hover:text-primary transition block leading-tight">${char}</span>
        <span class="font-mono text-xs font-semibold text-ink-muted group-hover:text-primary/80 transition block">${romaji}</span>
      </div>
      <div class="flex items-center gap-1.5 pt-1 w-full justify-center border-t border-secondary-border/30">
        <button type="button" onclick="event.stopPropagation(); speakJapanese('${char}')" class="p-1 sm:p-1.5 rounded-full text-ink-muted hover:text-primary hover:bg-primary/10 transition" title="Putar lafal audio (${romaji})">
          <svg class="w-3.5 h-3.5 stroke-[2]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
        </button>
        <button type="button" onclick="event.stopPropagation(); openCanvasForChar('${char}')" class="p-1 sm:p-1.5 rounded-full text-ink-muted hover:text-primary hover:bg-primary/10 transition" title="Latih tulis ${char} di Kanvas">
          <svg class="w-3.5 h-3.5 stroke-[2]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"/></svg>
        </button>
      </div>
    </div>
  `;
}

function renderGojuonTable() {
  const container = document.getElementById('gojuonGridBody');
  if (!container) return;
  container.innerHTML = '';

  GOJUON_BASIC_DATA.forEach(row => {
    const rowWrap = document.createElement('div');
    rowWrap.className = 'grid grid-cols-6 gap-2 sm:gap-3 items-center';

    const header = `
      <div class="text-right pr-2 sm:pr-3">
        <span class="text-xs font-bold text-ink-muted uppercase block tracking-wider">${row.rowName}</span>
      </div>
    `;

    const cells = row.romaji.map((rom, idx) => {
      const char = currentChartScript === 'hiragana' ? row.hiragana[idx] : row.katakana[idx];
      return createKanaCell(char, rom);
    }).join('');

    rowWrap.innerHTML = header + cells;
    container.appendChild(rowWrap);
  });
}

function renderDakuonTable() {
  const container = document.getElementById('dakuonGridBody');
  if (!container) return;
  container.innerHTML = '';

  DAKUON_DATA.forEach(row => {
    const rowWrap = document.createElement('div');
    rowWrap.className = 'grid grid-cols-6 gap-2 sm:gap-3 items-center';

    const header = `
      <div class="text-right pr-2 sm:pr-3">
        <span class="text-xs font-bold text-ink-muted uppercase block tracking-wider">${row.rowName}</span>
      </div>
    `;

    const cells = row.romaji.map((rom, idx) => {
      const char = currentChartScript === 'hiragana' ? row.hiragana[idx] : row.katakana[idx];
      return createKanaCell(char, rom);
    }).join('');

    rowWrap.innerHTML = header + cells;
    container.appendChild(rowWrap);
  });
}

function renderYoonTable() {
  const container = document.getElementById('yoonGridBody');
  if (!container) return;
  container.innerHTML = '';

  YOON_DATA.forEach(row => {
    const rowWrap = document.createElement('div');
    rowWrap.className = 'grid grid-cols-4 gap-2 sm:gap-3 items-center';

    const header = `
      <div class="text-right pr-2 sm:pr-3">
        <span class="text-xs font-bold text-ink-muted uppercase block tracking-wider">${row.rowName}</span>
      </div>
    `;

    const cells = row.romaji.map((rom, idx) => {
      const char = currentChartScript === 'hiragana' ? row.hiragana[idx] : row.katakana[idx];
      return createKanaCell(char, rom);
    }).join('');

    rowWrap.innerHTML = header + cells;
    container.appendChild(rowWrap);
  });
}
