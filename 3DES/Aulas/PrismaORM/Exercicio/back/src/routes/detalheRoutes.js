const express = require("express");

const router = express.Router();

const detalhe = require("../controllers/detalheController");

router.get('/detalhes', detalhe.read)

module.exports = router