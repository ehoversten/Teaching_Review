// This is our starting point into the DOM using jQuery

// $(document).ready(function () {
//     // all custom jQuery will go here
// });

// We access the DOM with jQuery and apply an action with a method.A basic jQuery example follows this format.
// $("selector").method();


$(document).ready(function () {
    $("#demo").html("Hello, World!");

    $('#trigger').click(function() {
        $('#event').html("You triggered me!")
    });
});
