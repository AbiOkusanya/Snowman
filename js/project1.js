
/*need function to make button work, need timer?*/

// function startGame (){

// }

/* need an array of random words
somehow make underscores to match length of words or get ridof the dashes
collect answer from player - player has to be able to type - need event listner for keystrokes?
need to check if the player is correct by comapring input to the choosen word
right guessed letters will push to correct section
wrong guessed letters should push to incorrect section*/

var incorrect = 0;
var correct = 0;
document.getElementsByClassName("incorrect").innerHTML = incorrect;
document.getElementsByClassName("correct").innerHTML = correct;

//const array of words
const words = ['duck', 'snake', 'cat', 'giraffe', 'goat', 'fish', 'dolphin'];
//random word genartor first get random number then it picks the word from array based on index?

let word = words[Math.floor(Math.random() * words.length)];

let answerArray = []; //empty array for the dashes/answers answerArray
// let answerArray = () => {
    for (i = 0; i < word.length; i++){
        answerArray[i]= "_";
    }
    let remainingLetters = word.length;


//diplay progress
while (remainingLetters > 0) {
    alert(answerArray.join(" "));
    // Get a guess from the player      
    let guess = prompt("Guess a letter, or Cancel to stop playing.");
    let maxTries = 5
    if (guess === null) {        // Exit the game loop        
        break;
    } else if (guess.length !== 1) {
        alert("Please enter a single letter.");
    } else {
        // Update the game state with the guess        
        for (var j = 0; j < word.length; j++) {
            if (word[j] === guess) {
                answerArray[j] = guess;
                remainingLetters--;
            }
        }
    }
}
alert(answerArray.join(" "));    
alert("Woo Hoo you won! The answer was " + word);