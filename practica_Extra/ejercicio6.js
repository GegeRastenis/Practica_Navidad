/*Given an array of numbers, return a new array with each number multiplied by 2,
but only for numbers greater than 5.

🧾 Ejemplo:
doubleGreaterThanFive([2, 4, 6, 8, 3]);*/

let numbers = [2, 4, 6, 8, 3]; 

let numberByTwo = numbers.map(function(num){
    return num * 2
})

console.log(numberByTwo);

let numberGreaterThanFive = numberByTwo.filter(function(num){
    return num > 5; 
})
console.log(numberGreaterThanFive);
