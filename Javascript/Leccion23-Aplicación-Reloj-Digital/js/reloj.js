const mostrarReloj = () => {
    let fecha = new Date();
    let hr = formatoHorario(fecha.getHours());
    let min = formatoHorario(fecha.getMinutes());
    let seg = formatoHorario(fecha.getSeconds());
    document.getElementById('hora').innerHTML = `${hr}:${min}:${seg}`;

    const meses = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
    const dias = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'sab'];
    let diaSemana = dias[fecha.getDay()];
    let dia = fecha.getDate();
    let mes = meses[fecha.getMonth()];
    let year = fecha.getFullYear();
    let fechaTexto = `${diaSemana}, ${dia} ${mes} ${year}`;
    document.getElementById('fecha').innerHTML = fechaTexto;

    document.getElementById('contenedor').classList.toggle('animar');
}

const formatoHorario = (hora) => {
    if (hora < 10)
        hora = '0' + hora;
    return hora;

}

setInterval(mostrarReloj, 1000);