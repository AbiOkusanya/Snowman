
/*need function to make button work, need timer?*/

function startGame (){
    
}

/* need an array of random words
somehow make underscores to match length of words or get ridof the dashes
collect answer from player - player has to be able to type - need event listner for keystrokes?
need to check if the player is correct by comapring input to the choosen word
right guessed letters will push to correct section
wrong guessed letters should push to incorrect section*/


//const array of words
const word= ['duck', 'coconut', 'cat','head','goat','cake','fish','happy']
//random word genartor first get random number then it picks the word from array based on index?
let randomNum = Math.floor (Math.random()*word.length);
let playWord = word[randomNum];
console.log(playWord);

//dashes match the lenght of random words
let dashes = word[randomNum];

// console.log(playWord);

let printedDashes =[]; 
let printingDashes = () => {
    for(let i=0; i<playWord.length; i++){
    printedDashes.push ("-") ;
}
    return printedDashes
}

console.log (printingDashes());

//keydown with keyboard event provide code indicating which key ispressed
/*The static String.fromCharCode() method returns a string created from 
the specified sequence of UTF-16 code units.*/
document.addEventListener ("keydown", event => {
    console.log(event);
    let KeyboardEvent=event.KeyboardEvent;
    console.log(KeyboardEvent);
    let playerWord = String.fromCharCode();
    console.log (playerWord)
})
