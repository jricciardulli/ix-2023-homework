const movies = [
  {
    title: "Harry Potter",
    explanation: "This movie is about a dude with a stick...",
    hint: "It's Magic",
  },
  {
    title: "Just Go With It",
    explanation: "This movie is about people who go on holiday...",
    hint: "Adam, Drew and Jennifer",
  },
  {
    title: "Never Back Down",
    explanation:
      "This movie is about two guys with daddy issues who beat each other up...",
    hint: "Kanye West - Stronger",
  },
  {
    title: "Spongebob Squarepants",
    explanation: "This movie is about a rectangle...",
    hint: "It's a cartoon",
  },
  {
    title: "50 First Dates",
    explanation: "This movie is about a chick, she has the worst memory...",
    hint: "50 times...",
  },
  {
    title: "Cars",
    explanation: "In this movie, car go fast...",
    hint: "Kachow",
  },
  {
    title: "Spiderman",
    explanation:
      "In this movie this guy just does not pay his rent, no matter how many times the landlord asks...",
    hint: "Peta-Paka",
  },
  {
    title: "The Wolf Of Wall Street",
    explanation:
      "In this movie there's like illegal stuff, lots of money, and a blonde chick...",
    hint: "HAWOOooooooooooo",
  },
  {
    title: "Inception",
    explanation: "In this movie everyone is like sleeping all the time...",
    hint: "Dreams...",
  },
  {
    title: "Peter Pan",
    explanation:
      "In this movie some kids die and an angel escorts them to heaven...",
    hint: "Always flying, cuz he neverlands",
  },
  {
    title: "The Lord Of The Rings",
    explanation: "In this movie some small guys go for a walk...",
    hint: "You will not vacate past this exact position",
  },
];

const prompt = document.getElementById(`prompt`);
const hint = document.getElementById(`hint`);
const hintButton = document.getElementById(`hint-btn`);
const input = document.getElementById(`input`);
const output = document.getElementById(`output`);
const submit = document.getElementById("submit");
const inDiv = document.getElementById(`in-div`);

let guesses = 3;
let mov = randomMovie();
let firstPrompt = mov.explanation;

prompt.innerHTML = `${firstPrompt}`;

function randomMovie() {
  let num = Math.floor(Math.random() * movies.length);
  let movie = movies[num];
  movies.splice(num, 1);
  return movie;
}

function checkGuess() {
  console.log(input.value);
  guesses--;

  if (input.value.toLowerCase() == mov.title.toLowerCase()) {
    output.innerHTML = "You got it!";
    input.value = "";
    let elem = document.createElement("button");
    elem.classList.add("btn");
    elem.classList.add("btn-light");
    elem.innerHTML = "Next";
    inDiv.appendChild(elem);
    elem.addEventListener("click", () => {
      goNext();
      inDiv.removeChild(elem);
    })
    return;
  }
  output.innerHTML = `sorry that was not the answer. you have ${guesses} more guesses`;
  console.log("miss");
  if (guesses == 0) {
    alert("Game Over :(. Reload to try again.");
    return;
  }
}

submit.addEventListener("click", () => {
  console.log("click");
  checkGuess();
});

hintButton.addEventListener("click", () => {
  console.log("hint");
  hint.innerHTML = mov.hint;
});

function goNext() {
  if (movies.length != 0) {
    mov = randomMovie();
    prompt.innerHTML = mov.explanation;
    hint.innerHTML = "";
    output.innerHTML = "";
  } else {
    output.innerHTML = "You won!";
  }
}
