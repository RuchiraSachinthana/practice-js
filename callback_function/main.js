function function_one(cbfunction) { // cbfunction kyna parameter ekt kamathi namak dena plwn
    console.log('This is Function one');
    const randNum = Math.random();
    cbfunction(randNum);

}

function function_two() {
    console.log('This is Function two');
}

function function_three(randNum) {
    console.log('This is Function three');
    console.log(randNum)
}

function_one(function_three);

