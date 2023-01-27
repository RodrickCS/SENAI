const express = require("express");
const router = express.Router();

const pedidos = require("../controllers/pedidosController");

router.get("/read", pedidos.readAllPendente);
router.get("/readId/:id_entregador", pedidos.readByEntregador);
router.get("/readCozinha", pedidos.readCozinha);
router.get("/readACaminho", pedidos.readSaiuCozinha);
router.get("/readEntregador", pedidos.readEntregador);
router.get("/readEntregue", pedidos.readEntregue);
router.post("/create", pedidos.create);
router.put("/updateEn/:id_pedido", pedidos.updateEntregando);
router.put("/updateFim/:id_pedido", pedidos.updateFim);

module.exports = router;
