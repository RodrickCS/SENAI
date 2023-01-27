const express = require("express");
const router = express.Router();

const entregadores = require("../controllers/entregadoresController");

router.get("/read", entregadores.readAll);
router.post("/login", entregadores.login);

module.exports = router;
