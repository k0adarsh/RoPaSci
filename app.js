let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
    let choices = ['r','p','s'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter){
  if(letter === "r") return "Rock";
  if(letter === "p") return "Paper";
  if(letter === "s") return "Scissor";
}

function win(userChoice,computerChoice){
   userScore++;
   userScore_span.innerHTML = userScore;
   computerScore_span.innerHTML = computerScore;
   result_p.innerHTML = convertToWord(userChoice) + " Wins Over " + convertToWord(computerChoice) + ". You Win!!";
   document.getElementById(userChoice).classList.add('green-glow');
   setTimeout(function(){
       document.getElementById(userChoice).classList.remove('green-glow');
   }, 500 );
}

function lose(userChoice,computerChoice){
   computerScore++;
   userScore_span.innerHTML = userScore;
   computerScore_span.innerHTML = computerScore;
   result_p.innerHTML = convertToWord(userChoice) + " Loses To " + convertToWord(computerChoice) + ". You Lose!!";
   document.getElementById(userChoice).classList.add('red-glow');
   setTimeout(function(){
       document.getElementById(userChoice).classList.remove('red-glow');
   }, 500 );
}

function draw(userChoice,computerChoice){
   userScore_span.innerHTML = userScore;
   computerScore_span.innerHTML = computerScore;
   result_p.innerHTML = convertToWord(userChoice) + " & " + convertToWord(computerChoice) + ". Its a Draw!!";
   document.getElementById(userChoice).classList.add('grey-glow');
   setTimeout(function(){
       document.getElementById(userChoice).classList.remove('grey-glow');
   }, 500 );
}

function game(userChoice){
 const computerChoice = getComputerChoice();
 switch(userChoice + computerChoice){
  case "rs":
  case "pr":
  case "sp":
   win(userChoice,computerChoice);
   break;
  case "sr":
  case "rp":
  case "ps":
   lose(userChoice,computerChoice);
   break;
  case "rr":
  case "pp":
  case "ss":
   draw(userChoice,computerChoice);
   break;
 }
}
function main()
{
    rock_div.addEventListener('click', function () {
        game("r");
    })

    paper_div.addEventListener('click', function () {
        game("p");
    })

    scissors_div.addEventListener('click', function () {
        game("s");
    })
}
main();