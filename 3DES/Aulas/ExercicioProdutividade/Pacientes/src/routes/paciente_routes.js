const express = require("express");
const router = express.Router();

const paciente = require("../controllers/paciente_controller");

router.get("/", paciente.loadView);
router.get("/read", paciente.read);
router.post("/create", paciente.create);
router.put("/update/:id", paciente.update);
router.delete("/delete/:id", paciente.excluir);

module.exports = router;
