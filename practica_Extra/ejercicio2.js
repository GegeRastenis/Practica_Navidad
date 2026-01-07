/*Given an array of numbers, return a new array containing only the even numbers.

🧾 Examples:
getEvenNumbers([1, 2, 3, 4, 5, 6])   // [2, 4, 6]
getEvenNumbers([7, 9, 11])           // []
getEvenNumbers([])                   // []*/

function getEvenNumbers(num){
    let evenNumber = []; 
    for(let i = 0; i < num.length; i ++){
        if(num[i] % 2 === 0){
           evenNumber.push(num[i]); 
        }
    } return evenNumber
}
console.log(getEvenNumbers([1, 2, 3, 4, 5, 6]));
