function meuEscopo () {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    function recebeEventoForm (evento) {
        evento.preventDefault(); //IMPEDE QUE A PAGINA SEJA RECARREGADA APÓS O SUBMIT
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const altura = form.querySelector('.altura');
        const peso = form.querySelector('.peso');
        console.log(nome, sobrenome, altura, peso);

        const pessoa = {
            nome: nome.value,
            sobrenome: sobrenome.value,
            altura: altura.value,
            peso: peso.value 
        };

        pessoas.push(pessoa);
        
        console.log(pessoas);

        resultado.innerHTML += `${pessoa.nome} ${pessoa.sobrenome}, ${pessoa.altura}m de altura e ${pessoa.peso}Kg. <br>`;

        /*TESTE PARA SABER SE O COMANDO ESTÁ FUNCIONADO
        let contador = 1; => FORA DA FUNÇÃO
        evento.preventDefault();
        console.log(`Evento não enviado ${contador}`);
        contador++;*/ 
    }

    form.addEventListener('submit', recebeEventoForm)
      
}

meuEscopo();
