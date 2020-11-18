// Find the potential total score possible by summing each objects "score" value 
//      and returning the sum from the given array.


let test = [{tile: 'N', score: 1}, {tile: 'K', score: 5},  {tile: 'Z', score: 10}, {tile: 'X', score: 8}, {tile: 'D', score: 2}, {tile: 'A', score: 1}, {tile: 'E', score: 1}]

function maximumScore(hand) {
    let sum = 0;
    
	for(val of hand) {
        sum += val.score;
        // -- TESTING -- //
        // console.log(sum);
	}
    console.log(`Total Score: ${sum}`);
	return sum;
}

maximumScore(test);