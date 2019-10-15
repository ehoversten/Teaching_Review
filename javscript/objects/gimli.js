// Let's create a very basic JavaScript Object

const gimli = {
    name: "Gimli",
    race: "dwarf",
    weapon: "axe",
    greet: function () {
        return `Hi, my name is ${this.name}!`;
    },
};

// How do we access the properties of the new object we have programmed? Let's take a look...
console.log(gimli);
gimli.age = 139;
console.log("**************");
console.log(gimli);

// We can ADD methods to our OBJECT even after it has been created
// Add new fight method to gimli
gimli.fight = function fight() {
    return `Gimli attacks with an ${this.weapon}.`;
}

// Once we have created this new object method, we can call it as we did above.
gimli.fight();
console.log("**************");

// What if we wanted to to LOOP THROUGH an OBJECT?
for (let key in gimli) {
    console.log(gimli[key]);
}

// Notice that we are using the built-in JavaScript Object Constructor, and it has some built-in methods we can use
console.log(Object.keys(gimli));
console.log("**************");
console.log(Object.values(gimli));
console.log("**************");
console.log(Object.entries(gimli));


/*

    Resources: 
    
    MDN Doc's: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics

    JavaScript Object Constructor Methods(MDN): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object

*/