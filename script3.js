var numeroAleatorio = Math.floor(Math.random()+100)
var tentativa;
var tentativas = 0;

while (true) {
tentativa = parseInt(prompt("Tente adivinhar o número (entre 1 e 100):"));
tentativas++;

if (tentativa === numeroAleatorio) {
document.write("Parabéns! Você acertou o número " + numeroAleatorio + " em " + tentativas + " tentativas.");
break;
} else if (tentativa < numeroAleatorio) {
document.write("Tente novamente. O número é maior.");
} else {
document.write("Tente novamente. O número é menor.");
}
}