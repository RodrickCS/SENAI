const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const loadViewEquipamentos = async (req, res) => {
  let dados = await ler();
  dados = dados.map(dado => {
    dado.equipamento = decodeURIComponent(dado.equipamento);
    dado.descricao = decodeURIComponent(dado.descricao);

    return dado;
  });
  res.render("equipamentos", { dados });
};

const criar = async (req, res) => {
  try {
    let equip = await prisma.equipamentos.create({
      data: req.body,
    });
    res.status(201).json(equip).end();
  } catch (err) {
    res.status(500).json(err).end();
  }
};

const ler = async (req, res) => {
  try {
    let equip = await prisma.equipamentos.findMany();
    return equip;
  } catch (err) {
    res.status(500).json(err).end();
  }
};
const lerComentarios = async (req, res) => {
  try {
    let equip = await prisma.comentarios.findMany({
      where: {
        equipamento: Number(req.params.id),
      },
    });
    res.status(200).json(equip).end();
  } catch (err) {
    res.status(500).json(err).end();
  }
};

const addComentario = async (req, res) => {
  try {
    let equip = await prisma.comentarios.create({
      data: req.body,
    });
    res.status(201).json(equip).end();
  } catch (err) {
    res.status(500).json(err).end();
  }
};

module.exports = {
  criar,
  ler,
  addComentario,
  lerComentarios,
  loadViewEquipamentos,
};
