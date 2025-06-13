<script>
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  function Digito(value) {
    dispatch('keypress', value);
  }
</script>

<div class="button-row">
  <button class="btn" on:click={() => Digito('1')}>1</button>
  <button class="btn" on:click={() => Digito('2')}>2</button>
  <button class="btn" on:click={() => Digito('3')}>3</button>
  <button class="btn operador" on:click={() => Digito('+')}>+</button>
</div>
<div class="button-row">
  <button class="btn" on:click={() => Digito('4')}>4</button>
  <button class="btn" on:click={() => Digito('5')}>5</button>
  <button class="btn" on:click={() => Digito('6')}>6</button>
  <button class="btn operador" on:click={() => Digito('-')}>-</button>
</div>
<div class="button-row">
  <button class="btn" on:click={() => Digito('7')}>7</button>
  <button class="btn" on:click={() => Digito('8')}>8</button>
  <button class="btn" on:click={() => Digito('9')}>9</button>
  <button class="btn operador" on:click={() => Digito('*')}>*</button>
</div>
<div class="button-row">
  <button class="btn" on:click={() => Digito('0')}>0</button>
  <button class="btn operador" on:click={() => Digito('/')}>/</button>
  <button class="btn operador" on:click={() => Digito('=')}>=</button>
  <button class="btn C" on:click={() => Digito('C')}>C</button>
</div>

<style>
  .button-row {
    scale: 1.2;
    display: flex;
    justify-content: space-between;
    margin: 15px;
    width: 60%;
  }

  .btn {
    background-color: black;
    color: white;
    border: none;
    border-radius: 6px;
    padding: 15px 20px;
    margin: 0 5px;
    cursor: pointer;
    font-size: 1.2em;
    flex: 1;
    transition: background-color 0.3s;
  }

  .btn:hover {
    background-color: #333;
  }

  .operador {
    background-color: #ff9500;
  }

  .operador:hover {
    background-color: #e68a00;
  }

  .C {
    background-color: #ff3b30;
  }

  .C:hover {
    background-color: #e63329;
  }
</style>
