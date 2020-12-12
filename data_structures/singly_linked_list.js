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
            this.tail = newNode;
        } else {
            let oldHead = this.head;
            this.head = newNode;
            newNode.next = oldHead;
            // -- ALTERNATIVE -- //
            // newNode.next = this.head;
            // this.head = newNode;
        }

        this.length++;
        return this;
    }

    // -- Pseudo Code for GET method -- //
        // This function should accept an INDEX as an input
        // IF the INDEX is less than zero or greater than the LENGTH of the LIST, return NULL
        // Loop through the LIST until you reach the INDEX and return the NODE at the specified INDEX value
    get(index) {
        if(index < 0 || this.length < index) {
            console.log("No Node/Value at specified index");
            return null;
        }
        let count = 0;
        let current = this.head;
        while(count !== index) {
            current = current.next;
            count++;
        }
        return current;
    }

    // -- Pseudo Code for SET method -- //
        // Function should accept an INDEX and a VALUE
        // Using the GET() method find the specified node at the given INDEX
        // If INDEX of NODE is not in LIST return 'false'
        // Update VALUE of NODE at specified INDEX and return 'true'
    set(index, value) {
        if(index < 0 || index > this.length) {
            return false;
        }
        let updateNode = this.get(index);
        updateNode.val = value;
        return true;
    }

     // -- Pseudo Code for INSERT method -- //
        // Function should accept an INDEX and a VALUE
        // IF the INDEX is less than zero or greater than the LENGTH, return 'false'
        // IF the INDEX is the same as the LENGTH, push() the new node to the end of the list
        // IF the INDEX is 0 unshift() a new NODE to the start of the list
        // ELSE --> use the get() method to access the NODE at the INDEX - 1
        // Set the NEXT property on the NODE (at INDEX - 1) to point to the new NODE
        // Set the NEXT property on the new NODE to point at the previous NODE (at INDEX - 1)
        // Increment the LENGTH of the LIST
        // Return 'true'
    insert(index, value) {
        if(index < 0 || index > this.length) {
            return false;
        }

        if(index === this.length) {
            this.push(value);
            return true;
        }

        if(index === 0) {
            this.unshift(value);
            return true;
        }

        let newNode = new Node(value);
        let prevNode = this.get(index - 1);
        let temp = prevNode.next;
        prevNode.next = newNode;
        newNode.next = temp;
        this.length++
        return true;
    }

    // -- Pseudo Code for REMOVE method -- //
        // Function will take in an INDEX
        // IF the INDEX is less than zero or greater than the LENGTH, return 'undefined'
        // IF the INDEX is the same as the LENGTH - 1, use the pop() method
        // IF the INDEX is 0, use the shift() method
        // Otherwise --> use the get() method to access the NODE at INDEX - 1 position
        // Set the NEXT property on that NODE to be the NEXT property of the following NODE
        // Decrement the LENGTH
        // Return the VALUE of the NODE removed
    remove(index) {
        if(index < 0 || index > this.length) {
            return undefined;
        }

        if(index == this.length - 1) {
            let rmvValue = this.pop();
            return rmvValue;
        }

        if(index == 0) {
            let rmvValue = this.shift();
            return rmvValue;
        }

        // let rmvNode = this.get(index);
        let prevNode = this.get(index - 1);
        let rmvNode = prevNode.next
        // prevNode.next = rmvNode.next;
        prevNode.next = prevNode.next.next;
        this.length--;
        return rmvNode;
    }

    // -- Pseudo Code for REVERSE method -- //
        // Swap the HEAD and the TAIL
        // Create a variable called 'next'
        // Create a variable called 'prev'
        // Create a variable called 'node' and initialize it to the HEAD property
        // Loop through the list
        // Set the NEXT property on whatever NODE your currently on
        // Set 'prev' to be the value of the NODE property
        // Set the NODE variable to be the value of the 'next' variable
    reverse() {
        let tempHead = this.tail;
        let tempTail = this.head;
        this.tail = this.head;
        this.head = tempHead;

        let nextNode;
        let prevNode;

    }
}


// <--- TEST ---> //
let list = new SinglyLinkedList();
// console.log(list);

list.push(100);
// console.log(list);
list.push(200);
// console.log(list);
list.push(300);
// console.log(list);
list.push(400);
// console.log(list);
// list.push(7);
console.log("**********");
console.log(list);

// <--- TEST ---> //
// let a = list.pop();
// console.log(a);
// console.log(list);

// let b = list.shift();
// console.log(b);
// console.log(list);

// <--- TEST ---> //
// let c = list.unshift(5);
// console.log(b);
// console.log(list);

// <--- TEST ---> //
// let getIndex = list.get(2) // should return --> 25
// console.log(getIndex);

// getIndex = list.get(0) // should return --> 10
// console.log(getIndex);

// getIndex = list.get(5) // should return --> null
// console.log(getIndex);

// <--- TEST ---> //
// list.set(2, 27);
// getIndex = list.get(2);
// console.log(getIndex);

// <--- TEST ---> //
// list.insert(2, 250);
// console.table(list);
// console.log(list);

// <--- TEST ---> //
// let getOut = list.remove(1);
// console.log(getOut);

// console.log(list);