//El operador lógico (OR) se representa en javascript con (||) y para que se cumpla, cualquiera de las condiciones puede ser verdadera.

let vacaciones = false,
    diaDescanso = false;
if (vacaciones || diaDescanso) {
    console.log("El padre puede asistir al juego del hijo.");
} else {
    console.log("El padre está ocupado.");
}

vacaciones = true,
    diaDescanso = false;
if (vacaciones || diaDescanso) {
    console.log("El padre puede asistir al juego del hijo.");
} else {
    console.log("El padre está ocupado.");
}

vacaciones = true,
    diaDescanso = true;
if (vacaciones || diaDescanso) {
    console.log("El padre puede asistir al juego del hijo.");
} else {
    console.log("El padre está ocupado.");
}
vacaciones = false,
    diaDescanso = true;
if (vacaciones || diaDescanso) {
    console.log("El padre puede asistir al juego del hijo.");
} else {
    console.log("El padre está ocupado.");
}