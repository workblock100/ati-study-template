// ═══════════════════════════════════════════════════════════════════════════════
// ATI STUDY GUIDE - DYNAMIC RENDERER
// All content is rendered from STUDY_DATA (studyData.js)
// ═══════════════════════════════════════════════════════════════════════════════

// ─────────────────────────────────────────────────────────────────────────────
// INITIALIZE FROM DATA
// ─────────────────────────────────────────────────────────────────────────────
function initializeFromData() {
  if (typeof STUDY_DATA === 'undefined') {
    console.error('STUDY_DATA not found!');
    return;
  }
  const data = STUDY_DATA;

  // Set page metadata
  document.getElementById('pageTitle').textContent = `${data.meta.topic} Study Guide | ${data.meta.course}`;
  document.getElementById('navLogo').textContent = `${data.meta.icon} ${data.meta.topic}`;
  document.getElementById('heroBadgeIcon').textContent = data.meta.icon;
  document.getElementById('heroBadgeCourse').textContent = data.meta.course;
  document.getElementById('heroTitle').textContent = `${data.meta.topic} Study Guide`;
  document.getElementById('heroSubtitle').innerHTML = data.meta.description;
  document.getElementById('footerIcon').textContent = data.meta.icon;
  document.getElementById('footerTitle').textContent = `${data.meta.topic} Study Guide`;
  document.getElementById('favicon').href = `data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>${data.meta.icon}</text></svg>`;

  // NotebookLM link
  if (data.meta.notebookLMUrl) {
    document.getElementById('notebookLMLink').href = data.meta.notebookLMUrl;
    document.getElementById('notebookLMLink').style.display = 'inline-flex';
    document.getElementById('notebookLMPlaceholder').style.display = 'none';
  }

  // Render all sections
  renderCheatSheet(data.cheatSheet);
  renderClinicalPearls(data.clinicalPearls);
  renderMnemonics(data.mnemonics);
  renderImageGallery(data.meta.images);
  renderDisorders(data.disorders);
  renderPharmacology(data.pharmacology);
  renderATILogic(data.atiLogic);

  // Initialize interactive features
  initFlashcards(data.flashcards);
  initQuiz(data.quizQuestions);
}

// ─────────────────────────────────────────────────────────────────────────────
// RENDER CHEAT SHEET
// ─────────────────────────────────────────────────────────────────────────────
function renderCheatSheet(cards) {
  const container = document.getElementById('cheatSheetContainer');
  if (!container || !cards) return;
  
  container.innerHTML = cards.map(card => {
    const typeClass = card.type === 'critical' ? 'critical' : card.type === 'important' ? 'important' : '';
    let contentHTML = '';
    for (const [key, value] of Object.entries(card.content)) {
      const label = key.charAt(0).toUpperCase() + key.slice(1).replace(/_/g, ' ');
      contentHTML += `<p><strong>${label}:</strong> ${value}</p>`;
    }
    return `
      <div class="cheat-card ${typeClass}">
        <div class="cheat-header">
          <span class="cheat-icon">${card.icon}</span>
          <h3>${card.title}</h3>
          <span class="cheat-tag">${card.tag}</span>
        </div>
        <div class="cheat-content">
          ${contentHTML}
          <p class="cheat-pearl">💎 <em>${card.pearl}</em></p>
        </div>
      </div>
    `;
  }).join('');
}

// ─────────────────────────────────────────────────────────────────────────────
// RENDER CLINICAL PEARLS
// ─────────────────────────────────────────────────────────────────────────────
function renderClinicalPearls(pearls) {
  const container = document.getElementById('pearlsContainer');
  if (!container || !pearls) return;
  
  container.innerHTML = pearls.map(pearl => {
    const icon = pearl.type === 'success' ? '💎' : '⚠️';
    const label = pearl.type === 'success' ? 'Clinical Pearl' : 'Common Mistake';
    return `
      <div class="pearl-card">
        <div class="pearl-header ${pearl.type}">
          <span>${icon}</span>
          <h4>${label}</h4>
        </div>
        <h3>${pearl.title}</h3>
        <p>${pearl.content}</p>
      </div>
    `;
  }).join('');
}

