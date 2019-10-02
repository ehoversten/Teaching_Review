
// Here we DECALRE a new array using the 'new' constructor keyword
let notebook = new Array();

console.log('New Notebook Array');
console.log(notes);

// Here we DECLARE a new ARRAY LITERAL called 'notes'
const notes = [
    'Note 1',
    'Note 2',
    'Note 3',
    'Note 4',
    'Note 5',
];

console.log('Initial Notes Array');
console.log(notes);

// Let's push an item on to the array
notes.push('New note 1 added');
console.log('Notes Array after pushing a note at the end of the array using push();');
console.log(notes);

// Push another item onto the array and log it
notes.push('New note 2 added', 'New note 3 added', 'New note 4 added');
console.log('Notes Array after pushing three notes at the end of the array using push();');
console.log(notes);

// Let's remove an item or two from the array
notes.pop();
notes.pop();
console.log('Notes Array after popping two notes from the end of the array using pop();');
console.log(notes);

// Let's remove an item from the beginning of the array
notes.shift();
console.log('Notes Array after popping a note from the beginning of the array using shift();');
console.log(notes);

// Let's push an item to the beginning of the array
notes.unshift('New note 5 added');
console.log('Notes Array after pushing a note at the beginning of the array using unshift();');
console.log(notes);

// Let's push an item or two to the front of the array
notes.unshift('New note 6 added', 'New note 7 added', 'New note 8 added');
console.log('Notes Array after pushing three notes at the beginning of the array using unshift();');
console.log(notes); 