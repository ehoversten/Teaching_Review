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

    // -- Pseudo Code for SHIFT method -- //
        // IF LENGTH is 0, return 'undefined'
        // Create a variable to store the current HEAD property
        // IF LENGTH is 1 - set HEAD and TAIL to be NULL
        // Set HEAD to be the NEXT property of the old head
        // Set the new HEAD's PREV property to be NULL
        // Set the old head's NEXT property to be NULL
        // Decrement the LENGTH
        // Return the OLD HEAD NODE
    shift() {
        if(this.length == 0) {
            return undefined;
        }
        let oldHead = this.head;
        if(this.length == 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead;
    }

    // -- Pseudo Code for UNSHIFT method -- //
        // This function accepts a value
        // Create a new NODE with the VALUE input
        // IF LENGTH is 0 - Set HEAD and TAIL properties to be the NEW NODE
        // Otherwise - Set PREV property on the HEAD to be the NEW NODE
        // Set NEXT property on the NEW NODE to be the HEAD property
        // Update HEAD to be the NEW NODE 
        // Increment the LENGTH of the LIST
        // Return LIST
    unshift(value) {
        let newNode = new Node(value);
        if(this.length == 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    // -- Pseudo Code for GET method -- //
        // Function accepts an INDEX value
        // If INDEX is less than 0 or greater than the LENGTH of the LIST, return NULL
        // If INDEX is less than or equal to half the LENGTH of the LIST
            // Loop through the LIST starting from the HEAD moving towards the middle
            // Return NODE at INDEX
        // If INDEX is greater than half the LENGTH of the LIST
            // Loop through the LIST starting from the TAIL towards the middle
            // Return NODE at INDEX
    get(index) {
        if(index < 0 || index > this.length) {
            return null;
        }
        let count;
        let current;
        let middle = Math.floor(this.length / 2);
        // console.log(middle);
        if(index <= middle) {
            current = this.head;
            count = 0;
            while(count < index) {
                current = current.next;
                count++;
            }
        } else {
            current = this.tail;
            count = this.length - 1;
            while(count > index) {
                current = current.prev;
                count--;
            }
        }
        return current;
    }

    // -- Pseudo Code for SET method -- //
        // Function accepts an INDEX and a VALUE
        // Create a variable which is the result of using the GET() method and the INDEX input
        // IF the GET() method returns a valid NODE, set the VALUE of the NODE to the input VALUE and return 'true'
        // ELSE return 'false'
    set(index, value) {
        if(index < 0 || index > this.length) {
            return false;
        } else {
            let setNode = this.get(index);
            setNode.val = value;
            return true;
        }
    }

}

// -- Create New List -- //
let dbl = new DoublyLinkedList();
console.log(dbl);

// -- TESTING -- //
dbl.push(100);
dbl.push(200);
dbl.push(300);
dbl.push(400);
dbl.push(500);
console.log(dbl);
