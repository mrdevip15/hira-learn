// KanaMaster Writing Practice Canvas (Genkouyoushi)
// Interactive drawing canvas with stroke history, undo, brush controls, stroke order hints, and export.

let canvas, ctx;
let isDrawing = false;
let showGuide = true;
let showStrokeNumbers = false;
let currentBrushSize = 8; // 4: Tipis, 8: Sedang, 14: Tebal
let currentBrushColor = '#000000'; // #000000: Hitam, #D52B1E: Claro Red, #64748B: Slate
let currentCanvasQuickTab = 'HIRA_BASIC';

// Stroke history tracking: Array of { color: string, size: number, points: Array<{x: number, y: number}> }
const strokeHistory = [];
let currentStroke = null;

const HIRA_YOON_LIST = [
  { char: 'きゃ', romaji: 'kya' }, { char: 'きゅ', romaji: 'kyu' }, { char: 'きょ', romaji: 'kyo' },
  { char: 'しゃ', romaji: 'sha' }, { char: 'しゅ', romaji: 'shu' }, { char: 'しょ', romaji: 'sho' },
  { char: 'ちゃ', romaji: 'cha' }, { char: 'ちゅ', romaji: 'chu' }, { char: 'ちょ', romaji: 'cho' },
  { char: 'にゃ', romaji: 'nya' }, { char: 'にゅ', romaji: 'nyu' }, { char: 'にょ', romaji: 'nyo' },
  { char: 'ひゃ', romaji: 'hya' }, { char: 'ひゅ', romaji: 'hyu' }, { char: 'ひょ', romaji: 'hyo' },
  { char: 'みゃ', romaji: 'mya' }, { char: 'みゅ', romaji: 'myu' }, { char: 'みょ', romaji: 'myo' },
  { char: 'りゃ', romaji: 'rya' }, { char: 'りゅ', romaji: 'ryu' }, { char: 'りょ', romaji: 'ryo' },
  { char: 'ぎゃ', romaji: 'gya' }, { char: 'ぎゅ', romaji: 'gyu' }, { char: 'ぎょ', romaji: 'gyo' },
  { char: 'じゃ', romaji: 'ja' },  { char: 'じゅ', romaji: 'ju' },  { char: 'じょ', romaji: 'jo' },
  { char: 'びゃ', romaji: 'bya' }, { char: 'びゅ', romaji: 'byu' }, { char: 'びょ', romaji: 'byo' },
  { char: 'ぴゃ', romaji: 'pya' }, { char: 'ぴゅ', romaji: 'pyu' }, { char: 'ぴょ', romaji: 'pyo' }
];

const KATA_YOON_LIST = [
  { char: 'キャ', romaji: 'kya' }, { char: 'キュ', romaji: 'kyu' }, { char: 'キョ', romaji: 'kyo' },
  { char: 'シャ', romaji: 'sha' }, { char: 'シュ', romaji: 'shu' }, { char: 'ショ', romaji: 'sho' },
  { char: 'チャ', romaji: 'cha' }, { char: 'チュ', romaji: 'chu' }, { char: 'チョ', romaji: 'cho' },
  { char: 'ニャ', romaji: 'nya' }, { char: 'ニュ', romaji: 'nyu' }, { char: 'ニョ', romaji: 'nyo' },
  { char: 'ヒャ', romaji: 'hya' }, { char: 'ヒュ', romaji: 'hyu' }, { char: 'ヒョ', romaji: 'hyo' },
  { char: 'ミャ', romaji: 'mya' }, { char: 'ミュ', romaji: 'myu' }, { char: 'ミョ', romaji: 'myo' },
  { char: 'リャ', romaji: 'rya' }, { char: 'リュ', romaji: 'ryu' }, { char: 'リョ', romaji: 'ryo' },
  { char: 'ギャ', romaji: 'gya' }, { char: 'ギュ', romaji: 'gyu' }, { char: 'ギョ', romaji: 'gyo' },
  { char: 'ジャ', romaji: 'ja' },  { char: 'ジュ', romaji: 'ju' },  { char: 'ジョ', romaji: 'jo' },
  { char: 'ビャ', romaji: 'bya' }, { char: 'ビュ', romaji: 'byu' }, { char: 'ビョ', romaji: 'byo' },
  { char: 'ピャ', romaji: 'pya' }, { char: 'ピュ', romaji: 'pyu' }, { char: 'ピョ', romaji: 'pyo' }
];

