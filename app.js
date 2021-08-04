const wordString = document.querySelector(".guess");
const wrongLetters = document.querySelector(".wrong-letters");
const winLosModal = document.querySelector(".win-los-modal");
const winLosText = document.querySelector(".win-los-text");

const words = [
  "Tuning",
  "Motivational quotes",
  "Working hard",
  "The Lord of the rings",
  "Healthy habits",
];

let charWordArray = [];
let underscoreLetter = [];
let guessedLetters = [];
let word = "";

// Event Listeners
document.addEventListener("keypress", (e) => {
  let letter = e.key.toUpperCase();
  // console.log(guessedLetters);

  // pozivanje funckije koja proverava
  checkAndReplace(letter, charWordArray);
});

// Functions
const generateWord = () => {
  // uzimanje random reci iz word niza
  const randomNumber = Math.floor(Math.random() * words.length);
  const guessWord = words[randomNumber].toUpperCase();
  word = guessWord;

  // resetovanje nizova kada se dugme ponovo klikne
  charWordArray = [];
  underscoreLetter = [];
  guessedLetters = [];
  wrongLetters.innerHTML = "";
  winLosModal.classList.remove("show-modal");

  // pretvaranje random reci u niz slova
  [...charWordArray] = guessWord;

  // uzimanje svakog slova iz charWordArray i menjati za _ umesto " "
  for (const char of charWordArray) {
    if (char === " ") {
      underscoreLetter.push(" ");
    } else {
      underscoreLetter.push("_");
    }
  }

  // prikazi izmenjenu rec
  wordString.innerHTML = underscoreLetter.join("");
};

const checkAndReplace = (letter, charWordArray) => {
  if (charWordArray.includes(letter)) {
    for (let i = 0; i <= charWordArray.length; i++) {
      if (charWordArray[i] == letter) {
        underscoreLetter[i] = letter;
        wordString.innerHTML = underscoreLetter.join("");
        checkWinLos();
      }
    }
  } else {
    if (guessedLetters.length < 6 && !guessedLetters.includes(letter)) {
      guessedLetters.push(letter);
      wrongLetters.innerHTML = `<h3>${guessedLetters}</h3>`;
    } else if (guessedLetters.length >= 6) {
      checkWinLos();
    }
  }
};

const checkWinLos = () => {
  if (word == underscoreLetter.join("")) {
    winLosModal.classList.add("show-modal");
    winLosText.textContent = "You Won! :)";
  } else if (guessedLetters.length >= 6) {
    winLosModal.classList.add("show-modal");
    winLosText.textContent = "You Lost! :(";
  }
};
