const express = require("express");

const router = express.Router();

const vendedor = require("../controllers/vendedorController");

router.get("/vendedores", vendedor.read);
router.post("/vendedoresCreate", vendedor.create);

module.exports = router;
