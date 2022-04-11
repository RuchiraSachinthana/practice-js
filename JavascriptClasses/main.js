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

    #salary;
    constructor(fname, lname, possition, salary) {
        super(fname, lname);
        this.possition = possition;
        this.#salary = salary;
    }
    introduce() {
        console.log(`Hi, My name is ${this.fname} ${this.lname} and I am a ${this.possition}`);
    }

    showSalary() {
        console.log(`My salary is ${this.#salary}`);
    }
}

const Ruchira = new Person('Ruchira', 'Sachinthana');
const Kamal = new Employee('Kamal', 'Perera', 'Software Developer', '200000');

Ruchira.introduce();

Kamal.introduce();
Kamal.salary = 225000;

console.log(Kamal.salary);
console.log(Kamal.showSalary());