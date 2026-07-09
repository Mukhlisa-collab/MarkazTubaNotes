# Markaz Tuba — Notes Website

## Folder ka Dhaancha

```
markaz-site/
 ├── index.html              ← Mukhya page (isse chhedne ki zaroorat nahi)
 ├── style.css                ← Rang aur design
 ├── script.js                ← Page dikhane ka logic (isse chhedne ki zaroorat nahi)
 ├── assets/
 │    └── logo.png            ← Markaz Tuba ka logo
 └── data/
      ├── subjects-index.js   ← Mustawa > Fasl > Mazameen ki list
      └── mustawa3-fiqh.js    ← Ek mazmoon ke dars (namoona / sample)
```

---

## Roz kya karna hai? (sab se zaroori hissa)

1. `data/` folder mein jis mazmoon ka dars shamil karna hai, uski file kholein
   (masalan `mustawa3-fiqh.js`).
2. Neeche diya gaya template copy karein aur `dars: [ ... ]` ki list ke andar
   ek naya block shamil karein:

```javascript
{
  number: 5,
  title: "Dars ka unwan yahan likhein",
  tafseeli: "Tafseeli notes yahan likhein...",
  mukhtasar: "Mukhtasar notes yahan likhein...",
  mushkilAlfaz: [
    { term: "لفظ", meaning: "Roman Urdu mein maani" },
    { term: "لفظ", meaning: "Roman Urdu mein maani" }
  ],
  quiz: [
    { q: "Sawal", a: "Jawab" },
    { q: "Sawal", a: "Jawab" }
  ]
},
```

3. **Agar kisi dars mein sirf tafseeli notes hi chahiye** — bas `tafseeli`
   rakhein, baaki lines (`mukhtasar`, `mushkilAlfaz`, `quiz`) poori hata dein:

```javascript
{
  number: 6,
  title: "Dars ka unwan",
  tafseeli: "Sirf tafseeli notes yahan..."
},
```

   Aisa karne se page par sirf "Tafseeli Notes" ka section nazar aayega,
   baaki section sirey se nazar hi nahi aayenge.
   Yani aap kisi bhi dars mein jitne chahein section rakh sakti hain —
   1 se 4 tak, jaisi zaroorat ho.

4. File Save karein, phir neeche diye gaye tareeqe se GitHub par push kar dein.

**Note:** Matan mein agar double quotation (`"`) use karni ho to uske pehle
backslash lagayein, jaise: `\"misaal\"`.
Nayi line ke liye matan ke andar `<br><br>` use kar sakti hain.

---

## Naya Mazmoon Shamil Karna

`data/subjects-index.js` kholein, mutalliqa mustawa aur fasl ki `subjects`
list mein ek nayi line shamil karein:

```javascript
{ id: "naya-mazmoon", name: "Naye mazmoon ka naam", book: "کتاب کا نام", teacher: "Ustaza ka naam", time: "9:30 - 10:15", dataKey: "m-naya-mazmoon" },
```

Phir `data/` folder mein isi `dataKey` ke naam se ek nayi file banayein
(jaise `m-naya-mazmoon.js`) — `mustawa3-fiqh.js` ko copy kar ke uska naam
aur mawaad badal dein.

`index.html` ke aakhir mein (jahan pehle se data files ki lines hain)
wahan nayi file ki ek line shamil karein:

```html
<script src="data/m-naya-mazmoon.js"></script>
```

---

## Playlist aur PDF (Text Book) Link Shamil Karna

`data/subjects-index.js` mein mutalliqa mazmoon ke object mein yeh do
lines shamil karein:

```javascript
playlist: "https://youtube.com/playlist?list=...",
pdf: "https://drive.google.com/....",
```

Agar yeh khali rahengi to button khud b khud page par nazar nahi aayega.
Dars count (kitne dars upload ho chuke hain) khud b khud data se calculate
ho kar dikh jaata hai — kuch alag se likhne ki zaroorat nahi.

---

## GitHub Pages par Dalna (Muft)

1. [github.com](https://github.com) par account banayein (agar nahi hai).
2. Ek nayi **repository** banayein (naam kuch bhi rakh sakti hain,
   masalan `markaz-tuba-notes`).
3. Is poore `markaz-site` folder ke tamam files us repository mein
   upload kar dein (GitHub Desktop app se, ya VS Code ke Source Control
   se, ya website par "Add file → Upload files" se).
4. Repository ki **Settings → Pages** mein jayein, Source mein "main"
   branch select karein, Save karein.
5. 1-2 minute mein aapki site is address par live ho jayegi:
   `https://aap-ka-username.github.io/markaz-tuba-notes/`

Is ke baad roz sirf yehi karna hai: data file mein naya dars shamil
karein → Commit → Push. Site khud b khud update ho jayegi.

---

## Local Taur Par Dekhna

GitHub par dalne se pehle apne computer par bhi dekh sakti hain —
bas `index.html` par double click karein, yeh browser mein khul jayegi.
