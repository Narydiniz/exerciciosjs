var n1 = document.getElementById('numero1')
var n2 = document.getElementById('numero2')
var resultado = document.getElementById('resultado')

function soma(){
    resultado.innerHTML = parseInt(n1.value) + parseInt(n2.value)
}
function subtração(){
    resultado.innerHTML = parseInt(n1.value) - parseInt(n2.value)
}
function multiplicação(){
    resultado.innerHTML = parseInt(n1.value) * parseInt(n2.value)
}
function divisão(){
    resultado.innerHTML = parseInt(n1.value) / parseInt(n2.value)
}
