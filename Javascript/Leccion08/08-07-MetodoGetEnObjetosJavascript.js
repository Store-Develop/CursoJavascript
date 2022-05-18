let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'jperez@mail.com',
    edad: 28,
    //Agregamos un motodo a nuestro objeto.
    get nombreCompleto() {
        return this.nombre + ' ' + this.apellido;
    }
}
console.log(persona.nombreCompleto);