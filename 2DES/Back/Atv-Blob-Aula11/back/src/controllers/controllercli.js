const Cliente = require('../models/clientes')
const con = require('../dao/dbclientes')
const multer = require('multer')
const upload = multer().single('avatar')

const cadastraCli = (req, res) => {

    let resSuccess = {
        "sucesso": "Cliente cadastrado com sucesso"
    }

    let resErr = {
        'erro': 'Falha ao deletar o cliente'
    }
    
    upload(req, res, (err) => {
        if (err)
            res.status(500).json(resErr).end();
        else {
            let string = Cliente.toCreate(req.body, req.file);
            con.query(string, (err, result) => {
                if (err == null) {
                    res.status(201).json(resSuccess).end();
                } else {
                    res.status(500).json(err).end();
                }
            });
        }
    });
}

const listarCli = (req, res) => {

    con.query(Cliente.toReadAll(), (err, result) => {
        if (err == null) {
            res.json(Cliente.toAscii(result)).end()
        } else {
            res.status(500).json(err).end()
        }
    })
}

const delCli = (req, res) => {
    let resErr = {
        'erro': 'Falha ao deletar o cliente'
    }

    let resSuccess = {
        "sucesso": "Cliente deletado do banco de dados"
    }

    con.query(Cliente.toDel(req.body), (err, result) => {

        if (result.affectedRows == 0) {
            res.status(400).json(resErr)
        } else {
            if (err == null)
                res.status(200).json(resSuccess).end()
            else
                res.status(500).json(result).end()
        }
    })
}

module.exports = {
    listarCli,
    cadastraCli,
    delCli
}