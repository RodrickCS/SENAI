const toCreate = (model) => {
    return `CALL solicita_um_item(${model.num_sol},${model.cod_depto},${model.cod_func},${model.cod_produto},${model.qtde},${model.valor}) `
}

const toCreateProd = (model) => {
    return `INSERT INTO PRODUTOS VALUES(${model.cod_produto},'${model.nome_produto}')`
}

const toReadProd = () => {
    return 'SELECT * FROM produtos'
}

const toCreateDepto = (model) => {
    return `INSERT INTO departamentos VALUES (${model.cod_depto}, '${model.nome_depto}')`
}

const toDeleteDeptos = (model) => {
    return `DELETE FROM departamentos WHERE cod_depto = ${model.cod_depto} `
}

const toSearchProdDepto = (model) => {
    return `SELECT nome_depto FROM vw_solicitacoes WHERE nome_produto like '%${model.nome_produto}%'`
}

const toSearchFuncSol = (model) => {
    return `SELECT COUNT(num_sol) AS total_de_solicitacoes FROM solicitacoes WHERE cod_func = ${model.cod_func}  `
}

const toSeachDate = (model) => {
    return `SELECT * FROM solicitacoes where data_sol like '%${model.data_sol}%'`
}
module.exports = {
    toCreate,
    toCreateProd,
    toReadProd,
    toCreateDepto,
    toDeleteDeptos,
    toSearchProdDepto,
    toSearchFuncSol,
    toSeachDate
}