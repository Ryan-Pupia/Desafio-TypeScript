let button = document.getElementById("button");
let input1 = document.getElementById('input1') as HTMLInputElement;
let input2 = document.getElementById('input2') as HTMLInputElement;
if (button) {
    button.addEventListener('click', () => {
        if (input1 && input2) {
            console.log("Amo Suco" + soma(Number(input1.value), Number(input2.value)));
        }
    });
}

function soma(num1: number, num2: number) {
    return num1 + num2;
}