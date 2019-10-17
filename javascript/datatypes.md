# Dynamic typing

#### JavaScript is a loosely typed or a dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:

Ex:

```javascript
    var foo = 42;    // foo is now a number
    foo     = 'bar'; // foo is now a string
    foo     = true;  // foo is now a boolean
```

# Data types

#### The latest ECMAScript standard defines eight data types:

### Seven data types that are primitives:
#### -  Boolean
#### -  Null
#### -  Undefined
#### - Number
#### -  BigInt
#### -  String
#### -  Symbol

#
# and Object


## Boolean
#### - A boolean represents only one of two values: true, or false. Think of a boolean as an on/off or a yes/no switch.
```javascript
var boo1 = true;
var boo2 = false;
```

## Number
### - There is only one type of Number in JavaScript. Numbers can be written with or without a decimal point. A number can also be +Infinity, -Infinity, and NaN (not a number).
``` javascript
var num1 = 32;
var num2 = +Infinity;
var num3 = 32.00;
```

## String
#### - Strings are used for storing text. Strings must be inside of either double or single quotes. In JS, Strings are immutable (they cannot be changed).
```javascript
var str1 = 'hello, it is me';
var str2 = "hello, it's me";
```

## Null

#### - Null has one value: null. It is explicitly nothing.
```javascript
var nothing = null;
```

## Undefined
#### - A variable that has no value is undefined.
```javascript
var testVar;
console.log(testVar); // undefined
```

## Symbol
### - Symbols are new in ES6. A Symbol is an immutable primitive value that is unique. For the sake of brevity, that is the extent that this article will cover Symbols.
```javascript
const mySymbol = Symbol('mySymbol');
```

#
## What about Objects?

#### Objects are not a primitive data Type.

#### An object is a collection of properties. These properties are stored in key/value pairs. Properties can reference any type of data, including objects and/or primitive values.
```javascript
var obj = {
  key1: 'value',
  key2: 'value',
  key3: true,
  key4: 32,
  key5: {}
}
```



