// 1. Create an object called book with title, author, year
const book = {
  title: "JavaScript Essentials",
  author: "John Smith",
  year: 2023,



  // 2. Method getInfo() that prints book details
  getInfo() {
    console.log(`Title: ${this.title}, Author: ${this.author}, Year: ${this.year}`);
  }
};

book.getInfo();
console.log("--------------------------");


// 3. Destructure title and author from the book object
const { title, author } = book;
console.log("Destructured Title:", title);
console.log("Destructured Author:", author);
console.log("--------------------------");


// 4. Create a class Mobile with brand, price
class Mobile {
  constructor(brand, price) {
    this.brand = brand;
    this.price = price;
  }

  // 5. Method discount() that reduces price by 10%
  discount() {
    this.price = this.price - (this.price * 0.10);
    console.log(`Discounted Price of ${this.brand}: ${this.price}`);
  }
}

const phone = new Mobile("Samsung", 20000);
phone.discount();
console.log("--------------------------");
