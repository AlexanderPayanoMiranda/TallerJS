/*
Dada una lista de números enteros [15,20,50,80,40,60],
escriba un programa que dado un dato por el usuario,
este sea eliminado de la lista. Tome en cuenta que el usuario
ingresará datos que se encuentran dentro de la lista

Ejemplo:

Ingrese el dato a eliminar: 60

Salida: [15,20,50,80,40]

    Ejecutar en el navegador}

*/

let lista = [15, 20, 50, 80, 40, 60];
console.log(lista);

var num = prompt("Ingrese el numero a eliminar");
numusuario = parseInt(num);
let seleccionado = lista.indexOf(numusuario);
console.log(seleccionado);

lista.splice(seleccionado, 1);
console.log(lista);
