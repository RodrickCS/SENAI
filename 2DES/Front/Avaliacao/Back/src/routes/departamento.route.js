const express = require('express');
const router = express.Router();

const Departamento = require("../controllers/departamento.controller");

router.post("/create", Departamento.create);
router.delete("/del", Departamento.del);
router.get("/listar", Departamento.listarAll);

module.exports = router;