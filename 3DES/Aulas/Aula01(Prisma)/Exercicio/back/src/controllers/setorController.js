const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const read = async (req, res) => {
  let setor = await prisma.setor.findMany({
    select: {
      id_setor: true,
      nome: true,
      comissao: true,
      vendedores: true,
      produtos: true,
    },
  });
  res.status(200).json(setor).end();
};

const create = async (req, res) => {
  let setor = await prisma.setor.create({
    data: req.body,
  });
  res.status(201).json(setor).end();
};

const readId = async (req, res) => {
  let setor = await prisma.setor.findUnique({
    where: {
      id_setor: Number(req.params.id_setor),
    },
    select: {
      nome: true,
      vendedores: true,
      produtos: true,
    },
  });
  res.status(200).json(setor).end();
};
module.exports = {
  create,
  read,
  readId,
};
