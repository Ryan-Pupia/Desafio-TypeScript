let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma') as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo');

if (campoSaldo) {
    campoSaldo.innerHTML = '0'
}

function somarAoSaldo(soma: number): void {
    if (campoSaldo) campoSaldo.innerHTML = (Number(campoSaldo.innerHTML) + soma).toString();
}

function limparSaldo(): void {
    if (campoSaldo) campoSaldo.innerHTML = '0';
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
