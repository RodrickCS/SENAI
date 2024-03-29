const Departamento = require('../models/departamento.model');
const con = require('../dao/solicitacoes.dao');

const create = (req, res) => {
    con.query(Departamento.create(req.body), (err, result) => {
        if (err == null)
            res.status(201).end();
        else
            if (err.sqlState == 23000)
                res.status(406).json(err).end();
            else
                res.status(500).json(err).end();
    });
}

const del = (req, res) => {
    con.query(Departamento.del(req.body), (err, result) => {
        if (err == null)
            if (result.affectedRows > 0)
                res.status(204).end();
            else
                res.status(404).end();
        else
            res.status(400).json(err).end();
    });
}

const listarAll = (req, res) => {
    con.query(Departamento.listarDepto(), (err, result) => {
        if (err == null)
            res.json(result).end();
        else
            res.status(500).end();
    });
}

module.exports = {
    create,
    del,
    listarAll
}