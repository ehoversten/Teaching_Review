# Name/Value Pairs

#### Objects are incredibly important, and we're going to spend a lot of time on them.

### **Object**: A collection of Name/Value pairs (JS)

### A **Name/Value pair** is a name which maps to a unique value. The name may be defined more than once, but it can only have one value in any given (execution) context.

So in any particular execution context, that is, a section of code that is running, a name can only exist and be defined with one value.

Ex:

```javascript
var temp = 85;
```

### However, that value may be more Name/Value pairs.

Ex:

```javascript
var car = {
    color: 'red',
    make: 'whoKnows',
    model: 'C8',
    specs: {
        topSpeed: '299,800,000 m/s',
        transmission: 'AT',
        seats: {
            front: 2,
            back: 0
        },
        enginePlacement: 'mid'
    }
};
```

![Name-Value-Pairs](./img/name-value-pairs.PNG)
