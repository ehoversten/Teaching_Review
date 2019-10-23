# Loops in JavaScript

###  There are many different kinds of loops, but they all essentially do the same thing: they `repeat an action some number of times` (and it's actually possible that number could be zero). The various loop mechanisms offer different ways to determine the start and end points of the loop.


&nbsp; 
## The `do... while` Loop:

### The do...while statement repeats until a specified condition evaluates to false. 

Syntax:
```javascript
do {
  // code that runs as long as the test condition passed to the while() statement evaluates to TRUE
} while (test_condition);
```
&nbsp; 
### The code after the `do` statement is `always executed once` before the test condition is checked. Then again until the while test condition returns `false`

Example:
```javascript
let i = 0;

do {
  i += 1;
  console.log(i);
} while (i < 5);
```
&nbsp; 
## The `while` Loop:

### A while statement executes its statements as long as a specified condition evaluates to `true`.
```javascript
while (test_condition) {
  // code that runs as long as the test condition passed to the while() statement evaluates to TRUE
}

// Program continues as normal ...
```

### Example: 
```javascript
let n = 0;

while (n < 3) {
  n++;
  console.log(n);
}

// Program execution continues ...
```

&nbsp; 
## The `for` Loop:

### The for statement is a type of loop that will use up to three optional expressions( the `initialization`, the `condition`, and the final expression, also known as `incrementation` ) to implement the repeated execution of a code block.

```javascript
for (initialization; condition; final expression) {
    // code to be executed as long as the condition evaluates to TRUE
}
``` 
1) ### The first expression is the `initialization`
2) ### Next the `condition` is run EVERY iteration through the loop
3) ### Lastly the `final expression` is executed at the end of each loop. This will modify our `INCREMENTOR`, then pass that value to our `condition` to be evaluated again

&nbsp; 
### Example:
```javascript
// Initialize a for statement with 5 iterations
for (let i = 0; i < 4; i++) {
    // Print each iteration to the console
    console.log(i);
}

// output: 0
//         1
//         2
//         3
//         4
```

