// joining arrays

// const workingDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

// const restDays = ['Sat', 'Sun'];

// const daysOfweek = [...workingDays,...restDays];
// console.log(daysOfweek);

// using function

// function add(num1,num2){
//     console.log('Sum:',num1 + num2);
// }

// const numbers = [4,5];

// //add(numbers[0],numbers[1])

// add(...numbers);


const car = {
    make:"Honda",
    model: "Fit",
    year: 2012
}

const modification = {
    headlight: "LED",
    seats: "Leather"
}

const modifiedCar = { ...car, ...modification}

console.log(modifiedCar);