const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const criar = async (req, res) => {
    let format = {
        comentario: req.body.comentario,
        os: Number(req.body.id),
        colaborador: Number(req.body.matricula),
    }
    let os = await prisma.comentario.create({
        data: format
    })
    res.redirect('/?msg=Comentário criado com sucesso!')
}

module.exports = {
    criar
}