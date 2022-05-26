"use strict";
class Empleado {
    constructor(nombre, sueldo) {
        this._nombre = nombre;
        this._sueldo = sueldo;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }

    get sueldo() {
        return this._sueldo;
    }

    set sueldo(sueldo) {
        this._sueldo = sueldo;
    }

    obtenerDetalles() {
        return `Empleado: nombre: ${this._nombre}, sueldo: ${this._sueldo}`;
    }
}

class Gerente extends Empleado {
    constructor(nombre, sueldo, departamento) {
        super(nombre, sueldo);
        this._departamento = departamento;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }

    get sueldo() {
        return this._sueldo;
    }

    set sueldo(sueldo) {
        this._sueldo = sueldo;
    }

    get departamento() {
        return this._departamento;
    }

    set departamento(departamento) {
        this._departamento = departamento;
    }

    obtenerDetalles() {
        return `Gerente: ${super.obtenerDetalles()} depto: ${this._departamento}`;
    }
}

function determinarTipo(tipo) {
    console.log(tipo.obtenerDetalles());
    if (tipo instanceof Gerente) {
        console.log('Es un objeto de tipo Gerente');
        console.log(tipo._departamento);
    } else if (tipo instanceof Empleado) {
        console.log('Es un objeto de tipo Empleado');
        console.log(tipo._departamento);
    } else if (tipo instanceof Objetc) {
        console.log('Es un objeto de tipo Objetc');
    }
}
let empleado1 = new Empleado('Juan Camilo', 5000);
let gerente1 = new Gerente('Juan Camilo', 5000, 'Sistemas');

determinarTipo(empleado1);
determinarTipo(gerente1);