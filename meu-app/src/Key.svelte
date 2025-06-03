<script>
  export let num = 0;
  export let digito;
  export let clear;
</script>

<div class="button-row">
  <button class="btn" on:click={() => digito("1")}>1</button>
  <button class="btn" on:click={() => digito("2")}>2</button>
  <button class="btn" on:click={() => digito("3")}>3</button>
  <button class="btn operador" on:click={() => digito("+")}>+</button>
</div>
<div class="button-row">
  <button class="btn" on:click={() => digito("4")}>4</button>
  <button class="btn" on:click={() => digito("5")}>5</button>
  <button class="btn" on:click={() => digito("6")}>6</button>
  <button class="btn operador" on:click={() => digito("-")}>-</button>
</div>
<div class="button-row">
  <button class="btn" on:click={() => digito("7")}>7</button>
  <button class="btn" on:click={() => digito("8")}>8</button>
  <button class="btn" on:click={() => digito("9")}>9</button>
  <button class="btn operador" on:click={() => digito("*")}>*</button>
</div>
<div class="button-row">
  <button class="btn" on:click={() => digito("0")}>0</button>
  <button class="btn" on:click={() => digito("/")}>/</button>
  <button class="btn C" on:click={clear}>C</button>
</div>

<style>
  .button-row {
    display: flex;
    width: 50px;
    height: 50px;
    justify-content: space-between;
    justify-content: center;
    margin-bottom: 10px;
  }

  .btn {
    background-color: black;
    color: white;
    border: none;
    border-radius: 5px;
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
