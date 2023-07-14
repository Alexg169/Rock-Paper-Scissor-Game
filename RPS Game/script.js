let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};
updateScoreElement();
function playGame(playerMove) {
  const computerMove = pickComputerMove();
  let result = "";
  if (playerMove === "scissor") {
    if (computerMove === "rock") {
      result = "You lose";
    } else if (computerMove === "paper") {
      result = "You win";
    } else if (computerMove === "scissor") {
      result = "Tie";
    }
  } else if (playerMove === "paper") {
    if (computerMove === "rock") {
      result = "You win";
    } else if (computerMove === "paper") {
      result = "Tie";
    } else if (computerMove === "scissor") {
      result = "You lose";
    }
  } else if (playerMove === "rock") {
    if (computerMove === "rock") {
      result = "Tie";
    } else if (computerMove === "paper") {
      result = "You lose";
    } else if (computerMove === "scissor") {
      result = "You win";
    }
  }
  if (result === "You win") {
    score.wins += 1;
  } else if (result === "You lose") {
    score.losses += 1;
  } else if (result === "Tie") {
    score.ties += 1;
  }

  localStorage.setItem("score", JSON.stringify(score));
  updateScoreElement();
  let final_result = (document.querySelector(".js-result").innerHTML = result);
  document.querySelector(".js-moves").innerHTML = `
  <div class="row">
    <div class="col-12">
      <div class="row">
        <div class="col-4">
          <div class="row">
            <div class="col-12 text-center"><p class="name">You</p></div>
            <div class="col-12 d-flex justify-content-center">
              <img src="${playerMove}-emoji.png" class="move-icon" />
            </div>
          </div>
        </div>
        <div class="col-4 text-center"><p class="final_result">${final_result}</p></div>
        <div class="col-4">
          <div class="col-12 text-center name">
            <p class="name">Computer</p>
          </div>
          <div class="col-12 d-flex justify-content-center">
          <img src="${computerMove}-emoji.png" class="move-icon" />
        </div>
        </div>
      </div>
    </div>
</div>`;
}
function updateScoreElement() {
  document.querySelector(
    ".js-score"
  ).innerHTML = `Wins: ${score.wins} - Tie: ${score.ties} - Losses: ${score.losses}`;
}
function pickComputerMove() {
  const randomNumber = Math.random();
  let computerMove = "";
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = "scissor";
  }
  return computerMove;
}
