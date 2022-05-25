class DispositivoEntrada {
    constructor(tipoEntrada, marca) {
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }

    get tipoEntrada() {
        return this._tipoEntrada;
    }

    set tipoEntrada(tipoEntrada) {
        this._tipoEntrada = tipoEntrada;
    }

    get marca() {
        return this._marca;
    }

    set marca(marca) {
        this._marca = marca;
    }
}

class Raton extends DispositivoEntrada {
    static contadorRatones = 0;
    constructor(tipoEntrada, marca) {
        super(tipoEntrada, marca);
        this._idRato = ++Raton.contadorRatones;
    }

    toString() {
        return `Tipo de entrada: ${this._tipoEntrada}.
        Marca: ${this._marca}.
        idRaton: ${this._idRato}.`;
    }
}

class Teclado extends DispositivoEntrada {
    static contardorTeclados = 0;
    constructor(tipoEntrada, marca) {
        super(tipoEntrada, marca);
        this._idTeclado = ++Teclado.contardorTeclados;
    }

    toString() {
        return `Tipo de entrada: ${this._tipoEntrada}.
        Marca: ${this._marca}.
        idTeclado: ${this._idTeclado}.`;
    }
}

class Monitor {
    static contadorMonitores = 0;
    constructor(marca, tamaño) {
        this._idMonitor = ++Monitor.contadorMonitores;
        this._marca = marca;
        this._tamaño = tamaño;
    }

    get marca() {
        return this._marca;
    }

    set marca(marca) {
        this._marca = marca;
    }

    get tamaño() {
        return this._tamaño;
    }

    set tamaño(tamaño) {
        this._tamaño = tamaño;
    }

    toString() {
        return `Marca monitor: ${this._marca}.
        Tamaño: ${this._tamaño}.
        idMonitor: ${this._idMonitor}.`;
    }
}

let entrada1 = new DispositivoEntrada('USB', 'HP');
console.log(entrada1);
let entrada2 = new DispositivoEntrada('Bluetooth', 'Kingston');
console.log(entrada2);
let raton1 = new Raton('Bluetooth', 'Lenovo');
console.log(raton1.toString());
let raton2 = new Raton('USB', 'Asus');
console.log(raton2.toString());
let teclado1 = new Teclado('Bluetooth', 'Lenovo');
console.log(teclado1.toString());
let teclado2 = new Teclado('USB', 'Asus');
console.log(teclado2.toString());
let monitor1 = new Monitor('Lenovo', '27');
console.log(monitor1.toString());
let monitor2 = new Monitor('Dell', '18');
console.log(monitor2.toString());