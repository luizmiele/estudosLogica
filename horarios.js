


function converteHorario(horario) {

    horario.split('')

    let horas = parseInt(horario[0] + horario[1])
    let minutos = horario[3] + horario[4]
    let segundos = horario[6] + horario[7]
    let ampm = horario[horario.length - 2]

    if(horas >= 12 && ampm === 'A') {
        horas = horas - 12;
    }else if (horas < 12 && ampm === 'P'){
        horas = horas + 12;
    }
    
    if(horas < 10){
        return (`0${horas}:${minutos}:${segundos}`);
    } else {
        return (`${horas}:${minutos}:${segundos}`);
    }
}


console.log(converteHorario('03:45:30PM'))

