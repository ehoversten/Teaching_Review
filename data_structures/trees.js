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


    // -- Pseudo Code for BFS (Breadth First Search) method -- //
        // Create a QUEUE (or ARRAY) and a variable (ARRAY) to store VALUES of NODES that have been VISITED
        // Place the ROOT NODE in the QUEUE
        // Continue to LOOP through the QUEUE as long as there are VALUES
            // * Dequeue a NODE from the QUEUE and push the VALUE of the NODE into the ARRAY that stores the NODES that have been (or are currently being) VISITED
            // * If there is a LEFT property on the NODE being DEQUEUED -> add it to the QUEUE (ARRAY)
            // * If there is RIGHT property on the NODE being DEQUEUED -> add it to the QUEUE (ARRAY)
        // Return the VISITED (ARRAY) variable
    bfs() {
        if(!this.root) {
            return null;
        }

        let queue = [this.root];
        let data = [];
        let current;

        while(queue.length > 0) {
            current = queue.shift();
            data.push(current.value);
            
            if(current.left) {
                queue.push(current.left);
            }
            
            if(current.right) {
                queue.push(current.right);
            }
        }

        return data;
    }

    // -- Pseudo Code for DFS - Pre Order (Depth First Search) method -- //
        // Create a ARRAY to store VISITED NODES
        // Store the ROOT in a variable (also use to traverse our tree)
        // Write a helper() function that accepts a NODE
            // * Push the VALUE of the NODE into the VISITED NODES ARRAY
            // * If the NODE has a LEFT property, call the helper() function with the LEFT property on the NODE
            // * If the NODE has a RIGHT property, call the helper() function with the RIGHT property on the NODE
        // Invoke the helper() function with the CURRENT NODE
        // Return the ARRAY
    dfsPre() {
        if(!this.root) {
            return undefined;
        }

        let data = [];
        let current = this.root;

        function helper(checkNode) {
            data.push(checkNode.value);

            if(checkNode.left) {
                current = checkNode.left;
                helper(current);
            }

            if(checkNode.right) {
                current = checkNode.right;
                helper(current);
            }
        }

        helper(current);
        return data;
    }
} 


let tree = new BinarySearchTree();
console.log(tree);

tree.insert(20);
tree.insert(10);
tree.insert(30);
tree.insert(5);
tree.insert(15);
tree.insert(25);
tree.insert(35);
tree.insert(8);