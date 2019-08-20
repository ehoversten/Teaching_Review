## `CLI` vs. Configuration

Easy route
```javascript
$> create-react-app <NAME_OF_YOUR_APP>
```

### Webpack and Babel configuration: *`This is beyond class scope`*

##### Checkout Webpack --> https://webpack.js.org/
##### Checkout Babel --> https://babeljs.io/


# 

## JSX is `NOT` HTML

```javascript
return(
    <div className="container">
        <h1> Getting Started </h1>
    </div>
);
```

#### Get's compiled down to JavaScript:

```javascript
return(
    React.createElement('div', { className:'container' },
        React.createElement('h1', null, "Getting Started")
    )
);
```

#### Checkout Babel --> https://babeljs.io/

# 

## Components come in 2 types: `Function` and `Class`

### Example Function:
```javascript
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```
### Example Class:
```javascript
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```


#


# Props

#### Props are Read-Only
Whether you declare a component as a function or a class, it must never modify its own props. Consider this sum function:

```javascript
function sum(a, b) {
  return a + b;
}
```

Such functions are called “pure” because they do not attempt to change their inputs, and always return the same result for the same inputs.

In contrast, this function is impure because it changes its own input:
```javascript
function withdraw(account, amount) {
  account.total -= amount;
}
```


## All React components must act like *`pure`* functions with respect to their props.


## Data flow in React is -> `one-way`
#

# State

#### Only Class Components can be `Stateful`

### How would we convert a `Functional` Component to a stateful or `Class` Component?

### Given:
```javascript
function Clock(props) {
  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {props.date.toLocaleTimeString()}.</h2>
    </div>
  );
}
```

## Converting a Function to a Class
You can convert a function component like Clock to a class in five steps:

* Create an ES6 class, with the same name, that `extends React.Component`

* Add a single empty method to it called `render()`.

* Move the body of the function into the `render()` method.

* Replace props with `this.props` in the `render()` body.

* Delete the remaining empty function declaration.

### Result:

```javascript
class Clock extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
```


## `State` is `IMMUTABLE`!!!

####  We do not change state directly
*  We use the React method setState({})

#### The `setState()` method expects an `OBJECT` { ... }

#### After everytime that setState() gets updated, *`React`* then calls `render()`


### Using a Constructor Method :
#### allows you to add some initalization functionality
```javascript
class Contact extends React.Component {
    constructor() {
        super();
        this.state = {
            contacts: [ 
                {
                    id:1,
                    name: "Maggie Smith",
                    email: "msmith@gmail.com",
                    phone: "555-555-5555"
                }
            ] // end of contacts array data
        } // end of state object
    } // end of class Constructor
}
```

#### Using a ES6 shortcut syntex 
* If you `don't` want to add some initalization
```javascript
class Contact extends React.Component {
    state = {
        contacts: [ 
            {
                id:1,
                name: "Maggie Smith",
                email: "msmith@gmail.com",
                phone: "555-555-5555"
            }
        ] // end of contacts array data
    } // end of state object
}
```