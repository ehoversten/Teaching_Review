/* 

    Exploring the Stack Data Structure



*/ 

// -- Create a Node to hold the VALUE at the nodes current location, and a POINTER to the NEXT Node in our STACK -- //
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


// -- Create our STACK -- //
class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }
}

