// This is our starting point into the DOM using jQuery

// $(document).ready(function () {
//     // all custom jQuery will go here
// });

// We access the DOM with jQuery and apply an action with a method.A basic jQuery example follows this format.
// $("selector").method();


$(document).ready(function () {
    $("#root").html("Hello There Friend");

    $('#trigger').click(function () {
        $('#event').html("You triggered me!")
    });

    // Notice I didn't set $(".jumbotron") to a var this time?
    // If you only plan to use that selector once it doesn't need to be a var
    $("#random-button").on("click", function () {

        // ... we generate a random number
        var random = Math.floor(Math.random() * 1000) + 1;

        // ... and then dump the random number into our random-number div.
        $("#random-number").text(random);

    });

});
