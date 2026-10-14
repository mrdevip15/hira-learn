function renderVocabTable(items) {
      const tbody = document.getElementById('vocabTableBody');
      tbody.innerHTML = '';

      items.forEach((item) => {
        const tr = document.createElement('tr');
        tr.className = 'hover:bg-white/70 transition';
        const audioCell = hasJapaneseVoice ? `
          <td class="py-3 px-4 text-center voice-ui">
            <button onclick="speakJapanese('${item.kana}')" class="p-2 rounded-full glass-btn-secondary text-ink-muted hover:text-primary transition" title="Dengarkan Pengucapan">
              ${SVG_SPEAKER}
            </button>
          </td>
        ` : '';

        const scriptPill = item.script === 'katakana'
          ? '<span class="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary font-bold">Katakana</span>'
          : '<span class="text-[10px] px-2 py-0.5 rounded-full bg-black/5 text-ink font-bold">Hiragana</span>';

        tr.innerHTML = `
          <td class="py-3 px-4 text-center text-xs font-mono text-ink-subtle">${String(item.id).padStart(3, '0')}</td>
          <td class="py-3 px-4 text-center">${scriptPill}</td>
          <td class="py-3 px-5 font-jp font-bold text-lg text-ink">${item.kana}</td>
          <td class="py-3 px-5 font-mono font-bold text-primary text-xs md:text-sm">${item.romaji}</td>
          <td class="py-3 px-5 text-ink-muted text-xs md:text-sm">${item.meaning}</td>
          ${audioCell}
        `;
        tbody.appendChild(tr);
      });

      document.getElementById('filteredCount').innerText = items.length;
    }

    function filterVocabList() {
      const query = document.getElementById('vocabSearchInput').value.toLowerCase().trim();
      
      const filtered = VOCAB_DATABASE.filter(item => {
        const matchScript = currentVocabScript === 'ALL' || item.script === currentVocabScript;
        const matchRow = currentFilterRow === 'ALL' || item.row === currentFilterRow;
        const matchText = !query || 
          item.kana.includes(query) || 
          item.romaji.toLowerCase().includes(query) || 
          item.meaning.toLowerCase().includes(query);
        return matchScript && matchRow && matchText;
      });

      renderVocabTable(filtered);
    }

    function setScriptFilter(scriptType) {
      currentVocabScript = scriptType;
      currentFilterRow = 'ALL';
      document.querySelectorAll('.script-filter-btn').forEach(btn => {
        if (btn.getAttribute('data-script') === scriptType) {
          btn.className = 'script-filter-btn px-4 py-1.5 rounded-full text-xs font-bold bg-primary text-white shadow-sm transition border border-primary';
        } else {
          btn.className = 'script-filter-btn px-4 py-1.5 rounded-full text-xs font-medium bg-white/70 backdrop-blur-md border border-secondary-border text-ink-muted hover:text-ink hover:bg-white transition';
        }
      });
      updateCategoryFilterButtons();
      filterVocabList();
    }

    function updateCategoryFilterButtons() {
      const container = document.getElementById('categoryFilterContainer');
      container.innerHTML = '';

      let categories = [];
      if (currentVocabScript === 'ALL') {
        categories = [
          { key: 'ALL', label: 'Semua Kategori' },
          { key: 'A', label: 'Baris A' },
          { key: 'KA', label: 'Baris Ka' },
          { key: 'SA', label: 'Baris Sa' },
          { key: 'TA', label: 'Baris Ta' },
          { key: 'NA', label: 'Baris Na' },
          { key: 'HA', label: 'Baris Ha' },
          { key: 'MA', label: 'Baris Ma' },
          { key: 'FOOD', label: 'Makanan (Food)' },
          { key: 'TECH', label: 'Teknologi (Tech)' },
          { key: 'PLACE', label: 'Tempat (Place)' },
        ];
      } else if (currentVocabScript === 'hiragana') {
        categories = [
          { key: 'ALL', label: 'Semua Baris' },
          { key: 'A', label: 'A (あいうえお)' },
          { key: 'KA', label: 'Ka (かきくけこ)' },
          { key: 'SA', label: 'Sa (さしすせそ)' },
          { key: 'TA', label: 'Ta (たちつてと)' },
          { key: 'NA', label: 'Na (なにぬねの)' },
          { key: 'HA', label: 'Ha (はひふへほ)' },
          { key: 'MA', label: 'Ma (まみむめも)' },
          { key: 'YA', label: 'Ya (やゆよ)' },
          { key: 'RA', label: 'Ra (らりるれろ)' },
          { key: 'WA', label: 'Wa/N (わをん)' },
          { key: 'DAKUON', label: 'Dakuon (Variasi)' },
        ];
      } else {
        categories = [
          { key: 'ALL', label: 'Semua Katakana' },
          { key: 'FOOD', label: 'Makanan & Minuman' },
          { key: 'TECH', label: 'Teknologi & Media' },
          { key: 'PLACE', label: 'Tempat & Transportasi' },
          { key: 'DAILY', label: 'Rumah & Sekolah' },
          { key: 'LIFE', label: 'Gaya Hidup & Hiburan' },
        ];
      }

      categories.forEach(c => {
        const btn = document.createElement('button');
        btn.setAttribute('data-cat', c.key);
        btn.innerText = c.label;
        btn.className = c.key === currentFilterRow
          ? 'row-cat-btn px-3.5 py-1.5 rounded-full text-xs font-bold bg-ink text-white shadow-sm transition'
          : 'row-cat-btn px-3.5 py-1.5 rounded-full text-xs font-medium bg-white/70 backdrop-blur-md border border-secondary-border text-ink-muted hover:text-ink hover:bg-white transition';
        btn.onclick = () => {
          currentFilterRow = c.key;
          document.querySelectorAll('.row-cat-btn').forEach(b => {
            b.className = b.getAttribute('data-cat') === c.key
              ? 'row-cat-btn px-3.5 py-1.5 rounded-full text-xs font-bold bg-ink text-white shadow-sm transition'
              : 'row-cat-btn px-3.5 py-1.5 rounded-full text-xs font-medium bg-white/70 backdrop-blur-md border border-secondary-border text-ink-muted hover:text-ink hover:bg-white transition';
          });
          filterVocabList();
        };
        container.appendChild(btn);
      });
    }
