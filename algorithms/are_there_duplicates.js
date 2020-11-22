


function areThereDuplicates(...args) {
    // -- TESTING -- //
    console.log(args);

    let obj = {};

    args.forEach(function(elem) {
        if(obj[elem]) {
            obj[elem] += 1;
        } else {
            obj[elem] = 1;
        }
    });

    // -- TESTING -- //
    console.log(obj);

    for(let val in obj) {
        // console.log(obj[val]);
        if(obj[val] > 1) {
            console.log("Found Duplicates")
            return true;
        }
    }
    console.log("No Duplicates Found")
    return false;
}

areThereDuplicates(1, 2, 3, 4, 5);
areThereDuplicates('a', 'b', 'b', 'a', 'c');
