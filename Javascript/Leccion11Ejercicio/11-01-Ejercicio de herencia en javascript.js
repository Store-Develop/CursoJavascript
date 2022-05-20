class Persona {
    static contadorPersonas = 0;
    constructor(nombre, apellido, edad) {
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
        this._idPersona = ++Persona.contadorPersonas;
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
    nombreCompleto() {
        return this._idPersona + ': ' + this._nombre + ' ' + this._apellido + ' edad:' + this._edad;
    }
    toString() {
        return this.nombreCompleto();
    }
}
class Empleado extends Persona {
    idEmpleado = 'E';
    constructor(nombre, apellido, edad, sueldo) {
        super(nombre, apellido, edad, sueldo);
        this._idEmpleado = Empleado.idEmpleado;
        this._sueldo = sueldo;
    }
    get idEmpleado() {
        return this.idEmpleado;
    }
    get sueldo() {
        return this.sueldo;
    }
    set sueldo(sueldo) {
        this._sueldo = sueldo;
    }
    nombreCompleto() {
        return this._idEmpleado + super.nombreCompleto() + ' sueldo: ' + this._sueldo;
    }
    toString() {
        return this.nombreCompleto();
    }
}

class Cliente extends Persona {
    fechaRegistro = new Date();
    constructor(idCliente) {
        this._idCliente = idCliente;
        this._fechaRegistro = Cliente.fechaRegistro;
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
        return this.nombreCompleto();
    }
}
persona1 = new Persona('Juan', 'Pérez', 23);
console.log(persona1.toString());
empleado1 = new Empleado('Andres', 'Parra', '24', 2000000);
console.log(empleado1.toString());