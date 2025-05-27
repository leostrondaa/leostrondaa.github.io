var x = 0
const data_regionals = []
function addRegio() {
  x++

  const form = document.querySelector("#formRegional")
  const input_sigla = form.querySelector('input[name="sigla"]')
  const input_cidade = form.querySelector('input[name="cidade"]')

  const table = document.querySelector("#table_regional")
  const line = document.createElement("tr")

  const col_sigla = document.createElement("td")
  col_sigla.textContent = input_sigla.value
  const col_cidade = document.createElement("td")
  col_cidade.textContent = input_cidade.value
  const col_x = document.createElement("td")
  col_x.textContent = `${x}`

  line.appendChild(col_x)
  line.appendChild(col_sigla)
  line.appendChild(col_cidade)
  table.appendChild(line)

  const select = document.querySelector("#select_regional")
  const op = document.createElement("option")

  data_regionals.push({ id: x, sigla: input_sigla.value, cidade: input_sigla.value })

  op.textContent = input_cidade.value
  op.value = input_cidade.value
  select.appendChild(op)

  form.reset()
  drawChart()
}