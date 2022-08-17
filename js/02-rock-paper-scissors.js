// Define my variable
let myChoice = prompt(`Please enter your answer: rock, or scissor, or pepper`);
switch (myChoice) {
    case `rock`:
        console.log(`My answer is rock`);
        myChoice === 'rock';
        break;
    case `scissor`:
        console.log(`My answer is scissor`);
        myChoice === 'scissor'
        break;
    case `pepper`:
        console.log(`My answer is pepper`);
        myChoice === 'pepper';
        break;
    default:
        alert(`Your answer is wrong, please re-enter your answer among rock, scissor, or pepper`);
        break;
    };

// Define variables of computer and get computer's answers
let computerNumber = Math.floor(Math.random()*10+2);
let computerChoice;
console.log(computerNumber);
if (computerNumber >-1 && computerNumber <4) {
    console.log(`Your answer is rock`);
    computerChoice === 'rock'; 
} else if (computerNumber > 3 && computerNumber < 8) {
    console.log(`Your answer is pepper`);
    computerChoice === 'pepper';
} else if (computerNumber > 7 && computerNumber < 12) {
    console.log(`Your answer is scissor`);
    computerChoice === 'scissor';
}; // End if...else if for computer's answer

// Define a function for playing game
let player1 = 'rock' || 'pepper' || 'scissor'
let player2 = 'rock' || 'pepper' || 'scissor'
function playGame(player1, player2){

    if (player1 ==='rock' && player2 === 'rock' || player1 === 'pepper' && player2 === 'pepper' ||player1 === 'scissor' && player2 ==='scissor') {
        console.log('The result ends in a tie, please re-play!');
    } else if (player1 ==='rock' && player2 === 'scissor') {
        console.log('I win!');
    } else if (player1 ==='scissor' && player2 === 'pepper') {
        console.log('I win!');  
    } else if (player1 ==='pepper' && player2 === 'rock') {        
        console.log('I win!');
    } else if (player1 ==='scissor' && player2 === 'rock'){
        console.log('You win!');        
    } else if (player1 ==='pepper' && player2 === 'scissor'){
        console.log('You win!'); 
    } else if (player1 ==='rock' && player2 === 'pepper') {
        console.log('You win!'); 
    } else {
        console.log('Something is wrong, please re-start playing.')
    };
};

playGame(myChoice, computerChoice);