const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const read = async (req, res) => {
  try {
    let vendas = await prisma.vendas.findMany();
    res.status(200).json(vendas).end();
  } catch (err) {
    res.status(500).json(err).end();
  }
};

const readId = async (req, res) => {
  try {
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
  } catch (err) {
    res.status(500).json(err).end();
  }
};

const create = async (req, res) => {
  const originalInfo = req.body;
  originalInfo.data = new Date(req.body.data);

  const info = Object.assign({}, originalInfo);
  delete info.idProd;
  delete info.quantidade;
  try {
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
    
    //  OR

    // let venda = await prisma.vendas.create({
    //   data: {
    //     data: new Date(),
    //     idVendedor: info.idVendedor,
    //     detalhe: {
    //       create: info.detalhes,
    //     },
    //   },
    // });

    const form = {
      vendas: venda,
      detalhe: detalhe,
    };

    res.status(201).json(form).end();
  } catch (err) {
    res.status(500).json(err).end();
  }
};

module.exports = {
  read,
  create,
  readId,
};
