const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const read = async (req, res) => {
  try {
    let produto = await prisma.produto.findMany();
    res.status(200).json(produto).end();
  } catch (err) {
    res.status(500).json(err).end();
  }
};

const create = async (req, res) => {
  if (
    req.body.nome == "" ||
    req.body.valor == 0 ||
    req.body.setor_id == 0
  ) {
    res.status(400).json({
      msg: "Invalid"
    }).end();
  } else {
    try {
      let produtos = await prisma.produto.create({
        data: req.body,
      });
      res.status(201).json(produtos).end();
    } catch (err) {
      res.status(500).json(err).end();
    }
  }
};

module.exports = { read, create };
