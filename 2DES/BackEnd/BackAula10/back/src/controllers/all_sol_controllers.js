const model = require('../models/model_solicitacao')
const con = require('../models/solicitacoesDAO')

const criarSol = (req, res) => {
    con.query(model.toCreate(req.body), (err, result) => {
        if (err == null)
            if (result[1].affectedRows == 0)
                res.status(400).json(result).end();
            else
                res.status(201).end();
        else
            if (err.sqlState == 23000)
                res.status(406).json(err).end()
            else
                res.status(500).json(err).end()
    })
}

const listarAll = (req, res) => {
    con.query(model.toReadAll(), (err, result) => {
        if (err == null)
            res.json(result).end();
        else
            res.status(500).end();
    });
}

module.exports = {
    listarAll,
    criarSol

}