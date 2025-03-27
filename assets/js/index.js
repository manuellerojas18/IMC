const peso = document.getElementById('peso')
const altura = document.getElementById('altura')
const resultado = document.getElementById('resultado')
function error(a, p) {
    if (isNaN(a) || isNaN(p) || a <= 0 || p <= 0) {
        alert(`Por favor digite um peso ou uma altura valida.`)
        return true;
    }
    return false;
};
function calcularIMC(a, p) {
    return Number((p / (a * a)).toFixed(2));
}
function mensagemIMC(a, p) {
    const imc = calcularIMC(a, p);
    let msg;
    if (imc < 18.5) return msg = `Baixo do peso`;
    if (imc >= 18.5 && imc <= 24.9) return msg = `com peso normal`;
    if (imc >= 25 && imc <= 29.9) return msg = `com sobrepeso`;
    if (imc >= 30 && imc <= 34.9) return msg = `com obesidade grau 1`;
    if (imc >= 35 && imc <= 39.9) return msg = `com obesidade grau 2`;
    if (imc > 39.9) return msg = `com obesidade grau 3`;
}
function exibirResultado() {
    const p = Number(peso.value);
    const a = Number(altura.value);
    if (error(a, p)) return peso.value = '', altura.value = '', resultado.innerHTML = '';
    const imc = calcularIMC(a, p);
    const msg = mensagemIMC(a, p)
    if (msg) {
        resultado.innerHTML = `<strong>Resultado:</strong><br/>
        Seu peso é de ${peso.value}kg e sua altura é de ${altura.value}mt.<br/>
        <i>Considerando sua informação...</i><br/>
        Seu indice de massa corporal (IMC) é: <strong>${imc}</strong><br/>
        <strong><i>Você esta ${msg}</i></strong>`
    }
    peso.value = ''
    altura.value = ''
}