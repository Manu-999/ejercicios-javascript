// ej 8
// Crea un bucle  que imprima por consola números del 1 al 100
// pero que los múltiplos de 3 imprima GEEKS en lugar del numero
// y los múltiplos de 5 imprima HUBS.
// Además los múltiplos de 3 y 5 ha de imprimir GEEKSHUBS

for (numero = 1; numero <= 100; numero++) {
  var resultado = '';
  if (numero % 3 === 0) {
    resultado += 'Geeks';
  }

  if (numero % 5 === 0) {
    resultado += 'Hubs';
  }
  console.log(numero + resultado);
}
