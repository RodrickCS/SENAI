const express = require("express");
const router = express.Router();

const usuario = require("../controllers/usuario_controller");

router.get("/login", usuario.loadViewLogin);
router.post("/entrar", usuario.vw_login);

module.exports = router;
