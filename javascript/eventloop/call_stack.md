# The Call Stack 

## Heap

Memory Allocation 
* A Heap in javascript is a place where objects are stored when we define them in our code.

## Stacks

A Stack is a data structure which works in Last In First Out(LIFO) manners. The stack holds all the javascript function calls. On each function call, the function is pushed on the top of the stack.

### Acts as a LIFO Queue

Think of a stack of books or plates/lunch trays. Only the first or top item gets an action happening to it. 


## Web APIs

* setTimeout
* AJAX Calls
* DOM Events

Waits for RESPONSES to complete or fail, then passes then on to the Task Queue


## Task Queue

The Task Queue keeps a queue of function calls (that had been waiting for data to be returned). When the Stack is empty the Event Loop will pass these waiting call back functions back one by one to the Stack.

## Event Loop

* The event loop keeps checking between the Stack and the Task Queue to see if there is data to run. If the Stack is clear it will check the Task Queue

If the the Stack is EMPTY then it takes the first thing on the Task Queue and PUSHES it ONTO the Stack


#

## Resources

What the Heck is the Event Loop Anyway - Phillip Roberts 
* https://www.youtube.com/watch?v=8aGhZQkoFbQ


The JS Call Stack - Colt Steele
* https://www.youtube.com/watch?v=W8AeMrVtFLY

The JavaScript Event Loop - Flavio Copes
* https://flaviocopes.com/javascript-event-loop/#the-message-queue


* https://blog.carbonfive.com/2013/10/27/the-javascript-event-loop-explained/