// ─────────────────────────────────────────────────────────────────────────────
// RENDER MNEMONICS
// ─────────────────────────────────────────────────────────────────────────────
function renderMnemonics(mnemonics) {
  const container = document.getElementById('mnemonicsContainer');
  if (!container || !mnemonics) return;
  
  container.innerHTML = mnemonics.map(m => `
    <div class="mnemonic-card" style="margin-bottom: 1.5rem;">
      <div class="mnemonic-title">${m.title}</div>
      <p>${m.content}</p>
    </div>
  `).join('');
}

// ─────────────────────────────────────────────────────────────────────────────
// RENDER IMAGE GALLERY
// ─────────────────────────────────────────────────────────────────────────────
function renderImageGallery(images) {
  const container = document.getElementById('imageGalleryContainer');
  if (!container || !images) {
    document.getElementById('images')?.remove();
    return;
  }
  
  container.innerHTML = Object.entries(images).map(([key, img]) => `
    <div class="diagram-card" onclick="openImageModal('${img.url}', '${img.title}', '${img.description}')">
      <img src="${img.url}" alt="${img.title}" class="diagram-img" onerror="this.parentElement.style.display='none'">
      <div class="diagram-overlay">
        <h4>${img.title}</h4>
        <p>${img.description}</p>
      </div>
    </div>
  `).join('');
}

function openImageModal(url, title, description) {
  document.getElementById('modalImage').src = url;
  document.getElementById('modalTitle').textContent = title;
  document.getElementById('modalDescription').textContent = description;
  document.getElementById('imageModal').style.display = 'flex';
}

function closeImageModal() {
  document.getElementById('imageModal').style.display = 'none';
}

// ─────────────────────────────────────────────────────────────────────────────
// RENDER DISORDERS
// ─────────────────────────────────────────────────────────────────────────────
function renderDisorders(disorders) {
  const container = document.getElementById('disordersContainer');
  if (!container || !disorders) return;
  
  container.innerHTML = disorders.map(d => `
    <div class="topic-card">
      <div class="topic-icon">🏥</div>
      <h3>${d.name}</h3>
      <div class="disorder-section"><h4>Pathophysiology</h4><p>${d.patho}</p></div>
      <div class="disorder-section"><h4>Risk Factors</h4><ul>${d.riskFactors.map(r => `<li>${r}</li>`).join('')}</ul></div>
      <div class="disorder-section"><h4>Signs & Symptoms</h4><ul>${d.signs.map(s => `<li>${s}</li>`).join('')}</ul></div>
      <div class="disorder-section"><h4>Treatment</h4><ul>${d.treatment.map(t => `<li>${t}</li>`).join('')}</ul></div>
      <div class="why-matters"><strong>🩺 Nursing Focus:</strong> ${d.nursing.join(' • ')}</div>
    </div>
  `).join('');
}

// ─────────────────────────────────────────────────────────────────────────────
// RENDER PHARMACOLOGY
// ─────────────────────────────────────────────────────────────────────────────
function renderPharmacology(meds) {
  const container = document.getElementById('pharmacologyContainer');
  if (!container || !meds) return;
  
  container.innerHTML = meds.map(med => `
    <div class="topic-card">
      <div class="topic-icon">💊</div>
      <h3>${med.drugClass}</h3>
      <p><strong>Prototype:</strong> ${med.prototype}</p>
      <div class="disorder-section"><h4>Mechanism</h4><p>${med.mechanism}</p></div>
      <div class="disorder-section"><h4>Indications</h4><ul>${med.indications.map(i => `<li>${i}</li>`).join('')}</ul></div>
      <div class="disorder-section"><h4>Nursing Implications</h4><ul>${med.nursingImplications.map(n => `<li>${n}</li>`).join('')}</ul></div>
      <div class="disorder-section"><h4>Adverse Effects</h4><ul>${med.adverseEffects.map(a => `<li>${a}</li>`).join('')}</ul></div>
      <div class="why-matters"><strong>📋 Patient Teaching:</strong> ${med.patientTeaching}</div>
    </div>
  `).join('');
}

