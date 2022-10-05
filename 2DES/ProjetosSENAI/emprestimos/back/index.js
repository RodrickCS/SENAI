const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();
app.use(express.json())
app.use(cors());

const con = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    database: 'emprestimos'
});

app.get('/parcelas', (req, res) => {
    let string = "select * from parcelas";
    con.query(string, (err, result) => {
        if (err == null) {
            res.json(result);
        }
    });
});

app.post('/postemprestimos', (req, res) => {
    let cpf = req.body.cpf;
    let data = req.body.dataor
    let capital = req.body.capital;
    let n_parcelas = req.body.n_parcelas;
    let taxa_juros = req.body.taxa_juros;
    let impostos = req.body.impostos;
    let string = `insert into emprestimos values (default,"${cpf}","${data}",${capital},${n_parcelas}, ${taxa_juros}, ${impostos})`;
    con.query(string, (err, result) => {
        if (err == null) {
            res.status(201).end();
        } else {
            res.status(400).json(err).end();
        }
    });
});



app.listen(3000, () => {
    console.log("Respondendo na porta 3000");
});