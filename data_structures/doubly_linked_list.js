/* 

    Exploring the Doubly Linked List Data Structure



*/ 

// Create a new Node with three properties
   // - 1) Piece of Data - Val
   // - 2) Reference to Next Node Element - next
   // - 2) Reference to Previous Node Element - prev
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

// Define/Initialize a New List
class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // -- Pseudo Code for PUSH method -- //
        // Create a new NODE with the VALUE passed to the function
        // IF the HEAD property is NULL set the HEAD and TAIL to be the newly created NODE
        // IF not, set the NEXT property on the TAIL to be the new NODE
        // Set the PREVIOUS property on the new NODE to point to the TAIL
        // Set the TAIL to be the new NODE
        // Increment the LENGTH property of the LIST
        // Return the LIST
    push(value) {
        let newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    // -- Pseudo Code for POP method -- //
        // IF no there is no HEAD property value, return 'undefined'
        // Create variable to store current TAIL
        // IF LENGTH is 1, set HEAD and TAIL to be NULL
        // Update TAIL to be the previous NODE
        // Set the newTail's NEXT property to NULL
        // Decrement the LENGTH
        // Return the VALUE of the removed NODE
    pop() {
        if(!this.head) {
            return undefined;
        }

        let popNode = this.tail;
        if(this.length == 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = popNode.prev;
            this.tail.next = null;
            popNode.prev = null;
        }
        this.length--;
        return popNode.val;
    }
}


let dbl = new DoublyLinkedList();
console.log(dbl);
