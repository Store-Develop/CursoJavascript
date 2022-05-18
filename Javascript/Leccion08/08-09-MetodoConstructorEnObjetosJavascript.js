// Función constructor de objetos en javascript

function Persona(nombre, apellido, email) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
}

let padre = new Persona('Juan', 'Perez', 'jperez@mail.com');
console.log(padre);

let madre = new Persona('Merilda', 'Perez', 'mperez@mail.com');
console.log(madre);

padre.nombre = 'Carlos';
console.log(padre);