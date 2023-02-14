const express = require("express");

const router = express.Router();

const produto = require("../controllers/produtoController");

router.get("/produtos", produto.read);
router.post("/produtosCreate", produto.create);

module.exports = router;
