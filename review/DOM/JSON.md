# What is JSON?

- JSON is a file format that’s used to store and interchange data.

- Data is stored in a set of ` 'key':'value' ` pairs.


```javascript
{
    "name": "John Doe",
    "age": 30
}
```

&nbsp;  
## Encoding and decoding `JSON` in JavaScript

Before it can be used in a JavaScript program, a JSON in string format must be parsed and transformed in data that JavaScript can use. Enter ...

* `JSON.parse()` takes a JSON string as its parameter, and returns an object that contains the parsed JSON

* `JSON.stringify()` takes a JavaScript object as its parameter, and returns a string that represents it in JSON:

&nbsp;   
## JSON supported data types:

* `Number`: any number that’s not wrapped in quotes
* `String`: any set of characters wrapped in quotes
* `Boolean`: true or false
* `Array`: a list of values, wrapped in square brackets
* `Object`: a set of key-value pairs, wrapped in curly brackets
* `null`: the null word, which represents an empty value
