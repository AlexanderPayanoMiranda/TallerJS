/*
Dado el diccionario que almacena la talla de algunas personas
{'Marcelo': 1.80, 'José':1.50, 'Oscar':1.70, 'Jorge': 1.40},
escriba un programa que dado un nombre ingresado por el usuario
imprime la talla.

Ejemplo:

Ingrese un nombre: Marcelo

Salida: 1.80
*/

let diccionario = {'Marcelo': 1.80, 'José':1.50, 'Oscar':1.70, 'Jorge': 1.40};
var nombre = prompt("Ingrese el nombre para mostrar su altura: ")

console.log(diccionario[nombre])