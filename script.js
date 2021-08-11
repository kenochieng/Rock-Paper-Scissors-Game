/* STEP1: create a function computerPlay to
generate a random answer from the three choices
"Rock,Paper or Scissors" */

function computerPlay(){
    let ranNum = Math.floor(Math.random() * 3);
    switch (ranNum) {
        case 0:
           return "Rock";
          break;
        case 1:
          return "Paper";
          break;
        case 2:
           return "Scissors";
    }
          
}

// Now lets create a fuction that prompts the user to enter a selection from the 3!
function playerSelection(){
 let pSelect = prompt("Rock, Paper or Scissors?");
  selectVal = pSelect.toLowerCase();
return selectVal;
}

/* STEP2: Make your function’s playerSelection parameter case-insensitive
 (so users can input rock, ROCK, RocK or any other variation).*/




/* STEP3: Write a function that plays a single round of Rock Paper Scissors
The function should take two parameters - the playerSelection and 
computerSelection - and then return a string that declares the 
winner of the round like so: "You Lose! Paper beats Rock" */
function singleRound(computerPlay,playerSelection){
  if (playerSelection === computerPlay) {
    return 'It\'s a tie!';
  } else if (playerSelection === 'rock') {
    if (computerPlay === 'paper') {
      return 'Computer wins!';
    } else {
      return 'You win!';
    }
  } else if (playerSelection === 'paper'){
    if (computerPlay === 'scissors') {
      return 'Computer wins!';
    }else {
      return 'You win!';
    }
  } else if (playerSelection === 'scissors') {
    if (computerPlay === 'rock') {
      return 'Computer wins!';
    } else {
      return 'You win!';
    }

}


 /*NOTE THAT: Important note: you want to return the results of this function call,
  not console.log() them. To test this function console.log the results: */



  /*STEP4: Write a NEW function called game(). Use the previous function inside of 
  this one to play a 5 round game that keeps score and reports
   a winner or loser at the end. call function 5 times or use loop */
}