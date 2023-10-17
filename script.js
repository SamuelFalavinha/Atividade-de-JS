var peso = Number(window.prompt("Declare o seu peso em Kg: "))

var altura = Number(window.prompt("Declare sua altura em metros: "))

var imc = peso / (altura*altura)

if (imc <= 18.49){
    document.write("Seu IMC é " + imc.toFixed(2) + ". Você está abaixo do peso.") 
}

else if (imc <= 24.99){
    document.write("Seu IMC é " + imc.toFixed(2) + ". Você está no seu peso normal.") 
}

else if (imc <= 29.99){
    document.write("Seu IMC é " + imc.toFixed(2) + ". Você está acima do peso.")
}

else if (imc <= 34.99){
    document.write("Seu IMC é " + imc.toFixed(2) + ". Você está com Obesidade.")  
}

else{
    document.write("Você não está VIVO!")
}