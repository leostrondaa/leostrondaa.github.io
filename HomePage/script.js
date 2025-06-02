function mostrarAtividades(baseURL, inicio, fim) {
    const lista = document.getElementById("lista");

    for (let i = inicio; i <= fim; i++) {
        const li = document.createElement("li");
        const a = document.createElement("a");

        a.href = `${baseURL}/${i}/index.html`;
        a.target = "_blank";
        a.textContent = `Atividade ${i}`;

        li.appendChild(a);
        lista.appendChild(li);
    }
}

mostrarAtividades("https://leostrondaa.github.io/Atvs", 1, 9); 
