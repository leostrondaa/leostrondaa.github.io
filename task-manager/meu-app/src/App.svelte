<script>
  import Display from '../../../Atvs/10/meu-app/svelte/Display.svelte';
  import Key from '../../../Atvs/10/meu-app/svelte/Key.svelte';

  let displayValue = '0';
  let digitoAtual = '';
  let digitoAnterior = '';
  let operacao = null;
  let resultado = null;

  $: displayValue = digitoAtual || digitoAnterior || '0' || operacao;

  function handleKeyPress(event) {
    const key = event.detail;

    if (key === 'C') {
      clear();
    } else if (key === '=') {
      compute();
    } else if (['+', '-', '*', '/'].includes(key)) {
      Operacao(key);
    } else {
      if (
        digitoAtual == '+' ||
        digitoAtual == '-' ||
        digitoAtual == '*' ||
        digitoAtual == '/'
      ) {
        digitoAtual = '';
      }
      digitoAtual += key;
    }
  }

  function Operacao(op) {
    if (digitoAtual === '') {
      return;
    }
    if (digitoAnterior !== '') {
      compute();
    }

    operacao = op;
    digitoAnterior = digitoAtual;
    digitoAtual = op;
  }

  function clear() {
    digitoAtual = '';
    digitoAnterior = '';
    operacao = null;
    resultado = null;
  }

  function compute() {
    const anterior = parseFloat(digitoAnterior);
    const atual = parseFloat(digitoAtual);

    switch (operacao) {
      case '+':
        resultado = anterior + atual;
        break;
      case '-':
        resultado = anterior - atual;
        break;
      case '*':
        resultado = anterior * atual;
        break;
      case '/':
        resultado = anterior / atual;
        break;
      default:
        return;
    }

    digitoAtual = resultado.toString();
    operacao = null;
    digitoAnterior = '';
  }
</script>

<main class="cor">
  <div class="container">
    <div class="card">
      <Display value={displayValue} readonly />

      <Key on:keypress={handleKeyPress} />
    </div>
  </div>
</main>

<style>
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    width: 100%;
  }

  .card {
    width: 25%;
    height: 75vh;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
  }
  .cor {
    background-color: burlywood;
  }
</style>
