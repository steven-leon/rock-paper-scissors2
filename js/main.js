const scoreImagePlayer = document.getElementById("scoreImagePlayer");
const scoreImageComputer = document.getElementById("scoreImageComputer");
const resultPlayer = document.getElementById("resultPlayer");
const resultComputer = document.getElementById("resultComputer");
const resultMessage = document.getElementById("result_message");
const counterPlayer = document.getElementById("counter_player");
const counterComputer = document.getElementById("counter_computer");

let countPlayer = 0;
let countComputer = 0;

counterPlayer.textContent = `${countPlayer}`;
counterComputer.textContent = `${countComputer}`;


document.getElementById("rock").addEventListener("click", function(){
    addPlayerChoice("rock")
    getComputerChoice()
    score("rock", getComputerChoice());
});

document.getElementById("paper").addEventListener("click", function(){
    addPlayerChoice("paper")
    getComputerChoice()
    score("paper", getComputerChoice());
});

document.getElementById("scissor").addEventListener("click", function(){
    addPlayerChoice("scissor")
    getComputerChoice()
    score("scissor", getComputerChoice());
});


function getComputerChoice(){
    const randomNum = Math.floor(Math.random() * 3) + 1;

    if (randomNum == 1) {
        addComputerChoice("rock");
        return "rock";
    } else if (randomNum == 2) {
        addComputerChoice("paper");
        return "paper";
    } else {
        addComputerChoice("scissor");
        return "scissor";
    }
}


function addPlayerChoice(player){
    scoreImagePlayer.src = `img/${player}.svg`;
    resultPlayer.textContent = `${player}`;
    return player;
}

function addComputerChoice(computer){
    scoreImageComputer.src = `img/${computer}.svg`;
    resultComputer.textContent = `${computer}`;
    return computer;
}

function score(option1, option2){

    if (option1 === option2) {
        resultMessage.textContent = "It's a tie!";
      } else if (
        (option1 === "rock" && option2 === "scissor") ||
        (option1 === "paper" && option2 === "rock") ||
        (option1 === "scissor" && option2 === "paper")
      ) {
        resultMessage.textContent = "You won!";
        countPlayer++;
        counterPlayer.textContent = countPlayer;
      } else {
        resultMessage.textContent = "You lost!";
        countComputer++;
        counterComputer.textContent = countComputer;
      }

    if(countPlayer == 5) {
        mostrarModal("You won!")
    } else if (countComputer == 5){
        mostrarModal("You lost!")
    }
}

function mostrarModal(mensaje) {
    const modalOverlay = document.getElementById("modalOverlay");
    const modalMessage = document.getElementById("modalMessage");


    modalMessage.textContent = mensaje;

    modalOverlay.classList.remove("hidden");
  }

  document.getElementById("btnPlayAgain").addEventListener("click", function(){

    document.getElementById("modalOverlay").classList.add("hidden");

    resetAll();
  });


function resetAll(){
    countPlayer = 0;
    countComputer = 0;
    counterPlayer.textContent = `${countPlayer}`;
    counterComputer.textContent = `${countComputer}`;
    scoreImagePlayer.src = "img/question.svg";
    scoreImageComputer.src = "img/question.svg";
    resultPlayer.textContent = "";
    resultComputer.textContent = "";
    resultMessage.textContent = "";
}
