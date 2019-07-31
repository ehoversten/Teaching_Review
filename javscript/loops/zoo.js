// Let's define our zoo ARRAY

// First let declare and empty array
var zoo = [];
// Using ES6 'let' declaration
// let zoo = [];

// Let's take a look at zoo
console.log(zoo);

// Let's push an item onto the array
zoo.push("Zebra");
// Let's take another look at our zoo array
console.log(zoo);

// Adding to our array
zoo.push("Zebra");
zoo.push("Grizzly");
zoo.push("Mongoose", "Cougar");

// Let's take another look at our zoo array
console.log(zoo);

// Let's declare an array and fill it with some initial data
var animals = ['lion', 'tiger', 'elephant', 'camel', 'monkey'];

// let's use for loops to loop through and print out the array
for(var i = 0; i < animals.length; i++) {
    console.log("-----------------------------");
    console.log(`Index - ${i} : Animal - ${animals[i]}`)
}

console.log("============================");
// Let's repeate this using the newer ES6 forEach() looping
animals.forEach(function(element) {
    console.log(element);;
});

console.log("----------------------------");
// You can also use for...of to loop through an array
for(let animal of animals) {
    console.log(animal);
}

// Remember -> using forEach we ARE GOING TO loop through each element in the array, no partial iteration

// Another cool function is 'map', this let's us modify an existing array
let plurals = animals.map(function(item) {
    return item + "s";
});

console.log(plurals);

// Filter let's us only act on data if it meets the condition






