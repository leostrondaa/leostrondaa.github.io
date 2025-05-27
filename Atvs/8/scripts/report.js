var a = 0
const data_reports = []
function addReport() {
  a++

  const form = document.querySelector("#formReport")
  const select_assunto = form.querySelector('select[name="assunto"]')
  const select_agente = form.querySelector('select[name="agente"]')
  const input_data = form.querySelector('input[name="data"]')

  const table = document.querySelector("#table_report")
  const line = document.createElement("tr")

  const col_assunto = document.createElement("td")
  col_assunto.textContent = select_assunto.value

  const col_agente = document.createElement("td")
  col_agente.textContent = select_agente.value

  const col_data = document.createElement("td")
  col_data.textContent = input_data.value

  const col_a = document.createElement("td")
  col_a.textContent = `${a}`

  line.appendChild(col_a)
  line.appendChild(col_data)
  line.appendChild(col_assunto)
  line.appendChild(col_agente)
  table.appendChild(line)

  data_reports.push({ id: a, data: input_data, assunto: select_assunto.value , agente: select_agente.value})

  form.reset()
  updateChart()
}