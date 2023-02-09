const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const read = async (req, res) => {
  let detalhe = await prisma.detalhe.findMany();
  res.status(200).json(detalhe);
};
const readId = async (req, res) => {
  let detalhe = await prisma.detalhe.findMany({
    where: { id_detalhe: req.params.id_detalhe },
  });
  res.status(200).json(detalhe).end();
};

const create = async (req, res) => {
  let detalhe = await prisma.detalhe.create({
    data: req.body,
  });
  res.status(201).json(detalhe).end();
};



module.exports = { read, readId, create };
