let msg = document.getElementById("msg");
let result = document.getElementById("result");
let reset = document.getElementById("reset");
const userScoreElement = document.getElementById("user-score");
const computerScoreElement = document.getElementById("computer-score");

const choices = document.querySelectorAll(".choice");


let userScore = 0;
let computerScore = 0;

const genrateComputerChoice = () => {
    let options = ["rock", "paper", "scissors"];
    let index = Math.floor(Math.random() * 3);
    return options[index];
}

const drawGame = () => {
    console.log("Draw");
    msg.innerText = "Draw, Play again !!";
    msg.style.backgroundColor = "#081b31";

    result.innerHTML = "";
}

const updateScore = (userScore, computerScore) => {
    userScoreElement.innerText = userScore;
    computerScoreElement.innerText = computerScore;
}

const playGame = (userChoice) => {
    console.log("Your choice:", userChoice);

    // Generate computer choice
    const computerChoice = genrateComputerChoice(); 
    console.log("Computer choice:", computerChoice);

    if (userChoice === computerChoice){
        drawGame();
    }else{
        if (userChoice == "rock" && computerChoice == "scissors" || userChoice == "paper" && computerChoice == "rock" || userChoice == "scissors" && computerChoice == "paper"){
            userScore++;
            console.log("User wins");
            msg.innerText = "You win !";
            msg.style.backgroundColor = "green";
            msg.style.margin = "1rem";

            result.innerHTML = `${userChoice} beats ${computerChoice}`;
            result.style.color = "green";

        }else{
            computerScore++;
            console.log("Computer wins");
            msg.innerText = "You lose !";
            msg.style.backgroundColor = "red";
            msg.style.margin = "1rem";

            result.innerHTML = `${computerChoice} beats ${userChoice}`;
            result.style.color = "red";
        }
    }
    updateScore(userScore, computerScore);
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

reset.addEventListener("click", () => {
    console.log("Reset clicked...");
    userScoreElement.innerText = 0;
    computerScoreElement.innerText = 0;

    msg.style.backgroundColor = "#081b31";
    msg.innerText = "Play Your Move"

    result.innerHTML = "";
});