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
  guessedLetters.push(e.key.toUpperCase());
  console.log(guessedLetters);

  // pozivanje funckije koja proverava
  checkAndReplace(guessedLetters, charWordArray);
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

const checkAndReplace = (guessedLetters, charWordArray) => {
  for (letter of guessedLetters) {
    // if (charWordArray.includes(letter)) {
    //   const index = charWordArray.indexOf(letter);
    //   underscoreLetter[index] = letter;
    //   wordString.innerHTML = underscoreLetter.join("");
    // }

    // tuning.
    charWordArray.forEach((element) => {
      if (element === letter) {
        let index = charWordArray.indexOf(letter);
        underscoreLetter[index] = letter;
        wordString.innerHTML = underscoreLetter.join("");
      }
    });
  }
};
