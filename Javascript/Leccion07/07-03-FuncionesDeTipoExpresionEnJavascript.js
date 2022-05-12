//Declaración de la función.
function miFuncion(a, b) {
    return a + b;
}

// Llamando la función.
let resultado = miFuncion(2, 3);
console.log(resultado);

//Declaracion de funcion tipo expresión.
let sumar = function(a, b) { return a + b };

resultado = sumar(1, 2);
console.log(resultado);