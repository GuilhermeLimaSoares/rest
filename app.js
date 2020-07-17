const express = require('express');
const app = express();
const morgan = require('morgan');

const rotaProdutos = require('./routes/produtos');
const rotaPedidos = require('./routes/pedidos');

app.use(morgan('dev')); // devolve status da api em tempo real/monitora a execucao
 app.use('/produtos', rotaProdutos);
 app.use('/pedidos', rotaPedidos);

 //Quando nao encontrar rota, entra aqui:
 app.use((req, res, next) => {
     const erro = new error('Não encontrado');
     erro.status = 404;
     next(erro);
 })

 app.use((error, req, res, next) => {
     res.status(error.satus || 500);
     return res.send({
         erro: {
            mensagem: error.message
         }
     });
 });

/* app.use('/teste', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Ok, deu certo!'
    });
}); */

module.exports = app;