const create = (model) => {
  return `insert into tarefas values (default,'${model.descricao}', curtime(), null, default)`;
};

const readAbertas = () => {
  return `select * from tarefas where status = 1`;
};

const readFinalizadas = () => {
  return `select * from tarefas where status = 2 AND horario_encerramento <> '00:00:00'`;
};

const readCanceladas = () => {
  return `select * from tarefas where status = 3 AND horario_encerramento <> '00:00:00'`;
};

const cancelarTarefa = (model) => {
  return `update tarefas set status = 3, horario_encerramento = curtime() where id_tarefa = ${model.id_tarefa}`;
};

const finalizaTarefa = (model) => {
  return `update tarefas set status = 2, horario_encerramento = curtime() where id_tarefa = ${model.id_tarefa}`;
};

module.exports = {
  create,
  readAbertas,
  readFinalizadas,
  readCanceladas,
  cancelarTarefa,
  finalizaTarefa,
};
