const express = require("express");

const router = express.Router();

const vendas = require("../controllers/vendaController");

router.get("/vendas", vendas.read);
router.post("/vendasCreate", vendas.create);



module.exports = router;
