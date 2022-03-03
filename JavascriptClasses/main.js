class Person {
    constructor(fname, lname) {
        this.fname = fname;
        this.lname = lname;
    }

    introduce() {
        console.log(`Hi, My name is ${this.fname} ${this.lname}`);
    }
}

const Ruchira = new Person('Ruchira', 'Sachinthana');

Ruchira.introduce();