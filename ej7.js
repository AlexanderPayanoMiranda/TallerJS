/*
Dado el siguiente arreglo de números [1,3,5,2,7,5,5,8,4,8,4,8,4],
escriba un programa que dado un elemento por el usuario,
imprima el número de veces que se encuentra en la tupla.

Ejemplo:

Ingrese el elemento a contar: 4

Salida: 3
*/

let lista = [1, 3, 5, 2, 7, 5, 5, 8, 4, 8, 4, 8, 4];
var contar = prompt("Ingrese el numero a contar: ")
let num_contar = parseInt(contar);
var conteo = 0;

for (let i = 0; i < lista.length; i++) {
    if (lista[i] === num_contar) {
        conteo += 1;
    }
}

console.log(conteo);