/* 

    Exploring the Stack Data Structure

    LIFO - Last In First Out

    Big-O of Stacks:
        - Insertion - O(1)
        - Removal - O(1)
        - Searching - O(n)
        - Access - O(n)

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
            // this.first.next = current;
            newNode.next = current;
        }
        this.size++
        return this.size;
    }

    // -- Pseudo Code for POP method -- //
        // If SIZE of STACK is 0, return NULL
        // Otherwise - Create a temp variable to store the FIRST property on the STACK
        // If SIZE is 1, set the FIRST and LAST properties to NULL
        // If SIZE is greater than 1, set the FIRST property to be the NEXT property on the current Node's FIRST
        // Decrement the SIZE by 1
        // Return the value of the NODE removed
    pop() {
        if(!this.first) {
            return null;
        }
        let temp = this.first;
        // if(this.first == this.last) {
        if(this.size == 1) {
            // this.first = null;
            this.last == null;
        } else {
            this.first = temp.next;
            temp.first = null;
            // temp.next = null;
        }
        this.size--;
        return temp.value;
    }
}

// -- Create a new STACK -- //
let stack = new Stack();
console.log(stack);
