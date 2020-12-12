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
}
