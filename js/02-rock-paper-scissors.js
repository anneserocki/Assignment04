// Define variables of computer
let computerRock, computerScissor, computerPepper;
// Define mine variable
let myChoice = prompt(`Please enter your answer: rock, or scissor, or pepper`);
switch (myChoice) {
    case `rock`: alert(`My answer is rock`);
    myChoice === 'rock'
    break;
    case `scissor`: alert(`My answer is scissor`);
    myChoice === 'scissor'
    break;
    case `pepper`: alert(`My answer is pepper`);
    myChoice === 'pepper';
    default:
        alert(`Your answer is wrong, please re-enter your answer among rock, scissor, or pepper`)
};

// Get computer's answers
let computerChoice = Math.floor(Math.random()*10+2);
console.log(computerChoice);
if (computerChoice >-1 && computerChoice <4) {
    computerRock = alert(`rock`);
    computerRock === 'rock'; 
} else if (computerChoice > 3 && computerChoice < 8) {
    computerPepper = alert(`pepper`);
    computerRock === 'pepper';
} else {
    computerScissor = alert(`scissor`);
    computerRock === 'scissor';
}; // End if...else if for computer's answer

// Define a function for playing game

function playGame(){
    let player1, player2;
    if ('rock' && 'scissor') {
        player1 === 'rock';
        console.log(player1 + 'is win!');
    } else if ('scissor'  && 'pepper'){
        player1 === 'scissor';
        console.log(player1 + 'is win!');  
    } else if ('pepper'  && 'rock'){
        player1 === 'pepper';
        console.log(player1 + 'is win!');
    } else if (('pepper'  && 'pepper') || ('rock'  && 'rock') ||('scissor'  && 'scissor')){
        console.log('The result ends in a tie, please re-play!');
    } ;
};
playGame(computerChoice, myChoice);