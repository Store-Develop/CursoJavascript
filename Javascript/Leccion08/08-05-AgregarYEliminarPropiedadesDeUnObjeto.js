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