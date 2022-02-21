//Criando um script para a calculadora com funções distintas para cada etapa:

// Capturar evento de submit do formulário
const form = document.querySelector('#formulario');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const inputPeso = e.target.querySelector('#peso');
  const inputAltura = e.target.querySelector('#altura');

  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);

  if (!peso) {
    setResultado('Peso inválido', false);
    return;
  }

  if (!altura) {
    setResultado('Altura inválida', false);
    return;
  }

  const imc = getImc(peso, altura); //Chamando a função calcular IMC
  const nivelImc = getNivelImc(imc); //Chamando a função nível do IMC

  const msg = `Seu IMC é ${imc} (${nivelImc}).`; //Craindo a mensagem de retorno do resultado

  setResultado(msg, true); //Chamando a função de retornar o resultado no HTML
});

//Função com o retorno do resultado
function getNivelImc (imc) {
  const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso',
    'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3']; //Criando um array com os resultados

    //Criando a estrutura condicional simplificada
  if (imc >= 39.9) return nivel[5];
  if (imc >= 34.9) return nivel[4];
  if (imc >= 29.9) return nivel[3];
  if (imc >= 24.9) return nivel[2];
  if (imc >= 18.5) return nivel[1];
  if (imc < 18.5) return nivel[0];
}

//Função que calcula o IMC
function getImc (peso, altura) {
  const imc = peso / altura ** 2;
  return imc.toFixed(2);
}

//Função que cria um parágrafo
function criaP () {
  const p = document.createElement('p');
  return p;
}

//Função que imprime o resultado no HTML
function setResultado (msg, isValid) {
  const resultado = document.querySelector('#resultado'); //Criando uma variável ligado a tag do HTML
  resultado.innerHTML = '';

  const p = criaP(); //Usando a função criar paragrafo

  if (isValid) {
    p.classList.add('paragrafo-resultado');
  } else {
    p.classList.add('bad'); //A configuração da class bad será feita no CSS
  }

  p.innerHTML = msg; //Imprime o resultado no HTML
  resultado.appendChild(p); //leva o resultado para o HTML
}
