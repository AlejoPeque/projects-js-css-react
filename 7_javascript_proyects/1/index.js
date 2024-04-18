const txtn1 = document.getElementById('n1');
const txtn2 = document.getElementById('n2');
const resp = document.getElementById('resp');
const btnCalcular = document.getElementById('calcular');

function calcular(){
    const op1 = parseFloat(txtn1.value);
    const op2 = parseFloat(txtn2.value);
    let respuesta = op1 + op2;
    resp.innerText = respuesta;
}

btnCalcular.addEventListener('click', calcular);
