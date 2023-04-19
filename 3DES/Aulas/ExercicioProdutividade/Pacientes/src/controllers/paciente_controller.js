const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const loadView = async (req, res) => {
  let dados = await read();
  res.render("paciente", { dados });
};

const read = async (req, res) => {
  try {
    let paciente = await prisma.paciente.findMany();
    return paciente ;
  } catch (err) {
    res.status(500).json(err).end();
  }
};

const create = async (req, res) => {
  try {
    let parse = {
      nomeCompleto: req.body.nomeCompleto,
      nascimento: req.body.nascimento,
      peso: Number(req.body.peso),
      altura: Number(req.body.altura),
    };

    let paciente = await prisma.paciente.create({
      data: parse,
    });
    res.redirect("/");
  } catch (err) {
    res.status(500).json(err).end();
    console.log(err);
  }
};

const update = async (req, res) => {
  try {
    let paciente = await prisma.paciente.update({
      where: {
        id: req.params.id,
      },
      data: req.body,
    });
    res.status(200).json(paciente).end();
  } catch (err) {
    res.status(500).json(err).end();
  }
};

const excluir = async (req, res) => {
  try {
    let paciente = await prisma.paciente.delete({
      where: {
        id: req.params.id,
      },
    });
    res.status(204).json(paciente).end();
  } catch (err) {
    res.status(500).json(err).end();
  }
};

module.exports = {
  loadView,
  read,
  create,
  update,
  excluir,
};
