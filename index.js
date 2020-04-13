import cipher from './cipher.js';
var botaoCifrar = document.getElementById("cifrar");
var botaoDecifrar = document.getElementById("decifrar");

botaoCifrar.addEventListener("click", function(event) {
    event.preventDefault();
    let cifrando = document.getElementById("valor").value;
    let offsetInput = parseInt(document.getElementById("offset").value);
    document.getElementById("valorDigitado").innerHTML = cipher.encode (offsetInput, cifrando);
})

botaoDecifrar.addEventListener("click", function(event){
    event.preventDefault();
    let decifrando = document.getElementById("valor2").value;
    let offsetInput = parseInt(document.getElementById("offset").value);
    document.getElementById("valorDigitado2").innerHTML = cipher.decode (offsetInput,decifrando);
})



console.log(cipher);
