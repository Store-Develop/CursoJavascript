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

Persona.prototype.tel = '44332211';

let padre = new Persona('Juan', 'Perez', 'jperez@mail.com');
padre.tel = '11223344';
console.log(padre.tel);

let madre = new Persona('Merilda', 'Perez', 'mperez@mail.com');
madre.tel = '77889900';
console.log(madre.tel);