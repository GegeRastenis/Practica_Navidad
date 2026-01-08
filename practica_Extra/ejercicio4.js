/*Given a string, return the first character that is repeated.
If there are no repeated characters, return null.

Examples:

firstRepeatedChar("abca");   // "a"
firstRepeatedChar("abcdef"); // null
firstRepeatedChar("aabb");   // "a"*/

let characters = ['a', 'b', 'c', 'a']

let firstRepeatedChar = characters.find(function(char, index){
    return characters.indexOf(char) !== index; 
})
console.log(firstRepeatedChar);
