const gimli = {
    name: "Gimli",
    race: "dwarf",
    weapon: "axe",
    greet: function () {
        return `Hi, my name is ${this.name}!`;
    },
};

console.log(gimli);
gimli.age = 139;
console.log("**************");
console.log(gimli);

// Add new fight method to gimli
gimli.fight = function fight() {
    return `Gimli attacks with an ${this.weapon}.`;
}

// Once we have created this new object method, we can call it as we did above.
gimli.fight();
console.log("**************");


for (let key in gimli) {
    console.log(gimli[key]);
}


console.log(Object.keys(gimli));