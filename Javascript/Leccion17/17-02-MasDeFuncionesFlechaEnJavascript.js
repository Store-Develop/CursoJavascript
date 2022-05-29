function miFuncion() {
    console.log('Saludos de mi función');
}

let miFuncion1 = function() {
        console.log("Saludos desde mi funcion1");
    }
    //Tambien se puede trabajar con let pero lo mas comun es trabajar con const la diferencia es que uno podemos modificar y con el otro no nuestra función flecha.
    //let miFuncionFlecha = () => {
    //console.log('Saludos desde mi funcion flecha');
    //}

//const miFuncionFlecha = () => console.log('Saludos desde mi función flecha');
//miFuncionFlecha();

//const saludar = () => {
//return 'Saludos desde mi función flecha'
//}
const saludar = () => 'Saludos desde mi función flecha';
console.log(saludar());
const regresaObjeto = () => ({ nombre: 'Juan', apellido: 'Lara' });
console.log(regresaObjeto());

const funcionConParametrosClasico = function(mensaje) {
        console.log(mensaje);
    }
    //const funcionConParametros = (mensaje) => console.log(mensaje);
    //funcionConParametros('Saludos con parametros');

//const funcionConVariosParametros = (op1, op2) => op1 + op2;
const funcionConVariosParametros = (op1, op2) => {
    let resultado = op1 + op2;
    return `Resultado: ${ resultado }`;
}
console.log(funcionConVariosParametros(3, 5));