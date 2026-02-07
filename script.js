// ====================== MUSIC ======================
let playing = false;
const music = document.getElementById("bgMusic");

function toggleMusic() {
  playing ? music.pause() : music.play();
  playing = !playing;
  document.querySelector(".music-btn").textContent = playing ? "🔊" : "🎵";
}

// ====================== LOVE NOTE ======================
document.getElementById("revealBtn").onclick = () =>
  document.getElementById("loveNote").classList.remove("d-none");

// ====================== QUIZ 1 ======================
const quiz = [
  { q: "Who loves Pritha the most?", o: ["Sournanil ❤️", "Roses 🌹", "Everyone 😌"], a: 0 },
  { q: "Our relationship is?", o: ["Cute 💕", "Strong 💪", "Forever ♾️"], a: 2 },
  { q: "Who is my favorite person?", o: ["You 😘", "You again 😌", "Obviously you ❤️"], a: 2 }
];

let i = 0, score = 0;
const qEl = document.getElementById("question");
const opts = document.querySelectorAll(".option");
const fb = document.getElementById("feedback");
const nextBtn = document.getElementById("nextBtn");

function loadQ() {
  fb.textContent = "";
  nextBtn.classList.add("d-none");
  qEl.textContent = quiz[i].q;
  opts.forEach((b, n) => {
    b.textContent = quiz[i].o[n];
    b.disabled = false;
    b.style.display = "block";
  });
}

function checkAnswer(n) {
  opts.forEach(b => b.disabled = true);
  if (n === quiz[i].a) score++;
  fb.textContent = n === quiz[i].a
    ? "Correct 🥹 Pritha approves ❤️"
    : "Wrong 😜 Still loved though 💕";
  nextBtn.classList.remove("d-none");
}

function nextQuestion() {
  i++;
  if (i < quiz.length) loadQ();
  else {
    qEl.textContent = "Quiz Completed 💖";
    opts.forEach(b => b.style.display = "none");
    document.getElementById("finalMessage").textContent =
      `Sournanil, you scored ${score}/${quiz.length}.  
       No matter the score, you are Pritha’s forever 🌹❤️`;
    document.getElementById("roseBtn").classList.remove("d-none");
  }
}

// ====================== QUIZ 2 (Guess the Love Word) ======================
const words = [
  { word: "rose", hint: "Something you send on Rose Day 🌹" },
  { word: "love", hint: "What Pritha feels for Sournanil ❤️" },
  { word: "hug", hint: "You give this when you miss each other 🤗" },
  { word: "kiss", hint: "A sweet gesture 💋" },
  { word: "forever", hint: "How long your love is ♾️" }
];

let currentWord = 0;
let correctWords = 0;

const wordHint = document.getElementById("quiz2-hint");
const wordInput = document.getElementById("quiz2-input");
const wordFeedback = document.getElementById("quiz2-feedback");
const wordScore = document.getElementById("quiz2-score");

function loadWord() {
  wordHint.textContent = words[currentWord].hint;
  wordInput.value = "";
  wordFeedback.textContent = "";
}

function checkWord() {
  const answer = wordInput.value.toLowerCase().trim();
  if (answer === words[currentWord].word) {
    wordFeedback.textContent = "Yay! Correct 💖";
    correctWords++;
    currentWord++;
    if (currentWord < words.length) {
      setTimeout(loadWord, 800);
    } else {
      wordHint.textContent = "Game Completed 🎉";
      wordInput.style.display = "none";
      wordScore.textContent = `You guessed ${correctWords}/${words.length} words correctly! 🌹❤️`;
    }
  } else {
    wordFeedback.textContent = "Oops! Try again 😅";
  }
}

// ====================== LOVE CALCULATOR ======================
const loveResult = document.getElementById("loveResult");
function calculateLove() {
  loveResult.textContent = "Pritha ❤️ Sournanil = 100% Forever Love 💍🌹";
}

// ====================== TAP GAME ======================
let taps = 0;
const tapScore = document.getElementById("tapScore");
function tapRose() {
  taps++;
  tapScore.textContent = `Taps: ${taps}`;
  if (taps === 10) alert("💖 You tapped Pritha’s heart 10 times!");
}

// ====================== ROSE ======================
function sendRose() {
  alert("🌹 Rose accepted! Pritha loves you endlessly 💕");
}

// ====================== INIT ======================
loadQ();
loadWord();
