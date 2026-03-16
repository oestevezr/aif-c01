/**
 * Stats engine — reads/writes localStorage for all performance tracking.
 */
const Stats = (() => {
  const KEY_STATS   = 'aif_stats';
  const KEY_HISTORY = 'aif_history';
  const KEY_FLAGS   = 'aif_flags';
  const KEY_SESSION = 'aif_session';
  const HISTORY_CAP = 2000;
  const HISTORY_TRIM = 500;

  const DOMAIN_NAMES = {
    1: 'Fundamentos de IA y ML',
    2: 'Fundamentos de IA Generativa',
    3: 'Aplicaciones de Foundation Models',
    4: 'IA Responsable',
    5: 'Seguridad y Gobernanza'
  };

  const SUBDOMAIN_NAMES = {
    '1.1': 'Conceptos y terminología básica de IA',
    '1.2': 'Casos de uso prácticos de IA',
    '1.3': 'Ciclo de vida del desarrollo ML',
    '2.1': 'Conceptos básicos de IA generativa',
    '2.2': 'Capacidades y limitaciones de IA generativa',
    '2.3': 'Infraestructura AWS para IA generativa',
    '3.1': 'Consideraciones de diseño para FM',
    '3.2': 'Técnicas de ingeniería de prompts',
    '3.3': 'Entrenamiento y fine-tuning de FM',
    '3.4': 'Evaluación de modelos de foundation',
    '4.1': 'Desarrollo de IA responsable',
    '4.2': 'Transparencia y explicabilidad',
    '5.1': 'Seguridad de sistemas de IA',
    '5.2': 'Gobernanza y cumplimiento normativo'
  };

  function defaultStats() {
    return {
      version: 1,
      totalAnswered: 0,
      totalCorrect: 0,
      streakCurrent: 0,
      streakBest: 0,
      lastSessionDate: null,
      domains: {
        1: { answered: 0, correct: 0, subdomains: { '1.1': {a:0,c:0}, '1.2': {a:0,c:0}, '1.3': {a:0,c:0} } },
        2: { answered: 0, correct: 0, subdomains: { '2.1': {a:0,c:0}, '2.2': {a:0,c:0}, '2.3': {a:0,c:0} } },
        3: { answered: 0, correct: 0, subdomains: { '3.1': {a:0,c:0}, '3.2': {a:0,c:0}, '3.3': {a:0,c:0}, '3.4': {a:0,c:0} } },
        4: { answered: 0, correct: 0, subdomains: { '4.1': {a:0,c:0}, '4.2': {a:0,c:0} } },
        5: { answered: 0, correct: 0, subdomains: { '5.1': {a:0,c:0}, '5.2': {a:0,c:0} } }
      }
    };
  }

  function load() {
    try {
      const raw = localStorage.getItem(KEY_STATS);
      if (!raw) return defaultStats();
      const s = JSON.parse(raw);
      // migrate v1: ensure all subdomains exist
      const def = defaultStats();
      for (let d = 1; d <= 5; d++) {
        if (!s.domains[d]) s.domains[d] = def.domains[d];
        else if (!s.domains[d].subdomains) s.domains[d].subdomains = def.domains[d].subdomains;
      }
      return s;
    } catch { return defaultStats(); }
  }

  function save(s) {
    localStorage.setItem(KEY_STATS, JSON.stringify(s));
  }

  function loadHistory() {
    try { return JSON.parse(localStorage.getItem(KEY_HISTORY)) || []; }
    catch { return []; }
  }

  function saveHistory(h) {
    if (h.length > HISTORY_CAP) h = h.slice(HISTORY_TRIM);
    localStorage.setItem(KEY_HISTORY, JSON.stringify(h));
  }

  function loadFlags() {
    try { return new Set(JSON.parse(localStorage.getItem(KEY_FLAGS)) || []); }
    catch { return new Set(); }
  }

  function saveFlags(set) {
    localStorage.setItem(KEY_FLAGS, JSON.stringify([...set]));
  }

  function recordAnswer(questionId, domain, subdomain, isCorrect) {
    const s = load();
    s.totalAnswered++;
    if (isCorrect) {
      s.totalCorrect++;
      s.streakCurrent++;
      if (s.streakCurrent > s.streakBest) s.streakBest = s.streakCurrent;
    } else {
      s.streakCurrent = 0;
    }
    const d = s.domains[domain];
    if (d) {
      d.answered++;
      if (isCorrect) d.correct++;
      const sd = d.subdomains[subdomain];
      if (sd) {
        sd.a++;
        if (isCorrect) sd.c++;
      }
    }
    save(s);

    // append to history
    const h = loadHistory();
    h.push({ id: questionId, correct: isCorrect, ts: Date.now() });
    saveHistory(h);
  }

  function getDomainAccuracy(domainNum) {
    const s = load();
    const d = s.domains[domainNum];
    if (!d || d.answered === 0) return { answered: 0, correct: 0, pct: 0 };
    return { answered: d.answered, correct: d.correct, pct: Math.round(d.correct / d.answered * 100) };
  }

  function getSubdomainAccuracy(subdomain) {
    const s = load();
    for (let d = 1; d <= 5; d++) {
      const sd = s.domains[d]?.subdomains?.[subdomain];
      if (sd) {
        const pct = sd.a === 0 ? 0 : Math.round(sd.c / sd.a * 100);
        return { answered: sd.a, correct: sd.c, pct };
      }
    }
    return { answered: 0, correct: 0, pct: 0 };
  }

  function getWeakestDomain() {
    const s = load();
    let worstDomain = null;
    let worstPct = Infinity;
    for (let d = 1; d <= 5; d++) {
      const dom = s.domains[d];
      if (dom.answered === 0) continue;
      const pct = dom.correct / dom.answered;
      if (pct < worstPct) { worstPct = pct; worstDomain = d; }
    }
    return worstDomain;
  }

  function getMissedIds() {
    const h = loadHistory();
    const last = {};
    for (const entry of h) last[entry.id] = entry.correct;
    return Object.entries(last).filter(([,c]) => !c).map(([id]) => id);
  }

  function toggleFlag(questionId) {
    const flags = loadFlags();
    if (flags.has(questionId)) flags.delete(questionId);
    else flags.add(questionId);
    saveFlags(flags);
    return flags.has(questionId);
  }

  function isFlagged(questionId) {
    return loadFlags().has(questionId);
  }

  function getFlaggedIds() {
    return [...loadFlags()];
  }

  function updateLastSession() {
    const s = load();
    s.lastSessionDate = new Date().toISOString().slice(0, 10);
    save(s);
  }

  function reset() {
    localStorage.removeItem(KEY_STATS);
    localStorage.removeItem(KEY_HISTORY);
    localStorage.removeItem(KEY_FLAGS);
    localStorage.removeItem(KEY_SESSION);
  }

  function loadSession() {
    try { return JSON.parse(localStorage.getItem(KEY_SESSION)); }
    catch { return null; }
  }

  function saveSession(session) {
    localStorage.setItem(KEY_SESSION, JSON.stringify(session));
  }

  function clearSession() {
    localStorage.removeItem(KEY_SESSION);
  }

  return {
    load, save,
    recordAnswer,
    getDomainAccuracy, getSubdomainAccuracy,
    getWeakestDomain,
    getMissedIds,
    toggleFlag, isFlagged, getFlaggedIds,
    updateLastSession,
    reset,
    loadSession, saveSession, clearSession,
    DOMAIN_NAMES, SUBDOMAIN_NAMES
  };
})();
