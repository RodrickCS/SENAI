const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const loadView = async (req, res) => {
  let dados = await readVw();
  res.render("paciente", { dados });
};

const readVw = async (req, res) => {
  try {
    let dados = await prisma.$queryRaw`SELECT 
    *, 
    TIMESTAMPDIFF(YEAR, nascimento, CURDATE()) AS idade, 
    ROUND(peso / POWER(altura, 2), 1) AS imc, 
    CASE 
      WHEN peso / POWER(altura, 2) < 18.5 THEN 'Abaixo do peso' 
      WHEN peso / POWER(altura, 2) < 25 THEN 'Peso normal' 
      WHEN peso / POWER(altura, 2) < 30 THEN 'Sobrepeso' 
      WHEN peso / POWER(altura, 2) < 35 THEN 'Obesidade grau I' 
      WHEN peso / POWER(altura, 2) < 40 THEN 'Obesidade grau II' 
      ELSE 'Obesidade grau III ou mórbida' 
    END AS diagnostico
  FROM Paciente;`;    
    return dados;
  } catch (err) {
    res.status(500).json(err).end();
  }
};

const read = async (req, res) => {
  try {
    let paciente = await prisma.paciente.findMany();
    return paciente;
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
    let parse = {
      nomeCompleto: req.body.nomeCompleto,
      nascimento: req.body.nascimento,
      peso: Number(req.body.peso),
      altura: Number(req.body.altura),
    };

    let paciente = await prisma.paciente.update({
      where: {
        id: Number(req.params.id),
      },
      data: parse,
    });
    res.status(200).json(paciente).end();
  } catch (err) {
    res.status(500).json(err).end();
    console.log(err);
  }
};

const excluir = async (req, res) => {
  try {
    let paciente = await prisma.paciente.delete({
      where: {
        id: Number(req.params.id),
      },
    });
    res.status(204).json(paciente).end();
  } catch (err) {
    res.status(500).json(err).end();
    console.error(err);
  }
};

module.exports = {
  loadView,
  read,
  create,
  update,
  excluir,
};
