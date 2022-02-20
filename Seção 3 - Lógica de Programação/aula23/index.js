/*
//Avaliação com and/e - &&

function falaOi () {
    return 'Oi';
}

const vaiExecutar = 'alex';
console.log (vaiExecutar && falaOi ());

let vaiExecutar1 = NaN;
console.log (vaiExecutar1 && falaOi ());

*/


//Avaliação com or/ou - ||

console.log (0 || null || false || 'Alex' || true); // Retorna o primeiro valor true e finaliza a expressão

const corUsuario = null;
const corPadrao = corUsuario || 'preto';

console.log(corPadrao); 

const corUsuario1 = 'vermelho';
const corPadrao1 = corUsuario1 || 'preto';

console.log(corPadrao1); 