// ─────────────────────────────────────────────────────────────────────────────
// RENDER ATI LOGIC
// ─────────────────────────────────────────────────────────────────────────────
function renderATILogic(scenarios) {
  const container = document.getElementById('atiLogicContainer');
  if (!container || !scenarios) return;
  
  container.innerHTML = scenarios.map(s => `
    <div class="topic-card">
      <div class="topic-icon">🎯</div>
      <h3>Scenario</h3>
      <p style="font-style: italic; color: var(--text-secondary);">"${s.scenario}"</p>
      <div class="disorder-section"><h4>Priority Action</h4><p><strong>${s.action}</strong></p></div>
      <div class="why-matters"><strong>💡 Rationale:</strong> ${s.rationale}</div>
    </div>
  `).join('');
}

// ─────────────────────────────────────────────────────────────────────────────
// FLASHCARD SYSTEM
// ─────────────────────────────────────────────────────────────────────────────
let flashcards = [];
let currentCardIndex = 0;
let masteredCards = new Set();

function initFlashcards(cards) {
  flashcards = cards || [];
  currentCardIndex = 0;
  updateFlashcard();
}

function updateFlashcard() {
  if (flashcards.length === 0) return;
  const card = flashcards[currentCardIndex];
  document.getElementById('flashcardQuestion').textContent = card.q;
  document.getElementById('flashcardAnswer').textContent = card.a;
  document.getElementById('cardCounter').textContent = `Card ${currentCardIndex + 1} of ${flashcards.length}`;
  document.getElementById('masteredCount').textContent = masteredCards.size;
  document.getElementById('flashcard').classList.remove('flipped');
}

function flipCard() { document.getElementById('flashcard').classList.toggle('flipped'); }
function nextCard() { currentCardIndex = (currentCardIndex + 1) % flashcards.length; updateFlashcard(); }
function prevCard() { currentCardIndex = (currentCardIndex - 1 + flashcards.length) % flashcards.length; updateFlashcard(); }
function rateCard(confidence) {
  if (confidence >= 2) masteredCards.add(currentCardIndex);
  addXP(10 + confidence * 5, 'Flashcard');
  nextCard();
}

// ─────────────────────────────────────────────────────────────────────────────
// QUIZ SYSTEM
// ─────────────────────────────────────────────────────────────────────────────
let quizQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let selectedAnswers = [];
let quizAnswered = false;

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function initQuiz(questions) {
  quizQuestions = shuffleArray([...(questions || [])]).slice(0, 10);
  currentQuestionIndex = 0;
  score = 0;
  selectedAnswers = [];
  quizAnswered = false;
  document.getElementById('quizResults').style.display = 'none';
  document.getElementById('quizContainer').style.display = 'block';
  loadQuestion();
}

function loadQuestion() {
  if (currentQuestionIndex >= quizQuestions.length) { showResults(); return; }
  const q = quizQuestions[currentQuestionIndex];
  quizAnswered = false;
  selectedAnswers = [];

  document.getElementById('quizQuestion').innerHTML = `
    <span class="question-category">${(q.category || 'GENERAL').toUpperCase()}</span>
    <p>${q.q}</p>
    ${q.type === 'sata' ? '<span class="sata-hint">Select All That Apply</span>' : ''}
  `;

  const shuffledOptions = shuffleArray([...q.options]);
  document.getElementById('quizOptions').innerHTML = shuffledOptions.map((opt, i) => `
    <button class="quiz-option" data-option="${opt}" onclick="selectOption(this, '${opt.replace(/'/g, "\\'")}')">
      <span class="option-letter">${String.fromCharCode(65 + i)}</span>
      <span class="option-text">${opt}</span>
    </button>
  `).join('');

  document.getElementById('questionCounter').textContent = `Question ${currentQuestionIndex + 1} of ${quizQuestions.length}`;
  document.getElementById('quizProgressBar').style.width = `${((currentQuestionIndex + 1) / quizQuestions.length) * 100}%`;
  document.getElementById('quizFeedback').style.display = 'none';
  document.getElementById('nextQuestion').style.display = 'none';
  document.getElementById('submitAnswer').style.display = 'block';
}

