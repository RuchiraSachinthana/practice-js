// basic for loop

/*for (let i = 1; i <= 12 ; i++) {
    console.log(i*12);
}
*/


//for loop

const printers = ['Canon', 'HP', 'XEROX', 'EPSON'];

for (let i = 0; i <printers.length ; i++) {
    console.log(i, printers[i]);

    //index eka print karanna onenm (i, printers[i])
}


//for of loop

for (const [index, value] of printers.entries()) {
    console.log(index, value);
}

//normaly (const printer of printers) ,index eka print karanna onenm (const [index, value] of printers.entries())

//for of loop