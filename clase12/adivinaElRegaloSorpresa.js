/*Clase 12: Ciclos (While) y Arrays Simples
Vimos cómo repetir acciones mientras se cumpla una condición y empezamos a ver listas .
Ejercicio: Adiviná el regalo sorpresa Vamos a jugar a adivinar qué hay en la caja.
1.	Definí una variable con la "palabra secreta" (ej: "perfume").
2.	Usá un prompt para pedirle a la usuaria que adivine el regalo.
3.	Usá un ciclo while: mientras lo que ingrese la usuaria sea distinto 
a la palabra secreta, volvé a pedirle que intente de nuevo.
4.	Cuando acierte (salga del bucle), mostrá un alert o console.log: 
"¡Adivinaste! Disfrutalo  🎁".*/

const prompt = require("prompt-sync")(); 

const palabraSecreta = "perfume"; 

let mensaje = prompt("Adivina el regalo que te trajo Papa Noel: "); 


while(mensaje !== palabraSecreta){
    console.log("No has acertado... Vuelve a intentarlo");
    mensaje = prompt("Adivina el regalo que te trajo Papa Noel: ")
    
}
console.log("¡Adivinaste! Disfrutalo  🎁");
