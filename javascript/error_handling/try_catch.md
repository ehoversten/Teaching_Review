# Error Handling with Try / Catch

Often times we write code that may result in errors happening and causing issues in our code. This may be due to our over looking of a variable misspelling or using a new function incorrectly, perhaps an API call timing out or returning a default Error response. All of which may result in our JavaScript file to crash unexpectedly. 

&nbsp;

Sample `try...catch` Code Block:
```javascript
try {
    // code we want to run ...
} catch (err) {
    // error handling code if something goes wrong ...
}
```
&nbsp;

### It works like this:

* First, the code in `try` {...} is executed.
* `IF` there were `no errors`, then `catch(err)` is ignored: the execution reaches the end of try and goes on, skipping catch.
* `IF` an `error occurs`, then the `try` execution is stopped, and control flows to the beginning of `catch(err)`. The `err` variable (we can use any name for it, just like any function parameter) will contain an `error object` with details about what happened.

Therefore if we encounter an ERROR inside of the `try` block our script doesn't exit unexpectedly, we handle it within the `catch(err)` block

&nbsp;

#### Things to remember:
* `try...catch` only works for RUNTIME errors (or Exceptions) - Meaning if there are syntactic errors, such as forgetting to close a bracket, so it can only handle valid code!

&nbsp;

## The Error Object
#

The error object has two main properties:

`name`:
* The type of error that occurred. For example - an undefined variable returns a `"ReferenceError"`.

`message`:
* A description of the Error - message details about the error that occurred.

&nbsp;

## Common Error Types:

Reference Error
* A ReferenceError indicates that an invalid reference value has been detected: a JavaScript program is trying to read a variable that does not exist.

Syntax Error
* A SyntaxError is raised when a syntax error is found in a program.

Type Error
* A TypeError happens when a value has a type that’s different than the one expected.


&nbsp;



What if we want some piece of code to run after our `try...catch` block, no matter if it runs successfully or throws an error?

### `try...catch...finally...` block syntax:
```javascript
try {
    ... try to execute the code ...
} catch(e) {
    ... handle errors ...
} finally {
    ... always executes if no errors occur or errors are found ...
}
```


&nbsp;
#
## Resources and References:

JavaScript Info
* https://javascript.info/try-catch

Flavio Copes
* https://flaviocopes.com/javascript-errors/
* https://flaviocopes.com/javascript-custom-errors/
