/*
  Yeh hai ek "subject" ki data file.
  Har dars ke liye neeche diya gaya template copy karke dars ki list mein
  ek naya block shamil karein.

  Har dars mein yeh cheezein ho sakti hain (sab ka hona zaroori nahi!):
    number        -> dars ka number (masalan 1, 2, 3...)
    title         -> dars ka unwan
    tafseeli      -> tafseeli notes (lamba matan) - HTML bhi chalega jaise <br>
    mukhtasar     -> mukhtasar notes (chota khulasa)
    mushkilAlfaz  -> [ {term: "لفظ", meaning: "Roman Urdu mein maani"}, ... ]
    quiz          -> [ {q: "Sawal", a: "Jawab"}, ... ]

  Agar kisi dars mein sirf tafseeli notes hi dalne hon to baaki cheezein
  (mukhtasar, mushkilAlfaz, quiz) bilkul mat likhein - woh section khud
  b khud page par nazar nahi aayega.
*/

window.DARS_DATA = window.DARS_DATA || {};

window.DARS_DATA["mustawa3-fiqh"] = {
  name: "الفقہ — الوجیز فی فقہ السنۃ",

  dars: [
    {
      number: 1,
      title: "Muqaddimah ki Ahmiyat aur Fiqh ki Fazeelat",
      tafseeli: "Kisi bhi kitaab ko samajhne ke liye sab se pehle uska muqaddimah aur fehrist parhni chahiye. Musannif muqaddimah kitaab mukammal karne ke baad likhta hai taake apne kaam ka khulasa bayan kar sake. Ilm-e-Fiqh ko afzal aur ashraf uloom kaha gaya kyunke is ke zariye ibadat ki durustagi (سحۃ العبادۃ) hasil hoti hai. Bande ki najaat do cheezon par munhasir hai: Tauheed ki sehat wa salamati, aur ibadaton ka shirk wa bid'ah se paak hona.",
      mukhtasar: "Kitaab khareedte waqt pehle muqaddimah wa fehrist dekhein. Fiqh afzal-ul-uloom hai kyunke is se ibadat durust hoti hai. Najaat ka daromadaar Tauheed ki sehat aur bid'ah se paaki par hai.",
      mushkilAlfaz: [
        { term: "مقدمہ", meaning: "Kitaab ke shuru mein likha gaya taarufi hissa" },
        { term: "توحید", meaning: "Allah ki wahdaniyat ka iqrar" },
        { term: "بدعت", meaning: "Deen mein nayi baat ijaad karna" }
      ],
      quiz: [
        { q: "Kitaab khareedte waqt sab se pehle kya parhna chahiye?", a: "Kitaab ka muqaddimah aur fehrist." },
        { q: "Ilm-e-Fiqh ko afzal kyun kaha gaya?", a: "Kyunke is se ibadat ki durustagi hasil hoti hai." }
      ]
    },
    {
      number: 2,
      title: "Kitab-ul-Tahaarah ka Aaghaz — sirf Tafseeli Notes ki misaal",
      tafseeli: "Yeh dars sirf is baat ki misaal ke taur par hai ke agar aap kisi dars mein sirf tafseeli notes hi shamil karna chahein to mumkin hai. Neeche mukhtasar, mushkilAlfaz aur quiz bilkul shamil nahi kiye gaye, is liye page par sirf 'Tafseeli Notes' ka section nazar aayega."
    }
  ]
};
