var ano = Number(window.prompt("Qual ano você deseja saber se foi, é ou será Bissexto: "))

if (ano%400 == 0 ){
    document.write("Esse ano " + ano +" foi, é ou será Bixessto.")
}

else if (ano%4 == 0 && ano != 100){
    document.write("Esse ano " + ano + " foi, é ou será Bixessto.")
}

else{
    document.write("Esse ano " + ano + " não foi, não é ou não será Bixessto.")
}