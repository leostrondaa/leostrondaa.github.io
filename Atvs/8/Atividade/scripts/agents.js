var y = 0
const data_agent = []
function addAgent() {
  y++

  const form = document.querySelector("#formAgent")
  const input_nome = form.querySelector('input[name="nome"]')
  const select_op = form.querySelector('select[name="regional"]')

  const table = document.querySelector("#table_agent")
  const line = document.createElement("tr")

  const col_nome = document.createElement("td")
  col_nome.textContent = input_nome.value
  const col_regional = document.createElement("td")
  col_regional.textContent = select_op.value

  const col_y = document.createElement("td")
  col_y.textContent = `${y}`

  line.appendChild(col_y)
  line.appendChild(col_nome)
  line.appendChild(col_regional)
  table.appendChild(line)

  const select = document.querySelector("#select_agent")
  const op = document.createElement("option")

  data_agent.push({ id: y, nome: input_nome.value , regional: select_op.value})

  op.textContent = input_nome.value
  op.value = input_nome.value

  select.appendChild(op)

  form.reset()
  updateChart()
}