const express = require("express");
const router = express.Router();

const pedidos = require("../controllers/pedidosController");

router.get("/read", pedidos.readAll);
router.get("/readACaminho", pedidos.readSaiuCozinha);
router.get("/readEntregando", pedidos.readEntregando);
router.post("/create", pedidos.create);
router.put("/updateEn", pedidos.updateEntregando);
router.put("/updateFim", pedidos.updateFim);

module.exports = router;
