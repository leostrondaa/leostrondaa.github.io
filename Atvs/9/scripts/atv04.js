function ex04() {
    const form = document.querySelector('#form04');
    const input = form.querySelector('input[name="in_04"]').value;
    
    const numeros = input.split(',').map(num => parseInt(num.trim(), 10));
    
    const numerosPerfeitos = resolve04(...numeros);
    alert(numerosPerfeitos.join(', '));
    form.reset();
}

function resolve04(...args) {
    return args.filter(filter_perfeito);
}

const filter_perfeito = (val) => {
    if (val <= 1) return false; 
    
    let somaDivisores = 0;
    
    for (let i = 1; i <= val/2; i++) {
        if (val % i === 0) {
            somaDivisores += i;
        }
    }
    
    return somaDivisores === val;
}