function selectOption(btn, option) {
  if (quizAnswered) return;
  const q = quizQuestions[currentQuestionIndex];
  if (q.type === 'sata') {
    btn.classList.toggle('selected');
    if (selectedAnswers.includes(option)) selectedAnswers = selectedAnswers.filter(a => a !== option);
    else selectedAnswers.push(option);
  } else {
    document.querySelectorAll('.quiz-option').forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
    selectedAnswers = [option];
  }
}

function submitAnswer() {
  if (selectedAnswers.length === 0 || quizAnswered) return;
  quizAnswered = true;
  const q = quizQuestions[currentQuestionIndex];
  let correct = false;

  if (q.type === 'sata') {
    const correctSet = new Set(q.correctAnswers);
    const selectedSet = new Set(selectedAnswers);
    correct = correctSet.size === selectedSet.size && [...correctSet].every(a => selectedSet.has(a));
  } else {
    correct = selectedAnswers[0] === q.correctAnswer;
  }

  if (correct) { score++; addXP(25, 'Correct Answer'); }

  document.querySelectorAll('.quiz-option').forEach(btn => {
    const opt = btn.dataset.option;
    const isCorrect = q.type === 'sata' ? q.correctAnswers.includes(opt) : opt === q.correctAnswer;
    if (isCorrect) btn.classList.add('answer-correct');
    else if (selectedAnswers.includes(opt) && !isCorrect) btn.classList.add('answer-incorrect');
  });

  document.getElementById('quizFeedback').innerHTML = `
    <div class="feedback ${correct ? 'correct' : 'incorrect'}">
      <strong>${correct ? '✓ Correct!' : '✗ Incorrect'}</strong>
      <p>${q.explanation}</p>
    </div>
  `;
  document.getElementById('quizFeedback').style.display = 'block';
  document.getElementById('submitAnswer').style.display = 'none';
  document.getElementById('nextQuestion').style.display = 'block';
  document.getElementById('currentScore').textContent = score;
}

function nextQuestion() { currentQuestionIndex++; loadQuestion(); }

function showResults() {
  const percentage = Math.round((score / quizQuestions.length) * 100);
  document.getElementById('quizContainer').style.display = 'none';
  document.getElementById('quizResults').style.display = 'block';
  document.getElementById('finalScore').textContent = percentage;
  document.getElementById('correctCount').textContent = score;
  document.getElementById('incorrectCount').textContent = quizQuestions.length - score;

  let message = percentage >= 90 ? '🌟 Outstanding!' : percentage >= 80 ? '🎉 Great job!' : percentage >= 70 ? '👍 Good work!' : '📚 Keep studying!';
  document.getElementById('scoreMessage').textContent = message;

  const gameData = loadGameData();
  if (percentage > (gameData.bestQuizScore || 0)) {
    gameData.bestQuizScore = percentage;
    saveGameData(gameData);
    document.getElementById('quizBest').textContent = percentage + '%';
  }
  if (percentage === 100) { addXP(100, 'Perfect Quiz!'); triggerConfetti(); }
}

function restartQuiz() { initQuiz(STUDY_DATA.quizQuestions); }

// ─────────────────────────────────────────────────────────────────────────────
// TAB NAVIGATION
// ─────────────────────────────────────────────────────────────────────────────
function switchMainTab(tabName) {
  document.querySelectorAll('.main-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.main-tab-panel').forEach(p => p.classList.remove('active'));
  document.querySelector(`[data-maintab="${tabName}"]`)?.classList.add('active');
  document.getElementById(`panel-${tabName}`)?.classList.add('active');
  if (tabName === 'quiz' && quizQuestions.length === 0) initQuiz(STUDY_DATA.quizQuestions);
  if (tabName === 'flashcards' && flashcards.length === 0) initFlashcards(STUDY_DATA.flashcards);
}

