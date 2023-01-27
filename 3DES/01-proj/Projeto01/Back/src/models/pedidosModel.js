const create = (dado) => {
  return `insert into pedidos values (default,'${dado.cliente}','${dado.endereco}','${dado.produto}', curdate(), curtime(), default,default,(SELECT FLOOR(RAND()*(4)+1)))`;
};

const readAllPendente = () => {
  return `select * from pedidos where hora_fim = '00:00:00' or hora_entrega = '00:00:00'`;
};

const readEntregue = () => {
  return `select * from pedidos where hora_fim <> '00:00:00'`;
};

const readByEntregador = (model) => {
  return `select * from vw_chegou where id_entregador = ${model.id_entregador} AND hora_fim = '00:00:00'`;
};

const readEntregador = () => {
  return "select * from vw_chegou";
};

const readCozinha = () => {
  return "select * from vw_cozinha";
};

const readEntregando = () => {
  return "select * from vw_caminho";
};

const updateEntregando = (model) => {
  return `update pedidos set hora_entrega = curtime() where id_pedido = ${model.id_pedido}`;
};

const updateFim = (model) => {
  return `update pedidos set hora_fim = curtime() where id_pedido = ${model.id_pedido}`;
};

module.exports = {
  create,
  readAllPendente,
  readEntregador,
  readEntregando,
  readCozinha,
  updateEntregando,
  updateFim,
  readByEntregador,
  readEntregue
};
