const verdadeira = true;

let nome = 'Luiz';
var nome2 = 'Luiz';
console.log('Escopo Global', nome, nome2);

if (verdadeira) {
    let nome = 'Alex';
    var nome2 = 'André'; //REDECLARADA
    console.log('Escopo nivel 01', nome, nome2);

    if (verdadeira) {
        let nome = 'Outra coisa';
        var nome2 = 'Paulo'; //REDECLARADA
        console.log('Escopo nivel 02', nome, nome2);
    }
}
console.log('Escopo Global 02', nome, nome2);