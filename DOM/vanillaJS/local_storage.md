# The Web Storage API

### The API provides a way to store data in the Web Browser on the clients machine.

* Both Local and Session Storage are available on the window object

### How do we do this? 

Using Local and/or Session Storage to persist data that we want to use on the client side. A simple login and registration can be built using session storage, or A cart for an e-commerce site can hold items the user saved by using local storage. 

Both Local and Session Storage are available on the window object, so you can access them using sessionStorage and localStorage.


&nbsp;   
### Session Storage:

* Maintains the data stored into it for the duration of the page session (until the window or tab is closed)


### Local Storage:

* Persists the data until it’s explicitly removed

&nbsp;

## Methods

Both Local and Session Storage use these methods and return a Storage Object:

* setItem(key, value)
* getItem(key)
* removeItem(key)
* key(n)
* clear()

&nbsp;

On the other hand, the `Storage Object` has a only one property, `length` which is the number of data items stored into it.




#

## Resources:


* https://flaviocopes.com/web-storage-api/

* https://alligator.io/js/introduction-localstorage-sessionstorage/

* https://www.taniarascia.com/how-to-use-local-storage-with-javascript/
