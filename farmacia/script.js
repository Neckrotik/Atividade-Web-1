function Calcular() {
  let med = window.document.getElementById("medicamento").value;
  let preco = window.document.getElementById("preco").value;

  let preco2 = parseFloat(preco) * 2;
  let preco3 = preco2.toString();
  let preco4 = preco2 - parseFloat(preco3.substring(preco3.indexOf("."), preco3.length));

  window.document.getElementById(
    "resultado"
  ).innerHTML = `<p>Leve 2 ${med} por apenas ${preco4}</p>`;
}
