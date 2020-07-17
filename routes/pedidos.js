const express = require('express');
const router = express.Router();

//RETORNA TODOS OS PEDIDOS
router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Usando o ID dentro de rota de pedidos'
    });
});

//INSERI UM PEDIDO
router.post('/', (req, res, next) => {
    const pedido = {
        id_pedido:  req.body.id_pedido,
        quantidade: req.body.quantidade
    }
    res.status(201).send({
        mensagem: 'O pedido foi criado',
        pedidoCriado: pedido
    });
})

//RETORNA DADOS DE UM PEDIDO
router.get('/:id_pedido', (req, res, next) => {
    const id = req.params.id_pedido;

    if(id === 'especial'){
        res.status(200).send({
            mensagem: 'Você descobriu o ID especial',
            id: id
        });
    } else {
        res.status(200).send({
            mensagem: 'Voce passou um ID'
        });
    }
});

//ALTERA UM PEDIDO
router.patch('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Usando o PATCH dentro da rota de pedidos'
    });
});

//ALTERA UM PEDIDO
router.delete('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Usando o DELETE dentro da rota de pedidos'
    });
});

module.exports = router;