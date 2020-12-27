// This is our starting point into the DOM using jQuery

// $(document).ready(function () {
//     // all custom jQuery will go here
// });

    // * We access the DOM with jQuery and apply an action with a method.A basic jQuery example follows this format.
        // > $("selector").method();

$(document).ready(function () {
    $("#demo").html("Hello, World!");

    $('#trigger').click(function() {
        console.log("Button Clicked!")
        $('#event').html("You triggered me!")
    });

    // Anything we want to be able to be ACCESSED from everywhere in our current FILE, Let's make sure that we ** DEFINE IT GLOBALLY **

    // Let's Create an ARRAY to hold all our TASKS so we can use them later
    var tasks = ["one", "two"];

        // Let's GRAB a reference to the <ul> (unordered list HTML element)
    var domList = $("#all-tasks");

    // Let's grab the user input (the <input> element that is part of our FORM)
    var newTask = $("#task");
    console.log(newTask);


    // ** We need to have the ability to capture our USERS input
        // So what might we GRAB as a reference to know when our user INPUT is ready to be captured? (Let's track when the USER clicks on the SUBMIT BUTTON)
    var submitBtn = $("#submit");
    
    // Once we have the REFERENCE to the BUTTON let's capture the SUBMISSION EVENT 
    $(submitBtn).on('click', function(event) {
        event.preventDefault();
        // Here we can GRAB the VALUE that the USER entered in the INPUT and put that into a VARIABLE to use later
        var thatTask = $("#task").val();
        // Verify that we captured the VALUE
        console.log("User Entered ...")
        console.log(thatTask);

        console.log("********")
        // Let's now ADD this new User input to our TASKS ARRAY
        tasks.push(thatTask);

        // ** TESTING ** //
        // VERIFY we have what we expect (?)
            // console.log("Tasks ARRAY contains...");
            // console.log(tasks);

        // What if we want to CLEAR the FORM INPUT element after we have CAPTURED the VALUE that the User supplied (?)
            // We can simply RESET the VALUE of the HTML ELEMENT that we REFERENCED by reassigning it to an empty string
        $('#task').empty();

        // Why do we REPEAT the ITEMS that are already in our LIST on the DOM (?) 
            // --> COMMENT OUT THE LINE BELOW to observe what happens if we don't CLEAR the contents (the <li> elements within the <ul> 'unordered list') of the HTML ELEMENT before adding the NEW TASK to our data array

        domList.empty();
        // ^^^ this makes sure that anything in the <ul> is removed from the DOM (browser window --> open the INSPECTOR and verify this is happening when we click the submit button) 

        // Call our function that will DISPLAY all the items in the TASK ARRAY
        addItem();
    });


    // Let's Create a separate function to handle ONLY THE TASK of displaying the items in our TASK ARRAY
    function addItem() {

        // ** TESTING ** //
        console.log("Adding items");
        console.log(tasks);

        // Now let's DISPLAY on the DOM all the TASKS that we have in our TASK_ARRAY
            // * How about we use a 'forEach()' style loop since we know that we want to run the following logic on EVERY VALUE (ITEM) in the ARRAY --> This could also be accomplished with a 'for()' loop just as well!  
        $.each(tasks, function(index, value) {
            // We need to FIRST create (Dynamically) an HTML element to store EACH task to display
            var listItem = $("<li>");
    
            // ** TESTING ** //
            // console.log(listItem);
    
            // Add a VALUE to the NEW element we just created
            listItem.text(value);
            console.log("Index: " + index + " - Value: " + value);

            // Add the new Dynamic Element to the <ul> on the DOM
            domList.append(listItem);
        });       
    }

    // IF we have any items (or tasks) in our ARRAY to start, Let's make sure that we INVOKE the function that ADDS the items and puts them in the DOM for us
    addItem();
});
