const express = require('express');
const router = express.Router();

const PedidosController = require('../controllers/pedidos-controller');

//RETORNA TODOS OS PEDIDOS
router.get('/', PedidosController.getPedidos);

//INSERI UM PEDIDO
router.post('/', PedidosController.postPedidos)

//RETORNA DADOS DE UM PEDIDO
router.get('/:id_pedido', PedidosController.getUmPedido);

//ALTERA UM PEDIDO
router.patch('/', PedidosController.patchPedidos);

//ALTERA UM PEDIDO
router.delete('/', PedidosController.deletePedidos);

module.exports = router;