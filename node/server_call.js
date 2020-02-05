/*
 * Notes:
 * The req object contains methods and properties for dealing with all the 
 *   info coming in FROM the client.
 * The res object contains methods and properties for sending data BACK to the 
 *   client.
 */



// Make sure this code is in every server.js file (or whatever you name it)
var express = require("express");
var path = require("path");
var app = express();
var PORT = 3000;  // or whatever port you want
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Express GET route which, when hit, returns a page located on the server. Be sure you are requiring "path" in the file.
app.get("/", function (req, res) {
    // Note that __dirname has two underscores in front of it
    res.sendFile(path.join(__dirname, "xxxxxxxxx.html"));
});


// Express GET route which, when hit, returns a JSON payload.
app.get("/", function (req, res) {
    // Sample data to return for testing
    res.json({ id: 1, name: "John Doe", email: "johndoe@gmail.com" });
});


// Express GET route which uses a wildcard. You can structure the route however you like, just be sure you preface the wildcard variable with a colon (":")
app.get("/api/:ref", function (req, res) {
    // Capture the specific part of the route and put it into a variable
    var item = req.params.ref;
    console.log(item);
    // Send back some type of response
    return res.json();
});



// Express POST route handler
app.post("/signin", function (req, res) {
    // Put all the post data submitted into a variable
    const dataSubmitted = req.body;
    // Process the data or do whatever
    // Return something back
    res.json({ id: 1, name: "John Doe", email: "johndoe@gmail.com" });
});


// Making an Ajax call in jQuery. The data object will build the entire query string for you (for GET requests), or construct the data object that is sent to the server (for POST requests). It's optional and can be removed if you don't want it. Source: https://api.jquery.com/jquery.ajax/
$.ajax({
    method: "GET", // or POST if needed
    url: "/xxxxxxxxxxx",
    data: {
    }
}).success(function (resp) {
    // This is called when a successful response is received
    // You'll often use the data you get back to either update DOM elements
    // or create new ones
}).error(function (err) {
    // This is called when an error is received. If you get an error you'll 
    // probably display something on-screen
});