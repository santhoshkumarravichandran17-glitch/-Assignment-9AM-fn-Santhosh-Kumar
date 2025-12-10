// 1. User Class
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    login() {
        return `${this.name} logged in successfully`;
    }
}

const user1 = new User("Santhosh", "santhosh@gmail.com");
console.log(user1.login());
console.log("----------------------"); 


// 2. BankAccount Class
class BankAccount {
    constructor(balance = 0) {
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
        return `Deposited: ${amount}, New Balance: ${this.balance}`;
    }

    withdraw(amount) {
        if (amount > this.balance) {
            return "Insufficient Balance";
        }
        this.balance -= amount;
        return `Withdrawn: ${amount}, Remaining Balance: ${this.balance}`;
    }
}

const acc = new BankAccount(500);
console.log(acc.deposit(200));
console.log(acc.withdraw(100));
console.log(acc.withdraw(700));
console.log("-----------------------"); 



// 3. Prototype Chain (Vehicle → Car → ElectricCar)
function Vehicle(type) {
    this.type = type;
}

Vehicle.prototype.info = function () {
    return `This is a ${this.type}`;
};

function Car(type, brand) {
    Vehicle.call(this, type);
    this.brand = brand;
}

Car.prototype = Object.create(Vehicle.prototype);

function ElectricCar(type, brand, battery) {
    Car.call(this, type, brand);
    this.battery = battery;
}

ElectricCar.prototype = Object.create(Car.prototype);

const tesla = new ElectricCar("Car", "Tesla", "90 kWh");

console.log(tesla.info());
console.log(tesla.brand);
console.log(tesla.battery);
console.log("-----------------------"); 



// 4. Product List using Objects + Destructuring
const products = [
    { name: "Laptop", price: 50000 },
    { name: "Mobile", price: 20000 },
    { name: "Headphones", price: 2000 }
];

products.forEach(product => {
    const { name, price } = product;
    console.log(`Product: ${name} | Price: ₹${price}`);
});
console.log("-----------------------"); 



// 5. Student Management System
class Student {
    constructor(name, age, marks) {
        this.name = name;
        this.age = age;
        this.marks = marks;
    }

    getDetails() {
        return `${this.name} | Age: ${this.age} | Marks: ${this.marks}`;
    }
}

class StudentManagement {
    constructor() {
        this.students = [];
    }

    addStudent(student) {
        this.students.push(student);
        return "Student Added!";
    }

    listStudents() {
        return this.students.map(s => s.getDetails());
    }
}

const system = new StudentManagement();

system.addStudent(new Student("Santhosh", 23, 90));
system.addStudent(new Student("Priya", 22, 85));

console.log(system.listStudents());
console.log("-----------------------"); 
