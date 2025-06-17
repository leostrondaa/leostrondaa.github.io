
function ex05() {

    const form = document.querySelector('#form05')
    const input = form.querySelector('input[name="in_05"]').value

    const objeto = construtora(input)
    const saida = document.getElementById("div_output")
    saida.textContent = objeto ? objeto.exibir() : "Erro ao criar objeto"
    form.reset()
}

function resolve05(dados) {
    Object.keys(dados).forEach(chave => {
        this[chave] = dados[chave]
    })

    this.exibir = function () {
        return `Informações do objeto: ${JSON.stringify(this, null, 2)}`
    }
}

function construtora(data) {
    try {
        const dados = JSON.parse(data)
        return new resolve05(dados)
    } catch (error) {
        console.error("Erro ao processar", error.message)
        return null
    }
}


