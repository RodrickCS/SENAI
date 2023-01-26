const express = require("express");
const router = express.Router();

const pedidos = require("../controllers/pedidosController");

router.get("/read", pedidos.readAll);
router.get("/readCozinha", pedidos.readCozinha);
router.get("/readACaminho", pedidos.readSaiuCozinha);
router.get("/readChegou", pedidos.readChegou);
router.post("/create", pedidos.create);
router.put("/updateEn/:id_pedido", pedidos.updateEntregando);
router.put("/updateFim", pedidos.updateFim);

module.exports = router;
