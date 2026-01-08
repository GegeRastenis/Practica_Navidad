/*Dado un array de strings, devolvé solo los que tengan más de 3 letras.
Ejemplo:
["IBM", "code", "AI", "project"] → ["code", "project"]*/

let words = ["IBM", "code", "AI", "project"]; 

let mayorATresLetras = words.filter(function(word){
    return word.length > 3
})

console.log(mayorATresLetras);
