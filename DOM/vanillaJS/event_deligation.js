// Here we just have an ARRAY of ITEMS
var groceries = ["Bananas", "Apples", "Oranges", "Grapes", "Blueberries"];

// We create an EMPTY ARRAY to track the users selection(s)
var userSelection = [];

// GRAB the CONTAINING DIV where our ITEMS will be listed
var list = document.getElementById("choices");

var listItems = document.querySelectorAll(".item-choice");


// GRAB a BUTTON ELEMENT and attach an EVENT LISTENER 
var loadBtn = document.getElementById("load");
loadBtn.addEventListener("click", function(event){
    console.log("Loading");
    
    // Loop Through our ITEMS ARRAY and ADD each ITEM to the DOM
    for(var i = 0; i < groceries.length; i++) {
        // Create a NEW ELEMENT
        var newItem = document.createElement('li');
        // Add ATTRIBUTES and CLASSES to NEW ELEMENT
        newItem.setAttribute("data", groceries[i]);
        newItem.setAttribute("id", i);
        newItem.classList.add("list-item");
        // Add CONTENT to NEW ELEMENT
        newItem.textContent = groceries[i];
        // Add NEW ELEMENT to DOM div
        list.appendChild(newItem);
    }
})

// 
list.addEventListener('click', function(event){
    event.preventDefault();

    // Since we added an EVENT LISTENER to the 'Containing DIV' we want to check that what we click on EXIST in the DIV.
    if (event.target.matches("li")) {
        // Let's Identify EACH LIST ITEM
        let identifier = event.target.id;
        // console.log(identifier);

        // 
        let valueKey = event.target.innerHTML;
        // console.log(valueKey);

        userSelection.push( 
            {   
                // IF WE DONT PARSE the 'id' it will remain a STRING in our array!
                // index: identifier,
                
                // *** NOTE!! how we PARSE the STRING and our index is now an INTEGER!!
                index: parseInt(identifier),
                val: valueKey
            }
        );
    }
    checkUserSelection();

})


function checkUserSelection() {
    console.log("User Array Contains:");
    console.log(userSelection);
}
