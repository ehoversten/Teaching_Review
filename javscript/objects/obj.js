
// Create a basic object and define it
const susan = {
    first_name: "Susan",
    last_name: "Phillips",
    age: 34,
    email: "sphillips@gmail.com",

    greet: function() {
        console.log(`Hello I'm ${this.first_name} ${this.last_name}`);
    }

}

// Let's log it
console.log(susan);
console.log("***************");
susan.greet();

// Let's create an OBJECT using a CONSTRUCTOR
const Person = function(first, last, age, email) {
    this.first = first;
    this.last = last;
    this.age = age;
    this.email = email;

    this.greet = function() {
        console.log(`Hello, my name is ${this.first} ${this.last}`);
    }

}

// Take note of the `new` keyword before our OBJECT (call to the constructor)
let bob = new Person("Bob", "Jones", 44, "bob@yahoo.com");
console.log(bob);;
bob.greet();




