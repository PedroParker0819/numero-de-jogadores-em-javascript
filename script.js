var numPlayers = prompt("Quantos jogadores estão no time?");

var heights = [];

for (var i = 0; i < numPlayers; i++) {
  heights[i] = prompt("Quais a altura dos jogadore " + (i + 1) + "'s ?");
}

var averageHeight = heights.reduce((a, b) => a + b) / numPlayers;

alert("A altura média da equipe é de " + averageHeight + " metros.");

var sum = 0;
var count = 0;

for (var i = 0; i < 10; i++) {
  var value = prompt("Insira um valor inteiro: ");
  if (value > 0) {
    sum += value;
  } else {
    count++;
  }
}

console.log("A soma dos positivos é " + sum);
console.log("O número de valores negativos é " + count);