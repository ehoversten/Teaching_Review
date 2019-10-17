# What are Modules? (in NodeJS)

## A module encapsulates related code into a single unit of code. When creating a module, this can be interpreted as moving all related functions into a file.

### In simple terms, a module is code that we group together for the purposes of sharing and reuse. Modules, therefore, allow us to break down complexity in our applications into small chunks.

#### For example - Let's define a few functions:
```javascript
// Let's call this file calc.js
function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}
```

#
## Exporting a Module:
#

### We can increase the utility of calc.js when its encapsulated code can be utilized in other files. How do we do that? We Export Them!!


Know that Module.exports is an OBJECT!
```javascript
var exports = module.exports = {};
```


```javascript
var exports = module.exports = {};

exports.add = function(x, y) {
    return x + y;
};

exports.subtract = function(x, y) {
    return x - y;
};
```

Or you may see it this way:

```javascript
module.exports.add = function(x, y) {
    return x + y;
};

module.exports.subtract = function(x, y) {
    return x - y;
};

// remember, exports and module.exports reference the same object!!
```

### So since exports is an OBJECT... Why not just have our function definitions inside that OBJECT? 

```javascript
module.exports = {
    add : function(x, y) {
        return x + y;
    },
    subtract : function(x, y) {
        return x - y;
    }
};
```

#
## Importing a Module:
#

### By exporting the functions of our calc.js file we make it publically available to any file or program that wants to import it.

######

#### So how do we import a file that has made functions or objects available? We `require` it!


```javascript
// in our main.js file
var calculations = require('./calc.js);
```


The keyword `require` returns an OBJECT, which references the value of module.exports for a given file.


Now we have access and can use (or call) those functions that were defined in another file.

```javascript
// in our main.js file
var calculations = require('./calc.js');

// we can call our add() function
calulations.add(2, 3);    // output: 5

// we can call our subtract() function
calulations.subtract(5, 2)  // output: 3
```

#


### Resources: 
- https://www.sitepoint.com/understanding-module-exports-exports-node-js/
- https://stackify.com/node-js-module-exports/