
const toCreate = (dados, file) => {
    if (file != null) {
        dados.foto = file.buffer.toString('base64')
        return `insert into usuarios values ('${dados.login}','${dados.nome}','${dados.nascimento}', '${dados.telefone}', '${dados.avatar}')`
    } else
        return `insert into usuarios values ('${dados.login}','${dados.nome}','${dados.nascimento}', '${dados.telefone}', null)`
}

const toReadAll = () => {
    return 'select * from usuarios order by login'
}

const toAscii = (dados) => {
    dados.forEach(d => {
        if (d.foto != null) d.foto = d.foto.toString('ascii')
    })
    return dados
}

const toDel = (dados) => {
    return `DELETE FROM usuarios WHERE login = '${dados.login}'`
}



module.exports = {
    toCreate,
    toReadAll,
    toAscii,
    toDel
}