// KanaMaster Stroke Order Metadata
// Metadata jumlah dan urutan goresan untuk Hiragana & Katakana dasar, Dakuon, serta Yoon.

const STROKE_DATA = {
  "あ": {
    "strokes": 3,
    "steps": [
      "1. Tarik garis horizontal mendatar dari kiri ke kanan.",
      "2. Tarik garis vertikal melengkung sedikit memotong garis pertama ke arah bawah.",
      "3. Mulai dari kiri bawah, putar melengkung membentuk simpul bulat besar searah jarum jam ke kanan bawah."
    ],
    "points": [
      {
        "num": 1,
        "x": 90,
        "y": 100
      },
      {
        "num": 2,
        "x": 160,
        "y": 70
      },
      {
        "num": 3,
        "x": 125,
        "y": 145
      }
    ]
  },
  "い": {
    "strokes": 2,
    "steps": [
      "1. Tarik garis melengkung ke bawah di sisi kiri dengan sedikit kait (hane) ke atas di ujung.",
      "2. Tarik garis kedua yang lebih pendek di sisi kanan sejajar melengkung ke bawah."
    ],
    "points": [
      {
        "num": 1,
        "x": 105,
        "y": 100
      },
      {
        "num": 2,
        "x": 215,
        "y": 120
      }
    ]
  },
  "う": {
    "strokes": 2,
    "steps": [
      "1. Buat coretan pendek diagonal miring di bagian atas tengah.",
      "2. Mulai dari kiri atas lalu melengkung besar menyerupai bentuk daun telinga ke bawah."
    ],
    "points": [
      {
        "num": 1,
        "x": 160,
        "y": 75
      },
      {
        "num": 2,
        "x": 120,
        "y": 135
      }
    ]
  },
  "え": {
    "strokes": 2,
    "steps": [
      "1. Buat coretan pendek diagonal miring di atas.",
      "2. Tarik garis zig-zag mirip angka 7: mendatar ke kanan, turun miring ke kiri, lalu sapuan bergelombang ke kanan bawah."
    ],
    "points": [
      {
        "num": 1,
        "x": 160,
        "y": 70
      },
      {
        "num": 2,
        "x": 110,
        "y": 140
      }
    ]
  },
  "お": {
    "strokes": 3,
    "steps": [
      "1. Tarik garis horizontal pendek dari kiri ke kanan.",
      "2. Tarik garis vertikal memotong, turun melingkar ke kiri lalu membentuk perut bulat di bawah.",
      "3. Berikan titik aksen miring di bagian kanan atas."
    ],
    "points": [
      {
        "num": 1,
        "x": 95,
        "y": 100
      },
      {
        "num": 2,
        "x": 150,
        "y": 75
      },
      {
        "num": 3,
        "x": 235,
        "y": 100
      }
    ]
  },
  "か": {
    "strokes": 3,
    "steps": [
      "1. Tarik garis melengkung ke bawah di kiri diakhiri kait kecil ke atas.",
      "2. Tarik garis vertikal miring memotong melintasi garis pertama.",
      "3. Berikan coretan aksen pendek di bagian kanan atas."
    ],
    "points": [
      {
        "num": 1,
        "x": 105,
        "y": 95
      },
      {
        "num": 2,
        "x": 175,
        "y": 75
      },
      {
        "num": 3,
        "x": 235,
        "y": 95
      }
    ]
  },
  "き": {
    "strokes": 4,
    "steps": [
      "1. Tarik garis horizontal atas miring sedikit ke atas kanan.",
      "2. Tarik garis horizontal kedua sejajar di bawah garis pertama.",
      "3. Tarik garis diagonal memotong kedua garis dengan kait kecil ke kiri di ujungnya.",
      "4. Buat lengkungan busur terpisah di bawah (senyuman)."
    ],
    "points": [
      {
        "num": 1,
        "x": 100,
        "y": 100
      },
      {
        "num": 2,
        "x": 95,
        "y": 145
      },
      {
        "num": 3,
        "x": 175,
        "y": 70
      },
      {
        "num": 4,
        "x": 120,
        "y": 225
      }
    ]
  },
  "く": {
    "strokes": 1,
    "steps": [
      "1. Satu tarikan kontinu: miring ke bawah-kiri lalu berbelok runcing sudut paruh ke bawah-kanan."
    ],
    "points": [
      {
        "num": 1,
        "x": 195,
        "y": 85
      }
    ]
  },
  "け": {
    "strokes": 3,
    "steps": [
      "1. Tarik garis vertikal kiri sedikit melengkung dengan kait di ujung bawah.",
      "2. Tarik garis horizontal pendek di sebelah kanan.",
      "3. Tarik garis vertikal kanan melengkung halus melewati garis kedua."
    ],
    "points": [
      {
        "num": 1,
        "x": 95,
        "y": 90
      },
      {
        "num": 2,
        "x": 160,
        "y": 115
      },
      {
        "num": 3,
        "x": 215,
        "y": 80
      }
    ]
  },
  "こ": {
    "strokes": 2,
    "steps": [
      "1. Tarik garis horizontal atas dari kiri ke kanan dengan sedikit kait ke bawah.",
      "2. Tarik garis horizontal bawah yang melengkung lembut menghadap ke atas."
    ],
    "points": [
      {
        "num": 1,
        "x": 110,
        "y": 105
      },
      {
        "num": 2,
        "x": 110,
        "y": 215
      }
    ]
  },
  "さ": {
    "strokes": 3,
    "steps": [
      "1. Tarik garis horizontal agak miring naik ke kanan.",
      "2. Tarik garis diagonal memotong ke bawah dengan kait kecil ke kiri.",
      "3. Buat lengkungan kurva terpisah di bagian bawah menghadap ke atas."
    ],
    "points": [
      {
        "num": 1,
        "x": 100,
        "y": 110
      },
      {
        "num": 2,
        "x": 175,
        "y": 80
      },
      {
        "num": 3,
        "x": 125,
        "y": 220
      }
    ]
  },
  "し": {
    "strokes": 1,
    "steps": [
      "1. Satu tarikan garis tunggal: vertikal turun lalu melengkung ke atas kanan seperti mata kail."
    ],
    "points": [
      {
        "num": 1,
        "x": 140,
        "y": 85
      }
    ]
  },
  "す": {
    "strokes": 2,
    "steps": [
      "1. Tarik garis horizontal panjang dari kiri ke kanan.",
      "2. Tarik garis vertikal memotong di tengah, membuat simpul memutar ke kiri lalu turun meruncing."
    ],
    "points": [
      {
        "num": 1,
        "x": 90,
        "y": 110
      },
      {
        "num": 2,
        "x": 180,
        "y": 75
      }
    ]
  },
  "せ": {
    "strokes": 3,
    "steps": [
      "1. Tarik garis horizontal mendatar dari kiri ke kanan.",
      "2. Tarik garis vertikal di sebelah kanan, turun lalu menekuk horizontal ke kiri.",
      "3. Tarik garis vertikal di sisi kiri turun melengkung halus ke bawah."
    ],
    "points": [
      {
        "num": 1,
        "x": 85,
        "y": 130
      },
      {
        "num": 2,
        "x": 220,
        "y": 90
      },
      {
        "num": 3,
        "x": 125,
        "y": 100
      }
    ]
  },
  "そ": {
    "strokes": 1,
    "steps": [
      "1. Satu garis kontinu zig-zag: mendatar ke kanan, serong ke kiri, mendatar lagi, lalu melengkung setengah lingkaran di bawah."
    ],
    "points": [
      {
        "num": 1,
        "x": 110,
        "y": 85
      }
    ]
  },
  "た": {
    "strokes": 4,
    "steps": [
      "1. Tarik garis horizontal pendek.",
      "2. Tarik garis miring diagonal memotong garis pertama.",
      "3. Tarik garis horizontal kecil atas di sebelah kanan.",
      "4. Tarik garis horizontal melengkung bawah di bawahnya (mirip こ kecil)."
    ],
    "points": [
      {
        "num": 1,
        "x": 90,
        "y": 110
      },
      {
        "num": 2,
        "x": 140,
        "y": 85
      },
      {
        "num": 3,
        "x": 185,
        "y": 145
      },
      {
        "num": 4,
        "x": 180,
        "y": 210
      }
    ]
  },
  "ち": {
    "strokes": 2,
    "steps": [
      "1. Tarik garis horizontal mendatar miring sedikit ke atas.",
      "2. Tarik garis diagonal memotong garis pertama, lalu melengkung membentuk setengah lingkaran besar mirip angka 5."
    ],
    "points": [
      {
        "num": 1,
        "x": 95,
        "y": 105
      },
      {
        "num": 2,
        "x": 170,
        "y": 80
      }
    ]
  },
  "つ": {
    "strokes": 1,
    "steps": [
      "1. Satu tarikan halus: mulai sedikit mendatar di atas lalu melengkung besar ke kanan dan turun menyapu ke kiri."
    ],
    "points": [
      {
        "num": 1,
        "x": 105,
        "y": 115
      }
    ]
  },
  "て": {
    "strokes": 1,
    "steps": [
      "1. Satu goresan kontinu: mendatar dari kiri ke kanan, lalu melengkung lembut turun ke kiri bawah seperti busur."
    ],
    "points": [
      {
        "num": 1,
        "x": 100,
        "y": 105
      }
    ]
  },
  "と": {
    "strokes": 2,
    "steps": [
      "1. Tarik garis pendek diagonal miring dari kiri atas ke tengah.",
      "2. Mulai dari atas kanan menyentuh garis pertama, lalu melengkung bulat besar ke kiri bawah."
    ],
    "points": [
      {
        "num": 1,
        "x": 135,
        "y": 85
      },
      {
        "num": 2,
        "x": 185,
        "y": 130
      }
    ]
  },
  "な": {
    "strokes": 4,
    "steps": [
      "1. Tarik garis horizontal pendek di sebelah kiri.",
      "2. Tarik garis diagonal memotong garis pertama ke arah bawah kanan.",
      "3. Berikan aksen coretan pendek di kanan atas.",
      "4. Tarik garis vertikal di kanan bawah yang membentuk simpul lingkaran kecil di ujungnya."
    ],
    "points": [
      {
        "num": 1,
        "x": 90,
        "y": 105
      },
      {
        "num": 2,
        "x": 140,
        "y": 85
      },
      {
        "num": 3,
        "x": 215,
        "y": 110
      },
      {
        "num": 4,
        "x": 200,
        "y": 160
      }
    ]
  },
  "に": {
    "strokes": 3,
    "steps": [
      "1. Tarik garis vertikal melengkung di sisi kiri dengan kait ke atas di ujung.",
      "2. Tarik garis horizontal pendek atas di sisi kanan.",
      "3. Tarik garis horizontal kedua di bawahnya melengkung sedikit."
    ],
    "points": [
      {
        "num": 1,
        "x": 95,
        "y": 90
      },
      {
        "num": 2,
        "x": 165,
        "y": 115
      },
      {
        "num": 3,
        "x": 160,
        "y": 195
      }
    ]
  },
  "ぬ": {
    "strokes": 2,
    "steps": [
      "1. Tarik garis miring dari kiri atas ke kanan bawah.",
      "2. Mulai dari atas tengah, turun memotong garis pertama, melengkung ke atas, lalu melingkari dan membuat simpul loop di ujung kanan."
    ],
    "points": [
      {
        "num": 1,
        "x": 115,
        "y": 95
      },
      {
        "num": 2,
        "x": 185,
        "y": 80
      }
    ]
  },
  "ね": {
    "strokes": 2,
    "steps": [
      "1. Tarik garis lurus vertikal tegak di sisi kiri.",
      "2. Mulai dari kiri memotong garis pertama, zig-zag ke kanan lalu miring turun, melengkung naik membentuk simpul kecil di kanan."
    ],
    "points": [
      {
        "num": 1,
        "x": 105,
        "y": 85
      },
      {
        "num": 2,
        "x": 80,
        "y": 125
      }
    ]
  },
  "の": {
    "strokes": 1,
    "steps": [
      "1. Satu goresan melingkar halus: mulai serong ke kiri bawah lalu melingkar besar searah jarum jam mengelilingi pusat."
    ],
    "points": [
      {
        "num": 1,
        "x": 165,
        "y": 90
      }
    ]
  },
  "は": {
    "strokes": 3,
    "steps": [
      "1. Tarik garis vertikal kiri melengkung dengan kait di ujung bawah.",
      "2. Tarik garis horizontal pendek di sebelah kanan.",
      "3. Tarik garis vertikal memotong garis kedua, lalu membentuk simpul melingkar di bagian bawahnya."
    ],
    "points": [
      {
        "num": 1,
        "x": 95,
        "y": 85
      },
      {
        "num": 2,
        "x": 150,
        "y": 110
      },
      {
        "num": 3,
        "x": 205,
        "y": 85
      }
    ]
  },
  "ひ": {
    "strokes": 1,
    "steps": [
      "1. Satu tarikan kontinu: garis pendek ke kanan atas, turun melengkung membentuk mangkuk bulat, lalu naik dan turun ke kanan bawah."
    ],
    "points": [
      {
        "num": 1,
        "x": 90,
        "y": 115
      }
    ]
  },
  "ふ": {
    "strokes": 4,
    "steps": [
      "1. Buat titik coretan atas melengkung ke bawah.",
      "2. Tarik garis lengkung tengah yang menyapu ke kiri bawah dengan kait halus.",
      "3. Tarik titik coretan di sisi kiri bawah miring ke bawah.",
      "4. Tarik titik coretan di sisi kanan bawah miring ke bawah."
    ],
    "points": [
      {
        "num": 1,
        "x": 160,
        "y": 70
      },
      {
        "num": 2,
        "x": 155,
        "y": 115
      },
      {
        "num": 3,
        "x": 95,
        "y": 175
      },
      {
        "num": 4,
        "x": 225,
        "y": 175
      }
    ]
  },
  "へ": {
    "strokes": 1,
    "steps": [
      "1. Satu tarikan garis sudut bukit: miring naik pendek ke kanan atas, lalu miring turun panjang ke kanan bawah."
    ],
    "points": [
      {
        "num": 1,
        "x": 95,
        "y": 165
      }
    ]
  },
  "ほ": {
    "strokes": 4,
    "steps": [
      "1. Tarik garis vertikal di sisi kiri dengan kait kecil di bawah.",
      "2. Tarik garis horizontal atas di bagian kanan.",
      "3. Tarik garis horizontal kedua di bawahnya.",
      "4. Tarik garis vertikal dari garis horizontal kedua, turun dan buat simpul bulat di bawah (tidak menembus garis atas)."
    ],
    "points": [
      {
        "num": 1,
        "x": 95,
        "y": 85
      },
      {
        "num": 2,
        "x": 150,
        "y": 100
      },
      {
        "num": 3,
        "x": 150,
        "y": 145
      },
      {
        "num": 4,
        "x": 205,
        "y": 100
      }
    ]
  },
  "ま": {
    "strokes": 3,
    "steps": [
      "1. Tarik garis horizontal atas mendatar.",
      "2. Tarik garis horizontal kedua di bawahnya yang sedikit lebih pendek.",
      "3. Tarik garis vertikal lurus memotong kedua garis dari atas, lalu membuat simpul melingkar di bawah menuju kanan."
    ],
    "points": [
      {
        "num": 1,
        "x": 95,
        "y": 105
      },
      {
        "num": 2,
        "x": 105,
        "y": 150
      },
      {
        "num": 3,
        "x": 160,
        "y": 70
      }
    ]
  },
  "み": {
    "strokes": 2,
    "steps": [
      "1. Tarik garis mendatar miring turun, buat simpul loop ke kiri, lalu sapukan garis panjang melintang ke kanan bawah.",
      "2. Tarik garis vertikal miring memotong ekor garis pertama."
    ],
    "points": [
      {
        "num": 1,
        "x": 100,
        "y": 110
      },
      {
        "num": 2,
        "x": 220,
        "y": 120
      }
    ]
  },
  "む": {
    "strokes": 3,
    "steps": [
      "1. Tarik garis horizontal pendek dari kiri ke kanan.",
      "2. Tarik garis vertikal dari atas, buat simpul melingkar di kiri bawah, lalu sapukan melengkung ke atas kanan dengan kait.",
      "3. Berikan titik aksen di kanan atas."
    ],
    "points": [
      {
        "num": 1,
        "x": 90,
        "y": 110
      },
      {
        "num": 2,
        "x": 135,
        "y": 80
      },
      {
        "num": 3,
        "x": 230,
        "y": 90
      }
    ]
  },
  "め": {
    "strokes": 2,
    "steps": [
      "1. Tarik garis miring diagonal dari kanan atas ke kiri bawah.",
      "2. Mulai dari kiri tengah, lengkungkan memotong garis pertama, lalu melingkar besar mengelilingi kanan membentuk lingkaran lonjong."
    ],
    "points": [
      {
        "num": 1,
        "x": 145,
        "y": 90
      },
      {
        "num": 2,
        "x": 110,
        "y": 110
      }
    ]
  },
  "も": {
    "strokes": 3,
    "steps": [
      "1. Tarik garis utama: vertikal turun dari atas tengah, lalu melengkung ke kanan atas seperti kail pancing.",
      "2. Tarik garis horizontal melintang di bagian atas.",
      "3. Tarik garis horizontal kedua melintang sejajar di bawah garis kedua."
    ],
    "points": [
      {
        "num": 1,
        "x": 160,
        "y": 75
      },
      {
        "num": 2,
        "x": 105,
        "y": 120
      },
      {
        "num": 3,
        "x": 100,
        "y": 165
      }
    ]
  },
  "や": {
    "strokes": 3,
    "steps": [
      "1. Tarik garis utama melengkung dari kiri ke kanan atas diakhiri kait kecil.",
      "2. Berikan coretan pendek di bagian atas tengah.",
      "3. Tarik garis diagonal memotong garis utama dari atas ke bawah kiri."
    ],
    "points": [
      {
        "num": 1,
        "x": 105,
        "y": 115
      },
      {
        "num": 2,
        "x": 195,
        "y": 85
      },
      {
        "num": 3,
        "x": 135,
        "y": 80
      }
    ]
  },
  "ゆ": {
    "strokes": 2,
    "steps": [
      "1. Tarik garis vertikal turun, belok membentuk lengkungan lebar ke atas kanan melingkar.",
      "2. Tarik garis vertikal lurus memotong dari atas tengah turun tembus ke bawah."
    ],
    "points": [
      {
        "num": 1,
        "x": 115,
        "y": 95
      },
      {
        "num": 2,
        "x": 195,
        "y": 75
      }
    ]
  },
  "よ": {
    "strokes": 2,
    "steps": [
      "1. Tarik garis horizontal pendek di sebelah kiri.",
      "2. Tarik garis vertikal turun dari atas, membuat simpul melingkar di kiri bawah lalu mendatar ke kanan."
    ],
    "points": [
      {
        "num": 1,
        "x": 105,
        "y": 110
      },
      {
        "num": 2,
        "x": 185,
        "y": 80
      }
    ]
  },
  "ら": {
    "strokes": 2,
    "steps": [
      "1. Buat coretan pendek diagonal miring di atas.",
      "2. Tarik garis dari tengah melengkung bulat besar ke kanan dan turun menyapu (seperti angka 5 tanpa atap)."
    ],
    "points": [
      {
        "num": 1,
        "x": 155,
        "y": 80
      },
      {
        "num": 2,
        "x": 130,
        "y": 135
      }
    ]
  },
  "り": {
    "strokes": 2,
    "steps": [
      "1. Tarik garis vertikal pendek di sisi kiri dengan kait kecil di bawah.",
      "2. Tarik garis vertikal kedua di sisi kanan yang lebih panjang melengkung lembut ke bawah."
    ],
    "points": [
      {
        "num": 1,
        "x": 115,
        "y": 95
      },
      {
        "num": 2,
        "x": 200,
        "y": 80
      }
    ]
  },
  "る": {
    "strokes": 1,
    "steps": [
      "1. Satu garis kontinu: mendatar ke kanan, serong ke kiri bawah, melengkung bulat besar lalu membuat simpul lingkaran kecil di akhir."
    ],
    "points": [
      {
        "num": 1,
        "x": 105,
        "y": 100
      }
    ]
  },
  "れ": {
    "strokes": 2,
    "steps": [
      "1. Tarik garis lurus vertikal di sisi kiri.",
      "2. Mulai dari kiri memotong garis pertama, zig-zag ke kanan, lalu melengkung dan mengibaskan ekor ke kanan atas."
    ],
    "points": [
      {
        "num": 1,
        "x": 105,
        "y": 85
      },
      {
        "num": 2,
        "x": 85,
        "y": 130
      }
    ]
  },
  "ろ": {
    "strokes": 1,
    "steps": [
      "1. Satu garis kontinu: mendatar ke kanan, serong ke kiri bawah, lalu melengkung bulat setengah lingkaran (mirip る tanpa simpul bulat)."
    ],
    "points": [
      {
        "num": 1,
        "x": 105,
        "y": 100
      }
    ]
  },
  "わ": {
    "strokes": 2,
    "steps": [
      "1. Tarik garis lurus vertikal di sisi kiri.",
      "2. Tarik garis zig-zag memotong garis vertikal, lalu melengkung bulat besar ke kanan bawah menyerupai perut busur."
    ],
    "points": [
      {
        "num": 1,
        "x": 105,
        "y": 85
      },
      {
        "num": 2,
        "x": 85,
        "y": 130
      }
    ]
  },
  "を": {
    "strokes": 3,
    "steps": [
      "1. Tarik garis horizontal mendatar.",
      "2. Tarik garis vertikal memotong, serong melengkung ke kiri bawah.",
      "3. Buat lengkungan melingkar setengah terbuka memotong dari sisi kiri bawah melintas ke kanan."
    ],
    "points": [
      {
        "num": 1,
        "x": 95,
        "y": 100
      },
      {
        "num": 2,
        "x": 150,
        "y": 90
      },
      {
        "num": 3,
        "x": 125,
        "y": 170
      }
    ]
  },
  "ん": {
    "strokes": 1,
    "steps": [
      "1. Satu goresan kontinu: serong turun pendek, naik serong ke kanan atas, lalu melengkung turun ke bawah dan meliuk ke atas (mirip huruf n)."
    ],
    "points": [
      {
        "num": 1,
        "x": 115,
        "y": 95
      }
    ]
  },
  "ア": {
    "strokes": 2,
    "steps": [
      "1. Tarik garis mendatar ke kanan lalu menekuk miring tajam ke bawah kiri.",
      "2. Tarik garis melengkung memanjang dari atas ke bawah kiri menyapu."
    ],
    "points": [
      {
        "num": 1,
        "x": 100,
        "y": 95
      },
      {
        "num": 2,
        "x": 190,
        "y": 95
      }
    ]
  },
  "イ": {
    "strokes": 2,
    "steps": [
      "1. Tarik garis miring menyapu dari kanan atas ke kiri bawah.",
      "2. Tarik garis vertikal lurus turun dari tengah garis pertama."
    ],
    "points": [
      {
        "num": 1,
        "x": 175,
        "y": 80
      },
      {
        "num": 2,
        "x": 145,
        "y": 140
      }
    ]
  },
  "ウ": {
    "strokes": 3,
    "steps": [
      "1. Buat coretan titik vertikal pendek di atas tengah.",
      "2. Tarik coretan pendek vertikal di sisi kiri bawah.",
      "3. Tarik garis horizontal dari atas goresan 2 ke kanan, lalu tekuk miring ke kiri bawah."
    ],
    "points": [
      {
        "num": 1,
        "x": 160,
        "y": 70
      },
      {
        "num": 2,
        "x": 100,
        "y": 120
      },
      {
        "num": 3,
        "x": 105,
        "y": 120
      }
    ]
  },
  "エ": {
    "strokes": 3,
    "steps": [
      "1. Tarik garis horizontal pendek di bagian atas.",
      "2. Tarik garis vertikal tengah lurus ke bawah.",
      "3. Tarik garis horizontal bawah yang lebih panjang sebagai alas."
    ],
    "points": [
      {
        "num": 1,
        "x": 115,
        "y": 85
      },
      {
        "num": 2,
        "x": 160,
        "y": 85
      },
      {
        "num": 3,
        "x": 90,
        "y": 235
      }
    ]
  },
  "オ": {
    "strokes": 3,
    "steps": [
      "1. Tarik garis horizontal atas dari kiri ke kanan.",
      "2. Tarik garis vertikal tegak memotong garis pertama dengan kait tajam ke kiri.",
      "3. Tarik garis miring menyapu dari persimpangan menuju kanan bawah."
    ],
    "points": [
      {
        "num": 1,
        "x": 95,
        "y": 100
      },
      {
        "num": 2,
        "x": 165,
        "y": 75
      },
      {
        "num": 3,
        "x": 160,
        "y": 135
      }
    ]
  },
  "カ": {
    "strokes": 2,
    "steps": [
      "1. Tarik garis horizontal ke kanan, tekuk turun ke bawah dengan kait ke dalam.",
      "2. Tarik garis miring melengkung memotong dari tengah ke bawah kiri."
    ],
    "points": [
      {
        "num": 1,
        "x": 105,
        "y": 105
      },
      {
        "num": 2,
        "x": 170,
        "y": 85
      }
    ]
  },
  "キ": {
    "strokes": 3,
    "steps": [
      "1. Tarik garis horizontal atas miring sedikit ke kanan atas.",
      "2. Tarik garis horizontal kedua di bawahnya sejajar lebih panjang.",
      "3. Tarik garis miring memotong kedua garis dari kanan atas menyapu ke kiri bawah."
    ],
    "points": [
      {
        "num": 1,
        "x": 110,
        "y": 105
      },
      {
        "num": 2,
        "x": 95,
        "y": 155
      },
      {
        "num": 3,
        "x": 195,
        "y": 75
      }
    ]
  },
  "ク": {
    "strokes": 2,
    "steps": [
      "1. Tarik garis miring pendek dari kanan atas ke kiri bawah.",
      "2. Mulai dari atas garis 1, mendatar ke kanan lalu menyapu melengkung ke kiri bawah."
    ],
    "points": [
      {
        "num": 1,
        "x": 150,
        "y": 85
      },
      {
        "num": 2,
        "x": 155,
        "y": 85
      }
    ]
  },
  "ケ": {
    "strokes": 3,
    "steps": [
      "1. Tarik garis miring pendek di kiri atas menuju kiri bawah.",
      "2. Tarik garis horizontal melintang dari tengah.",
      "3. Tarik garis melengkung memanjang dari atas memotong garis horizontal ke kiri bawah."
    ],
    "points": [
      {
        "num": 1,
        "x": 130,
        "y": 85
      },
      {
        "num": 2,
        "x": 115,
        "y": 150
      },
      {
        "num": 3,
        "x": 190,
        "y": 85
      }
    ]
  },
  "コ": {
    "strokes": 2,
    "steps": [
      "1. Tarik garis horizontal atas ke kanan lalu tekuk tegak 90 derajat ke bawah.",
      "2. Tarik garis horizontal bawah menutup dari kiri menyentuh ujung bawah garis pertama."
    ],
    "points": [
      {
        "num": 1,
        "x": 110,
        "y": 105
      },
      {
        "num": 2,
        "x": 110,
        "y": 220
      }
    ]
  },
  "サ": {
    "strokes": 3,
    "steps": [
      "1. Tarik garis horizontal panjang agak miring naik ke kanan.",
      "2. Tarik garis vertikal kiri turun memotong garis pertama.",
      "3. Tarik garis vertikal kanan turun memotong lalu melengkung ke kiri bawah."
    ],
    "points": [
      {
        "num": 1,
        "x": 90,
        "y": 120
      },
      {
        "num": 2,
        "x": 135,
        "y": 85
      },
      {
        "num": 3,
        "x": 195,
        "y": 85
      }
    ]
  },
  "シ": {
    "strokes": 3,
    "steps": [
      "1. Buat titik coretan miring atas di sisi kiri.",
      "2. Buat titik coretan kedua di bawahnya sejajar.",
      "3. Tarik sapuan panjang dari kiri bawah melesat naik ke arah kanan atas."
    ],
    "points": [
      {
        "num": 1,
        "x": 115,
        "y": 100
      },
      {
        "num": 2,
        "x": 105,
        "y": 155
      },
      {
        "num": 3,
        "x": 100,
        "y": 225
      }
    ]
  },
  "ス": {
    "strokes": 2,
    "steps": [
      "1. Tarik garis horizontal ke kanan lalu tekuk miring tajam ke kiri bawah.",
      "2. Tarik garis miring kedua melintasi dari kanan atas ke arah kanan bawah."
    ],
    "points": [
      {
        "num": 1,
        "x": 105,
        "y": 105
      },
      {
        "num": 2,
        "x": 190,
        "y": 135
      }
    ]
  },
  "セ": {
    "strokes": 2,
    "steps": [
      "1. Tarik garis horizontal mendatar ke kanan lalu tekuk turun ke bawah dengan kait.",
      "2. Tarik garis vertikal tegak dari kiri atas memotong lalu tekuk horizontal ke kanan."
    ],
    "points": [
      {
        "num": 1,
        "x": 95,
        "y": 125
      },
      {
        "num": 2,
        "x": 145,
        "y": 90
      }
    ]
  },
  "ソ": {
    "strokes": 2,
    "steps": [
      "1. Buat coretan titik miring di kiri atas mengarah ke bawah kanan.",
      "2. Tarik sapuan panjang dari kanan atas melesat turun ke kiri bawah."
    ],
    "points": [
      {
        "num": 1,
        "x": 125,
        "y": 95
      },
      {
        "num": 2,
        "x": 215,
        "y": 80
      }
    ]
  },
  "タ": {
    "strokes": 3,
    "steps": [
      "1. Tarik garis miring pendek dari kanan atas ke kiri bawah.",
      "2. Dari ujung atas garis 1, mendatar ke kanan lalu menekuk melengkung ke kiri bawah.",
      "3. Buat coretan miring pendek di bagian dalam."
    ],
    "points": [
      {
        "num": 1,
        "x": 135,
        "y": 85
      },
      {
        "num": 2,
        "x": 140,
        "y": 85
      },
      {
        "num": 3,
        "x": 140,
        "y": 175
      }
    ]
  },
  "チ": {
    "strokes": 3,
    "steps": [
      "1. Tarik garis miring pendek atas dari kanan ke kiri bawah.",
      "2. Tarik garis horizontal melintang di tengah.",
      "3. Tarik garis melengkung memotong dari atas garis kedua turun ke kiri bawah."
    ],
    "points": [
      {
        "num": 1,
        "x": 190,
        "y": 80
      },
      {
        "num": 2,
        "x": 95,
        "y": 140
      },
      {
        "num": 3,
        "x": 165,
        "y": 110
      }
    ]
  },
  "ツ": {
    "strokes": 3,
    "steps": [
      "1. Buat titik coretan vertikal pertama di kiri atas.",
      "2. Buat titik coretan vertikal kedua di kanannya.",
      "3. Tarik sapuan panjang melesat dari kanan atas turun tajam ke kiri bawah."
    ],
    "points": [
      {
        "num": 1,
        "x": 115,
        "y": 90
      },
      {
        "num": 2,
        "x": 165,
        "y": 105
      },
      {
        "num": 3,
        "x": 220,
        "y": 80
      }
    ]
  },
  "テ": {
    "strokes": 3,
    "steps": [
      "1. Tarik garis horizontal pendek di bagian atas.",
      "2. Tarik garis horizontal kedua di bawahnya yang lebih panjang.",
      "3. Tarik garis melengkung dari tengah garis kedua menyapu ke kiri bawah."
    ],
    "points": [
      {
        "num": 1,
        "x": 120,
        "y": 95
      },
      {
        "num": 2,
        "x": 90,
        "y": 145
      },
      {
        "num": 3,
        "x": 160,
        "y": 145
      }
    ]
  },
  "ト": {
    "strokes": 2,
    "steps": [
      "1. Tarik garis vertikal lurus tegak dari atas ke bawah.",
      "2. Tarik garis miring diagonal keluar dari tengah ke kanan bawah."
    ],
    "points": [
      {
        "num": 1,
        "x": 140,
        "y": 80
      },
      {
        "num": 2,
        "x": 145,
        "y": 145
      }
    ]
  },
  "ナ": {
    "strokes": 2,
    "steps": [
      "1. Tarik garis horizontal mendatar dari kiri ke kanan.",
      "2. Tarik garis miring melengkung memotong dari atas tengah menyapu ke kiri bawah."
    ],
    "points": [
      {
        "num": 1,
        "x": 95,
        "y": 110
      },
      {
        "num": 2,
        "x": 160,
        "y": 80
      }
    ]
  },
  "ニ": {
    "strokes": 2,
    "steps": [
      "1. Tarik garis horizontal pendek di bagian atas.",
      "2. Tarik garis horizontal kedua di bagian bawah yang lebih panjang."
    ],
    "points": [
      {
        "num": 1,
        "x": 115,
        "y": 115
      },
      {
        "num": 2,
        "x": 95,
        "y": 205
      }
    ]
  },
  "ヌ": {
    "strokes": 2,
    "steps": [
      "1. Tarik garis horizontal lalu tekuk miring tajam ke kiri bawah.",
      "2. Tarik garis miring melintas memotong garis pertama ke kanan bawah."
    ],
    "points": [
      {
        "num": 1,
        "x": 105,
        "y": 105
      },
      {
        "num": 2,
        "x": 130,
        "y": 145
      }
    ]
  },
  "ネ": {
    "strokes": 4,
    "steps": [
      "1. Buat titik coretan miring di atas tengah.",
      "2. Tarik garis vertikal tegak di sisi kiri.",
      "3. Tarik garis horizontal dari atas garis 2 lalu miring ke kiri bawah.",
      "4. Tarik garis miring menyapu ke kanan bawah."
    ],
    "points": [
      {
        "num": 1,
        "x": 155,
        "y": 70
      },
      {
        "num": 2,
        "x": 125,
        "y": 120
      },
      {
        "num": 3,
        "x": 125,
        "y": 120
      },
      {
        "num": 4,
        "x": 175,
        "y": 160
      }
    ]
  },
  "ノ": {
    "strokes": 1,
    "steps": [
      "1. Satu goresan sapuan anggun: mulai dari kanan atas melengkung halus meluncur ke kiri bawah."
    ],
    "points": [
      {
        "num": 1,
        "x": 205,
        "y": 85
      }
    ]
  },
  "ハ": {
    "strokes": 2,
    "steps": [
      "1. Tarik garis miring pendek di sisi kiri mengarah ke kiri bawah.",
      "2. Tarik garis miring di sisi kanan menyapu ke kanan bawah."
    ],
    "points": [
      {
        "num": 1,
        "x": 120,
        "y": 100
      },
      {
        "num": 2,
        "x": 200,
        "y": 100
      }
    ]
  },
  "ヒ": {
    "strokes": 2,
    "steps": [
      "1. Tarik garis horizontal pendek miring sedikit ke bawah kanan.",
      "2. Tarik garis vertikal turun, melengkung ke kanan bawah lalu naik melengkung ke atas."
    ],
    "points": [
      {
        "num": 1,
        "x": 110,
        "y": 105
      },
      {
        "num": 2,
        "x": 110,
        "y": 105
      }
    ]
  },
  "フ": {
    "strokes": 1,
    "steps": [
      "1. Satu tarikan garis: mendatar ke kanan lalu menekuk melengkung lembut ke kiri bawah."
    ],
    "points": [
      {
        "num": 1,
        "x": 115,
        "y": 105
      }
    ]
  },
  "ヘ": {
    "strokes": 1,
    "steps": [
      "1. Satu goresan sudut bukit: serong naik pendek ke kanan, lalu serong panjang turun ke kanan bawah."
    ],
    "points": [
      {
        "num": 1,
        "x": 95,
        "y": 165
      }
    ]
  },
  "ホ": {
    "strokes": 4,
    "steps": [
      "1. Tarik garis horizontal atas mendatar.",
      "2. Tarik garis vertikal tegak di tengah memotong garis pertama dengan kait di ujung.",
      "3. Buat titik coretan miring di sisi kiri.",
      "4. Buat titik coretan miring di sisi kanan."
    ],
    "points": [
      {
        "num": 1,
        "x": 95,
        "y": 100
      },
      {
        "num": 2,
        "x": 160,
        "y": 70
      },
      {
        "num": 3,
        "x": 110,
        "y": 155
      },
      {
        "num": 4,
        "x": 215,
        "y": 155
      }
    ]
  },
  "マ": {
    "strokes": 2,
    "steps": [
      "1. Tarik garis horizontal mendatar lalu tekuk serong tajam ke kiri bawah.",
      "2. Tarik garis miring memotong melintang garis pertama ke kanan bawah."
    ],
    "points": [
      {
        "num": 1,
        "x": 105,
        "y": 105
      },
      {
        "num": 2,
        "x": 155,
        "y": 165
      }
    ]
  },
  "ミ": {
    "strokes": 3,
    "steps": [
      "1. Tarik garis miring pendek teratas dari kiri atas ke kanan bawah.",
      "2. Tarik garis miring kedua di tengah sejajar.",
      "3. Tarik garis miring ketiga di bagian bawah sejajar yang sedikit lebih panjang."
    ],
    "points": [
      {
        "num": 1,
        "x": 120,
        "y": 95
      },
      {
        "num": 2,
        "x": 110,
        "y": 150
      },
      {
        "num": 3,
        "x": 100,
        "y": 205
      }
    ]
  },
  "ム": {
    "strokes": 2,
    "steps": [
      "1. Tarik garis miring ke kiri bawah lalu menekuk mendatar ke kanan.",
      "2. Buat titik coretan miring di bagian atas kanan."
    ],
    "points": [
      {
        "num": 1,
        "x": 160,
        "y": 85
      },
      {
        "num": 2,
        "x": 205,
        "y": 145
      }
    ]
  },
  "メ": {
    "strokes": 2,
    "steps": [
      "1. Tarik garis miring melengkung dari kanan atas menyapu ke kiri bawah.",
      "2. Tarik garis miring memotong dari kiri atas menyapu ke kanan bawah."
    ],
    "points": [
      {
        "num": 1,
        "x": 205,
        "y": 85
      },
      {
        "num": 2,
        "x": 125,
        "y": 105
      }
    ]
  },
  "モ": {
    "strokes": 3,
    "steps": [
      "1. Tarik garis horizontal atas mendatar.",
      "2. Tarik garis horizontal kedua di bawahnya yang lebih panjang.",
      "3. Tarik garis vertikal memotong kedua garis dari atas lalu melengkung ke kanan di bawah."
    ],
    "points": [
      {
        "num": 1,
        "x": 105,
        "y": 105
      },
      {
        "num": 2,
        "x": 95,
        "y": 155
      },
      {
        "num": 3,
        "x": 160,
        "y": 75
      }
    ]
  },
  "ヤ": {
    "strokes": 2,
    "steps": [
      "1. Tarik garis horizontal lalu serong turun melengkung ke kiri bawah.",
      "2. Tarik garis miring memotong dari kanan atas turun ke bawah."
    ],
    "points": [
      {
        "num": 1,
        "x": 105,
        "y": 110
      },
      {
        "num": 2,
        "x": 175,
        "y": 85
      }
    ]
  },
  "ユ": {
    "strokes": 2,
    "steps": [
      "1. Tarik garis vertikal turun lalu tekuk 90 derajat mendatar ke kanan.",
      "2. Tarik garis horizontal panjang di bawah memotong garis pertama."
    ],
    "points": [
      {
        "num": 1,
        "x": 115,
        "y": 95
      },
      {
        "num": 2,
        "x": 90,
        "y": 215
      }
    ]
  },
  "ヨ": {
    "strokes": 3,
    "steps": [
      "1. Tarik garis horizontal atas lalu tekuk tegak 90 derajat ke bawah.",
      "2. Tarik garis horizontal tengah mendatar ke kanan.",
      "3. Tarik garis horizontal bawah menutup alas."
    ],
    "points": [
      {
        "num": 1,
        "x": 115,
        "y": 95
      },
      {
        "num": 2,
        "x": 115,
        "y": 155
      },
      {
        "num": 3,
        "x": 115,
        "y": 220
      }
    ]
  },
  "ラ": {
    "strokes": 2,
    "steps": [
      "1. Tarik garis horizontal pendek di bagian atas.",
      "2. Tarik garis melengkung dari kiri atas garis kedua lalu meluncur menyapu ke kiri bawah."
    ],
    "points": [
      {
        "num": 1,
        "x": 120,
        "y": 90
      },
      {
        "num": 2,
        "x": 115,
        "y": 135
      }
    ]
  },
  "リ": {
    "strokes": 2,
    "steps": [
      "1. Tarik garis vertikal pendek di sebelah kiri.",
      "2. Tarik garis vertikal kedua di sebelah kanan yang lebih panjang menyapu melengkung ke bawah."
    ],
    "points": [
      {
        "num": 1,
        "x": 120,
        "y": 95
      },
      {
        "num": 2,
        "x": 200,
        "y": 80
      }
    ]
  },
  "ル": {
    "strokes": 2,
    "steps": [
      "1. Tarik garis miring melengkung di sisi kiri ke arah kiri bawah.",
      "2. Tarik garis vertikal di sisi kanan, turun lalu melengkung ke kanan dengan kait ke atas."
    ],
    "points": [
      {
        "num": 1,
        "x": 130,
        "y": 90
      },
      {
        "num": 2,
        "x": 185,
        "y": 85
      }
    ]
  },
  "レ": {
    "strokes": 1,
    "steps": [
      "1. Satu goresan sudut: vertikal lurus ke bawah lalu menekuk tajam melesat miring ke kanan atas."
    ],
    "points": [
      {
        "num": 1,
        "x": 130,
        "y": 85
      }
    ]
  },
  "ロ": {
    "strokes": 3,
    "steps": [
      "1. Tarik garis vertikal kiri dari atas ke bawah.",
      "2. Dari atas garis 1, mendatar ke kanan lalu menekuk tegak ke bawah.",
      "3. Tarik garis horizontal bawah menutup kotak dari kiri ke kanan."
    ],
    "points": [
      {
        "num": 1,
        "x": 110,
        "y": 100
      },
      {
        "num": 2,
        "x": 110,
        "y": 100
      },
      {
        "num": 3,
        "x": 110,
        "y": 220
      }
    ]
  },
  "ワ": {
    "strokes": 2,
    "steps": [
      "1. Tarik garis vertikal pendek di sisi kiri.",
      "2. Dari atas garis 1, mendatar ke kanan lalu menyapu melengkung besar ke kiri bawah."
    ],
    "points": [
      {
        "num": 1,
        "x": 110,
        "y": 100
      },
      {
        "num": 2,
        "x": 110,
        "y": 100
      }
    ]
  },
  "ヲ": {
    "strokes": 3,
    "steps": [
      "1. Tarik garis horizontal atas mendatar.",
      "2. Tarik garis horizontal kedua di bawahnya.",
      "3. Tarik garis miring melengkung memotong kedua garis ke kiri bawah."
    ],
    "points": [
      {
        "num": 1,
        "x": 105,
        "y": 95
      },
      {
        "num": 2,
        "x": 105,
        "y": 145
      },
      {
        "num": 3,
        "x": 175,
        "y": 95
      }
    ]
  },
  "ン": {
    "strokes": 2,
    "steps": [
      "1. Buat titik coretan miring di kiri atas mengarah ke bawah.",
      "2. Tarik sapuan panjang melesat dari kiri bawah naik ke kanan atas."
    ],
    "points": [
      {
        "num": 1,
        "x": 115,
        "y": 115
      },
      {
        "num": 2,
        "x": 105,
        "y": 215
      }
    ]
  },
  "ゃ": {
    "strokes": 3,
    "steps": [
      "1. Tarik garis lengkung berputar diakhiri kait kecil.",
      "2. Berikan coretan pendek di atas.",
      "3. Tarik garis miring memotong di sebelah kiri."
    ],
    "points": [
      {
        "num": 1,
        "x": 125,
        "y": 140
      },
      {
        "num": 2,
        "x": 195,
        "y": 120
      },
      {
        "num": 3,
        "x": 150,
        "y": 115
      }
    ]
  },
  "ゅ": {
    "strokes": 2,
    "steps": [
      "1. Tarik garis melengkung membentuk perut bulat ke atas.",
      "2. Tarik garis vertikal memotong di tengah ke bawah."
    ],
    "points": [
      {
        "num": 1,
        "x": 135,
        "y": 125
      },
      {
        "num": 2,
        "x": 195,
        "y": 115
      }
    ]
  },
  "ょ": {
    "strokes": 2,
    "steps": [
      "1. Tarik garis horizontal pendek.",
      "2. Tarik garis vertikal membentuk simpul bulat lalu mendatar."
    ],
    "points": [
      {
        "num": 1,
        "x": 130,
        "y": 135
      },
      {
        "num": 2,
        "x": 190,
        "y": 115
      }
    ]
  },
  "ャ": {
    "strokes": 2,
    "steps": [
      "1. Tarik garis horizontal lalu tekuk serong ke kiri bawah.",
      "2. Tarik garis miring memotong ke bawah."
    ],
    "points": [
      {
        "num": 1,
        "x": 130,
        "y": 135
      },
      {
        "num": 2,
        "x": 185,
        "y": 115
      }
    ]
  },
  "ュ": {
    "strokes": 2,
    "steps": [
      "1. Tarik garis vertikal lalu belok mendatar ke kanan.",
      "2. Tarik garis horizontal bawah memotong alas."
    ],
    "points": [
      {
        "num": 1,
        "x": 135,
        "y": 125
      },
      {
        "num": 2,
        "x": 115,
        "y": 215
      }
    ]
  },
  "ョ": {
    "strokes": 3,
    "steps": [
      "1. Tarik garis horizontal atas lalu tekuk ke bawah.",
      "2. Tarik garis horizontal tengah.",
      "3. Tarik garis horizontal bawah."
    ],
    "points": [
      {
        "num": 1,
        "x": 135,
        "y": 125
      },
      {
        "num": 2,
        "x": 135,
        "y": 165
      },
      {
        "num": 3,
        "x": 135,
        "y": 215
      }
    ]
  },
  "が": {
    "strokes": 5,
    "steps": [
      "1. Tarik garis melengkung ke bawah di kiri diakhiri kait kecil ke atas.",
      "2. Tarik garis vertikal miring memotong melintasi garis pertama.",
      "3. Berikan coretan aksen pendek di bagian kanan atas.",
      "4. Tarik coretan dakuten (゛ tenten) pertama miring di kanan atas.",
      "5. Tarik coretan dakuten (゛ tenten) kedua sejajar di kanannya."
    ],
    "points": [
      {
        "num": 1,
        "x": 105,
        "y": 95
      },
      {
        "num": 2,
        "x": 175,
        "y": 75
      },
      {
        "num": 3,
        "x": 235,
        "y": 95
      },
      {
        "num": 4,
        "x": 235,
        "y": 65
      },
      {
        "num": 5,
        "x": 255,
        "y": 75
      }
    ]
  },
  "ぎ": {
    "strokes": 6,
    "steps": [
      "1. Tarik garis horizontal atas miring sedikit ke atas kanan.",
      "2. Tarik garis horizontal kedua sejajar di bawah garis pertama.",
      "3. Tarik garis diagonal memotong kedua garis dengan kait kecil ke kiri di ujungnya.",
      "4. Buat lengkungan busur terpisah di bawah (senyuman).",
      "5. Tarik coretan dakuten (゛ tenten) pertama miring di kanan atas.",
      "6. Tarik coretan dakuten (゛ tenten) kedua sejajar di kanannya."
    ],
    "points": [
      {
        "num": 1,
        "x": 100,
        "y": 100
      },
      {
        "num": 2,
        "x": 95,
        "y": 145
      },
      {
        "num": 3,
        "x": 175,
        "y": 70
      },
      {
        "num": 4,
        "x": 120,
        "y": 225
      },
      {
        "num": 5,
        "x": 235,
        "y": 65
      },
      {
        "num": 6,
        "x": 255,
        "y": 75
      }
    ]
  },
  "ぐ": {
    "strokes": 3,
    "steps": [
      "1. Satu tarikan kontinu: miring ke bawah-kiri lalu berbelok runcing sudut paruh ke bawah-kanan.",
      "2. Tarik coretan dakuten (゛ tenten) pertama miring di kanan atas.",
      "3. Tarik coretan dakuten (゛ tenten) kedua sejajar di kanannya."
    ],
    "points": [
      {
        "num": 1,
        "x": 195,
        "y": 85
      },
      {
        "num": 2,
        "x": 235,
        "y": 65
      },
      {
        "num": 3,
        "x": 255,
        "y": 75
      }
    ]
  },
  "げ": {
    "strokes": 5,
    "steps": [
      "1. Tarik garis vertikal kiri sedikit melengkung dengan kait di ujung bawah.",
      "2. Tarik garis horizontal pendek di sebelah kanan.",
      "3. Tarik garis vertikal kanan melengkung halus melewati garis kedua.",
      "4. Tarik coretan dakuten (゛ tenten) pertama miring di kanan atas.",
      "5. Tarik coretan dakuten (゛ tenten) kedua sejajar di kanannya."
    ],
    "points": [
      {
        "num": 1,
        "x": 95,
        "y": 90
      },
      {
        "num": 2,
        "x": 160,
        "y": 115
      },
      {
        "num": 3,
        "x": 215,
        "y": 80
      },
      {
        "num": 4,
        "x": 235,
        "y": 65
      },
      {
        "num": 5,
        "x": 255,
        "y": 75
      }
    ]
  },
  "ご": {
    "strokes": 4,
    "steps": [
      "1. Tarik garis horizontal atas dari kiri ke kanan dengan sedikit kait ke bawah.",
      "2. Tarik garis horizontal bawah yang melengkung lembut menghadap ke atas.",
      "3. Tarik coretan dakuten (゛ tenten) pertama miring di kanan atas.",
      "4. Tarik coretan dakuten (゛ tenten) kedua sejajar di kanannya."
    ],
    "points": [
      {
        "num": 1,
        "x": 110,
        "y": 105
      },
      {
        "num": 2,
        "x": 110,
        "y": 215
      },
      {
        "num": 3,
        "x": 235,
        "y": 65
      },
      {
        "num": 4,
        "x": 255,
        "y": 75
      }
    ]
  },
  "ざ": {
    "strokes": 5,
    "steps": [
      "1. Tarik garis horizontal agak miring naik ke kanan.",
      "2. Tarik garis diagonal memotong ke bawah dengan kait kecil ke kiri.",
      "3. Buat lengkungan kurva terpisah di bagian bawah menghadap ke atas.",
      "4. Tarik coretan dakuten (゛ tenten) pertama miring di kanan atas.",
      "5. Tarik coretan dakuten (゛ tenten) kedua sejajar di kanannya."
    ],
    "points": [
      {
        "num": 1,
        "x": 100,
        "y": 110
      },
      {
        "num": 2,
        "x": 175,
        "y": 80
      },
      {
        "num": 3,
        "x": 125,
        "y": 220
      },
      {
        "num": 4,
        "x": 235,
        "y": 65
      },
      {
        "num": 5,
        "x": 255,
        "y": 75
      }
    ]
  },
  "じ": {
    "strokes": 3,
    "steps": [
      "1. Satu tarikan garis tunggal: vertikal turun lalu melengkung ke atas kanan seperti mata kail.",
      "2. Tarik coretan dakuten (゛ tenten) pertama miring di kanan atas.",
      "3. Tarik coretan dakuten (゛ tenten) kedua sejajar di kanannya."
    ],
    "points": [
      {
        "num": 1,
        "x": 140,
        "y": 85
      },
      {
        "num": 2,
        "x": 235,
        "y": 65
      },
      {
        "num": 3,
        "x": 255,
        "y": 75
      }
    ]
  },
  "ず": {
    "strokes": 4,
    "steps": [
      "1. Tarik garis horizontal panjang dari kiri ke kanan.",
      "2. Tarik garis vertikal memotong di tengah, membuat simpul memutar ke kiri lalu turun meruncing.",
      "3. Tarik coretan dakuten (゛ tenten) pertama miring di kanan atas.",
      "4. Tarik coretan dakuten (゛ tenten) kedua sejajar di kanannya."
    ],
    "points": [
      {
        "num": 1,
        "x": 90,
        "y": 110
      },
      {
        "num": 2,
        "x": 180,
        "y": 75
      },
      {
        "num": 3,
        "x": 235,
        "y": 65
      },
      {
        "num": 4,
        "x": 255,
        "y": 75
      }
    ]
  },
  "ぜ": {
    "strokes": 5,
    "steps": [
      "1. Tarik garis horizontal mendatar dari kiri ke kanan.",
      "2. Tarik garis vertikal di sebelah kanan, turun lalu menekuk horizontal ke kiri.",
      "3. Tarik garis vertikal di sisi kiri turun melengkung halus ke bawah.",
      "4. Tarik coretan dakuten (゛ tenten) pertama miring di kanan atas.",
      "5. Tarik coretan dakuten (゛ tenten) kedua sejajar di kanannya."
    ],
    "points": [
      {
        "num": 1,
        "x": 85,
        "y": 130
      },
      {
        "num": 2,
        "x": 220,
        "y": 90
      },
      {
        "num": 3,
        "x": 125,
        "y": 100
      },
      {
        "num": 4,
        "x": 235,
        "y": 65
      },
      {
        "num": 5,
        "x": 255,
        "y": 75
      }
    ]
  },
  "ぞ": {
    "strokes": 3,
    "steps": [
      "1. Satu garis kontinu zig-zag: mendatar ke kanan, serong ke kiri, mendatar lagi, lalu melengkung setengah lingkaran di bawah.",
      "2. Tarik coretan dakuten (゛ tenten) pertama miring di kanan atas.",
      "3. Tarik coretan dakuten (゛ tenten) kedua sejajar di kanannya."
    ],
    "points": [
      {
        "num": 1,
        "x": 110,
        "y": 85
      },
      {
        "num": 2,
        "x": 235,
        "y": 65
      },
      {
        "num": 3,
        "x": 255,
        "y": 75
      }
    ]
  },
  "だ": {
    "strokes": 6,
    "steps": [
      "1. Tarik garis horizontal pendek.",
      "2. Tarik garis miring diagonal memotong garis pertama.",
      "3. Tarik garis horizontal kecil atas di sebelah kanan.",
      "4. Tarik garis horizontal melengkung bawah di bawahnya (mirip こ kecil).",
      "5. Tarik coretan dakuten (゛ tenten) pertama miring di kanan atas.",
      "6. Tarik coretan dakuten (゛ tenten) kedua sejajar di kanannya."
    ],
    "points": [
      {
        "num": 1,
        "x": 90,
        "y": 110
      },
      {
        "num": 2,
        "x": 140,
        "y": 85
      },
      {
        "num": 3,
        "x": 185,
        "y": 145
      },
      {
        "num": 4,
        "x": 180,
        "y": 210
      },
      {
        "num": 5,
        "x": 235,
        "y": 65
      },
      {
        "num": 6,
        "x": 255,
        "y": 75
      }
    ]
  },
  "ぢ": {
    "strokes": 4,
    "steps": [
      "1. Tarik garis horizontal mendatar miring sedikit ke atas.",
      "2. Tarik garis diagonal memotong garis pertama, lalu melengkung membentuk setengah lingkaran besar mirip angka 5.",
      "3. Tarik coretan dakuten (゛ tenten) pertama miring di kanan atas.",
      "4. Tarik coretan dakuten (゛ tenten) kedua sejajar di kanannya."
    ],
    "points": [
      {
        "num": 1,
        "x": 95,
        "y": 105
      },
      {
        "num": 2,
        "x": 170,
        "y": 80
      },
      {
        "num": 3,
        "x": 235,
        "y": 65
      },
      {
        "num": 4,
        "x": 255,
        "y": 75
      }
    ]
  },
  "づ": {
    "strokes": 3,
    "steps": [
      "1. Satu tarikan halus: mulai sedikit mendatar di atas lalu melengkung besar ke kanan dan turun menyapu ke kiri.",
      "2. Tarik coretan dakuten (゛ tenten) pertama miring di kanan atas.",
      "3. Tarik coretan dakuten (゛ tenten) kedua sejajar di kanannya."
    ],
    "points": [
      {
        "num": 1,
        "x": 105,
        "y": 115
      },
      {
        "num": 2,
        "x": 235,
        "y": 65
      },
      {
        "num": 3,
        "x": 255,
        "y": 75
      }
    ]
  },
  "で": {
    "strokes": 3,
    "steps": [
      "1. Satu goresan kontinu: mendatar dari kiri ke kanan, lalu melengkung lembut turun ke kiri bawah seperti busur.",
      "2. Tarik coretan dakuten (゛ tenten) pertama miring di kanan atas.",
      "3. Tarik coretan dakuten (゛ tenten) kedua sejajar di kanannya."
    ],
    "points": [
      {
        "num": 1,
        "x": 100,
        "y": 105
      },
      {
        "num": 2,
        "x": 235,
        "y": 65
      },
      {
        "num": 3,
        "x": 255,
        "y": 75
      }
    ]
  },
  "ど": {
    "strokes": 4,
    "steps": [
      "1. Tarik garis pendek diagonal miring dari kiri atas ke tengah.",
      "2. Mulai dari atas kanan menyentuh garis pertama, lalu melengkung bulat besar ke kiri bawah.",
      "3. Tarik coretan dakuten (゛ tenten) pertama miring di kanan atas.",
      "4. Tarik coretan dakuten (゛ tenten) kedua sejajar di kanannya."
    ],
    "points": [
      {
        "num": 1,
        "x": 135,
        "y": 85
      },
      {
        "num": 2,
        "x": 185,
        "y": 130
      },
      {
        "num": 3,
        "x": 235,
        "y": 65
      },
      {
        "num": 4,
        "x": 255,
        "y": 75
      }
    ]
  },
  "ば": {
    "strokes": 5,
    "steps": [
      "1. Tarik garis vertikal kiri melengkung dengan kait di ujung bawah.",
      "2. Tarik garis horizontal pendek di sebelah kanan.",
      "3. Tarik garis vertikal memotong garis kedua, lalu membentuk simpul melingkar di bagian bawahnya.",
      "4. Tarik coretan dakuten (゛ tenten) pertama miring di kanan atas.",
      "5. Tarik coretan dakuten (゛ tenten) kedua sejajar di kanannya."
    ],
    "points": [
      {
        "num": 1,
        "x": 95,
        "y": 85
      },
      {
        "num": 2,
        "x": 150,
        "y": 110
      },
      {
        "num": 3,
        "x": 205,
        "y": 85
      },
      {
        "num": 4,
        "x": 235,
        "y": 65
      },
      {
        "num": 5,
        "x": 255,
        "y": 75
      }
    ]
  },
  "び": {
    "strokes": 3,
    "steps": [
      "1. Satu tarikan kontinu: garis pendek ke kanan atas, turun melengkung membentuk mangkuk bulat, lalu naik dan turun ke kanan bawah.",
      "2. Tarik coretan dakuten (゛ tenten) pertama miring di kanan atas.",
      "3. Tarik coretan dakuten (゛ tenten) kedua sejajar di kanannya."
    ],
    "points": [
      {
        "num": 1,
        "x": 90,
        "y": 115
      },
      {
        "num": 2,
        "x": 235,
        "y": 65
      },
      {
        "num": 3,
        "x": 255,
        "y": 75
      }
    ]
  },
  "ぶ": {
    "strokes": 6,
    "steps": [
      "1. Buat titik coretan atas melengkung ke bawah.",
      "2. Tarik garis lengkung tengah yang menyapu ke kiri bawah dengan kait halus.",
      "3. Tarik titik coretan di sisi kiri bawah miring ke bawah.",
      "4. Tarik titik coretan di sisi kanan bawah miring ke bawah.",
      "5. Tarik coretan dakuten (゛ tenten) pertama miring di kanan atas.",
      "6. Tarik coretan dakuten (゛ tenten) kedua sejajar di kanannya."
    ],
    "points": [
      {
        "num": 1,
        "x": 160,
        "y": 70
      },
      {
        "num": 2,
        "x": 155,
        "y": 115
      },
      {
        "num": 3,
        "x": 95,
        "y": 175
      },
      {
        "num": 4,
        "x": 225,
        "y": 175
      },
      {
        "num": 5,
        "x": 235,
        "y": 65
      },
      {
        "num": 6,
        "x": 255,
        "y": 75
      }
    ]
  },
  "べ": {
    "strokes": 3,
    "steps": [
      "1. Satu tarikan garis sudut bukit: miring naik pendek ke kanan atas, lalu miring turun panjang ke kanan bawah.",
      "2. Tarik coretan dakuten (゛ tenten) pertama miring di kanan atas.",
      "3. Tarik coretan dakuten (゛ tenten) kedua sejajar di kanannya."
    ],
    "points": [
      {
        "num": 1,
        "x": 95,
        "y": 165
      },
      {
        "num": 2,
        "x": 235,
        "y": 65
      },
      {
        "num": 3,
        "x": 255,
        "y": 75
      }
    ]
  },
  "ぼ": {
    "strokes": 6,
    "steps": [
      "1. Tarik garis vertikal di sisi kiri dengan kait kecil di bawah.",
      "2. Tarik garis horizontal atas di bagian kanan.",
      "3. Tarik garis horizontal kedua di bawahnya.",
      "4. Tarik garis vertikal dari garis horizontal kedua, turun dan buat simpul bulat di bawah (tidak menembus garis atas).",
      "5. Tarik coretan dakuten (゛ tenten) pertama miring di kanan atas.",
      "6. Tarik coretan dakuten (゛ tenten) kedua sejajar di kanannya."
    ],
    "points": [
      {
        "num": 1,
        "x": 95,
        "y": 85
      },
      {
        "num": 2,
        "x": 150,
        "y": 100
      },
      {
        "num": 3,
        "x": 150,
        "y": 145
      },
      {
        "num": 4,
        "x": 205,
        "y": 100
      },
      {
        "num": 5,
        "x": 235,
        "y": 65
      },
      {
        "num": 6,
        "x": 255,
        "y": 75
      }
    ]
  },
  "ガ": {
    "strokes": 4,
    "steps": [
      "1. Tarik garis horizontal ke kanan, tekuk turun ke bawah dengan kait ke dalam.",
      "2. Tarik garis miring melengkung memotong dari tengah ke bawah kiri.",
      "3. Tarik coretan dakuten (゛ tenten) pertama miring di kanan atas.",
      "4. Tarik coretan dakuten (゛ tenten) kedua sejajar di kanannya."
    ],
    "points": [
      {
        "num": 1,
        "x": 105,
        "y": 105
      },
      {
        "num": 2,
        "x": 170,
        "y": 85
      },
      {
        "num": 3,
        "x": 235,
        "y": 65
      },
      {
        "num": 4,
        "x": 255,
        "y": 75
      }
    ]
  },
  "ギ": {
    "strokes": 5,
    "steps": [
      "1. Tarik garis horizontal atas miring sedikit ke kanan atas.",
      "2. Tarik garis horizontal kedua di bawahnya sejajar lebih panjang.",
      "3. Tarik garis miring memotong kedua garis dari kanan atas menyapu ke kiri bawah.",
      "4. Tarik coretan dakuten (゛ tenten) pertama miring di kanan atas.",
      "5. Tarik coretan dakuten (゛ tenten) kedua sejajar di kanannya."
    ],
    "points": [
      {
        "num": 1,
        "x": 110,
        "y": 105
      },
      {
        "num": 2,
        "x": 95,
        "y": 155
      },
      {
        "num": 3,
        "x": 195,
        "y": 75
      },
      {
        "num": 4,
        "x": 235,
        "y": 65
      },
      {
        "num": 5,
        "x": 255,
        "y": 75
      }
    ]
  },
  "グ": {
    "strokes": 4,
    "steps": [
      "1. Tarik garis miring pendek dari kanan atas ke kiri bawah.",
      "2. Mulai dari atas garis 1, mendatar ke kanan lalu menyapu melengkung ke kiri bawah.",
      "3. Tarik coretan dakuten (゛ tenten) pertama miring di kanan atas.",
      "4. Tarik coretan dakuten (゛ tenten) kedua sejajar di kanannya."
    ],
    "points": [
      {
        "num": 1,
        "x": 150,
        "y": 85
      },
      {
        "num": 2,
        "x": 155,
        "y": 85
      },
      {
        "num": 3,
        "x": 235,
        "y": 65
      },
      {
        "num": 4,
        "x": 255,
        "y": 75
      }
    ]
  },
  "ゲ": {
    "strokes": 5,
    "steps": [
      "1. Tarik garis miring pendek di kiri atas menuju kiri bawah.",
      "2. Tarik garis horizontal melintang dari tengah.",
      "3. Tarik garis melengkung memanjang dari atas memotong garis horizontal ke kiri bawah.",
      "4. Tarik coretan dakuten (゛ tenten) pertama miring di kanan atas.",
      "5. Tarik coretan dakuten (゛ tenten) kedua sejajar di kanannya."
    ],
    "points": [
      {
        "num": 1,
        "x": 130,
        "y": 85
      },
      {
        "num": 2,
        "x": 115,
        "y": 150
      },
      {
        "num": 3,
        "x": 190,
        "y": 85
      },
      {
        "num": 4,
        "x": 235,
        "y": 65
      },
      {
        "num": 5,
        "x": 255,
        "y": 75
      }
    ]
  },
  "ゴ": {
    "strokes": 4,
    "steps": [
      "1. Tarik garis horizontal atas ke kanan lalu tekuk tegak 90 derajat ke bawah.",
      "2. Tarik garis horizontal bawah menutup dari kiri menyentuh ujung bawah garis pertama.",
      "3. Tarik coretan dakuten (゛ tenten) pertama miring di kanan atas.",
      "4. Tarik coretan dakuten (゛ tenten) kedua sejajar di kanannya."
    ],
    "points": [
      {
        "num": 1,
        "x": 110,
        "y": 105
      },
      {
        "num": 2,
        "x": 110,
        "y": 220
      },
      {
        "num": 3,
        "x": 235,
        "y": 65
      },
      {
        "num": 4,
        "x": 255,
        "y": 75
      }
    ]
  },
  "ザ": {
    "strokes": 5,
    "steps": [
      "1. Tarik garis horizontal panjang agak miring naik ke kanan.",
      "2. Tarik garis vertikal kiri turun memotong garis pertama.",
      "3. Tarik garis vertikal kanan turun memotong lalu melengkung ke kiri bawah.",
      "4. Tarik coretan dakuten (゛ tenten) pertama miring di kanan atas.",
      "5. Tarik coretan dakuten (゛ tenten) kedua sejajar di kanannya."
    ],
    "points": [
      {
        "num": 1,
        "x": 90,
        "y": 120
      },
      {
        "num": 2,
        "x": 135,
        "y": 85
      },
      {
        "num": 3,
        "x": 195,
        "y": 85
      },
      {
        "num": 4,
        "x": 235,
        "y": 65
      },
      {
        "num": 5,
        "x": 255,
        "y": 75
      }
    ]
  },
  "ジ": {
    "strokes": 5,
    "steps": [
      "1. Buat titik coretan miring atas di sisi kiri.",
      "2. Buat titik coretan kedua di bawahnya sejajar.",
      "3. Tarik sapuan panjang dari kiri bawah melesat naik ke arah kanan atas.",
      "4. Tarik coretan dakuten (゛ tenten) pertama miring di kanan atas.",
      "5. Tarik coretan dakuten (゛ tenten) kedua sejajar di kanannya."
    ],
    "points": [
      {
        "num": 1,
        "x": 115,
        "y": 100
      },
      {
        "num": 2,
        "x": 105,
        "y": 155
      },
      {
        "num": 3,
        "x": 100,
        "y": 225
      },
      {
        "num": 4,
        "x": 235,
        "y": 65
      },
      {
        "num": 5,
        "x": 255,
        "y": 75
      }
    ]
  },
  "ズ": {
    "strokes": 4,
    "steps": [
      "1. Tarik garis horizontal ke kanan lalu tekuk miring tajam ke kiri bawah.",
      "2. Tarik garis miring kedua melintasi dari kanan atas ke arah kanan bawah.",
      "3. Tarik coretan dakuten (゛ tenten) pertama miring di kanan atas.",
      "4. Tarik coretan dakuten (゛ tenten) kedua sejajar di kanannya."
    ],
    "points": [
      {
        "num": 1,
        "x": 105,
        "y": 105
      },
      {
        "num": 2,
        "x": 190,
        "y": 135
      },
      {
        "num": 3,
        "x": 235,
        "y": 65
      },
      {
        "num": 4,
        "x": 255,
        "y": 75
      }
    ]
  },
  "ゼ": {
    "strokes": 4,
    "steps": [
      "1. Tarik garis horizontal mendatar ke kanan lalu tekuk turun ke bawah dengan kait.",
      "2. Tarik garis vertikal tegak dari kiri atas memotong lalu tekuk horizontal ke kanan.",
      "3. Tarik coretan dakuten (゛ tenten) pertama miring di kanan atas.",
      "4. Tarik coretan dakuten (゛ tenten) kedua sejajar di kanannya."
    ],
    "points": [
      {
        "num": 1,
        "x": 95,
        "y": 125
      },
      {
        "num": 2,
        "x": 145,
        "y": 90
      },
      {
        "num": 3,
        "x": 235,
        "y": 65
      },
      {
        "num": 4,
        "x": 255,
        "y": 75
      }
    ]
  },
  "ゾ": {
    "strokes": 4,
    "steps": [
      "1. Buat coretan titik miring di kiri atas mengarah ke bawah kanan.",
      "2. Tarik sapuan panjang dari kanan atas melesat turun ke kiri bawah.",
      "3. Tarik coretan dakuten (゛ tenten) pertama miring di kanan atas.",
      "4. Tarik coretan dakuten (゛ tenten) kedua sejajar di kanannya."
    ],
    "points": [
      {
        "num": 1,
        "x": 125,
        "y": 95
      },
      {
        "num": 2,
        "x": 215,
        "y": 80
      },
      {
        "num": 3,
        "x": 235,
        "y": 65
      },
      {
        "num": 4,
        "x": 255,
        "y": 75
      }
    ]
  },
  "ダ": {
    "strokes": 5,
    "steps": [
      "1. Tarik garis miring pendek dari kanan atas ke kiri bawah.",
      "2. Dari ujung atas garis 1, mendatar ke kanan lalu menekuk melengkung ke kiri bawah.",
      "3. Buat coretan miring pendek di bagian dalam.",
      "4. Tarik coretan dakuten (゛ tenten) pertama miring di kanan atas.",
      "5. Tarik coretan dakuten (゛ tenten) kedua sejajar di kanannya."
    ],
    "points": [
      {
        "num": 1,
        "x": 135,
        "y": 85
      },
      {
        "num": 2,
        "x": 140,
        "y": 85
      },
      {
        "num": 3,
        "x": 140,
        "y": 175
      },
      {
        "num": 4,
        "x": 235,
        "y": 65
      },
      {
        "num": 5,
        "x": 255,
        "y": 75
      }
    ]
  },
  "ヂ": {
    "strokes": 5,
    "steps": [
      "1. Tarik garis miring pendek atas dari kanan ke kiri bawah.",
      "2. Tarik garis horizontal melintang di tengah.",
      "3. Tarik garis melengkung memotong dari atas garis kedua turun ke kiri bawah.",
      "4. Tarik coretan dakuten (゛ tenten) pertama miring di kanan atas.",
      "5. Tarik coretan dakuten (゛ tenten) kedua sejajar di kanannya."
    ],
    "points": [
      {
        "num": 1,
        "x": 190,
        "y": 80
      },
      {
        "num": 2,
        "x": 95,
        "y": 140
      },
      {
        "num": 3,
        "x": 165,
        "y": 110
      },
      {
        "num": 4,
        "x": 235,
        "y": 65
      },
      {
        "num": 5,
        "x": 255,
        "y": 75
      }
    ]
  },
  "ヅ": {
    "strokes": 5,
    "steps": [
      "1. Buat titik coretan vertikal pertama di kiri atas.",
      "2. Buat titik coretan vertikal kedua di kanannya.",
      "3. Tarik sapuan panjang melesat dari kanan atas turun tajam ke kiri bawah.",
      "4. Tarik coretan dakuten (゛ tenten) pertama miring di kanan atas.",
      "5. Tarik coretan dakuten (゛ tenten) kedua sejajar di kanannya."
    ],
    "points": [
      {
        "num": 1,
        "x": 115,
        "y": 90
      },
      {
        "num": 2,
        "x": 165,
        "y": 105
      },
      {
        "num": 3,
        "x": 220,
        "y": 80
      },
      {
        "num": 4,
        "x": 235,
        "y": 65
      },
      {
        "num": 5,
        "x": 255,
        "y": 75
      }
    ]
  },
  "デ": {
    "strokes": 5,
    "steps": [
      "1. Tarik garis horizontal pendek di bagian atas.",
      "2. Tarik garis horizontal kedua di bawahnya yang lebih panjang.",
      "3. Tarik garis melengkung dari tengah garis kedua menyapu ke kiri bawah.",
      "4. Tarik coretan dakuten (゛ tenten) pertama miring di kanan atas.",
      "5. Tarik coretan dakuten (゛ tenten) kedua sejajar di kanannya."
    ],
    "points": [
      {
        "num": 1,
        "x": 120,
        "y": 95
      },
      {
        "num": 2,
        "x": 90,
        "y": 145
      },
      {
        "num": 3,
        "x": 160,
        "y": 145
      },
      {
        "num": 4,
        "x": 235,
        "y": 65
      },
      {
        "num": 5,
        "x": 255,
        "y": 75
      }
    ]
  },
  "ド": {
    "strokes": 4,
    "steps": [
      "1. Tarik garis vertikal lurus tegak dari atas ke bawah.",
      "2. Tarik garis miring diagonal keluar dari tengah ke kanan bawah.",
      "3. Tarik coretan dakuten (゛ tenten) pertama miring di kanan atas.",
      "4. Tarik coretan dakuten (゛ tenten) kedua sejajar di kanannya."
    ],
    "points": [
      {
        "num": 1,
        "x": 140,
        "y": 80
      },
      {
        "num": 2,
        "x": 145,
        "y": 145
      },
      {
        "num": 3,
        "x": 235,
        "y": 65
      },
      {
        "num": 4,
        "x": 255,
        "y": 75
      }
    ]
  },
  "バ": {
    "strokes": 4,
    "steps": [
      "1. Tarik garis miring pendek di sisi kiri mengarah ke kiri bawah.",
      "2. Tarik garis miring di sisi kanan menyapu ke kanan bawah.",
      "3. Tarik coretan dakuten (゛ tenten) pertama miring di kanan atas.",
      "4. Tarik coretan dakuten (゛ tenten) kedua sejajar di kanannya."
    ],
    "points": [
      {
        "num": 1,
        "x": 120,
        "y": 100
      },
      {
        "num": 2,
        "x": 200,
        "y": 100
      },
      {
        "num": 3,
        "x": 235,
        "y": 65
      },
      {
        "num": 4,
        "x": 255,
        "y": 75
      }
    ]
  },
  "ビ": {
    "strokes": 4,
    "steps": [
      "1. Tarik garis horizontal pendek miring sedikit ke bawah kanan.",
      "2. Tarik garis vertikal turun, melengkung ke kanan bawah lalu naik melengkung ke atas.",
      "3. Tarik coretan dakuten (゛ tenten) pertama miring di kanan atas.",
      "4. Tarik coretan dakuten (゛ tenten) kedua sejajar di kanannya."
    ],
    "points": [
      {
        "num": 1,
        "x": 110,
        "y": 105
      },
      {
        "num": 2,
        "x": 110,
        "y": 105
      },
      {
        "num": 3,
        "x": 235,
        "y": 65
      },
      {
        "num": 4,
        "x": 255,
        "y": 75
      }
    ]
  },
  "ブ": {
    "strokes": 3,
    "steps": [
      "1. Satu tarikan garis: mendatar ke kanan lalu menekuk melengkung lembut ke kiri bawah.",
      "2. Tarik coretan dakuten (゛ tenten) pertama miring di kanan atas.",
      "3. Tarik coretan dakuten (゛ tenten) kedua sejajar di kanannya."
    ],
    "points": [
      {
        "num": 1,
        "x": 115,
        "y": 105
      },
      {
        "num": 2,
        "x": 235,
        "y": 65
      },
      {
        "num": 3,
        "x": 255,
        "y": 75
      }
    ]
  },
  "ベ": {
    "strokes": 3,
    "steps": [
      "1. Satu goresan sudut bukit: serong naik pendek ke kanan, lalu serong panjang turun ke kanan bawah.",
      "2. Tarik coretan dakuten (゛ tenten) pertama miring di kanan atas.",
      "3. Tarik coretan dakuten (゛ tenten) kedua sejajar di kanannya."
    ],
    "points": [
      {
        "num": 1,
        "x": 95,
        "y": 165
      },
      {
        "num": 2,
        "x": 235,
        "y": 65
      },
      {
        "num": 3,
        "x": 255,
        "y": 75
      }
    ]
  },
  "ボ": {
    "strokes": 6,
    "steps": [
      "1. Tarik garis horizontal atas mendatar.",
      "2. Tarik garis vertikal tegak di tengah memotong garis pertama dengan kait di ujung.",
      "3. Buat titik coretan miring di sisi kiri.",
      "4. Buat titik coretan miring di sisi kanan.",
      "5. Tarik coretan dakuten (゛ tenten) pertama miring di kanan atas.",
      "6. Tarik coretan dakuten (゛ tenten) kedua sejajar di kanannya."
    ],
    "points": [
      {
        "num": 1,
        "x": 95,
        "y": 100
      },
      {
        "num": 2,
        "x": 160,
        "y": 70
      },
      {
        "num": 3,
        "x": 110,
        "y": 155
      },
      {
        "num": 4,
        "x": 215,
        "y": 155
      },
      {
        "num": 5,
        "x": 235,
        "y": 65
      },
      {
        "num": 6,
        "x": 255,
        "y": 75
      }
    ]
  },
  "ぱ": {
    "strokes": 4,
    "steps": [
      "1. Tarik garis vertikal kiri melengkung dengan kait di ujung bawah.",
      "2. Tarik garis horizontal pendek di sebelah kanan.",
      "3. Tarik garis vertikal memotong garis kedua, lalu membentuk simpul melingkar di bagian bawahnya.",
      "4. Buat lingkaran kecil handakuten (゜ maru) di bagian kanan atas."
    ],
    "points": [
      {
        "num": 1,
        "x": 95,
        "y": 85
      },
      {
        "num": 2,
        "x": 150,
        "y": 110
      },
      {
        "num": 3,
        "x": 205,
        "y": 85
      },
      {
        "num": 4,
        "x": 245,
        "y": 70
      }
    ]
  },
  "ぴ": {
    "strokes": 2,
    "steps": [
      "1. Satu tarikan kontinu: garis pendek ke kanan atas, turun melengkung membentuk mangkuk bulat, lalu naik dan turun ke kanan bawah.",
      "2. Buat lingkaran kecil handakuten (゜ maru) di bagian kanan atas."
    ],
    "points": [
      {
        "num": 1,
        "x": 90,
        "y": 115
      },
      {
        "num": 2,
        "x": 245,
        "y": 70
      }
    ]
  },
  "ぷ": {
    "strokes": 5,
    "steps": [
      "1. Buat titik coretan atas melengkung ke bawah.",
      "2. Tarik garis lengkung tengah yang menyapu ke kiri bawah dengan kait halus.",
      "3. Tarik titik coretan di sisi kiri bawah miring ke bawah.",
      "4. Tarik titik coretan di sisi kanan bawah miring ke bawah.",
      "5. Buat lingkaran kecil handakuten (゜ maru) di bagian kanan atas."
    ],
    "points": [
      {
        "num": 1,
        "x": 160,
        "y": 70
      },
      {
        "num": 2,
        "x": 155,
        "y": 115
      },
      {
        "num": 3,
        "x": 95,
        "y": 175
      },
      {
        "num": 4,
        "x": 225,
        "y": 175
      },
      {
        "num": 5,
        "x": 245,
        "y": 70
      }
    ]
  },
  "ぺ": {
    "strokes": 2,
    "steps": [
      "1. Satu tarikan garis sudut bukit: miring naik pendek ke kanan atas, lalu miring turun panjang ke kanan bawah.",
      "2. Buat lingkaran kecil handakuten (゜ maru) di bagian kanan atas."
    ],
    "points": [
      {
        "num": 1,
        "x": 95,
        "y": 165
      },
      {
        "num": 2,
        "x": 245,
        "y": 70
      }
    ]
  },
  "ぽ": {
    "strokes": 5,
    "steps": [
      "1. Tarik garis vertikal di sisi kiri dengan kait kecil di bawah.",
      "2. Tarik garis horizontal atas di bagian kanan.",
      "3. Tarik garis horizontal kedua di bawahnya.",
      "4. Tarik garis vertikal dari garis horizontal kedua, turun dan buat simpul bulat di bawah (tidak menembus garis atas).",
      "5. Buat lingkaran kecil handakuten (゜ maru) di bagian kanan atas."
    ],
    "points": [
      {
        "num": 1,
        "x": 95,
        "y": 85
      },
      {
        "num": 2,
        "x": 150,
        "y": 100
      },
      {
        "num": 3,
        "x": 150,
        "y": 145
      },
      {
        "num": 4,
        "x": 205,
        "y": 100
      },
      {
        "num": 5,
        "x": 245,
        "y": 70
      }
    ]
  },
  "パ": {
    "strokes": 3,
    "steps": [
      "1. Tarik garis miring pendek di sisi kiri mengarah ke kiri bawah.",
      "2. Tarik garis miring di sisi kanan menyapu ke kanan bawah.",
      "3. Buat lingkaran kecil handakuten (゜ maru) di bagian kanan atas."
    ],
    "points": [
      {
        "num": 1,
        "x": 120,
        "y": 100
      },
      {
        "num": 2,
        "x": 200,
        "y": 100
      },
      {
        "num": 3,
        "x": 245,
        "y": 70
      }
    ]
  },
  "ピ": {
    "strokes": 3,
    "steps": [
      "1. Tarik garis horizontal pendek miring sedikit ke bawah kanan.",
      "2. Tarik garis vertikal turun, melengkung ke kanan bawah lalu naik melengkung ke atas.",
      "3. Buat lingkaran kecil handakuten (゜ maru) di bagian kanan atas."
    ],
    "points": [
      {
        "num": 1,
        "x": 110,
        "y": 105
      },
      {
        "num": 2,
        "x": 110,
        "y": 105
      },
      {
        "num": 3,
        "x": 245,
        "y": 70
      }
    ]
  },
  "プ": {
    "strokes": 2,
    "steps": [
      "1. Satu tarikan garis: mendatar ke kanan lalu menekuk melengkung lembut ke kiri bawah.",
      "2. Buat lingkaran kecil handakuten (゜ maru) di bagian kanan atas."
    ],
    "points": [
      {
        "num": 1,
        "x": 115,
        "y": 105
      },
      {
        "num": 2,
        "x": 245,
        "y": 70
      }
    ]
  },
  "ペ": {
    "strokes": 2,
    "steps": [
      "1. Satu goresan sudut bukit: serong naik pendek ke kanan, lalu serong panjang turun ke kanan bawah.",
      "2. Buat lingkaran kecil handakuten (゜ maru) di bagian kanan atas."
    ],
    "points": [
      {
        "num": 1,
        "x": 95,
        "y": 165
      },
      {
        "num": 2,
        "x": 245,
        "y": 70
      }
    ]
  },
  "ポ": {
    "strokes": 5,
    "steps": [
      "1. Tarik garis horizontal atas mendatar.",
      "2. Tarik garis vertikal tegak di tengah memotong garis pertama dengan kait di ujung.",
      "3. Buat titik coretan miring di sisi kiri.",
      "4. Buat titik coretan miring di sisi kanan.",
      "5. Buat lingkaran kecil handakuten (゜ maru) di bagian kanan atas."
    ],
    "points": [
      {
        "num": 1,
        "x": 95,
        "y": 100
      },
      {
        "num": 2,
        "x": 160,
        "y": 70
      },
      {
        "num": 3,
        "x": 110,
        "y": 155
      },
      {
        "num": 4,
        "x": 215,
        "y": 155
      },
      {
        "num": 5,
        "x": 245,
        "y": 70
      }
    ]
  },
  "きゃ": {
    "strokes": 7,
    "steps": [
      "[き] 1. Tarik garis horizontal atas miring sedikit ke atas kanan.",
      "[き] 2. Tarik garis horizontal kedua sejajar di bawah garis pertama.",
      "[き] 3. Tarik garis diagonal memotong kedua garis dengan kait kecil ke kiri di ujungnya.",
      "[き] 4. Buat lengkungan busur terpisah di bawah (senyuman).",
      "[ゃ] Langkah 5: Tarik garis lengkung berputar diakhiri kait kecil.",
      "[ゃ] Langkah 6: Berikan coretan pendek di atas.",
      "[ゃ] Langkah 7: Tarik garis miring memotong di sebelah kiri."
    ],
    "points": [
      {
        "num": 1,
        "x": 80,
        "y": 105
      },
      {
        "num": 2,
        "x": 77,
        "y": 141
      },
      {
        "num": 3,
        "x": 129,
        "y": 81
      },
      {
        "num": 4,
        "x": 93,
        "y": 205
      },
      {
        "num": 5,
        "x": 213,
        "y": 207
      },
      {
        "num": 6,
        "x": 248,
        "y": 196
      },
      {
        "num": 7,
        "x": 225,
        "y": 193
      }
    ],
    "romaji": "kya",
    "isYoon": true,
    "components": [
      "き",
      "ゃ"
    ]
  },
  "きゅ": {
    "strokes": 6,
    "steps": [
      "[き] 1. Tarik garis horizontal atas miring sedikit ke atas kanan.",
      "[き] 2. Tarik garis horizontal kedua sejajar di bawah garis pertama.",
      "[き] 3. Tarik garis diagonal memotong kedua garis dengan kait kecil ke kiri di ujungnya.",
      "[き] 4. Buat lengkungan busur terpisah di bawah (senyuman).",
      "[ゅ] Langkah 5: Tarik garis melengkung membentuk perut bulat ke atas.",
      "[ゅ] Langkah 6: Tarik garis vertikal memotong di tengah ke bawah."
    ],
    "points": [
      {
        "num": 1,
        "x": 80,
        "y": 105
      },
      {
        "num": 2,
        "x": 77,
        "y": 141
      },
      {
        "num": 3,
        "x": 129,
        "y": 81
      },
      {
        "num": 4,
        "x": 93,
        "y": 205
      },
      {
        "num": 5,
        "x": 218,
        "y": 199
      },
      {
        "num": 6,
        "x": 248,
        "y": 193
      }
    ],
    "romaji": "kyu",
    "isYoon": true,
    "components": [
      "き",
      "ゅ"
    ]
  },
  "きょ": {
    "strokes": 6,
    "steps": [
      "[き] 1. Tarik garis horizontal atas miring sedikit ke atas kanan.",
      "[き] 2. Tarik garis horizontal kedua sejajar di bawah garis pertama.",
      "[き] 3. Tarik garis diagonal memotong kedua garis dengan kait kecil ke kiri di ujungnya.",
      "[き] 4. Buat lengkungan busur terpisah di bawah (senyuman).",
      "[ょ] Langkah 5: Tarik garis horizontal pendek.",
      "[ょ] Langkah 6: Tarik garis vertikal membentuk simpul bulat lalu mendatar."
    ],
    "points": [
      {
        "num": 1,
        "x": 80,
        "y": 105
      },
      {
        "num": 2,
        "x": 77,
        "y": 141
      },
      {
        "num": 3,
        "x": 129,
        "y": 81
      },
      {
        "num": 4,
        "x": 93,
        "y": 205
      },
      {
        "num": 5,
        "x": 215,
        "y": 204
      },
      {
        "num": 6,
        "x": 245,
        "y": 193
      }
    ],
    "romaji": "kyo",
    "isYoon": true,
    "components": [
      "き",
      "ょ"
    ]
  },
  "しゃ": {
    "strokes": 4,
    "steps": [
      "[し] 1. Satu tarikan garis tunggal: vertikal turun lalu melengkung ke atas kanan seperti mata kail.",
      "[ゃ] Langkah 2: Tarik garis lengkung berputar diakhiri kait kecil.",
      "[ゃ] Langkah 3: Berikan coretan pendek di atas.",
      "[ゃ] Langkah 4: Tarik garis miring memotong di sebelah kiri."
    ],
    "points": [
      {
        "num": 1,
        "x": 106,
        "y": 93
      },
      {
        "num": 2,
        "x": 213,
        "y": 207
      },
      {
        "num": 3,
        "x": 248,
        "y": 196
      },
      {
        "num": 4,
        "x": 225,
        "y": 193
      }
    ],
    "romaji": "sha",
    "isYoon": true,
    "components": [
      "し",
      "ゃ"
    ]
  },
  "しゅ": {
    "strokes": 3,
    "steps": [
      "[し] 1. Satu tarikan garis tunggal: vertikal turun lalu melengkung ke atas kanan seperti mata kail.",
      "[ゅ] Langkah 2: Tarik garis melengkung membentuk perut bulat ke atas.",
      "[ゅ] Langkah 3: Tarik garis vertikal memotong di tengah ke bawah."
    ],
    "points": [
      {
        "num": 1,
        "x": 106,
        "y": 93
      },
      {
        "num": 2,
        "x": 218,
        "y": 199
      },
      {
        "num": 3,
        "x": 248,
        "y": 193
      }
    ],
    "romaji": "shu",
    "isYoon": true,
    "components": [
      "し",
      "ゅ"
    ]
  },
  "しょ": {
    "strokes": 3,
    "steps": [
      "[し] 1. Satu tarikan garis tunggal: vertikal turun lalu melengkung ke atas kanan seperti mata kail.",
      "[ょ] Langkah 2: Tarik garis horizontal pendek.",
      "[ょ] Langkah 3: Tarik garis vertikal membentuk simpul bulat lalu mendatar."
    ],
    "points": [
      {
        "num": 1,
        "x": 106,
        "y": 93
      },
      {
        "num": 2,
        "x": 215,
        "y": 204
      },
      {
        "num": 3,
        "x": 245,
        "y": 193
      }
    ],
    "romaji": "sho",
    "isYoon": true,
    "components": [
      "し",
      "ょ"
    ]
  },
  "ちゃ": {
    "strokes": 5,
    "steps": [
      "[ち] 1. Tarik garis horizontal mendatar miring sedikit ke atas.",
      "[ち] 2. Tarik garis diagonal memotong garis pertama, lalu melengkung membentuk setengah lingkaran besar mirip angka 5.",
      "[ゃ] Langkah 3: Tarik garis lengkung berputar diakhiri kait kecil.",
      "[ゃ] Langkah 4: Berikan coretan pendek di atas.",
      "[ゃ] Langkah 5: Tarik garis miring memotong di sebelah kiri."
    ],
    "points": [
      {
        "num": 1,
        "x": 77,
        "y": 109
      },
      {
        "num": 2,
        "x": 126,
        "y": 89
      },
      {
        "num": 3,
        "x": 213,
        "y": 207
      },
      {
        "num": 4,
        "x": 248,
        "y": 196
      },
      {
        "num": 5,
        "x": 225,
        "y": 193
      }
    ],
    "romaji": "cha",
    "isYoon": true,
    "components": [
      "ち",
      "ゃ"
    ]
  },
  "ちゅ": {
    "strokes": 4,
    "steps": [
      "[ち] 1. Tarik garis horizontal mendatar miring sedikit ke atas.",
      "[ち] 2. Tarik garis diagonal memotong garis pertama, lalu melengkung membentuk setengah lingkaran besar mirip angka 5.",
      "[ゅ] Langkah 3: Tarik garis melengkung membentuk perut bulat ke atas.",
      "[ゅ] Langkah 4: Tarik garis vertikal memotong di tengah ke bawah."
    ],
    "points": [
      {
        "num": 1,
        "x": 77,
        "y": 109
      },
      {
        "num": 2,
        "x": 126,
        "y": 89
      },
      {
        "num": 3,
        "x": 218,
        "y": 199
      },
      {
        "num": 4,
        "x": 248,
        "y": 193
      }
    ],
    "romaji": "chu",
    "isYoon": true,
    "components": [
      "ち",
      "ゅ"
    ]
  },
  "ちょ": {
    "strokes": 4,
    "steps": [
      "[ち] 1. Tarik garis horizontal mendatar miring sedikit ke atas.",
      "[ち] 2. Tarik garis diagonal memotong garis pertama, lalu melengkung membentuk setengah lingkaran besar mirip angka 5.",
      "[ょ] Langkah 3: Tarik garis horizontal pendek.",
      "[ょ] Langkah 4: Tarik garis vertikal membentuk simpul bulat lalu mendatar."
    ],
    "points": [
      {
        "num": 1,
        "x": 77,
        "y": 109
      },
      {
        "num": 2,
        "x": 126,
        "y": 89
      },
      {
        "num": 3,
        "x": 215,
        "y": 204
      },
      {
        "num": 4,
        "x": 245,
        "y": 193
      }
    ],
    "romaji": "cho",
    "isYoon": true,
    "components": [
      "ち",
      "ょ"
    ]
  },
  "にゃ": {
    "strokes": 6,
    "steps": [
      "[に] 1. Tarik garis vertikal melengkung di sisi kiri dengan kait ke atas di ujung.",
      "[に] 2. Tarik garis horizontal pendek atas di sisi kanan.",
      "[に] 3. Tarik garis horizontal kedua di bawahnya melengkung sedikit.",
      "[ゃ] Langkah 4: Tarik garis lengkung berputar diakhiri kait kecil.",
      "[ゃ] Langkah 5: Berikan coretan pendek di atas.",
      "[ゃ] Langkah 6: Tarik garis miring memotong di sebelah kiri."
    ],
    "points": [
      {
        "num": 1,
        "x": 77,
        "y": 97
      },
      {
        "num": 2,
        "x": 122,
        "y": 117
      },
      {
        "num": 3,
        "x": 119,
        "y": 181
      },
      {
        "num": 4,
        "x": 213,
        "y": 207
      },
      {
        "num": 5,
        "x": 248,
        "y": 196
      },
      {
        "num": 6,
        "x": 225,
        "y": 193
      }
    ],
    "romaji": "nya",
    "isYoon": true,
    "components": [
      "に",
      "ゃ"
    ]
  },
  "にゅ": {
    "strokes": 5,
    "steps": [
      "[に] 1. Tarik garis vertikal melengkung di sisi kiri dengan kait ke atas di ujung.",
      "[に] 2. Tarik garis horizontal pendek atas di sisi kanan.",
      "[に] 3. Tarik garis horizontal kedua di bawahnya melengkung sedikit.",
      "[ゅ] Langkah 4: Tarik garis melengkung membentuk perut bulat ke atas.",
      "[ゅ] Langkah 5: Tarik garis vertikal memotong di tengah ke bawah."
    ],
    "points": [
      {
        "num": 1,
        "x": 77,
        "y": 97
      },
      {
        "num": 2,
        "x": 122,
        "y": 117
      },
      {
        "num": 3,
        "x": 119,
        "y": 181
      },
      {
        "num": 4,
        "x": 218,
        "y": 199
      },
      {
        "num": 5,
        "x": 248,
        "y": 193
      }
    ],
    "romaji": "nyu",
    "isYoon": true,
    "components": [
      "に",
      "ゅ"
    ]
  },
  "にょ": {
    "strokes": 5,
    "steps": [
      "[に] 1. Tarik garis vertikal melengkung di sisi kiri dengan kait ke atas di ujung.",
      "[に] 2. Tarik garis horizontal pendek atas di sisi kanan.",
      "[に] 3. Tarik garis horizontal kedua di bawahnya melengkung sedikit.",
      "[ょ] Langkah 4: Tarik garis horizontal pendek.",
      "[ょ] Langkah 5: Tarik garis vertikal membentuk simpul bulat lalu mendatar."
    ],
    "points": [
      {
        "num": 1,
        "x": 77,
        "y": 97
      },
      {
        "num": 2,
        "x": 122,
        "y": 117
      },
      {
        "num": 3,
        "x": 119,
        "y": 181
      },
      {
        "num": 4,
        "x": 215,
        "y": 204
      },
      {
        "num": 5,
        "x": 245,
        "y": 193
      }
    ],
    "romaji": "nyo",
    "isYoon": true,
    "components": [
      "に",
      "ょ"
    ]
  },
  "ひゃ": {
    "strokes": 4,
    "steps": [
      "[ひ] 1. Satu tarikan kontinu: garis pendek ke kanan atas, turun melengkung membentuk mangkuk bulat, lalu naik dan turun ke kanan bawah.",
      "[ゃ] Langkah 2: Tarik garis lengkung berputar diakhiri kait kecil.",
      "[ゃ] Langkah 3: Berikan coretan pendek di atas.",
      "[ゃ] Langkah 4: Tarik garis miring memotong di sebelah kiri."
    ],
    "points": [
      {
        "num": 1,
        "x": 74,
        "y": 117
      },
      {
        "num": 2,
        "x": 213,
        "y": 207
      },
      {
        "num": 3,
        "x": 248,
        "y": 196
      },
      {
        "num": 4,
        "x": 225,
        "y": 193
      }
    ],
    "romaji": "hya",
    "isYoon": true,
    "components": [
      "ひ",
      "ゃ"
    ]
  },
  "ひゅ": {
    "strokes": 3,
    "steps": [
      "[ひ] 1. Satu tarikan kontinu: garis pendek ke kanan atas, turun melengkung membentuk mangkuk bulat, lalu naik dan turun ke kanan bawah.",
      "[ゅ] Langkah 2: Tarik garis melengkung membentuk perut bulat ke atas.",
      "[ゅ] Langkah 3: Tarik garis vertikal memotong di tengah ke bawah."
    ],
    "points": [
      {
        "num": 1,
        "x": 74,
        "y": 117
      },
      {
        "num": 2,
        "x": 218,
        "y": 199
      },
      {
        "num": 3,
        "x": 248,
        "y": 193
      }
    ],
    "romaji": "hyu",
    "isYoon": true,
    "components": [
      "ひ",
      "ゅ"
    ]
  },
  "ひょ": {
    "strokes": 3,
    "steps": [
      "[ひ] 1. Satu tarikan kontinu: garis pendek ke kanan atas, turun melengkung membentuk mangkuk bulat, lalu naik dan turun ke kanan bawah.",
      "[ょ] Langkah 2: Tarik garis horizontal pendek.",
      "[ょ] Langkah 3: Tarik garis vertikal membentuk simpul bulat lalu mendatar."
    ],
    "points": [
      {
        "num": 1,
        "x": 74,
        "y": 117
      },
      {
        "num": 2,
        "x": 215,
        "y": 204
      },
      {
        "num": 3,
        "x": 245,
        "y": 193
      }
    ],
    "romaji": "hyo",
    "isYoon": true,
    "components": [
      "ひ",
      "ょ"
    ]
  },
  "みゃ": {
    "strokes": 5,
    "steps": [
      "[み] 1. Tarik garis mendatar miring turun, buat simpul loop ke kiri, lalu sapukan garis panjang melintang ke kanan bawah.",
      "[み] 2. Tarik garis vertikal miring memotong ekor garis pertama.",
      "[ゃ] Langkah 3: Tarik garis lengkung berputar diakhiri kait kecil.",
      "[ゃ] Langkah 4: Berikan coretan pendek di atas.",
      "[ゃ] Langkah 5: Tarik garis miring memotong di sebelah kiri."
    ],
    "points": [
      {
        "num": 1,
        "x": 80,
        "y": 113
      },
      {
        "num": 2,
        "x": 158,
        "y": 121
      },
      {
        "num": 3,
        "x": 213,
        "y": 207
      },
      {
        "num": 4,
        "x": 248,
        "y": 196
      },
      {
        "num": 5,
        "x": 225,
        "y": 193
      }
    ],
    "romaji": "mya",
    "isYoon": true,
    "components": [
      "み",
      "ゃ"
    ]
  },
  "みゅ": {
    "strokes": 4,
    "steps": [
      "[み] 1. Tarik garis mendatar miring turun, buat simpul loop ke kiri, lalu sapukan garis panjang melintang ke kanan bawah.",
      "[み] 2. Tarik garis vertikal miring memotong ekor garis pertama.",
      "[ゅ] Langkah 3: Tarik garis melengkung membentuk perut bulat ke atas.",
      "[ゅ] Langkah 4: Tarik garis vertikal memotong di tengah ke bawah."
    ],
    "points": [
      {
        "num": 1,
        "x": 80,
        "y": 113
      },
      {
        "num": 2,
        "x": 158,
        "y": 121
      },
      {
        "num": 3,
        "x": 218,
        "y": 199
      },
      {
        "num": 4,
        "x": 248,
        "y": 193
      }
    ],
    "romaji": "myu",
    "isYoon": true,
    "components": [
      "み",
      "ゅ"
    ]
  },
  "みょ": {
    "strokes": 4,
    "steps": [
      "[み] 1. Tarik garis mendatar miring turun, buat simpul loop ke kiri, lalu sapukan garis panjang melintang ke kanan bawah.",
      "[み] 2. Tarik garis vertikal miring memotong ekor garis pertama.",
      "[ょ] Langkah 3: Tarik garis horizontal pendek.",
      "[ょ] Langkah 4: Tarik garis vertikal membentuk simpul bulat lalu mendatar."
    ],
    "points": [
      {
        "num": 1,
        "x": 80,
        "y": 113
      },
      {
        "num": 2,
        "x": 158,
        "y": 121
      },
      {
        "num": 3,
        "x": 215,
        "y": 204
      },
      {
        "num": 4,
        "x": 245,
        "y": 193
      }
    ],
    "romaji": "myo",
    "isYoon": true,
    "components": [
      "み",
      "ょ"
    ]
  },
  "りゃ": {
    "strokes": 5,
    "steps": [
      "[り] 1. Tarik garis vertikal pendek di sisi kiri dengan kait kecil di bawah.",
      "[り] 2. Tarik garis vertikal kedua di sisi kanan yang lebih panjang melengkung lembut ke bawah.",
      "[ゃ] Langkah 3: Tarik garis lengkung berputar diakhiri kait kecil.",
      "[ゃ] Langkah 4: Berikan coretan pendek di atas.",
      "[ゃ] Langkah 5: Tarik garis miring memotong di sebelah kiri."
    ],
    "points": [
      {
        "num": 1,
        "x": 90,
        "y": 101
      },
      {
        "num": 2,
        "x": 145,
        "y": 89
      },
      {
        "num": 3,
        "x": 213,
        "y": 207
      },
      {
        "num": 4,
        "x": 248,
        "y": 196
      },
      {
        "num": 5,
        "x": 225,
        "y": 193
      }
    ],
    "romaji": "rya",
    "isYoon": true,
    "components": [
      "り",
      "ゃ"
    ]
  },
  "りゅ": {
    "strokes": 4,
    "steps": [
      "[り] 1. Tarik garis vertikal pendek di sisi kiri dengan kait kecil di bawah.",
      "[り] 2. Tarik garis vertikal kedua di sisi kanan yang lebih panjang melengkung lembut ke bawah.",
      "[ゅ] Langkah 3: Tarik garis melengkung membentuk perut bulat ke atas.",
      "[ゅ] Langkah 4: Tarik garis vertikal memotong di tengah ke bawah."
    ],
    "points": [
      {
        "num": 1,
        "x": 90,
        "y": 101
      },
      {
        "num": 2,
        "x": 145,
        "y": 89
      },
      {
        "num": 3,
        "x": 218,
        "y": 199
      },
      {
        "num": 4,
        "x": 248,
        "y": 193
      }
    ],
    "romaji": "ryu",
    "isYoon": true,
    "components": [
      "り",
      "ゅ"
    ]
  },
  "りょ": {
    "strokes": 4,
    "steps": [
      "[り] 1. Tarik garis vertikal pendek di sisi kiri dengan kait kecil di bawah.",
      "[り] 2. Tarik garis vertikal kedua di sisi kanan yang lebih panjang melengkung lembut ke bawah.",
      "[ょ] Langkah 3: Tarik garis horizontal pendek.",
      "[ょ] Langkah 4: Tarik garis vertikal membentuk simpul bulat lalu mendatar."
    ],
    "points": [
      {
        "num": 1,
        "x": 90,
        "y": 101
      },
      {
        "num": 2,
        "x": 145,
        "y": 89
      },
      {
        "num": 3,
        "x": 215,
        "y": 204
      },
      {
        "num": 4,
        "x": 245,
        "y": 193
      }
    ],
    "romaji": "ryo",
    "isYoon": true,
    "components": [
      "り",
      "ょ"
    ]
  },
  "ぎゃ": {
    "strokes": 9,
    "steps": [
      "[ぎ] 1. Tarik garis horizontal atas miring sedikit ke atas kanan.",
      "[ぎ] 2. Tarik garis horizontal kedua sejajar di bawah garis pertama.",
      "[ぎ] 3. Tarik garis diagonal memotong kedua garis dengan kait kecil ke kiri di ujungnya.",
      "[ぎ] 4. Buat lengkungan busur terpisah di bawah (senyuman).",
      "[ぎ] 5. Tarik coretan dakuten (゛ tenten) pertama miring di kanan atas.",
      "[ぎ] 6. Tarik coretan dakuten (゛ tenten) kedua sejajar di kanannya.",
      "[ゃ] Langkah 7: Tarik garis lengkung berputar diakhiri kait kecil.",
      "[ゃ] Langkah 8: Berikan coretan pendek di atas.",
      "[ゃ] Langkah 9: Tarik garis miring memotong di sebelah kiri."
    ],
    "points": [
      {
        "num": 1,
        "x": 80,
        "y": 105
      },
      {
        "num": 2,
        "x": 77,
        "y": 141
      },
      {
        "num": 3,
        "x": 129,
        "y": 81
      },
      {
        "num": 4,
        "x": 93,
        "y": 205
      },
      {
        "num": 5,
        "x": 168,
        "y": 77
      },
      {
        "num": 6,
        "x": 181,
        "y": 85
      },
      {
        "num": 7,
        "x": 213,
        "y": 207
      },
      {
        "num": 8,
        "x": 248,
        "y": 196
      },
      {
        "num": 9,
        "x": 225,
        "y": 193
      }
    ],
    "romaji": "gya",
    "isYoon": true,
    "components": [
      "ぎ",
      "ゃ"
    ]
  },
  "ぎゅ": {
    "strokes": 8,
    "steps": [
      "[ぎ] 1. Tarik garis horizontal atas miring sedikit ke atas kanan.",
      "[ぎ] 2. Tarik garis horizontal kedua sejajar di bawah garis pertama.",
      "[ぎ] 3. Tarik garis diagonal memotong kedua garis dengan kait kecil ke kiri di ujungnya.",
      "[ぎ] 4. Buat lengkungan busur terpisah di bawah (senyuman).",
      "[ぎ] 5. Tarik coretan dakuten (゛ tenten) pertama miring di kanan atas.",
      "[ぎ] 6. Tarik coretan dakuten (゛ tenten) kedua sejajar di kanannya.",
      "[ゅ] Langkah 7: Tarik garis melengkung membentuk perut bulat ke atas.",
      "[ゅ] Langkah 8: Tarik garis vertikal memotong di tengah ke bawah."
    ],
    "points": [
      {
        "num": 1,
        "x": 80,
        "y": 105
      },
      {
        "num": 2,
        "x": 77,
        "y": 141
      },
      {
        "num": 3,
        "x": 129,
        "y": 81
      },
      {
        "num": 4,
        "x": 93,
        "y": 205
      },
      {
        "num": 5,
        "x": 168,
        "y": 77
      },
      {
        "num": 6,
        "x": 181,
        "y": 85
      },
      {
        "num": 7,
        "x": 218,
        "y": 199
      },
      {
        "num": 8,
        "x": 248,
        "y": 193
      }
    ],
    "romaji": "gyu",
    "isYoon": true,
    "components": [
      "ぎ",
      "ゅ"
    ]
  },
  "ぎょ": {
    "strokes": 8,
    "steps": [
      "[ぎ] 1. Tarik garis horizontal atas miring sedikit ke atas kanan.",
      "[ぎ] 2. Tarik garis horizontal kedua sejajar di bawah garis pertama.",
      "[ぎ] 3. Tarik garis diagonal memotong kedua garis dengan kait kecil ke kiri di ujungnya.",
      "[ぎ] 4. Buat lengkungan busur terpisah di bawah (senyuman).",
      "[ぎ] 5. Tarik coretan dakuten (゛ tenten) pertama miring di kanan atas.",
      "[ぎ] 6. Tarik coretan dakuten (゛ tenten) kedua sejajar di kanannya.",
      "[ょ] Langkah 7: Tarik garis horizontal pendek.",
      "[ょ] Langkah 8: Tarik garis vertikal membentuk simpul bulat lalu mendatar."
    ],
    "points": [
      {
        "num": 1,
        "x": 80,
        "y": 105
      },
      {
        "num": 2,
        "x": 77,
        "y": 141
      },
      {
        "num": 3,
        "x": 129,
        "y": 81
      },
      {
        "num": 4,
        "x": 93,
        "y": 205
      },
      {
        "num": 5,
        "x": 168,
        "y": 77
      },
      {
        "num": 6,
        "x": 181,
        "y": 85
      },
      {
        "num": 7,
        "x": 215,
        "y": 204
      },
      {
        "num": 8,
        "x": 245,
        "y": 193
      }
    ],
    "romaji": "gyo",
    "isYoon": true,
    "components": [
      "ぎ",
      "ょ"
    ]
  },
  "じゃ": {
    "strokes": 6,
    "steps": [
      "[じ] 1. Satu tarikan garis tunggal: vertikal turun lalu melengkung ke atas kanan seperti mata kail.",
      "[じ] 2. Tarik coretan dakuten (゛ tenten) pertama miring di kanan atas.",
      "[じ] 3. Tarik coretan dakuten (゛ tenten) kedua sejajar di kanannya.",
      "[ゃ] Langkah 4: Tarik garis lengkung berputar diakhiri kait kecil.",
      "[ゃ] Langkah 5: Berikan coretan pendek di atas.",
      "[ゃ] Langkah 6: Tarik garis miring memotong di sebelah kiri."
    ],
    "points": [
      {
        "num": 1,
        "x": 106,
        "y": 93
      },
      {
        "num": 2,
        "x": 168,
        "y": 77
      },
      {
        "num": 3,
        "x": 181,
        "y": 85
      },
      {
        "num": 4,
        "x": 213,
        "y": 207
      },
      {
        "num": 5,
        "x": 248,
        "y": 196
      },
      {
        "num": 6,
        "x": 225,
        "y": 193
      }
    ],
    "romaji": "ja",
    "isYoon": true,
    "components": [
      "じ",
      "ゃ"
    ]
  },
  "じゅ": {
    "strokes": 5,
    "steps": [
      "[じ] 1. Satu tarikan garis tunggal: vertikal turun lalu melengkung ke atas kanan seperti mata kail.",
      "[じ] 2. Tarik coretan dakuten (゛ tenten) pertama miring di kanan atas.",
      "[じ] 3. Tarik coretan dakuten (゛ tenten) kedua sejajar di kanannya.",
      "[ゅ] Langkah 4: Tarik garis melengkung membentuk perut bulat ke atas.",
      "[ゅ] Langkah 5: Tarik garis vertikal memotong di tengah ke bawah."
    ],
    "points": [
      {
        "num": 1,
        "x": 106,
        "y": 93
      },
      {
        "num": 2,
        "x": 168,
        "y": 77
      },
      {
        "num": 3,
        "x": 181,
        "y": 85
      },
      {
        "num": 4,
        "x": 218,
        "y": 199
      },
      {
        "num": 5,
        "x": 248,
        "y": 193
      }
    ],
    "romaji": "ju",
    "isYoon": true,
    "components": [
      "じ",
      "ゅ"
    ]
  },
  "じょ": {
    "strokes": 5,
    "steps": [
      "[じ] 1. Satu tarikan garis tunggal: vertikal turun lalu melengkung ke atas kanan seperti mata kail.",
      "[じ] 2. Tarik coretan dakuten (゛ tenten) pertama miring di kanan atas.",
      "[じ] 3. Tarik coretan dakuten (゛ tenten) kedua sejajar di kanannya.",
      "[ょ] Langkah 4: Tarik garis horizontal pendek.",
      "[ょ] Langkah 5: Tarik garis vertikal membentuk simpul bulat lalu mendatar."
    ],
    "points": [
      {
        "num": 1,
        "x": 106,
        "y": 93
      },
      {
        "num": 2,
        "x": 168,
        "y": 77
      },
      {
        "num": 3,
        "x": 181,
        "y": 85
      },
      {
        "num": 4,
        "x": 215,
        "y": 204
      },
      {
        "num": 5,
        "x": 245,
        "y": 193
      }
    ],
    "romaji": "jo",
    "isYoon": true,
    "components": [
      "じ",
      "ょ"
    ]
  },
  "びゃ": {
    "strokes": 6,
    "steps": [
      "[び] 1. Satu tarikan kontinu: garis pendek ke kanan atas, turun melengkung membentuk mangkuk bulat, lalu naik dan turun ke kanan bawah.",
      "[び] 2. Tarik coretan dakuten (゛ tenten) pertama miring di kanan atas.",
      "[び] 3. Tarik coretan dakuten (゛ tenten) kedua sejajar di kanannya.",
      "[ゃ] Langkah 4: Tarik garis lengkung berputar diakhiri kait kecil.",
      "[ゃ] Langkah 5: Berikan coretan pendek di atas.",
      "[ゃ] Langkah 6: Tarik garis miring memotong di sebelah kiri."
    ],
    "points": [
      {
        "num": 1,
        "x": 74,
        "y": 117
      },
      {
        "num": 2,
        "x": 168,
        "y": 77
      },
      {
        "num": 3,
        "x": 181,
        "y": 85
      },
      {
        "num": 4,
        "x": 213,
        "y": 207
      },
      {
        "num": 5,
        "x": 248,
        "y": 196
      },
      {
        "num": 6,
        "x": 225,
        "y": 193
      }
    ],
    "romaji": "bya",
    "isYoon": true,
    "components": [
      "び",
      "ゃ"
    ]
  },
  "びゅ": {
    "strokes": 5,
    "steps": [
      "[び] 1. Satu tarikan kontinu: garis pendek ke kanan atas, turun melengkung membentuk mangkuk bulat, lalu naik dan turun ke kanan bawah.",
      "[び] 2. Tarik coretan dakuten (゛ tenten) pertama miring di kanan atas.",
      "[び] 3. Tarik coretan dakuten (゛ tenten) kedua sejajar di kanannya.",
      "[ゅ] Langkah 4: Tarik garis melengkung membentuk perut bulat ke atas.",
      "[ゅ] Langkah 5: Tarik garis vertikal memotong di tengah ke bawah."
    ],
    "points": [
      {
        "num": 1,
        "x": 74,
        "y": 117
      },
      {
        "num": 2,
        "x": 168,
        "y": 77
      },
      {
        "num": 3,
        "x": 181,
        "y": 85
      },
      {
        "num": 4,
        "x": 218,
        "y": 199
      },
      {
        "num": 5,
        "x": 248,
        "y": 193
      }
    ],
    "romaji": "byu",
    "isYoon": true,
    "components": [
      "び",
      "ゅ"
    ]
  },
  "びょ": {
    "strokes": 5,
    "steps": [
      "[び] 1. Satu tarikan kontinu: garis pendek ke kanan atas, turun melengkung membentuk mangkuk bulat, lalu naik dan turun ke kanan bawah.",
      "[び] 2. Tarik coretan dakuten (゛ tenten) pertama miring di kanan atas.",
      "[び] 3. Tarik coretan dakuten (゛ tenten) kedua sejajar di kanannya.",
      "[ょ] Langkah 4: Tarik garis horizontal pendek.",
      "[ょ] Langkah 5: Tarik garis vertikal membentuk simpul bulat lalu mendatar."
    ],
    "points": [
      {
        "num": 1,
        "x": 74,
        "y": 117
      },
      {
        "num": 2,
        "x": 168,
        "y": 77
      },
      {
        "num": 3,
        "x": 181,
        "y": 85
      },
      {
        "num": 4,
        "x": 215,
        "y": 204
      },
      {
        "num": 5,
        "x": 245,
        "y": 193
      }
    ],
    "romaji": "byo",
    "isYoon": true,
    "components": [
      "び",
      "ょ"
    ]
  },
  "ぴゃ": {
    "strokes": 5,
    "steps": [
      "[ぴ] 1. Satu tarikan kontinu: garis pendek ke kanan atas, turun melengkung membentuk mangkuk bulat, lalu naik dan turun ke kanan bawah.",
      "[ぴ] 2. Buat lingkaran kecil handakuten (゜ maru) di bagian kanan atas.",
      "[ゃ] Langkah 3: Tarik garis lengkung berputar diakhiri kait kecil.",
      "[ゃ] Langkah 4: Berikan coretan pendek di atas.",
      "[ゃ] Langkah 5: Tarik garis miring memotong di sebelah kiri."
    ],
    "points": [
      {
        "num": 1,
        "x": 74,
        "y": 117
      },
      {
        "num": 2,
        "x": 174,
        "y": 81
      },
      {
        "num": 3,
        "x": 213,
        "y": 207
      },
      {
        "num": 4,
        "x": 248,
        "y": 196
      },
      {
        "num": 5,
        "x": 225,
        "y": 193
      }
    ],
    "romaji": "pya",
    "isYoon": true,
    "components": [
      "ぴ",
      "ゃ"
    ]
  },
  "ぴゅ": {
    "strokes": 4,
    "steps": [
      "[ぴ] 1. Satu tarikan kontinu: garis pendek ke kanan atas, turun melengkung membentuk mangkuk bulat, lalu naik dan turun ke kanan bawah.",
      "[ぴ] 2. Buat lingkaran kecil handakuten (゜ maru) di bagian kanan atas.",
      "[ゅ] Langkah 3: Tarik garis melengkung membentuk perut bulat ke atas.",
      "[ゅ] Langkah 4: Tarik garis vertikal memotong di tengah ke bawah."
    ],
    "points": [
      {
        "num": 1,
        "x": 74,
        "y": 117
      },
      {
        "num": 2,
        "x": 174,
        "y": 81
      },
      {
        "num": 3,
        "x": 218,
        "y": 199
      },
      {
        "num": 4,
        "x": 248,
        "y": 193
      }
    ],
    "romaji": "pyu",
    "isYoon": true,
    "components": [
      "ぴ",
      "ゅ"
    ]
  },
  "ぴょ": {
    "strokes": 4,
    "steps": [
      "[ぴ] 1. Satu tarikan kontinu: garis pendek ke kanan atas, turun melengkung membentuk mangkuk bulat, lalu naik dan turun ke kanan bawah.",
      "[ぴ] 2. Buat lingkaran kecil handakuten (゜ maru) di bagian kanan atas.",
      "[ょ] Langkah 3: Tarik garis horizontal pendek.",
      "[ょ] Langkah 4: Tarik garis vertikal membentuk simpul bulat lalu mendatar."
    ],
    "points": [
      {
        "num": 1,
        "x": 74,
        "y": 117
      },
      {
        "num": 2,
        "x": 174,
        "y": 81
      },
      {
        "num": 3,
        "x": 215,
        "y": 204
      },
      {
        "num": 4,
        "x": 245,
        "y": 193
      }
    ],
    "romaji": "pyo",
    "isYoon": true,
    "components": [
      "ぴ",
      "ょ"
    ]
  },
  "キャ": {
    "strokes": 5,
    "steps": [
      "[キ] 1. Tarik garis horizontal atas miring sedikit ke kanan atas.",
      "[キ] 2. Tarik garis horizontal kedua di bawahnya sejajar lebih panjang.",
      "[キ] 3. Tarik garis miring memotong kedua garis dari kanan atas menyapu ke kiri bawah.",
      "[ャ] Langkah 4: Tarik garis horizontal lalu tekuk serong ke kiri bawah.",
      "[ャ] Langkah 5: Tarik garis miring memotong ke bawah."
    ],
    "points": [
      {
        "num": 1,
        "x": 87,
        "y": 109
      },
      {
        "num": 2,
        "x": 77,
        "y": 149
      },
      {
        "num": 3,
        "x": 142,
        "y": 85
      },
      {
        "num": 4,
        "x": 215,
        "y": 204
      },
      {
        "num": 5,
        "x": 243,
        "y": 193
      }
    ],
    "romaji": "kya",
    "isYoon": true,
    "components": [
      "キ",
      "ャ"
    ]
  },
  "キュ": {
    "strokes": 5,
    "steps": [
      "[キ] 1. Tarik garis horizontal atas miring sedikit ke kanan atas.",
      "[キ] 2. Tarik garis horizontal kedua di bawahnya sejajar lebih panjang.",
      "[キ] 3. Tarik garis miring memotong kedua garis dari kanan atas menyapu ke kiri bawah.",
      "[ュ] Langkah 4: Tarik garis vertikal lalu belok mendatar ke kanan.",
      "[ュ] Langkah 5: Tarik garis horizontal bawah memotong alas."
    ],
    "points": [
      {
        "num": 1,
        "x": 87,
        "y": 109
      },
      {
        "num": 2,
        "x": 77,
        "y": 149
      },
      {
        "num": 3,
        "x": 142,
        "y": 85
      },
      {
        "num": 4,
        "x": 218,
        "y": 199
      },
      {
        "num": 5,
        "x": 208,
        "y": 248
      }
    ],
    "romaji": "kyu",
    "isYoon": true,
    "components": [
      "キ",
      "ュ"
    ]
  },
  "キョ": {
    "strokes": 6,
    "steps": [
      "[キ] 1. Tarik garis horizontal atas miring sedikit ke kanan atas.",
      "[キ] 2. Tarik garis horizontal kedua di bawahnya sejajar lebih panjang.",
      "[キ] 3. Tarik garis miring memotong kedua garis dari kanan atas menyapu ke kiri bawah.",
      "[ョ] Langkah 4: Tarik garis horizontal atas lalu tekuk ke bawah.",
      "[ョ] Langkah 5: Tarik garis horizontal tengah.",
      "[ョ] Langkah 6: Tarik garis horizontal bawah."
    ],
    "points": [
      {
        "num": 1,
        "x": 87,
        "y": 109
      },
      {
        "num": 2,
        "x": 77,
        "y": 149
      },
      {
        "num": 3,
        "x": 142,
        "y": 85
      },
      {
        "num": 4,
        "x": 218,
        "y": 199
      },
      {
        "num": 5,
        "x": 218,
        "y": 221
      },
      {
        "num": 6,
        "x": 218,
        "y": 248
      }
    ],
    "romaji": "kyo",
    "isYoon": true,
    "components": [
      "キ",
      "ョ"
    ]
  },
  "シャ": {
    "strokes": 5,
    "steps": [
      "[シ] 1. Buat titik coretan miring atas di sisi kiri.",
      "[シ] 2. Buat titik coretan kedua di bawahnya sejajar.",
      "[シ] 3. Tarik sapuan panjang dari kiri bawah melesat naik ke arah kanan atas.",
      "[ャ] Langkah 4: Tarik garis horizontal lalu tekuk serong ke kiri bawah.",
      "[ャ] Langkah 5: Tarik garis miring memotong ke bawah."
    ],
    "points": [
      {
        "num": 1,
        "x": 90,
        "y": 105
      },
      {
        "num": 2,
        "x": 83,
        "y": 149
      },
      {
        "num": 3,
        "x": 80,
        "y": 205
      },
      {
        "num": 4,
        "x": 215,
        "y": 204
      },
      {
        "num": 5,
        "x": 243,
        "y": 193
      }
    ],
    "romaji": "sha",
    "isYoon": true,
    "components": [
      "シ",
      "ャ"
    ]
  },
  "シュ": {
    "strokes": 5,
    "steps": [
      "[シ] 1. Buat titik coretan miring atas di sisi kiri.",
      "[シ] 2. Buat titik coretan kedua di bawahnya sejajar.",
      "[シ] 3. Tarik sapuan panjang dari kiri bawah melesat naik ke arah kanan atas.",
      "[ュ] Langkah 4: Tarik garis vertikal lalu belok mendatar ke kanan.",
      "[ュ] Langkah 5: Tarik garis horizontal bawah memotong alas."
    ],
    "points": [
      {
        "num": 1,
        "x": 90,
        "y": 105
      },
      {
        "num": 2,
        "x": 83,
        "y": 149
      },
      {
        "num": 3,
        "x": 80,
        "y": 205
      },
      {
        "num": 4,
        "x": 218,
        "y": 199
      },
      {
        "num": 5,
        "x": 208,
        "y": 248
      }
    ],
    "romaji": "shu",
    "isYoon": true,
    "components": [
      "シ",
      "ュ"
    ]
  },
  "ショ": {
    "strokes": 6,
    "steps": [
      "[シ] 1. Buat titik coretan miring atas di sisi kiri.",
      "[シ] 2. Buat titik coretan kedua di bawahnya sejajar.",
      "[シ] 3. Tarik sapuan panjang dari kiri bawah melesat naik ke arah kanan atas.",
      "[ョ] Langkah 4: Tarik garis horizontal atas lalu tekuk ke bawah.",
      "[ョ] Langkah 5: Tarik garis horizontal tengah.",
      "[ョ] Langkah 6: Tarik garis horizontal bawah."
    ],
    "points": [
      {
        "num": 1,
        "x": 90,
        "y": 105
      },
      {
        "num": 2,
        "x": 83,
        "y": 149
      },
      {
        "num": 3,
        "x": 80,
        "y": 205
      },
      {
        "num": 4,
        "x": 218,
        "y": 199
      },
      {
        "num": 5,
        "x": 218,
        "y": 221
      },
      {
        "num": 6,
        "x": 218,
        "y": 248
      }
    ],
    "romaji": "sho",
    "isYoon": true,
    "components": [
      "シ",
      "ョ"
    ]
  },
  "チャ": {
    "strokes": 5,
    "steps": [
      "[チ] 1. Tarik garis miring pendek atas dari kanan ke kiri bawah.",
      "[チ] 2. Tarik garis horizontal melintang di tengah.",
      "[チ] 3. Tarik garis melengkung memotong dari atas garis kedua turun ke kiri bawah.",
      "[ャ] Langkah 4: Tarik garis horizontal lalu tekuk serong ke kiri bawah.",
      "[ャ] Langkah 5: Tarik garis miring memotong ke bawah."
    ],
    "points": [
      {
        "num": 1,
        "x": 139,
        "y": 89
      },
      {
        "num": 2,
        "x": 77,
        "y": 137
      },
      {
        "num": 3,
        "x": 122,
        "y": 113
      },
      {
        "num": 4,
        "x": 215,
        "y": 204
      },
      {
        "num": 5,
        "x": 243,
        "y": 193
      }
    ],
    "romaji": "cha",
    "isYoon": true,
    "components": [
      "チ",
      "ャ"
    ]
  },
  "チュ": {
    "strokes": 5,
    "steps": [
      "[チ] 1. Tarik garis miring pendek atas dari kanan ke kiri bawah.",
      "[チ] 2. Tarik garis horizontal melintang di tengah.",
      "[チ] 3. Tarik garis melengkung memotong dari atas garis kedua turun ke kiri bawah.",
      "[ュ] Langkah 4: Tarik garis vertikal lalu belok mendatar ke kanan.",
      "[ュ] Langkah 5: Tarik garis horizontal bawah memotong alas."
    ],
    "points": [
      {
        "num": 1,
        "x": 139,
        "y": 89
      },
      {
        "num": 2,
        "x": 77,
        "y": 137
      },
      {
        "num": 3,
        "x": 122,
        "y": 113
      },
      {
        "num": 4,
        "x": 218,
        "y": 199
      },
      {
        "num": 5,
        "x": 208,
        "y": 248
      }
    ],
    "romaji": "chu",
    "isYoon": true,
    "components": [
      "チ",
      "ュ"
    ]
  },
  "チョ": {
    "strokes": 6,
    "steps": [
      "[チ] 1. Tarik garis miring pendek atas dari kanan ke kiri bawah.",
      "[チ] 2. Tarik garis horizontal melintang di tengah.",
      "[チ] 3. Tarik garis melengkung memotong dari atas garis kedua turun ke kiri bawah.",
      "[ョ] Langkah 4: Tarik garis horizontal atas lalu tekuk ke bawah.",
      "[ョ] Langkah 5: Tarik garis horizontal tengah.",
      "[ョ] Langkah 6: Tarik garis horizontal bawah."
    ],
    "points": [
      {
        "num": 1,
        "x": 139,
        "y": 89
      },
      {
        "num": 2,
        "x": 77,
        "y": 137
      },
      {
        "num": 3,
        "x": 122,
        "y": 113
      },
      {
        "num": 4,
        "x": 218,
        "y": 199
      },
      {
        "num": 5,
        "x": 218,
        "y": 221
      },
      {
        "num": 6,
        "x": 218,
        "y": 248
      }
    ],
    "romaji": "cho",
    "isYoon": true,
    "components": [
      "チ",
      "ョ"
    ]
  },
  "ニャ": {
    "strokes": 4,
    "steps": [
      "[ニ] 1. Tarik garis horizontal pendek di bagian atas.",
      "[ニ] 2. Tarik garis horizontal kedua di bagian bawah yang lebih panjang.",
      "[ャ] Langkah 3: Tarik garis horizontal lalu tekuk serong ke kiri bawah.",
      "[ャ] Langkah 4: Tarik garis miring memotong ke bawah."
    ],
    "points": [
      {
        "num": 1,
        "x": 90,
        "y": 117
      },
      {
        "num": 2,
        "x": 77,
        "y": 189
      },
      {
        "num": 3,
        "x": 215,
        "y": 204
      },
      {
        "num": 4,
        "x": 243,
        "y": 193
      }
    ],
    "romaji": "nya",
    "isYoon": true,
    "components": [
      "ニ",
      "ャ"
    ]
  },
  "ニュ": {
    "strokes": 4,
    "steps": [
      "[ニ] 1. Tarik garis horizontal pendek di bagian atas.",
      "[ニ] 2. Tarik garis horizontal kedua di bagian bawah yang lebih panjang.",
      "[ュ] Langkah 3: Tarik garis vertikal lalu belok mendatar ke kanan.",
      "[ュ] Langkah 4: Tarik garis horizontal bawah memotong alas."
    ],
    "points": [
      {
        "num": 1,
        "x": 90,
        "y": 117
      },
      {
        "num": 2,
        "x": 77,
        "y": 189
      },
      {
        "num": 3,
        "x": 218,
        "y": 199
      },
      {
        "num": 4,
        "x": 208,
        "y": 248
      }
    ],
    "romaji": "nyu",
    "isYoon": true,
    "components": [
      "ニ",
      "ュ"
    ]
  },
  "ニョ": {
    "strokes": 5,
    "steps": [
      "[ニ] 1. Tarik garis horizontal pendek di bagian atas.",
      "[ニ] 2. Tarik garis horizontal kedua di bagian bawah yang lebih panjang.",
      "[ョ] Langkah 3: Tarik garis horizontal atas lalu tekuk ke bawah.",
      "[ョ] Langkah 4: Tarik garis horizontal tengah.",
      "[ョ] Langkah 5: Tarik garis horizontal bawah."
    ],
    "points": [
      {
        "num": 1,
        "x": 90,
        "y": 117
      },
      {
        "num": 2,
        "x": 77,
        "y": 189
      },
      {
        "num": 3,
        "x": 218,
        "y": 199
      },
      {
        "num": 4,
        "x": 218,
        "y": 221
      },
      {
        "num": 5,
        "x": 218,
        "y": 248
      }
    ],
    "romaji": "nyo",
    "isYoon": true,
    "components": [
      "ニ",
      "ョ"
    ]
  },
  "ヒャ": {
    "strokes": 4,
    "steps": [
      "[ヒ] 1. Tarik garis horizontal pendek miring sedikit ke bawah kanan.",
      "[ヒ] 2. Tarik garis vertikal turun, melengkung ke kanan bawah lalu naik melengkung ke atas.",
      "[ャ] Langkah 3: Tarik garis horizontal lalu tekuk serong ke kiri bawah.",
      "[ャ] Langkah 4: Tarik garis miring memotong ke bawah."
    ],
    "points": [
      {
        "num": 1,
        "x": 87,
        "y": 109
      },
      {
        "num": 2,
        "x": 87,
        "y": 109
      },
      {
        "num": 3,
        "x": 215,
        "y": 204
      },
      {
        "num": 4,
        "x": 243,
        "y": 193
      }
    ],
    "romaji": "hya",
    "isYoon": true,
    "components": [
      "ヒ",
      "ャ"
    ]
  },
  "ヒュ": {
    "strokes": 4,
    "steps": [
      "[ヒ] 1. Tarik garis horizontal pendek miring sedikit ke bawah kanan.",
      "[ヒ] 2. Tarik garis vertikal turun, melengkung ke kanan bawah lalu naik melengkung ke atas.",
      "[ュ] Langkah 3: Tarik garis vertikal lalu belok mendatar ke kanan.",
      "[ュ] Langkah 4: Tarik garis horizontal bawah memotong alas."
    ],
    "points": [
      {
        "num": 1,
        "x": 87,
        "y": 109
      },
      {
        "num": 2,
        "x": 87,
        "y": 109
      },
      {
        "num": 3,
        "x": 218,
        "y": 199
      },
      {
        "num": 4,
        "x": 208,
        "y": 248
      }
    ],
    "romaji": "hyu",
    "isYoon": true,
    "components": [
      "ヒ",
      "ュ"
    ]
  },
  "ヒョ": {
    "strokes": 5,
    "steps": [
      "[ヒ] 1. Tarik garis horizontal pendek miring sedikit ke bawah kanan.",
      "[ヒ] 2. Tarik garis vertikal turun, melengkung ke kanan bawah lalu naik melengkung ke atas.",
      "[ョ] Langkah 3: Tarik garis horizontal atas lalu tekuk ke bawah.",
      "[ョ] Langkah 4: Tarik garis horizontal tengah.",
      "[ョ] Langkah 5: Tarik garis horizontal bawah."
    ],
    "points": [
      {
        "num": 1,
        "x": 87,
        "y": 109
      },
      {
        "num": 2,
        "x": 87,
        "y": 109
      },
      {
        "num": 3,
        "x": 218,
        "y": 199
      },
      {
        "num": 4,
        "x": 218,
        "y": 221
      },
      {
        "num": 5,
        "x": 218,
        "y": 248
      }
    ],
    "romaji": "hyo",
    "isYoon": true,
    "components": [
      "ヒ",
      "ョ"
    ]
  },
  "ミャ": {
    "strokes": 5,
    "steps": [
      "[ミ] 1. Tarik garis miring pendek teratas dari kiri atas ke kanan bawah.",
      "[ミ] 2. Tarik garis miring kedua di tengah sejajar.",
      "[ミ] 3. Tarik garis miring ketiga di bagian bawah sejajar yang sedikit lebih panjang.",
      "[ャ] Langkah 4: Tarik garis horizontal lalu tekuk serong ke kiri bawah.",
      "[ャ] Langkah 5: Tarik garis miring memotong ke bawah."
    ],
    "points": [
      {
        "num": 1,
        "x": 93,
        "y": 101
      },
      {
        "num": 2,
        "x": 87,
        "y": 145
      },
      {
        "num": 3,
        "x": 80,
        "y": 189
      },
      {
        "num": 4,
        "x": 215,
        "y": 204
      },
      {
        "num": 5,
        "x": 243,
        "y": 193
      }
    ],
    "romaji": "mya",
    "isYoon": true,
    "components": [
      "ミ",
      "ャ"
    ]
  },
  "ミュ": {
    "strokes": 5,
    "steps": [
      "[ミ] 1. Tarik garis miring pendek teratas dari kiri atas ke kanan bawah.",
      "[ミ] 2. Tarik garis miring kedua di tengah sejajar.",
      "[ミ] 3. Tarik garis miring ketiga di bagian bawah sejajar yang sedikit lebih panjang.",
      "[ュ] Langkah 4: Tarik garis vertikal lalu belok mendatar ke kanan.",
      "[ュ] Langkah 5: Tarik garis horizontal bawah memotong alas."
    ],
    "points": [
      {
        "num": 1,
        "x": 93,
        "y": 101
      },
      {
        "num": 2,
        "x": 87,
        "y": 145
      },
      {
        "num": 3,
        "x": 80,
        "y": 189
      },
      {
        "num": 4,
        "x": 218,
        "y": 199
      },
      {
        "num": 5,
        "x": 208,
        "y": 248
      }
    ],
    "romaji": "myu",
    "isYoon": true,
    "components": [
      "ミ",
      "ュ"
    ]
  },
  "ミョ": {
    "strokes": 6,
    "steps": [
      "[ミ] 1. Tarik garis miring pendek teratas dari kiri atas ke kanan bawah.",
      "[ミ] 2. Tarik garis miring kedua di tengah sejajar.",
      "[ミ] 3. Tarik garis miring ketiga di bagian bawah sejajar yang sedikit lebih panjang.",
      "[ョ] Langkah 4: Tarik garis horizontal atas lalu tekuk ke bawah.",
      "[ョ] Langkah 5: Tarik garis horizontal tengah.",
      "[ョ] Langkah 6: Tarik garis horizontal bawah."
    ],
    "points": [
      {
        "num": 1,
        "x": 93,
        "y": 101
      },
      {
        "num": 2,
        "x": 87,
        "y": 145
      },
      {
        "num": 3,
        "x": 80,
        "y": 189
      },
      {
        "num": 4,
        "x": 218,
        "y": 199
      },
      {
        "num": 5,
        "x": 218,
        "y": 221
      },
      {
        "num": 6,
        "x": 218,
        "y": 248
      }
    ],
    "romaji": "myo",
    "isYoon": true,
    "components": [
      "ミ",
      "ョ"
    ]
  },
  "リャ": {
    "strokes": 4,
    "steps": [
      "[リ] 1. Tarik garis vertikal pendek di sebelah kiri.",
      "[リ] 2. Tarik garis vertikal kedua di sebelah kanan yang lebih panjang menyapu melengkung ke bawah.",
      "[ャ] Langkah 3: Tarik garis horizontal lalu tekuk serong ke kiri bawah.",
      "[ャ] Langkah 4: Tarik garis miring memotong ke bawah."
    ],
    "points": [
      {
        "num": 1,
        "x": 93,
        "y": 101
      },
      {
        "num": 2,
        "x": 145,
        "y": 89
      },
      {
        "num": 3,
        "x": 215,
        "y": 204
      },
      {
        "num": 4,
        "x": 243,
        "y": 193
      }
    ],
    "romaji": "rya",
    "isYoon": true,
    "components": [
      "リ",
      "ャ"
    ]
  },
  "リュ": {
    "strokes": 4,
    "steps": [
      "[リ] 1. Tarik garis vertikal pendek di sebelah kiri.",
      "[リ] 2. Tarik garis vertikal kedua di sebelah kanan yang lebih panjang menyapu melengkung ke bawah.",
      "[ュ] Langkah 3: Tarik garis vertikal lalu belok mendatar ke kanan.",
      "[ュ] Langkah 4: Tarik garis horizontal bawah memotong alas."
    ],
    "points": [
      {
        "num": 1,
        "x": 93,
        "y": 101
      },
      {
        "num": 2,
        "x": 145,
        "y": 89
      },
      {
        "num": 3,
        "x": 218,
        "y": 199
      },
      {
        "num": 4,
        "x": 208,
        "y": 248
      }
    ],
    "romaji": "ryu",
    "isYoon": true,
    "components": [
      "リ",
      "ュ"
    ]
  },
  "リョ": {
    "strokes": 5,
    "steps": [
      "[リ] 1. Tarik garis vertikal pendek di sebelah kiri.",
      "[リ] 2. Tarik garis vertikal kedua di sebelah kanan yang lebih panjang menyapu melengkung ke bawah.",
      "[ョ] Langkah 3: Tarik garis horizontal atas lalu tekuk ke bawah.",
      "[ョ] Langkah 4: Tarik garis horizontal tengah.",
      "[ョ] Langkah 5: Tarik garis horizontal bawah."
    ],
    "points": [
      {
        "num": 1,
        "x": 93,
        "y": 101
      },
      {
        "num": 2,
        "x": 145,
        "y": 89
      },
      {
        "num": 3,
        "x": 218,
        "y": 199
      },
      {
        "num": 4,
        "x": 218,
        "y": 221
      },
      {
        "num": 5,
        "x": 218,
        "y": 248
      }
    ],
    "romaji": "ryo",
    "isYoon": true,
    "components": [
      "リ",
      "ョ"
    ]
  },
  "ギャ": {
    "strokes": 7,
    "steps": [
      "[ギ] 1. Tarik garis horizontal atas miring sedikit ke kanan atas.",
      "[ギ] 2. Tarik garis horizontal kedua di bawahnya sejajar lebih panjang.",
      "[ギ] 3. Tarik garis miring memotong kedua garis dari kanan atas menyapu ke kiri bawah.",
      "[ギ] 4. Tarik coretan dakuten (゛ tenten) pertama miring di kanan atas.",
      "[ギ] 5. Tarik coretan dakuten (゛ tenten) kedua sejajar di kanannya.",
      "[ャ] Langkah 6: Tarik garis horizontal lalu tekuk serong ke kiri bawah.",
      "[ャ] Langkah 7: Tarik garis miring memotong ke bawah."
    ],
    "points": [
      {
        "num": 1,
        "x": 87,
        "y": 109
      },
      {
        "num": 2,
        "x": 77,
        "y": 149
      },
      {
        "num": 3,
        "x": 142,
        "y": 85
      },
      {
        "num": 4,
        "x": 168,
        "y": 77
      },
      {
        "num": 5,
        "x": 181,
        "y": 85
      },
      {
        "num": 6,
        "x": 215,
        "y": 204
      },
      {
        "num": 7,
        "x": 243,
        "y": 193
      }
    ],
    "romaji": "gya",
    "isYoon": true,
    "components": [
      "ギ",
      "ャ"
    ]
  },
  "ギュ": {
    "strokes": 7,
    "steps": [
      "[ギ] 1. Tarik garis horizontal atas miring sedikit ke kanan atas.",
      "[ギ] 2. Tarik garis horizontal kedua di bawahnya sejajar lebih panjang.",
      "[ギ] 3. Tarik garis miring memotong kedua garis dari kanan atas menyapu ke kiri bawah.",
      "[ギ] 4. Tarik coretan dakuten (゛ tenten) pertama miring di kanan atas.",
      "[ギ] 5. Tarik coretan dakuten (゛ tenten) kedua sejajar di kanannya.",
      "[ュ] Langkah 6: Tarik garis vertikal lalu belok mendatar ke kanan.",
      "[ュ] Langkah 7: Tarik garis horizontal bawah memotong alas."
    ],
    "points": [
      {
        "num": 1,
        "x": 87,
        "y": 109
      },
      {
        "num": 2,
        "x": 77,
        "y": 149
      },
      {
        "num": 3,
        "x": 142,
        "y": 85
      },
      {
        "num": 4,
        "x": 168,
        "y": 77
      },
      {
        "num": 5,
        "x": 181,
        "y": 85
      },
      {
        "num": 6,
        "x": 218,
        "y": 199
      },
      {
        "num": 7,
        "x": 208,
        "y": 248
      }
    ],
    "romaji": "gyu",
    "isYoon": true,
    "components": [
      "ギ",
      "ュ"
    ]
  },
  "ギョ": {
    "strokes": 8,
    "steps": [
      "[ギ] 1. Tarik garis horizontal atas miring sedikit ke kanan atas.",
      "[ギ] 2. Tarik garis horizontal kedua di bawahnya sejajar lebih panjang.",
      "[ギ] 3. Tarik garis miring memotong kedua garis dari kanan atas menyapu ke kiri bawah.",
      "[ギ] 4. Tarik coretan dakuten (゛ tenten) pertama miring di kanan atas.",
      "[ギ] 5. Tarik coretan dakuten (゛ tenten) kedua sejajar di kanannya.",
      "[ョ] Langkah 6: Tarik garis horizontal atas lalu tekuk ke bawah.",
      "[ョ] Langkah 7: Tarik garis horizontal tengah.",
      "[ョ] Langkah 8: Tarik garis horizontal bawah."
    ],
    "points": [
      {
        "num": 1,
        "x": 87,
        "y": 109
      },
      {
        "num": 2,
        "x": 77,
        "y": 149
      },
      {
        "num": 3,
        "x": 142,
        "y": 85
      },
      {
        "num": 4,
        "x": 168,
        "y": 77
      },
      {
        "num": 5,
        "x": 181,
        "y": 85
      },
      {
        "num": 6,
        "x": 218,
        "y": 199
      },
      {
        "num": 7,
        "x": 218,
        "y": 221
      },
      {
        "num": 8,
        "x": 218,
        "y": 248
      }
    ],
    "romaji": "gyo",
    "isYoon": true,
    "components": [
      "ギ",
      "ョ"
    ]
  },
  "ジャ": {
    "strokes": 7,
    "steps": [
      "[ジ] 1. Buat titik coretan miring atas di sisi kiri.",
      "[ジ] 2. Buat titik coretan kedua di bawahnya sejajar.",
      "[ジ] 3. Tarik sapuan panjang dari kiri bawah melesat naik ke arah kanan atas.",
      "[ジ] 4. Tarik coretan dakuten (゛ tenten) pertama miring di kanan atas.",
      "[ジ] 5. Tarik coretan dakuten (゛ tenten) kedua sejajar di kanannya.",
      "[ャ] Langkah 6: Tarik garis horizontal lalu tekuk serong ke kiri bawah.",
      "[ャ] Langkah 7: Tarik garis miring memotong ke bawah."
    ],
    "points": [
      {
        "num": 1,
        "x": 90,
        "y": 105
      },
      {
        "num": 2,
        "x": 83,
        "y": 149
      },
      {
        "num": 3,
        "x": 80,
        "y": 205
      },
      {
        "num": 4,
        "x": 168,
        "y": 77
      },
      {
        "num": 5,
        "x": 181,
        "y": 85
      },
      {
        "num": 6,
        "x": 215,
        "y": 204
      },
      {
        "num": 7,
        "x": 243,
        "y": 193
      }
    ],
    "romaji": "ja",
    "isYoon": true,
    "components": [
      "ジ",
      "ャ"
    ]
  },
  "ジュ": {
    "strokes": 7,
    "steps": [
      "[ジ] 1. Buat titik coretan miring atas di sisi kiri.",
      "[ジ] 2. Buat titik coretan kedua di bawahnya sejajar.",
      "[ジ] 3. Tarik sapuan panjang dari kiri bawah melesat naik ke arah kanan atas.",
      "[ジ] 4. Tarik coretan dakuten (゛ tenten) pertama miring di kanan atas.",
      "[ジ] 5. Tarik coretan dakuten (゛ tenten) kedua sejajar di kanannya.",
      "[ュ] Langkah 6: Tarik garis vertikal lalu belok mendatar ke kanan.",
      "[ュ] Langkah 7: Tarik garis horizontal bawah memotong alas."
    ],
    "points": [
      {
        "num": 1,
        "x": 90,
        "y": 105
      },
      {
        "num": 2,
        "x": 83,
        "y": 149
      },
      {
        "num": 3,
        "x": 80,
        "y": 205
      },
      {
        "num": 4,
        "x": 168,
        "y": 77
      },
      {
        "num": 5,
        "x": 181,
        "y": 85
      },
      {
        "num": 6,
        "x": 218,
        "y": 199
      },
      {
        "num": 7,
        "x": 208,
        "y": 248
      }
    ],
    "romaji": "ju",
    "isYoon": true,
    "components": [
      "ジ",
      "ュ"
    ]
  },
  "ジョ": {
    "strokes": 8,
    "steps": [
      "[ジ] 1. Buat titik coretan miring atas di sisi kiri.",
      "[ジ] 2. Buat titik coretan kedua di bawahnya sejajar.",
      "[ジ] 3. Tarik sapuan panjang dari kiri bawah melesat naik ke arah kanan atas.",
      "[ジ] 4. Tarik coretan dakuten (゛ tenten) pertama miring di kanan atas.",
      "[ジ] 5. Tarik coretan dakuten (゛ tenten) kedua sejajar di kanannya.",
      "[ョ] Langkah 6: Tarik garis horizontal atas lalu tekuk ke bawah.",
      "[ョ] Langkah 7: Tarik garis horizontal tengah.",
      "[ョ] Langkah 8: Tarik garis horizontal bawah."
    ],
    "points": [
      {
        "num": 1,
        "x": 90,
        "y": 105
      },
      {
        "num": 2,
        "x": 83,
        "y": 149
      },
      {
        "num": 3,
        "x": 80,
        "y": 205
      },
      {
        "num": 4,
        "x": 168,
        "y": 77
      },
      {
        "num": 5,
        "x": 181,
        "y": 85
      },
      {
        "num": 6,
        "x": 218,
        "y": 199
      },
      {
        "num": 7,
        "x": 218,
        "y": 221
      },
      {
        "num": 8,
        "x": 218,
        "y": 248
      }
    ],
    "romaji": "jo",
    "isYoon": true,
    "components": [
      "ジ",
      "ョ"
    ]
  },
  "ビャ": {
    "strokes": 6,
    "steps": [
      "[ビ] 1. Tarik garis horizontal pendek miring sedikit ke bawah kanan.",
      "[ビ] 2. Tarik garis vertikal turun, melengkung ke kanan bawah lalu naik melengkung ke atas.",
      "[ビ] 3. Tarik coretan dakuten (゛ tenten) pertama miring di kanan atas.",
      "[ビ] 4. Tarik coretan dakuten (゛ tenten) kedua sejajar di kanannya.",
      "[ャ] Langkah 5: Tarik garis horizontal lalu tekuk serong ke kiri bawah.",
      "[ャ] Langkah 6: Tarik garis miring memotong ke bawah."
    ],
    "points": [
      {
        "num": 1,
        "x": 87,
        "y": 109
      },
      {
        "num": 2,
        "x": 87,
        "y": 109
      },
      {
        "num": 3,
        "x": 168,
        "y": 77
      },
      {
        "num": 4,
        "x": 181,
        "y": 85
      },
      {
        "num": 5,
        "x": 215,
        "y": 204
      },
      {
        "num": 6,
        "x": 243,
        "y": 193
      }
    ],
    "romaji": "bya",
    "isYoon": true,
    "components": [
      "ビ",
      "ャ"
    ]
  },
  "ビュ": {
    "strokes": 6,
    "steps": [
      "[ビ] 1. Tarik garis horizontal pendek miring sedikit ke bawah kanan.",
      "[ビ] 2. Tarik garis vertikal turun, melengkung ke kanan bawah lalu naik melengkung ke atas.",
      "[ビ] 3. Tarik coretan dakuten (゛ tenten) pertama miring di kanan atas.",
      "[ビ] 4. Tarik coretan dakuten (゛ tenten) kedua sejajar di kanannya.",
      "[ュ] Langkah 5: Tarik garis vertikal lalu belok mendatar ke kanan.",
      "[ュ] Langkah 6: Tarik garis horizontal bawah memotong alas."
    ],
    "points": [
      {
        "num": 1,
        "x": 87,
        "y": 109
      },
      {
        "num": 2,
        "x": 87,
        "y": 109
      },
      {
        "num": 3,
        "x": 168,
        "y": 77
      },
      {
        "num": 4,
        "x": 181,
        "y": 85
      },
      {
        "num": 5,
        "x": 218,
        "y": 199
      },
      {
        "num": 6,
        "x": 208,
        "y": 248
      }
    ],
    "romaji": "byu",
    "isYoon": true,
    "components": [
      "ビ",
      "ュ"
    ]
  },
  "ビョ": {
    "strokes": 6,
    "steps": [
      "[ビ] 1. Tarik garis horizontal pendek miring sedikit ke bawah kanan.",
      "[ビ] 2. Tarik garis vertikal turun, melengkung ke kanan bawah lalu naik melengkung ke atas.",
      "[ビ] 3. Tarik coretan dakuten (゛ tenten) pertama miring di kanan atas.",
      "[ビ] 4. Tarik coretan dakuten (゛ tenten) kedua sejajar di kanannya.",
      "[ょ] Langkah 5: Tarik garis horizontal pendek.",
      "[ょ] Langkah 6: Tarik garis vertikal membentuk simpul bulat lalu mendatar."
    ],
    "points": [
      {
        "num": 1,
        "x": 87,
        "y": 109
      },
      {
        "num": 2,
        "x": 87,
        "y": 109
      },
      {
        "num": 3,
        "x": 168,
        "y": 77
      },
      {
        "num": 4,
        "x": 181,
        "y": 85
      },
      {
        "num": 5,
        "x": 215,
        "y": 204
      },
      {
        "num": 6,
        "x": 245,
        "y": 193
      }
    ],
    "romaji": "byo",
    "isYoon": true,
    "components": [
      "ビ",
      "ょ"
    ]
  },
  "ピャ": {
    "strokes": 5,
    "steps": [
      "[ピ] 1. Tarik garis horizontal pendek miring sedikit ke bawah kanan.",
      "[ピ] 2. Tarik garis vertikal turun, melengkung ke kanan bawah lalu naik melengkung ke atas.",
      "[ピ] 3. Buat lingkaran kecil handakuten (゜ maru) di bagian kanan atas.",
      "[ャ] Langkah 4: Tarik garis horizontal lalu tekuk serong ke kiri bawah.",
      "[ャ] Langkah 5: Tarik garis miring memotong ke bawah."
    ],
    "points": [
      {
        "num": 1,
        "x": 87,
        "y": 109
      },
      {
        "num": 2,
        "x": 87,
        "y": 109
      },
      {
        "num": 3,
        "x": 174,
        "y": 81
      },
      {
        "num": 4,
        "x": 215,
        "y": 204
      },
      {
        "num": 5,
        "x": 243,
        "y": 193
      }
    ],
    "romaji": "pya",
    "isYoon": true,
    "components": [
      "ピ",
      "ャ"
    ]
  },
  "ピュ": {
    "strokes": 5,
    "steps": [
      "[ピ] 1. Tarik garis horizontal pendek miring sedikit ke bawah kanan.",
      "[ピ] 2. Tarik garis vertikal turun, melengkung ke kanan bawah lalu naik melengkung ke atas.",
      "[ピ] 3. Buat lingkaran kecil handakuten (゜ maru) di bagian kanan atas.",
      "[ュ] Langkah 4: Tarik garis vertikal lalu belok mendatar ke kanan.",
      "[ュ] Langkah 5: Tarik garis horizontal bawah memotong alas."
    ],
    "points": [
      {
        "num": 1,
        "x": 87,
        "y": 109
      },
      {
        "num": 2,
        "x": 87,
        "y": 109
      },
      {
        "num": 3,
        "x": 174,
        "y": 81
      },
      {
        "num": 4,
        "x": 218,
        "y": 199
      },
      {
        "num": 5,
        "x": 208,
        "y": 248
      }
    ],
    "romaji": "pyu",
    "isYoon": true,
    "components": [
      "ピ",
      "ュ"
    ]
  },
  "ピョ": {
    "strokes": 6,
    "steps": [
      "[ピ] 1. Tarik garis horizontal pendek miring sedikit ke bawah kanan.",
      "[ピ] 2. Tarik garis vertikal turun, melengkung ke kanan bawah lalu naik melengkung ke atas.",
      "[ピ] 3. Buat lingkaran kecil handakuten (゜ maru) di bagian kanan atas.",
      "[ョ] Langkah 4: Tarik garis horizontal atas lalu tekuk ke bawah.",
      "[ョ] Langkah 5: Tarik garis horizontal tengah.",
      "[ョ] Langkah 6: Tarik garis horizontal bawah."
    ],
    "points": [
      {
        "num": 1,
        "x": 87,
        "y": 109
      },
      {
        "num": 2,
        "x": 87,
        "y": 109
      },
      {
        "num": 3,
        "x": 174,
        "y": 81
      },
      {
        "num": 4,
        "x": 218,
        "y": 199
      },
      {
        "num": 5,
        "x": 218,
        "y": 221
      },
      {
        "num": 6,
        "x": 218,
        "y": 248
      }
    ],
    "romaji": "pyo",
    "isYoon": true,
    "components": [
      "ピ",
      "ョ"
    ]
  }
};

const KANA_STROKES = STROKE_DATA;

/**
 * Mengambil metadata goresan untuk karakter kana tertentu.
 * @param {string} kana 
 * @returns {object} { strokes: number, steps: string[], points: object[] }
 */
function getStrokeData(kana) {
  if (!kana) return null;
  if (STROKE_DATA[kana]) {
    return STROKE_DATA[kana];
  }
  // Fallback for multi-char or unlisted
  return {
    strokes: kana.length,
    steps: Array.from(kana).map((c, i) => `Goresan ${i + 1}: ${c}`),
    points: [{ num: 1, x: 160, y: 160 }]
  };
}

if (typeof window !== 'undefined') {
  window.STROKE_DATA = STROKE_DATA;
  window.KANA_STROKES = KANA_STROKES;
  window.getStrokeData = getStrokeData;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { STROKE_DATA, KANA_STROKES, getStrokeData };
}
