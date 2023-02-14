const express = require("express");

const router = express.Router();

const vendas = require("../controllers/vendaController");

router.get("/vendas", vendas.read);
router.get("/vendas/:id_venda", vendas.readId);
router.post("/vendasCreate", vendas.create);



module.exports = router;
