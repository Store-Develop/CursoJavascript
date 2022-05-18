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

//agregar propiedades a un objeto.
persona.tel = '55443322';

console.log(persona);

//Eliminar un atributo.
delete persona.tel;
console.log(persona);

//Concatenar cada valor de cada propiedad.
console.log(persona.nombre + ', ' + persona.apellido);

// por medio de un for in.

for (nombrePropiedad in persona) {
    console.log(persona[nombrePropiedad]);
}

//Por medio de un Array.
let personaArray = Object.values(persona);
console.log(personaArray);

//En cadena por medio de un JSON.

let personaString = JSON.stringify(persona);
console.log(personaString);