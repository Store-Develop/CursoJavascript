class Producto {
    static contadorProducto = 0;

    constructor(nombre, precio) {
        this._idProducto = ++Producto.contadorProducto;
        this._nombre = nombre;
        this._precio = precio;
    }

    get idProducto() {
        return this._idProducto;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }

    get precio() {
        return this._precio;
    }

    set precio(precio) {
        this._precio = precio;
    }

    toString() {
        return `idProducto: ${this._idProducto}, nombre: ${this._nombre}, precio: $${this._precio}`;
    }
}

class Orden {
    static contadorOrdenes = 0;

    static get MAX_PRODUCTOS() {
        return 5;
    }

    constructor() {
        this._idOrden = ++Orden.contadorOrdenes;
        this._productos = [];
        this._contadorProductosAgregados = 0;
    }

    get idOrden() {
        return this._idOrden;
    }

    agregarProducto(producto) {
        if (this._productos.length < Orden.MAX_PRODUCTOS) {
            this._productos.push(producto);
            //this._productos[this.contadorProductosAgregados++] = producto;
        } else {
            console.log('No se pueden agregar más productos');
        }
    }

    calcularTotal() {
        let totalVentas = 0;
        for (let producto of this._productos) {
            totalVentas += producto.precio; // totalVentas = totalVentas + producto.precio;
        }
        return totalVentas;
    }

    mostrarOrden() {
        let productosOrden = '';
        for (let producto of this._Producto) {
            productosOrden += producto.toString() + ' ';
        }

        console.log(`Orden: ${this._idOrden} Total: ${calcularTotal()}, Productos: ${productosOrden}`);
    }
}

let producto1 = new Producto('Pantalon', 200);
let producto2 = new Producto('Camisa', 100);
console.log(producto1.toString());
console.log(producto2.toString());