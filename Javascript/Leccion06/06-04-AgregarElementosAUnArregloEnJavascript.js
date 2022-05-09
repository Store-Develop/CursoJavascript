const autos = ['BMW', 'Mercedes Benz', 'Volvo'];
console.log(autos);

console.log(autos[0]); //recorre el arreglo uno por uno con el valor del indice.
console.log(autos[2]);

for (let i = 0; i < autos.length; i++) {
    console.log(i + ' : ' + autos[i]); //recorre todo el arreglo a traves del for con .length
}
autos[1] = 'MercedesBenz';
console.log(autos[1]); //Modificamos el valor que seleccionamospor medio del indice.

autos.push('Audi'); // Agregamos elementos al arreglo forma 1.
console.log(autos);

console.log(autos.length);
autos[autos.length] = 'Cadillac'; //Agregamos elementos al arreglor forma 2.
console.log(autos);

autos[6] = 'Porshe'; //Agregamos elementos al arreglo dejando espacios vacios lo cual no es recomendable a menos que asi lo queramos, para quitarlos modificamos el indice de almacenamiento y listo.
console.log(autos);