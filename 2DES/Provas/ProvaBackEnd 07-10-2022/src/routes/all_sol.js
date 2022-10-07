const express = require('express');
const router = express.Router();

const model = require('../controllers/all_sol_controllers')

router.post('/solicitacoes/sol', model.criarSol)
router.post('/solicitacoes/produtos', model.criarProds)
router.get('/solicitacoes/produtos', model.listarAllProds)
router.post('/solicitacoes/departamentos', model.criarDeptos)
router.delete('/solicitacoes/departamentos/:cod_depto', model.deleteDeptos)
router.get('/solicitacoes/produtos/search', model.searchProdDeptos)
router.get('/solicitacoes/funcionarios/search', model.SearchFuncSol)
router.get('/solicitacoes/solicitacoes/search', model.listarSolData)

module.exports = router