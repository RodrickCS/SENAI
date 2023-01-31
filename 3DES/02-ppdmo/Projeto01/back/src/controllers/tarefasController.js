const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const create = async (req, res) => {
  const tarefas = await prisma.tarefas.create({
    data: req.body,
  });

  res.status(201).json(tarefas).end();
};

const readAbertas = async (req, res) => {
  const tarefas = await prisma.tarefas.findMany({
    where: {
      status: 1,
    },
  });

  res.status(200).json(tarefas).end();
};

const readFinalizadas = async (req, res) => {
  const tarefas = await prisma.tarefas.findMany({
    where: {
      status: 2,
    },
  });

  res.status(200).json(tarefas).end();
};

const readCanceladas = async (req, res) => {
  const tarefas = await prisma.tarefas.findMany({
    where: {
      status: 3,
    },
  });

  res.status(200).json(tarefas).end();
};

const finalizarTarefa = async (req, res) => {
  const funcionario = await prisma.tarefas.update({
    where: { id: Number(req.params.id) },
    data: { status: 2 },
  });
  res.status(200).json(funcionario).end();
};

const cancelarTarefa = async (req, res) => {
  const funcionario = await prisma.tarefas.update({
    where: { id: Number(req.params.id) },
    data: { status: 3 },
  });
  res.status(200).json(funcionario).end();
};

const excluiTarefa = async (req, res) => {
  const funcionario = await prisma.tarefas.delete({
    where: { id: Number(req.params.id) }
  });
  res.status(200).json(funcionario).end();
};

module.exports = {
  create,
  readAbertas,
  readFinalizadas,
  readCanceladas,
  finalizarTarefa,
  cancelarTarefa,
  excluiTarefa,
};
