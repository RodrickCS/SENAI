const create = (dado) => {
  return `insert into pedidos values (default,'${dado.cliente}','${dado.endereco}','${dado.produto}', curdate(), curtime(), default,default,(SELECT FLOOR(RAND()*(4)+1)))`;
};

const readAll = () => {
  return `select * from pedidos`;
};

const readChegou = () => {
  return "select * from vw_chegou";
};

const readCozinha = () => {
  return "select * from vw_cozinha";
};

const readEntregando = () => {
  return "select * from vw_caminho";
};

const updateEntregando = (dados) => {
  return `update pedidos set hora_entrega = curtime() where id_pedido = ${dados.id_pedido}`;
};

const updateFim = (dados) => {
  return `update pedidos set hora_fim = curtime() where id_pedido = ${dados.id_pedido}`;
};

module.exports = {
  create,
  readAll,
  readChegou,
  readEntregando,
  readCozinha,
  updateEntregando,
  updateFim,
};
