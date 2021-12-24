function function_one(callback) {
    console.log('This is Function one');
    callback();
}

function function_two() {
    console.log('This is Function two');
}

function function_three() {
    console.log('This is Function three');
}

function_one(function_two);
