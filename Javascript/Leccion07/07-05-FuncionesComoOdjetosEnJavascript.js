//Declaración de la función.
function miFuncion(a, b) {
    console.log(arguments.length);
    return a + b;
}

// Llamando la función.
let resultado = miFuncion(2, 3);
console.log(resultado);

//Declaracion de funcion tipo expresión.
let sumar = function(a, b) { return a + b };

resultado = sumar(1, 2);
console.log(resultado);

//Declaración de funciones Self-Invoking, esta funciónno puede ser reutilizada.
(function(a, b) {
    console.log('Ejecutando la función: ' + (a + b));
})(3, 4);

console.log(typeof miFuncion);
let miFuncionTexto = miFuncion.toString();
console.log(miFuncionTexto);