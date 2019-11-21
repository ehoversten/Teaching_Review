function func(a, b) {
    return a + b;
}

let sum = function (a, b, func) {
    return func(a, b);
}

console.log(func(5, 2));
console.log(sum(3, 5, func));