function esc(s){
  const d = document.createElement('div');
  d.textContent = s == null ? '' : String(s);
  return d.innerHTML;
}

function getSubjectData(subjectDef){
  return (window.DARS_DATA && window.DARS_DATA[subjectDef.dataKey]) || { dars: [] };
}

function darsCount(subjectDef){
  return (getSubjectData(subjectDef).dars || []).length;
}

function findMustawa(mid){
  return window.MUSTAWA_INDEX.find(m => m.id === mid);
}
function findFasl(mid, fid){
  const m = findMustawa(mid);
  if(!m) return null;
  return m.fusool.find(f => f.id === fid);
}
function findSubject(mid, sid){
  const m = findMustawa(mid);
  if(!m) return null;
  for(const f of m.fusool){
    const s = f.subjects.find(x => x.id === sid);
    if(s) return s;
  }
  return null;
}
function findFaslOfSubject(mid, sid){
  const m = findMustawa(mid);
  if(!m) return null;
  return m.fusool.find(f => f.subjects.some(x => x.id === sid));
}
function findDars(mid, sid, dnum){
  const s = findSubject(mid, sid);
  if(!s) return null;
  const data = getSubjectData(s);
  return (data.dars || []).find(d => String(d.number) === String(dnum));
}

function setApp(html){
  document.getElementById('app').innerHTML = html;
  window.scrollTo(0,0);
  initReveal();
}

