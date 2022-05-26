"use strict";
//Utilizando el modo strict no nos permite utilizar una variable sin antes haberla declarado Ejemplo.
//x = 10;
//console.log(x);


//Lo mismo con las funciones ejemplo.

//miFuncion();
//function miFuncion() {
//y = 15;
//console.log(y);}

//Forma correcta.
//Tambien se puede declarar dentro de la funcion.

let x = 10;
console.log(x);

miFuncion();

function miFuncion() {
    "use strict";
    let y = 15;
    console.log(y);
}