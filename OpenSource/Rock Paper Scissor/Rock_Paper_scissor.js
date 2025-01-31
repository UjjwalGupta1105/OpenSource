let userScore = 0 , compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#my");
const compScorePara = document.querySelector("#comp");

function genCompChoice() {
    const options = ["rock" , "paper" , "scissor"];  
    const randomIdx = Math.floor(Math.random()*3);
    return options[randomIdx];
}

function showWinner(userWin , userChoice , compChoice) {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        console.log("You Win");
        msg.innerText = `You WIN! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green"
    }
    else{
        compScore++;
        compScorePara.innerText = compScore; 
        console.log("You Lose");
        msg.innerText = `You LOSE ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red"
    }
}

function drawGame() {
    console.log("The Game Was Draw");
    msg.innerHTML = "Game was DRAW \n Play again!";
    msg.style.backgroundColor = "#9acece"
}

choices.forEach((choice) => {
    choice.addEventListener("click" , () =>{
        const userChoice = choice.getAttribute("id")
        playGame(userChoice)
    })
})
function playGame(userChoice) {
    console.log("User choice = " , userChoice)
    const compChoice = genCompChoice();
    console.log("Computer choice = " , compChoice)

    if (userChoice==compChoice) {
        drawGame()
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = compChoice === "Paper" ? false : true;
        }
        else if(userChoice === "paper") {
            userWin = compChoice === "scissor" ? false : true;
        }
        else if(userChoice === "scissors"){
            userWin = compChoice === "rock" ? true : false
        }
        showWinner(userWin);
    }
    

}

