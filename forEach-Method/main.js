/*
const myArray = [2, 4, 6, 8];

myArray.forEach(callbackFunction)

function callbackFunction(value, index) {
 // function body
}
*/

function addTax(price, index) {
    console.log(index, (price * 1.15).toFixed(2));
}

const prices = [1234, 234, 3451, 432];

prices.forEach(addTax);

