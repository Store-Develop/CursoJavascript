class Persona {
    constructor(nombre, apellido) {
        this._nombre = nombre;
        this._apellido = apellido;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }
}

let persona1 = new Persona('Juan', 'Perez');
persona1.nombre = 'Juan Camilo';
console.log(persona1.nombre);