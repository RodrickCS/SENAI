const express = require("express");
const cors = require("cors");

const setorRoutes = require("./src/routes/setorRoutes");
const produtosRoutes = require("./src/routes/produtosRoutes");
const vendedorRoutes = require("./src/routes/vendedorRoutes");
const vendaRoutes = require("./src/routes/vendaRoutes");
const detalheRoutes = require("./src/routes/detalheRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(setorRoutes);
app.use(produtosRoutes);
app.use(vendedorRoutes);
app.use(vendaRoutes);
app.use(detalheRoutes);

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
