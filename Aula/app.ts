let button = document.getElementById("button");
let input1 = document.getElementById('input1') as HTMLInputElement;
let input2 = document.getElementById('input2') as HTMLInputElement;
if (button) {
    button.addEventListener('click', () => {
        if (input1 && input2) {
            console.log(somaNumeros(Number(input1.value), Number(input2.value), true, "O valor é: "));
        }
    });
}

function somaNumeros(num1: number, num2: number, print: boolean, frase: string) {
    if (print) console.log(frase + (num1 + num2));
    return num1 + num2;
}