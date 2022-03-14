const verdadeira = true;

let nome = 'Luiz'; //CRIANDO A VARIÁVEL
var nome2 = 'Luiz'; //CRIANDO A VARIÁVEL
console.log('Escopo Global', nome, nome2);

if (verdadeira) {
    let nome = 'Alex'; //CRIANDO UMA NOVA VARIÁVEL
    var nome2 = 'André'; //REDECLARADA
    console.log('Escopo nivel 01', nome, nome2);

    if (verdadeira) {
        let nome = 'Outra coisa'; //CRIANDO UMA NOVA VARIÁVEL
        var nome2 = 'Paulo'; //REDECLARADA
        console.log('Escopo nivel 02', nome, nome2);
    }
}
console.log('Escopo Global 02', nome, nome2);

