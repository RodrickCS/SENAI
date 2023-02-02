const express = require("express");
const router = express.Router();

const funcionarios = require("../controllers/funcionarios");

router.get("/funcionarios", funcionarios.read);
router.get("/funcionarios/:id", funcionarios.readFunc);
router.post("/funcionarios", funcionarios.create);
router.put("/funcionarios/:id", funcionarios.update);
router.delete("/funcionarios/:id", funcionarios.remove);

module.exports = router;