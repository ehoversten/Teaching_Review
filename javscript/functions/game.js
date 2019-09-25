// Defining OBJECTS with attributes and functions

// Create a Gem object 
var gem = {
    color: 'blue',
    value: 35,

    setValue: function (val) {
        this.value = val;
        return console.log(`value is now ${this.value}`);
    }
}

// Create a Gem object constructor ES5 style
function newGem(color, value) {
    this.color = color;
    this.value = value;

    // function to set a new 'value' to the object instance
    this.setValue = function (val) {
        this.value = val;
        return console.log(`value is now ${this.value}`);
    }
    // function to set a new 'color' to the object instance
    this.setColor = function (newColor) {
        this.color = newColor;
    }
    // function to set a new value to the supplied object attribute instance (basically this method would do both of the abobve)
    this.setProp = function (prop, newValue) {
        this[prop] = newValue;
    }
}

// Create a Function Expression
var anotherGem = function (color, value) {
    this.color = color;
    this.value = value;

    this.setValue = function (val) {
        this.value = val;
        return console.log(`value is now ${this.value}`);
    }
}

function createGemValue() {
    // returns a random number between 1 and 10
    return Math.floor((Math.random() * 10));
}


// *** TESTING *** //

console.log(gem);
console.log(gem.value);
gem.setValue(50);
console.log(gem.value);
console.log('*******************');

// Create a 'new' instance of the newGem Function Constructor
var green = new newGem('green', 50);
console.log(`Value of obj is: ${green.value}`);
console.log(`Color of obj is: ${green.color}`);
green.setValue(25);
green.setColor('yellow');
console.log(`Value of obj is: ${green.value}`);
console.log(`Color of obj is: ${green.color}`);
green.setProp('value', 80);
green.setProp('color', 'lightgreen');
console.log(`Value of obj is: ${green.value}`);
console.log(`Color of obj is: ${green.color}`);
console.log('*******************');

// Create a new instance of the anotherGem Function Constructor
let redGem = new anotherGem('red', 75);
console.log(redGem);
console.log(redGem.color);
console.log(redGem.value);

redGem.setValue(35);
console.log(redGem.color);
console.log(redGem.value);
console.log('*******************');

var rando = createGemValue();
console.log(`Random Generated value is ${rando}`);
console.log('*******************');

let purple = new newGem('purple', createGemValue());
console.log(purple);
console.log('*******************');