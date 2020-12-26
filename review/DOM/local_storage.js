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
        age: 10
    },
    {
        name: "Manhattan",
        age: 14
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
console.log(typeof convertedArray);

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
    localStorage.setItem("name_array", convertedArray);
    localStorage.setItem("user_obj", convertedObject);
    localStorage.setItem("user_object_array", convertedArrayObject);
    return console.log("Saved to Local Storage");
}
// Call save() function
save();


// ------------------------------------------------//
//
// *** GET ARRAY OF NAMES STORED IN LOCAL STORAGE *** //
//
// ------------------------------------------------//

// Grab Button and add Event Listener
let arrBtn = document.getElementById("name-data");
arrBtn.addEventListener('click', getArray);

// Define a getArray() function
function getArray() {
    console.log("**************");
    console.log("retrieving array data");
    // Explore the differences between these two variables in the console
    // This variable contains a STRING version of the ARRAY
    let data = localStorage.getItem("name_array");
    console.log(data);
    // This variable contains the JavaScript Array Object 
    let parsed = JSON.parse(data);
    console.log(parsed);
    // return the parsed JavaScript Object to the calling function
    return parsed;
}

// ------------------------------------------------//
//
// *** GET OBJECT STORED IN LOCAL STORAGE *** //
//
// ------------------------------------------------//

// Grab Button and add Event Listener
let objBtn = document.getElementById("obj-data");
objBtn.addEventListener('click', getObj);

// Define a getObj() function
function getObj() {
    console.log("**************");
    console.log("retrieving object data");
    let data = localStorage.getItem("user_obj");
    console.log(data);

    let parsed = JSON.parse(data);
    console.log(parsed);
    // return the parsed JavaScript Object to the calling function
    return parsed;
}

// ------------------------------------------------//
//
// *** GET ARRAY OF OBJECTS STORED IN LOCAL STORAGE *** //
//
// ------------------------------------------------//

// Grab Button and add Event Listener
let objArrBtn = document.getElementById("obj-arr-data");
objArrBtn.addEventListener('click', getObjArr);

// Define a getObjArr() function
function getObjArr() {
    console.log("**************");
    console.log("retrieving object data");
    let data = localStorage.getItem("user_object_array");
    console.log(data);

    let parsed = JSON.parse(data);
    console.log(parsed);
    // return the parsed JavaScript Object to the calling function
    return parsed;
}

// ------------------------------------------------//
//
// *** ADD NEW NAME TO ARRAY AND STORE IN LOCAL STORAGE *** //
//
// ------------------------------------------------//

let addBtn = document.getElementById("add-data");
addBtn.addEventListener('click', addObj);

function addObj() {
    // Look at how these two are different in the console
    let stringData = localStorage.getItem('name_array');
    console.log(stringData);
    console.log(typeof stringData);

    let parsedData = JSON.parse(localStorage.getItem('name_array'));
    console.log(parsedData);
    console.log(typeof parsedData);

    // we add our data
    parsedData.push("Gary");
    console.log(parsedData);

    // we resave the array with the new data added back to local storage
    localStorage.setItem('name_array', JSON.stringify(parsedData));

    // Now go back and click on the 'Get Array' button and look at our results. What do you see?
}

// ------------------------------------------------//
//
// *** GET HIGHEST AGE STORED IN LOCAL STORAGE *** //
//
// ------------------------------------------------//

// Grab the button and create a click event that triggers the getHighAge() function
let button = document.getElementById("age");
button.addEventListener("click", getHighAge);

// Define function to retrieve the highest Age stored in localStorage
function getHighAge() {
    age.textContent = '';
    // Grab the STRING object stored in localStorage (by calling the getSaved() function)
    let savedResults = localStorage.getItem('user_object_array');
    // let savedResults = getObjArr();
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


// ------------------------------------------------//
//
// *** REMOVE OBJECT STORED IN LOCAL STORAGE *** //
//
// ------------------------------------------------///
function removeFromStorage(key) {
    localStorage.removeItem(key);
}

// We will run this command in the browser console, but its here for reference

// removeFromStorage('user_obj');



// ------------------------------------------------//
//
// *** CHECK IF LOCAL STORAGE HAS CONTENTS *** //
//
// ------------------------------------------------///
// This function can be called directly in the browser console
function checkEmpty() {
    // The localStorage OBJECT only has one method (.length)
    if(localStorage.length < 1) {
        // if local storage is empty maybe we want to return the user a message. Or load our own data!
        return console.log("Local Storage Empty");
    }
    // if it is not empty it will return the numebr of objects it contains
    return console.log(localStorage.length);
}

