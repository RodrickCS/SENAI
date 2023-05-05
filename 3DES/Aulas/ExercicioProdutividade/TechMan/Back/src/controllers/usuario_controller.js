const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const loadViewLogin = async (req, res) => {
  res.render("login");
};

const vw_login = async (req, res) => {
  try {
    let usuario =
      await prisma.$queryRaw`SELECT u.id AS Usuario, u.perfil_id AS Perfil, p.perfil AS Role FROM usuarios u INNER JOIN perfis p
      ON u.perfil_id = p.id
       WHERE senha = ${req.body.senha}`;

    if (usuario.length === 0) {
      res.redirect("/login");
    } else {
      res.redirect("equipamentos");
    }
  } catch (err) {
    res.status(500).json(err).end();
  }
};

module.exports = {
  loadViewLogin,
  vw_login,
};