function initCanvas() {
  canvas = document.getElementById('practiceCanvas');
  if (!canvas) return;
  ctx = canvas.getContext('2d');

  ctx.lineWidth = currentBrushSize;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.strokeStyle = currentBrushColor;

  // Mouse events
  canvas.addEventListener('mousedown', startDraw);
  canvas.addEventListener('mousemove', draw);
  canvas.addEventListener('mouseup', stopDraw);
  canvas.addEventListener('mouseleave', stopDraw);

  // Touch events (with accurate scaling)
  canvas.addEventListener('touchstart', (e) => {
    e.preventDefault();
    if (!e.touches || e.touches.length === 0) return;
    const touch = e.touches[0];
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / (rect.width || 320);
    const scaleY = canvas.height / (rect.height || 320);
    const pos = {
      x: (touch.clientX - rect.left) * scaleX,
      y: (touch.clientY - rect.top) * scaleY
    };
    isDrawing = true;
    currentStroke = { color: currentBrushColor, size: currentBrushSize, points: [pos] };
    ctx.beginPath();
    ctx.strokeStyle = currentBrushColor;
    ctx.lineWidth = currentBrushSize;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.moveTo(pos.x, pos.y);
  }, { passive: false });

  canvas.addEventListener('touchmove', (e) => {
    e.preventDefault();
    if (!isDrawing || !currentStroke || !e.touches || e.touches.length === 0) return;
    const touch = e.touches[0];
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / (rect.width || 320);
    const scaleY = canvas.height / (rect.height || 320);
    const pos = {
      x: (touch.clientX - rect.left) * scaleX,
      y: (touch.clientY - rect.top) * scaleY
    };
    currentStroke.points.push(pos);
    ctx.lineTo(pos.x, pos.y);
    ctx.stroke();
  }, { passive: false });

  canvas.addEventListener('touchend', (e) => {
    e.preventDefault();
    stopDraw();
  }, { passive: false });

  // Keyboard shortcut listener for Undo (Ctrl+Z / Cmd+Z)
  window.removeEventListener('keydown', handleCanvasKeyboardShortcut);
  window.addEventListener('keydown', handleCanvasKeyboardShortcut);

  populateCharGuideOptions();
  renderCanvasQuickPicker();
  updateBrushSizeUI();
  updateBrushColorUI();
  updateUndoButtonState();
  updateStrokeInfoPanel();
}

function handleCanvasKeyboardShortcut(e) {
  if ((e.ctrlKey || e.metaKey) && e.key && e.key.toLowerCase() === 'z' && !e.shiftKey) {
    const drawView = document.getElementById('drawView');
    if (!drawView || !drawView.classList.contains('hidden')) {
      e.preventDefault();
      undoLastStroke();
    }
  }
}

function getMousePos(e) {
  if (!canvas) return { x: 0, y: 0 };
  const rect = canvas.getBoundingClientRect();
  const scaleX = canvas.width / (rect.width || 320);
  const scaleY = canvas.height / (rect.height || 320);
  return {
    x: (e.clientX - rect.left) * scaleX,
    y: (e.clientY - rect.top) * scaleY
  };
}

function startDraw(e) {
  isDrawing = true;
  const pos = getMousePos(e);
  currentStroke = { color: currentBrushColor, size: currentBrushSize, points: [pos] };
  ctx.beginPath();
  ctx.strokeStyle = currentBrushColor;
  ctx.lineWidth = currentBrushSize;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.moveTo(pos.x, pos.y);
}

function draw(e) {
  if (!isDrawing || !currentStroke) return;
  const pos = getMousePos(e);
  currentStroke.points.push(pos);
  ctx.lineTo(pos.x, pos.y);
  ctx.stroke();
}

function stopDraw() {
  if (isDrawing) {
    ctx.closePath();
    isDrawing = false;
    if (currentStroke && currentStroke.points && currentStroke.points.length > 0) {
      strokeHistory.push(currentStroke);
    }
    currentStroke = null;
    updateUndoButtonState();
  }
}

function clearCanvas() {
  if (ctx && canvas) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
  strokeHistory.length = 0;
  currentStroke = null;
  updateUndoButtonState();
}

