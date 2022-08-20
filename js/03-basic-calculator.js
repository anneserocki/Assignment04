// IMPORT THE MODULE
import * as myModule from './modules/calculator.js';

// COLLECT NUMBER 1, NUMBER 2, AND OPERATION FROM THE USER
let number1 = parseFloat(prompt('Please enter a number'));
let number2 = parseFloat(prompt('Please enter a number'));
let opStyle = prompt('please choose your operation: add, subtraction, multiply, divide');

// CHECK TO SEE WHAT OPERATION THEY'RE USING
// CALL THE APPROPRIATE FUNCTION
let op = opStyle;
calculate();

