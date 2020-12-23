
// Let's declare our variables 
var box = document.getElementById("box");
var title = document.getElementById("title");
var questions = document.getElementById("questions");

// Button to Remove Elements From the DOM
var rmvButton = document.getElementById("removeIt");
rmvButton.addEventListener("click", function (event) {
    // Let's take a look at the event!
    // console.log(event)
    // console.log(event.target);
    console.log(event.target.value);

    // This completely removes the ELEMENT FROM THE DOM!!
    // REMEMBER if we choose to remove it from the DOM, we can no longer use it to update TEXT on the DOM. 
    box.removeChild(title);

    // Let's grab all the <li> tags with 'class="list-item"'
    let items = document.querySelectorAll(".list-item");
    console.log(items);

    // This method uses a loop of the 'items' ARRAY of NODES that we declared globally above.
    for (var i = 0; i < items.length; i++) {
        questions.removeChild(items[i]);
    }
    // Notice that after we click the button here that the <ul> with id of 'questions' is still there and we can DYNAMICALLY ADD new items to that HTML ELEMENT

    // See for yourself!
    // Open up the Chrome Browser Dev Tools and see that the <h1> element has now been removed from the DOM!
    // But the <ul> element is still there and we can add new content to it!

});

var addButton = document.getElementById("addIt");
addButton.addEventListener("click", function (event) {
    // Let's take a look at the event!
    // console.log(event)
    // console.log(event.target);
    console.log(event.target.value);

    // We have to DYNAMICALLY CREATE a new HTML ELEMENT
    let newItem = document.createElement("li");

    // We can add a 'class' ATTRIBUTE to our NEW ELEMENT
    newItem.classList.add("list-item");
    // *** TRY IT!! *** COMMENT OUT the line above and see how our new DYNAMICALLY created li elements DO NOT get removed from the <ul> element

    // We need to put contect (text) into our new item
    // newItem.textContent = "I am new content!";
    newItem.innerHTML = "I am new";

    // Don't forget the new element we create will not be seen untill we APPEND it to an element in the DOM
    questions.append(newItem);
})

// This function will simply change or update the text within the DOM element connected to the variable 'title'
var changeButton = document.getElementById("changeIt");
changeButton.addEventListener("click", function (event) {
    // Let's take a look at the event!
    // console.log(event)
    // console.log(event.target);
    console.log(event.target.value);

    // EITHER ONE OF THESE WILL HAVE THE DESIRED EFFECT!
    // title.innerHTML = "Changed Value";
    title.textContent = "Changed the Text Content";
})
