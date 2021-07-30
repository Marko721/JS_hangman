const wordString = document.querySelector(".guess");

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
  guessedLetters.push(e.key);
  console.log(guessedLetters);

  // pozivanje funckije koja proverava
  checkLetters(guessedLetters, charWordArray);
});

// Functions
const generateWord = () => {
  // uzimanje random reci iz word niza
  const randomNumber = Math.floor(Math.random() * words.length);
  const guessWord = words[randomNumber];

  // resetovanje nizova kada se dugme ponovo klikne
  charWordArray = [];
  underscoreLetter = [];

  // pretvaranje random reci u niz slova
  [...charWordArray] = guessWord;

  // uzimanje svakog slova iz charWordArray i menjati za _ umesto " "
  for (const char of charWordArray) {
    if (char === " ") {
      underscoreLetter += "  ";
    } else {
      underscoreLetter += "_";
    }
  }

  // prikazi izmenjenu rec
  wordString.innerHTML = underscoreLetter;
};

const checkLetters = (guessedLetters, charWordArray) => {
  for (letter of guessedLetters) {
    // for loop nesto ne valja ovde
    if (charWordArray.includes(letter)) {
      const index = charWordArray.indexOf(letter);
      underscoreLetter[index] = letter;
      wordString.innerHTML = underscoreLetter;
    }
  }
};
