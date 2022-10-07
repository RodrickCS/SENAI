const model = require('../models/model_solicitacao')
const con = require('../models/solicitacoesDAO')

const criarSol = (req, res) => {
    con.query(model.toCreate(req.body), (err, result) => {
        if (err == null)
            if (result[1].affectedRows == 0)
                res.status(400).json(result).end()
            else
                res.status(201).end()
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
            res.json(result).end()
        else
            res.status(500).end()
    })
}

const criarProds = (req, res) => {
    con.query(model.toCreateProd(req.body), (err, result) => {
        if (err == null)
                res.status(201).end()
        else
            if (err.sqlState == 23000)
                res.status(406).json(err).end()
            else
                res.status(500).json(err).end()
    })
}

const listarAllProds = (req, res) => {
    con.query(model.toReadProd(), (err, result) => {
        if (err == null)
            res.json(result).end()
        else
            res.status(500).end()
    })
}

const criarDeptos = (req, res) => {
    con.query(model.toCreateDepto(req.body), (err, result) => {
        if (err == null)
                res.status(201).end()
        else
            if (err.sqlState == 23000)
                res.status(406).json(err).end()
            else
                res.status(500).json(err).end()
    })
}

const deleteDeptos = (req, res) => {
    con.query(model.toDeleteDeptos(req.params), (err, result) => {
        if (err == null)
            if (result.affectedRows > 0)
                res.status(204).end();
            else
                res.status(404).end();
        else
            res.status(400).json(err).end();
    });
}


const searchProdDeptos = (req, res) => {
    con.query(model.toSearchProdDepto(req.body), (err, result) => {
        if (err == null)
            if (result.length > 0)
                res.json(result).end();
            else
                res.status(404).end();
        else
            res.status(500).end();
    });
}

const SearchFuncSol = (req, res) => {
    con.query(model.toSearchFuncSol(req.body), (err, result) => {
        if (err == null)
            if (result.length > 0)
                res.json(result).end();
            else
                res.status(404).end();
        else
            res.status(500).end();
    });
}

const listarSolData = (req, res) => {
    con.query(model.toSeachDate(req.body), (err, result) => {
        if (err == null)
            if (result.length > 0)
                res.json(result).end();
            else
                res.status(404).end();
        else
            res.status(500).end();
    });
}




module.exports = {
    listarAll,
    criarSol,
    criarProds,
    listarAllProds,
    criarDeptos,
    deleteDeptos,
    searchProdDeptos,
    SearchFuncSol,
    listarSolData
}