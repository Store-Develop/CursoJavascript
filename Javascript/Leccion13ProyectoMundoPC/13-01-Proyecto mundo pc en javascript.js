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

    get idRaton() {
        return this._idRato;
    }

    toString() {
        return `Raton: [idRaton: ${this._idRato} Tipo entrada: ${this._tipoEntrada} Marca: ${this._marca}]`;
    }
}

class Teclado extends DispositivoEntrada {
    static contardorTeclados = 0;
    constructor(tipoEntrada, marca) {
        super(tipoEntrada, marca);
        this._idTeclado = ++Teclado.contardorTeclados;
    }

    get idTeclado() {
        return this._idTeclado;
    }

    toString() {
        return `Teclado: [idTeclado: ${this._idTeclado  } Tipo entrada: ${this._tipoEntrada} Marca: ${this._marca}]`;
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
        return `Monitor: [idMonitor: ${this._idMonitor} Marca: ${this._marca} Tamaño: ${this._tamaño}]`;
    }
}

class Computadora {
    static contadorComputadoras = 0;
    constructor(nombre, raton, teclado, monitor) {
        this._idComputadora = ++Computadora.contadorComputadoras;
        this._nombre = nombre;
        this._monitor = monitor;
        this._teclado = teclado;
        this._raton = raton;
    }

    get idComputadora() {
        return this._idComputadora;

    }
    get nombre() {
        return this._nombre;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }

    get monitor() {
        return this._monitor;
    }
    set monitor(monitor) {
        this._monitor = monitor;
    }
    get teclado() {
        return this._teclado;
    }

    set teclado(teclado) {
        this._teclado = teclado;
    }

    get raton() {
        return this._raton;
    }

    set raton(raton) {
        this._raton = raton;
    }

    toString() {
        return `Computadora: ${this._idComputadora}: ${this._nombre} \n ${this._raton} \n ${this._teclado} \n ${this._monitor}`;
    }
}

class Orden {
    static contadorOrdenes = 0;
    constructor() {
        this._idOrden = ++Orden.contadorOrdenes;
        this._computadoras = [];
    }

    get idOrden() {
        return this._idOrden;
    }

    agregarComputadora(computadora) {
        this._computadoras.push(computadora);
    }

    mostrarOrden() {
        let ordenComputadoras = '';
        for (let computadoras of this._computadoras) {
            ordenComputadoras += '\n{' + computadoras.toString() + '}';
        }
        console.log(`Orden: ${this._idOrden }, Computadoras: ${ordenComputadoras}`);
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
let computadora1 = new Computadora('HP', raton1, teclado1, monitor1);
console.log(computadora1.toString());
let computadora2 = new Computadora('MAC', raton2, teclado2, monitor2);
console.log(computadora2.toString());
let orden1 = new Orden();
orden1.agregarComputadora(computadora1);
orden1.agregarComputadora(computadora2);

orden1.mostrarOrden();

let orden2 = new Orden();
orden2.agregarComputadora(raton1);
orden2.agregarComputadora(teclado1);
orden2.agregarComputadora(monitor1);

orden2.mostrarOrden();