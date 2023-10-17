var cpf = window.prompt("Digite o seu CPF: ")


if(cpf.length == 14 && isNaN(cpf)){
    document.write("CPF OK")
} else {
    document.write("ERROR")
}