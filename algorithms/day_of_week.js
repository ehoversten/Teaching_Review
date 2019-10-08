/*
    - Challenge: Write a function that takes in a number and returns the corresponding day of the week.

        - Examples:
            Input: 1
            Output: 'Monday'

            Input: 5
            Output: 'Friday'

            Input: 8
            Output: undefined

*/

function dayOfWeek(num) {

    switch(num) {
        case 1:
            return 'Monday';
            break; 
        case 2:
            return 'Tuesday';
            break; 
        case 3:
            return 'Wednesday';
            break; 
        case 4:
            return 'Thursday';
            break; 
        case 5:
            return 'Friday';
            break; 
        case 6:
            return 'Saturday';
            break; 
        case 7:
            return 'Sunday';
            break; 
        default:
            return undefined;
    }
}


console.log(dayOfWeek(2));
console.log(dayOfWeek(5));
console.log(dayOfWeek(8));