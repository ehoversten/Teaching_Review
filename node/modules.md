# What are Modules? (in NodeJS)

## A module encapsulates related code into a single unit of code. When creating a module, this can be interpreted as moving all related functions into a file.

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
