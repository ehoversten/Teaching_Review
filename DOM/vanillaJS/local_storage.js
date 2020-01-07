// SCRIPT CODE FOR local_storage.html 

// Let's clear out everything that may already be in the broswers localStorage Object
localStorage.clear();


let age = document.getElementById("maxAge");

// Let's start with Createing a new Array
let nameArray = ["Bob", "Sue", "John", "Anne"];

// Let's create a new JS Object
let userObject = {
    name: "Bingo",
    age: 8
}

// Now create an Array of JS Objects
let userArrayObject = [
    {
        name: "Bingo",
        age: 8
    },
    {
        name: "Manhattan",
        age: 4
    },
    {
        name: "Bubbs",
        age: 12
    }
];

// NOTE: Local Storage only stores data as STRINGS
// Therefore we need to use the JSON methods .parse() and .stringify()

// Let's use the DEV TOOLS Console and explore this
console.log(nameArray);
let convertedArray = JSON.stringify(nameArray);
console.log(convertedArray);

console.log("**********");
console.log(userObject);
let convertedObject = JSON.stringify(userObject);
console.log(convertedObject);

console.log("**********");
console.log(userArrayObject);
let convertedArrayObject = JSON.stringify(userArrayObject);
console.log(convertedArrayObject);


// Once we have our Array / Object / or Array of Objects converted to Strings Objects we can now store that data in the browsers LocalStorage Object!!

// Define a save() function
function save() {
    // Remember we need to set the "key":"value" pair!
    localStorage.setItem("user_array", convertedArrayObject);
    return console.log("Saved to Local Storage");
}
// Call save() function
save();

// Define a getSaved() function
function getSaved() {
    console.log("retrieving saved data");
    return localStorage.getItem("user_array");
}

// Call getSaved() function
getSaved();

// Define function to retrieve the highest Age stored in localStorage
function getHighAge() {
    // Grab the STRING object stored in localStorage (by calling the getSaved() function)
    let savedResults = getSaved();
    console.log(savedResults);
    
    // We have to convert the STRING version of the OBJECT retrieved from localStorage to a JavaScript OBJECT
    let parsedResults = JSON.parse(savedResults);
    console.log(parsedResults);

    // Set a variable to keep track of highest 'age' value
    let max = 0;

    // Loop through the object
    for(let i = 0; i < parsedResults.length; i++) {
        // TEST!!! is the current values 'age' in the object greater than the current 'max' value stored 
        if(max < parsedResults[i].age) {
            // Update max age
            max = parsedResults[i].age;
        }
    }

    // Create a new element to add to the DOM
    let displayAge = document.createElement("h2");
    // Add content to our new element
    displayAge.textContent = max;
    // Add that sucker to the DOM
    age.appendChild(displayAge);

    // Return from the function
    return "Max age is " + max;
}

// Grab the button and create a click event that triggers the getHighAge() function
let button = document.getElementById("click");
button.addEventListener("click", getHighAge);
