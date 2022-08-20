// ADD A PRIVATE FUNCTION CALLED CALCULATE
function calculate() {
    let op
    switch(op){
        case 'add': calculateAdd();
        break;
        case 'sub': calculateSubstract();
        break;
        case 'mul':  calculateMultiply();
        break;
        case 'div': calculateDivide();
        break;
        default:
            console.log(`No this kind of operation, please re-select.`)        
    };
}
// ADD FOUR PUBLIC FUNCTIONS BELOW

// ADD FUNCTION
function calculateAdd(numbers) {
    let totalAdd = 0;
    for (let i = 1; i < arguments.length; i++) {
        totalAdd += Number(arguments[i]);}
        return totalAdd;
    };
    console.log(calculateAdd(2, 20));

// SUBTRACT FUNCTION
function calculateSubstract(numbers) {
    let totalSub = 0;
    for (let i = 1; i < arguments.length; i++) {
        totalSub -= Number(arguments[i]);}
        return totalSub;
};
console.log(calculateSubstract(20, 10));

// MULTIPLY FUNCTION
function calculateMultiply(numbers) {
    let totalMul = 0;
    for (let i = 1; i < arguments.length; i++) {
        totalMul *= Number(arguments[i]);}
        return totalMul;
};
console.log(calculateMultiply(20, 10));

// DIVIDE FUNCTION
function calculateDivide(numbers) {
    let totalDiv = 0;
    for (let i = 1; i < arguments.length; i++) {
        totalDiv /= Number(arguments[i]);}
        return totalDiv;
};
console.log(calculateDivide(20, 10));

// EXPORT THE FOUR PUBLIC FUNCTIONS
export {calculateAdd, calculateSubstract, calculateMultiply, calculateDivide}






