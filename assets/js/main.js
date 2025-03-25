const peso = document.getElementById('peso')
const altura = document.getElementById('altura')
const resultado = document.getElementById('resultado')
function calcularIMC() {
    const p = Number(peso.value);
    const a = Number(altura.value);
    if (isNaN(a) || isNaN(p) || a<= 0) {
        return alert(`Por favor digite um peso ou uma altura valida.`)
    }
    const imc = Number((p / (a * a)).toFixed(2));
    if (imc < 18.5) {
       return msg = `Baixo do peso`;
    } else if (imc >= 18.5 && imc <= 24.9) {
        return msg = `com peso normal`;
    } else if (imc >= 25 && imc <= 29.9) {
        return msg = `com sobrepeso`;
    } else if (imc >= 30 && imc <= 34.9) {
        return msg = `com obesidade grau 1`;
    } else if (imc >= 35 && imc <= 39.9) {
        return msg = `com obesidade grau 2`;
    } else {
        return msg = `com obesidade grau 3`
    }
}
function exibirResultado(){
    const mensagem = calcularIMC();
    if(mensagem){
        resultado.innerHTML = `<strong>Resultado:</strong><br/>
        Seu peso é de ${peso.value}kg e sua altura é de ${altura.value}mt.<br/>
        Considerando sua informação.<br/>
        Seu indice de massa corporal (IMC) esta: <strong><i>${mensagem}</i></strong>`
    }
    peso.value = ''
    altura.value = ''
}