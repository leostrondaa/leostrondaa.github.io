<script>
  export let value = '0'; // Valor que será exibido no display
</script>

<div class="display-container">
  <input
    type="text"
    class="input-text"
    bind:value
    readonly
    aria-label="Display da calculadora"
  />
</div>

<style>
  .display-container {
    width: 70%;
    margin-bottom: 1rem;
  }

  .input-text {
    width: 100%;
    padding: 15px;
    border: 2px solid #ddd;
    border-radius: 8px;
    border-color: black;
    text-align: right;
    background-color: black;
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
    color: white;
    font-size: 20px;
  }
</style>
