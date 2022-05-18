// Función constructor de objetos en javascript

function Persona(nombre, apellido, email) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    //Agregamos el metodo a nuestro metodo constructor.
    this.datosCompletos = function() {
        return this.nombre + ' ' + this.apellido + ' ' + this.email;
    }
}

let padre = new Persona('Juan', 'Perez', 'jperez@mail.com');
console.log(padre.datosCompletos());

let madre = new Persona('Merilda', 'Perez', 'mperez@mail.com');
console.log(madre.datosCompletos());

padre.nombre = 'Carlos';
console.log(padre);

//Otras formas de crear objetos.

let miObjeto = new Object(); //Forma mas formal.
let miObjeto2 = {}; //Forma simplificada y mas usada.

let miCadena = new String('Hola');
let miCadena2 = 'Hola';

let miNumero = new Number(1);
let miNumero2 = 1;

let miBoolean = new Boolean(false);
let miBoolean2 = false;

let miArreglo = new Array();
let miArreglo2 = [];

let miFunction = new Function();
let miFuncion2 = function() {};