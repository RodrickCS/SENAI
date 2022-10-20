const mysql = require("mysql")

const con = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    database: 'clientes_blob'
})

module.exports = con