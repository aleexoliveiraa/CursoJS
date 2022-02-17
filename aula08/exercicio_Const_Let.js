const nome = 'Alex';
const sobrenome = 'Oliveira';
const idade = 30;
const peso = 75;
const alturaEmM = 1.74;
let imc;
let anoDeNascimento;

imc = peso /(altura**2);
anoDeNascimento = 2022 - idade;

console.log(`${nome} ${sobrenome} nasceu em ${anoDeNascimento} e tem ${idade} anos.`)
console.log(`tem ${peso}Kg e sua altura é de ${alturaEmM}, com isso seu IMC é de ${imc}.`)