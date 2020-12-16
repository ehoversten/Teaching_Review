/* 

    Exploring the Queue Data Structure

    FIFO - First In First Out

    Big-O of Queues:
        - Insertion - O(1)
        - Removal - O(n)
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

    // -- Pseudo Code for ENQUEUE method -- //
        // Function accepts a VALUE parameter
        // Create a new NODE and pass in the VALUE argument to the new NODE
        // If SIZE of QUEUE is 0, set the new NODE to be the FIRST and LAST properties of the QUEUE
        // Otherwise - Set the NEXT property on the CURRENT LAST to be the new NODE, then set the LAST property of the QUEUE to be the new NODE


    enqueue(value) {
        let newNode = new Node(value);
        if(!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            let temp = this.last;
            temp.next = newNode;
            this.last = newNode;
        }
        this.size++;
        return this.size;
    }

}

// -- Create a new QUEUE -- //
let que = new Queue();
console.log(que);