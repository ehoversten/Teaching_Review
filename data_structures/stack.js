/* 

    Exploring the Stack Data Structure

    LIFO - Last In First Out

*/ 

// -- Define a Node to hold the VALUE at the nodes current location, and a POINTER to the NEXT Node in our STACK -- //
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


// -- Define our STACK -- //
class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    // -- Pseudo Code for PUSH method -- //
        // Function should accept a VALUE
        // Create a new NODE with the VALUE argument
        // IF the STACK is empty, set the FIRST and LAST properties to be the new NODE
        // IF the STACK SIZE is at least 1, create a variable that stores the current FIRST property on the STACK 
        // Reset FIRST property to be the new NODE
        // Set the NEXT property on the new NODE to be the previous variable/Node
        // Increment the STACK SIZE
    push(value) {
        let newNode = new Node(value);
        if(!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            let current = this.first;
            this.first = newNode;
            newNode.next = current;
        }
        this.size++
        return this.size;
    }
}

// -- Create a new STACK -- //
let stack = new Stack();
console.log(stack);
