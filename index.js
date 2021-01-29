function updateModifiers() {
  // convert ability scores into modifiers

  var forScore = document.getElementById("forScore").value;
  var volScore = document.getElementById("volScore").value;
  var desScore = document.getElementById("desScore").value;
  var ingScore = document.getElementById("ingScore").value;
  var perScore = document.getElementById("perScore").value;
  document.getElementById("maxVitalidad").value = parseInt(forScore) * 3 + 3;
  document.getElementById("maxAguante").value =
    (parseInt(forScore) + parseInt(volScore)) * 2;
  document.getElementById("reaccion").value =
    parseInt(desScore) +
    parseInt(ingScore) +
    parseInt(perScore) * 2 +
    parseInt(volScore);
}

function abilityDice(abillity, stat, skill) {
  var abilityScore = document.getElementById(abillity).value;
  var statScore = document.getElementById(stat).value;
  var result = parseInt(abilityScore) + parseInt(statScore);

  var dados = [];
  for (i = 0; i < result; i++) {
    dados.push(Math.ceil(Math.random() * 6));
  }

  var dadosOrdenados = dados.sort(function (a, b) {
    return a - b;
  });

  document.getElementById("diceResult").value =
    "Tirada de " + skill + " :\n" + dadosOrdenados;
}
