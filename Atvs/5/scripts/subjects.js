var i = 0;
const data_subjects = [];
function addDesc() {
  i++;

  const form = document.querySelector("#formSubject");
  const input_descricao = form.querySelector('input[name="descricao"]');

  const table = document.querySelector("#table_subject");
  const line = document.createElement("tr");

  const col_assunto = document.createElement("td");
  col_assunto.textContent = input_descricao.value;

  const col_i = document.createElement("td");
  col_i.textContent = `${i}`;

  line.appendChild(col_i);
  line.appendChild(col_assunto);
  table.appendChild(line);

  const select = document.querySelector("#select_subject");
  const op = document.createElement("option");

  
  data_subjects.push({ id: i, nome: input_descricao.value });

  op.textContent = input_descricao.value;
  op.value = input_descricao.value;
  select.appendChild(op);

  form.reset();
  drawChart()
  
}