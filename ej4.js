/*
Dada la matriz, [[1,2,3],[4,5,6],[7,8,9]], calcule el promedio
de la diagonal principal. Hint: Los 3 elementos de la diagonal
son 1,5,9.
*/

const m = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
var prom = (m[0][0] + m[1][1] + m[2][2]) / 3

console.log(`El promedio de la diagonal principal es ${prom}`)
