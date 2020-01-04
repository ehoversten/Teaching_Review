# What is JSON? 

* JSON: Stands for `J`ava`S`cript `O`bject `N`otation.

* JSON is a syntax for storing and exchanging data. (boring ...)

* JSON is text, written with JavaScript object notation.


# What is a JSON Object?


# Why do we need and how do we use JSON OBJECTS?

* A common use of JSON is to exchange data to/from a web server.

* When (a client/browser) receiving data from a web server, the data is always a string.

* For sending data from server to client in a string form representation of an OBJECT in a respective language (ex: Python, JavaScript, PHP, Java).

When exchanging data between a browser and a server, the data can only be text.

JSON is text, and we can convert any JavaScript object into JSON, and send JSON to the server.

We can also convert any JSON received from the server into JavaScript objects.

This way we can work with the data as JavaScript objects, with no complicated parsing and translations.

## Sending Data
If you have data stored in a JavaScript object, you can convert the object into JSON, and send it to a server:
```javascript
var myObj = {name: "John", age: 31, city: "New York"};
var myJSON = JSON.stringify(myObj);
console.log(myJSON); // output -> { "name": "John", "age": "31", "city": "New York" }
}
```

## Receiving Data
If you receive data in JSON format, you can convert it into a JavaScript object:



# parse() an OBJECT

Parse the data with JSON.parse(), and the data becomes a JavaScript object.



# stringify() an OBJECT

#### Use the JavaScript function JSON.stringify() to convert an OBJECT into a string.

* The JSON.stringify() method converts a JavaScript object or value to a JSON string,

```javascript
var myJSON = JSON.stringify(obj);
```

myJSON is now a string, and ready to be sent to a server:



## Array as JSON

When using the JSON.parse() on a JSON derived from an array, the method will return a JavaScript array, instead of a JavaScript object.


# Resources

* https://www.copterlabs.com/json-what-it-is-how-it-works-how-to-use-it/

* https://alligator.io/js/json-parse-stringify

* https://medium.com/javascript-in-plain-english/how-to-use-stringify-and-parse-in-javascript-6b637b571a32

