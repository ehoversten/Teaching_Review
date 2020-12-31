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
        - Insertion - O (log(n))
        - Removal - O (log(n))
        - Searching - O(n)

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


    // -- Pseudo Code for REMOVE (max) method -- //
        // Swap the value at the FIRST INDEX with the value at the LAST INDEX from the VALUES PROPERTY ARRAY
        // POP the VALUE from the end of the VALUES ARRAY
        // Have the new ROOT "sink down" to its new correct index location
            // - Your PARENT INDEX starts at zero (the root) 
            // - Find the INDEX of the LEFT CHILD: 2 * (index + 1)
            // - Find the INDEX of the RIGHT CHILD: 2 * (index + 2)
                // * If the LEFT or RIGHT child is greater than the ELEMENT - SWAP 
                // * If both LEFT and RIGHT children are larger, SWAP with the largest child
            // - The CHILD INDEX you swapped to now becomes the new PARENT INDEX
            // - Keep looping and the swapping until neither child is larger than the element
        // Return the old ROOT
    removeMax() {
        let max = this.values[0];
        // let tmp = this.values[this.values.length - 1];
        let tmp = this.values.pop();

        if(this.values.length > 0) {
            this.values[0] = tmp;
            this.sortDown();
        }
        return max;
    }

    // Sorting Elements Down
    sortDown() {

        let idx = 0;
        let length = this.values.length;
        // let rmv = this.values.pop();
        let elem = this.values[0];

        while(true) {
            let rightChildIdx = 2 * idx + 1;
            let leftChildIdx = 2 * idx + 2;

            let leftChild;
            let rightChild;
            let swap = null;

            if(leftChildIdx < length) {
                leftChild = this.values[leftChildIdx];
                if(leftChild > elem) {
                    swap = leftChildIdx;
                }
            }

            if(rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];
                if( 
                    (swap === null && rightChild > elem) || 
                    (swap !== null && rightChild > leftChild) 
                ) {
                    swap = rightChildIdx;
                }
            }

            if(swap === null) {
                break;
            }

            this.values[idx] = this.values[swap];
            this.values[swap] = elem;
            idx = swap;
        }
    }

}

let heap = new Heap();
console.log(heap);

// heap.insert(41);
// heap.insert(39);
// heap.insert(33);
// heap.insert(18);
// heap.insert(27);
// heap.insert(12);
// heap.insert(55);