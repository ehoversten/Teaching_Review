
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