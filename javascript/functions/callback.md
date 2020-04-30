# Callback Functions:

### What are callback functions, and how do we use them?

Simply put: A callback is a function that is to be executed after another function has finished executing — hence the name `call back`.

More complexly put: In JavaScript, functions are objects. Because of this, functions can take functions as arguments, and can be returned by other functions. Functions that do this are called higher-order functions. Any function that is passed as an argument is called a callback function.

&nbsp;

```javascript
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
// Two
// Three

```
&nbsp;  

### Why do we need Callbacks?

Most of the time we are creating programs and applications that operate in a `synchronous` manner. In other words, some of our operations are started only after the preceding ones have completed. Often when we `request data` from other sources, such as an external API, *we don’t always know when our data will be served back.* In these instances we want to wait for the response, but we don’t always want our entire application grinding to a halt while our data is being fetched. These situations are where callback functions come in handy.



For one very important reason — JavaScript is an event driven language. This means that instead of waiting for a response before moving on, JavaScript will keep executing while listening for other events.

&nbsp;


```javascript
function first(){
    // Simulate a code execution delay (asynchronous functionality)
    setTimeout( function(){
        console.log(1);
    }, 500 );
}
function second(){
    console.log(2);
}

first();
second();

```

It’s not that JavaScript didn’t execute our functions in the order we wanted it to, it’s instead that JavaScript didn’t wait for a response from first() before moving on to execute second().




&nbsp;


## Resources


* Codeburst.IO : https://codeburst.io/javascript-what-the-heck-is-a-callback-aba4da2deced
