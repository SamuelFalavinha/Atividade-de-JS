var num = Number(window.prompt("Informe o número que você deseja que seja o vatorial: "))
var fatorial = 1

if (!isNaN(num) && num>=0) {
    for(var i = 1; i <= num; i++){
        fatorial *=i
    }
    document.write("O fatorial de " + num + " é: " +fatorial)
} else {
    document.write("Número inválido!")
}