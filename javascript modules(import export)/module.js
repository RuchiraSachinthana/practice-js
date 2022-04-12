/*
export const author = `Ruchira`;

export function into() {
    alert("intro");
}
*/
// uda thiyena widihatath plwn


export default class car {
    constructor(brand) {
        this.brand = brand;
    }
}




const author = `Ruchira`;

function into() {
    console.log("intro");
}

export { author, into as Function}