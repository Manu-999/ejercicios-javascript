// ej 4
// crea un array con la gente mayor de 25 años.
// y muéstralo por consola.
// Sin utilizar el método filter de los arrays
// Utilizad el bucle for of

let gente = [{
    nombre: 'Jamiro',
    edad: 45
},
{
    nombre: 'Juan',
    edad: 35
},
{
    nombre: 'Paco',
    edad: 34
},
{
    nombre: 'Pepe',
    edad: 14
},
{
    nombre: 'Pilar',
    edad: 24
},
{
    nombre: 'Laura',
    edad: 24
},
{
    nombre: 'Jenny',
    edad: 10
},
]


var mayor25 = [];

for (var i of gente) {
    if (i.edad >= 25) {
        mayor25.push(i);
    }
}
console.log(mayor25);