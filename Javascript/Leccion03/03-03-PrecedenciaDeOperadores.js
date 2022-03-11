// Precedencia de operadores hace referencia a la prioridad de la operación que se va a realizar o prioridad de los signos en una operación matematica.
let a = 3,
    b = 2,
    c = 1,
    d = 4;

let z = a * b + c / d;
console.log(z);
z = c + a * b / d;
console.log(z);
z = (c + a) * b / c;
console.log(z);