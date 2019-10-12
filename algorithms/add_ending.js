/* 

    Challenge: Create a function that adds a string ending to each member in an array.

    Examples:
        addEnding(["clever", "meek", "hurried", "nice"], "ly")
        ➞ ["cleverly", "meekly", "hurriedly", "nicely"]

        addEnding(["new", "pander", "scoop"], "er")
        ➞ ["newer", "panderer", "scooper"]

        addEnding(["bend", "sharpen", "mean"], "ing")
        ➞ ["bending", "sharpening", "meaning"]

*/ 



function addEnding(arr, ending) {
    let endingArr = [];

    for(let i = 0; i < arr.length; i++) {
        endingArr.push(arr[i].concat(ending));
    }
    console.log(endingArr);
    return endingArr;
}

addEnding(["clever", "meek", "hurried", "nice"], "ly");
addEnding(["new", "pander", "scoop"], "er");
addEnding(["bend", "sharpen", "mean"], "ing");

console.log("*********************");

// How about using the ES6 Map function
function addEndings(arr, ending) {
    let newWords = arr.map((elem) => elem.concat(ending));
    console.log(newWords);
    return newWords;
}

addEndings(["clever", "meek", "hurried", "nice"], "ly");
addEndings(["new", "pander", "scoop"], "er");
addEndings(["bend", "sharpen", "mean"], "ing");
