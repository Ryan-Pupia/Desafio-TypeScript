"use strict";
let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma');
let campoSaldo = document.getElementById('campo-saldo');
if (campoSaldo) {
    campoSaldo.innerHTML = '0';
}
function somarAoSaldo(soma) {
    if (campoSaldo)
        campoSaldo.innerHTML = (Number(campoSaldo.innerHTML) + soma).toString();
}
function limparSaldo() {
    if (campoSaldo)
        campoSaldo.innerHTML = '0';
}
if (botaoAtualizar) {
    botaoAtualizar.addEventListener('click', function () {
        somarAoSaldo(Number(soma.value));
    });
}
if (botaoLimpar) {
    botaoLimpar.addEventListener('click', function () {
        limparSaldo();
    });
}
