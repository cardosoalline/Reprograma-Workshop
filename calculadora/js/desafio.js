var inputValorHoras = document.querySelector('#valor-hora')
var inputHorasProjeto = document.querySelector('#horas-projeto')

var total = document.querySelector('span')

function calcular(){
   
    var valorHora = inputValorHoras.value
    var horasProjeto = inputHorasProjeto.value    
    var orcamento = (valorHora * horasProjeto).toFixed(2)

    total.textContent = "O valor total do seu projeto será R$"+ orcamento + "."
        
}