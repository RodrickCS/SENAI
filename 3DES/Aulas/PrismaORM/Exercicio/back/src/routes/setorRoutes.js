const express = require("express");

const router = express.Router();

const setor = require("../controllers/setorController");

router.get("/setores", setor.read);
router.get("/setores/:id_setor", setor.readId);
router.post("/setoresCreate", setor.create);

module.exports = router;