function undoLastStroke() {
  if (!strokeHistory || strokeHistory.length === 0) return;
  strokeHistory.pop();
  redrawCanvas();
  updateUndoButtonState();
}

function redrawCanvas() {
  if (!ctx || !canvas) return;
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (const stroke of strokeHistory) {
    if (!stroke.points || stroke.points.length === 0) continue;
    ctx.beginPath();
    ctx.strokeStyle = stroke.color || '#000000';
    ctx.lineWidth = stroke.size || 8;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.moveTo(stroke.points[0].x, stroke.points[0].y);
    if (stroke.points.length === 1) {
      ctx.lineTo(stroke.points[0].x + 0.1, stroke.points[0].y + 0.1);
    } else {
      for (let i = 1; i < stroke.points.length; i++) {
        ctx.lineTo(stroke.points[i].x, stroke.points[i].y);
      }
    }
    ctx.stroke();
    ctx.closePath();
  }

  // Restore active stroke settings
  ctx.strokeStyle = currentBrushColor;
  ctx.lineWidth = currentBrushSize;
}

function updateUndoButtonState() {
  const btn = document.getElementById('undoStrokeBtn');
  if (!btn) return;
  if (strokeHistory.length > 0) {
    btn.disabled = false;
    btn.classList.remove('opacity-40', 'cursor-not-allowed');
  } else {
    btn.disabled = true;
    btn.classList.add('opacity-40', 'cursor-not-allowed');
  }
}

function setBrushSize(size) {
  currentBrushSize = Number(size) || 8;
  if (ctx) ctx.lineWidth = currentBrushSize;
  updateBrushSizeUI();
}

function updateBrushSizeUI() {
  const sizes = [4, 8, 14];
  sizes.forEach(s => {
    const btn = document.getElementById(`brushSize${s}Btn`);
    if (!btn) return;
    if (currentBrushSize === s) {
      btn.className = 'brush-size-btn px-3 py-1.5 rounded-full text-xs font-bold bg-primary text-white shadow-xs transition';
    } else {
      btn.className = 'brush-size-btn px-3 py-1.5 rounded-full text-xs font-medium bg-white/70 border border-secondary-border text-ink-muted hover:text-ink hover:bg-white transition';
    }
  });
}

function setBrushColor(color) {
  currentBrushColor = color || '#000000';
  if (ctx) ctx.strokeStyle = currentBrushColor;
  updateBrushColorUI();
}

function updateBrushColorUI() {
  const colors = [
    { color: '#000000', id: 'brushColorBlack' },
    { color: '#D52B1E', id: 'brushColorRed' },
    { color: '#64748B', id: 'brushColorSlate' }
  ];
  colors.forEach(c => {
    const btn = document.getElementById(c.id);
    if (!btn) return;
    if (currentBrushColor.toLowerCase() === c.color.toLowerCase()) {
      btn.classList.add('ring-2', 'ring-offset-2', 'ring-primary', 'scale-110');
    } else {
      btn.classList.remove('ring-2', 'ring-offset-2', 'ring-primary', 'scale-110');
    }
  });
}

function toggleStrokeNumbers() {
  showStrokeNumbers = !showStrokeNumbers;
  renderStrokeHints();
  updateStrokeNumbersBtnUI();
}

function updateStrokeNumbersBtnUI() {
  const btn = document.getElementById('toggleStrokeNumBtn');
  if (!btn) return;
  if (showStrokeNumbers) {
    btn.classList.add('bg-primary', 'text-white');
    btn.classList.remove('glass-btn-secondary', 'text-ink');
  } else {
    btn.classList.remove('bg-primary', 'text-white');
    btn.classList.add('glass-btn-secondary', 'text-ink');
  }
}

