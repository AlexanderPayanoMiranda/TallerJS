/*
Dado el diccionario que almacena la talla de algunas personas
{'Marcelo': 1.80, 'José':1.50, 'Oscar':1.70, 'Jorge': 1.40}, escriba un
programa que dada una talla por el usuario imprima el nombre.

Ejemplo:

Ingrese un nombre: 1.8

Salida: Marcelo
*/

let diccionario = {'Marcelo': 1.80, 'José':1.50, 'Oscar':1.70, 'Jorge': 1.40};
let altura = prompt("Ingrese la altura para mostrar el nombre: ")
let altura_int = parseFloat(altura);
console.log(altura_int);

for (let nombre in diccionario){
    if (diccionario[nombre] === altura_int) {
        console.log(nombre);
    }
}
