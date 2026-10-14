let canvas, ctx;
    let isDrawing = false;
    let showGuide = true;

    function initCanvas() {
      canvas = document.getElementById('practiceCanvas');
      if (!canvas) return;
      ctx = canvas.getContext('2d');

      ctx.lineWidth = 10;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.strokeStyle = '#000000';

      // Mouse events
      canvas.addEventListener('mousedown', startDraw);
      canvas.addEventListener('mousemove', draw);
      canvas.addEventListener('mouseup', stopDraw);
      canvas.addEventListener('mouseleave', stopDraw);

      // Touch events
      canvas.addEventListener('touchstart', (e) => {
        e.preventDefault();
        const touch = e.touches[0];
        const rect = canvas.getBoundingClientRect();
        isDrawing = true;
        ctx.beginPath();
        ctx.moveTo(touch.clientX - rect.left, touch.clientY - rect.top);
      });

      canvas.addEventListener('touchmove', (e) => {
        e.preventDefault();
        if (!isDrawing) return;
        const touch = e.touches[0];
        const rect = canvas.getBoundingClientRect();
        ctx.lineTo(touch.clientX - rect.left, touch.clientY - rect.top);
        ctx.stroke();
      });

      canvas.addEventListener('touchend', (e) => {
        e.preventDefault();
        stopDraw();
      });

      populateCharGuideOptions();
      renderCanvasQuickPicker();
    }

    function getMousePos(e) {
      const rect = canvas.getBoundingClientRect();
      return {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    }

    function startDraw(e) {
      isDrawing = true;
      const pos = getMousePos(e);
      ctx.beginPath();
      ctx.moveTo(pos.x, pos.y);
    }

    function draw(e) {
      if (!isDrawing) return;
      const pos = getMousePos(e);
      ctx.lineTo(pos.x, pos.y);
      ctx.stroke();
    }

    function stopDraw() {
      if (isDrawing) {
        ctx.closePath();
        isDrawing = false;
      }
    }

    function clearCanvas() {
      if (ctx && canvas) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    }

    function populateCharGuideOptions() {
      const select = document.getElementById('charGuideSelect');
      if (!select) return;
      select.innerHTML = '';

      const groups = [
        { label: 'Hiragana Dasar (46)', filter: k => k.script === 'hiragana' && ['A','KA','SA','TA','NA','HA','MA','YA','RA','WA'].includes(k.row) },
        { label: 'Hiragana Dakuon & Handakuon (25)', filter: k => k.script === 'hiragana' && ['GA','ZA','DA','BA','PA'].includes(k.row) },
        { label: 'Katakana Dasar (46)', filter: k => k.script === 'katakana' && ['A','KA','SA','TA','NA','HA','MA','YA','RA','WA'].includes(k.row) },
        { label: 'Katakana Dakuon & Handakuon (25)', filter: k => k.script === 'katakana' && ['GA','ZA','DA','BA','PA'].includes(k.row) },
      ];

      groups.forEach(g => {
        const optgroup = document.createElement('optgroup');
        optgroup.label = g.label;
        KANA_CHARS.filter(g.filter).forEach(item => {
          const opt = document.createElement('option');
          opt.value = item.char;
          opt.innerText = `${item.char} (${item.romaji}) - ${item.row}`;
          optgroup.appendChild(opt);
        });
        select.appendChild(optgroup);
      });
    }

    function changeCanvasGuide() {
      const select = document.getElementById('charGuideSelect');
      const val = select.value;
      document.getElementById('canvasWatermark').innerText = val;
      clearCanvas();
    }

    function selectQuickChar(char) {
      const select = document.getElementById('charGuideSelect');
      select.value = char;
      changeCanvasGuide();
    }

    function toggleGuideWatermark() {
      showGuide = !showGuide;
      const wm = document.getElementById('canvasWatermark');
      const btn = document.getElementById('toggleGuideBtn');
      if (showGuide) {
        wm.style.opacity = '1';
        btn.innerHTML = `${SVG_EYE_SLASH} <span>Sembunyikan Bayangan</span>`;
      } else {
        wm.style.opacity = '0';
        btn.innerHTML = `${SVG_EYE} <span>Tampilkan Bayangan</span>`;
      }
    }

    function playCanvasKanaAudio() {
      const select = document.getElementById('charGuideSelect');
      speakJapanese(select.value);
    }

    function openCanvasForChar(kana) {
      switchTab('draw');
      selectQuickChar(kana);
    }

    function setCanvasQuickTab(tabKey) {
      currentCanvasQuickTab = tabKey;
      document.querySelectorAll('.canvas-quick-tab').forEach(b => {
        b.className = 'canvas-quick-tab px-3 py-1 rounded-full text-xs font-medium bg-white/70 border border-secondary-border text-ink-muted hover:text-ink transition';
      });
      if (tabKey === 'HIRA_BASIC') document.getElementById('canvasTabHiraBasic').className = 'canvas-quick-tab px-3 py-1 rounded-full text-xs font-bold bg-primary text-white transition';
      if (tabKey === 'KATA_BASIC') document.getElementById('canvasTabKataBasic').className = 'canvas-quick-tab px-3 py-1 rounded-full text-xs font-bold bg-primary text-white transition';
      if (tabKey === 'DAKUON') document.getElementById('canvasTabDakuon').className = 'canvas-quick-tab px-3 py-1 rounded-full text-xs font-bold bg-primary text-white transition';
      renderCanvasQuickPicker();
    }

    function renderCanvasQuickPicker() {
      const grid = document.getElementById('canvasQuickGrid');
      if (!grid) return;
      grid.innerHTML = '';

      let filteredKana = [];
      if (currentCanvasQuickTab === 'HIRA_BASIC') {
        filteredKana = KANA_CHARS.filter(k => k.script === 'hiragana' && ['A','KA','SA','TA','NA','HA','MA','YA','RA','WA'].includes(k.row));
      } else if (currentCanvasQuickTab === 'KATA_BASIC') {
        filteredKana = KANA_CHARS.filter(k => k.script === 'katakana' && ['A','KA','SA','TA','NA','HA','MA','YA','RA','WA'].includes(k.row));
      } else {
        filteredKana = KANA_CHARS.filter(k => ['GA','ZA','DA','BA','PA'].includes(k.row));
      }

      filteredKana.forEach(k => {
        const btn = document.createElement('button');
        btn.onclick = () => selectQuickChar(k.char);
        btn.className = 'font-jp text-lg font-bold bg-white/80 hover:bg-primary hover:text-white border border-secondary-border py-2 rounded-xl transition duration-150 shadow-xs hover:scale-105 active:scale-95';
        btn.innerText = k.char;
        grid.appendChild(btn);
      });
    }
