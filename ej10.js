/*
Guarde los datos de una persona (nombre,apellido,edad) en un diccionario,
luego imprimalo en el siguiente formato. "Hola mi nombre es [nombre] [apellido],
y tengo [edad] años".
*/

let d = {}

d["nombre"] = prompt("Ingresa tu nombre: ");
d["apellido"] = prompt("Ingresa tu apellido: ");
edad = prompt("Ingresa tu edad: ");
d["edad"] = parseInt(edad);

console.log(`Hola mi nombre es ${d["nombre"]} ${d["apellido"]}, y tengo ${d["edad"]}!`);