function renderStrokeHints() {
  let container = document.getElementById('strokeHintsOverlay');
  if (!container && canvas && canvas.parentElement) {
    container = document.createElement('div');
    container.id = 'strokeHintsOverlay';
    container.className = 'absolute inset-0 pointer-events-none z-20';
    canvas.parentElement.appendChild(container);
  }
  if (!container) return;
  container.innerHTML = '';

  if (!showStrokeNumbers) return;

  const select = document.getElementById('charGuideSelect');
  const kana = select ? select.value : 'あ';
  const data = typeof getStrokeData === 'function' ? getStrokeData(kana) : (typeof STROKE_DATA !== 'undefined' ? STROKE_DATA[kana] : null);

  if (!data || !data.points) return;

  data.points.forEach(pt => {
    const badge = document.createElement('div');
    badge.className = 'absolute -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-primary text-white text-[11px] font-bold flex items-center justify-center shadow-md border-2 border-white pointer-events-none transform hover:scale-110 transition-transform select-none z-20';
    badge.style.left = `${pt.x}px`;
    badge.style.top = `${pt.y}px`;
    badge.innerText = pt.num;
    badge.title = `Goresan ke-${pt.num}`;
    container.appendChild(badge);
  });
}

function updateStrokeInfoPanel() {
  const countEl = document.getElementById('strokeCountDisplay');
  const stepsEl = document.getElementById('strokeStepsList');
  if (!countEl && !stepsEl) return;

  const select = document.getElementById('charGuideSelect');
  const kana = select ? select.value : 'あ';
  const data = typeof getStrokeData === 'function' ? getStrokeData(kana) : (typeof STROKE_DATA !== 'undefined' ? STROKE_DATA[kana] : null);

  if (countEl) {
    countEl.innerText = data ? `${data.strokes} Goresan` : '-';
  }
  if (stepsEl) {
    stepsEl.innerHTML = '';
    if (data && data.steps && data.steps.length > 0) {
      data.steps.forEach(s => {
        const li = document.createElement('li');
        li.className = 'text-xs text-ink-muted leading-relaxed flex items-start gap-1.5';
        li.innerHTML = `<span class="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0"></span><span>${s}</span>`;
        stepsEl.appendChild(li);
      });
    }
  }
}

