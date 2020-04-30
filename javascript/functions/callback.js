

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

// function first() {
//     // Simulate a code delay
//     setTimeout(function () {
//         console.log("Me First");
//     }, 500);
// }
// function second() {
//     console.log("Me Second");
// }

// first();
// second();

//- Terminal Output: -//
// Me Second
// ** Then 500 ms later ** //
// Me First

// ----------------------------------- //

// Function Definition with expected parameters. One of the parameters is a CALLBACK function, here we call it 'callback'
// function doHomework(subject, callback) {
//     alert(`Starting my ${subject} homework.`);
//     // Within our FUNCTION DEFINITION we INVOKE or CALL the FUNCTION(callback parameter) that was passed-in as an expected PARAMETER
//     callback();
// }

// We CALL the doHomework function and PASS-IN as an ARGUMENT an (anonymous) FUNCTION DEFINITION
// doHomework('math', function () {
//     alert('Finished my homework');
// });


// ----------------------------------- //


// Function Definition with expected parameters. One of the parameters is a CALLBACK function, here we call it 'callback'
// function doHomework(subject, callback) {
//     alert(`Starting my ${subject} homework.`);
//     // Within our FUNCTION DEFINITION we INVOKE or CALL the FUNCTION(callback parameter) that was passed-in as an expected PARAMETER
//     callback();
// }

// Normal Function Definition
// function alertFinished() {
//     alert('Finished my homework');
// }

// We CALL the doHomework function and PASS-IN as an ARGUMENT our previously defined 'alertFinished' FUNCTION. ** NOTICE ** that we just pass in the NAME but we DONT INVOKE the function in the line. This is because UNTIL the doHomework function is called we don't want the 'alertFinished' function to RUN/EXECUTE
// doHomework('math', alertFinished);



// ----------------------------------- //

/**
    In JavaScript, functions are objects. Because of this, functions can take functions as arguments, and can be returned by other functions.
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