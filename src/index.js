import cipher from './cipher.js';
var botaoCifrar = document.getElementById("cifrar");
var botaoDecifrar = document.getElementById("decifrar");

botaoCifrar.addEventListener("click", function(event) {
    event.preventDefault();
    let cifrar = document.getElementById("valor").value;
    document.getElementById("valorDigitado").innerHTML = cifrar;
})

botaoDecifrar.addEventListener("click", function(event){
    event.preventDefault();
    let decifrar = document.getElementById("valor2").value;
    document.getElementById("valorDigitado2").innerHTML = decifrar;
})



console.log(cipher);
