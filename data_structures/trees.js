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
        - Insertion - O(x)
        - Removal - O(x)
        - Searching - O(x)
        - Access - O(x)

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
        // return this;
    }
}


let tree = new BinarySearchTree();
console.log(tree);
