/*
  Yeh file batati hai har MUSTAWA (level) mein kitne FUSOOL (chapters/semesters)
  hain aur har fasl mein kaunse MAZAMEEN (subjects) parhaye jaate hain.

  Naya subject shamil karne ke liye neeche subjects ki list mein ek nayi
  line add karein.

  Har subject ke liye:
    id       -> sirf English huroof/numbers, bina space ke (URL mein use hoga)
    name     -> mazmoon ka naam (Roman Urdu / Arabic)
    book     -> is subject ki kitaab ka naam
    teacher  -> ustaza ka naam
    time     -> class ka waqt
    dataKey  -> isi naam ki ek data file data/ folder mein honi chahiye
                (masalan dataKey: "mustawa3-fiqh" -> data/mustawa3-fiqh.js)
    playlist -> (optional) YouTube playlist ka link
    pdf      -> (optional) Text Book ki PDF ka link
*/

window.MUSTAWA_INDEX = [
  {
    id: "mustawa1",
    label: "Mustawa Awwal",
    color: "#B5495B",
    fusool: [
      {
        id: "fasl1",
        label: "Fasl Awwal",
        subjects: [
          { id: "aqeedah", name: "Aqeedah", book: "دروس المهمة لعامة الأمة", teacher: "Shaikh Abu Huraira", time: "9:30 - 10:15", dataKey: "m1-f1-aqeedah" },
          { id: "nahw", name: "Nahw", book: "أمين النحو", teacher: "Shaikh Sadiq", time: "10:15 - 11:00", dataKey: "m1-f1-nahw" },
          { id: "quran", name: "Hifz Qur'an, Tarjuma, Tajweed", book: "أحسن البيان، معرفة التجويد", teacher: "Shaikh Abdul Mubeen", time: "11:10 - 11:50", dataKey: "m1-f1-quran" },
          { id: "sarf", name: "Sarf", book: "أمين الصرف", teacher: "Shaikh Aman Allah", time: "11:50 - 12:30", dataKey: "m1-f1-sarf" }
        ]
      },
      {
        id: "fasl2",
        label: "Fasl Thani",
        subjects: [
          { id: "arabi", name: "Arabi Adab", book: "دروس اللغة العربية جلد اول", teacher: "Shaikh Sadiq", time: "9:30 - 10:15", dataKey: "m1-f2-arabi" },
          { id: "fiqh", name: "Fiqh", book: "آسان فقہ", teacher: "Shaikh Abu Huraira", time: "10:15 - 11:00", dataKey: "m1-f2-fiqh" },
          { id: "hadith", name: "Hadith, Hifz Hadith, Usool al-Hadith", book: "بلوغ المرام", teacher: "Shaikh Abdul Mubeen", time: "11:10 - 11:50", dataKey: "m1-f2-hadith" },
          { id: "seerah", name: "Seerat wa Tareekh", book: "رحمت عالم", teacher: "Shaikh Mutee ur Rahman", time: "11:50 - 12:30", dataKey: "m1-f2-seerah" }
        ]
      }
    ]
  },
  {
    id: "mustawa2",
    label: "Mustawa Dovum",
    color: "#7A5FA0",
    fusool: [
      {
        id: "fasl1",
        label: "Fasl Awwal",
        subjects: [
          { id: "sarf", name: "Sarf", book: "کتاب الصرف", teacher: "Shaikh Sadiq", time: "9:30 - 10:15", dataKey: "m2-f1-sarf" },
          { id: "nahw", name: "Nahw", book: "کتاب النحو", teacher: "Shaikh Aman Allah", time: "10:15 - 11:00", dataKey: "m2-f1-nahw" },
          { id: "quran", name: "Hifz Qur'an, Tafsir, Tajweed", book: "أحسن البيان، آسان تجويد", teacher: "Shaikh Abu Huraira", time: "11:10 - 11:50", dataKey: "m2-f1-quran" },
          { id: "aqeedah", name: "Aqeedah", book: "أصول ثلاثة، نواقض اسلام", teacher: "Shaikh Abdul Mubeen", time: "11:50 - 12:30", dataKey: "m2-f1-aqeedah" }
        ]
      },
      {
        id: "fasl2",
        label: "Fasl Thani",
        subjects: [
          { id: "seerah", name: "Seerat wa Tareekh", book: "تجليات نبوت", teacher: "Shaikh Mutee ur Rahman", time: "9:30 - 10:15", dataKey: "m2-f2-seerah" },
          { id: "arabi", name: "Arabi Adab", book: "دروس اللغة العربية جلد ثانی", teacher: "Shaikh Sadiq", time: "10:15 - 11:00", dataKey: "m2-f2-arabi" },
          { id: "fiqh", name: "Fiqh", book: "الفقہ المیسر", teacher: "Shaikh Abu Huraira", time: "11:10 - 11:50", dataKey: "m2-f2-fiqh" },
          { id: "hadith", name: "Hadith, Hifz Hadith, Mustalah al-Hadith", book: "مشکاۃ المصابیح (جلد اول)، بہجۃ النظر", teacher: "Shaikh Abdul Mubeen", time: "11:50 - 12:30", dataKey: "m2-f2-hadith" }
        ]
      }
    ]
  },
  {
    id: "mustawa3",
    label: "Mustawa Sevum",
    color: "#0F6E56",
    fusool: [
      {
        id: "fasl1",
        label: "Fasl Awwal",
        subjects: [
          { id: "sarf", name: "Sarf", book: "علم التصریف", teacher: "Shaikh Aman Allah", time: "9:30 - 10:15", dataKey: "m3-f1-sarf" },
          { id: "quran", name: "Hifz Qur'an, Tafsir", book: "تفسیر السعدی", teacher: "Shaikh Abdul Mubeen", time: "10:15 - 11:00", dataKey: "m3-f1-quran" },
          { id: "nahw", name: "Nahw", book: "تحفۃ السنیۃ", teacher: "Shaikh Sadiq", time: "11:10 - 11:50", dataKey: "m3-f1-nahw" },
          { id: "aqeedah", name: "Aqeedah", book: "کتاب التوحید (شیخ صالح الفوزان)", teacher: "Shaikh Abu Huraira", time: "11:50 - 12:30", dataKey: "m3-f1-aqeedah" }
        ]
      },
      {
        id: "fasl2",
        label: "Fasl Thani",
        subjects: [
          { id: "fiqh", name: "Fiqh", book: "الوجیز فی فقہ السنۃ", teacher: "Shaikh Abu Huraira", time: "9:30 - 10:15", dataKey: "mustawa3-fiqh", playlist: "", pdf: "" },
          { id: "hadith", name: "Hadith, Hifz Hadith, Mustalah al-Hadith", book: "مشکاۃ المصابیح جلد دوم، اصول الحدیث", teacher: "Shaikh Abdul Mubeen", time: "11:00 - 10:15", dataKey: "m3-f2-hadith" },
          { id: "seerah", name: "Seerat wa Tareekh", book: "آئینہ ایام تاریخ", teacher: "Shaikh Mutee ur Rahman", time: "11:10 - 11:50", dataKey: "m3-f2-seerah" },
          { id: "arabi", name: "Arabi Adab", book: "دروس اللغة العربية جلد ثالث", teacher: "Shaikh Sadiq", time: "11:50 - 12:30", dataKey: "m3-f2-arabi" }
        ]
      }
    ]
  }
];

/*
  Har subject ke object mein chahein to yeh do cheezein bhi shamil kar sakti hain:
    playlist: "https://youtube.com/..."       -> YouTube playlist ka link
    pdf:      "https://drive.google.com/..."  -> Text Book ki PDF ka link (Google Drive)
  Agar na hon to button khud b khud nazar nahi aayega.
*/
