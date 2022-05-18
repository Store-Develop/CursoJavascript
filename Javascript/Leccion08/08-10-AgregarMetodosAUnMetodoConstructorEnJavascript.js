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

let padre = new Persona('Juan', 'Perez', 'jperez@mail.com');
console.log(padre.datosCompletos());

let madre = new Persona('Merilda', 'Perez', 'mperez@mail.com');
console.log(madre.datosCompletos());

padre.nombre = 'Carlos';
console.log(padre);