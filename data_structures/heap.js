/* 

    Exploring the Heap Data Structure

    ** Elements of a TREE ** 
        - Root: The top NODE in a TREE
        - Child: A NODE directly connected to another NODE when moving away from the ROOT
        - Parent: A NODE that has other NODES connected below it in the TREE
        - Siblings: A group of NODES with the same PARENT
        - Leaf: A NODE with no CHILDREN
        - Edge: The connection between one NODE and another.

    
    ** Max Binary Heap **
        - Every PARENT NODE has at most two CHILDREN
        - Every NODE to the LEFT of the PARENT is LESS than the PARENT NODE
        - Every NODE to the RIGHT of the PARENT is GREATER than the PARENT NODE


    ** PARENT / CHILD Relation ** 
        - For any CHILD NODE at INDEX 'n' : The PARENT NODE is at INDEX (n-1)/2
        - For any INDEX of an array 'n':
            * Left Child is located at INDEX -> '2n + 1'
            * Right Child is located at INDEX -> '2n + 2'

    Big-O of Heaps:
        - Insertion - O(log n)
        - Searching - O(log n)

*/ 

// -- Define our HEAP (Max Binary Heap) -- //
class Heap {
    constructor() {
        this.values = [];
    }

    // -- Pseudo Code for INSERT method -- //
        // PUSH the new VALUE into the VALUES property on the HEAP
        // Bubble MAX Value Up:
            // - Create an INDEX variable that holds the LENGTH of the VALUES ARRAY minus one
            // - Create a variable for the PARENT INDEX [ Math.floor((index-1)/2) ]
            // - Loop through the values in the VALUES ARRAY
                // * Swap the value of the VALUES element at the PARENT INDEX with the VALUE of the element property at the CHILD INDEX
                // * Set the INDEX to be the PARENT INDEX, repeat loop
    insert(value) {
        
        this.values.push(value);
        let idx = this.values.length - 1;
        const element = this.values[idx];

        while(idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            let parent = this.values[parentIdx];

            if(element <= parent) {
                break;
            }

            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }

        return this;
    }


}

let heap = new Heap();
console.log(heap);