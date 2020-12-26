
## The HTML DOM (Document Object Model)

* The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects. That way, programming languages can connect to the page.

* In the DOM, all HTML elements are defined as objects. ??

* All items in the DOM are defined as nodes. There are many types of nodes, but there are three main ones that we work with most often:

    * Element nodes
    * Text nodes
    * Comment nodes


* A property is a value that you can get or set (like changing the content of an HTML element).

* A method is an action you can do (like add or deleting an HTML element).


#### So how can we manipulate the DOM with JavaScript?
 
* A programming language can be used to access and modify this object model, and this action is called DOM manipulation.



## Selectors
* How to get elements in the DOM

* Accessing the elements
    * `getElementById` takes as argument an id
        * Returns null if no elements with the specified ID exists.

    * `querySelector` takes as argument a CSS selector and returns the first element that matches the selector.
    * getElementsByClassName
    * getElementsByTagName
    * querySelectorAll


## Traversing the DOM

    * firstChild
    * lastChild
    * parentNode
    * nextSibling
    * previousSibling

## Get and Updating element content

    * nodeValue
    * textContent

#### Adding and Removing HTML content

    * `innerHTML` can either be used to get or set HTML content. But be careful when using innerHTML to set HTML content, because it removes the HTML content that is inside the element and adds the new one.
    * createElement()
    * createTextNode()
    * appendChild()
    * removeChild()

## Attribute node

* getAttribute as its name may suggest, it is used to get an attribute. Like the class name, the id name, the href of a link or any other HTML attribute.

* setAttribute is used to set a new attribute to an element. It takes two arguments, first the attribute and second the name of the attribute.

* hasAttribute used to check if an attribute exists, takes an attribute as an argument.

* removeAttribute used to remove an attribute, it takes an attribute as an argument.

* Id this property is used to set or get the id of an element.

* ClassName is used to set or get the class of an element.



## The * Element Object

* In the HTML DOM, the  * Element object represents an HTML element, like P, DIV, A, TABLE, or any other HTML element.

## The addEventListener() method attaches an event handler to the specified element.
```javascript
element.addEventListener(event, function, useCapture)
```
* `event` Required. A String that specifies the name of the event.

* `function` Required. Specifies the function to run when the event occurs.

    * When the event occurs, an event object is passed to the function as the first parameter. The type of the event object depends on the specified event. For example, the "click" event belongs to the MouseEvent object.

```javascript
var btn = document.querySelector('.btn');

// We add a listener to our HTML element and run the code defined in the function when the 'click' event occurs 
btn.addEventListener('click', function () {
// All the code here will be executed on every click
});
```

```javascript
var btn = document.querySelector('.btn');

btn.addEventListener('click', function (e) {
// Capture the EventObject into the argument named `e`
e.target; // A reference to the element the event fired on
});
```



```javascript
document.getElementById("myBtn").addEventListener("click", myFunction);

function myFunction() {
    document.getElementById("demo").innerHTML = "Hello World";
}
```


