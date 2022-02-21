const h1 = document.querySelector('h1');
const data = new Date();
/*const option = {
    year: 'numeric',
    month: ('long' || 'short' || 'numeric'),
    weekday: ('long' || 'short'),
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
}
const locale = 'pt-br'
h1.innerHTML = data.toLocaleDateString(locale, option);

*/
// forma que eu mesmo fiz

//Captura o dia da Semana
function diaSemana() {
    const diaDaSemana = data.getDay();
    return diaDaSemana;
}

//Converter dia da semana para texto
function getDiaDaSemanaTxt(diaSemana) {
    const diasDaSemana = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado']
    return diasDaSemana[diaSemana];
    
    
    /*let diaSemanaTexto;

    switch (diaSemana) {
        case 0:
            diaSemanaTexto = 'Domingo';
            return diaSemanaTexto;
        case 1:
            diaSemanaTexto = 'Segunda-feira';
            return diaSemanaTexto;
        case 2:
            diaSemanaTexto = 'Terça-feira';
            return diaSemanaTexto;
        case 3:
            diaSemanaTexto = 'Quarta-feira';
            return diaSemanaTexto;
        case 4:
            diaSemanaTexto = 'Quinta-feira';
            return diaSemanaTexto;
        case 5:
            diaSemanaTexto = 'Sexta-feira';
            return diaSemanaTexto;
        case 6:
            diaSemanaTexto = 'Sábado';
            return diaSemanaTexto;
        default:
            diaSemanaTexto = '';
            return diaSemanaTexto;
    }*/
}

//Captura Mês
function numeroMes() {
    const numeroMes = data.getMonth();
    return numeroMes;
}

//Converte Mês em texto
function getNomeMes(numeroMes) {
    const meses = ['janeiro', 'fevereiro', 'março', 'abril','maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']
    return meses[numeroMes];

    /*let mesTexto;

    switch (numeroMes) {
        case 0:
            mesTexto = 'janeiro';
            return mesTexto;
        case 1:
            mesTexto = 'fevereiro';
            return mesTexto;
        case 2:
            mesTexto = 'março';
            return mesTexto;
        case 3:
            mesTexto = 'abril';
            return mesTexto;
        case 4:
            mesTexto = 'maio';
            return mesTexto;
        case 5:
            mesTexto = 'junho';
            return mesTexto;
        case 6:
            mesTexto = 'julho';
            return mesTexto;
        case 7:
            mesTexto = 'agosto';
            return mesTexto;
        case 8:
            mesTexto = 'setembro';
            return mesTexto;
        case 9:
            mesTexto = 'outubro';
            return mesTexto;
        case 10:
            mesTexto = 'novembro';
            return mesTexto;
        case 11:
            mesTexto = 'dezembro';
            return mesTexto;
        default:
            mesTexto = '';
            return mesTexto;
    }*/
}

//Zero à esquerda
function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`;
}

//Captura da Hora e Minutos
function horaMinutos () {
    const hora = zeroAEsquerda(data.getHours());
    const minutos = zeroAEsquerda(data.getMinutes());
    return `${hora}:${minutos}` 
}

function criaData (data) {
    const diaDoMes = zeroAEsquerda(data.getDate());
    const nomeMes = getNomeMes(numeroMes());
    const ano = data.getFullYear();
    return (
        `${getDiaDaSemanaTxt(diaSemana())}, ${diaDoMes} de ${nomeMes} de ${ano}`
    );
}

h1.innerHTML = `${criaData(data)} ${horaMinutos()}.`;