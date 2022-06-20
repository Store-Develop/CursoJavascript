const personas = [
    new Persona('Juan', 'Pérez', '3137597297', 'Bogotá DC'), new Persona('Karla', 'Lara', '9955667744', 'Mexico')
];

function mostrarPersonas() {
    console.log('Mostrar Personas...');
    let texto = '';
    for (let persona of personas) {
        console.log(persona);
        texto += `<li>${persona.nombre} ${persona.apellido}, Contacto: ${persona._contacto} ${persona._direccion}</li>`;
        document.getElementById('personas').innerHTML = texto;
    }
}

function agregarPersona() {
    const forma = document.forms['forma'];
    const nombre = forma['nombre'];
    const apellido = forma['apellido'];
    const contacto = forma['contacto'];
    const direccion = forma['direccion'];
    if (nombre.value != '' && contacto.value != '') {
        const persona = new Persona(nombre.value, apellido.value, contacto.value, direccion.value);
        console.log(persona);
        personas.push(persona);
        mostrarPersonas();
    } else {
        console.log('Por favor agregar Nombre y Contacto para poder registrar');
    }
}