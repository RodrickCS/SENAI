const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const read = async (req, res) => {
  let vendedor = await prisma.vendedor.findMany();
  res.status(200).json(vendedor).end();
};

const create = async (req, res) => {
  let vendedor = await prisma.vendedor.create({
    data: req.body,
  });
  res.status(201).json(vendedor).end();
};

const readId = async (req, res) => {
  let setor = await prisma.vendedor.findUnique({
    where: {
      id_vend: Number(req.params.id_vend),
    },

    select: {
      nome: true,
      Vendas: true,
    },
  });
  res.status(200).json(setor).end();
};

module.exports = { read, create, readId };
