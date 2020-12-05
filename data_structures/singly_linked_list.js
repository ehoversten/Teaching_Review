/* 

    Exploring the Singly Linked List Data Structure



*/ 

// Create a new Node with two properties
   // - 1) Piece of Data - Val
   // - 2) Reference to Next Node Element - next
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}   

// Define/Initialize a New List
class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // -- Pseudo Code for PUSH method -- //
    // Function should accept an input value
    // Create a new Node using the value passed to the function
    // IF no HEAD exists, set HEAD and TAIL to be the new Node
    // Otherwise, set NEXT property on TAIL to be the new Node and set TAIL property on the list to be the new Node
    // Increment LENGTH property by one
    // Return the LIST
    push(val) {
        let newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++
        return this;
    }
}
