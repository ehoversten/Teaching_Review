/* 

    Exploring the Tree Data Structure

    ** Elements of a TREE ** 
        - Root: The top NODE in a TREE
        - Child: A NODE directly connected to another NODE when moving away from the ROOT
        - Parent: A NODE that has other NODES connected below it in the TREE
        - Siblings: A group of NODES with the same PARENT
        - Leaf: A NODE with no CHILDREN
        - Edge: The connection between one NODE and another.

    
    ** Binary Search Tree **
        - Every PARENT NODE has at most two CHILDREN
        - Every NODE to the LEFT of the PARENT is LESS than the PARENT NODE
        - Every NODE to the RIGHT of the PARENT is GREATER than the PARENT NODE

    Big-O of Trees:
        - Insertion - O(log n)
        - Searching - O(log n)

*/ 

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// -- Define our Tree (BST) -- //
class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    // -- Pseudo Code for INSERT method -- //
        // Create a new NODE
        // Start at ROOT:
            // * If ROOT is NULL, set new NODE as the ROOT
            // * If ROOT exists, check if the VALUE of the new NODE is GREATER than or LESS than the VALUE of the ROOT
            // * If NODE VALUE is GREATER:
                // - Check if there is a NODE to the RIGHT
                    // - If yes, move to CHILD NODE and repeat
                    // - If not, add new NODE as the RIGHT property 
            // * If NODE VALUE is LESS:
                // Check if there is a NODE to the LEFT
                    // - If yes, move to CHILD NODE and repeat
                    // - If not, add new NODE as the LEFT property 
    insert(value) {
        let newNode = new Node(value);
        if(!this.root) {
            this.root = newNode;
            console.log("ROOT");
            return this;
        } 

        let current = this.root;
        while(current.value) {

            if(newNode.value > current.value) {
                if(!current.right) {
                    current.right = newNode;
                    console.log("Placed RIGHT");
                    return this;
                } 
                current = current.right;
            } else {
                if(!current.left) {
                    current.left = newNode;
                    console.log("Placed LEFT");
                    return this;
                }
                current = current.left;
            }
            console.log("Compare Next");
        }
    }

    // -- Pseudo Code for FIND method -- //
        // Start a ROOT NODE
        // If no ROOT exists, return NULL
        // If VALUE is equal to ROOT NODE VALUE, return ROOT
        // Check if VALUE is GREATER than or LESS than VALUE at ROOT NODE
            // - If GREATER:
                // * Check if there is NODE to the RIGHT 
                    // - If yes, move to the NODE and repeat
                    // - If not, VALUE is not in TREE
            // - If LESS:
                // * Check if there is a NODE to the LEFT
                    // - If yes, move to the NODE and repeat
                    // - If not, VALUE is not in TREE
    find(value) {
        if(!this.root) {
            console.log("Tree is Empty");
            return null;
        }

        if(value == this.root.value) {
            return this.root;
        }

        let current = this.root;
        let found = false;

        while(current && !found) {
            // if(value == current.value) {
            //     console.log("Found Value");
            //     return current;
            // } 

            if(value > current.value) {
                current = current.right;
                console.log("Compare Next");
            } else if (value < current.value) {
                current = current.left;
                console.log("Compare Next");
            } else {
                found = true
            }
        }

        if(!found) {
            return undefined;
        }

        return current;
    }
} 


let tree = new BinarySearchTree();
console.log(tree);
