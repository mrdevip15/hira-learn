// 217 Kana characters (46 Hiragana + 25 Dakuon + 36 Yoon + 1 Sokuon + 46 Katakana + 25 Dakuon + 36 Yoon + 1 Sokuon + 1 Choonpu)
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
  },
  {
    "char": "きゃ",
    "romaji": "kya",
    "row": "KYA",
    "script": "hiragana",
    "tip": "Kombinasi き (ki) dan ゃ (ya kecil). Dibaca 'kya'. Ketik 'kya' pada keyboard."
  },
  {
    "char": "きゅ",
    "romaji": "kyu",
    "row": "KYA",
    "script": "hiragana",
    "tip": "Kombinasi き (ki) dan ゅ (yu kecil). Dibaca 'kyu'. Ketik 'kyu' pada keyboard."
  },
  {
    "char": "きょ",
    "romaji": "kyo",
    "row": "KYA",
    "script": "hiragana",
    "tip": "Kombinasi き (ki) dan ょ (yo kecil). Dibaca 'kyo'. Ketik 'kyo' pada keyboard."
  },
  {
    "char": "しゃ",
    "romaji": "sha",
    "row": "SHA",
    "script": "hiragana",
    "tip": "Kombinasi し (shi) dan ゃ (ya kecil). Dibaca 'sha' (seperti syaraf). Ketik 'sha' atau 'sya'."
  },
  {
    "char": "しゅ",
    "romaji": "shu",
    "row": "SHA",
    "script": "hiragana",
    "tip": "Kombinasi し (shi) dan ゅ (yu kecil). Dibaca 'shu' (seperti syukur). Ketik 'shu' atau 'syu'."
  },
  {
    "char": "しょ",
    "romaji": "sho",
    "row": "SHA",
    "script": "hiragana",
    "tip": "Kombinasi し (shi) dan ょ (yo kecil). Dibaca 'sho' (seperti syok). Ketik 'sho' atau 'syo'."
  },
  {
    "char": "ちゃ",
    "romaji": "cha",
    "row": "CHA",
    "script": "hiragana",
    "tip": "Kombinasi ち (chi) dan ゃ (ya kecil). Dibaca 'cha' (seperti cangkir). Ketik 'cha' atau 'tya'."
  },
  {
    "char": "ちゅ",
    "romaji": "chu",
    "row": "CHA",
    "script": "hiragana",
    "tip": "Kombinasi ち (chi) dan ゅ (yu kecil). Dibaca 'chu' (seperti cium). Ketik 'chu' atau 'tyu'."
  },
  {
    "char": "ちょ",
    "romaji": "cho",
    "row": "CHA",
    "script": "hiragana",
    "tip": "Kombinasi ち (chi) dan ょ (yo kecil). Dibaca 'cho' (seperti cokelat). Ketik 'cho' atau 'tyo'."
  },
  {
    "char": "にゃ",
    "romaji": "nya",
    "row": "NYA",
    "script": "hiragana",
    "tip": "Kombinasi に (ni) dan ゃ (ya kecil). Dibaca 'nya' sengau hidung lembut suara kucing. Ketik 'nya'."
  },
  {
    "char": "にゅ",
    "romaji": "nyu",
    "row": "NYA",
    "script": "hiragana",
    "tip": "Kombinasi に (ni) dan ゅ (yu kecil). Dibaca 'nyu' sengau luncuran seperti 'nyiur'. Ketik 'nyu'."
  },
  {
    "char": "にょ",
    "romaji": "nyo",
    "row": "NYA",
    "script": "hiragana",
    "tip": "Kombinasi に (ni) dan ょ (yo kecil). Dibaca 'nyo' sengau membulat seperti 'nyonya'. Ketik 'nyo'."
  },
  {
    "char": "ひゃ",
    "romaji": "hya",
    "row": "HYA",
    "script": "hiragana",
    "tip": "Kombinasi ひ (hi) dan ゃ (ya kecil). Dibaca 'hya' dari hembusan langit-langit mulut. Ketik 'hya'."
  },
  {
    "char": "ひゅ",
    "romaji": "hyu",
    "row": "HYA",
    "script": "hiragana",
    "tip": "Kombinasi ひ (hi) dan ゅ (yu kecil). Dibaca 'hyu' mendesing lembut. Ketik 'hyu'."
  },
  {
    "char": "ひょ",
    "romaji": "hyo",
    "row": "HYA",
    "script": "hiragana",
    "tip": "Kombinasi ひ (hi) dan ょ (yo kecil). Dibaca 'hyo' seperti kata 'hyouban'. Ketik 'hyo'."
  },
  {
    "char": "みゃ",
    "romaji": "mya",
    "row": "MYA",
    "script": "hiragana",
    "tip": "Kombinasi み (mi) dan ゃ (ya kecil). Dibaca 'mya' sengau bibir. Ketik 'mya'."
  },
  {
    "char": "みゅ",
    "romaji": "myu",
    "row": "MYA",
    "script": "hiragana",
    "tip": "Kombinasi み (mi) dan ゅ (yu kecil). Dibaca 'myu' sengau bibir luncuran (seperti musik). Ketik 'myu'."
  },
  {
    "char": "みょ",
    "romaji": "myo",
    "row": "MYA",
    "script": "hiragana",
    "tip": "Kombinasi み (mi) dan ょ (yo kecil). Dibaca 'myo' sengau bibir membulat (seperti 'myouji'). Ketik 'myo'."
  },
  {
    "char": "りゃ",
    "romaji": "rya",
    "row": "RYA",
    "script": "hiragana",
    "tip": "Kombinasi り (ri) dan ゃ (ya kecil). Dibaca 'rya' sentuhan ujung lidah cepat. Ketik 'rya'."
  },
  {
    "char": "りゅ",
    "romaji": "ryu",
    "row": "RYA",
    "script": "hiragana",
    "tip": "Kombinasi り (ri) dan ゅ (yu kecil). Dibaca 'ryu' (seperti ryuugaku = studi luar negeri). Ketik 'ryu'."
  },
  {
    "char": "りょ",
    "romaji": "ryo",
    "row": "RYA",
    "script": "hiragana",
    "tip": "Kombinasi り (ri) dan ょ (yo kecil). Dibaca 'ryo' (seperti ryokou = perjalanan wisata). Ketik 'ryo'."
  },
  {
    "char": "ぎゃ",
    "romaji": "gya",
    "row": "GYA",
    "script": "hiragana",
    "tip": "Kombinasi ぎ (gi) bertenten dan ゃ (ya kecil). Dakuon bersuara tebal 'gya'. Ketik 'gya'."
  },
  {
    "char": "ぎゅ",
    "romaji": "gyu",
    "row": "GYA",
    "script": "hiragana",
    "tip": "Kombinasi ぎ (gi) bertenten dan ゅ (yu kecil). Dibaca 'gyu' (seperti gyuuniku = daging sapi). Ketik 'gyu'."
  },
  {
    "char": "ぎょ",
    "romaji": "gyo",
    "row": "GYA",
    "script": "hiragana",
    "tip": "Kombinasi ぎ (gi) bertenten dan ょ (yo kecil). Dibaca 'gyo' (seperti gyouza = pangsit jepang). Ketik 'gyo'."
  },
  {
    "char": "じゃ",
    "romaji": "ja",
    "row": "JA",
    "script": "hiragana",
    "tip": "Kombinasi じ (ji) bertenten dan ゃ (ya kecil). Dibaca 'ja' (seperti 'ja, mata' = sampai jumpa). Ketik 'ja' atau 'zya'."
  },
  {
    "char": "じゅ",
    "romaji": "ju",
    "row": "JA",
    "script": "hiragana",
    "tip": "Kombinasi じ (ji) bertenten dan ゅ (yu kecil). Dibaca 'ju' (seperti juusho = alamat). Ketik 'ju' atau 'zyu'."
  },
  {
    "char": "じょ",
    "romaji": "jo",
    "row": "JA",
    "script": "hiragana",
    "tip": "Kombinasi じ (ji) bertenten dan ょ (yo kecil). Dibaca 'jo' (seperti josei = perempuan). Ketik 'jo' atau 'zyo'."
  },
  {
    "char": "ぢゃ",
    "romaji": "ja",
    "row": "JA",
    "script": "hiragana",
    "tip": "Kombinasi ぢ (ji/di) bertenten dan ゃ (ya kecil). Fonetik identik dengan じゃ ('ja'). Ketik 'dya' atau 'zya'."
  },
  {
    "char": "ぢゅ",
    "romaji": "ju",
    "row": "JA",
    "script": "hiragana",
    "tip": "Kombinasi ぢ (ji/di) bertenten dan ゅ (yu kecil). Fonetik identik dengan じゅ ('ju'). Ketik 'dyu' atau 'zyu'."
  },
  {
    "char": "ぢょ",
    "romaji": "jo",
    "row": "JA",
    "script": "hiragana",
    "tip": "Kombinasi ぢ (ji/di) bertenten dan ょ (yo kecil). Fonetik identik dengan じょ ('jo'). Ketik 'dyo' atau 'zyo'."
  },
  {
    "char": "びゃ",
    "romaji": "bya",
    "row": "BYA",
    "script": "hiragana",
    "tip": "Kombinasi び (bi) bertenten dan ゃ (ya kecil). Ketik 'bya'. Letupan bibir bersuara 'bya'."
  },
  {
    "char": "びゅ",
    "romaji": "byu",
    "row": "BYA",
    "script": "hiragana",
    "tip": "Kombinasi び (bi) bertenten dan ゅ (yu kecil). Ketik 'byu'. Letupan bibir bersuara desau 'byu'."
  },
  {
    "char": "びょ",
    "romaji": "byo",
    "row": "BYA",
    "script": "hiragana",
    "tip": "Kombinasi び (bi) bertenten dan ょ (yo kecil). Ketik 'byo'. Muncul pada kata 'byouin' (rumah sakit)."
  },
  {
    "char": "ぴゃ",
    "romaji": "pya",
    "row": "PYA",
    "script": "hiragana",
    "tip": "Kombinasi ぴ (pi) bermaru dan ゃ (ya kecil). Ketik 'pya'. Handakuon letupan tak bersuara 'pya'."
  },
  {
    "char": "ぴゅ",
    "romaji": "pyu",
    "row": "PYA",
    "script": "hiragana",
    "tip": "Kombinasi ぴ (pi) bermaru dan ゅ (yu kecil). Ketik 'pyu'. Handakuon letupan tak bersuara 'pyu'."
  },
  {
    "char": "ぴょ",
    "romaji": "pyo",
    "row": "PYA",
    "script": "hiragana",
    "tip": "Kombinasi ぴ (pi) bermaru dan ょ (yo kecil). Ketik 'pyo'. Menyerupai onomatopoeia lompat katak (pyon-pyon)."
  },
  {
    "char": "キャ",
    "romaji": "kya",
    "row": "KYA",
    "script": "katakana",
    "tip": "Kombinasi キ (ki) dan ャ (ya kecil). Ketik 'kya' pada keyboard. Muncul pada kata キャンプ (camping)."
  },
  {
    "char": "キュ",
    "romaji": "kyu",
    "row": "KYA",
    "script": "katakana",
    "tip": "Kombinasi キ (ki) dan ュ (yu kecil). Ketik 'kyu' pada keyboard. Muncul pada kata キュート (cute)."
  },
  {
    "char": "キョ",
    "romaji": "kyo",
    "row": "KYA",
    "script": "katakana",
    "tip": "Kombinasi キ (ki) dan ョ (yo kecil). Ketik 'kyo' pada keyboard. Muncul pada kata キオスク/キョスク."
  },
  {
    "char": "シャ",
    "romaji": "sha",
    "row": "SHA",
    "script": "katakana",
    "tip": "Kombinasi シ (shi) dan ャ (ya kecil). Ketik 'sha' atau 'sya'. Muncul pada シャツ (kemeja) & シャワー (shower)."
  },
  {
    "char": "シュ",
    "romaji": "shu",
    "row": "SHA",
    "script": "katakana",
    "tip": "Kombinasi シ (shi) dan ュ (yu kecil). Ketik 'shu' atau 'syu'. Muncul pada kata シュークリーム (kue sus choux)."
  },
  {
    "char": "ショ",
    "romaji": "sho",
    "row": "SHA",
    "script": "katakana",
    "tip": "Kombinasi シ (shi) dan ョ (yo kecil). Ketik 'sho' atau 'syo'. Muncul pada kata ショップ (toko/shop)."
  },
  {
    "char": "チャ",
    "romaji": "cha",
    "row": "CHA",
    "script": "katakana",
    "tip": "Kombinasi チ (chi) dan ャ (ya kecil). Ketik 'cha' atau 'tya'. Muncul pada kata チャット (chat) & チャンピオン."
  },
  {
    "char": "チュ",
    "romaji": "chu",
    "row": "CHA",
    "script": "katakana",
    "tip": "Kombinasi チ (chi) dan ュ (yu kecil). Ketik 'chu' atau 'tyu'. Muncul pada kata チューリップ (bunga tulip)."
  },
  {
    "char": "チョ",
    "romaji": "cho",
    "row": "CHA",
    "script": "katakana",
    "tip": "Kombinasi チ (chi) dan ョ (yo kecil). Ketik 'cho' atau 'tyo'. Muncul pada kata チョコレート (cokelat)."
  },
  {
    "char": "ニャ",
    "romaji": "nya",
    "row": "NYA",
    "script": "katakana",
    "tip": "Kombinasi ニ (ni) dan ャ (ya kecil). Ketik 'nya'. Aksara katakana tiruan suara mengeong kucing."
  },
  {
    "char": "ニュ",
    "romaji": "nyu",
    "row": "NYA",
    "script": "katakana",
    "tip": "Kombinasi ニ (ni) dan ュ (yu kecil). Ketik 'nyu'. Sangat populer pada kata ニュース (berita / news)."
  },
  {
    "char": "ニョ",
    "romaji": "nyo",
    "row": "NYA",
    "script": "katakana",
    "tip": "Kombinasi ニ (ni) dan ョ (yo kecil). Ketik 'nyo'. Muncul pada kata serapan kuliner ニョッキ (gnocchi)."
  },
  {
    "char": "ヒャ",
    "romaji": "hya",
    "row": "HYA",
    "script": "katakana",
    "tip": "Kombinasi ヒ (hi) dan ャ (ya kecil). Ketik 'hya' pada keyboard."
  },
  {
    "char": "ヒュ",
    "romaji": "hyu",
    "row": "HYA",
    "script": "katakana",
    "tip": "Kombinasi ヒ (hi) dan ュ (yu kecil). Ketik 'hyu'. Muncul pada kata serapan ヒューズ (sekring / fuse)."
  },
  {
    "char": "ヒョ",
    "romaji": "hyo",
    "row": "HYA",
    "script": "katakana",
    "tip": "Kombinasi ヒ (hi) dan ョ (yo kecil). Ketik 'hyo' pada keyboard."
  },
  {
    "char": "ミャ",
    "romaji": "mya",
    "row": "MYA",
    "script": "katakana",
    "tip": "Kombinasi ミ (mi) dan ャ (ya kecil). Ketik 'mya'. Muncul pada nama negara ミャンマー (Myanmar)."
  },
  {
    "char": "ミュ",
    "romaji": "myu",
    "row": "MYA",
    "script": "katakana",
    "tip": "Kombinasi ミ (mi) dan ュ (yu kecil). Ketik 'myu'. Muncul pada kata ミュージック (musik) & ミュージアム."
  },
  {
    "char": "ミョ",
    "romaji": "myo",
    "row": "MYA",
    "script": "katakana",
    "tip": "Kombinasi ミ (mi) dan ョ (yo kecil). Ketik 'myo' pada keyboard."
  },
  {
    "char": "リャ",
    "romaji": "rya",
    "row": "RYA",
    "script": "katakana",
    "tip": "Kombinasi リ (ri) dan ャ (ya kecil). Ketik 'rya' pada keyboard."
  },
  {
    "char": "リュ",
    "romaji": "ryu",
    "row": "RYA",
    "script": "katakana",
    "tip": "Kombinasi リ (ri) dan ュ (yu kecil). Ketik 'ryu'. Muncul pada kata serapan リュック (tas ransel/rucksack)."
  },
  {
    "char": "リョ",
    "romaji": "ryo",
    "row": "RYA",
    "script": "katakana",
    "tip": "Kombinasi リ (ri) dan ョ (yo kecil). Ketik 'ryo' pada keyboard."
  },
  {
    "char": "ギャ",
    "romaji": "gya",
    "row": "GYA",
    "script": "katakana",
    "tip": "Kombinasi ギ (gi) bertenten dan ャ (ya kecil). Ketik 'gya'. Muncul pada kata ギャラリー (galeri seni)."
  },
  {
    "char": "ギュ",
    "romaji": "gyu",
    "row": "GYA",
    "script": "katakana",
    "tip": "Kombinasi ギ (gi) bertenten dan ュ (yu kecil). Ketik 'gyu' pada keyboard."
  },
  {
    "char": "ギョ",
    "romaji": "gyo",
    "row": "GYA",
    "script": "katakana",
    "tip": "Kombinasi ギ (gi) bertenten dan ョ (yo kecil). Ketik 'gyo'. Muncul pada kata kuliner ギョーザ (gyoza)."
  },
  {
    "char": "ジャ",
    "romaji": "ja",
    "row": "JA",
    "script": "katakana",
    "tip": "Kombinasi ジ (ji) bertenten dan ャ (ya kecil). Ketik 'ja' atau 'zya'. Muncul pada kata ジャム (selai) & ジャケット."
  },
  {
    "char": "ジュ",
    "romaji": "ju",
    "row": "JA",
    "script": "katakana",
    "tip": "Kombinasi ジ (ji) bertenten dan ュ (yu kecil). Ketik 'ju' atau 'zyu'. Muncul pada kata ジュース (jus buah)."
  },
  {
    "char": "ジョ",
    "romaji": "jo",
    "row": "JA",
    "script": "katakana",
    "tip": "Kombinasi ジ (ji) bertenten dan ョ (yo kecil). Ketik 'jo' atau 'zyo'. Muncul pada kata ジョギング (jogging)."
  },
  {
    "char": "ヂャ",
    "romaji": "ja",
    "row": "JA",
    "script": "katakana",
    "tip": "Kombinasi ヂ (ji/di) bertenten dan ャ (ya kecil). Alternatif fonetik untuk 'ja'. Ketik 'dya' atau 'zya'."
  },
  {
    "char": "ヂュ",
    "romaji": "ju",
    "row": "JA",
    "script": "katakana",
    "tip": "Kombinasi ヂ (ji/di) bertenten dan ュ (yu kecil). Alternatif fonetik untuk 'ju'. Ketik 'dyu' atau 'zyu'."
  },
  {
    "char": "ヂョ",
    "romaji": "jo",
    "row": "JA",
    "script": "katakana",
    "tip": "Kombinasi ヂ (ji/di) bertenten dan ョ (yo kecil). Alternatif fonetik untuk 'jo'. Ketik 'dyo' atau 'zyo'."
  },
  {
    "char": "ビャ",
    "romaji": "bya",
    "row": "BYA",
    "script": "katakana",
    "tip": "Kombinasi ビ (bi) bertenten dan ャ (ya kecil). Ketik 'bya' pada keyboard."
  },
  {
    "char": "ビュ",
    "romaji": "byu",
    "row": "BYA",
    "script": "katakana",
    "tip": "Kombinasi ビ (bi) bertenten dan ュ (yu kecil). Ketik 'byu'. Muncul pada kata ビュッフェ (prasmanan buffet)."
  },
  {
    "char": "ビョ",
    "romaji": "byo",
    "row": "BYA",
    "script": "katakana",
    "tip": "Kombinasi ビ (bi) bertenten dan ョ (yo kecil). Ketik 'byo' pada keyboard."
  },
  {
    "char": "ピャ",
    "romaji": "pya",
    "row": "PYA",
    "script": "katakana",
    "tip": "Kombinasi ピ (pi) bermaru dan ャ (ya kecil). Ketik 'pya' pada keyboard."
  },
  {
    "char": "ピュ",
    "romaji": "pyu",
    "row": "PYA",
    "script": "katakana",
    "tip": "Kombinasi ピ (pi) bermaru dan ュ (yu kecil). Ketik 'pyu'. Muncul pada kata ピューレ (puree saus buah)."
  },
  {
    "char": "ピョ",
    "romaji": "pyo",
    "row": "PYA",
    "script": "katakana",
    "tip": "Kombinasi ピ (pi) bermaru dan ョ (yo kecil). Ketik 'pyo' pada keyboard."
  },
  {
    "char": "っ",
    "romaji": "xtsu",
    "row": "SPECIAL",
    "script": "hiragana",
    "tip": "Sokuon Hiragana (konsonan rangkap). Menahan napas 1 ketukan sebelum huruf konsonan berikutnya (misal: きって = kitte). Ketik konsonan berikutnya 2x atau ketik 'xtsu'/'ltsu'."
  },
  {
    "char": "ッ",
    "romaji": "xtsu",
    "row": "SPECIAL",
    "script": "katakana",
    "tip": "Sokuon Katakana (konsonan rangkap serapan). Menahan napas sejenak sebelum letupan konsonan (misal: ベッド = beddo). Ketik konsonan berikutnya 2x atau ketik 'xtsu'/'ltsu'."
  },
  {
    "char": "ー",
    "romaji": "-",
    "row": "SPECIAL",
    "script": "katakana",
    "tip": "Chōonpu (tanda vokal panjang Katakana). Memperpanjang suara vokal sebelumnya 1 ketukan mora (misal: コーヒー = koohii). Ketik tombol tanda minus/strip (-) pada keyboard."
  }
];