/* ---------- scroll reveal ---------- */
function initReveal(){
  const els = document.querySelectorAll('.reveal');
  if(!('IntersectionObserver' in window)){
    els.forEach(el => el.classList.add('in'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  els.forEach(el => io.observe(el));
}

function crumbLink(label, hash){
  return `<a onclick="location.hash='${hash}'">${esc(label)}</a>`;
}

/* ---------- HOME ---------- */
function renderHome(){
  document.getElementById('crumbs').innerHTML = crumbLink('Home', '');
  const cards = window.MUSTAWA_INDEX.map((m, i) => {
    const subjectTotal = m.fusool.reduce((n, f) => n + f.subjects.length, 0);
    return `
    <div class="card mustawa-card reveal" style="--accent:${m.color}; --d:${i * 80}ms" onclick="location.hash='#/m/${m.id}'">
      <span class="petal-corner" aria-hidden="true">${petalSVG(m.color)}</span>
      <span class="level-badge">${esc(m.label)}</span>
      <h2>${esc(m.label)}</h2>
      <p>${m.fusool.length} Fusool &middot; ${subjectTotal} Mazameen</p>
    </div>
  `}).join('');
  setApp(`<div class="grid">${cards}</div>`);
}

/* ---------- MUSTAWA (grouped by fasl) ---------- */
function renderMustawa(mid){
  const m = findMustawa(mid);
  if(!m){ renderHome(); return; }
  document.getElementById('crumbs').innerHTML =
    `${crumbLink('Home', '')} / ${esc(m.label)}`;

  const faslBlocks = m.fusool.map((f, fi) => {
    const cards = f.subjects.map((s, i) => {
      const count = darsCount(s);
      const pill = count > 0
        ? `<span class="dars-pill">${count} Dars</span>`
        : `<span class="dars-pill empty">Abhi Shamil Nahi</span>`;
      return `
      <div class="card subject-card reveal" style="--accent:${m.color}; --d:${i * 60}ms" onclick="location.hash='#/m/${m.id}/s/${s.id}'">
        <div class="subject-card-top">
          <h3>${esc(s.name)}</h3>
          ${pill}
        </div>
        <p class="subject-book">${s.book || ''}</p>
        <p class="subject-meta">${esc(s.teacher || '')} ${s.time ? '&middot; ' + esc(s.time) : ''}</p>
      </div>`;
    }).join('');

    return `
      <section class="fasl-block reveal" style="--d:${fi * 100}ms">
        <div class="fasl-heading" style="--accent:${m.color}">
          <span class="fasl-line"></span>
          <h2>${esc(f.label)}</h2>
          <span class="fasl-line"></span>
        </div>
        <div class="grid subject-grid">${cards}</div>
      </section>`;
  }).join('');

  setApp(`<div class="mustawa-page" style="--accent:${m.color}">${faslBlocks}</div>`);
}

/* ---------- SUBJECT ---------- */
function renderSubject(mid, sid){
  const m = findMustawa(mid);
  const s = findSubject(mid, sid);
  const f = findFaslOfSubject(mid, sid);
  if(!m || !s){ renderHome(); return; }
  const data = getSubjectData(s);
  const darsArr = (data.dars || []).slice().sort((a,b)=>Number(a.number)-Number(b.number));

  document.getElementById('crumbs').innerHTML =
    `${crumbLink('Home', '')} / ${crumbLink(m.label, '#/m/' + m.id)} / ${esc(s.name)}`;

  let linkButtons = '';
  if(s.playlist){
    linkButtons += `<a class="link-btn" href="${esc(s.playlist)}" target="_blank" rel="noopener">▶ YouTube Playlist</a>`;
  }
  if(s.pdf){
    linkButtons += `<a class="link-btn" href="${esc(s.pdf)}" target="_blank" rel="noopener">📖 Text Book (PDF)</a>`;
  }

  let listHtml = '';
  if(darsArr.length === 0){
    listHtml = `<div class="empty-msg reveal"><span class="empty-flower">${flowerSVG(m.color)}</span><h2>Is subject mein abhi koi dars shamil nahi hua</h2><p>data/${esc(s.dataKey)}.js file mein dars shamil karein.</p></div>`;
  }else{
    listHtml = `<div class="dars-list">` + darsArr.map((d, i) => `
      <div class="dars-row reveal" style="--d:${i * 45}ms; --accent:${m.color}" onclick="location.hash='#/m/${m.id}/s/${s.id}/d/${d.number}'">
        <span class="dars-num">${esc(d.number)}</span>
        <h3>${esc(d.title || 'Bila Unwan')}</h3>
      </div>
    `).join('') + `</div>`;
  }

  const hasAnyQuiz = darsArr.some(d => (d.quiz || []).length > 0);
  const finalQuizBtn = hasAnyQuiz
    ? `<button class="final-quiz-btn" style="--accent:${m.color}" onclick="location.hash='#/m/${m.id}/s/${s.id}/quiz'">Tamam Dars ka Quiz</button>`
    : '';

  setApp(`
    <div class="subject-header reveal" style="--accent:${m.color}">
      <span class="fasl-tag">${f ? esc(f.label) : ''}</span>
      <h1>${esc(s.name)}</h1>
      <p class="subject-book big">${s.book || ''}</p>
      <p class="subject-meta">${esc(s.teacher || '')} ${s.time ? '&middot; ' + esc(s.time) : ''} &middot; ${darsArr.length} Dars Upload</p>
      <div class="link-buttons">${linkButtons}</div>
    </div>
    ${listHtml}
    ${finalQuizBtn}
  `);
}

/* ---------- DARS ---------- */
function renderDars(mid, sid, dnum){
  const m = findMustawa(mid);
  const s = findSubject(mid, sid);
  const d = findDars(mid, sid, dnum);
  if(!m || !s || !d){ renderSubject(mid, sid); return; }

  document.getElementById('crumbs').innerHTML =
    `${crumbLink('Home', '')} / ${crumbLink(m.label, '#/m/' + m.id)} / ${crumbLink(s.name, '#/m/' + m.id + '/s/' + s.id)} / Dars ${esc(d.number)}`;

  let sections = '';

  if(d.tafseeli){
    sections += `
      <div class="section reveal" style="--accent:${m.color}">
        <span class="section-label">Tafseeli Notes</span>
        <p>${d.tafseeli}</p>
      </div>`;
  }
  if(d.mukhtasar){
    sections += `
      <div class="section reveal" style="--accent:${m.color}">
        <span class="section-label">Mukhtasar Notes</span>
        <p>${d.mukhtasar}</p>
      </div>`;
  }
  if(d.mushkilAlfaz && d.mushkilAlfaz.length){
    sections += `
      <div class="section reveal" style="--accent:${m.color}">
        <span class="section-label">Mushkil Alfaz</span>
        ${d.mushkilAlfaz.map(v => `<div class="vocab-row"><div class="vocab-term">${esc(v.term)}</div><div class="vocab-mean">${esc(v.meaning)}</div></div>`).join('')}
      </div>`;
  }
  if(d.quiz && d.quiz.length){
    sections += `
      <div class="section reveal" style="--accent:${m.color}">
        <span class="section-label">Quiz</span>
        ${d.quiz.map(x => `<div class="qa-item"><p class="qa-q">${esc(x.q)}</p><p class="qa-a">${esc(x.a)}</p></div>`).join('')}
      </div>`;
  }
  if(!sections){
    sections = `<div class="empty-msg reveal"><h2>Is dars mein abhi koi notes shamil nahi</h2></div>`;
  }

  setApp(`
    <div class="dars-page">
      <h1 class="reveal" style="--accent:${m.color}">Dars ${esc(d.number)} — ${esc(d.title || '')}</h1>
      ${sections}
    </div>
  `);
}

/* ---------- FINAL QUIZ ---------- */
function renderFinalQuiz(mid, sid){
  const m = findMustawa(mid);
  const s = findSubject(mid, sid);
  if(!m || !s){ renderHome(); return; }
  const data = getSubjectData(s);
  const darsArr = (data.dars || []).slice().sort((a,b)=>Number(a.number)-Number(b.number));

  document.getElementById('crumbs').innerHTML =
    `${crumbLink('Home', '')} / ${crumbLink(m.label, '#/m/' + m.id)} / ${crumbLink(s.name, '#/m/' + m.id + '/s/' + s.id)} / Tamam Dars ka Quiz`;

  let items = '';
  darsArr.forEach(d => {
    if(d.quiz && d.quiz.length){
      items += d.quiz.map(x => `
        <div class="qa-item">
          <p class="qa-q">(Dars ${esc(d.number)}) ${esc(x.q)}</p>
          <p class="qa-a">${esc(x.a)}</p>
        </div>`).join('');
    }
  });
  if(!items){
    items = `<div class="empty-msg"><h2>Abhi koi quiz shamil nahi</h2></div>`;
  }

  setApp(`
    <div class="dars-page">
      <h1 class="reveal" style="--accent:${m.color}">${esc(s.name)} — Tamam Dars ka Quiz</h1>
      <div class="section reveal" style="--accent:${m.color}">${items}</div>
    </div>
  `);
}

/* ---------- decorative inline SVGs ---------- */
function petalSVG(color){
  return `<svg viewBox="0 0 60 60" width="46" height="46" fill="none"><path d="M30 6C34 16 44 18 52 22C44 26 34 28 30 38C26 28 16 26 8 22C16 18 26 16 30 6Z" fill="${color}" opacity="0.16"/></svg>`;
}
function flowerSVG(color){
  return `<svg viewBox="0 0 80 80" width="64" height="64" fill="none">
    <g opacity="0.5">
      <ellipse cx="40" cy="24" rx="10" ry="16" fill="${color}" opacity="0.25"/>
      <ellipse cx="40" cy="56" rx="10" ry="16" fill="${color}" opacity="0.25"/>
      <ellipse cx="24" cy="40" rx="16" ry="10" fill="${color}" opacity="0.25"/>
      <ellipse cx="56" cy="40" rx="16" ry="10" fill="${color}" opacity="0.25"/>
      <circle cx="40" cy="40" r="9" fill="${color}" opacity="0.4"/>
    </g>
  </svg>`;
}

/* ---------- ROUTER ---------- */
function router(){
  const hash = location.hash.replace(/^#\/?/, '');
  const parts = hash.split('/').filter(Boolean);

  if(parts.length === 0){
    renderHome();
  }else if(parts[0] === 'm' && parts.length === 2){
    renderMustawa(parts[1]);
  }else if(parts[0] === 'm' && parts.length === 4 && parts[2] === 's'){
    renderSubject(parts[1], parts[3]);
  }else if(parts[0] === 'm' && parts.length === 5 && parts[2] === 's' && parts[4] === 'quiz'){
    renderFinalQuiz(parts[1], parts[3]);
  }else if(parts[0] === 'm' && parts.length === 6 && parts[2] === 's' && parts[4] === 'd'){
    renderDars(parts[1], parts[3], parts[5]);
  }else{
    renderHome();
  }
}

window.addEventListener('hashchange', router);
window.addEventListener('DOMContentLoaded', router);
