function getDiaDaSemanaTxt (diaSemana) {
    let diaSemanaTexto;
    
    switch (diaSemana) {
        case 0:
            diaSemanaTexto = 'Domingo';
            return diaSemanaTexto;
        case 1:
            diaSemanaTexto = 'Segunda';
            return diaSemanaTexto;
        case 2:
            diaSemanaTexto = 'Terça';
            return diaSemanaTexto;
        case 3:
            diaSemanaTexto = 'Quarta';
            return diaSemanaTexto;
        case 4:
            diaSemanaTexto = 'Quinta';
            return diaSemanaTexto;
        case 5:
            diaSemanaTexto = 'Sexta';
            return diaSemanaTexto;
        case 6:
            diaSemanaTexto = 'Sábado';
            return diaSemanaTexto;
        default:
            diaSemanaTexto = '';
            return diaSemanaTexto;
    }
}

const data = new Date();
let diaDaSemana = data.getDay();
let diaSemanaTexto = getDiaDaSemanaTxt(diaDaSemana);

console.log(diaSemanaTexto);

/*
switch (diaDaSemana) {
    case 0:
        diaSemanaTexto = 'Domingo';
        break
    case 1:
        diaSemanaTexto = 'Segunda';
        break
    case 2:
        diaSemanaTexto = 'Terça';
        break
    case 3:
        diaSemanaTexto = 'Quarta';
        break
    case 4:
        diaSemanaTexto = 'Quinta';
        break
    case 5:
        diaSemanaTexto = 'Sexta';
        break
    case 6:
        diaSemanaTexto = 'Sábado';
        break
    default:
        diaSemanaTexto = '';
        break
}*/

/*
if (diaDaSemana === 0) {
    diaSemanaTexto = 'Domingo';
} else if (diaDaSemana === 1) {
    diaSemanaTexto = 'Segunda';
} else if (diaDaSemana === 2) {
    diaSemanaTexto = 'Terça';
} else if (diaDaSemana === 3) {
    diaSemanaTexto = 'Quarta';
} else if (diaDaSemana === 4) {
    diaSemanaTexto = 'Quinta';
} else if (diaDaSemana === 5) {
    diaSemanaTexto = 'Sexta';
} else if (diaDaSemana === 6) {
    diaSemanaTexto = 'Sábado';
} else {
    diaSemanaTexto = '';
}
*/

