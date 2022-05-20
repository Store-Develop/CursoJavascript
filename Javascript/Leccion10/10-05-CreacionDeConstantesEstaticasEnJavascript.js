class Persona {
    static contadorPersonas = 0; //Atributo de nuestra clase

    static get MAX_OBJ() {
        return 5;
    }

    constructor(nombre, apellido) {
        this._nombre = nombre;
        this._apellido = apellido;
        if (Persona.contadorPersonas < Persona.MAX_OBJ) {
            this.idPersona = ++Persona.contadorPersonas;
        } else {
            console.log('Se han superado el máximo de objetos permitidos');
        }

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
            return this.idPersona + ' ' + this._nombre + ' ' + this._apellido;
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
console.log(empleado1.toString());
console.log(Persona.contadorPersonas);

let persona2 = new Persona('Karla', 'Ramirez');
console.log(persona2.toString());
console.log(Persona.contadorPersonas);
console.log(Persona.MAX_OBJ);

let persona3 = new Persona('Mariano', 'Lara');
let persona4 = new Persona('Armando', 'Toledo');
let persona5 = new Persona('Laura', 'Quintero');
console.log(persona4.toString());
console.log(persona5.toString());