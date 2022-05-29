miFuncion1();
miFuncion2();

function miFuncion1() {
    console.log('Función1');
}

function miFuncion2() {
    console.log('Función2');
}

// Funcion de tipo callback.

let imp = function imprimir(mensaje) {
    console.log(mensaje);
}

function sumar(op1, op2, funcionCallback) {
    let res = op1 + op2;
    funcionCallback(`Resultado: ${res}`);
}

sumar(5, 3, imp); //Llamadas asincronas con uso setTimeout

function miFuncionCallback() {
    console.log('Saludo asincrono despues de 3 seg');
}

setTimeout(miFuncionCallback, 3000); //despues de 3 seg
setTimeout(function() { console.log('Saludo asincrono 2') }, 4000); //Pasando directamente la función
setTimeout(() => console.log('Saludo asincrono 3'), 1000); // con función flecha