function downloadCanvasImage() {
  if (!canvas) return;

  const select = document.getElementById('charGuideSelect');
  const kana = select ? select.value : 'kana';
  const timestamp = Date.now();
  const filename = `kanamaster_${kana}_${timestamp}.png`;

  const exportCanvas = document.createElement('canvas');
  exportCanvas.width = canvas.width;
  exportCanvas.height = canvas.height;
  const expCtx = exportCanvas.getContext('2d');

  // Background putih bersih
  expCtx.fillStyle = '#FFFFFF';
  expCtx.fillRect(0, 0, exportCanvas.width, exportCanvas.height);

  // Garis kisi Genkouyoushi
  expCtx.strokeStyle = 'rgba(213, 43, 30, 0.2)';
  expCtx.lineWidth = 1;
  expCtx.setLineDash([4, 4]);
  expCtx.beginPath();
  expCtx.moveTo(exportCanvas.width / 2, 0);
  expCtx.lineTo(exportCanvas.width / 2, exportCanvas.height);
  expCtx.moveTo(0, exportCanvas.height / 2);
  expCtx.lineTo(exportCanvas.width, exportCanvas.height / 2);
  expCtx.stroke();
  expCtx.setLineDash([]);

  // Bayangan panduan huruf (jika aktif)
  if (showGuide) {
    expCtx.fillStyle = 'rgba(0, 0, 0, 0.08)';
    const fontSize = kana.length > 1 ? 130 : 180;
    expCtx.font = `bold ${fontSize}px "Zen Kaku Gothic New", "Noto Serif JP", sans-serif`;
    expCtx.textAlign = 'center';
    expCtx.textBaseline = 'middle';
    expCtx.fillText(kana, exportCanvas.width / 2, exportCanvas.height / 2 + 10);
  }

  // Salin goresan kanvas pengguna
  expCtx.drawImage(canvas, 0, 0);

  // Label watermark KanaMaster
  expCtx.fillStyle = '#ADAFAF';
  expCtx.font = 'bold 10px Arial, sans-serif';
  expCtx.textAlign = 'right';
  expCtx.textBaseline = 'bottom';
  expCtx.fillText('KanaMaster • 原稿用紙', exportCanvas.width - 12, exportCanvas.height - 10);

  // Unduh berkas PNG
  const link = document.createElement('a');
  link.download = filename;
  link.href = exportCanvas.toDataURL('image/png');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function populateCharGuideOptions() {
  const select = document.getElementById('charGuideSelect');
  if (!select) return;
  select.innerHTML = '';

  const groups = [
    { label: 'Hiragana Dasar (46)', list: (typeof KANA_CHARS !== 'undefined' ? KANA_CHARS : []).filter(k => k.script === 'hiragana' && ['A','KA','SA','TA','NA','HA','MA','YA','RA','WA'].includes(k.row)) },
    { label: 'Hiragana Dakuon & Handakuon (25)', list: (typeof KANA_CHARS !== 'undefined' ? KANA_CHARS : []).filter(k => k.script === 'hiragana' && ['GA','ZA','DA','BA','PA'].includes(k.row)) },
    { label: 'Hiragana Yōon (33)', list: HIRA_YOON_LIST },
    { label: 'Katakana Dasar (46)', list: (typeof KANA_CHARS !== 'undefined' ? KANA_CHARS : []).filter(k => k.script === 'katakana' && ['A','KA','SA','TA','NA','HA','MA','YA','RA','WA'].includes(k.row)) },
    { label: 'Katakana Dakuon & Handakuon (25)', list: (typeof KANA_CHARS !== 'undefined' ? KANA_CHARS : []).filter(k => k.script === 'katakana' && ['GA','ZA','DA','BA','PA'].includes(k.row)) },
    { label: 'Katakana Yōon (33)', list: KATA_YOON_LIST }
  ];

  groups.forEach(g => {
    if (!g.list || g.list.length === 0) return;
    const optgroup = document.createElement('optgroup');
    optgroup.label = g.label;
    g.list.forEach(item => {
      const opt = document.createElement('option');
      opt.value = item.char;
      opt.innerText = `${item.char} (${item.romaji || ''})` + (item.row ? ` - ${item.row}` : '');
      optgroup.appendChild(opt);
    });
    select.appendChild(optgroup);
  });
}

function changeCanvasGuide() {
  const select = document.getElementById('charGuideSelect');
  if (!select) return;
  const val = select.value;
  const wm = document.getElementById('canvasWatermark');
  if (wm) {
    wm.innerText = val;
    if (val.length > 1) {
      wm.className = 'absolute inset-0 flex items-center justify-center font-jp text-[110px] md:text-[140px] font-bold text-black/10 select-none pointer-events-none transition-opacity duration-300';
    } else {
      wm.className = 'absolute inset-0 flex items-center justify-center font-jp text-[180px] md:text-[230px] font-bold text-black/10 select-none pointer-events-none transition-opacity duration-300';
    }
  }
  clearCanvas();
  renderStrokeHints();
  updateStrokeInfoPanel();
}

function selectQuickChar(char) {
  const select = document.getElementById('charGuideSelect');
  if (select) {
    let opt = select.querySelector(`option[value="${char}"]`);
    if (!opt) {
      opt = document.createElement('option');
      opt.value = char;
      opt.innerText = `${char} (Karakter)`;
      select.appendChild(opt);
    }
    select.value = char;
  }
  changeCanvasGuide();
}

function toggleGuideWatermark() {
  showGuide = !showGuide;
  const wm = document.getElementById('canvasWatermark');
  const btn = document.getElementById('toggleGuideBtn');
  if (showGuide) {
    if (wm) wm.style.opacity = '1';
    if (btn) btn.innerHTML = `<svg class="w-4 h-4 text-ink-muted" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg> <span>Sembunyikan Bayangan</span>`;
  } else {
    if (wm) wm.style.opacity = '0';
    if (btn) btn.innerHTML = `<svg class="w-4 h-4 text-ink-muted" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg> <span>Tampilkan Bayangan</span>`;
  }
}

function playCanvasKanaAudio() {
  const select = document.getElementById('charGuideSelect');
  if (select && typeof speakJapanese === 'function') {
    speakJapanese(select.value);
  }
}

function openCanvasForChar(kana) {
  if (typeof switchTab === 'function') {
    switchTab('draw');
  }
  selectQuickChar(kana);
}

function setCanvasQuickTab(tabKey) {
  currentCanvasQuickTab = tabKey;
  const tabConfigs = [
    { key: 'HIRA_BASIC', id: 'canvasTabHiraBasic' },
    { key: 'KATA_BASIC', id: 'canvasTabKataBasic' },
    { key: 'DAKUON', id: 'canvasTabDakuon' },
    { key: 'HIRA_YOON', id: 'canvasTabHiraYoon' },
    { key: 'KATA_YOON', id: 'canvasTabKataYoon' }
  ];

  tabConfigs.forEach(tab => {
    const el = document.getElementById(tab.id);
    if (!el) return;
    if (tab.key === tabKey) {
      el.className = 'canvas-quick-tab px-3 py-1.5 rounded-full text-xs font-bold bg-primary text-white shadow-xs transition';
    } else {
      el.className = 'canvas-quick-tab px-3 py-1.5 rounded-full text-xs font-medium bg-white/70 border border-secondary-border text-ink-muted hover:text-ink hover:bg-white transition';
    }
  });

  renderCanvasQuickPicker();
}

function renderCanvasQuickPicker() {
  const grid = document.getElementById('canvasQuickGrid');
  if (!grid) return;
  grid.innerHTML = '';

  let list = [];
  if (currentCanvasQuickTab === 'HIRA_BASIC') {
    list = (typeof KANA_CHARS !== 'undefined' ? KANA_CHARS : []).filter(k => k.script === 'hiragana' && ['A','KA','SA','TA','NA','HA','MA','YA','RA','WA'].includes(k.row));
  } else if (currentCanvasQuickTab === 'KATA_BASIC') {
    list = (typeof KANA_CHARS !== 'undefined' ? KANA_CHARS : []).filter(k => k.script === 'katakana' && ['A','KA','SA','TA','NA','HA','MA','YA','RA','WA'].includes(k.row));
  } else if (currentCanvasQuickTab === 'DAKUON') {
    list = (typeof KANA_CHARS !== 'undefined' ? KANA_CHARS : []).filter(k => ['GA','ZA','DA','BA','PA'].includes(k.row));
  } else if (currentCanvasQuickTab === 'HIRA_YOON') {
    const inKanaChars = (typeof KANA_CHARS !== 'undefined' ? KANA_CHARS : []).filter(k => k.type === 'yoon' && k.script === 'hiragana');
    list = inKanaChars.length > 0 ? inKanaChars : HIRA_YOON_LIST;
  } else if (currentCanvasQuickTab === 'KATA_YOON') {
    const inKanaChars = (typeof KANA_CHARS !== 'undefined' ? KANA_CHARS : []).filter(k => k.type === 'yoon' && k.script === 'katakana');
    list = inKanaChars.length > 0 ? inKanaChars : KATA_YOON_LIST;
  }

  list.forEach(k => {
    const btn = document.createElement('button');
    btn.onclick = () => selectQuickChar(k.char);
    btn.className = 'font-jp text-lg font-bold bg-white/80 hover:bg-primary hover:text-white border border-secondary-border py-2 px-1 rounded-xl transition duration-150 shadow-xs hover:scale-105 active:scale-95 flex flex-col items-center justify-center';
    btn.innerHTML = `<span>${k.char}</span>${k.romaji ? `<span class="text-[10px] font-mono font-normal opacity-70">${k.romaji}</span>` : ''}`;
    grid.appendChild(btn);
  });
}

if (typeof window !== 'undefined') {
  window.strokeHistory = strokeHistory;
  window.undoLastStroke = undoLastStroke;
  window.redrawCanvas = redrawCanvas;
  window.setBrushSize = setBrushSize;
  window.setBrushColor = setBrushColor;
  window.toggleStrokeNumbers = toggleStrokeNumbers;
  window.downloadCanvasImage = downloadCanvasImage;
  window.setCanvasQuickTab = setCanvasQuickTab;
  window.clearCanvas = clearCanvas;
  window.toggleGuideWatermark = toggleGuideWatermark;
  window.playCanvasKanaAudio = playCanvasKanaAudio;
  window.openCanvasForChar = openCanvasForChar;
  window.changeCanvasGuide = changeCanvasGuide;
  window.selectQuickChar = selectQuickChar;
  window.renderCanvasQuickPicker = renderCanvasQuickPicker;
  window.initCanvas = initCanvas;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    initCanvas,
    clearCanvas,
    undoLastStroke,
    redrawCanvas,
    setBrushSize,
    setBrushColor,
    toggleStrokeNumbers,
    downloadCanvasImage,
    setCanvasQuickTab,
    renderCanvasQuickPicker,
    strokeHistory
  };
}
