# Objects

#### JavaScript is designed on a simple object-based paradigm. An object is a collection of properties, and a property is an association between a name (or key) and a value. A property's value can be a function, in which case the property is known as a method.

## Objects and properties

#### A JavaScript object has properties associated with it. A property of an object can be explained as a variable that is attached to the object. Object properties are basically the same as ordinary JavaScript variables, except for the attachment to objects. The properties of an object define the characteristics of the object. You access the properties of an object with a simple dot-notation:

```javascript
objectName.propertyName
```
#

## Creating an Object


#### There are two ways to construct an object in JavaScript:

 - The object literal, which uses *curly* brackets: {}
 - The object constructor, which uses the *new* keyword


```javascript
// Initialize object literal with curly brackets
const objectLiteral = {};


// Initialize object constructor with new Object
const objectConstructor = new Object();

```
#

## Properties and Methods

#### Objects can have properties and methods.

#### A property is the association between a name (key) and value within an object, and it can contain any datatype. A property generally refers to the characteristic of an object.

#### A method is a function that is the value of an object property, and therefore a task that an object can perform.

```javascript
// Initialize gimli object
const gimli = {
    name: "Gimli",
    race: "dwarf",
    weapon: "axe",
    greet: function() {
        return `Hi, my name is ${this.name}!`;
    },
};

```

## Accessing Object Properties

#### There are two ways to access an object's properties.

 - Dot notation: .
 - Bracket notation: [ ]

```javascript
// Retrieve the value of the weapon property using dot notation

gimli.weapon;

output -> "axe"
```

```javascript
// Retrieve the value of the weapon property using bracket notation

gimli["weapon"];

output -> "axe"
```

## Accessing Object Methods
```javascript
gimli.greet();

output -> "Hi, my name is Gimli!"
```

## Adding and Modifying Object Properties
In order to add a new property to an object, you would assign a new value to a property with the assignment operator (=).

For example, we can add a numerical data type to the gimli object as the new age property. Both the dot and bracket notation can be used to add a new object property.

```javascript
// Add new age property to gimli
gimli.age = 139;

// Add new age property to gimli
gimli["age"] = 139;

gimli.age;

output -> "139"
```

## A method can also be added to the object by using the same process.
```javascript
// Add new fight method to gimli
gimli.fight = function() {
    return `Gimli attacks with an ${this.weapon}.`;
}

// Once we have created this new object method, we can call it as we did above.
gimli.fight();


output -> "Gimli attacks with an axe."
```

## Removing Object Properties

#### In order to remove a property from an object, you will utilize the delete keyword. delete is an operator that removes a property from an object.

In the below example, we will remove the weapon property from gimli using delete.

```javascript
// Remove weapon from gimli
delete gimli.weapon;
```
#

## Looping through an Object

#### We can use ' *for...in* ' to traverse through all the properties of gimli and print them to the console. Using bracket notation, we can retrieve the property value as a variable, in this case key.

```javascript
// Iterate through properties of gimli
for (let key in gimli) {
  console.log(gimli[key]);
}

output -> 
            Gimli
            dwarf
            axe
            [Function: greet]
            139
            [Function: fight]
```

#### Another useful enumeration method is the Object.keys() method, which will return an array of the object's keys.

```javascript
// Initialize method on gimli object to return property keys
let gimli_keys = Object.keys(gimli);
// This will print out the ARRAY that was created and populated with the 'keys' of the Gimli OBJECT
console.log(gimli_keys);

output -> [ 'name', 'race', 'weapon', 'greet', 'age', 'fight' ]
```

#### We can also create an array of values
```javascript
// Initialize method on gimli object to return property keys
let gimli_values = Object.values(gimli);
// This will print out the ARRAY that was created and populated with the 'values' of the Gimli OBJECT
console.log(gimli_values);

output -> 
            [ 'Gimli',
            'dwarf',
            'axe',
            [Function: greet],
            139,
            [Function: fight] ]
```

#### How about both ['key':'value'] pairs?
```javascript
// Initialize method on gimli object to return property keys
let gimli_key_val = Object.entries(gimli);
// This will print out the ARRAY that was created and populated with the 'key' and 'value' pairs of the Gimli OBJECT
console.log(gimli_key_val);

output -> 
    [
        [ 'name', 'Gimli' ],
        [ 'race', 'dwarf' ],
        [ 'weapon', 'axe' ],
        [ 'greet', [Function: greet] ],
        [ 'age', 139 ],
        [ 'fight', [Function: fight] ]
    ]
```