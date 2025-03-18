const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.post('/alunos', (req, res) => {
    console.log('Dados recebidos:', req.body);
    
    res.send('<h1>[OK] Novo Cadastro Recebido!</h1>');
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
