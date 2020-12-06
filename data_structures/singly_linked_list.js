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
        // let popVal = currentNode.next.val;
        let popNode = currentNode.next;
        currentNode.next = null;
        this.tail = currentNode;
        this.length--;
        // return popVal;
        return popNode;

        // -- ALTERNATIVE SOLUTION -- //
        // var current = this.head;
        // var newTail = current;
        // while(current.next) {
        //     newTail = current;
        //     current = current.next;
        // }
        // this.tail = newTail;
        // this.tail.next = null;
        // if(this.length === 0) {
        //     this.head = null;
        //     this.tail = null;
        // }
        // return current;
    }

    // -- Pseudo Code for SHIFT method -- //
        // IF there are no Nodes in the LIST, return 'undefined'
        // Store current Node in a variable to be returned to the calling function
        // Set the HEAD property to be the current head's NEXT property
        // Decrement the LENGTH of our LIST by one
        // Return the Node being removed
    shift() {
        if(list.length === 0 ) return undefined;
        let current = this.head;
        // console.log("*******")
        // console.table(current);
        this.head = current.next;
        // console.table(this.head);
        this.length--;
        if(this.length === 0) {
            this.tail = null;
        }
        return current;
    }

    // -- Pseudo Code for UNSHIFT method -- //
        // Function accepts a VALUE
        // Create a new Node, assign value input to Node.val property
        // IF no HEAD exists in LIST, set HEAD & TAIL to new Node
        // Otherwise - set new Node to be the new HEAD in the LIST
        // Increment LENGTH of LIST by one
        // Return Linked LIST
    unshift(val) {
        let newNode = new Node(val);
        if(!this.head) {
            this.head = newNode;
        }
        let oldHead = this.head;
        this.head = newNode;
        newNode.next = oldHead;
        this.length++;
        return this;
    }
}


// -- TESTING -- //
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
console.log("**********");

// let a = list.pop();
// console.log(a);
// console.log(list);

// let b = list.shift();
// console.log(b);
// console.log(list);

let c = list.unshift(5);
// console.log(b);
console.log(list);