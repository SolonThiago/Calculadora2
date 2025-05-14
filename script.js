function calcular() {
  const n1 = parseFloat(document.getElementById("numero1").value);
  const n2 = parseFloat(document.getElementById("numero2").value);
  const operacao = document.getElementById("operacao").value;

  if (isNaN(n1) || isNaN(n2)) {
    alert("Digite dois números válidos!");
    return;
  }

  let resultado;
  switch (operacao) {
    case "soma":
      resultado = n1 + n2;
      break;
    case "subtracao":
      resultado = n1 - n2;
      break;
    case "multiplicacao":
      resultado = n1 * n2;
      break;
    case "divisao":
      if (n2 === 0) {
        alert("Não é possível dividir por zero!");
        return;
      }
      resultado = n1 / n2;
      break;
    default:
      alert("Operação inválida!");
      return;
  }

  document.getElementById("resultado").innerText = resultado.toFixed(2);
}

function resetCalculator() {
  if (confirm("Tem certeza que deseja reiniciar o cálculo?")) {
    document.getElementById("numero1").innerText = "";
    document.getElementById("numero2").innerText = "";
    document.getElementById("operacao").innerText = "soma";
    document.getElementById("resultado").innerText = "---";
  }
}
