const nome = document.querySelector('#nome');
const altura = document.querySelector('#altura');
const peso = document.querySelector('#peso');
const btnCalcular = document.querySelector('#btnCalcular');
const localResultado = document.querySelector('.resultado');

function calcularImc(altura, peso){
    return peso / Math.pow(altura, 2);
}

function mostrarNaTela(nome, imc){
    const paragrafo = document.createElement('p');
    paragrafo.innerText = `Ola ${nome}, seu IMC é: ${imc.toFixed(2)}`;
    localResultado.appendChild(paragrafo);
}

function imc(){
    localResultado.innerHTML = '';

    const nomePessoa = nome.value.trim();
    const valueAltura = +altura.value;
    const valuePeso = +peso.value;    

    const resultImc = calcularImc(valueAltura, valuePeso);
    mostrarNaTela(nomePessoa, resultImc);
}

btnCalcular.addEventListener('click', imc);