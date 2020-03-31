// --------------------------------------------------------- //
// This is going to be the file where we Describe our tests
// --------------------------------------------------------- //

// Let's bring in the functions that we want to test
const { add, subtract, product, divide, isOdd, isEven } = require('./index');


test('Adding 1 + 1 equals 2', function() {
    expect(add(1, 1)).toBe(2);
})


test("Subtracting 5 - 3 equals 2", function() {
    expect(subtract(5, 3)).toBe(2);
})


test('Multiplying 2 * 2 equals 4', () => {
    expect(product(2, 2)).toBe(4);
})

test('Dividing 5 / 5 equals 1', () => {
    expect(divide(5, 5)).toBe(1);
})

// --------------------------------- //
// - Testing the isOdd() function
// --------------------------------- //
test('The number 5 is odd', () => {
    expect(isOdd(5)).toBeTruthy();
})


test('The number 8 is not odd', () => {
    expect(isOdd(8)).toBeFalsy();
})


// --------------------------------- //
// - Testing the isEven() function
// --------------------------------- //
test('The number 8 is even', () => {
    expect(isEven(8)).toBeTruthy();
})


test('The number 5 is not even', () => {
    expect(isEven(5)).toBeFalsy();
})



