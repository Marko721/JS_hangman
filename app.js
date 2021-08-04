const wordString = document.querySelector(".guess");
const wrongLetters = document.querySelector(".wrong-letters");

const words = [
  "Tuning",
  // "Motivational quotes",
  // "Working hard",
  // "The Lord of the rings",
  // "Healthy habits",
];

let charWordArray = [];
let underscoreLetter = [];
let guessedLetters = [];

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

  // resetovanje nizova kada se dugme ponovo klikne
  charWordArray = [];
  underscoreLetter = [];

  // pretvaranje random reci u niz slova
  [...charWordArray] = guessWord;

  // uzimanje svakog slova iz charWordArray i menjati za _ umesto " "
  for (const char of charWordArray) {
    if (char === " ") {
      underscoreLetter.push("  ");
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
      }
    }
  } else {
    if (guessedLetters.length < 6) {
      guessedLetters.push(letter);
      wrongLetters.innerHTML = `<h3>${guessedLetters}</h3>`;
    } else {
      console.log("game over");
    }
  }
};
