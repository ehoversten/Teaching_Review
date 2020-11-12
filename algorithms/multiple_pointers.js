



function findPairs(arr) {
    // Create Two pointers references to loop through our ARRAY
    let left = arr[0];
    let right = arr[arr.length-1];
    
    // Let's see our POINTERS
    console.log(`Left: ${left} || Right: ${right}`);

    // We are starting our pointers on opposite ends, once they land on the same ARRAY INDEX value we exit our loop
    while(left < right) {
        // We want to find pairs that SUM to ZERO
        let sum = arr[left] - arr[right];
        console.log(`Sum is ${sum}`);

        if(sum === 0) {
            console.log("Found Pair: ", [arr[left], arr[right]]);
            return [arr[left], arr[right]]
        }

        if(sum < 0) {
            //left
        }
    }
}


// --> Test our function
findPairs([-2, -1, 0, 1, 2, 3, 4]);
