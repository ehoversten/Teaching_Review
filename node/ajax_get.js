// In the web client you'll make a call to a page
// http://localhost:3000/
// This corresponds to a route on server.js:
app.get("/", function (req, res) {
    // send out the correct client html file
    res.sendFile(path.join(__dirname, "home.html"));
})
// In your client-side code, you may make a call like this:
$.ajax({
    method: "get",
    url: "/api/xxxxxx"
}).then(function (resp) {
    // parse the response sent back from the server
});
// The url param above corresponds to a route in your server.js file
app.get("/api/xxxxx", function (req, res) {
    // send a json response
    res.json({ test: "ok" });
})