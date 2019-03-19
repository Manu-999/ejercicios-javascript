
// ej 9
// Rellena la matriz como la siguiente utilizando bucles for anidados
// let matriz = [
//   ['00','01','02'],
//   ['10','11','12'],
//   ['20','21','22']
// ];

let matriz = [
  [],
  [],
  []
]


for (j = 0; j < matriz.length; j++) {
  if (j === 0) {
    matriz[j].push(00, 01, 02);
  }
  if (j === 1) {
    matriz[j].push(10, 11, 12);
  }
  if (j === 2) {
    matriz[j].push(20, 21, 22);
  }
}


console.log(matriz);