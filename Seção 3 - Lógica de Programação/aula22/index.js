/*
//AND &&
console.log(true && true && true && true && true && true && true );
console.log(true && true && true && true && true && true && false ); 
//INDEPENDENTE DO TAMANHO, SE HOUVER UM FALSE, TODA A EXPRESSÃO RETORNARÁ FALSE
console.log(5 < 10 && 11 > 7);
console.log(5 < 10 && 11 > 7 && 10 === 10);
*/

//EXEMPLO PRÁTICO
const usuario = 'Alex'; // Fomr que o usuário preencheu
const senha = 12346; // Fomr que o usuário preencheu

const vaiLogar = usuario === 'Alex' && senha === 12346;
console.log(vaiLogar);

/*
//OR ||
console.log(false || false || true || false );
console.log(true || true || true || true || true || true || false ); 
//INDEPENDENTE DO TAMANHO, SE HOUVER UM TRUE, TODA A EXPRESSÃO RETORNARÁ TRUE
console.log(5 < 10 || 11 < 7);
console.log(5 === 10 || 11 === 7);
console.log(5 < 10 || 11 > 7 || 10 !== 10);*/