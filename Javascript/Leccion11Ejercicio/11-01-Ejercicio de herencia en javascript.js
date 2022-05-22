class Persona {
    static contadorPersonas = 0;
    constructor(nombre, apellido, edad) {
        this._idPersona = ++Persona.contadorPersonas;
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
    }
    get idPersona() {
        return this._idPersona;
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    get apellido() {
        return this._apellido;
    }
    set apellido(apellido) {
        this._apellido = apellido;
    }
    get edad() {
        return this._edad;
    }
    set edad(edad) {
        this._edad = edad
    }

    toString() {
        return this._idPersona + ': ' + this._nombre + ' ' + this._apellido + ' edad:' + this._edad;
    }
}
class Empleado extends Persona {
    static contadorEmpleados = 0;

    constructor(nombre, apellido, edad, sueldo) {
        super(nombre, apellido, edad);
        this._idEmpleado = ++Empleado.contadorEmpleados;
        this._sueldo = sueldo;
    }
    get idEmpleado() {
        return this._idEmpleado;
    }
    get sueldo() {
        return this._sueldo;
    }
    set sueldo(sueldo) {
        this._sueldo = sueldo;
    }

    toString() {
        return super.toString() + ' E' + this._idEmpleado + ' sueldo: ' + this._sueldo;
    }
}

class Cliente extends Persona {
    static = contadorClientes = 0;

    constructor(nombre, apellido, edad, fechaRegistro) {
        super(nobre, apellido, edad);
        this._idCliente = Cliente.contadorClientes;
        this._fechaRegistro = fechaRegistro;
    }
    get idCliente() {
        return this._idCliente;
    }
    get fechaRegistro() {
        return this._fechaRegistro;
    }
    set fechaRegistro(fechaRegistro) {
        this._fechaRegistro = fechaRegistro;
    }
    nombreCompleto() {
        return 'E' + super.nombreCompleto() + ' fecha del registro: ' + this._fechaRegistro;
    }
    toString() {
        return super.toString() + 'C' + this._idCliente + 'Fecha de registro: ' + this.fechaRegistro;
    }
}

// prueba clase persona.

let persona1 = new Persona('Juan', 'Pérez', 23);
console.log(persona1.toString());

let persona2 = new Persona('Carlos', 'Ramirez', 35);
console.log(persona2.toString());

let empleado1 = new Empleado('Karla', 'Gomez', 25, 5000);
console.log(empleado1.toString());