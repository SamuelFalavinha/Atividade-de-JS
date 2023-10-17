var compA = Number(window.prompt("Insira o comprimento do lado A"))

var compB = Number(window.prompt("Insira o comprimento do lado B"))

var compC = Number(window.prompt("Insira o comprimento do lado C"))

//Equilátero//
if (compA == compB && compA == compC && compB == compC){
    document.write("Esse triângulo é um Triângulo Equilátero.")
}

else if (compA != compB && compA != compC && compB != compC){
    document.write("Esse triângulo é um Triângulo Escaleno.")
}

else{
    document.write("Esse triângulo é um Triângulo Isósceles.")
}