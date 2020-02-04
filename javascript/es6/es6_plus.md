# ES6 JavaScript 

## Syntatic Sugar

## Template Literals


## let, var, and const and Function vs Block Scope

### Variable Scope

Scope in JavaScript refers to the current `execution context` of code, this determines where variable can and cannot be accessed in JavaScript.

* Global variables are those declared outside of a block
* Local variables are those declared inside of a block

Variables declared with the `var` keyword are `function-scoped`, meaning they recognize functions as having a separate `local` scope. Variables declared in functions are not accessible from the global scope.


Keywords `let` and `const` are `BLOCK-scoped`. This means that a new, `local scope` is created from any kind of block, including `function` blocks, `if` statements, and `for` and `while` loops.


&nbsp;   
| Keyword | Scope | Hoisting | Can Be Reassigned Can Be Redeclared ? |
|---------|-------|----------|-------------------------------------|
| var | Function scope | Yes | Yes | Yes |
| let | Block scope | No | Yes | No |
| const | Block scope | No | No | No |

********
** EXAMPLE of var and let in a for() loop
********

## Hoisting and Closures

## Arrow Functions () => {}

## Object Destructuring

## Rest and Spread

## Promises

## Async / Await


#

## Resources:


* https://www.taniarascia.com/es6-syntax-and-feature-overview/

* https://www.digitalocean.com/community/tutorials/understanding-variables-scope-hoisting-in-javascript#hoisting
