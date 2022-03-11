let a = 3,
    b = 2,
    c = "3";
let z = a == b; // Operador de (==) se revisa el valor sin importar el tipo.
console.log(z);
z = a === c; // Operador de (===) se revisa los valores pero tambien los tipos.
console.log(z);