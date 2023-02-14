const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const read = async (req, res) => {
  let vendedor = await prisma.vendedor.findMany();
  res.status(200).json(vendedor).end();
};

const create = async (req, res) => {
  if (req.body.nome == "" || req.body.salario == 0 || req.body.idSetor == 0) {
    res.status(400).json({ msg: "Preencha tudo" }).end();
  } else {
    try {
      let vendedor = await prisma.vendedor.create({
        data: req.body,
      });
      res.status(201).json(vendedor).end();
    } catch (err) {
      res.status(500).json(err).end();
    }
  }
};

const readId = async (req, res) => {
  try {
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
  } catch (err) {
    res.status(500).json(err).end();
  }
};

module.exports = { read, create, readId };
