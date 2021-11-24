const array = [0, 1, 2, 3, 4, 5, 6, 7, 8];

const showMessage = (message, className) =>
  (document.querySelector(
    ".message span"
  ).innerHTML = `<span class="${className}">${message}</span>`);

const HTMLGameField = document.querySelectorAll(".game-cell");

let count = 0;

function startNewGame(event) {
  const targetId = event.target.id;

  const doesTargetOnFreeCell =
    document.getElementById(targetId).innerHTML === "" &&
    typeof array[targetId] === "number";

  const typeIn = (y) => {
    document.getElementById(targetId).innerHTML = y;
    array[targetId] = y;
  };

  if (doesTargetOnFreeCell) {
    count % 2 === 0 ? typeIn("X") : typeIn("O");
    count++;
  }

  const checkForWinner = (a, b, c) =>
    array[a] === array[b] && array[b] === array[c];

  switch (true) {
    case checkForWinner(0, 1, 2):
    case checkForWinner(3, 4, 5):
    case checkForWinner(6, 7, 8):
    case checkForWinner(0, 3, 6):
    case checkForWinner(1, 4, 7):
    case checkForWinner(2, 5, 8):
    case checkForWinner(0, 4, 8):
    case checkForWinner(2, 4, 6):
      showMessage("We have a WINNER!", "red");
      break;
  }
}

function resetGame() {
  HTMLGameField.forEach((elem) => (elem.innerHTML = ""));

  for (let i = 0; i < array.length; i++) {
    array[i] = i;
  }

  showMessage("play on", "green");
  count = 0;
}

document.querySelector(".play-field").addEventListener("click", startNewGame);
document.querySelector(".reset-button").addEventListener("click", resetGame);
