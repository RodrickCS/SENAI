const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const read = async (req, res) => {
  let vendas = await prisma.vendas.findMany();
  res.status(200).json(vendas).end();
};

const create = async (req, res) => {
  var info = req.body;

  info.data = new Date(req.body.data);
  let venda = await prisma.vendas.create({
    data: info,
  });
  res.status(201).json(venda).end();
};

module.exports = {
  read,
  create,
};
