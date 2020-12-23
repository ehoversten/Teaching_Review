
console.log("Connected");

// Let's Create an ARRAY to hold all our TASKS so we can use them later
var tasks = [];

// Let's grab the user input (the <input> element that is part of our FORM)
var newTask = document.getElementById("task");
console.log(newTask);

// ** We need to have the ability to capture our USERS input
    // So what might we GRAB as a reference to know when our user INPUT is ready to be captured? (Let's track when the USER clicks on the SUBMIT BUTTON)
var submitBtn = document.getElementById("submit");

// Once we have the REFERENCE to the BUTTON let's capture the SUBMISSION EVENT 
submitBtn.addEventListener('click', function(event) {
    event.preventDefault();
    // Here we can GRAB the VALUE that the USER entered in the INPUT and put that into a VARIABLE to use later
    var thatTask = document.getElementById("task").value;
    // Verify that we captured the VALUE
    console.log("User Entered ...")
    console.log(thatTask);

    console.log("********")
    // Let's now ADD this new User input to our TASKS ARRAY
    tasks.push(thatTask);
    // VERIFY we have what we expect (?)
    console.log("Tasks ARRAY contains...");
    console.log(tasks);
    // What if we want to CLEAR the FORM INPUT element after we have CAPTURED the VALUE that the User supplied (?)
        // We can simply RESET the VALUE of the HTML ELEMENT that we REFERENCED by reassigning it to an empty string
    newTask.value = "";

    
}) 
