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

    // -- Pseudo Code for POP method -- //
    // IF there are no Nodes in the LIST returned 'undefined'
    // Loop through the LIST until you reach the TAIL
    // Set the NEXT property of the 2nd to last Node to 'null'
    // Set the TAIL to be the 2nd to last Node
    // Decrement the LENGTH of the LIST by one
    // Return the value of the removed Node
    pop() {
        if(!this.head) {
            return undefined;
        } 
        let currentNode = this.head;
        // console.log(currentNode);
        while(currentNode.next.next !== null) {
            currentNode = currentNode.next
            // console.log(currentNode);
        }
        let popVal = currentNode.next.val;
        currentNode.next = null;
        this.tail = currentNode;
        this.length--;
        return popVal;
    }
}



let list = new SinglyLinkedList();
console.log(list);

list.push(10);
// console.log(list);

list.push(99);
// console.log(list);

list.push(25);
// console.log(list);

list.push(50);
console.log(list);


let a = list.pop();
console.log(a);
console.log(list);