$(document).ready(function() {

    $("#nameSubmit").on('click', function (event) {
        // We prevent the 'submit' button from refreshing the browser on Submit
        event.preventDefault();

        console.log("submitted");
        // Let's log the value we submitted in the form input
        // console.log(`Name: ${$("#userName").val()}`);

        let user = {
            name: $("#userName").val()
        }

        console.log(user);
        // This will return an error because it's interpolating the OBJECT and the string we are passing to the log function
        // console.log(`User Obj: ${user}`);

    });

    $("#submitBtn").on('click', function(event) {
        event.preventDefault();

        // console.log($("#emailName").val());
        // console.log($("#pass").val());

        let userAuth = {
            email: $("#emailName").val(),
            password: $("#pass").val()
        }

        console.log(userAuth);
    });

});