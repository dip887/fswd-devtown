// could also use nth child selector
let user_score = 0;
let computer_score = 0;
const user_board = document.querySelector("div.scoreboard .user");
const computer_board = document.querySelector("div.scoreboard .comp");
const stone = document.querySelector("#stone");
const paper = document.querySelector("#paper");
const scissor = document.querySelector("#scissor");

const message_box = document.querySelector("div.message");

// Available choices
const choices = ["stone", "paper", "scissor"];

// game functions

const generateComputerResponse = () => {
  const index = (Math.random() * 10).toFixed(0) % 3;
  return choices[index];
};

const result = (winner, userResponse, computerResponse) => {
  switch (winner) {
    case "computer":
      message_box.innerHTML = ` Computer wins !! <br/> ${computerResponse} beats ${userResponse}`;
      document.querySelector(`#${userResponse}`).classList.add("won");
      setTimeout(2000, () =>
        document.querySelector(`#${userResponse}`).classList.remove("won")
      );
      computer_board.innerHTML = ++computer_score;
      break;
    case "user":
      message_box.innerHTML = ` User wins !! <br/> ${userResponse} beats ${computerResponse}`;
      document.querySelector(`#${userResponse}`).classList.add("won");
      setTimeout(2000, () =>
        document.querySelector(`#${userResponse}`).classList.remove("won")
      );
      user_board.innerHTML = ++user_score;
      break;
    default:
      window.alert("Something went wrong !!");
    //   break;
  }
};

const playGame = (userResponse) => {
  const computerResponse = generateComputerResponse();
  if (userResponse == computerResponse) return console.log("Tei!!");
  //   console.log("Game time!!");

  switch (userResponse) {
    case "stone":
      switch (computerResponse) {
        case "paper":
          return result("computer", userResponse, computerResponse);
        case "scissor":
          return result("user", userResponse, computerResponse);
      }
    case "paper":
      switch (computerResponse) {
        case "stone":
          return result("user", userResponse, computerResponse);
        case "scissor":
          return result("computer", userResponse, computerResponse);
      }
    case "scissor":
      switch (computerResponse) {
        case "stone":
          return result("computer", userResponse, computerResponse);
        case "paper":
          return result("user", userResponse, computerResponse);
      }
    default:
      window.alert("invalid response");
      break;
  }
};

// Add event listeners
stone.addEventListener("click", (e) => playGame(e.target.id));
paper.addEventListener("click", (e) => playGame(e.target.id));
scissor.addEventListener("click", (e) => playGame(e.target.id));
