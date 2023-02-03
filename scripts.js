const button = document.getElementById('button');

function imc() {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const results = document.getElementById('results');

    if (nome !== '' && altura !== '' && peso !== '') {

        const calcImc = (peso / (altura * altura)).toFixed(1)

        let situation
        if (calcImc >= 40) {
            situation = "com Obesidade classe III"
        } else if(calcImc < 40 && calcImc >= 35) {
            situation = "com Obesidade classe II"
        } else if(calcImc < 35 && calcImc >= 30) {
            situation = "com Obesidade classe I"
        } else if(calcImc < 30 && calcImc >= 25) {
            situation = "Com Excesso de peso"
        } else if(calcImc < 25 && calcImc >= 18.5) {
            situation = "com Peso normal"
        } else {
            situation = "Abaixo do peso"
        }
        results.textContent = `${nome}, seu IMC é ${calcImc}, isso significa que você está ${situation}`

    } else {
        results.textContent = "Preencha todos os campos!"
    }

}

button.addEventListener("click", imc)