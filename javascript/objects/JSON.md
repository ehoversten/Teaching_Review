# What is JSON? 


# What is a JSON Object?


# Why do we need and how do we use JSON OBJECTS?

* A common use of JSON is to exchange data to/from a web server.

* When (a client/browser) receiving data from a web server, the data is always a string.

* For sending data from server to client in a string form representation of an OBJECT in a respective language (ex: Python, JavaScript, PHP, Java).

# parse() an OBJECT

Parse the data with JSON.parse(), and the data becomes a JavaScript object.



# stringify() an OBJECT

#### Use the JavaScript function JSON.stringify() to convert an OBJECT into a string.

```javascript
var myJSON = JSON.stringify(obj);
```

myJSON is now a string, and ready to be sent to a server:



## Array as JSON

When using the JSON.parse() on a JSON derived from an array, the method will return a JavaScript array, instead of a JavaScript object.
