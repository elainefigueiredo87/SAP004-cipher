import cipher from './cipher.js';
var botaoCifrar = document.getElementById("cifrar");

botaoCifrar.addEventListener("click", function(event) {
    event.preventDefault();
    let cifrar = document.getElementById("valor").value;
    document.getElementById("valorDigitado").innerHTML = cifrar;
})


function pegar () {
    pegando = document.getElementById('valor2').value;
    document.getElementById('valorDigitado2').innerHTML = pegando;

}

console.log(cipher);
