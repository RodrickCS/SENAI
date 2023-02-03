const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const create = async (req, res) => {
  let detalhe = await prisma.detalhe.create({
data: {
  idProd: req.body.idProd,
  idVenda: req.body.idVenda,
  quantidade: req.body.quantidade,


}
  });
  res.status(201).json(detalhe);
};
