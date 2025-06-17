function ex02() {
  const form = document.querySelector("#form02")
  const inputValue = form.querySelector('input[name="in_02"]').value

  const numeros = inputValue.split(" ").map((num) => parseFloat(num))

  const resultado = mediaArrow(...numeros)
  const saida = document.getElementById("div_output")
  saida.textContent = resultado
  form.reset()
}

const mediaArrow = (...numeros) => {
  let soma = 0
  let quantidade = 0

  numeros.forEach((num) => {
    soma += num
    quantidade++
  })

  return quantidade > 0 ? soma / quantidade : 0
}