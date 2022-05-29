function miFuncion() {
    console.log('Saludos de mi función');
}

let miFuncion1 = function() {
        console.log("Saludos desde mi funcion1");
    }
    //Tambien se puede trabajar con let pero lo mas comun es trabajar con const la diferencia es que uno podemos modificar y con el otro no nuestra función flecha.
let miFuncionFlecha = () => {
    console.log('Saludos desde mi funcion flecha');
}

miFuncion();

miFuncion1();

miFuncionFlecha();