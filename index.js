function computerPlay(){
    let randnum = Math.floor(Math.random()*10);
    let comSel = "";
    switch (randnum) {
        case 0:
        case 1:
        case 2:
        case 3:
            comSel = "ROCK";
            break;

        case 4:
        case 5:
        case 6:
            comSel = "PAPER"
            break;

        case 7:
        case 8:
        case 9:
            comSel = "SCISSORS"
            break;
    
        default:
            break;
    }
    // console.log(comSel);
     
    return comSel;

}


function humanPlay() {
    let choice = prompt("Please enter your choice - Rock, Paper or Scissors"); 
    choice = choice.toUpperCase(); 
    // console.log(`fun level: ${choice}`);
    if (choice != "ROCK" && choice != "PAPER" && choice != "SCISSORS") {
        console.log("You are penalized with 1 point for incorrect input!.");
        computerScore = computerScore + 1;
       // humanPlay();
    }
    
    return choice;
}


var playerScore = 0;
var computerScore = 0;
// scores must be global.
// const playcrSelection = prompt("Please enter your choice - Rock, Paper or Scissors").toUpperCase();   


function playRound(playerSelection, computerSelection) {
    let result = "";
    
    
    computerSelection = computerPlay();
    playerSelection = humanPlay();
    console.log(`Computer Selection: ${computerSelection}`);
    console.log(`Player Selection: ${playerSelection}`);

    

    if (playerSelection === computerSelection) {
        result = "No Winner!"
        }
    else if (playerSelection === "ROCK" && computerSelection === "PAPER") {
        result = "You Lose! Paper beats Rock";
        computerScore = computerScore + 1;
    }
    else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
        result = "You Win! Paper beats Rock";
        playerScore = playerScore + 1;

    }
    else if (playerSelection ==="ROCK" && computerSelection === "SCISSORS") {
        result = "You Win! Rock beats Scissors";
        playerScore = playerScore + 1;

    }
    else if (playerSelection ==="SCISSORS" && computerSelection === "ROCK") {
        result = "You Lose! Rock beats Scissors";
        computerScore = computerScore + 1;

    }
    else if (playerSelection ==="SCISSORS" && computerSelection === "PAPER") {
        result = "You Win! Scissors beats paper";
        playerScore = playerScore + 1;

    }
    else if (playerSelection ==="PAPER" && computerSelection === "SCISSORS") {
        result = "You Lose! Scissors beats paper";
        computerScore = computerScore + 1;

    }
    else {
        result = "Incorrect input";
    }

    return result;

    }



    //console.log(playRound(playerSelection, computerSelection))

    function game() {

        playRound();
        console.log(`Player Score : ${playerScore} & Computer Score: ${computerScore}`);
        playRound();
        console.log(`Player Score : ${playerScore} & Computer Score: ${computerScore}`);
        playRound();
        console.log(`Player Score : ${playerScore} & Computer Score: ${computerScore}`);
        playRound();
        console.log(`Player Score : ${playerScore} & Computer Score: ${computerScore}`);
        playRound();
        console.log(`Player Score : ${playerScore} & Computer Score: ${computerScore}`);

        if(playerScore > computerScore) {
            console.log(`Player won! Player Score = ${playerScore} & Computer Score = ${computerScore}`);
            alert(`Player won! Player Score = ${playerScore} & Computer Score = ${computerScore}`);

            
        }
        else if (playerScore < computerScore) {
            console.log(`Computer won! Player Score = ${playerScore} & Computer Score = ${computerScore}`);
            alert(`Computer won! Player Score = ${playerScore} & Computer Score = ${computerScore}`);
            
            
        }
        else {
            console.log("Drawn game!");
            alert("Drawn game!");

            
        }

        

        }



        // window.onload = function () {
        //  game();
        }
    // game();