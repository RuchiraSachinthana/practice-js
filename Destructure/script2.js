function add([num1, num2]) {
    console.log('Sum:', num1 + num2);

}

function calcProfit({
    costPrice,
    salesPrice
}) {
    console.log('Profit: ', salesPrice - costPrice);
}

const numbers = [7, 6];


add(numbers);

const book = {
    costPrice: 4000,
    salesPrice: 5000
}

calcProfit(book);