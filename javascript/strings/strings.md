# Strings in JavaScript

### In JavaScript, there are three ways to write a string — they can be written inside single quotes (' '), double quotes (" "), or backticks (\` \`). The type of quote used must match on both sides, however it is possible that all three styles can be used throughout the same script.

```javascript
'This string uses single quotes';

"This string uses double quotes";

// using template literal syntax
`This string uses backticks`;
```

&nbsp;
### a `template literal` is a way to concatenate strings while allowing embedded expressions and improving readability

```javascript
let firstName = "Bobby";
let lastName = "Smith"
let hello = `Hello ${firstName} ${lastName}`;

console.log(hello);   
// output -> Hello Bobby Smith
```

&nbsp; 
### There is a distinction when referring to each of these. A string literal is the string as it is written in the source code, including quotations. A string value is what we see in the output, and does not include quotations.

```javascript
// String Literal (in code)
"Hello World"; 

// String Value (as returned to the console)
// output -> Hello World
```
&nbsp; 
# String Concatenation

### Concatenation means joining two or more strings together to create a new string. In order to concatenate, we use the concatenation operator, represented by a + symbol.

```javascript
let firstName = "Bobby";
let lastName = "Smith"
let hello = "Hello " + firstName + " " + lastName + "!";

console.log(hello);   
// output -> Hello Bobby Smith!

```

&nbsp;
## Escaping Character ( \ )

### We can use the backslash ( `\` ) escape character to prevent JavaScript from interpreting a quote as the end of the string.


* #### The syntax of `\'` will always be a single quote, and the syntax of `\"` will always be a double quote, without any fear of breaking the string.



#


