const resultado = document.querySelector('#resultado');
const pontuacaoJogador = document.querySelector('#pontuacao-jogador');
const pontuacaoComputador = document.querySelector('#pontuacao-computador');
let pontoJogador = 1;
let pontoComputador = 1;

function resposta (jogador, computador) {
    resultado.innerHTML = `${jogador} ganha de ${computador}. Você ganhou!`   

}

function jogada(opcao) {
    const opcoes = ['Pedra', 'Papel', 'Tesoura', 'Largato', 'Spock'];
    const computador = Math.round(Math.random() * (4 - 0));
    console.log(computador)
    if (opcao === computador) {
        resultado.innerHTML = `${opcoes[opcao]} e ${opcoes[computador]} são iguais. Empate!`;
    } else if (opcao === 1 && computador === 0 || computador === 1 && opcao === 0) {
        resultado.innerHTML = `${opcoes[1]} cobre ${opcoes[0]}. Você ganhou!`;
        if (opcao === 1) {
            pontuacaoJogador.innerHTML = pontoJogador++;
        }
        
    } else if (opcao === 2 && computador === 0) {
        resultado.innerHTML = `${opcoes[0]} quebra ${opcoes[2]}. Você perdeu!`;
        pontuacaoComputador.innerHTML = pontoComputador++;
    } else if (opcao === 0 && computador === 1) {
        resultado.innerHTML = `${opcoes[1]} cobre ${opcoes[0]}. Você perdeu!`;
        pontuacaoComputador.innerHTML = pontoComputador++;
    } else if (opcao === 2 && computador === 1) {
        resultado.innerHTML = `${opcoes[2]} corta ${opcoes[1]}. Você ganhou!`;
        pontuacaoJogador.innerHTML = pontoJogador++;
    } else if (opcao === 0 && computador === 2) {
        resultado.innerHTML = `${opcoes[1]} cobre ${opcoes[0]}. Você perdeu!`;
        pontuacaoComputador.innerHTML = pontoComputador++;
    } else if (opcao === 2 && computador === 2) {
        resultado.innerHTML = `${opcoes[2]} corta ${opcoes[1]}. Você ganhou!`;
        pontuacaoJogador.innerHTML = pontoJogador++;
    } 

}