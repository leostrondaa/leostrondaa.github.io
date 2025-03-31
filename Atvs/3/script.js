document.addEventListener('DOMContentLoaded', function() {
    // Obter o tema escolhido
    const tema = localStorage.getItem('temaJogo') || 'carro';
    
    // Atualizar título
    document.getElementById('tituloJogo').textContent = `Jogo da Memória - ${tema.charAt(0).toUpperCase() + tema.slice(1)}`;
    
    // Imagens por tema
    const imagens = {
        carro: ['🚗', '🚕', '🚙', '🏎️'],
        moto: ['🏍️', '🛵', '🛺', '🚲'],
        barco: ['🚤', '⛵', '🛥️', '🚢']
    };
    
    // Duplicar e embaralhar as cartas
    let cartas = [...imagens[tema], ...imagens[tema]].sort(() => Math.random() - 0.5);
    
    let cartasViradas = [];
    let paresEncontrados = 0;
    let bloqueio = false;
    
    const tabuleiro = document.getElementById('tabuleiro');
    const contador = document.getElementById('contador');
    
    // Criar as cartas no tabuleiro
    cartas.forEach((carta, index) => {
        const elementoCarta = document.createElement('div');
        elementoCarta.classList.add('carta');
        elementoCarta.dataset.indice = index;
        elementoCarta.dataset.valor = carta;
        elementoCarta.textContent = '?';
        
        elementoCarta.addEventListener('click', virarCarta);
        tabuleiro.appendChild(elementoCarta);
    });
    
    function virarCarta() {
        if (bloqueio || this.classList.contains('virada') || this.classList.contains('encontrada')) {
            return;
        }
        
        this.classList.add('virada');
        this.textContent = this.dataset.valor;
        cartasViradas.push(this);
        
        if (cartasViradas.length === 2) {
            bloquearTabuleiro();
            verificarPar();
        }
    }
    
    function verificarPar() {
        const [carta1, carta2] = cartasViradas;
        
        if (carta1.dataset.valor === carta2.dataset.valor) {
            carta1.classList.add('encontrada');
            carta2.classList.add('encontrada');
            paresEncontrados++;
            contador.textContent = `Pares encontrados: ${paresEncontrados}/4`;
            
            if (paresEncontrados === 4) {
                setTimeout(() => {
                    alert('Parabéns! Você completou o jogo!');
                }, 500);
            }
        } else {
            setTimeout(() => {
                carta1.classList.remove('virada');
                carta2.classList.remove('virada');
                carta1.textContent = '?';
                carta2.textContent = '?';
            }, 1000);
        }
        
        setTimeout(() => {
            cartasViradas = [];
            desbloquearTabuleiro();
        }, 1000);
    }
    
    function bloquearTabuleiro() {
        bloqueio = true;
    }
    
    function desbloquearTabuleiro() {
        bloqueio = false;
    }
    
    window.reiniciarJogo = function() {
        tabuleiro.innerHTML = '';
        cartasViradas = [];
        paresEncontrados = 0;
        contador.textContent = 'Pares encontrados: 0/4';
        bloqueio = false;
        
        // Reembaralhar cartas
        cartas = [...imagens[tema], ...imagens[tema]].sort(() => Math.random() - 0.5);
        
        // Recriar cartas
        cartas.forEach((carta, index) => {
            const elementoCarta = document.createElement('div');
            elementoCarta.classList.add('carta');
            elementoCarta.dataset.indice = index;
            elementoCarta.dataset.valor = carta;
            elementoCarta.textContent = '?';
            
            elementoCarta.addEventListener('click', virarCarta);
            tabuleiro.appendChild(elementoCarta);
        });
    };
});