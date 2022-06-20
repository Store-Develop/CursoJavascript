const personas = [
    new Persona('Juan', 'Pérez'), new Persona('Karla', 'Lara')
];

function mostrarPersonas() {
    console.log('Mostrar Personas...');
    let texto = '';
    for (let persona of personas) {
        console.log(persona);
        texto += `<li>${persona.nombre} ${persona.apellido}</li>`;
        document.getElementById('personas').innerHTML = texto;
    }
}