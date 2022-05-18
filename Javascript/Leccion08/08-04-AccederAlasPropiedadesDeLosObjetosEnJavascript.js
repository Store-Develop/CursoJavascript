let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'jperez@mail.com',
    edad: 28,
    //Agregamos un motodo a nuestro objeto.
    nombreCompleto: function() {
        return this.nombre + ' ' + this.apellido;
    }
}

console.log(persona.nombre);
//Otra forma de acceder a las propiedades y valores de objetos no siendo la mas comun es.
console.log(persona['apellido']);

//Para recorrer todas laspropiedades y valores de las propiedades de un objeto con esta forma lo hacemos a traves de un for in.
for (nombrePropiedad in persona) {
    console.log(nombrePropiedad);
    console.log(persona[nombrePropiedad]);
}