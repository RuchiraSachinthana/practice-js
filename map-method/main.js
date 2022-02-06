
const prices = [100, 200, 300, 400];

const pricesWithTax = prices.map( price => {
   return price * 1.15;
})
/*
prices.map((value, index) => {
    console.log(value, index)
})

*/

console.log("Prices: " , prices );
console.log("Prices with tax: " , pricesWithTax );