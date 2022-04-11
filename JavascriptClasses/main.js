class Person {
    constructor(fname, lname) {
        this.fname = fname;
        this.lname = lname;
    }

    introduce() {
        console.log(`Hi, My name is ${this.fname} ${this.lname}`);
    }

    get fullName() {
        return `${this.fname} ${this.lname}`;

    }
}

class Employee extends Person{

    static typingSpeed = 40;

    #salary;
    constructor(fname, lname, possition, salary) {
        super(fname, lname);
        this.possition = possition;
        this.#salary = salary;
    }
    introduce() {
        console.log(`Hi, My name is ${this.fname} ${this.lname} and I am a ${this.possition}`);
    }

    #showSalary() {
        console.log(`My salary is ${this.#salary}`);
    }

    static showTypingSpeed() {
        console.log(`I can type ${this.typingSpeed} words per minute.`);
    }
}

const Ruchira = new Person('Ruchira', 'Sachinthana');
const Kamal = new Employee('Kamal', 'Perera', 'Software Developer', '200000');
const Nimal = new Person('Nimal' , 'Silva');

Ruchira.introduce();
Kamal.introduce();
Nimal.introduce();

Kamal.salary = 225000;

console.log(Kamal.salary);
console.log(Kamal.#showSalary());

console.log(Nimal.fullName);

console.log(Employee.typingSpeed);
Employee.showTypingSpeed();