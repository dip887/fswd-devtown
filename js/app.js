// could also use nth child selector
const stone = document.querySelector("#stone");
const paper = document.querySelector("#paper");
const scissor = document.querySelector("#scissor");

// Available choices
const choices = ["stone", "paper", "scissors"];

// game functions

const generateComputerResponse = () => {
  const index = (Math.random() * 10).toFixed(0) % 3;
  return choices[index];
};

const playGame = (userResponse) => {
  const computerResponse = generateComputerResponse();
  if (userResponse == computerResponse) return console.log("Tei!!");
  //   console.log("Game time!!");

  switch (userResponse) {
    case "stone":
      switch (computerResponse) {
        case "paper":
          console.log("computer wins");
          break;
        case "scissor":
          console.log("user wins");
          break;
      }
      break;
    case "paper":
      switch (computerResponse) {
        case "stone":
          console.log("user wins");
          break;
        case "scissor":
          console.log("computer wins");
          break;
      }
      break;
    case "scissor":
      switch (computerResponse) {
        case "stone":
          console.log("computer wins");
          break;
        case "paper":
          console.log("user wins");
          break;
      }
      break;
    default:
      window.alert("invalid response");
      break;
  }
};

// Add event listeners
stone.addEventListener("click", (e) => playGame(e.target.id));
paper.addEventListener("click", (e) => playGame(e.target.id));
scissor.addEventListener("click", (e) => playGame(e.target.id));
