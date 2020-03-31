# Getting started Testing with Jest

## Install `JEST` Testing Package Library:

As this is not a package that an end user will need to download when they run our Node program,
we add the `--save-dev` (or `--dev` for yarn) to save this library as a Development Dependency in our
`package.json` file 


```javascript
$> npm install --save-dev jest

// or with yarn package manager
$> yarn add --dev jest
```

&nbsp;

## Connect our new testing package to our program 

We can add or attach our new testing library by adding it to our `scripts` object within `package.json`

In the package.json file add the following:
```javascript
{
  "scripts": {
    "test": "jest"
  }
}
```

Now we can run the tests we code by running the command `npm run test` (or `yarn test` if you are running yarn)

&nbsp;

## First Test

A simple test example:
```javascript
test('Adding 1 + 1 equals 2', function() {
    expect(add(1, 1)).toBe(2);
})
```

Above we are running a test using:

```javascript
test(<String_Description_of_Test>, <Callback_Function>)
```

Which takes two arguments:
* A STRING description of the test being run
* A function describing the test logic

&nbsp;

Within the callback function block we run the logic of the `function that we are testing`
we call the expect() function:

```javascript
expect(<FUNCTION_UNDER_TEST>)
```

returns an "expectation" object. You typically won't do much with these expectation objects except call matchers on them.

&nbsp;

## Matchers

A `matcher` is a method that lets you test values.

A list of the most commonly used matchers are:

* toBe() compares strict equality, using ===

* Equal() compares the values of two variables. If it’s an object or array, it checks the equality of all the properties or elements

* toBeNull() is true when passing a null value

* toBeDefined() is true when passing a defined value (opposite to the above)

* toBeUndefined() is true when passing an undefined value

* toBeCloseTo() is used to compare floating values, avoiding rounding errors

* toBeTruthy() true if the value is considered true (like an if does)

* toBeFalsy() true if the value is considered false (like an if does)

* toBeGreaterThan() true if the result of expect() is higher than the argument

* toBeGreaterThanOrEqual() true if the result of expect() is equal to the argument, or higher than the argument

* toBeLessThan() true if the result of expect() is lower than the argument

* toBeLessThanOrEqual() true if the result of expect() is equal to the argument, or lower than the argument

* toMatch() is used to compare strings with regular expression pattern matching

* toContain() is used in arrays, true if the expected array contains the argument in its elements set

* toHaveLength(number): checks the length of an array

* toHaveProperty(key, value): checks if an object has a property, and optionally checks its value

* toThrow() checks if a function you pass throws an exception (in general) or a specific exception

* toBeInstanceOf(): checks if an object is an instance of a class


&nbsp;


## Resources

Check the Documentation
* https://jestjs.io/en/


Flavio Copes: Some really great info to checkout
* https://flaviocopes.com/jest/
