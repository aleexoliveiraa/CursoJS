function meuEscopo () {
    //Recebendo os dados do formulário
    const form = document.querySelector('form');
    const resultado = document.querySelector('div#resultado');

    function recebeEventoForm (evento) {
        //Evitando que a página recarregue
        evento.preventDefault();

        //Capturando os valores no ofrmulário e convertendo
        const peso = form.querySelector('#peso').value;
        const altura = Number(form.querySelector('#altura').value);

        //Calculando o IMC
        let imc = peso / (altura ** 2);
        imc = imc.toFixed(1);

        //Criando a estrutura condicional
        if (imc < 18.5) {
            resultado.innerHTML = `Seu IMC é de ${imc} (Abaixo do peso)`;
        } else if (imc >= 18.5 && imc <= 24.9) {
            resultado.innerHTML = `Seu IMC é de ${imc} (Peso normal)`;
        } else if (imc >= 25 && imc <= 29.9) {
            resultado.innerHTML = `Seu IMC é de ${imc} (Sobrepeso)`;
        } else if (imc >= 30 && imc <= 34.9) {
            resultado.innerHTML = `Seu IMC é de ${imc} (Obesidade grau 1)`;
        } else if (imc >= 35 && imc <= 39.9) {
            resultado.innerHTML = `Seu IMC é de ${imc} (Obesidade grau 2)`;
        } else if ( imc >= 40) {
            resultado.innerHTML = `Seu IMC é de ${imc} (Obesidade grau 3)`;
        } 


    }
    form.addEventListener('submit', recebeEventoForm);
}
meuEscopo();