// ─────────────────────────────────────────────────────────────────────────────
// GAMIFICATION
// ─────────────────────────────────────────────────────────────────────────────
const LEVELS = [
  { name: 'Nursing Student', xp: 0, badge: '📚' },
  { name: 'Clinical Novice', xp: 500, badge: '🩺' },
  { name: 'Ward Explorer', xp: 1500, badge: '🏥' },
  { name: 'Care Provider', xp: 3000, badge: '💉' },
  { name: 'Health Champion', xp: 5000, badge: '⭐' },
  { name: 'Nursing Expert', xp: 8000, badge: '🎖️' },
  { name: 'Clinical Master', xp: 12000, badge: '👑' }
];

function loadGameData() {
  try { return JSON.parse(localStorage.getItem('atiStudyGameData')) || { xp: 0, level: 0, streak: 0, lastVisit: null, bestQuizScore: 0 }; }
  catch { return { xp: 0, level: 0, streak: 0, lastVisit: null, bestQuizScore: 0 }; }
}

function saveGameData(data) { localStorage.setItem('atiStudyGameData', JSON.stringify(data)); }

function addXP(amount, reason) {
  const gameData = loadGameData();
  gameData.xp += amount;
  const newLevel = LEVELS.findIndex((l, i) => !LEVELS[i + 1] || gameData.xp < LEVELS[i + 1].xp);
  if (newLevel > gameData.level) { gameData.level = newLevel; showLevelUp(LEVELS[newLevel]); }
  saveGameData(gameData);
  updateXPDisplay();
}

function updateXPDisplay() {
  const gameData = loadGameData();
  const currentLevel = LEVELS[gameData.level];
  const nextLevel = LEVELS[gameData.level + 1];
  document.getElementById('levelBadge').textContent = currentLevel.badge;
  document.getElementById('levelName').textContent = currentLevel.name;
  if (nextLevel) {
    const progress = ((gameData.xp - currentLevel.xp) / (nextLevel.xp - currentLevel.xp)) * 100;
    document.getElementById('xpBarFill').style.width = `${progress}%`;
    document.getElementById('xpText').textContent = `${gameData.xp} / ${nextLevel.xp} XP`;
  } else {
    document.getElementById('xpBarFill').style.width = '100%';
    document.getElementById('xpText').textContent = `${gameData.xp} XP (MAX)`;
  }
  document.getElementById('quizBest').textContent = (gameData.bestQuizScore || 0) + '%';
  document.getElementById('studyStreak').textContent = gameData.streak || 0;
  document.getElementById('cardsmastered').textContent = masteredCards.size;
}

function showLevelUp(level) {
  const notification = document.createElement('div');
  notification.className = 'level-up-notification';
  notification.innerHTML = `<div class="level-up-icon">${level.badge}</div><h2>Level Up!</h2><p>You're now a <strong>${level.name}</strong></p>`;
  document.body.appendChild(notification);
  setTimeout(() => notification.classList.add('show'), 100);
  setTimeout(() => { notification.classList.remove('show'); setTimeout(() => notification.remove(), 500); }, 3000);
}

