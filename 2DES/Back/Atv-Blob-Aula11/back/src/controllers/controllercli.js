const Cliente = require('../models/clientes')
const con = require('../dao/dbclientes')
const multer = require('multer')
const upload = multer().single('foto')

const cadastraCli = async (req, res) => {
    upload(req, res, function (err) {
        if (err)
            res.status(500).json({ error: 1, payload: err }).end()
        else {
            let string = Cliente.toCreate(req.body, req.file)
            con.query(string, (err, result) => {
                if (err == null) {
                    //res.status(201).json(dados).end()
                    res.redirect('http://127.0.0.1:3070/front/clientes.html')
                } else {
                    res.status(500).json(err).end()
                }
            })
        }
    })
}

const listarCli = (req, res) => {
    let string = Cliente.toReadAll()
    con.query(string, (err, result) => {
        if (err == null) {
            res.json(Cliente.toAscii(result)).end()
        }
    })
}

module.exports = {
    listarCli,
    cadastraCli
}