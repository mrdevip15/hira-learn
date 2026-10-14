// 142 Kana characters (46 Hiragana + 25 Dakuon + 46 Katakana + 25 Dakuon)
    const KANA_CHARS = [
  {
    "char": "あ",
    "romaji": "a",
    "row": "A",
    "script": "hiragana",
    "tip": "Lekukan bulat besar di kanan, mirip huruf 'a' dalam ornamen kaligrafi."
  },
  {
    "char": "い",
    "romaji": "i",
    "row": "A",
    "script": "hiragana",
    "tip": "Dua garis vertikal miring paralel, garis kiri ada kait kecil di ujung."
  },
  {
    "char": "う",
    "romaji": "u",
    "row": "A",
    "script": "hiragana",
    "tip": "Garis atas pendek miring, lalu lengkungan mirip bentuk telinga."
  },
  {
    "char": "え",
    "romaji": "e",
    "row": "A",
    "script": "hiragana",
    "tip": "Garis horisontal atas, lalu zig-zag mirip angka 7 dan berakhir ombak."
  },
  {
    "char": "お",
    "romaji": "o",
    "row": "A",
    "script": "hiragana",
    "tip": "Memiliki lekukan mirip 'あ', tetapi ada titik aksen khas di kanan atas!"
  },
  {
    "char": "か",
    "romaji": "ka",
    "row": "KA",
    "script": "hiragana",
    "tip": "Tarik kait kiri melengkung, garis potong miring, lalu titik aksen kanan atas."
  },
  {
    "char": "き",
    "romaji": "ki",
    "row": "KA",
    "script": "hiragana",
    "tip": "Dua garis horisontal miring, dipotong garis tegak dengan lengkungan bawah."
  },
  {
    "char": "く",
    "romaji": "ku",
    "row": "KA",
    "script": "hiragana",
    "tip": "Satu tarikan garis tunggal membentuk sudut paruh burung menghadap ke kiri."
  },
  {
    "char": "け",
    "romaji": "ke",
    "row": "KA",
    "script": "hiragana",
    "tip": "Garis tegak kiri berkait, garis horisontal tengah, lalu garis kanan melengkung."
  },
  {
    "char": "こ",
    "romaji": "ko",
    "row": "KA",
    "script": "hiragana",
    "tip": "Dua garis horisontal melengkung sejajar, atas sedikit berkait ke bawah."
  },
  {
    "char": "さ",
    "romaji": "sa",
    "row": "SA",
    "script": "hiragana",
    "tip": "Satu garis tidur dipotong garis miring berkait. Beda dengan き (hanya 1 garis tidur)."
  },
  {
    "char": "し",
    "romaji": "shi",
    "row": "SA",
    "script": "hiragana",
    "tip": "Satu tarikan garis kontinu melengkung ke atas seperti mata kail pancing."
  },
  {
    "char": "す",
    "romaji": "su",
    "row": "SA",
    "script": "hiragana",
    "tip": "Garis horisontal, dipotong garis tegak yang membuat simpul lingkaran memutar."
  },
  {
    "char": "せ",
    "romaji": "se",
    "row": "SA",
    "script": "hiragana",
    "tip": "Garis tidur panjang, garis tegak kanan berbelok, garis kiri menancap."
  },
  {
    "char": "そ",
    "romaji": "so",
    "row": "SA",
    "script": "hiragana",
    "tip": "Satu tarikan garis zigzag kontinu (Z) lalu melengkung menyerupai huruf C di bawah."
  },
  {
    "char": "た",
    "romaji": "ta",
    "row": "TA",
    "script": "hiragana",
    "tip": "Garis horisontal, garis miring potong, lalu bentuk menyerupai 'こ' di kanannya."
  },
  {
    "char": "ち",
    "romaji": "chi",
    "row": "TA",
    "script": "hiragana",
    "tip": "Garis tidur atas, lalu garis tembus membentuk lengkungan perut ke kanan."
  },
  {
    "char": "つ",
    "romaji": "tsu",
    "row": "TA",
    "script": "hiragana",
    "tip": "Satu lengkungan besar seperti ombak tsunami menghadap ke kiri."
  },
  {
    "char": "て",
    "romaji": "te",
    "row": "TA",
    "script": "hiragana",
    "tip": "Garis horisontal miring ke atas, lalu melengkung kembali seperti huruf C terbalik."
  },
  {
    "char": "と",
    "romaji": "to",
    "row": "TA",
    "script": "hiragana",
    "tip": "Garis miring pendek ke kanan, lalu lengkungan seperti bumerang di bawahnya."
  },
  {
    "char": "な",
    "romaji": "na",
    "row": "NA",
    "script": "hiragana",
    "tip": "Garis salib di kiri, aksen titik kecil di tengah, dan garis loop simpul di kanan."
  },
  {
    "char": "に",
    "romaji": "ni",
    "row": "NA",
    "script": "hiragana",
    "tip": "Garis tegak kiri berkait, lalu dua garis horisontal sejajar (mirip 'こ') di kanan."
  },
  {
    "char": "ぬ",
    "romaji": "nu",
    "row": "NA",
    "script": "hiragana",
    "tip": "Garis miring melengkung dengan simpul loop lingkaran kecil di ujung buntutnya."
  },
  {
    "char": "ね",
    "romaji": "ne",
    "row": "NA",
    "script": "hiragana",
    "tip": "Garis tegak lurus, garis zig-zag yang berakhir dengan loop bundar di kanan."
  },
  {
    "char": "の",
    "romaji": "no",
    "row": "NA",
    "script": "hiragana",
    "tip": "Satu goresan spiral spiral melingkar halus seperti tanda larangan 'no smoking'."
  },
  {
    "char": "は",
    "romaji": "ha",
    "row": "HA",
    "script": "hiragana",
    "tip": "Garis tegak kiri, garis tidur kanan dipotong garis tegak dengan loop di bawah."
  },
  {
    "char": "ひ",
    "romaji": "hi",
    "row": "HA",
    "script": "hiragana",
    "tip": "Satu tarikan melengkung lebar mirip mangkok tersenyum lebar."
  },
  {
    "char": "ふ",
    "romaji": "fu",
    "row": "HA",
    "script": "hiragana",
    "tip": "Aksen titik atas, hidung melengkung tengah, dan dua aksen sayap di kiri-kanan."
  },
  {
    "char": "へ",
    "romaji": "he",
    "row": "HA",
    "script": "hiragana",
    "tip": "Satu goresan sederhana membentuk atap rumah atau siluet gunung lancip."
  },
  {
    "char": "ほ",
    "romaji": "ho",
    "row": "HA",
    "script": "hiragana",
    "tip": "Mirip は (ha), tetapi garis horisontal atas tertutup dan ada garis pembatas."
  },
  {
    "char": "ま",
    "romaji": "ma",
    "row": "MA",
    "script": "hiragana",
    "tip": "Dua garis horisontal sejajar dipotong garis tegak dengan simpul loop di bawah."
  },
  {
    "char": "み",
    "romaji": "mi",
    "row": "MA",
    "script": "hiragana",
    "tip": "Garis miring memutar membentuk loop angka 2 lalu garis miring aksen di kanan."
  },
  {
    "char": "む",
    "romaji": "mu",
    "row": "MA",
    "script": "hiragana",
    "tip": "Garis tidur, garis tegak berputar loop ke kanan lalu melengkung ke atas + titik aksen."
  },
  {
    "char": "め",
    "romaji": "me",
    "row": "MA",
    "script": "hiragana",
    "tip": "Mirip ぬ (nu), tetapi tanpa simpul loop di ujung kanannya."
  },
  {
    "char": "も",
    "romaji": "mo",
    "row": "MA",
    "script": "hiragana",
    "tip": "Garis vertikal melengkung kail pancing dipotong dua garis horisontal sejajar."
  },
  {
    "char": "や",
    "romaji": "ya",
    "row": "YA",
    "script": "hiragana",
    "tip": "Garis kait melengkung panjang, aksen titik miring atas, dan garis potong lurus kanan."
  },
  {
    "char": "ゆ",
    "romaji": "yu",
    "row": "YA",
    "script": "hiragana",
    "tip": "Garis melengkung ke bawah memutar loop lebar, lalu dipotong garis vertikal panjang."
  },
  {
    "char": "よ",
    "romaji": "yo",
    "row": "YA",
    "script": "hiragana",
    "tip": "Garis horisontal pendek atas, dipotong garis tegak dengan simpul loop ke kiri."
  },
  {
    "char": "ら",
    "romaji": "ra",
    "row": "RA",
    "script": "hiragana",
    "tip": "Titik aksen miring di atas, lalu lengkungan perut besar mirip angka 5 terbuka."
  },
  {
    "char": "り",
    "romaji": "ri",
    "row": "RA",
    "script": "hiragana",
    "tip": "Dua garis vertikal; garis kiri pendek, garis kanan panjang melengkung lembut."
  },
  {
    "char": "る",
    "romaji": "ru",
    "row": "RA",
    "script": "hiragana",
    "tip": "Bentuk angka 3 dengan lingkaran simpul kecil melingkar di ujung bawahnya."
  },
  {
    "char": "れ",
    "romaji": "re",
    "row": "RA",
    "script": "hiragana",
    "tip": "Garis tegak kiri, garis zig-zag yang melengkung keluar ke kanan (ujung mencuat)."
  },
  {
    "char": "ろ",
    "romaji": "ro",
    "row": "RA",
    "script": "hiragana",
    "tip": "Bentuk angka 3 murni tanpa lingkaran simpul di ujungnya (bandingkan dengan る)."
  },
  {
    "char": "わ",
    "romaji": "wa",
    "row": "WA",
    "script": "hiragana",
    "tip": "Garis tegak lurus di kiri, garis lengkung bulat besar di kanan (mirip angka 13)."
  },
  {
    "char": "を",
    "romaji": "wo",
    "row": "WA",
    "script": "hiragana",
    "tip": "Garis horisontal, garis zig-zag lalu lingkaran terbuka; partikel objek khusus."
  },
  {
    "char": "ん",
    "romaji": "n",
    "row": "WA",
    "script": "hiragana",
    "tip": "Satu tarikan garis tunggal menyerupai huruf 'n' kecil latin miring puitis."
  },
  {
    "char": "が",
    "romaji": "ga",
    "row": "GA",
    "script": "hiragana",
    "tip": "Karakter か dengan tanda kutip tenten (゛)."
  },
  {
    "char": "ぎ",
    "romaji": "gi",
    "row": "GA",
    "script": "hiragana",
    "tip": "Karakter き dengan tanda kutip tenten (゛)."
  },
  {
    "char": "ぐ",
    "romaji": "gu",
    "row": "GA",
    "script": "hiragana",
    "tip": "Karakter く dengan tanda kutip tenten (゛)."
  },
  {
    "char": "げ",
    "romaji": "ge",
    "row": "GA",
    "script": "hiragana",
    "tip": "Karakter け dengan tanda kutip tenten (゛)."
  },
  {
    "char": "ご",
    "romaji": "go",
    "row": "GA",
    "script": "hiragana",
    "tip": "Karakter こ dengan tanda kutip tenten (゛)."
  },
  {
    "char": "ざ",
    "romaji": "za",
    "row": "ZA",
    "script": "hiragana",
    "tip": "Karakter さ dengan tanda kutip tenten (゛)."
  },
  {
    "char": "じ",
    "romaji": "ji",
    "row": "ZA",
    "script": "hiragana",
    "tip": "Karakter し dengan tanda kutip tenten (゛)."
  },
  {
    "char": "ず",
    "romaji": "zu",
    "row": "ZA",
    "script": "hiragana",
    "tip": "Karakter す dengan tanda kutip tenten (゛)."
  },
  {
    "char": "ぜ",
    "romaji": "ze",
    "row": "ZA",
    "script": "hiragana",
    "tip": "Karakter せ dengan tanda kutip tenten (゛)."
  },
  {
    "char": "ぞ",
    "romaji": "zo",
    "row": "ZA",
    "script": "hiragana",
    "tip": "Karakter そ dengan tanda kutip tenten (゛)."
  },
  {
    "char": "だ",
    "romaji": "da",
    "row": "DA",
    "script": "hiragana",
    "tip": "Karakter た dengan tanda kutip tenten (゛)."
  },
  {
    "char": "ぢ",
    "romaji": "ji",
    "row": "DA",
    "script": "hiragana",
    "tip": "Karakter ち dengan tanda kutip tenten (゛)."
  },
  {
    "char": "づ",
    "romaji": "zu",
    "row": "DA",
    "script": "hiragana",
    "tip": "Karakter つ dengan tanda kutip tenten (゛)."
  },
  {
    "char": "で",
    "romaji": "de",
    "row": "DA",
    "script": "hiragana",
    "tip": "Karakter て dengan tanda kutip tenten (゛)."
  },
  {
    "char": "ど",
    "romaji": "do",
    "row": "DA",
    "script": "hiragana",
    "tip": "Karakter と dengan tanda kutip tenten (゛)."
  },
  {
    "char": "ば",
    "romaji": "ba",
    "row": "BA",
    "script": "hiragana",
    "tip": "Karakter は dengan tanda kutip tenten (゛)."
  },
  {
    "char": "び",
    "romaji": "bi",
    "row": "BA",
    "script": "hiragana",
    "tip": "Karakter ひ dengan tanda kutip tenten (゛)."
  },
  {
    "char": "ぶ",
    "romaji": "bu",
    "row": "BA",
    "script": "hiragana",
    "tip": "Karakter ふ dengan tanda kutip tenten (゛)."
  },
  {
    "char": "べ",
    "romaji": "be",
    "row": "BA",
    "script": "hiragana",
    "tip": "Karakter へ dengan tanda kutip tenten (゛)."
  },
  {
    "char": "ぼ",
    "romaji": "bo",
    "row": "BA",
    "script": "hiragana",
    "tip": "Karakter ほ dengan tanda kutip tenten (゛)."
  },
  {
    "char": "ぱ",
    "romaji": "pa",
    "row": "PA",
    "script": "hiragana",
    "tip": "Karakter は dengan tanda lingkaran maru (゜)."
  },
  {
    "char": "ぴ",
    "romaji": "pi",
    "row": "PA",
    "script": "hiragana",
    "tip": "Karakter ひ dengan tanda lingkaran maru (゜)."
  },
  {
    "char": "ぷ",
    "romaji": "pu",
    "row": "PA",
    "script": "hiragana",
    "tip": "Karakter ふ dengan tanda lingkaran maru (゜)."
  },
  {
    "char": "ぺ",
    "romaji": "pe",
    "row": "PA",
    "script": "hiragana",
    "tip": "Karakter へ dengan tanda lingkaran maru (゜)."
  },
  {
    "char": "ぽ",
    "romaji": "po",
    "row": "PA",
    "script": "hiragana",
    "tip": "Karakter ほ dengan tanda lingkaran maru (゜)."
  },
  {
    "char": "ア",
    "romaji": "a",
    "row": "A",
    "script": "katakana",
    "tip": "Garis sudut siku atas lalu garis miring kiri melengkung."
  },
  {
    "char": "イ",
    "romaji": "i",
    "row": "A",
    "script": "katakana",
    "tip": "Garis miring kiri pendek, lalu garis vertikal tegak lurus ke bawah."
  },
  {
    "char": "ウ",
    "romaji": "u",
    "row": "A",
    "script": "katakana",
    "tip": "Aksen titik atas, garis samping kiri pendek, lalu atap bersudut siku."
  },
  {
    "char": "エ",
    "romaji": "e",
    "row": "A",
    "script": "katakana",
    "tip": "Bentuk balok fondasi seperti huruf 'I' kapital atau balok baja H-beam."
  },
  {
    "char": "オ",
    "romaji": "o",
    "row": "A",
    "script": "katakana",
    "tip": "Garis horisontal, garis vertikal berkait, dan garis miring menopang di kiri."
  },
  {
    "char": "カ",
    "romaji": "ka",
    "row": "KA",
    "script": "katakana",
    "tip": "Mirip hiragana か tapi sudut lebih kaku dan tanpa titik aksen di kanan atas."
  },
  {
    "char": "キ",
    "romaji": "ki",
    "row": "KA",
    "script": "katakana",
    "tip": "Dua garis horisontal sejajar dipotong garis miring lurus tanpa lengkungan bawah."
  },
  {
    "char": "ク",
    "romaji": "ku",
    "row": "KA",
    "script": "katakana",
    "tip": "Garis miring pendek kiri, lalu sudut siku miring memanjang ke bawah."
  },
  {
    "char": "ケ",
    "romaji": "ke",
    "row": "KA",
    "script": "katakana",
    "tip": "Garis miring pendek kiri, garis horisontal tengah dipotong garis miring kanan."
  },
  {
    "char": "コ",
    "romaji": "ko",
    "row": "KA",
    "script": "katakana",
    "tip": "Bentuk kotak persegi tiga sisi terbuka ke kiri, sudut siku tegas."
  },
  {
    "char": "サ",
    "romaji": "sa",
    "row": "SA",
    "script": "katakana",
    "tip": "Garis horisontal panjang dipotong dua garis vertikal paralel (kiri lebih pendek)."
  },
  {
    "char": "シ",
    "romaji": "shi",
    "row": "SA",
    "script": "katakana",
    "tip": "Goresan dari BAWAH ke ATAS: dua titik sejajar vertikal dan garis sapuan menanjak."
  },
  {
    "char": "ス",
    "romaji": "su",
    "row": "SA",
    "script": "katakana",
    "tip": "Garis sudut siku miring lalu garis penopang di bawahnya."
  },
  {
    "char": "セ",
    "romaji": "se",
    "row": "SA",
    "script": "katakana",
    "tip": "Bentuk sudut siku horisontal-vertikal dan garis penutup di bawah."
  },
  {
    "char": "ソ",
    "romaji": "so",
    "row": "SA",
    "script": "katakana",
    "tip": "Goresan dari ATAS ke BAWAH: titik miring atas lalu garis sapuan menurun lurus."
  },
  {
    "char": "タ",
    "romaji": "ta",
    "row": "TA",
    "script": "katakana",
    "tip": "Garis miring pendek, garis sudut siku, dipotong garis aksen tengah tembus."
  },
  {
    "char": "チ",
    "romaji": "chi",
    "row": "TA",
    "script": "katakana",
    "tip": "Garis miring atas, garis horisontal, dipotong garis vertikal melengkung (mirip angka 5)."
  },
  {
    "char": "ツ",
    "romaji": "tsu",
    "row": "TA",
    "script": "katakana",
    "tip": "Goresan dari ATAS ke BAWAH: dua titik horisontal di atas dan sapuan diagonal menukik."
  },
  {
    "char": "テ",
    "romaji": "te",
    "row": "TA",
    "script": "katakana",
    "tip": "Dua garis horisontal sejajar, dipotong garis miring melengkung di bawah."
  },
  {
    "char": "ト",
    "romaji": "to",
    "row": "TA",
    "script": "katakana",
    "tip": "Garis vertikal lurus tegak, dengan cabang miring ke kanan seperti tiang lampu."
  },
  {
    "char": "ナ",
    "romaji": "na",
    "row": "NA",
    "script": "katakana",
    "tip": "Bentuk salib sederhana: garis horisontal dipotong garis miring melengkung lurus."
  },
  {
    "char": "ニ",
    "romaji": "ni",
    "row": "NA",
    "script": "katakana",
    "tip": "Dua garis horisontal sejajar, garis bawah sedikit lebih panjang (angka 2 kanji)."
  },
  {
    "char": "ヌ",
    "romaji": "nu",
    "row": "NA",
    "script": "katakana",
    "tip": "Garis sudut mirip angka 7 dipotong garis miring bersilangan di kanan bawah."
  },
  {
    "char": "ネ",
    "romaji": "ne",
    "row": "NA",
    "script": "katakana",
    "tip": "Titik aksen atas, garis sudut siku kiri, garis tegak tengah dan titik aksen kanan."
  },
  {
    "char": "ノ",
    "romaji": "no",
    "row": "NA",
    "script": "katakana",
    "tip": "Satu goresan tunggal miring diagonal anggun dari kanan atas ke kiri bawah."
  },
  {
    "char": "ハ",
    "romaji": "ha",
    "row": "HA",
    "script": "katakana",
    "tip": "Dua garis miring membentuk huruf v terbalik atau bentuk angka delapan (八)."
  },
  {
    "char": "ヒ",
    "romaji": "hi",
    "row": "HA",
    "script": "katakana",
    "tip": "Garis vertikal pendek, garis sudut horizontal, dan garis vertikal panjang menembus."
  },
  {
    "char": "フ",
    "romaji": "fu",
    "row": "HA",
    "script": "katakana",
    "tip": "Satu goresan sudut siku tajam di atas lalu melengkung lembut ke kiri bawah."
  },
  {
    "char": "ヘ",
    "romaji": "he",
    "row": "HA",
    "script": "katakana",
    "tip": "Bentuk atap rumah tajam, identik dengan hiragana へ."
  },
  {
    "char": "ホ",
    "romaji": "ho",
    "row": "HA",
    "script": "katakana",
    "tip": "Garis salib (horisontal dan vertikal berkait) dengan dua titik sayap di kiri-kanan."
  },
  {
    "char": "マ",
    "romaji": "ma",
    "row": "MA",
    "script": "katakana",
    "tip": "Garis sudut siku miring tajam lalu garis miring pendek di bawahnya."
  },
  {
    "char": "ミ",
    "romaji": "mi",
    "row": "MA",
    "script": "katakana",
    "tip": "Tiga garis miring diagonal paralel bertingkat (seperti bekas cakar tiga)."
  },
  {
    "char": "ム",
    "romaji": "mu",
    "row": "MA",
    "script": "katakana",
    "tip": "Sudut segitiga tajam di kiri dan titik aksen miring di kanan bawah."
  },
  {
    "char": "メ",
    "romaji": "me",
    "row": "MA",
    "script": "katakana",
    "tip": "Tanda silang miring (X) dengan garis dari kanan atas memotong garis kiri."
  },
  {
    "char": "モ",
    "romaji": "mo",
    "row": "MA",
    "script": "katakana",
    "tip": "Dua garis horisontal sejajar dipotong garis vertikal berbelok siku ke kanan."
  },
  {
    "char": "ヤ",
    "romaji": "ya",
    "row": "YA",
    "script": "katakana",
    "tip": "Mirip hiragana や tapi sudut-sudutnya kaku dan geometris tanpa lengkungan."
  },
  {
    "char": "ユ",
    "romaji": "yu",
    "row": "YA",
    "script": "katakana",
    "tip": "Garis sudut siku atas lalu garis horisontal bawah yang menembus garis kanan."
  },
  {
    "char": "ヨ",
    "romaji": "yo",
    "row": "YA",
    "script": "katakana",
    "tip": "Bentuk huruf 'E' kapital terbalik ke kiri dengan tiga bilah horisontal."
  },
  {
    "char": "ラ",
    "romaji": "ra",
    "row": "RA",
    "script": "katakana",
    "tip": "Garis horisontal pendek atas, lalu sudut siku melengkung ke kiri bawah."
  },
  {
    "char": "リ",
    "romaji": "ri",
    "row": "RA",
    "script": "katakana",
    "tip": "Dua garis vertikal tegak lurus kaku, garis kanan lebih panjang."
  },
  {
    "char": "ル",
    "romaji": "ru",
    "row": "RA",
    "script": "katakana",
    "tip": "Dua garis kaki; kaki kiri miring lurus, kaki kanan berbelok dan berkait ke atas."
  },
  {
    "char": "レ",
    "romaji": "re",
    "row": "RA",
    "script": "katakana",
    "tip": "Garis vertikal lurus yang langsung berbelok miring ke kanan atas (mirip tanda centang)."
  },
  {
    "char": "ロ",
    "romaji": "ro",
    "row": "RA",
    "script": "katakana",
    "tip": "Bentuk kotak persegi sempurna empat sisi tertutup rapat."
  },
  {
    "char": "ワ",
    "romaji": "wa",
    "row": "WA",
    "script": "katakana",
    "tip": "Garis tegak pendek kiri lalu garis atap bersudut siku melengkung (seperti フ berpenopang)."
  },
  {
    "char": "ヲ",
    "romaji": "wo",
    "row": "WA",
    "script": "katakana",
    "tip": "Dua garis horisontal dihubungkan garis miring melengkung di bawah."
  },
  {
    "char": "ン",
    "romaji": "n",
    "row": "WA",
    "script": "katakana",
    "tip": "Goresan dari BAWAH ke ATAS: satu titik di kiri bawah lalu sapuan diagonal menanjak."
  },
  {
    "char": "ガ",
    "romaji": "ga",
    "row": "GA",
    "script": "katakana",
    "tip": "Karakter カ dengan tanda kutip tenten (゛)."
  },
  {
    "char": "ギ",
    "romaji": "gi",
    "row": "GA",
    "script": "katakana",
    "tip": "Karakter キ dengan tanda kutip tenten (゛)."
  },
  {
    "char": "グ",
    "romaji": "gu",
    "row": "GA",
    "script": "katakana",
    "tip": "Karakter ク dengan tanda kutip tenten (゛)."
  },
  {
    "char": "ゲ",
    "romaji": "ge",
    "row": "GA",
    "script": "katakana",
    "tip": "Karakter ケ dengan tanda kutip tenten (゛)."
  },
  {
    "char": "ゴ",
    "romaji": "go",
    "row": "GA",
    "script": "katakana",
    "tip": "Karakter コ dengan tanda kutip tenten (゛)."
  },
  {
    "char": "ザ",
    "romaji": "za",
    "row": "ZA",
    "script": "katakana",
    "tip": "Karakter サ dengan tanda kutip tenten (゛)."
  },
  {
    "char": "ジ",
    "romaji": "ji",
    "row": "ZA",
    "script": "katakana",
    "tip": "Karakter シ dengan tanda kutip tenten (゛)."
  },
  {
    "char": "ズ",
    "romaji": "zu",
    "row": "ZA",
    "script": "katakana",
    "tip": "Karakter ス dengan tanda kutip tenten (゛)."
  },
  {
    "char": "ゼ",
    "romaji": "ze",
    "row": "ZA",
    "script": "katakana",
    "tip": "Karakter セ dengan tanda kutip tenten (゛)."
  },
  {
    "char": "ゾ",
    "romaji": "zo",
    "row": "ZA",
    "script": "katakana",
    "tip": "Karakter ソ dengan tanda kutip tenten (゛)."
  },
  {
    "char": "ダ",
    "romaji": "da",
    "row": "DA",
    "script": "katakana",
    "tip": "Karakter タ dengan tanda kutip tenten (゛)."
  },
  {
    "char": "ヂ",
    "romaji": "ji",
    "row": "DA",
    "script": "katakana",
    "tip": "Karakter チ dengan tanda kutip tenten (゛)."
  },
  {
    "char": "ヅ",
    "romaji": "zu",
    "row": "DA",
    "script": "katakana",
    "tip": "Karakter ツ dengan tanda kutip tenten (゛)."
  },
  {
    "char": "デ",
    "romaji": "de",
    "row": "DA",
    "script": "katakana",
    "tip": "Karakter テ dengan tanda kutip tenten (゛)."
  },
  {
    "char": "ド",
    "romaji": "do",
    "row": "DA",
    "script": "katakana",
    "tip": "Karakter ト dengan tanda kutip tenten (゛)."
  },
  {
    "char": "バ",
    "romaji": "ba",
    "row": "BA",
    "script": "katakana",
    "tip": "Karakter ハ dengan tanda kutip tenten (゛)."
  },
  {
    "char": "ビ",
    "romaji": "bi",
    "row": "BA",
    "script": "katakana",
    "tip": "Karakter ヒ dengan tanda kutip tenten (゛)."
  },
  {
    "char": "ブ",
    "romaji": "bu",
    "row": "BA",
    "script": "katakana",
    "tip": "Karakter フ dengan tanda kutip tenten (゛)."
  },
  {
    "char": "ベ",
    "romaji": "be",
    "row": "BA",
    "script": "katakana",
    "tip": "Karakter ヘ dengan tanda kutip tenten (゛)."
  },
  {
    "char": "ボ",
    "romaji": "bo",
    "row": "BA",
    "script": "katakana",
    "tip": "Karakter ホ dengan tanda kutip tenten (゛)."
  },
  {
    "char": "パ",
    "romaji": "pa",
    "row": "PA",
    "script": "katakana",
    "tip": "Karakter ハ dengan tanda lingkaran maru (゜)."
  },
  {
    "char": "ピ",
    "romaji": "pi",
    "row": "PA",
    "script": "katakana",
    "tip": "Karakter ヒ dengan tanda lingkaran maru (゜)."
  },
  {
    "char": "プ",
    "romaji": "pu",
    "row": "PA",
    "script": "katakana",
    "tip": "Karakter フ dengan tanda lingkaran maru (゜)."
  },
  {
    "char": "ペ",
    "romaji": "pe",
    "row": "PA",
    "script": "katakana",
    "tip": "Karakter ヘ dengan tanda lingkaran maru (゜)."
  },
  {
    "char": "ポ",
    "romaji": "po",
    "row": "PA",
    "script": "katakana",
    "tip": "Karakter ホ dengan tanda lingkaran maru (゜)."
  }
];

    // 327 Vocabulary Database (Hiragana & Katakana Loanwords)
