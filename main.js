let operacao = prompt("Inorme a operação desejada: ")
let numero1 = Number(prompt("Informe o primeiro número: "))
let numero2 = Number(prompt("Informe o segundo número: "))

if (operacao == "+"){
    let resultado = numero1 + numero2
    document.write("O resultado da soma é " + resultado + ".")
}
else if (operacao == "-"){
    let resultado = numero1 - numero2
    document.write("O resultado da subtração é " + resultado + ".")
}
else if (operacao == "*"){
    let resultado = numero1 * numero2
    document.write("O resultado da multiplicação é " + resultado + ".")
}
else if (operacao == "/"){
    let resultado = numero1 / numero2
    document.write("O resultado da divisão é " + resultado + ".")
} else{
    document.write("OPERAÇÃO INCORRETA")
}