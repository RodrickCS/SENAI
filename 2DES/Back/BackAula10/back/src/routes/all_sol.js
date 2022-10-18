const express = require('express');
const router = express.Router();

const model = require('../controllers/all_sol_controllers')

router.get('/solicitacoes/sol', model.listarAll)
router.post('/solicitacoes/sol', model.criarSol)

module.exports = router