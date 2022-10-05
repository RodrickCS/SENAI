const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const cli = require("./src/clientes.js");

const app = express();
app.use(cors());
app.use(express.json());

const con = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    database: 'pizzaria'
});



app.listen(3000, () => {
    console.log("Respondendo na porta 3000");
});