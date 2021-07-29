const wordString = document.querySelector(".guess");

const words = [
  "Tuning",
  "Motivational quotes",
  "Working hard",
  "The Lord of the rings",
  "Healthy habits",
];

const guessedLetters = [];

const checkLetters = () => {};

const generateWord = () => {
  const randomNumber = Math.floor(Math.random() * words.length);

  const guessWord = words[randomNumber];
  const [...charWordArray] = guessWord;

  let underscoreLetter = [];

  for (const char of charWordArray) {
    if (char === " ") {
      underscoreLetter += "  ";
    } else {
      underscoreLetter += "_";
    }
  }

  wordString.innerHTML = underscoreLetter;
};

// console.log(word);

document.addEventListener("keypress", (e) => {
  // setLetters(e.key);
  guessedLetters.push(e.key);
  console.log(guessedLetters);

  // pozivanje funckije koja proverava
  checkLetters(guessedLetters);
});
