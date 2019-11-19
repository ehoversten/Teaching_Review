/*

    Challenge: Given an array of 'cards', deal out two hands of 7 'cards'. Remove each card dealt from the original array (or deck). Then sum their respective hands.

*/

const cardArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];

function dealTwo(arr) {

    // Let's create variable to hold our hands
    let hand_1 = [];
    let hand_2 = [];
    let sum_1 = 0;
    let sum_2 = 0;

    // There is a better way to do this, See if you can figure it out
    for(let i = 0; i <= 14; i++) {
        // check to see if hand_1 && hand_2 have 7 cards
        if(hand_1.length !== 7) {
            // randomly select a card left in the array
            let rando = Math.floor(Math.random() * cardArr.length);
            // console.log(rando);
            hand_1.push(cardArr[rando]);
            // remove card from array
            arr.splice(rando, 1);
        }

        if(hand_2.length !== 7) {
            // randomly select a card left in the array
            let rando = Math.floor(Math.random() * cardArr.length);
            // console.log(rando);
            hand_2.push(cardArr[rando]);
            // remove card from array
            arr.splice(rando, 1);
        }

    }

    for(let i = 0; i < hand_1.length; i++) {
        sum_1 += hand_1[i];
    }

    for(let i = 0; i < hand_2.length; i++) {
        sum_2 += hand_2[i];
    }

    let win = sum_1 > sum_2 ? `Hand 1 wins with a total of ${sum_1}` : `Hand 2 wins with a total of ${sum_2}`;
    
    console.log(hand_1);
    console.log(hand_2);

    console.log(sum_1, sum_2);
    console.log(win);
    return (win);
}

dealTwo(cardArr);
