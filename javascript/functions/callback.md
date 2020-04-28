# Callback Functions:

### What are callback functions, and how do we use them?

Simply put: A callback is a function that is to be executed after another function has finished executing — hence the name ‘call back’.

More complexly put: In JavaScript, functions are objects. Because of this, functions can take functions as arguments, and can be returned by other functions. Functions that do this are called higher-order functions. Any function that is passed as an argument is called a callback function.


### Why do we need Callbacks?

For one very important reason — JavaScript is an event driven language. This means that instead of waiting for a response before moving on, JavaScript will keep executing while listening for other events.

```javascript
function first(){
    // Simulate a code delay
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
