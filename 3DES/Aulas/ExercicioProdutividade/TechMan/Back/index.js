require("dotenv").config();
const PORT = process.env.PORT || 3000;
const express = require("express");
const methodOverride = require("method-override");

const usuarioRoutes = require("./src/routes/usuarios_routes");

const app = express();
app
  .set("view engine", "pug")
  .use(express.json())
  .use(express.urlencoded({ extended: true }))
  .use(express.static("public"))
  .use(methodOverride("_method"))
  .use(usuarioRoutes);
app.listen(PORT, () => console.log("Servidor rodando na porta " + PORT));