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

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
}


let tree = new BinarySearchTree();
console.log(tree);
