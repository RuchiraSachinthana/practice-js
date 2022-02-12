/*
const prices = [150, 100, 60, 80, 95, 130, 65, 400, 210 ];



function checkPrice(price) {
 if (price < 100) {
        return true;
    }
}



const lowPrices = prices.filter(price => price < 100);
const highPrices = prices.filter(price => price >= 100);

console.log("Prices: " , prices);
console.log("Low Prices: " , lowPrices);
console.log("High Prices: " , highPrices);

 */

const cars = [
    { brand: "Lexus", model: "ES 350", year: 2018, price: 31000 },
    { brand: "Toyota", model: "Land Cruiser", year: 2019, price: 54995 },
    { brand: "Toyota", model: "Camry", year: 2018, price: 18000 },
    { brand: "Honda", model: "Pilot LX", year: 2019, price: 28995 },
    { brand: "Honda", model: "Civic EX", year: 2018, price: 13500 },
    { brand: "BM", model: "M4 Base", year: 2019, price: 48898 },
    { brand: "Dodge", model: "Durango GT", year: 2020, price: 38888 },
    { brand: "Volkswagen", model: "Tiguan", year: 2015, price: 13499 }
];

// console.table(cars);

const expensiveCars = cars.filter(car => car.price > 40000);
const onlyHonda = cars.filter(car => car.brand === "Honda");

console.table(expensiveCars);
console.table(onlyHonda);



