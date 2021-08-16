let compScore=0;
let playerScore=0;
let count=0;



/* STEP1: create a function computerPlay to
generate a random answer from the three choices
"Rock,Paper or Scissors" */

function computer(){
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
function player(){
 let pSelect = prompt("Rock, Paper or Scissors?");
  let selectVal = pSelect.toLowerCase();
return selectVal;
}

/* STEP2: Make your function’s playerSelection parameter case-insensitive
 (so users can input rock, ROCK, RocK or any other variation).*/



/* STEP3: Write a function that plays a single round of Rock Paper Scissors
The function should take two parameters - the playerSelection and 
computerSelection - and then return a string that declares the 
winner of the round like so: "You Lose! Paper beats Rock" */
function singleRound(computerPlay,playerSelection){
  playerSelection = player();
 computerPlay = computer();

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

}
 /*NOTE THAT: Important note: you want to return the results of this function call,
  not console.log() them. To test this function console.log the results: */



  /*STEP4: Write a NEW function called game(). Use the previous function inside of 
  this one to play a 5 round game that keeps score and reports
   a winner or loser at the end. call function 5 times or use loop */
    function game(){
      playerSelection = player();
      computerPlay = computer();

      do {
        // function call for single round

        let gameRound;
        gameRound = singleRound(computerPlay,playerSelection);
        if (gameRound==="Computer wins!"){
          compScore+=1;
          count+=1;
        } else if(gameRound==="You win!"){
          playerScore+=1;
          count+=1;
        }else {
          count+=1;
        }


        if (compScore > playerScore){
          console.log("COMPUTER WINS!!");
        } else if(playerScore > compScore){
          console.log("PLAYER WINS!!");
        }else{
          console.log("IT'S A TIE");}
        
        }while(count<5);

        return count;
        return playerScore;
        return compScore;

       

          game();
        
    
    }
      // this function should allow for five calls to the single round function
      
      
      
         
      // this function should keep records of scores and returns a winner from the 5 calls
    