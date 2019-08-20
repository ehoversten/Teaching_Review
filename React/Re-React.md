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


## Props

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

