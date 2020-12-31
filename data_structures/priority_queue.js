/* 

    Exploring the Priority Queue Data Structure

    ** Elements of a TREE ** 
        - Root: The top NODE in a TREE
        - Child: A NODE directly connected to another NODE when moving away from the ROOT
        - Parent: A NODE that has other NODES connected below it in the TREE
        - Siblings: A group of NODES with the same PARENT
        - Leaf: A NODE with no CHILDREN
        - Edge: The connection between one NODE and another.

    
    ** Min Binary Heap **
        - Every PARENT NODE has at most two CHILDREN
        - Every NODE to the LEFT of the PARENT is GREATER than the PARENT NODE
        - Every NODE to the RIGHT of the PARENT is GREATER than the PARENT NODE


    ** PARENT / CHILD Relation ** 
        - For any CHILD NODE at INDEX 'n' : The PARENT NODE is at INDEX (n-1)/2
        - For any INDEX of an array 'n':
            * Left Child is located at INDEX -> '2n + 1'
            * Right Child is located at INDEX -> '2n + 2'

    Big-O of Priority Queue:
        - Insertion - O log(n)
        - Searching - O log(n)

*/ 


// -- Define our Node -- //
class Node {
    constructor(value, priority) {
        this.value = value;
        this.priority = priority;
    }
}


// -- Define our Priority Queue -- //
class PriorityQueue {
    constructor(){
        this.values = [];
    }

    // -- Enqueue Method -- //
    enqueue(val, priority){
        let newNode = new Node(val, priority);
        this.values.push(newNode);
        this.bubbleUp();
    }
    // -- Enqueue Helper Method -- //
    bubbleUp(){
        let idx = this.values.length - 1;
        const element = this.values[idx];

        while(idx > 0){
            let parentIdx = Math.floor((idx - 1)/2);
            let parent = this.values[parentIdx];

            if(element.priority >= parent.priority) {
                break;
            }

            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }

    // -- Dequeue Helper Method -- //   
    dequeue(){
        const min = this.values[0];
        const end = this.values.pop();
        if(this.values.length > 0){
            this.values[0] = end;
            this.sinkDown();
        }
        return min;
    }
    // -- Dequeue Helper Method -- //
    sinkDown(){
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];

        while(true){
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild,rightChild;
            let swap = null;

            if(leftChildIdx < length){
                leftChild = this.values[leftChildIdx];
                if(leftChild.priority < element.priority) {
                    swap = leftChildIdx;
                }
            }

            if(rightChildIdx < length){
                rightChild = this.values[rightChildIdx];

                if(
                    (swap === null && rightChild.priority < element.priority) || 
                    (swap !== null && rightChild.priority < leftChild.priority)
                ) {
                   swap = rightChildIdx;
                }
            }

            if(swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }
}


let pq = new PriorityQueue();
console.log(pq);

pq.enqueue("common cold", 5);
pq.enqueue("gunshot wound", 1);
pq.enqueue("high fever", 4);
pq.enqueue("puncture wound", 6);
pq.enqueue("broken arm", 2);
console.log(pq);