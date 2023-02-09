const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const read = async (req, res) => {
  let vendas = await prisma.vendas.findMany();
  res.status(200).json(vendas).end();
};

const readId = async (req, res) => {
  let vendas = await prisma.vendas.findMany({
    where: { id_venda: Number(req.params.id_venda) },
    select: {
      idVendedor: true,
      id_venda: true,
      data: true,
      detalhe: true,
    },
  });
  res.status(200).json(vendas).end();
};

const create = async (req, res) => {
  const originalInfo = req.body;
  originalInfo.data = new Date(req.body.data);

  const info = Object.assign({}, originalInfo);
  delete info.idProd;
  delete info.quantidade;

  let venda = await prisma.vendas.create({
    data: info,
  });

  let detalhe = await prisma.detalhe.create({
    data: {
      idProd: originalInfo.idProd,
      idVenda: venda.id_venda,
      quantidade: originalInfo.quantidade,
    },
  });

  res.status(201).json([venda, detalhe]).end();;
};

module.exports = {
  read,
  create,
  readId,
};
