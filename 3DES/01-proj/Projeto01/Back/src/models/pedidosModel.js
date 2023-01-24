const create = (dado) => {
  return `insert into pedidos values (default,'${dado.cliente}','${dado.endereco}','${dado.produto}', curdate(), curtime(), default,default,(SELECT FLOOR(RAND()*(10-1+1)+1))`;
};

const readAll = () => {
  return `select * from pedidos`;
};

const readFim = () => {
  return 'select * from pedidos where hora_fim <> "00:00:00"';
};

const readEntregando = () => {
  return 'select * from pedidos where hora_entrega <> "00:00:00"';
};

const updateEntregando = () => {
  return "update pedidos set hora_entrega = curtime()";
};

const updateFim = () => {
  return "update pedidos set hora_fim = curtime()";
};

module.exports = {
  create,
  readAll,
  readFim,
  readEntregando,
  updateEntregando,
  updateFim,
};
