/*Given a string, return the number of vowels in the string.
Vowels are: a, e, i, o, u (both lowercase and uppercase).

🧾 Examples:
countVowels("Hello")      // 2
countVowels("IBM")        // 1
countVowels("aeiou")      // 5
countVowels("")           // 0*/




function countVowels(word){
    let vowels = ['a', 'e', 'i', 'o', 'u']; 
    let count = 0;
    for(let i = 0; i < word.length; i ++){
    if(vowels.includes(word[i])){
       count ++; 
    }
 }

 return count; 
}

console.log(countVowels("Hello"));