// Panduan & Aturan Pengetikan Aksara Khusus (Sokuon & Chōonpu)
const SPECIAL_KANA_RULES = {
  sokuon: {
    hiragana: {
      char: "っ",
      romaji: "xtsu / ltsu",
      name: "Sokuon Hiragana (促音)",
      typingRule: "Ketik konsonan berikutnya 2 kali di keyboard romaji (contoh: 'kitte' -> きって, 'gakkou' -> がっこう). Atau ketik 'xtsu'/'ltsu' untuk memunculkan huruf っ kecil berdiri sendiri.",
      rule: "Melambangkan konsonan rangkap (geminate consonant) atau jeda glotal hembusan 1 ketukan mora sebelum konsonan k, s, t, p.",
      mnemonic: "Bentuk つ kecil. Bayangkan tanda rem mendadak sebelum meletupkan bunyi konsonan berikutnya!"
    },
    katakana: {
      char: "ッ",
      romaji: "xtsu / ltsu",
      name: "Sokuon Katakana (促音)",
      typingRule: "Ketik konsonan berikutnya 2 kali saat input katakana (contoh: 'beddo' -> ベッド, 'kappu' -> カップ). Atau ketik 'xtsu'/'ltsu'.",
      rule: "Digunakan pada kata serapan asing (gairaigo) untuk menahan hembusan nafas sebelum konsonan ganda.",
      mnemonic: "Bentuk ツ kecil bersudut tajam sebagai tanda jeda loncatan bunyi dalam kata serapan asing."
    }
  },
  choonpu: {
    katakana: {
      char: "ー",
      romaji: "-",
      name: "Chōonpu (長音符)",
      typingRule: "Tekan tombol tanda minus / strip / dash (-) pada keyboard saat mengetik mode Jepang.",
      rule: "Memperpanjang suara vokal sebelumnya sepanjang satu ketukan penuh / mora (contoh: コーヒー = koohii, ケーキ = keeki, タクシー = takushii).",
      mnemonic: "Garis mendatar lurus penunjuk rentang vokal yang ditarik panjang merata ke samping."
    }
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { KANA_CHARS, SPECIAL_KANA_RULES };
}
