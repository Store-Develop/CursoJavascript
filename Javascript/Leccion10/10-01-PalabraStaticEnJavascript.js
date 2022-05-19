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

    get apellido() {
        return this._apellido;
    }

    set apellido(apellido) {
        this._apellido = apellido;
    }

    //Agregamos un nuevo metodosen la clase padre
    nombreCompleto() {
            return this._nombre + ' ' + this._apellido;
        }
        //Sobreescribiendo el metodo de la clase padre (Object)
    toString() {
        //se aplicaca polimorfismo (Multiples formas en tiempo de ejecución)
        //el metodo que se ejecuta depende de si es una referencia de tipo padre
        //o de tipo hijo.
        return this.nombreCompleto();
    }

    static saludar() {
        console.log('Saludos desde el metodo static');
    }

    static saludar2(persona) {
        console.log(persona.nombre + ' ' + persona.apellido);
    }
}
class Empleado extends Persona {
    constructor(nombre, apellido, departamento) {
        super(nombre, apellido);
        this._departamento = departamento;
    }

    get departamento() {
        return this._departamento;
    }

    set departamento(departamento) {
        this._departamento = departamento;
    }

    //sobreescritura
    nombreCompleto() {
            return super.nombreCompleto() + ', ' + this.departamento;
        }
        //Sobreescribiendo el metodo de la clase padre (Object)
    toString() {
        //se aplicaca polimorfismo (Multiples formas en tiempo de ejecución)
        //el metodo que se ejecuta depende de si es una referencia de tipo padre
        //o de tipo hijo.
        return this.nombreCompleto();
    }
}

let persona1 = new Persona('Juan', 'Perez');
console.log(persona1.toString());

let empleado1 = new Empleado('Maria', 'Jimenez', 'Sistemas');
console.log(empleado1);
console.log(empleado1.nombre);
console.log(empleado1.toString());


// persona1.saludar(); No es posiblellamar un método static desde un objeto.

Persona.saludar();
Persona.saludar2(persona1);

Empleado.saludar();
Empleado.saludar2(empleado1);