const tarefas = require("../models/tarefaModel");
const con = require("../dao/bdConnect");

const create = (req, res) => {
  let string = tarefas.create(req.body);
  con.query(string, (err, result) => {
    if (err == null) {
      res.status(201).json(result).end();
    } else {
      res.status(400).json(err).end();
    }
  });
};

const readAbertas = (req, res) => {
  let string = tarefas.readAbertas();
  con.query(string, (err, result) => {
    if (err == null) {
      res.json(result).end();
    } else {
      res.status(500).json(err).end();
    }
  });
};

const readFinalizadas = (req, res) => {
  let string = tarefas.readFinalizadas();
  con.query(string, (err, result) => {
    if (err == null) {
      res.json(result).end();
    } else {
      res.status(500).json(err).end();
    }
  });
};

const readCanceladas = (req, res) => {
  let string = tarefas.readCanceladas();
  con.query(string, (err, result) => {
    if (err == null) {
      res.json(result).end();
    } else {
      res.status(500).json(err).end();
    }
  });
};

const finalzarTarefa = (req, res) => {
  let string = tarefas.finalizaTarefa(req.params);
  con.query(string, (err, result) => {
    if (err == null) {
      res.status(200).json(result).end();
    } else {
      res.status(500).json(err).end();
    }
  });
};

const cancelarTarefa = (req, res) => {
  let string = tarefas.cancelarTarefa(req.params);
  con.query(string, (err, result) => {
    if (err == null) {
      res.status(200).json(result).end();
    } else {
      res.status(500).json(err).end();
    }
  });
};

module.exports = {
  create,
  readAbertas,
  readFinalizadas,
  readCanceladas,
  finalzarTarefa,
  cancelarTarefa,
};
