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

## Resources and References:

JavaScript Info
* https://javascript.info/try-catch
