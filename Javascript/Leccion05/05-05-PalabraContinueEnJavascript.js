for (contador = 0; contador <= 10; contador++) {
    if (contador % 2 !== 0) {
        continue; //ir a la siguiente iteración
    }
    console.log(contador);
}