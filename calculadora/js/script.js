//variavel que seleciona as linhas de input
var inputSalario = document.querySelector('#ganho-mes')
var  inputHoras = document.querySelector('#horas-dia')
//variavel que pega o espaço onde sai o resultado
var resultado = document.querySelector('span')

//função com o nome que está sendo chamada no html
function calcularValorHora(){
   
    var salario = inputSalario.valueAsNumber
    // console.log (salario) apenas para testar se está pegando os valores 

    var horas = inputHoras.valueAsNumber //valueAsNumber para converter o resultado de string para número
    // console.log (horas) apenas para testar se está pegando os valores

    var horasMes = horas * 22

    var valorHora = salario / horasMes

    // var soma = salario + horas

    var valorDuasCasas = valorHora.toFixed(2)

    resultado.textContent = "R$ "+valorDuasCasas
    

    
}