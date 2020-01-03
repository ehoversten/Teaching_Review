
// Initialize a constructor function for a new Hero
function Hero(name, level) {
  this.name = name;
  this.level = level;
}

let hero1 = new Hero('Batman', 7);

console.log(hero1);
console.log(hero1.name);
console.log(hero1.level);

// Add greet method to the Hero prototype
Hero.prototype.greet = function () {
  return `${ this.name } says hello.`;
}

let hero2 = new Hero('Flash', 5);
console.log(hero2);
console.log(hero2.name);
console.log(hero2.level);
console.log(hero2.greet());

// Even after the OBJECT was created and before the Greet() function is created it still gets attached to the OBJECT
console.log(hero1.greet());



function Person(firstName, lastName, favoriteColor, favoriteNumber) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.favoriteColor = favoriteColor;
  this.favoriteNumber = favoriteNumber;
  this.family = [];
}


Person.prototype.fullName = function () {
  return this.firstName + " " + this.lastName;
}

Person.prototype.addToFamily = function(firstName, lastName, favoriteColor, favoriteNumber) {
  let newMember = new Person(firstName, lastName, favoriteColor, favoriteNumber);
  if (newMember instanceof Person) {
    if (!this.family.includes(newMember)) {
      this.family.push(newMember);
      return newMember;
    }
  }
}

let Bob = new Person("Bob", "Smith", "Blue", 12);
console.log(Bob);

console.log(Bob.fullName());
Bob.addToFamily("Sue", "Smith", "Purple", 27);
console.log(Bob);