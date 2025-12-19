// Task 1: Product Class
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  discountedPrice() {
    return this.price - this.price * 0.1;
  }
}

const product1 = new Product("Laptop", 50000);
console.log(product1.discountedPrice());


// Task 2: User Object with Methods
const user = {
  login() {
    console.log("User logged in");
  },
  logout() {
    console.log("User logged out");
  }
};

user.login();
user.logout();


// Task 3: Student Class with 3 Objects
class Student {
  constructor(name, rollNo) {
    this.name = name;
    this.rollNo = rollNo;
  }

  display() {
    console.log(this.name, this.rollNo);
  }
}

const s1 = new Student("A", 1);
const s2 = new Student("B", 2);
const s3 = new Student("C", 3);

s1.display();
s2.display();
s3.display();


// Task 4: Shape and Circle (Inheritance)
class Shape {
  area() {
    return 0;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius * this.radius;
  }
}

const c1 = new Circle(5);
console.log(c1.area());


// Task 5: Prototype Method for Student
Student.prototype.greet = function () {
  console.log("Hello", this.name);
};

s1.greet();
s2.greet();
s3.greet();