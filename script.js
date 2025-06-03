let Clicou = false;

// usuario clicou em atividades?
document.getElementById("atvButton").addEventListener("click", function () {
  if (!Clicou) {
    chama();
    Clicou = true;
  } else {
    fecha();
    Clicou = false;
    document.getElementById("lista").innerHTML = "";
  }

  var audio = document.getElementById("audioEntrada");
  audio.play();
});

// exibir atividades
function mostrarAtividades(baseURL, inicio, fim) {
  const lista = document.getElementById("lista");

  for (let i = inicio; i <= fim; i++) {
    const li = document.createElement("li");
    const a = document.createElement("a");

    a.href = `${baseURL}/${i}/index.html`;
    a.target = "_blank";
    a.textContent = `Atividade ${i}`;
    a.classList.add("link-atividade");

    li.appendChild(a);
    lista.appendChild(li);
  }
}

// abrir pop-up
const chama = function () {
  mostrarAtividades("https://leostrondaa.github.io/Atvs", 1, 9);
  document.getElementById("colSecundaria").classList.remove("d-none");
  document.getElementById("card").classList.remove("d-none");
  document.getElementById("colPrimaria").classList.replace("col-12", "col-7");
  document.getElementById("colSecundaria").classList.add("col-5");
};

// fechar pop-up
const fecha = function () {
  document.getElementById("colSecundaria").classList.add("d-none");
  document.getElementById("colPrimaria").classList.replace("col-7", "col-12");
  document.getElementById("colSecundaria").classList.replace("col-5", "col-0");
};
