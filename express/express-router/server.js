// Bring in a reference to the express library we installed
const express = require("express");
// Declare a PORT that we want our server to be broadcast on
// We are also adding a configuration variable that will come in handy when we deploy to Heroku or AWS
const PORT = process.env.port || 5000;
// Bring in the Node path module 
const path = require('path');

// Create an Express Web Sever Instance
const app = express();


app.use(express.static(path.join(__dirname, "public")));

// Here we declare our routes
app.get("/", function(req, res) {
    res.send("Hello There");
})

// Connect our Server Application
app.listen(PORT, function() {
    console.log(`Server Listening on port: ${PORT}`);
});