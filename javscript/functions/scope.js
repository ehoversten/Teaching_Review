/*
- Variable Scope:

    Scope in JavaScript refers to the current context of code, which determines the accessibility of variables to JavaScript.The two types of scope are local and global:

* Global variables are those declared outside of a block
* Local variables are those declared inside of a block

*/

// Initialize a global variable
var species = "human";

function transform() {
    // Initialize a local, function-scoped variable
    var species = "werewolf";
    console.log(species);
}

// Log the global and local variable
console.log(species);
transform();
console.log(species);