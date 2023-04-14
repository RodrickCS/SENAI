const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const criar = async (req, res) => {
  let format = {
    descricao: req.body.descricao,
    colaborador: Number(req.body.colaborador),
    executor: Number(req.body.executor),
  };
  let os = await prisma.os.create({
    data: format,
  });
  res.redirect("/?msg=OS criada com sucesso!");
};

const alterar = async (req, res) => {
  let format = {
    id: Number(req.body.id),
    descricao: req.body.descricao,
    executor: Number(req.body.executor),
  };
  let os = await prisma.os.update({
    data: format,
    where: {
      id: Number(req.body.id),
    },
  });
  res.redirect("/?msg=Os alterada!");
};

const concluir = async (req, res) => {
  let os = await prisma.os.update({
    data: { encerramento: new Date() },
    where: {
      id: Number(req.params.id),
    },
  });
  res.redirect("/?msg=OS Concluída com sucesso!");
};

const excluir = async (req, res) => {
  let os = await prisma.os.delete({
    where: {
      id: Number(req.params.id),
    },
  });
  res.redirect("/?msg=OS excluída com sucesso!");
};

module.exports = {
  criar,
  alterar,
  concluir,
  excluir,
};
