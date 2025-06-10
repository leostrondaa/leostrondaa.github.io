function ex04() {
  const form = document.querySelector('#form04');
  const input = form.querySelector('input[name="in_04"]').value;

  const numeros = input.split(' ').map((num) => parseInt(num.trim(), 10));

  const saida = document.getElementById('div_output');

  saida.textContent = numeros.filter((num) => {
    return filter_perfeito(num);
  });

  form.reset();
}

const filter_perfeito = (num) => {
  if (num <= 1) return false;

  let somaDivisores = 0;

  for (let i = 1; i <= num / 2; i++) {
    if (num % i === 0) {
      somaDivisores += i;
    }
  }

  return somaDivisores === num;
};
