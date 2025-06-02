function ex03() {
    const form = document.querySelector('#form03')
    const input = form.querySelector('input[name="in_03"]').value
    
    const numeros = input.split(' ')
        .map(num => parseFloat(num))
    
    const resultado = resolve03(numeros)
    const saida = document.getElementById("div_output")

    if (resultado == "Par") {
        saida.textContent = "par" 
    } else {
        saida.textContent = "impar"
    }
    form.reset()
}

function resolve03(numeros) {
    return numeros.map(function(num) {
        return numeros.map((num) => (isEven(num) ? "Par" : "Ímpar"))
    })
}

function isEven(num) {
    return num % 2 === 0
}