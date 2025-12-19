const book = {
  title: "JavaScript Fundamentals",
  author: "David Smith",
  pages: 300,
  describe() {
    console.log("Title:", this.title);
    console.log("Author:", this.author);
    console.log("Pages:", this.pages);
  }
};

book.describe();

const { title, author } = book;
console.log(title);
console.log(author);

class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  displayInfo() {
    console.log(this.name);
    console.log(this.salary);
  }
}

const emp = new Employee("Santhosh", 25000);
emp.displayInfo();

class Manager extends Employee {
  constructor(name, salary, department) {
    super(name, salary);
    this.department = department;
  }

  displayManagerInfo() {
    this.displayInfo();
    console.log(this.department);
  }
}

const mgr = new Manager("Kumar", 45000, "IT");
mgr.displayManagerInfo();
