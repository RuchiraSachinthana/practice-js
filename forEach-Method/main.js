/*
const myArray = [2, 4, 6, 8];

myArray.forEach(callbackFunction)

function callbackFunction(value, index) {
 // function body
}
*/

/*
function addTax(price, index , array) {
    console.log(index, price, (price * 1.15).toFixed(2), array);
}
*/

// using arrow function
const prices = [1234, 234, 3451, 432];

prices.forEach((price, index , array) => {
    console.log(index, price, (price * 1.15).toFixed(2), array);
}); 

