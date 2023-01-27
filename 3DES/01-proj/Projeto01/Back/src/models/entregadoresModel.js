const read = () => {
  return "select * from entregadores";
};

const login = (model) => {
  return `select id_entregador, nome from entregadores where email = '${model.email}' and senha = '${model.senha}'`
}



module.exports = {
  read,
  login,
};
