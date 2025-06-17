let Clicou = false;

// usuario clicou em atividades?
document.getElementById('atvButton').addEventListener('click', function () {
  if (!Clicou) {
    chama();
    chama2();
    Clicou = true;
  } else {
    fecha();
    Clicou = false;
    document.getElementById('lista').innerHTML = '';
  }

  var audio = document.getElementById('audioEntrada');
  audio.play();
});

// exibir atividades
function mostrarAtividades(baseURL, inicio, fim) {
  const lista1 = document.getElementById('lista');

  for (let i = inicio; i <= fim; i++) {
    const li = document.createElement('li');
    const a = document.createElement('a');

    // atv svelte (excessao)
    if (i == fim) {
      a.href = `https://leostrondaa.github.io/Atvs/7/meu-app/navegador/index.html`;
      a.target = '_blank';
      a.textContent = `Atividade - 0${i}`;
      a.classList.add('link-atividade');

      li.appendChild(a);
      lista.appendChild(li);

      return;
    }
    a.href = `${baseURL}/${i}/index.html`;
    a.target = '_blank';
    a.textContent = `Atividade - 0${i}`;
    a.classList.add('link-atividade');

    li.appendChild(a);
    lista1.appendChild(li);
  }
}
function mostrarProvas(baseURL, inicio, fim) {
  const lista2 = document.getElementById('lista2');

  for (let i = inicio; i <= fim; i++) {
    const li = document.createElement('li');
    const a = document.createElement('a');

    a.href = `${baseURL}/${i}/index.html`;
    a.target = '_blank';
    a.textContent = `Prova - 0${i}`;
    a.classList.add('link-atividade');

    li.appendChild(a);
    lista2.appendChild(li);
  }
}

// abrir pop-up
const chama = function () {
  mostrarAtividades('https://leostrondaa.github.io/Atvs', 1, 7);
  document.getElementById('colSecundaria').classList.remove('d-none');
  document.getElementById('card').classList.remove('d-none');
  document.getElementById('colPrimaria').classList.replace('col-12', 'col-7');
  document.getElementById('colSecundaria').classList.add('col-5');
  chama2();
};
const chama2 = function () {
  mostrarProvas('https://leostrondaa.github.io/prova', 1, 3);
};

// fechar pop-up
const fecha = function () {
  document.getElementById('colSecundaria').classList.add('d-none');
  document.getElementById('colPrimaria').classList.replace('col-7', 'col-12');
  document.getElementById('colSecundaria').classList.replace('col-5', 'col-0');
};
