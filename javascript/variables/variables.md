# What are Variables?

### Variables can be thought of as named containers. You can place data into these containers and then refer to the data simply by naming the container.


### Before you use a variable in a JavaScript program, you must declare it. Variables are declared with the `var` keyword.

## JavaScript Variable naming conventions:

* ### Contain `letters`, `numbers`, `$`, or `_`
* ### Begin with `letter`, or `_`
* ### Variable names are case-sensitive.
* ### Avoid `RESERVED` words

&nbsp; 
# 
## Declaring Variables:

```javascript
var variableName = value;

var firstName = 'Kire';
var lastName = 'Bobbins';
var age = 45;
```

Or we could declare variables this way...
```javascript
// here we can declare multiple variables in one line
var firstName, lastName, age;

// but we still have to assign values
firstName = 'Bob';
lastName = 'the Builder';
age = 45;

```
Or this way...
```javascript
var firstName = "Ricki", 
    lastName = "Lake", 
    age = 35;
```

&nbsp; 
#

## Variables can be assigned any data type:

* ### A String or a string of characters
```javascript
var userName = 'Jane Doe';
```
* ### An Integer or Floating Point Number
```javascript
var userAge = 30;
```
* ### A Boolean `true` or `false`
```javascript
var catsAreBest = false;
```
* ### An `undefined` value that hasn't been defined
```javascript
var favoriteThings;
```
* ### `null` an explicitly empty value
```javascript
var weather = null;
```
&nbsp; 
#
## JavaScript Variable Scope
### The scope of a variable is the region of your program in which it is defined. JavaScript variables have only two scopes.

* ### Global Variables − A global variable has global scope which means it can be defined anywhere in your JavaScript code.

* ### Local Variables − A local variable will be visible only within a function where it is defined. Function parameters are always local to that function.

&nbsp; 

### Within the body of a function, a local variable takes precedence over a global variable with the same name. If you declare a local variable or function parameter with the same name as a global variable, you effectively hide the global variable. Take a look into the following example.

#

# JavaScript Reserved Words

### A list of all the reserved words in JavaScript are given in the following table. They cannot be used as JavaScript variables, functions, methods, loop labels, or any object names.

abstract	
else	
instanceof	
switch
boolean	
enum	
int	
synchronized
break	export	interface	this
byte	extends	long	throw
case	false	native	throws
catch	final	new	transient
char	finally	null	true
class	float	package	try
const	for	private	typeof
continue	function	protected	var
debugger	goto	public	void
default	if	return	volatile
delete	implements	short	while
do	import	static	with
double	in	super	
