---
version: alpha
name: "Mondrian"
website: "https://mondrian.claro.com.br"
description: >-
  Design system da Claro Brasil cobrindo 100% dos produtos web e 80% dos apps
  da operadora. Vermelho Claro #D52B1E sobre branco com cinza neutro #ADAFAF,
  bibliotecas em seis plataformas (Figma, Vanilla, React, React Native, Android,
  Kotlin) alimentadas pelo Mondrian Tokens. Em produção desde 2019.
colors:
  primary: "#D52B1E"
  primary-dark: "#B32419"
  secondary: "#ADAFAF"
  ink: "#000000"
  canvas: "#FFFFFF"
typography:
  heading:
    fontFamily: "Arial, Helvetica, sans-serif"
    fontSize: "2rem"
    fontWeight: 700
  body:
    fontFamily: "Arial, Helvetica, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: "1.5"
---

## Overview

**Mondrian** é o design system da **Claro Brasil**, maior operadora de telecom do país (grupo América Móvil). Em desenvolvimento desde 2019, hoje está presente em **100% dos produtos web e 80% dos apps** da operadora, com cerca de **75% de adoção das features** lançadas.

O nome é uma declaração de princípios: como as composições de Piet Mondrian, a interface se apoia em blocos estruturais claros — cores primárias reduzidas, grid explícito, componentes que se encaixam sem ambiguidade. O vermelho Claro é a âncora cromática; todo o resto é neutro e disciplinado.

### Ecossistema multiplataforma

- **Mondrian Figma** — biblioteca de design
- **Mondrian Vanilla** — CSS/JS sem dependências
- **Mondrian React** e **React Native**
- **Mondrian Android** (Kotlin)
- **Mondrian Tokens** — fonte única de verdade (cores, bordas, opacidades, sombras, espaçamentos, tipografias) distribuída para todas as plataformas

### Características-chave

