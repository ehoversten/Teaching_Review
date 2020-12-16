/* 

    Exploring the Queue Data Structure

    FIFO - First In First Out

    Big-O of Queues:
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

// -- Define our QUEUE -- //
class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
}