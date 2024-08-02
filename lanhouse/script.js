function Calcular() {
  let tempo = parseFloat(window.document.getElementById("tempo").value);
  let valor = parseFloat(window.document.getElementById("valor").value);

  let x = tempo / 15;
  let y = x * valor;

  window.alert("valor a ser pago: " + y);
}
