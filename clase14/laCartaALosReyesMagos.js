/*Clase 14: Objetos Literales Vimos cómo modelar cosas de la vida real con propiedades.
Ejercicio: La Carta a los Reyes Magos 👑 Vamos a definir un objeto que represente un pedido.
1.	Creá un objeto literal llamado cartaReyes.
2.	Tiene que tener las propiedades:
○	remitente: (tu nombre)
○	deseo: (qué querés pedir)
○	sePortoBien: (true o false)
3.	Imprimí por consola una frase armada con esos datos, ejemplo: 
"Hola Reyes, soy [remitente] y quiero [deseo]".*/

let cartaReyes = {
    remitente: "Giselle",
    deseo:  "un nuevo amor ❤️",
    sePortoBien:  true
}

let comportamiento = cartaReyes.sePortoBien ? "me porte muy bien este anio" : "no me porte tan bien este anio, prometo portarme mejor el proximo"

console.log(`Hola Reyes, soy ${cartaReyes.remitente}, ${comportamiento} y quiero ${cartaReyes.deseo} `);

