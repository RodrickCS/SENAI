const entregadores = require("../models/entregadoresModel.js");
const con = require("../dao/bdConnect.js");

const readAll = (req, res) => {
  let string = entregadores.read();
  con.query(string, (err, result) => {
    if (err == null) {
      res.json(result).end();
    } else {
      res.status(500).json(err).end();
    }
  });
};

const login = (req, res) => {
  let string = entregadores.login(req.body);
  con.query(string, (err, result) => {
    if (err == null) {
      res.status(200).json(result).end();
    } else {
      res.status(500).json(err).end();
    }
  });
};

module.exports = { readAll, login };
