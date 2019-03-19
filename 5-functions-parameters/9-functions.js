////////////////////////////// 
//  9
//  Crear una función llamada muestraPorConsolaEurosEnPesetas
//  que NO de DEVOLVER nada (devolver undefined)
//  pero que muestre por consola lo que haya recibido como euros en pesetas
//  debes utilizar console.log
//  además debe lanzar un error si no recibe un tipo number
//  Debes lanzar un error con la sentencia:
//  throw new Error('muestraPorConsolaEurosEnPesetas debe recibir un number');

// Aquí tu código
function muestraPorConsolaEurosEnPesetas(euros) {
    if (typeof euros !== 'number') {
        throw new Error('muestraPorConsolaEurosEnPesetas debe recibir un number');
    }
    if (euros === 1) {
        console.log(168);
    } else {
        console.log(euros * 168);
    }
}

// Hasta aquí


// TEST 1
if (typeof muestraPorConsolaEurosEnPesetas === 'function') {
    console.log('apruebas:  muestraPorConsolaEurosEnPesetas es una función');
} else {
    console.log('suspendes:  muestraPorConsolaEurosEnPesetas NO es una función');
}

// TEST 2
if (typeof muestraPorConsolaEurosEnPesetas(2) === 'undefined') {
    console.log('apruebas: muestraPorConsolaEurosEnPesetas devuelve undefined');
} else {
    console.log('suspendes: muestraPorConsolaEurosEnPesetas NO devuelve undefined');
}


// TEST 4
try {
    muestraPorConsolaEurosEnPesetas('1');
    muestraPorConsolaEurosEnPesetas(true);
    muestraPorConsolaEurosEnPesetas();
    console.log('suspendes: muestraPorConsolaEurosEnPesetas debe lanzar un error si no recibe un número');

} catch (error) {
    console.log('apruebas');

}
