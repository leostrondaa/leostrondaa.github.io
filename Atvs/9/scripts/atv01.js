function ex01() {
  const form = document.querySelector("#form01");
  const inputValue = form.querySelector('input[name="in_01"]').value;

  const numeros = inputValue.split(" ").map((num) => parseFloat(num));

  const resultado = media(...numeros);
  const saida = document.getElementById("div_output");
  saida.textContent = resultado;
  form.reset();
}

function media() {
  let soma = 0;
  let quantidade = 0;

  for (let i in arguments) {
    soma += arguments[i];
    quantidade++;
  }

  return quantidade > 0 ? soma / quantidade : 0;
}
