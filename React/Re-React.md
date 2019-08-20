


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
