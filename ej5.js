/*
Dada la siguiente lista ["Hola", "Amigos", "Hoy", True] ,
escriba un programa que pida al usuario una palabra, dicha
palabra debe ser agregada al final y al inicio de la lista.

    Ejecutar este ejercicio en el navegador

*/

let lista = ["Hola", "Amigos", "Hoy", true];
var palabra = prompt("Ingrese una palabra: ");

lista.unshift(palabra);
lista.push(palabra);
console.log(lista);