/*

    Challenge: Retrieve the Subreddit String. Create a function to extract the name of the subreddit from its URL.

    Example:
    subReddit("https://www.reddit.com/r/funny/") // output - "funny"

    subReddit("https://www.reddit.com/r/relationships/") // output - "relationships"

    subReddit("https://www.reddit.com/r/mildlyinteresting/") // output - "mildlyinteresting"

*/

function extractString(str) {
    // split the string into an array of items seperated by the '/' character
    let arrStr = str.split('/');
    console.log(arrStr);
    // remove empty values from array
    let rmvEmptys = [];
    // let rmvEmptys = arrStr.forEach(item => item !== '');
    for(let i = 0; i < arrStr.length; i++) {
        if(arrStr[i] !== '') {
            rmvEmptys.push(arrStr[i]);
        }
    }
    console.log(rmvEmptys[rmvEmptys.length - 1]);
    return rmvEmptys[rmvEmptys.length - 1];
}

extractString("https://www.reddit.com/r/funny/");


function betterExtract(str) {
    let strItem = str.split('/');
    return console.log(strItem[strItem.length - 2]);
}

betterExtract("https://www.reddit.com/r/mildlyinteresting/");