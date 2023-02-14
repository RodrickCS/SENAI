const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const read = async (req, res) => {
  try {
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
  } catch (err) {
    res.status(500).json(err).end();
  }
};

const create = async (req, res) => {
  if (
    req.body.nome == "" ||
    req.body.comissao == 0 
  ) {
    res.status(400).json({
      msg: "Invalid"
    }).end();
  } else {
    try {
      let setores = await prisma.setor.create({
        data: req.body,
      });
      res.status(201).json(setores).end();
    } catch (err) {
      res.status(500).json(err).end();
    }
  }
};

const readId = async (req, res) => {
  try {
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
  } catch (err) {
    res.status(500).json(err).end();
  }
};
module.exports = {
  create,
  read,
  readId,
};
