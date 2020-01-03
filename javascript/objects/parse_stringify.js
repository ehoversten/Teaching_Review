// This is a JavaScript Object (notice the " " around the "key": "value" pair)
var userObject = {
    email: "xyz",
    password: "abc",
    username: "Bill"
}
// Let's see what it looks like
console.log(userObject);

// This is a JSON Object (notice the " " around the "key": "value" pair)
var userObjectJSON = {
    "email": "me@gmail.com",
    "password": "secret",
    "username": "Manhattan"
}
// Let's see what it looks like
console.log(userObjectJSON);

console.log("**************");

// To change one from the other we have to use OBJ.parse and OBJ.stringify
var convertedToJSON = JSON.stringify(userObject);
// Let's Compare
console.log(convertedToJSON);

console.log("**************");

var convertBack = JSON.parse(convertedToJSON);
// Let's Compare
console.log(convertBack);

console.log("**************");

// Note that the method JSON.parse() is expecting a STRING as an ARGUMENT, so we write out our whole OBJECT as a STRING
var convertedFromJSON = JSON.parse('{"email":"me@gmail.com", "password":"secret", "username":"Manhattan" }');

// Let's Compare
console.log(convertedFromJSON);

