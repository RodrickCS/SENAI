const pedidos = require("../models/pedidosModel");
const con = require("../dao/bdConnect.js");

const readAll = (req, res) => {
  let string = pedidos.readAll();
  con.query(string, (err, result) => {
    if (err == null) {
      res.json(result).end();
    } else {
      res.status(500).json(err).end();
    }
  });
};

const readSaiuCozinha = (req, res) => {
  let string = pedidos.readEntregando();
  con.query(string, (err, result) => {
    if (err == null) {
      res.json(result).end();
    } else {
      res.status(500).json(err).end();
    }
  });
};

const readCozinha = (req, res) => {
  let string = pedidos.readCozinha();
  con.query(string, (err, result) => {
    if (err == null) {
      res.json(result).end();
    } else {
      res.status(500).json(err).end();
    }
  });
};

const readChegou = (req, res) => {
  let string = pedidos.readChegou();
  con.query(string, (err, result) => {
    if (err == null) {
      res.json(result).end();
    } else {
      res.status(500).json(err).end();
    }
  });
};

const create = (req, res) => {
  let string = pedidos.create(req.body);
  con.query(string, (err, result) => {
    if (err == null) {
      res.status(201).json(result).end();
    } else {
      res.status(400).json(err).end();
    }
  });
};

const updateEntregando = (req, res) => {
  let string = pedidos.updateEntregando(req.params);
  con.query(string, (err, result) => {
    if (err == null)
      if (result.affectedRows > 0) res.status(200).end();
      else res.status(404).json(err).end();
    else res.status(400).json(err).end();
  });
};
const updateFim = (req, res) => {
  let string = pedidos.updateFim(req.body);
  con.query(string, (err, result) => {
    if (err == null)
      if (result.affectedRows > 0) res.status(200).end();
      else res.status(404).end();
    else res.status(400).json(err).end();
  });
};

module.exports = {
  readAll,
  create,
  updateEntregando,
  updateFim,
  readSaiuCozinha,
  readChegou,
  readCozinha,
};
