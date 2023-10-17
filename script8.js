var i = Number(window.prompt("Forneça um Número: "))

var start = 1

var somaPar = 0

while (start <= i)
    if (i % 2 == 0){
        somaPar += i
     }
document.write("A soma dos números pares de 1 a "+ i + " é " + somaPar + ".")