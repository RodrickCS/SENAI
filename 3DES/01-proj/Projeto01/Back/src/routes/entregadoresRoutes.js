const express = require("express");
const router = express.Router();

const entregadores = require("../controllers/entregadoresController.js");

router.get("/read", entregadores.readAll);
