class Person {
    constructor(fname, lname) {
        this.fname = fname;
        this.lname = lname;
    }

    introduce() {
        console.log(`Hi, My name is ${this.fname} ${this.lname}`);
    }
}

class Employee extends Person{
    constructor(fname, lname, possition, salary) {
        super(fname, lname);
        this.possition = possition;
        this.salary = salary;
    }
}

const Ruchira = new Person('Ruchira', 'Sachinthana');
const Kamal = new Employee('Kamal', 'Perera', 'Software Developer', '200000');

Ruchira.introduce();