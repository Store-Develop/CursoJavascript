let miNumero = "21";
//console.log(typeof miNumero);

let edad = Number(miNumero);
//console.log(typeof edad);
if (edad >= 18) {
    console.log("La persona puede votar");
} else {
    console.log("La persona es muy joven para votar ");
}
//operador ternario.

let votacion = (edad >= 18) ? "La persona puede votar" : "La persona es muy joven para votar";
console.log(votacion);