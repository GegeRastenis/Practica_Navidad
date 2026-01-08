/*Given an array of numbers, return how many of them are greater than 10.

Example:

countGreaterThanTen([5, 12, 8, 20, 3]); // 2*/

function countGreaterThanTen(num){
    let count = 0; 
    for(let i = 0; i < num.length; i++){
        if(num[i] > 10){
            count ++
        }
    }return count; 
}

console.log(countGreaterThanTen([5, 12, 8, 20, 3]));
