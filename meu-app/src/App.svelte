<script>
	import Key from "./Key.svelte";
	let num = ""; 

	function Digit(digit) {
	  num += digit;
	}
	
	function Clear() {
	  num = 0;
	}
	function Adicao() {
	  num = Digit;
	}
  </script>
  
  <main>
	<div class="cor">
	  <div class="container">
		<div class="card">
		  <input type="text" class="input-text" bind:value={num} readonly />
		  
		  <Key 
			{num} 
			digito={Digit}
			clear={Clear} 
			adicao={Adicao}
		  />
		</div>
	  </div>
	</div>
  </main>
  

<style>
  body.cor {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
  }

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

  .input-text {
    width: 65%;
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    text-align: right;
    font-size: 1.5em;
  }

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
  .cor {
    background-color: burlywood;
  }
  input {
    width: 245px;
    height: 50px;
  }
</style>
