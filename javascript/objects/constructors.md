# Constructor Functions

###  Constructor functions are functions that are used to construct new objects. The *new* operator is used to create new instances based off a constructor function.

#### A constructor function is just a regular function. It becomes a constructor when it is called on by an instance with the 'new' keyword. In JavaScript, we capitalize the first letter of a constructor function by convention.

```javascript
// Initialize a constructor function for a new Hero
function Hero(name, level) {
  this.name = name;
  this.level = level;
}
```

#### `this` refers to the new object. Once it is initalized. Another way of saying this is 'this' refers to the INSTANCE of the newly created Object (as created by the CONSTRUCTOR we defined)

We have created a constructor function called Hero with two parameters: name and level. Since every character will have a name and a level, it makes sense for each new character to have these properties. The `this` keyword will refer to the new instance that is created, so setting this.name to the name parameter ensures the new object will have a name property set.

Now we can create a new instance with new.
```javascript
let hero1 = new Hero('Batman', 7);
```


#### You may notice that we've only defined properties and not methods in the constructor. It is a common practice in JavaScript to define methods on the prototype for increased efficiency and code readability.

We can add a method to Hero using `prototype`. We'll create a greet() method.

```javascript
// Add greet method to the Hero prototype
Hero.prototype.greet = function () {
  return `${this.name} says hello.`;
}
```
#

## Using the NEW keyword is essential!!!

#### It's important to remember to use the new keyword before all constructors. If you accidentally forget new, you will be modifying the global object instead of the newly created object.