- Vermelho `{colors.primary}` (#D52B1E, Pantone 485C) como cor de marca e ação
- Cinza `{colors.secondary}` (#ADAFAF) para estrutura secundária
- Componentes citados oficialmente: botões, links, textos, calendários, headers, footers e formulários
- Governança centralizada com processo formal de adoção por squads
- Case internacional: documentado pela Springer como serviço para B2B enterprise

## Colors

| Token | Hex | Uso |
|---|---|---|
| `{colors.primary}` | #D52B1E | Marca Claro, CTAs, destaques |
| `{colors.primary-dark}` | #B32419 | Hover/pressed inferido da rampa da marca |
| `{colors.secondary}` | #ADAFAF | Bordas, elementos secundários (Pantone Cool Gray 6C) |
| `{colors.ink}` | #000000 | Texto principal |
| `{colors.canvas}` | #FFFFFF | Fundos |

> **Ressalva:** os tokens numéricos completos (rampas semânticas, sombras, opacidades) são distribuídos via Mondrian Tokens internamente, mas não estão publicados. Este arquivo documenta a paleta de marca verificável publicamente + a arquitetura do sistema.

## Typography

Segundo o manual da marca Claro: família **DIN** (Alternate/Medium/Bold) para impresso e **Arial Regular/Bold** para superfícies digitais — escolha pragmática de stack nativo que garante consistência sem licenciamento de webfont.

| Token | Fonte | Peso | Uso |
|---|---|---|---|
| `{typography.heading}` | Arial | 700 | Títulos |
| `{typography.body}` | Arial | 400 | Corpo |

## Layout

Estrutura em blocos modulares no espírito do neoplasticismo: headers full-width, grids de cards alinhados, footers densos. Os valores exatos de espaçamento vivem no Mondrian Tokens e não são públicos.

## Elevation & Depth

Sombras discretas e bordas neutras separam superfícies; o sistema expõe sombras e opacidades como variáveis de token, indicando elevação controlada e padronizada entre plataformas.

## Shapes

Componentes com cantos arredondados moderados, consistentes entre web e apps nativos (botões pill nos CTAs principais dos apps).

## Components

Catálogo público cita botões, links, textos, calendários, headers, footers e formulários como base, distribuídos nas 6 bibliotecas. A arquitetura de tokens garante que um botão atualizado no Figma reflita idêntico no React e no Kotlin.

## Do's and Don'ts

**Do** consumir os valores via Mondrian Tokens — nunca hardcode de hex nas plataformas.

**Do** usar o vermelho como assinatura de ação e marca, com parcimônia.

**Don't** misturar a DIN (impresso) com contextos digitais ou substituir a Arial digital por outras sans-serif.

**Don't** criar variações locais de componentes fora da governança do time de DesignOps.

## Known Gaps

- Rampas semânticas completas, sombras, opacidades e escala tipográfica numérica não são públicas — extração limitada à paleta de marca e arquitetura documentadas
- Site oficial protegido contra automação; valores completos exigiriam acesso ao Mondrian Tokens interno

---

## Attribution

| Campo | Valor |
|-------|-------|
| Source | [mondrian.claro.com.br/o-mondrian](https://mondrian.claro.com.br/o-mondrian) |
| Manual da marca | [Manual Da Marca CLARO (cópia pública)](https://pt.scribd.com/document/398627864/Manual-Da-Marca-CLARO) |
| Catálogo | [Design Systems Brasileiros — Mondrian](https://designsystemsbrasileiros.com/mondrian/) |
| Métricas | LinkedIn do product owner do Mondrian (2026): 100% web, 80% apps |
| Method | Public documentation |
| Date | 2026-08-21 |

---

## Data Architecture: Full Hiragana & Katakana Integration

- **Dual-Script Coverage:**
  - **Hiragana:** 46 basic characters + 25 Dakuon/Handakuon (Ga, Za, Da, Ba, Pa) = 71 characters.
  - **Katakana:** 46 basic characters + 25 Dakuon/Handakuon = 71 characters.
  - **Total:** 142 complete Japanese phonetic characters with Hepburn romaji and mnemonic tips.
- **Vocabulary System (327 Words):**
  - 260 Hiragana words covering all vowel/consonant rows (A to N) + Dakuon variations.
  - 67 high-frequency Katakana loanwords (Gairaigo) covering food, tech, transport, daily life, and entertainment.
  - Tolerant loanword evaluation: handles Japanese prolonged sound marks (`ー` Chouonpu) with single and double vowel flex matching (e.g. `koohii` / `kohi` for コーヒー).
- **Audio Fallback Policy:**
  - Automated detection of genuine Japanese speech synthesis voices (`ja-JP`, `Kyoko`, `Google 日本語`).
  - Gracefully hides all audio triggers and table columns if native Japanese voice synthesis is unavailable on the client system.

---

## Progressive Learning Roadmap (22 Levels across 5 Stages)

A structured bite-sized mastery path that guides learners from basic Japanese vowels to complete 142 kana literacy:

### 1. Curriculum Stages

- **Stage 1: Hiragana Dasar (Levels 1–10)**
  - *Level 1:* Baris A (あいうえお) — Fundamental vowels and pure vowel words (`あい`, `あお`, `いえ`, `うえ`).
  - *Level 2:* Baris Ka (かきくけこ) — K-consonant row and combined vocabulary (`かい`, `あき`, `えき`, `こえ`).
  - *Level 3:* Baris Sa (さしすせそ) — S-consonant row and everyday vocabulary (`あさ`, `すし`, `さけ`, `そこ`).
  - *Level 4:* Baris Ta (たちつてと) — Phonetic variations `chi` & `tsu` (`うた`, `て`, `とり`, `たこ`).
  - *Level 5:* Baris Na (なにぬねの) — Nasal N row (`いぬ`, `ねこ`, `なつ`, `なまえ`).
  - *Level 6:* Baris Ha (はひふへほ) — H row including bilabial `fu` (`はな`, `ひと`, `ふね`, `へや`).
  - *Level 7:* Baris Ma (まみむめも) — M row (`あめ`, `みず`, `まど`, `め`).
  - *Level 8:* Baris Ya (やゆよ) — Gliding vowels essential for contracted sounds (`やま`, `ゆき`, `よる`, `ゆめ`).
  - *Level 9:* Baris Ra (らりるれろ) — Japanese alveolar flap R (`そら`, `とり`, `りす`, `くるま`).
  - *Level 10:* Baris Wa & N (わをん) — Final base hiragana (`わたし`, `にほん`, `ほん`, `てんき`).

- **Stage 2: Hiragana Dakuon & Kombinasi (Levels 11–13)**
  - *Level 11:* Dakuon Ga & Za (が〜ご / ざ〜ぞ) — Voiced consonants with tenten (`かぎ`, `ごはん`, `じかん`).
  - *Level 12:* Dakuon Da & Ba, Handakuon Pa (だ〜ど / ば〜ぼ / ぱ〜ぽ) — Plosive and bilabial variations (`ともだち`, `びょういん`, `さんぽ`).
  - *Level 13:* Hiragana Mastery Review — Comprehensive exam covering all 71 Hiragana variations.

- **Stage 3: Katakana Dasar (Levels 14–18)**
  - *Level 14:* Katakana Baris A & Ka (ア〜コ) — Angular stroke fundamentals.
  - *Level 15:* Katakana Baris Sa & Ta (サ〜ト) — Distinguishing stroke angles (`シ` vs `ツ` and `ソ` vs `ン`).
  - *Level 16:* Katakana Baris Na & Ha (ナ〜ホ) — Common characters in food and packaging labels.
  - *Level 17:* Katakana Baris Ma & Ya (マ〜ヨ) — M and Y katakana rows.
  - *Level 18:* Katakana Baris Ra, Wa, N (ラ〜ン) — Completion of basic 46 Katakana.

- **Stage 4: Katakana Gairaigo & Variasi (Levels 19–21)**
  - *Level 19:* Katakana Dakuon & Handakuon (ガ〜ポ) — Voiced loanwords (`ベッド`, `ビール`, `ピザ`).
  - *Level 20:* Gairaigo Makanan & Kafe — Popular culinary loanwords (`コーヒー`, `ケーキ`, `カレー`, `ラーメン`, `パン`).
  - *Level 21:* Gairaigo Gadget, Transportasi & Kehidupan — Modern vocabulary (`パソコン`, `スマホ`, `テレビ`, `ホテル`, `タクシー`).

- **Stage 5: Grand Master (Level 22)**
  - *Level 22:* Grand Master Kana Challenge — 15 mixed timed questions synthesizing all 142 characters and 320+ vocabulary words.

### 2. Star Grading & Progression Rules

- **3 Stars (Mastery):** $\ge 90\%$ accuracy.
- **2 Stars (Passing Grade):** $\ge 80\%$ accuracy (unlocks next level).
- **1 Star (Needs Practice):** $60\% - 79\%$ accuracy (level unlocked but requires retry to advance).
- **0 Stars:** $< 60\%$ accuracy.
- **Unlock Condition:** Learners must score at least 2 Stars ($\ge 80\%$ or $\ge 8/10$ words) on Level $N$ to unlock Level $N+1$.

### 3. State Schema & Persistence (`localStorage`)

Stored under key `'kanamaster_progress'`:
```json
{
  "unlockedLevel": 5,
  "levels": {
    "1": { "stars": 3, "accuracy": 100, "bestScore": 10, "total": 10, "lastPlayed": 1728860000000 },
    "2": { "stars": 3, "accuracy": 90, "bestScore": 9, "total": 10, "lastPlayed": 1728860050000 }
  },
  "totalStars": 6
}
```

### 4. Neoplasticism & Glassmorphic UI Tokens

- **Card Styling:** Frosted glass (`backdrop-blur-xl`, `bg-white/80`, `border-secondary/30`).
- **Level Badges:** Pill buttons in `#D52B1E` for active, subtle borders for completed, and muted lock states with custom vector SVGs.
- **Progress Gauges:** High-contrast linear progression bar in Claro Red with stage-level filtering pills.
