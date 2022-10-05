const toReadAll = () => {
    return 'SELECT * FROM vw_solicitacoes'
}

const toCreate = (model) => {
    return `CALL solicita_um_item(${model.num_sol},${model.cod_depto},${model.cod_func},${model.cod_produto},${model.qtde},${model.valor}) `
}

module.exports = {
    toReadAll,
    toCreate
}