

// Normal Execution Flow
function first() {
    console.log("Hello");
}
function second() {
    console.log("Dolly");
}
first();  // Hello
second();  // Dolly


// What if we write code that won't return control to the JS Interpreter until some 'undetermined' time later (OR as we call it an ASYNCHRONOUS OPERATION)

function first() {
    // Simulate a code delay
    setTimeout(function () {
        console.log("Me First");
    }, 500);
}

function second() {
    console.log("Me Second");
}

// first();
// second();

//- Terminal Output: -//
// Me Second
// ** Then 500 ms later ** //
// Me First

// ----------------------------------- //

// Function Definition with expected parameters. One of the parameters is a CALLBACK function, here we call it 'callback'
function doHomework(subject, callback) {
    alert(`Starting my ${subject} homework.`);
    // Within our FUNCTION DEFINITION we INVOKE or CALL the FUNCTION(callback parameter) that was passed-in as an expected PARAMETER
    callback();
}

// We CALL the doHomework function and PASS-IN as an ARGUMENT an (anonymous) FUNCTION DEFINITION
doHomework('math', function () {
    alert('Finished my homework');
});


// ----------------------------------- //


// Function Definition with expected parameters. One of the parameters is a CALLBACK function, here we call it 'callback'
function doHomework(subject, callback) {
    alert(`Starting my ${subject} homework.`);
    // Within our FUNCTION DEFINITION we INVOKE or CALL the FUNCTION(callback parameter) that was passed-in as an expected PARAMETER
    callback();
}

// Normal Function Definition
function alertFinished() {
    alert('Finished my homework');
}

// We CALL the doHomework function and PASS-IN as an ARGUMENT our previously defined 'alertFinished' FUNCTION. ** NOTICE ** that we just pass in the NAME but we DONT INVOKE the function in the line. This is because UNTIL the doHomework function is called we don't want the 'alertFinished' function to RUN/EXECUTE
// doHomework('math', alertFinished);



// ----------------------------------- //

/**
    In JavaScript, functions are OBJECTS. Because of this, functions can take functions as arguments, and can also be returned by other functions.
*/


function one() {
  console.log("One");
}

function two(func) {
    func();
    console.log("Two");
    three();
}

function three() {
  return console.log("Three");
}


// INVOKE function 'two' and pass in FUNCTION 'one' as a PARAMETER
two(one);

// output -> One
//           Two
//           Three


// --------------------------------------- //
//  Call Back Functions you have/will see  //
// --------------------------------------- //


// -- Remember using CALLBACKs in the DOM (?) -- //
let elementOnPage = document.getElementById("#element-id");
// WHEN the EVENT is TRIGGERED we run a CALLBACK FUNCTION
elementOnPage.addEventListener("<EVENT_TYPE>", function(evt) {
    // Code that runs ONLY ONCE THE <EVENT_TYPE> on the ELEMENT is TRIGGERED
});

// Normal function definition 
function someFunc() {
    // run function code 
    console.log("Some Function Executing");
    // return control to JavaScript Interpreter (or calling function)
    return;
}

elementOnPage.addEventListener("<EVENT_TYPE>", callback);

// We can USE any regularly defined FUNCTION and PASS IT IN AS AN ARGUMENT, and now our regular function ACTS AS A CALLBACK FUNCTION
elementOnPage.addEventListener("click", someFunc);



// -- AJAX (Asynchronous Request) API request (with jQuery) -- //
$.ajax({
    url: API_URL,
    method: GET
}).done(function(data) {
    // This code will not run UNTIL we get a RESPONSE BACK from the server we made our API call to
    console.log(data)
})

// -- CALLBACK Functions returned from PROMISED based Libraries (ex. axios, inquirer) --/

// --> Here we are using CALLBACKS to HANDLE OUR PROMISE RESPONSE (or the data returned from our API call) <-- //

// Making our API Call (or REQUEST) for data
axios.get(API_URL)
    // On successful RESPONSE from API in the .then() CALLBACK Function block
    .then(function(response_data) {
        console.log(response_data);
    })
    // On UN-Successful RESPONSE (or ERROR) from API in the .catch() CALLBACK Function block
    .catch(function(error) {
        console.log(error);
    });

// Making an Asynchronous Call to REQUEST data from our USER (terminal prompt)
// Same as the axios code above just using ES6 ARROW Functions as the CALLBACK Function
inquirer.prompt(questions_Obj)
    .then( data => {
        console.log(data)
    })
    .catch( err => {
        console.log(err);
    });


// -- Asynchronous Request using the 'fs' (File System Module) -- //

// --> This CALLBACK function looks a little different (sometimes called an Error First CALLBACK) but is no different. the 'fs' module starts of its search for the file. If this is a big file it may take a few seconds, if small it will seem to take no time. BUT the CALLBACK FUNCTION DOES NOT RUN UNTIL the readFile() METHOD returns either an ERROR or DATA to us. 
fs.readFile('<NAME_OF_FILE>', function(err, data) {
    // On Un-successful Retrieval (or Error) on call for data (ex. file does not exist)
    if(err) {
        console.log(err);
    }
    // On Successful Retrieval of data from file
    console.log(data)
})