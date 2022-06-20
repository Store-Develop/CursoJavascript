class Persona {
    constructor(nombre, apellido, contacto, direccion) {
        this._nombre = nombre;
        this._apellido = apellido;
        this._contacto = contacto;
        this._direccion = direccion;
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

    get contacto() {
        return this._contacto;
    }
    set contacto(contacto) {
        this._contacto = contacto;
    }

    get direccion() {
        return this._direccion;
    }
    set direccion(direccion) {
        this._direccion = direccion;
    }
}