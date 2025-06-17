function ex03() {
  const form = document.querySelector('#form03');
  const input = form.querySelector('input[name="in_03"]').value;

  const numeros = input.split(' ').map((num) => parseFloat(num));
  const saida = document.getElementById('div_output');

  saida.textContent = resolve03(numeros);
  form.reset();
}

function resolve03(numeros) {
  return numeros.map((num) => (num % 2 === 0 ? 'Par' : 'Impar'));
}
