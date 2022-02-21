/*
const data = new Date(1992, 4, 6, 12, 00, 00, 500);
console.log('Dia', data.getDate()); //Dia do mês
console.log('Mês', data.getMonth() + 1); //Mês - Jan = 0
console.log('Ano', data.getFullYear()); 
console.log('Hora', data.getHours());
console.log('Minutos', data.getMinutes());
console.log('Segundos', data.getSeconds());
console.log('ms', data.getMilliseconds());
console.log('Dia da Semana', data.getDay()); //0 - Domingo; 6 - Sábado;
console.log(data.toString());
*/

function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`;
}

function formataData (data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const minuto = zeroAEsquerda(data.getMinutes());
    const segundo = zeroAEsquerda(data.getSeconds());
    return `${dia}/${mes}/${ano} ${hora}:${minuto}:${segundo}`
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);
