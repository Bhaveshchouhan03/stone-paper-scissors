let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score")

const gencompchoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () => {
    
    msg.innerText = "Game was Draw. Play again."
    msg.style.backgroundColor = "rgba(146, 87, 11, 1)";
}

let showWinner = (userwin) => {
    if (userwin) {
       userScore++;
       userScorepara.innerText = userScore;
        msg.innerText = "You win!";
        msg.style.backgroundColor = "green";
    } else {
      compScore++;
      compScorepara.innerText = compScore;
        msg.innerText = "You lose.";
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    const compChoice = gencompchoice();
    console.log("comp choice = ", compChoice);

    if(userChoice === compChoice){
        drawGame();
    } else {
        let userwin = true;
        if(userChoice ==="rock"){
          userwin =  compChoice === "paper" ? false : true ;
        } else if (userChoice === "paper") {
             userwin =  compChoice === "scissors" ? false : true ;
        } else {
             userwin =  compChoice === "rock" ? false : true ;
        }
        showWinner(userwin, );
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});