function triggerConfetti() {
  for (let i = 0; i < 50; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.animationDelay = Math.random() * 2 + 's';
    confetti.style.background = ['#6366f1', '#06b6d4', '#f59e0b', '#10b981', '#ef4444'][Math.floor(Math.random() * 5)];
    document.body.appendChild(confetti);
    setTimeout(() => confetti.remove(), 3000);
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// TIMER
// ─────────────────────────────────────────────────────────────────────────────
let timerInterval = null, timerSeconds = 25 * 60, timerRunning = false;

function updateTimerDisplay() {
  const mins = Math.floor(timerSeconds / 60);
  const secs = timerSeconds % 60;
  document.getElementById('timerDisplay').textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

function toggleTimer() {
  if (timerRunning) {
    clearInterval(timerInterval);
    document.getElementById('startTimer').textContent = '▶️ Start';
  } else {
    timerInterval = setInterval(() => {
      timerSeconds--;
      updateTimerDisplay();
      if (timerSeconds <= 0) {
        clearInterval(timerInterval);
        timerRunning = false;
        document.getElementById('startTimer').textContent = '▶️ Start';
        addXP(30, 'Study Session');
      }
    }, 1000);
    document.getElementById('startTimer').textContent = '⏸️ Pause';
  }
  timerRunning = !timerRunning;
}

function resetTimer() {
  clearInterval(timerInterval);
  timerRunning = false;
  timerSeconds = 25 * 60;
  updateTimerDisplay();
  document.getElementById('startTimer').textContent = '▶️ Start';
}

function setTimerDuration(mins) {
  clearInterval(timerInterval);
  timerRunning = false;
  timerSeconds = mins * 60;
  updateTimerDisplay();
  document.getElementById('startTimer').textContent = '▶️ Start';
  document.getElementById('timerLabel').textContent = mins === 25 ? 'Focus Session' : `${mins} min break`;
}

// ─────────────────────────────────────────────────────────────────────────────
// THEME TOGGLE
// ─────────────────────────────────────────────────────────────────────────────
function initThemeToggle() {
  const toggle = document.getElementById('themeToggle');
  if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light-theme');
    toggle.textContent = '🌙';
  }
  toggle.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    const isLight = document.body.classList.contains('light-theme');
    toggle.textContent = isLight ? '🌙' : '☀️';
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
  });
}

// ─────────────────────────────────────────────────────────────────────────────
// KEYBOARD SHORTCUTS
// ─────────────────────────────────────────────────────────────────────────────
function initKeyboardShortcuts() {
  document.addEventListener('keydown', (e) => {
    if (document.getElementById('panel-flashcards').classList.contains('active')) {
      if (e.code === 'Space') { e.preventDefault(); flipCard(); }
      else if (e.code === 'ArrowRight') nextCard();
      else if (e.code === 'ArrowLeft') prevCard();
      else if (e.key >= '1' && e.key <= '4') rateCard(parseInt(e.key) - 1);
    }
  });
}

// ─────────────────────────────────────────────────────────────────────────────
// EVENT LISTENERS
// ─────────────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initializeFromData();

  // Tab navigation
  document.querySelectorAll('.main-tab').forEach(tab => {
    tab.addEventListener('click', () => switchMainTab(tab.dataset.maintab));
  });

  // Flashcard events
  document.getElementById('flashcard')?.addEventListener('click', flipCard);
  document.getElementById('nextCard')?.addEventListener('click', nextCard);
  document.getElementById('prevCard')?.addEventListener('click', prevCard);
  document.querySelectorAll('.confidence-btn').forEach(btn => {
    btn.addEventListener('click', () => rateCard(parseInt(btn.dataset.confidence)));
  });

  // Quiz events
  document.getElementById('submitAnswer')?.addEventListener('click', submitAnswer);
  document.getElementById('nextQuestion')?.addEventListener('click', nextQuestion);
  document.getElementById('restartQuiz')?.addEventListener('click', restartQuiz);

  // Timer events
  document.getElementById('startTimer')?.addEventListener('click', toggleTimer);
  document.getElementById('resetTimer')?.addEventListener('click', resetTimer);
  document.querySelectorAll('[data-time]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-time]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      setTimerDuration(parseInt(btn.dataset.time));
    });
  });

  // Initialize
  initThemeToggle();
  initKeyboardShortcuts();
  updateXPDisplay();

  // Update streak
  const gameData = loadGameData();
  const today = new Date().toDateString();
  if (gameData.lastVisit !== today) {
    const yesterday = new Date(Date.now() - 86400000).toDateString();
    gameData.streak = gameData.lastVisit === yesterday ? gameData.streak + 1 : 1;
    gameData.lastVisit = today;
    saveGameData(gameData);
    addXP(50, 'Daily Login');
  }
  document.getElementById('studyStreak').textContent = gameData.streak;

  // Close modal on click outside
  document.getElementById('imageModal')?.addEventListener('click', (e) => {
    if (e.target.id === 'imageModal') closeImageModal();
  });
});

// Global functions
window.switchMainTab = switchMainTab;
window.selectOption = selectOption;
window.openImageModal = openImageModal;
window.closeImageModal = closeImageModal;
