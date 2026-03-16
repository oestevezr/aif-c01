/**
 * Main application logic — router, quiz engine, timer, DOM rendering.
 */
(function() {
  'use strict';

  // ============================================================
  // SERVICE WORKER REGISTRATION
  // ============================================================
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').catch(() => {});
  }

  // ============================================================
  // UTILITIES
  // ============================================================
  function qs(sel, ctx) { return (ctx || document).querySelector(sel); }
  function qsa(sel, ctx) { return [...(ctx || document).querySelectorAll(sel)]; }

  function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function domainClass(d) { return 'd' + d; }

  function domainBadgeText(d) { return 'D' + d; }

  function show(id) {
    qsa('.screen').forEach(s => s.classList.remove('active'));
    const el = document.getElementById(id);
    if (el) { el.classList.add('active'); el.classList.remove('hidden'); }
    qsa('.screen').forEach(s => { if (s !== el) s.classList.add('hidden'); });
  }

  function showModal(id) { document.getElementById(id).classList.remove('hidden'); }
  function hideModal(id) { document.getElementById(id).classList.add('hidden'); }

  // Build question lookup map
  const Q_MAP = {};
  QUESTIONS.forEach(q => { Q_MAP[q.id] = q; });

  // ============================================================
  // SESSION STATE
  // ============================================================
  let session = null;      // current in-progress session
  let timerInterval = null;
  let elapsedSeconds = 0;
  let visHideTime = null;
  let currentQuestion = null;

  // ============================================================
  // HOME SCREEN
  // ============================================================
  function initHome() {
    const sess = Stats.loadSession();
    if (sess && sess.questionIds && sess.currentIndex < sess.questionIds.length) {
      session = sess;
      qs('#resume-card').classList.remove('hidden');
      const remaining = sess.questionIds.length - sess.currentIndex;
      const modeLabel = { practice: 'Práctica', domain: 'Por Dominio', missed: 'Falladas', timed: 'Simulacro' }[sess.mode] || sess.mode;
      qs('#resume-info').textContent = `${modeLabel} · ${remaining} preguntas restantes`;
    } else {
      Stats.clearSession();
      qs('#resume-card').classList.add('hidden');
    }
  }

  qs('#btn-resume').addEventListener('click', () => {
    show('screen-quiz');
    renderQuestion(session.currentIndex);
    if (session.timeLimit !== null) startTimer();
  });

  qs('#btn-discard').addEventListener('click', () => {
    Stats.clearSession();
    session = null;
    qs('#resume-card').classList.add('hidden');
  });

  qs('#mode-all').addEventListener('click', () => startSession('practice', null));
  qs('#mode-missed').addEventListener('click', () => {
    const ids = Stats.getMissedIds();
    if (ids.length === 0) {
      alert('¡No tienes preguntas falladas aún! Practica primero.');
      return;
    }
    startSessionWithIds('missed', ids);
  });
  qs('#mode-timed').addEventListener('click', () => startSession('timed', null));

  qs('#mode-domain').addEventListener('click', () => showModal('domain-modal'));
  qs('#btn-domain-cancel').addEventListener('click', () => hideModal('domain-modal'));
  qsa('.domain-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      hideModal('domain-modal');
      startSession('domain', parseInt(btn.dataset.domain));
    });
  });

  qs('#btn-go-stats').addEventListener('click', () => {
    renderStats();
    show('screen-stats');
  });

  // ============================================================
  // START SESSION
  // ============================================================
  function startSession(mode, domainFilter) {
    let pool = domainFilter
      ? QUESTIONS.filter(q => q.domain === domainFilter)
      : [...QUESTIONS];
    pool = shuffle(pool);
    if (mode === 'timed') pool = pool.slice(0, 65);
    const ids = pool.map(q => q.id);
    startSessionWithIds(mode, ids);
  }

  function startSessionWithIds(mode, ids) {
    session = {
      mode,
      questionIds: ids,
      currentIndex: 0,
      answers: {},
      startTime: Date.now(),
      timeLimit: mode === 'timed' ? 5400 : null
    };
    elapsedSeconds = 0;
    Stats.saveSession(session);
    show('screen-quiz');
    renderQuestion(0);
    if (session.timeLimit !== null) startTimer();
  }

  // ============================================================
  // QUIZ SCREEN
  // ============================================================
  function renderQuestion(index) {
    if (index >= session.questionIds.length) {
      endSession();
      return;
    }
    session.currentIndex = index;
    Stats.saveSession(session);

    const qId = session.questionIds[index];
    currentQuestion = Q_MAP[qId];
    if (!currentQuestion) { renderQuestion(index + 1); return; }

    const total = session.questionIds.length;
    const pct = Math.round(index / total * 100);

    // top bar
    const badge = qs('#quiz-domain-badge');
    badge.textContent = domainBadgeText(currentQuestion.domain);
    badge.className = 'dbadge ' + domainClass(currentQuestion.domain);
    qs('#quiz-progress').textContent = `${index + 1} / ${total}`;
    qs('#progress-bar').style.width = pct + '%';
    qs('#progress-bar').setAttribute('aria-valuenow', pct);

    // subdomain
    qs('#quiz-subdomain').textContent =
      `${currentQuestion.subdomain} · ${Stats.SUBDOMAIN_NAMES[currentQuestion.subdomain] || ''}`;

    // flag button
    const flagBtn = qs('#btn-flag');
    flagBtn.classList.toggle('flagged', Stats.isFlagged(qId));

    // question text
    qs('#question-text').textContent = currentQuestion.question;

    // options
    const grid = qs('#options-grid');
    grid.innerHTML = '';
    currentQuestion.options.forEach(opt => {
      const btn = document.createElement('button');
      btn.className = 'option-btn';
      btn.dataset.key = opt.key;
      btn.innerHTML = `<span class="key">${opt.key}.</span><span>${opt.text}</span>`;
      btn.addEventListener('click', () => submitAnswer(opt.key));
      grid.appendChild(btn);
    });
  }

  function submitAnswer(selectedKey) {
    if (!currentQuestion) return;
    const isCorrect = selectedKey === currentQuestion.answer;
    session.answers[currentQuestion.id] = selectedKey;
    Stats.saveSession(session);
    Stats.recordAnswer(currentQuestion.id, currentQuestion.domain, currentQuestion.subdomain, isCorrect);

    // Disable all option buttons
    qsa('.option-btn', qs('#options-grid')).forEach(btn => {
      btn.removeEventListener('click', submitAnswer);
      btn.style.pointerEvents = 'none';
    });

    showExplanation(selectedKey, isCorrect);
  }

  qs('#btn-flag').addEventListener('click', () => {
    if (!currentQuestion) return;
    const flagged = Stats.toggleFlag(currentQuestion.id);
    qs('#btn-flag').classList.toggle('flagged', flagged);
  });

  qs('#btn-quiz-back').addEventListener('click', () => {
    stopTimer();
    if (confirm('¿Abandonar la sesión? El progreso hasta aquí se guardará.')) {
      show('screen-home');
      initHome();
    } else {
      if (session?.timeLimit !== null) startTimer();
    }
  });

  // ============================================================
  // EXPLANATION SCREEN
  // ============================================================
  function showExplanation(selectedKey, isCorrect) {
    // result badge
    const badge = qs('#explain-result-badge');
    badge.textContent = isCorrect ? '✓ Correcto' : '✗ Incorrecto';
    badge.className = 'result-badge ' + (isCorrect ? 'correct' : 'incorrect');

    // service tag
    qs('#explain-service-tag').textContent = currentQuestion.service || '';

    // re-render options with highlights
    const grid = qs('#explain-options');
    grid.innerHTML = '';
    currentQuestion.options.forEach(opt => {
      const btn = document.createElement('button');
      btn.className = 'option-btn';
      if (opt.key === currentQuestion.answer) btn.classList.add('correct');
      else if (opt.key === selectedKey) btn.classList.add('incorrect');
      btn.innerHTML = `<span class="key">${opt.key}.</span><span>${opt.text}</span>`;
      grid.appendChild(btn);
    });

    // explanation text
    qs('#explain-text').textContent = currentQuestion.explanation;

    show('screen-explain');
  }

  qs('#btn-next').addEventListener('click', () => {
    show('screen-quiz');
    renderQuestion(session.currentIndex + 1);
  });

  // ============================================================
  // TIMER
  // ============================================================
  function startTimer() {
    stopTimer();
    const timerEl = qs('#quiz-timer');
    timerEl.classList.remove('hidden');
    updateTimerDisplay();
    timerInterval = setInterval(() => {
      elapsedSeconds++;
      updateTimerDisplay();
      if (session.timeLimit && elapsedSeconds >= session.timeLimit) {
        stopTimer();
        endSession();
      }
    }, 1000);
  }

  function stopTimer() {
    if (timerInterval) { clearInterval(timerInterval); timerInterval = null; }
  }

  function updateTimerDisplay() {
    if (!session || session.timeLimit === null) return;
    const remaining = Math.max(0, session.timeLimit - elapsedSeconds);
    const m = Math.floor(remaining / 60);
    const s = remaining % 60;
    const timerEl = qs('#quiz-timer');
    timerEl.textContent = `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
    timerEl.classList.toggle('urgent', remaining <= 300);
  }

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      visHideTime = Date.now();
      stopTimer();
    } else if (visHideTime !== null && session?.timeLimit !== null) {
      elapsedSeconds += Math.floor((Date.now() - visHideTime) / 1000);
      visHideTime = null;
      startTimer();
    }
  });

  // ============================================================
  // END SESSION
  // ============================================================
  function endSession() {
    stopTimer();
    Stats.updateLastSession();
    const total = Object.keys(session.answers).length;
    const correct = Object.entries(session.answers)
      .filter(([id, key]) => Q_MAP[id]?.answer === key).length;
    const pct = total === 0 ? 0 : Math.round(correct / total * 100);

    Stats.clearSession();
    session = null;

    qs('#end-icon').textContent = pct >= 70 ? '🎉' : pct >= 50 ? '📚' : '💪';
    qs('#end-score').textContent = pct + '%';
    qs('#end-detail').textContent = `${correct} de ${total} correctas`;
    showModal('end-modal');
  }

  qs('#btn-end-home').addEventListener('click', () => {
    hideModal('end-modal');
    show('screen-home');
    initHome();
  });

  qs('#btn-end-stats').addEventListener('click', () => {
    hideModal('end-modal');
    renderStats();
    show('screen-stats');
  });

  // ============================================================
  // STATS SCREEN
  // ============================================================
  qs('#btn-stats-back').addEventListener('click', () => { show('screen-home'); initHome(); });

  qs('#btn-reset-stats').addEventListener('click', () => {
    if (confirm('¿Resetear todas las estadísticas? Esta acción no se puede deshacer.')) {
      Stats.reset();
      renderStats();
    }
  });

  function renderStats() {
    const s = Stats.load();
    const total = s.totalAnswered;
    const correct = s.totalCorrect;
    const pct = total === 0 ? 0 : Math.round(correct / total * 100);

    // Overall numbers
    qs('#stat-total').textContent = total;
    qs('#stat-correct').textContent = correct;
    qs('#stat-streak').textContent = s.streakCurrent;
    qs('#stat-best-streak').textContent = s.streakBest;
    qs('#donut-pct').textContent = pct + '%';
    drawDonut(pct);

    // Weakest domain
    const weakest = Stats.getWeakestDomain();
    if (weakest) {
      const wacc = Stats.getDomainAccuracy(weakest);
      qs('#weakest-card').classList.remove('hidden');
      qs('#weakest-name').textContent = Stats.DOMAIN_NAMES[weakest];
      qs('#weakest-pct').textContent = wacc.pct + '%';
    } else {
      qs('#weakest-card').classList.add('hidden');
    }

    // Per-domain bars
    const list = qs('#domains-list');
    list.innerHTML = '';
    for (let d = 1; d <= 5; d++) {
      const acc = Stats.getDomainAccuracy(d);
      const domData = s.domains[d];
      const row = document.createElement('div');
      row.className = 'domain-stat-row';
      row.innerHTML = `
        <div class="domain-stat-header" data-domain="${d}">
          <span class="dbadge ${domainClass(d)}">${domainBadgeText(d)}</span>
          <span class="domain-stat-label">${Stats.DOMAIN_NAMES[d]}</span>
          <span class="domain-stat-pct">${acc.pct}%</span>
        </div>
        <div class="domain-stat-bar-bg">
          <div class="domain-stat-bar ${domainClass(d)}" style="width:${acc.pct}%;background:var(--c-${domainClass(d)})"></div>
        </div>
        <div class="domain-stat-count">${acc.correct} / ${acc.answered} correctas</div>
        <div class="subdomains-list hidden" id="sub-list-${d}"></div>
      `;
      list.appendChild(row);

      // Build subdomain list
      const subList = row.querySelector(`#sub-list-${d}`);
      const subs = domData.subdomains || {};
      Object.entries(subs).forEach(([sdKey, sdData]) => {
        const sdPct = sdData.a === 0 ? 0 : Math.round(sdData.c / sdData.a * 100);
        const sdRow = document.createElement('div');
        sdRow.className = 'subdomain-row';
        sdRow.innerHTML = `
          <div class="subdomain-header">
            <span class="subdomain-label">${sdKey} — ${Stats.SUBDOMAIN_NAMES[sdKey] || sdKey}</span>
            <span class="subdomain-pct">${sdPct}%</span>
          </div>
          <div class="subdomain-bar-bg">
            <div class="subdomain-bar ${domainClass(d)}" style="width:${sdPct}%;background:var(--c-${domainClass(d)})"></div>
          </div>
        `;
        subList.appendChild(sdRow);
      });

      // Toggle subdomain accordion
      row.querySelector('.domain-stat-header').addEventListener('click', () => {
        subList.classList.toggle('hidden');
      });
    }
  }

  function drawDonut(pct) {
    const canvas = qs('#donut-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const W = canvas.width, H = canvas.height;
    const cx = W/2, cy = H/2, r = W/2 - 8, lw = 14;
    ctx.clearRect(0, 0, W, H);

    // background ring
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, 2 * Math.PI);
    ctx.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue('--c-border') || '#e5e7eb';
    ctx.lineWidth = lw;
    ctx.stroke();

    // colored arc
    if (pct > 0) {
      const angle = (pct / 100) * 2 * Math.PI;
      ctx.beginPath();
      ctx.arc(cx, cy, r, -Math.PI / 2, -Math.PI / 2 + angle);
      const color = pct >= 70 ? '#27AE60' : pct >= 50 ? '#FF9900' : '#E74C3C';
      ctx.strokeStyle = color;
      ctx.lineWidth = lw;
      ctx.lineCap = 'round';
      ctx.stroke();
    }
  }

  // ============================================================
  // REVIEW SCREEN
  // ============================================================
  qs('#btn-quiz-back') && qs('#btn-quiz-back').addEventListener('click', () => {});

  let currentReviewTab = 'flagged';

  function renderReview(tab) {
    currentReviewTab = tab;
    qsa('.review-tab').forEach(t => t.classList.toggle('active', t.dataset.tab === tab));

    const ids = tab === 'flagged' ? Stats.getFlaggedIds() : Stats.getMissedIds();
    const list = qs('#review-list');
    const empty = qs('#review-empty');
    list.innerHTML = '';

    if (ids.length === 0) {
      empty.classList.remove('hidden');
      return;
    }
    empty.classList.add('hidden');

    ids.forEach(id => {
      const q = Q_MAP[id];
      if (!q) return;
      const card = document.createElement('div');
      card.className = 'review-card';
      card.innerHTML = `
        <span class="dbadge ${domainClass(q.domain)}">${domainBadgeText(q.domain)}</span>
        <div class="review-card-info">
          <div class="review-card-q">${q.question.slice(0, 80)}${q.question.length > 80 ? '…' : ''}</div>
          <div class="review-card-meta">${q.subdomain} · ${q.service || ''}</div>
        </div>
        <span class="review-card-result">${tab === 'flagged' ? '🔖' : '❌'}</span>
      `;
      card.addEventListener('click', () => {
        startSessionWithIds('review', shuffle(ids));
      });
      list.appendChild(card);
    });
  }

  qsa('.review-tab').forEach(tab => {
    tab.addEventListener('click', () => renderReview(tab.dataset.tab));
  });

  // Nav to review from home is not directly wired, add via a global function
  window.goToReview = function() {
    renderReview('flagged');
    show('screen-review');
  };

  qs('#btn-review-back').addEventListener('click', () => {
    show('screen-home');
    initHome();
  });

  // ============================================================
  // INIT
  // ============================================================
  function init() {
    show('screen-home');
    initHome();
  }

  init();
})();
