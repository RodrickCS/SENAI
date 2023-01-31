const express = require("express");
const router = express.Router();

const tarefas = require("../controllers/tarefasController");

router.get("/readAberta", tarefas.readAbertas);
router.get("/readCancelado", tarefas.readCanceladas);
router.get("/readFinalizadas", tarefas.readFinalizadas);
router.post("/create", tarefas.create);
router.put("/finalizaTarefa/:id", tarefas.finalizarTarefa);
router.put("/cancelaTarefa/:id", tarefas.cancelarTarefa);
router.delete("/excluirTarefa/:id", tarefas.excluiTarefa);


module.exports = router;
